

# Website Post-Event Transformation, SEO Optimization & Cloudinary Gallery

## Overview

This plan transforms the ONE UAE Awards website from a pre-event promotional site into a post-event showcase. The 2026 edition concluded on February 5th, so all pre-event content (countdown timers, nomination forms, program flow, categories, gala details) will be removed or restructured. Full SEO optimization will be applied across all pages, including individual awardee detail pages with proper OG images for link sharing. A Cloudinary Product Gallery widget will be added to the Home page.

---

## Part 1: Remove Pre-Event Pages and Navigation

### Pages to Remove
- `/categories` (Categories.tsx) -- no longer relevant post-event
- `/partnerships` (Partnerships.tsx) -- remove the page with form; partnership interest will be handled via Contact
- `/gala` (Gala.tsx) -- event concluded, no longer needed
- `/nominate` (Nominate.tsx) -- nominations are no longer through a form

### Components to Remove
- `NominationForm.tsx` -- no longer needed
- `PartnershipForm.tsx` -- no longer needed
- `CountdownTimer.tsx` -- event has passed

### Route Changes (App.tsx)
- Remove routes: `/categories`, `/partnerships`, `/gala`, `/nominate`
- Remove corresponding imports
- Keep: `/`, `/about`, `/contact`, `/awardees/2026`, `/awardees/2026/:slug`

### Navigation Update (Navigation.tsx)
- Remove nav links: Categories, Partnerships, Gala
- Add nav link: "Awardees 2026" pointing to `/awardees/2026`
- Remove the "Nominate" CTA button from both desktop and mobile nav
- Updated nav links: Home, About, Awardees 2026, Contact

### Footer Update (Footer.tsx)
- Remove links to Categories, Partnerships, Gala, Nominate
- Update footer links to: About, Awardees 2026, Contact

### Translation Updates (LanguageContext.tsx)
- Add nav translation for "Awardees 2026" / Arabic equivalent
- Keep existing translations that are still used on remaining pages

---

## Part 2: Home Page Restructuring

### Sections to Remove
- "Categories - List style" section (categories preview with "View All" link)
- "Event Program - Dark section" (program flow with times)
- "Audience" section (who attends)
- "Partnership CTA" section
- "Add to Calendar" button and "Submit Nomination" CTA from hero
- Countdown Timer references

### Sections to Keep/Update
- Hero section -- update messaging to reflect concluded event. Change CTAs to "View 2026 Awardees" and "About the Awards". Remove calendar button and nomination CTA.
- Stats strip -- keep as is (these are still valid facts about the event)
- Marquee strip -- keep
- About split section -- keep, update CTA if needed
- Awardees Spotlight section -- keep (already links to /awardees/2026)
- Contact minimal section -- keep

### New Section: Cloudinary Photo Gallery
- Add after the Awardees Spotlight section
- Load Cloudinary Product Gallery JS via script tag in `index.html`
- Create a gallery container `<div id="my-gallery"></div>` in a new section on the Home page
- Initialize with: `cloudinary.galleryWidget({ container: '#my-gallery', cloudName: 'oneuaeaward', mediaAssets: [{ tag: 'gallery' }] }).render()`
- Section will have a heading like "Event Gallery" / "Photo Gallery" with a label
- Use `useEffect` to initialize the widget after component mounts

### New Section: 2027 Edition Teaser
- Replace the old Partnership CTA section
- Simple section: "2027 Edition -- Date TBA"
- Message: welcoming partnerships and nominations for the next edition
- CTA: "Contact Us" linking to `/contact` (no forms)

---

## Part 3: SEO Optimization

### index.html Updates
- Remove hidden Netlify forms for nomination and partnership (no longer needed)
- Keep existing OG meta tags (these are the fallback)
- Add sitemap reference: `<link rel="sitemap" href="/sitemap.xml" />`

### SEOHead Component Enhancement
- Add `image` prop support for dynamic OG images (already exists but needs to handle awardee photos)
- The `image` prop should accept absolute URLs
- Ensure `og:image:alt` is dynamic based on the page

### Awardee Detail Page SEO (AwardeeDetail.tsx)
This is the critical fix for link sharing. When an awardee detail page link is shared on WhatsApp/social media, the preview must show:
- **og:title**: "{Awardee Name} -- ONE UAE Awards 2026"
- **og:description**: "{Name} received the {Award Title} at the ONE UAE International Business Awards 2026."
- **og:image**: The awardee's photo as an absolute URL (`https://oneuaeawards.ae/awardees/2026/{image}`)
- **twitter:image**: Same absolute URL

Update the SEOHead call in AwardeeDetail.tsx to pass:
```
image={`https://oneuaeawards.ae/awardees/2026/${awardee.image}`}
```

Also add structured data (JSON-LD) for each awardee as a Person/Organization schema:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Awardee Name",
  "award": "Award Title",
  "worksFor": { "@type": "Organization", "name": "Organization" },
  "image": "https://oneuaeawards.ae/awardees/2026/image.jpg"
}
```

### SEOHead Structured Data Update
- Change Event status from `EventScheduled` to `EventPostponed` or better, use the past event pattern with `eventStatus: "https://schema.org/EventCompleted"` (though this isn't a standard Schema.org value -- we'll keep `EventScheduled` but update description to indicate the event took place)
- Actually, there's no "EventCompleted" in Schema.org. We'll change the event description to past tense and keep `EventScheduled` (this is acceptable practice)

### About Page SEO
- Already has proper SEOHead -- update description to past tense where relevant
- Update the CTA at the bottom (currently links to `/nominate`) to link to `/contact` instead

### Contact Page SEO
- Already has proper SEOHead -- no major changes needed

### Awardees2026 Page SEO
- Already has proper SEOHead -- no changes needed

### robots.txt Enhancement
- Add sitemap reference: `Sitemap: https://oneuaeawards.ae/sitemap.xml`

### New File: sitemap.xml
- Create a static sitemap with all current pages and all 27 awardee detail URLs
- Priority: Home (1.0), Awardees (0.9), Individual awardees (0.8), About (0.7), Contact (0.6)

---

## Part 4: Cloudinary Product Gallery Integration

### index.html
Add the Cloudinary Product Gallery script to the `<head>`:
```html
<script src="https://product-gallery.cloudinary.com/all.js" defer></script>
```

### Home Page Gallery Section
- Add a new section titled "Photo Gallery" between the Awardees Spotlight and the 2027 Teaser sections
- Container: `<div id="my-gallery"></div>` with appropriate sizing
- Initialize in a `useEffect`:
```typescript
useEffect(() => {
  if (window.cloudinary) {
    window.cloudinary.galleryWidget({
      container: '#my-gallery',
      cloudName: 'oneuaeaward',
      mediaAssets: [{ tag: 'gallery' }],
    }).render();
  }
}, []);
```
- Add TypeScript declaration for `window.cloudinary`

---

## Part 5: Language Context Updates

### New/Updated Translation Keys (English)
- `nav.awardees`: "Awardees 2026"
- Update hero CTAs
- Add gallery section translations
- Add 2027 teaser translations

### New/Updated Translation Keys (Arabic)
- `nav.awardees`: "الفائزون ٢٠٢٦"
- Corresponding Arabic translations for new sections

---

## Technical Details: File Changes Summary

| File | Action | Description |
|------|--------|-------------|
| `src/App.tsx` | Edit | Remove routes for categories, partnerships, gala, nominate; remove imports |
| `src/components/Navigation.tsx` | Edit | Update nav links (add Awardees 2026, remove categories/partnerships/gala); remove Nominate CTA button |
| `src/components/Footer.tsx` | Edit | Update footer links to match new nav structure |
| `src/pages/Home.tsx` | Edit | Remove pre-event sections; update hero CTAs; add Cloudinary gallery section; add 2027 teaser |
| `src/pages/About.tsx` | Edit | Update CTA from /nominate to /contact |
| `src/pages/AwardeeDetail.tsx` | Edit | Add OG image prop to SEOHead; add Person JSON-LD structured data |
| `src/components/SEOHead.tsx` | Edit | Make og:image:alt dynamic; ensure image prop works for absolute URLs |
| `src/contexts/LanguageContext.tsx` | Edit | Add new translation keys; update hero translations for post-event messaging |
| `index.html` | Edit | Add Cloudinary script; remove hidden nomination/partnership forms; add sitemap link |
| `public/robots.txt` | Edit | Add Sitemap directive |
| `public/sitemap.xml` | Create | Static sitemap with all current pages including 27 awardee URLs |
| `src/vite-env.d.ts` | Edit | Add Cloudinary type declaration for window.cloudinary |

### Pages That Will NOT Be Deleted (kept for potential future SEO redirects)
The page files for Categories, Partnerships, Gala, and Nominate will remain in the codebase but their routes will be removed from App.tsx. Visitors hitting those URLs will see the 404 page.

