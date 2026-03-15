-- SEO monitoring tables for Covertech website
-- Run this in Supabase SQL Editor or via migration

CREATE TABLE IF NOT EXISTS seo_rankings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  query TEXT NOT NULL,
  page TEXT NOT NULL,
  clicks INTEGER DEFAULT 0,
  impressions INTEGER DEFAULT 0,
  position DECIMAL(5,2),
  country TEXT DEFAULT 'tha',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS seo_health (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  page TEXT NOT NULL,
  performance_score INTEGER,
  lcp DECIMAL(6,3),
  fid DECIMAL(6,3),
  cls DECIMAL(6,4),
  ttfb DECIMAL(6,3),
  mobile_score INTEGER,
  desktop_score INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_seo_rankings_date ON seo_rankings (date);
CREATE INDEX IF NOT EXISTS idx_seo_rankings_query ON seo_rankings (query);
CREATE INDEX IF NOT EXISTS idx_seo_health_date ON seo_health (date);
CREATE INDEX IF NOT EXISTS idx_seo_health_page ON seo_health (page);
