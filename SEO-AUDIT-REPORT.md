# Best Studio — Technical SEO Audit Report
**Date:** 2026-06-28  
**Site:** https://best-studio-6yx.pages.dev  
**Stack:** Astro + Cloudflare Pages

---

## ✅ Changes Implemented

### P0 — Critical Fixes

#### 1. Fixed Title Template Duplication Bug
**File:** `src/pages/[...blog]/index.astro`, `src/pages/topics/[slug].astro`

**Issue:** Post frontmatter `metadata.title` values already included `| Best Studio`, but the Astro SEO component's `titleTemplate` was also appending `| Best Studio` — resulting in `Title | Best Studio | Best Studio` in the rendered `<title>` tag.

**Fix:** When `post.metadata?.title` is present (custom frontmatter title), the layout now sets `ignoreTitleTemplate: true`, suppressing the duplicate suffix. Same fix applied to topic pages.

---

#### 2. Added JSON-LD Structured Data
**File:** `src/components/common/JsonLd.astro` (new), `src/layouts/Layout.astro`, `src/pages/[...blog]/index.astro`

Added the following schema types:

| Schema | Scope | Notes |
|---|---|---|
| `WebSite` | Every page | Includes `SearchAction` for potential Sitelinks Searchbox |
| `Organization` | Every page | Includes name, URL, logo |
| `Article` | Every guide post | Includes headline, datePublished, dateModified, author, image, URL |
| `FAQPage` | Guide posts with `## FAQ` sections | Auto-extracted by remark plugin |
| `BreadcrumbList` | Every guide post | Home > 指南 > [Category] > Article |

The `FAQPage` schema is generated automatically by a new remark plugin (`faqExtractRemarkPlugin` in `src/utils/frontmatter.ts`) that parses `## FAQ` sections from markdown — no manual duplication needed.

**Canonical verification:** Canonical URLs were already being generated correctly via `getCanonical()` + `astro-seo`. Confirmed all pages pass canonical through the metadata pipeline.

---

#### 3. Added Breadcrumb Navigation to Articles
**File:** `src/components/blog/SinglePost.astro`

Added a visible `<nav aria-label="Breadcrumb">` above each article header:
```
首页 / 指南 / [Category] / Article Title
```
Paired with `BreadcrumbList` JSON-LD for Google SERP display.

---

#### 4. Open Graph & Twitter Card
No changes needed — already correctly wired through `astro-seo` + site `config.yaml`. OG images default to `/assets/images/default.png` (1200×628). Per-post images will override when `image:` is set in frontmatter.

**Verified working:**
- `og:title`, `og:description`, `og:image`, `og:type` — ✅
- `twitter:card: summary_large_image` — ✅
- `og:url` / canonical — ✅

---

### P1 — High Impact for Rankings

#### 5. Author + updateDate Added to All 20 Posts
**Files:** All `src/data/post/*.md`

Added to every post's frontmatter:
```yaml
author: 'Best Studio'
updateDate: 2026-06-28T00:00:00Z
```

The `updateDate` is now surfaced in the article header as `更新于 [date]` and propagated to Article schema's `dateModified` field. Google uses freshness signals for ranking.

---

#### 6. Reading Time Localized to Chinese
**File:** `src/components/blog/SinglePost.astro`

Changed `X min read` → `X 分钟阅读` to match the site's Chinese audience.

---

#### 7. Improved Internal Linking (RelatedPosts)
**Files:** `src/utils/blog.ts`, `src/components/blog/RelatedPosts.astro`

Enhanced `getRelatedPosts()` scoring:
- Same `topicCluster` → **+8 points** (new — strongest signal)  
- Same category → +5 points (existing)
- Shared tags → +1 point each (existing)

Also added `topicCluster` to the `Post` type and propagated it through `getNormalizedPost()`. Related posts now show highly relevant cluster content (e.g., a Predoc guide will link to RA, Cover Letter, and Advisor guides).

UI text changed from `"Related Posts"` / `"View All Posts"` → `"相关文章"` / `"查看全部指南"`.

---

### P2 — CTR & Technical Improvements

#### 8. Robots.txt Fixed
**File:** `public/robots.txt`

Before: `User-agent: *\nDisallow:` (missing Allow, missing Sitemap directives)

After:
```
User-agent: *
Allow: /

Disallow: /tag/
Disallow: /cdn-cgi/

Sitemap: https://best-studio-6yx.pages.dev/sitemap-index.xml
Sitemap: https://best-studio-6yx.pages.dev/sitemap.xml
```

Tag pages (`/tag/*`) are already `robots: { index: false }` in config.yaml — now also blocked in robots.txt for consistency.

---

#### 9. Sitemap Updated with `<lastmod>` Dates
**File:** `public/sitemap.xml`

Added `<lastmod>2026-06-28</lastmod>` to all 33 URL entries. High-priority guide pages raised to `0.9`. The auto-generated Astro sitemap (via `@astrojs/sitemap`) now also excludes tag pages via filter config in `astro.config.ts`.

---

#### 10. Category Page Titles & Descriptions Localized
**File:** `src/pages/[...blog]/[category]/[...page].astro`

Before: `Category 'PhD 申请'` (English, untranslated)  
After: `PhD 申请` with a Chinese meta description about the category content.

---

## ⚠️ Remaining Issues (Manual Review Needed)

### High Priority

1. **No featured images on any guide posts**  
   All 20 posts have no `image:` field in frontmatter. OG previews use the generic default image. Each post should have a unique 1200×628 OG image for significantly better CTR on social/search.  
   **Recommendation:** Create per-post cover images and add `image: ~/assets/images/[slug].png` to each post.

2. **Site domain mismatch**  
   Config says `site: 'https://best-studio-6yx.pages.dev'` but if a custom domain (e.g. `best-studio.com`) is used, canonical URLs and OG URLs will be wrong. Update `src/config.yaml` → `site:` field when the domain changes.

3. **Google Search Console not verified for all domains**  
   The Google verification ID (`dUd_49rtQOZWyPjVsD4im7RsB8I5JdMybI-afzoPZrg`) is configured but only covers the `.pages.dev` subdomain. Submit sitemaps manually in GSC after deploying.

4. **No dedicated Author page**  
   Articles show `author: 'Best Studio'` but there is no `/author/` page or `Person` schema with credentials. Adding an About-style author schema with MIT affiliation and research background would significantly strengthen E-E-A-T signals.

5. **FAQ extraction depends on markdown format**  
   The `faqExtractRemarkPlugin` parses `**Q：**` / `**A：**` bold paragraphs within `## FAQ` sections. Any FAQ content using different formatting (H3 questions, unbolded text, etc.) will not be picked up. Review the generated JSON-LD at build time using Google Rich Results Test.

### Medium Priority

6. **Placeholder topic pages are not hub pages**  
   The `/topics/[slug]` pages for "Planned" articles show a minimal placeholder. These pages are indexed (no noindex) but have thin content. Consider either:
   - Noindexing unwritten topics: add `robots: { index: false }` to placeholder metadata
   - OR build out the hub content (500-1000 word intro + FAQs) before indexing

7. **No pagination `rel=prev/next`**  
   The `/guides` list pagination doesn't emit `<link rel="prev">` / `<link rel="next">` tags. Google no longer uses these for indexing, but they help with crawl efficiency. The Astro Pagination component could be extended to emit them.

8. **Category URLs use URL-encoded Chinese characters**  
   `/category/%E7%A7%91%E7%A0%94%E7%BB%8F%E5%8E%86` — these work fine technically, but English slugs (e.g. `/category/research-experience`) would be cleaner and rank for English keywords too. This requires changing `category:` values in post frontmatter.

9. **No `<link rel="alternate" hreflang>` tags**  
   All content is Chinese (`lang="zh-CN"`). No multilingual issues currently, but if English content is added later, hreflang will be needed.

10. **Core Web Vitals — not measured**  
    No LCP/CLS/INP optimization was implemented (P3 from original spec). The site uses Tailwind + Astro which produces lean HTML, but images should be audited once added. Use Lighthouse or PageSpeed Insights on the deployed URL to get baseline metrics.

### Low Priority

11. **GA / Analytics not configured**  
    `analytics.vendors.googleAnalytics.id` is `null` in `config.yaml`. Set this to your GA4 measurement ID to track traffic.

12. **RSS feed**  
    `/rss.xml` exists and is linked. Verify it's being submitted to Feedly/Google News if applicable.

13. **`twitter:handle` and `twitter:site` are blank**  
    In `config.yaml`. If a Twitter/X account exists, fill these in for proper Twitter Card attribution.

---

## 📋 File Change Summary

| File | Change |
|---|---|
| `src/pages/[...blog]/index.astro` | Added `ignoreTitleTemplate`, Article + FAQ + Breadcrumb JsonLd, `head` slot |
| `src/pages/topics/[slug].astro` | Added `ignoreTitleTemplate: true` |
| `src/pages/[...blog]/[category]/[...page].astro` | Chinese title + meta description |
| `src/layouts/Layout.astro` | Added JsonLd import, `sitewide` schemas, `head` slot |
| `src/layouts/PageLayout.astro` | Pass-through `head` slot |
| `src/components/common/JsonLd.astro` | **New** — WebSite, Organization, Article, FAQPage, BreadcrumbList schemas |
| `src/components/blog/SinglePost.astro` | Breadcrumb nav, `更新于` date, `分钟阅读` reading time |
| `src/components/blog/RelatedPosts.astro` | topicCluster scoring, Chinese UI labels |
| `src/utils/blog.ts` | topicCluster in Post, faqs from remark, improved related post scoring |
| `src/utils/frontmatter.ts` | New `faqExtractRemarkPlugin` |
| `src/types.d.ts` | Added `faqs` and `topicCluster` to Post interface |
| `astro.config.ts` | Registered `faqExtractRemarkPlugin`, sitemap filter for tag pages |
| `public/robots.txt` | Fixed — Allow all, Disallow /tag/, added Sitemap directives |
| `public/sitemap.xml` | Added `<lastmod>` to all 33 entries, raised guide priorities |
| `src/data/post/*.md` (×20) | Added `author: 'Best Studio'` and `updateDate: 2026-06-28` |

---

## 🎯 Recommended Next Actions (by priority)

1. Create unique OG images for each guide post (biggest CTR impact)
2. Update `site:` in `config.yaml` to production domain when DNS is set
3. Submit sitemap in Google Search Console
4. Add `googleAnalytics.id` in `config.yaml`
5. Write hub-page content for `/topics/*` placeholder pages, or noindex them
6. Add Twitter/X handle to `config.yaml`
7. Run Google Rich Results Test on a deployed article to verify Article + FAQ schema
8. Run PageSpeed Insights to baseline Core Web Vitals
