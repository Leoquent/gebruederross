## 2024-05-18 - Lazy-loading Images Below the Fold
**Learning:** The raw HTML/JS stack relies on manually specifying `loading="lazy"` for images to defer offscreen images. Large images like `team-gebrueder-ross.webp` block LCP/page speed if not lazy-loaded because they appear below the fold.
**Action:** Always append `loading="lazy" decoding="async"` to images appearing below the fold, such as in footer and about sections, for static HTML files to save bandwidth and improve Largest Contentful Paint (LCP).
