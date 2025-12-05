# Image Size & Contrast Fix Report

**Branch:** `perf-seo-images-contrast`  
**Date:** November 29, 2025

---

## Summary

This update addresses two Lighthouse accessibility/performance issues:
1. **Oversized images** - Images served larger than displayed on mobile
2. **Low contrast text** - Small gray text on dark backgrounds failing WCAG contrast

---

## Phase 1: Image Optimizations

### Changes Made

| File | Image | Changes |
|------|-------|---------|
| `components/Hero.tsx` | Logo (LCP) | Added `sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 672px"` to serve appropriately sized images on mobile. Kept `priority` as this is the true LCP element. Improved alt text. |
| `components/Navigation.tsx` | Navbar logo | Reduced dimensions from 220×73 to 168×56 (matching actual CSS `h-14` = 56px). Added `sizes="168px"`. **Removed `priority`** since hero logo is the LCP element. |
| `components/Footer.tsx` | Footer logo | Reduced dimensions from 250×80 to 200×67. Added `sizes="200px"`. Improved alt text. |

### Expected Impact

- **Reduced image bytes on mobile:** Browser will now request smaller image variants via Next.js Image Optimization
- **Faster LCP:** Only the hero logo has `priority`, preventing resource contention
- **Better FCP:** Smaller images = faster decode time

---

## Phase 2: Contrast Fixes

### Changes Made

| File | Element | Before | After |
|------|---------|--------|-------|
| `components/Footer.tsx` | "Proudly Veteran-Owned..." text | `text-gray-500` | `text-gray-400` |
| `app/service-areas/[area]/ServiceAreaContent.tsx` | Breadcrumb separators "/" | `text-gray-500` | `text-gray-400` |

### Contrast Ratios

On dark background (#141414):
- `text-gray-500` (#6b7280): ~3.7:1 ratio (fails WCAG AA for small text)
- `text-gray-400` (#9ca3af): ~5.2:1 ratio (passes WCAG AA)

### Visual Impact

The changes are subtle - text is slightly brighter but remains on-brand with the dark theme. No dramatic visual change.

---

## Files Changed

1. `components/Hero.tsx` - Added `sizes` prop to logo image
2. `components/Navigation.tsx` - Reduced dimensions, added `sizes`, removed `priority`
3. `components/Footer.tsx` - Reduced dimensions, added `sizes`, fixed contrast
4. `app/service-areas/[area]/ServiceAreaContent.tsx` - Fixed breadcrumb separator contrast
5. `docs/perf-seo-images-contrast.md` - This documentation

---

## Verification

- ✅ `npm run build` passes
- ✅ All pages render correctly
- ✅ Images display at correct sizes
- ✅ Text remains readable and on-brand

---

## Expected Lighthouse Impact

| Metric | Expected Change |
|--------|-----------------|
| **Performance > LCP** | Improved - smaller images on mobile |
| **Performance > FCP** | Improved - less resource contention |
| **Accessibility > Contrast** | Fixed - gray text now passes WCAG AA |
| **Best Practices > Images** | Fixed - images no longer oversized |

