## 2024-05-18 - Lazy-loading Images Below the Fold
**Learning:** The raw HTML/JS stack relies on manually specifying `loading="lazy"` for images to defer offscreen images. Large images like `team-gebrueder-ross.webp` block LCP/page speed if not lazy-loaded because they appear below the fold.
**Action:** Always append `loading="lazy" decoding="async"` to images appearing below the fold, such as in footer and about sections, for static HTML files to save bandwidth and improve Largest Contentful Paint (LCP).

## 2026-11-08 - Throttle Scroll Events
**Learning:** In raw JS architectures without virtual DOM frameworks, unthrottled scroll listeners that perform class toggles (`classList.add`/`remove`) trigger synchronous layout recalculations and main thread blocking, which is especially noticeable on long scrolling pages or mobile.
**Action:** Always wrap DOM mutations inside scroll event listeners with `window.requestAnimationFrame` and a ticking flag to prevent layout thrashing and keep scrolling smooth.
