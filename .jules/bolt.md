## 2024-05-18 - Lazy-loading Images Below the Fold
**Learning:** The raw HTML/JS stack relies on manually specifying `loading="lazy"` for images to defer offscreen images. Large images like `team-gebrueder-ross.webp` block LCP/page speed if not lazy-loaded because they appear below the fold.
**Action:** Always append `loading="lazy" decoding="async"` to images appearing below the fold, such as in footer and about sections, for static HTML files to save bandwidth and improve Largest Contentful Paint (LCP).
## 2026-11-03 - Debouncing and Synchronizing Scroll Events
**Learning:** The previous implementation had multiple separate scroll event listeners directly manipulating DOM elements without debouncing, leading to layout thrashing and blocking the main thread.
**Action:** When handling frequent events like scroll, wrap the DOM updates inside `window.requestAnimationFrame()` and combine listeners to sync changes with the browser's render cycle, preventing layout thrashing and making scroll performance significantly smoother.
