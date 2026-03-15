# SEO Monitoring Scripts

Scripts for tracking Covertech website search rankings and page performance.

## Scripts

### 1. `create-seo-tables.sql`
Supabase DDL for the two monitoring tables (`seo_rankings`, `seo_health`). Run once in Supabase SQL Editor.

### 2. `gsc-rank-scan.js`
Fetches Google Search Console data (last 7 days) and inserts into `seo_rankings`.

### 3. `pagespeed-check.js`
Runs PageSpeed Insights on key pages (mobile + desktop) and inserts into `seo_health`.

## Environment Variables

| Variable | Required by | Description |
|---|---|---|
| `GOOGLE_SERVICE_ACCOUNT_JSON` | gsc-rank-scan | Google service account key (JSON string) |
| `SUPABASE_SERVICE_ROLE_KEY` | both scripts | Supabase service role key |
| `DISCORD_WEBHOOK_WEBSITE` | both (optional) | Discord webhook URL for notifications |

## Setup

1. Run `create-seo-tables.sql` in Supabase SQL Editor
2. Create a Google Cloud service account with Search Console API access
3. Add the service account as a user in GSC for `covertech.company`
4. Set environment variables

## Manual Run

```bash
# GSC rank scan
GOOGLE_SERVICE_ACCOUNT_JSON='{"type":"service_account",...}' \
SUPABASE_SERVICE_ROLE_KEY=your_key \
npm run gsc:scan

# PageSpeed check
SUPABASE_SERVICE_ROLE_KEY=your_key \
npm run pagespeed:check
```

## Cron Usage

Both scripts exit 0 when credentials are missing, making them safe for cron/CI where env vars may not be configured yet.

Recommended schedule:
- `gsc:scan` — daily (GSC data has ~2 day lag)
- `pagespeed:check` — daily or weekly
