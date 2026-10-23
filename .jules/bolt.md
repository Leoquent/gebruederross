## 2024-10-12 - Added lazy loading to team image
**Learning:** This static website did not use native lazy loading (`loading="lazy"`) for below-the-fold images, leading to unnecessary bandwidth usage on the initial load.
**Action:** Always check below-the-fold images for `loading="lazy"` and `decoding="async"` attributes to optimize initial page payload.
