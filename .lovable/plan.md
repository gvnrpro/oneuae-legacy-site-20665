
# Awardees 2026 Showcase Page

## Overview
Create a dedicated page at `/awardees/2026` to showcase all 27 award recipients of the One UAE Awards 2026. The page will load data from the existing JSON file and display awardees in a premium, ceremonial grid layout.

## Design Approach
- Dark/neutral background section for the grid (using the existing `bg-foreground` dark section pattern seen on Home and About pages)
- Clean hero header area with light background matching the existing page hero patterns
- Subtle hover effects using the existing `card-premium` pattern (translateY -2px + border glow)
- No heavy animations -- only fade-in reveals consistent with other pages

## What Will Be Built

### 1. New Page: `src/pages/Awardees2026.tsx`

**Hero Section**
- Top padding to clear the fixed navigation
- "Awardees 2026" label in uppercase tracking style (matching the `editorial-label` pattern)
- Large display heading: "Award Recipients"
- Subtitle with the total number of awardees

**Awardees Grid Section**
- Dark background (`bg-foreground text-background`) for a ceremonial, premium feel
- Responsive grid: 1 column on mobile, 2 on tablet, 3-4 on desktop
- JSON order preserved (no alphabetical sorting)

**Each Awardee Card**
- Awardee photo with proper aspect ratio (3:4 portrait), loaded from `/awardees/2026/{image}`
- Full name displayed prominently
- Award title as primary descriptor
- Organization as secondary/muted text
- Alt text format: `"{name} - {award title}"`
- Hover effect: subtle lift (translateY -2px) and gold border glow, matching existing `card-premium` styles

**Bottom CTA Section**
- Light background
- Link to the nomination page, following the same CTA pattern used across other pages

### 2. Route Registration in `src/App.tsx`
- Add route: `/awardees/2026` pointing to the new `Awardees2026` page component

### 3. Navigation Update (Optional Link)
- The page will be accessible via direct URL; no forced nav link addition to keep navigation clean

## Technical Details

### Data Loading
- Fetch `/data/awardees-2026.json` using a simple `fetch()` call with `useEffect` and `useState`
- Display a loading skeleton while data loads

### File Changes

| File | Action |
|------|--------|
| `src/pages/Awardees2026.tsx` | Create new page component |
| `src/App.tsx` | Add `/awardees/2026` route |

### Page Structure (Component Outline)

```text
Awardees2026
+-- SEOHead (title, description, path)
+-- Navigation
+-- main
|   +-- Hero Section (light bg, pt-32)
|   |   +-- Editorial label "2026 Awardees"
|   |   +-- Heading "Award Recipients"
|   |   +-- Count badge (27 honorees)
|   +-- Grid Section (dark bg)
|   |   +-- 3-4 col responsive grid
|   |   +-- AwardeeCard x 27
|   |       +-- Photo (aspect 3:4)
|   |       +-- Name
|   |       +-- Award title
|   |       +-- Organization
|   +-- CTA Section
|       +-- "Submit a Nomination" link
+-- Footer
```

### Patterns Followed
- Uses `useLanguage()` for RTL support with `dir={isRTL ? 'rtl' : 'ltr'}`
- Uses `useRef` + `useLayoutEffect` with GSAP `reveal-up` animations (respects `prefersReducedMotion`)
- Matches existing page structure: Navigation at top, main content, Footer at bottom
- SEOHead with proper meta tags
- Container max-width and spacing consistent with other pages
