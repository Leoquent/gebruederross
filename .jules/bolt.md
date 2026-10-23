## 2024-05-24 - Missing lazy loading on images
**Learning:** The simple static website doesn't use any automated build tools that would optimize images. I need to be careful to implement simple web perf improvements directly into HTML.
**Action:** Always add `loading="lazy"` to images that are below the fold.
