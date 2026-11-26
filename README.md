# Northline

Northline is an editorial Amazon affiliate desk. The homepage opens with one product worth a click, then the rest of the shelf, then the shelves themselves: air, floors, kitchen, sound, home tech, and care. Every product page says who it is for, who should skip it, and what to confirm on the listing. Guides cover the decisions a discount badge skips, starting with how to read a discount at all.

Amazon shows the price. Northline does not. Associates rules allow a price on a site like this only when it comes from Amazon's Product Advertising API or Creators API and stays current. Typed prices go stale and put an Associates account at risk. The button on every product is a paid link labeled as one: **See today's price on Amazon**.

## Run it locally

```bash
npm install
npm run dev
```

The dev server listens on port 3847.

## Your Associates tag

Links use `AMAZON_ASSOCIATE_TAG`. Until that variable is set to the tag Amazon assigned you (it looks like `yoursite-20`), the site shows a banner and the links carry a placeholder tag that will not credit an account.

Set it in the host's environment, then rebuild or republish. Do not commit the tag. It is not a secret in the cryptographic sense, but it should be yours, not one pasted from someone else's page.

`SITE_URL` should be the public origin, with no trailing slash, for canonical URLs, the sitemap, and Open Graph images. `GOOGLE_SITE_VERIFICATION` is the token from Google Search Console if you verify by meta tag.

```bash
AMAZON_ASSOCIATE_TAG=yoursite-20 SITE_URL=https://example.com npm run dev
```

## What is on the shelf

Eighteen products and six guides, written as notes rather than as a price board:

- Air: Winix 5530, Coway Mighty, Levoit Core 300-P, sized by the certified room, not the billboard square footage
- Floors: eufy Omni C28, Shark Navigator Lift-Away, Bissell Little Green
- Kitchen: Ninja 5-quart air fryer, Lodge 12-inch skillet, KitchenAid Artisan
- Sound: Beats Studio Pro, Bose QuietComfort, Sony WH-1000XM6
- Home tech: Echo Dot (5th Gen), Blink Outdoor 4, eufy Video Doorbell E340
- Care: SURI toothbrush, CHI 1-inch iron, Waterpik Aquarius

Add a product by appending to the matching file in `src/data/products/` and linking it from `related`. Add a guide in `src/data/guides.ts`. Pages, the sitemap, and the internal links are generated from that data.

## Search, for real

A thousand organic clicks a day is a property with many pages ranking, not a switch in a template. Roughly, a 3 percent click-through rate means 2,000 clicks need on the order of 60,000 impressions a day. That comes from useful pages on specific questions ("what size air purifier for a bedroom", "is this Amazon percent real") plus titles people actually click.

This repo is the engine for that, on purpose:

- One indexable URL per product, category, and guide, with a unique title and description
- Internal links between the products that compete with each other
- Article, FAQ, breadcrumb, and item-list structured data, and no fake star ratings
- A sitemap and `robots.txt` once `SITE_URL` is set
- Google Analytics 4 (`G-H0LZGJ9W17`) loads after the page, so a visit is counted without blocking the first paint
- Copy that says where a spec came from, because "we tested this in our lab" is a lie here and Google's quality raters can tell

What you still do, in order:

1. Apply for Amazon Associates with this site once it is public. The required sentence, "As an Amazon Associate I earn from qualifying purchases.", is in the header and on `/disclosure`.
2. Put your tag in `AMAZON_ASSOCIATE_TAG` and the public origin in `SITE_URL`, then republish.
3. Add the property in Google Search Console and watch queries, not just clicks. Pages with impressions and a weak click-through rate need a clearer title, not another hundred thin URLs.
4. Publish a new guide when you can say something a product page does not. Update a note when the model year changes. Delete a page that you can no longer defend.
5. When an Associates account is approved, a later version can read prices from Amazon's API, with the timestamp their rules require. `src/lib/site.ts` is the only place links are built. Do not scrape Amazon. Scraping breaks the Associates agreement and rots the moment a price moves.

Buying links, spinning a thousand doorway pages, or printing a permanent "63% off" will not get this to 2,000 clicks a day. It gets the site ignored, or the account closed.
