## 2024-05-18 - Lazy-loading Images Below the Fold
**Learning:** The raw HTML/JS stack relies on manually specifying `loading="lazy"` for images to defer offscreen images. Large images like `team-gebrueder-ross.webp` block LCP/page speed if not lazy-loaded because they appear below the fold.
**Action:** Always append `loading="lazy" decoding="async"` to images appearing below the fold, such as in footer and about sections, for static HTML files to save bandwidth and improve Largest Contentful Paint (LCP).

## 2024-05-18 - Scroll Event Throttling with requestAnimationFrame
**Learning:** Having multiple unthrottled `scroll` event listeners on the `window` can cause layout thrashing and jank during rapid scrolling, especially if DOM manipulations (like class toggling) happen synchronously.
**Action:** Always combine related scroll event handlers and throttle them using `window.requestAnimationFrame`. This ensures DOM updates happen at most once per frame, reducing main thread blocking.
