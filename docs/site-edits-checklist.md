# Site Edits Checklist

Client-facing source of truth for requested edits, implementation status, pending assets, and decisions.

## Status Guide

- `[x]` Implemented and ready for review.
- `[ ] [Client review]` Implemented direction needs client approval.
- `[ ] [Waiting for client asset]` Layout is implemented with a temporary asset that will be replaced when provided.
- `[ ] [Needs client decision]` Work is blocked until the listed choice is confirmed.
- `[ ] [Deferred]` Intentionally scheduled for a later pass.
- `[ ] [Deployment]` Implemented code or migration still needs to be applied to the production environment.

## Current Review

- Homepage: `https://dr-sirinesoussi-a566t6f4b-brahemdali9-gmailcoms-projects.vercel.app/`
- Dr Soussi page: `https://dr-sirinesoussi-a566t6f4b-brahemdali9-gmailcoms-projects.vercel.app/dr-sirine-soussi`
- Contact page: `https://dr-sirinesoussi-a566t6f4b-brahemdali9-gmailcoms-projects.vercel.app/contact`
- Avant / Apres page: `https://dr-sirinesoussi-a566t6f4b-brahemdali9-gmailcoms-projects.vercel.app/avant-apres`
- [ ] [Client review] Review the rebuilt Dr Soussi page on desktop and mobile.
- [x] Client approved the updated homepage.
- [ ] [Client review] Review intervention category/menu artwork and matching procedure-card thumbnails on desktop and mobile.
- [x] Client approved the Rendez-vous page.
- [x] Client approved the grouped Avant / Apres page.

## Client Inputs Required

- [x] Confirmed that the existing clinical preview media may be included in a public client-review deployment; no deletion or content change was requested.
- [ ] [Waiting for client asset] Provide the final large parcours background photograph. The current Institut Kassab image is temporary and will be replaced when provided.
- [x] Use the supplied intervention artwork for homepage tiles, category/menu thumbnails, and matching procedure cards; retain existing fallbacks for detail heroes and unmatched procedures.
- [ ] [Needs client decision] Confirm the hosting entity and final legal/privacy details.

## Global / Design System
- [x] Reduce oversized text where needed, but make the homepage subtitle bigger than current.
- [x] Update color palette to match the visual direction of Celine Zelhof's site.
- [x] Apply a Celine-inspired typography pair across the public site: Cormorant Garamond headings with Manrope body text.
- [x] Replace the rejected gold accent `#BB985A` with deep taupe `#806F66`.
- [x] Optimize the supplied intervention artwork as text-free, lowercase ASCII WebPs for cards and thumbnails.
- [ ] Extend the soft line-pattern background beyond the Dr Soussi page where it improves the sitewide rhythm. The reusable treatment is implemented on the Dr Soussi page.
- [ ] Extend the photo/soft-brand background alternation beyond the Dr Soussi page where appropriate. The rhythm is implemented on the Dr Soussi page.
- [x] Keep the current Dr Soussi identity/theme while moving the visual direction closer to Celine Zelhof.

## Homepage
- [x] Hero subtitle: change to `Clinique de chirurgie esthetique en Tunisie`.
- [x] Make the hero subtitle larger.
- [x] Change section title `Une pratique fondee sur l'ecoute` to `Rencontrez Dr Sirine Soussi`.
- [x] Change `Reperes de parcours` title to `L'expertise chirurgicale concue pour vous sur mesure en toute confiance`.
- [x] Move the content from `Ce que la consultation doit permettre` under the new expertise section.
- [x] Present that consultation content in 3 columns, similar to the `Des soins...` section style from Celine Zelhof.
- [x] Change `Interventions` section title to `Procedures chirurgicales`.
- [x] Redesign procedures section as a 4-column layout with `Mommy makeover`, `Rajeunissement du visage`, `Rhinoplastie`, `Chirurgie mammaire`, and `Chirurgie de l'abdomen`.
- [x] Replace the temporary procedure imagery with the supplied intervention artwork and retain responsive HTML titles.
- [x] Add a section: `Visitez la galerie`.
- [x] Add a section for Google reviews / `Avis Google`.
- [x] Under `Prendre rendez-vous`, add headline/copy: `Votre metamorphose commence ici`.
- [x] Insert the client-approved `En tant que chirurgienne plasticienne...` paragraph between the two existing `Rencontrez Dr Sirine Soussi` paragraphs.
- [x] Change address from `11 Rue du Lac Turkana` to `1.1 Rue du Lac Turkana`.

## Contact Page
- [x] Keep the page structure close to current, but restyle with the new theme direction.
- [x] Use the supplied operating-room portrait of Dr Sirine Soussi as the Rendez-vous page background.
- [x] Replace the over-cropped full-form background with a polished editorial hero that preserves the higher-quality operating-room image at its natural ratio.
- [x] Remove `injectrice`.
- [x] Remove date of birth field.
- [x] Keep the form simpler.
- [x] Remove the sentence like `Merci de remplir cette section...`.
- [x] Restore optional `Poids`, `Taille`, `Antecedents`, `Chirurgies anterieures`, `Medicaments quotidiens`, and `Tabagisme` fields.
- [x] Order the request fields as `Poids`, `Taille`, the medical details, `Type de chirurgie envisagee`, `Message`, then optional photos.
- [x] Make `Type de chirurgie envisagee` required and place it after the optional medical details.
- [x] Make booking photos optional, with support for up to 5 private images.
- [x] Remove the remaining client-side requirement for at least one booking photo and label the upload clearly as optional.
- [x] Make `Date souhaitée` optional, validate and store it when supplied, and display it in booking details in the CMS.
- [x] Place the `Votre parcours de consultation` heading and its introductory sentence on the same row on desktop while retaining the mobile stack.
- [x] Store and display the restored fields in the booking CMS without breaking existing requests.
- [x] Update address from `11` to `1.1` here as well.

## Dr Soussi Page
- [x] Redesign the first section with the same layout and composition as Celine Zelhof's About-page opening, while preserving Dr Soussi's identity and content.
- [x] Omit the reference site's certification-logo row.
- [x] Place `Philosophie` directly after the opening portrait section and move `Un cursus universitaire d'excellence` after the full `Parcours` section.
- [x] Under `Un cursus universitaire d'excellence`, add 3 cards: `Paris`, `Institut Kassab`, and `Depuis 2024`.
- [x] Center the `Formation et experience` label and academic heading while keeping the three cards left-aligned.
- [x] Use the CV-derived dates and credentials as the source of truth for the revised parcours copy.
- [x] Change `Philosophie` into a single-column paragraph section.
- [x] Restore the original `Philosophie` copy and keep the client-approved vision copy under `Ma vision de la chirurgie esthetique`.
- [x] Replace the initial `Ma vision de la chirurgie esthetique` draft with the client's expanded five-paragraph version covering natural results, preparation, recovery, longitudinal support, and trust.
- [x] Style `Ma vision de la chirurgie esthetique` with the same uppercase label typography as `Philosophie`.
- [x] Under the philosophy paragraph, add 3 columns for `L'art du detail`, `Securite absolue`, and `Resultats naturels`, inspired by the `Des soins...` section.
- [x] Remove the navigation/tabs: `Parcours`, `Paris`, `Tunisie`, and `Chronologie`.
- [x] Merge the former photo-side parcours sections into one continuous full-width photo-background block.
- [x] Place the merged copy under `Parcours : Formation de haut niveau en Tunisie`.
- [x] Use the existing Institut Kassab photograph as the temporary parcours background.
- [ ] [Waiting for client asset] Replace the temporary Institut Kassab parcours background when the final large photograph is provided.
- [x] Add a reusable soft background treatment derived from the Dr Soussi logo.
- [x] Alternate visual rhythm between photo-background and soft-brand-background sections.
- [x] Consolidate the two legacy Dr Soussi profile URLs into permanent redirects to the canonical page.
- [x] Use `IMG_9700` as the main profile portrait and `dr-sirine-soussi-profile.webp` in the homepage introduction.
- [x] Align the headings and copy in the three academic timeline cards.
- [x] Use the supplied sculpture artwork as a soft background across the `Philosophie` section.
- [x] Use the supplied cabinet interior photograph beside `Aujourd'hui a Tunis`; keep the address linked to the client-confirmed Google business listing.
- [x] Use the logo's shape without its text for the soft decorative backgrounds, with an enlarged treatment in the homepage appointment card.

## Interventions
- [x] Use the new artwork for intervention category cards, category banners, and header mega-menu thumbnails.
- [x] Add slug-based thumbnails to matching procedure cards and leave unmatched cards text-only.
- [x] Complete thumbnail coverage for all known procedure cards using the closest approved artwork.
- [x] Optimize the remaining `Chirurgie reparatrice`, `Chirurgie de la main`, and `Intime` category images as genuine WebPs.
- [x] Rebuild the desktop mega menu as a balanced 4-by-2 card grid with up to four direct links per category.
- [x] Merge local, SEO, and CMS entries in the mega menu and remove the duplicate blepharoplasty alias.
- [x] Keep legacy category thumbnails available for detail-page and existing Supabase hero fallbacks.
- [x] Crop baked-in labels from the supplied artwork and use correct accessible HTML titles instead.
- [x] Remove superseded source JPEGs and confirmed-unused public image assets after reference checks.

## Avant / Apres Page
- [x] Redesign the public Avant / Apres page to closely follow Celine Zelhof's grouped gallery hierarchy while preserving the Dr Soussi theme.
- [x] Add category navigation and group published cases by category and intervention.
- [x] Display fused before/after compositions as one large image.
- [x] Continue displaying legacy separate before/after records side by side.
- [x] Preserve consent language, variable-result guidance, case links, and consent-gated empty states.
- [x] Simplify the CMS Avant / Apres editing flow.
- [x] Replace the two-image editing UI with one fused-image upload while preserving existing cases.
- [x] Publish the 10 approved curated cases with two unchanged fused comparison views per case.

## CMS
- [x] Reduce the Avant / Apres editor to intervention, fused image, short description, consent, and draft/publish controls.
- [x] Use the existing comparison media mode for new fused images; no Avant / Apres schema migration is required.
- [x] Preserve legacy paired records and hidden advanced metadata during normal edits.
- [x] Convert only the cover image when a legacy case is explicitly replaced with a fused composition.
- [x] Show one CMS thumbnail for fused records and two thumbnails for legacy paired records.
- [x] Avoid deleting existing Supabase content unless explicitly approved.

## Privacy And Deployment

- [x] Update consent and privacy copy to describe booking contact details, optional health information, and optional private photos accurately.
- [x] Apply `supabase/migrations/20260829120000_add_booking_request_details.sql` and `supabase/migrations/20260905193000_add_booking_desired_date.sql` before deploying the restored Contact fields and optional preferred date.
- [ ] Finalize the retention schedule and hosting/legal copy after the client decision recorded above.

## Runtime And SEO

- [x] Bound public Supabase reads so unreachable CMS services fall back without blocking public routes indefinitely.
- [x] Keep CMS writes, booking submissions, and uploads outside the public-read timeout.
- [x] Use the configured site URL for canonical and social metadata, without filter query strings.

## Confirmed References

- [x] Celine Zelhof visual reference: `https://drcelinezelhof.com/`.
- [x] Celine Zelhof About-page layout reference: `https://drcelinezelhof.com/a-propos/`.
- [x] Celine Zelhof Avant / Apres layout reference: `https://drcelinezelhof.com/avant-apres/`.
- [x] Avant / Apres CMS uploads use one fused before/after composition.
- [x] Booking photos are optional.
- [x] Avant / Apres publication requires confirmed consent without a separate consent-date field.

## Review Log

### 2026-09-19

- Client approved the Accueil, Avant / Apres, and Rendez-vous pages.
- Published the current workspace to a new Vercel Preview and verified the homepage, Dr Soussi, Rendez-vous, and Avant / Apres routes with HTTP 200 responses.

### 2026-09-05

- Replaced the Dr Soussi hero with the client-supplied `IMG_9700` portrait and selected `dr-sirine-soussi-profile.webp` for the homepage introduction.
- Restored the original philosophy copy, moved the new reconciliation paragraph into the homepage introduction, and retained the remaining new copy under `Ma vision de la chirurgie esthetique`.
- Added the supplied sculpture image as a soft philosophy background and matched the `Ma vision` label typography to `Philosophie`.
- Centralized the confirmed Google Maps location for all public map links and connected the embed to the exact cabinet business listing.
- Removed the wordmark from soft decorative logo backgrounds, retained the standalone shape, and enlarged the homepage appointment-card watermark.
- Published and verified the updated Vercel Preview; the homepage, Dr Soussi, Contact, and Avant / Apres routes returned HTTP 200.
- Replaced the embedded map on the Dr Soussi page with the supplied cabinet interior photograph while retaining Google Maps on Contact and address links.
- Published and verified the refined Rendez-vous and Dr Soussi updates in a new Vercel Preview; all primary review routes and new image assets returned HTTP 200.
- Removed the visible `kg` and `cm` suffixes from the booking form and verified the updated labels in a new Vercel Preview.
- Applied and verified both booking migrations, then published the latest Contact, footer, and Dr Soussi section-order updates in a new Vercel Preview.

### 2026-09-04

- Set `IMG_9659` as the canonical Dr Soussi hero and reused the prior white-coat portrait in the homepage introduction.
- Aligned the three academic timeline cards with consistent responsive spacing.
- Converted 12 supplied intervention artworks to normalized, text-free WebPs and switched homepage, category, menu, and matching procedure-card thumbnails.
- Kept undersized artwork out of large detail heroes and retained all legacy category thumbnails required by existing detail/database fallbacks.
- Removed superseded source uploads and confirmed-unused doctor, hospital, cabinet, placeholder, and logo assets.
- Verified the image switch with `npm run check`, `npm run build`, `git diff --check`, generated Vercel output inspection, and a development-server asset request.

### 2026-09-01

- Confirmed that the existing clinical preview media may be displayed in a public remote-review deployment.
- Retained all clinical files and Supabase content unchanged; this approval does not authorize deletion or replacement.
- Published and verified a public Vercel preview for remote client review; the homepage, profile, Contact, and Avant / Apres routes returned successfully.
- Did not apply the pending booking migration and did not promote the preview to production.
- Confirmed that curated Avant / Apres cases should be published with consent recorded but without a separate consent date.
- Removed the consent-date field and validation while retaining the consent requirement and preserving dates already stored on legacy records.
- Restored the inactive `drsoussi` Supabase project after explicit approval; no migration was applied.
- Published and verified 10 curated cases with 20 unchanged fused comparison views, 10 covers, confirmed consent, and no separate consent dates.
- Redeployed the public review preview and verified the homepage gallery, all 67 published case-detail routes, and both views on every newly imported curated case.

### 2026-08-31

- Added a configurable 5-second timeout for public Supabase database and storage reads while preserving existing local and consent-safe empty-state fallbacks.
- Kept CMS mutations, booking submissions, media uploads, legacy paired Avant / Apres cases, and hidden advanced metadata on the unchanged admin client.
- Updated canonical and social URLs to use the configured Astro site origin and exclude filtering query strings.
- Limited intervention detail gallery reads to the current category and intervention instead of loading every published case.
- Verified the main public routes and simulated an unreachable Supabase endpoint; fallback routes returned successfully within the configured bound.

### 2026-08-29

- Applied the Celine Zelhof-inspired palette and Cormorant Garamond/Manrope typography direction.
- Rebuilt the homepage content hierarchy, procedure mosaic, gallery section, Google reviews presentation, and appointment section.
- Updated the shared practice address to `1.1 Rue du Lac Turkana`.
- Simplified and restyled the Contact page.
- Rebuilt the canonical Dr Soussi page using the confirmed reference composition and CV-derived dates.
- Added the academic cards, single-column philosophy, three philosophy cards, merged parcours block, and soft logo-derived background treatment.
- Recorded the Institut Kassab parcours photograph and homepage procedure images as temporary assets that will be replaced when final images are provided or approved.
- Replaced the rejected `#BB985A` accent with the selected deep taupe `#806F66`.
- Restored optional weight, height, and medical-history fields on Contact; made surgery type required and photos optional.
- Added a non-destructive booking migration and exposed the restored values in the booking CMS.
- Rebuilt the public Avant / Apres page as a grouped gallery matching the confirmed reference hierarchy.
- Simplified Avant / Apres CMS creation and editing to one fused-image upload while preserving legacy pairs and advanced stored data.
- Redirected both legacy Dr Soussi profile routes and removed redirect/CMS URLs from the public sitemap.
- Updated the privacy and consent pages to describe the active booking data flow.
- Verified the current work with `npm run check`, `npm run build`, `bash scripts/verify_placeholders.sh`, and `git diff --check`.
