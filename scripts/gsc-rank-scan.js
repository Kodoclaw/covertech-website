#!/usr/bin/env node

/**
 * GSC Rank Scan — fetches Search Console data and stores in Supabase
 */

const { google } = require('googleapis');

const SUPABASE_URL = 'https://qggdvanlzqwcioifhbsi.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const SITE_URL = 'sc-domain:covertech.company';

async function main() {
  // --- Check credentials ---
  const credJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!credJson) {
    console.warn('⚠ GOOGLE_SERVICE_ACCOUNT_JSON not set — skipping GSC scan');
    process.exit(0);
  }
  if (!SUPABASE_KEY) {
    console.warn('⚠ SUPABASE_SERVICE_ROLE_KEY not set — skipping GSC scan');
    process.exit(0);
  }

  // --- Auth ---
  let creds;
  try {
    creds = JSON.parse(credJson);
  } catch (e) {
    console.error('✗ Failed to parse GOOGLE_SERVICE_ACCOUNT_JSON:', e.message);
    process.exit(1);
  }

  const auth = new google.auth.GoogleAuth({
    credentials: creds,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });

  const searchconsole = google.searchconsole({ version: 'v1', auth });

  // --- Date range: last 7 days ---
  const endDate = new Date();
  endDate.setDate(endDate.getDate() - 1);
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 7);

  const fmt = (d) => d.toISOString().split('T')[0];

  console.log(`Scanning GSC: ${fmt(startDate)} → ${fmt(endDate)}`);

  // --- Query GSC ---
  let rows;
  try {
    const res = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: fmt(startDate),
        endDate: fmt(endDate),
        dimensions: ['query', 'page', 'country'],
        rowLimit: 500,
      },
    });
    rows = res.data.rows || [];
  } catch (e) {
    console.error('✗ GSC API error:', e.message);
    process.exit(1);
  }

  console.log(`Found ${rows.length} rows`);

  if (rows.length === 0) {
    console.log('No data to insert.');
    return;
  }

  // --- Insert to Supabase ---
  const records = rows.map((row) => ({
    date: fmt(endDate),
    query: row.keys[0],
    page: row.keys[1],
    country: row.keys[2],
    clicks: row.clicks || 0,
    impressions: row.impressions || 0,
    position: row.position ? Math.round(row.position * 100) / 100 : null,
  }));

  // Batch insert in chunks of 100
  const BATCH_SIZE = 100;
  let inserted = 0;
  for (let i = 0; i < records.length; i += BATCH_SIZE) {
    const batch = records.slice(i, i + BATCH_SIZE);
    const res = await fetch(`${SUPABASE_URL}/rest/v1/seo_rankings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(batch),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`✗ Supabase insert error (batch ${i}):`, res.status, text);
      process.exit(1);
    }
    inserted += batch.length;
  }

  console.log(`✓ Inserted ${inserted} rows to seo_rankings`);

  // --- Discord summary ---
  const webhookUrl = process.env.DISCORD_WEBHOOK_SEO;
  if (!webhookUrl) {
    console.warn('⚠ DISCORD_WEBHOOK_SEO not set — skipping notification');
    return;
  }

  // Top 10 by impressions
  const top10 = [...records]
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 10);

  const lines = top10.map(
    (r, i) =>
      `${i + 1}. **${r.query}** — ${r.impressions} imp, ${r.clicks} clicks, pos ${r.position}`
  );

  const embed = {
    embeds: [
      {
        title: '📊 GSC Rank Scan — covertech.company',
        description: `**${fmt(startDate)} → ${fmt(endDate)}**\nTotal rows: ${rows.length}\n\n**Top 10 by Impressions:**\n${lines.join('\n')}`,
        color: 0x4285f4,
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
