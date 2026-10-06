## 2023-10-06 - Missing Lazy Loading for Static Images
**Learning:** The simple static HTML architecture of this project did not have built-in image optimization or lazy-loading out of the box, leading to potentially unnecessary initial bandwidth usage for below-the-fold assets like the team image and footer logos.
**Action:** When adding new images that appear below the fold, always manually include `loading="lazy" decoding="async"` to preserve fast initial page load times and minimize bandwidth overhead.
