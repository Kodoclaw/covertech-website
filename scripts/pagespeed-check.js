#!/usr/bin/env node

/**
 * PageSpeed Health Check — runs Lighthouse via PSI API and stores in Supabase
 */

const SUPABASE_URL = 'https://qggdvanlzqwcioifhbsi.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const PSI_API = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

const PAGES = [
  'https://covertech.company/th',
  'https://covertech.company/th/kansat-eco',
];

const STRATEGIES = ['mobile', 'desktop'];

async function runCheck(url, strategy) {
  const params = new URLSearchParams({ url, strategy, category: 'performance' });
  const res = await fetch(`${PSI_API}?${params}`);

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PSI API ${res.status}: ${text.slice(0, 200)}`);
  }

  const data = await res.json();
  const lhr = data.lighthouseResult;
  const audits = lhr.audits;

  return {
    performance_score: Math.round((lhr.categories.performance.score || 0) * 100),
    lcp: audits['largest-contentful-paint']?.numericValue / 1000 || null,
    cls: audits['cumulative-layout-shift']?.numericValue || null,
    ttfb: audits['server-response-time']?.numericValue / 1000 || null,
    fid: audits['max-potential-fid']?.numericValue / 1000 || null,
  };
}

async function main() {
  if (!SUPABASE_KEY) {
    console.warn('⚠ SUPABASE_SERVICE_ROLE_KEY not set — skipping PageSpeed check');
    process.exit(0);
  }

  const today = new Date().toISOString().split('T')[0];
  const results = [];

  for (const page of PAGES) {
    for (const strategy of STRATEGIES) {
      console.log(`Checking ${page} [${strategy}]...`);
      try {
        const metrics = await runCheck(page, strategy);
        const record = {
          date: today,
          page,
          performance_score: metrics.performance_score,
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
          ttfb: metrics.ttfb,
          [`${strategy}_score`]: metrics.performance_score,
        };

        // For mobile/desktop score columns, we need both strategies
        // Store individual result first
        results.push({ ...record, strategy });

        console.log(
          `  ✓ ${strategy}: score=${metrics.performance_score}, LCP=${metrics.lcp?.toFixed(2)}s, CLS=${metrics.cls?.toFixed(4)}, TTFB=${metrics.ttfb?.toFixed(2)}s`
        );
      } catch (e) {
        console.error(`  ✗ ${strategy} failed:`, e.message);
      }
    }
  }

  if (results.length === 0) {
    console.log('No results to insert.');
    return;
  }

  // Merge mobile + desktop results per page
  const merged = {};
  for (const r of results) {
    if (!merged[r.page]) {
      merged[r.page] = {
        date: r.date,
        page: r.page,
        performance_score: r.performance_score,
        lcp: r.lcp,
        fid: r.fid,
        cls: r.cls,
        ttfb: r.ttfb,
        mobile_score: null,
        desktop_score: null,
      };
    }
    if (r.strategy === 'mobile') merged[r.page].mobile_score = r.performance_score;
    if (r.strategy === 'desktop') merged[r.page].desktop_score = r.performance_score;
    // Use mobile metrics as primary (more important for SEO)
    if (r.strategy === 'mobile') {
      merged[r.page].performance_score = r.performance_score;
      merged[r.page].lcp = r.lcp;
      merged[r.page].fid = r.fid;
      merged[r.page].cls = r.cls;
      merged[r.page].ttfb = r.ttfb;
    }
  }

  const records = Object.values(merged);

  // Insert to Supabase
  const res = await fetch(`${SUPABASE_URL}/rest/v1/seo_health`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(records),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error('✗ Supabase insert error:', res.status, text);
    process.exit(1);
  }

  console.log(`✓ Inserted ${records.length} rows to seo_health`);

  // --- Discord summary ---
  const webhookUrl = process.env.DISCORD_WEBHOOK_SEO;
  if (!webhookUrl) {
    console.warn('⚠ DISCORD_WEBHOOK_SEO not set — skipping notification');
    return;
  }

  const lines = records.map((r) => {
    const emoji = r.mobile_score >= 90 ? '🟢' : r.mobile_score >= 50 ? '🟡' : '🔴';
    return `${emoji} **${r.page.replace('https://covertech.company', '')}**\n  Mobile: ${r.mobile_score} | Desktop: ${r.desktop_score} | LCP: ${r.lcp?.toFixed(2)}s | CLS: ${r.cls?.toFixed(4)} | TTFB: ${r.ttfb?.toFixed(2)}s`;
  });

  const embed = {
    embeds: [
      {
        title: '🏎️ PageSpeed Health — covertech.company',
        description: `**${today}**\n\n${lines.join('\n\n')}`,
        color: 0x34a853,
        timestamp: new Date().toISOString(),
      },
    ],
  };

  try {
    const discordRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(embed),
    });
    if (!discordRes.ok) {
      console.warn('⚠ Discord webhook failed:', discordRes.status);
    } else {
      console.log('✓ Discord notification sent');
    }
  } catch (e) {
    console.warn('⚠ Discord webhook error:', e.message);
  }
}

main().catch((e) => {
  console.error('✗ Unexpected error:', e);
  process.exit(1);
});
