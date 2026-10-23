## 2024-10-16 - Lazy Loading Below-The-Fold Images
**Learning:** This codebase is a simple static site with no build step, meaning runtime optimizations like `loading="lazy"` and `decoding="async"` directly in the HTML are necessary for image performance, rather than relying on a framework or bundler plugin to handle it.
**Action:** When adding or auditing images in raw HTML environments, always manually apply `loading="lazy"` and `decoding="async"` for below-the-fold assets to defer loading and save bandwidth.
