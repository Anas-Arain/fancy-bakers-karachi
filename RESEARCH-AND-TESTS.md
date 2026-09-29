# Research, assumptions and verification

Research: 28 September 2026. Implementation verification: 29 September 2026.

## Business identity

The supplied Google local-search link points to knowledge ID `/g/11f_bz9c1g`. This was used to distinguish the business from other similarly named bakeries in Ancholi, Nazimabad and Gulbahar.

The matching Google profile was inspected directly:

- Name: **Fancy Bakers Nimco & General Store**.
- Address as displayed: **Younus manzil200/4 bihar colony main tenery road, E Road، Lyari, Karachi**.
- Website's readable rendering: **Younus Manzil 200/4, Bihar Colony, Main Tannery Road, E Road, Lyari, Karachi**. “Tannery” is a spelling normalization, not a separately verified street-name change; owner should confirm it.
- Telephone: **0333 3520107**.
- Hours shown for every day: **6:00 AM–2:00 AM** (overnight closing).
- Maps CID: **16773025735156502175**.

Sources:

1. [Matching Google profile](https://www.google.com/search?kgmid=/g/11f_bz9c1g) — listing name, telephone, address and expanded opening-hours table inspected in the browser.
2. [Matching Google Maps place](https://www.google.com/maps?cid=16773025735156502175) — business place link used for directions.
3. [4dost listing](https://4dost.com/listings-full/7819) — search result corroborated the name/address. This directory was not used to establish prices, products or delivery policies.

Public listings can change. The owner should confirm address, phone and hours before launch. Ratings and reviews were deliberately not reproduced as testimonials or permanent claims.

## Owner facts and editable assumptions

The owner states that the business offers many categories and makes customized cakes. That supports putting custom cake enquiries first and presenting a broader range. Exact stock, individual product names, weights and prices were not supplied.

The five starter cards are therefore broad enquiry categories: custom celebration cake, mithai selection, nimco selection, bakery selection and general store essentials. They do not assert a complete confirmed menu. All prices are null and display “Ask for a quote”. No invented numeric rates, offers, years of operation, certification, delivery radius or reviews have been included.

The listed phone has not been verified as a WhatsApp account. `business.whatsapp` is blank; current public package offers telephone contact and enquiry copying. When the owner sets a confirmed number, the same enquiry opens as a prefilled WhatsApp message. Message sending and order acceptance require the customer and shop.

## Visual assets

Three original AI-generated food images were created for this build and converted to local WebP assets:

| File | Subject | Purpose |
| --- | --- | --- |
| `celebration-cake.webp` | Cream cake with cherries and piped decoration | Hero and custom cake design inspiration |
| `mithai.webp` | Assorted South Asian sweets | Mithai category illustration |
| `tea-time.webp` | Tea-time savoury and bakery assortment | Nimco and bakery category illustration |

These are illustrative, not photographs of the actual shop or proof that an exact design or assortment is sold. The page labels the photography as illustrative. Replace them with the owner's actual products before presenting them as a real portfolio. No competitor's product photos or online review images were copied. The “fancy.” wordmark is a text-based design created for the site; no official brand-logo file was supplied.

Images are served locally, total about 584 KB. No remote font, photo or JavaScript CDN is needed for the website to render.

## Verified behavior

- JavaScript syntax checks passed for website and editor scripts.
- Rendered layouts checked in Chromium at nominal frame widths 320, 390, 768 and 1440 px. Usable widths after scrollbars were 305, 375, 753 and 1425 px. Document width matched viewport width at each size: no page-level horizontal overflow. Mobile editor checked at 390 px.
- Mobile navigation opens, category filtering narrows cards, and product selection updates the enquiry.
- Enquiry quantity increase, reduction, removal and empty state checked.
- Custom cake required date rejects a past date. A completed cake request includes name, date, occasion, size, flavour and message in the review.
- Enquiry dialog closes with its close button and Escape.
- Copy action reports success in the UI; manual selection/copy fallback is available. The cloud clipboard bridge did not provide an independent clipboard-content readback.
- Editor changes to a test price of Rs 1,250 and unit 1 kg were serialized, saved from the generated text and imported through the visible file picker. Import status confirmed success.
- That actual exported data was loaded into a separate test website. The card showed Rs 1,250 per 1 kg; quantity two produced Rs 2,500 and the correct enquiry text.
- A temporary test WhatsApp number produced the expected `wa.me` destination and URL-encoded message. No message was sent, no call was placed and no order was created. Neither the temporary number nor test price is in the delivered website.
- Core checks covered Pakistani phone normalization, zero and unknown prices, negative-price rejection, mixed priced/unpriced subtotals and unsafe URL rejection.
- All shipped local file and image references were checked during packaging.

## Verification limits

Native download completion could not be confirmed through the cloud browser's download-event interface. The editor has an explicit save link and a visible complete-file copy/save alternative; the latter's output and re-import were verified. The browser did not show a site-code error for export. Final download handling should also be checked in the owner's normal desktop browser.

This is responsive browser QA, not physical iPhone/Android device certification, a performance score or a guarantee about every browser/host. Modern browser support is expected from standard HTML, CSS and JavaScript; Safari/Firefox were not separately run here.

Optional page-tool registration is feature-detected and does not affect customers. The current preview browser reported WebMCP unavailable, so those optional registrations were not runtime-validated.

No public deployment, real WhatsApp account verification, domain/DNS setup, payment processing, email service, inventory integration or ad tracking has been performed. All of these require real owner settings or additional services. The delivered experience prepares enquiries and routes customers to shop contact; it does not claim to be an automatic checkout system.
