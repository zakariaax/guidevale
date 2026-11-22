import type { Product } from "@/data/types";

export const soundProducts: Product[] = [
  {
    slug: "beats-studio-pro",
    name: "Beats Studio Pro",
    brand: "Beats",
    category: "sound",
    tier: "everyday",
    spotlight: true,
    hero: false,
    plate: "headphones",
    updated: "2026-11-22",
    searchQuery: "Beats Studio Pro wireless headphones",
    verdict: "The travel pair. Long battery, USB-C, noise canceling, and a simpler pitch than the flagships.",
    dek: "Over-ear wireless headphones with active noise canceling and a published battery up to 40 hours. Lossless is a wired USB-C conversation, not a Bluetooth miracle.",
    why: [
      "Studio Pro is the Beats pair that shows up whenever over-ear headphones go on a real promotion, because the product is easy to explain. Custom acoustic tuning aimed at music, calls, and ordinary listening. Active noise canceling. A battery Apple's own listing language puts at up to 40 hours. USB-C. They fold, they have a case, and they behave on a plane.",
      "Lossless over USB-C is a feature for a desk and a cable. Bluetooth is still Bluetooth. If a listing leads with lossless, read the line that says how you have to be plugged in. Buy the wireless pair for the wireless life, and treat the cable as a bonus at a laptop.",
      "The sound is Beats: weight in the low end, not a studio monitor. If you want a flatter, more adjustable signature and you live in headphones, that conversation is the [Sony WH-1000XM6](/products/sony-wh-1000xm6). If the question is whether you can wear them for five hours without taking them off, try the [Bose QuietComfort](/products/bose-quietcomfort) and use the return window as part of the test.",
      "Colorways, including retailer exclusives, come and go. The acoustic platform is the purchase. The light-blue exclusive is not a different headphone.",
    ],
    bestFor: [
      "Flights, commutes, and a bag that already has too much in it",
      "Listeners who want noise canceling without a settings hobby",
      "Apple households, while still working as ordinary Bluetooth headphones elsewhere",
    ],
    skipIf: [
      "You want the most neutral listening you can get from a consumer pair. This is not that tool.",
      "You wear glasses and have hated every clamp you've tried. Fit is the whole review, and Bose exists for a reason.",
      "You need a headphone for tracking and mixing. Buy studio cans and keep these for the train.",
    ],
    watchouts: [
      "ANC and a tight seal are the same system. Hair, glasses, and a beanie change the silence.",
      "40 hours is a published maximum, not a promise at high volume with ANC on a busy street. Expect less on a travel day.",
      "Confirm 'Studio Pro' and not an older Studio or a Solo. The in-ear and on-ear Beats are different products with friendlier prices and smaller jobs.",
    ],
    specs: [
      { label: "Form", value: "Over-ear, folding, with a case" },
      { label: "Battery", value: "Up to 40 hours, published" },
      { label: "Noise", value: "Active noise canceling" },
      { label: "Port", value: "USB-C, including wired lossless playback" },
    ],
    faqs: [
      {
        q: "Are these the headphones to buy on a deep discount?",
        a: "They are the pair that justifies a real cut, because the everyday job is travel and focus, not a spec war. A fake list price with a giant percent is not the same thing. Open Amazon, look at today's number, and decide if you would pay it with the badge turned off. How to read that page is [its own guide](/guides/read-a-discount).",
      },
      {
        q: "Do they work with Android?",
        a: "They are Bluetooth headphones. Features that depend on an Apple handshake are nicer on an iPhone. Playback, calls, and noise canceling do not require one.",
      },
    ],
    related: ["bose-quietcomfort", "sony-wh-1000xm6"],
    sources:
      "Battery life, USB-C lossless playback, and the acoustic description follow Beats' published Studio Pro materials and the current Amazon product listing. Northline did not measure frequency response.",
  },
  {
    slug: "bose-quietcomfort",
    name: "Bose QuietComfort Headphones",
    brand: "Bose",
    category: "sound",
    tier: "step-up",
    spotlight: true,
    hero: false,
    plate: "headphones",
    updated: "2026-11-22",
    searchQuery: "Bose QuietComfort Headphones 2nd Gen",
    verdict: "The pair you buy when the question is how they feel at hour five, not how they graph.",
    dek: "Bose's comfort-first noise canceling, in the current QuietComfort generation. Confirm you are looking at the 2nd-gen over-ear and not a similarly named sibling.",
    why: [
      "Bose has spent years being the headphone people forget they are wearing. That is the product. The QuietComfort line is plush, the clamp is the thing frequent flyers recommend to each other, and the noise canceling is tuned for cabins and offices rather than for a bass demonstration.",
      "Names collide. QuietComfort, QuietComfort Ultra, and QuietComfort Headphones (2nd Gen) are different listings with different prices and, some years, different batteries. The search button opens the family. The model title on the listing is the only one that counts. In late 2026 retail coverage, the 2nd-gen over-ear is the one sitting in the serious-discount conversation next to the Beats.",
      "The sound is polite next to a Beats or a Sony that has been EQ'd for fun. That is a compliment if you listen to podcasts and land in cities. It is a miss if you wanted theater in a train. You can decide that in a return window more honestly than from a reviewer's adjectives, including ours.",
      "The rest of the rung: [Studio Pro](/products/beats-studio-pro) if you want simpler and cheaper to own, [WH-1000XM6](/products/sony-wh-1000xm6) if headphones are your office. The fit note is [Headphones you'll still want](/guides/headphones-you-keep).",
    ],
    bestFor: [
      "Long wear: flights, open offices, a day of calls",
      "People whose last headphones hurt their ears or pressed their glasses",
      "Listeners who want silence more than a flavored signature",
    ],
    skipIf: [
      "You want a bright, bass-forward party pair. You will call these boring, correctly.",
      "You are buying the Ultra, the Earbuds, or a first-gen under a title that only says QuietComfort. Read the line under the photo.",
      "Budget is the whole point and Studio Pro is already enough headphone. Comfort you don't need is still money.",
    ],
    watchouts: [
      "Cushions wear out and are a replacement part. That is normal, and it is cheaper than a new flagship if the hinge is fine.",
      "ANC with glasses is better here than on many clamps, and it is still not magic. The seal is the silence.",
      "Bose's app and multipoint behavior change by generation. Check the listing's 'connects to two devices' line instead of assuming the older trick carried over.",
    ],
    specs: [
      { label: "Form", value: "Over-ear noise canceling" },
      { label: "Point of the buy", value: "Clamp and cushion over a long day" },
      { label: "Confirm", value: "2nd Gen over-ear, not Ultra and not earbuds" },
      { label: "Sound", value: "Calm. Not a bass showcase." },
    ],
    faqs: [
      {
        q: "QuietComfort or QuietComfort Ultra?",
        a: "Ultra is the step above, with its own price and its own immersive modes. If you have not missed those modes, the QuietComfort Headphones are the pair people actually wear all day. Compare today's prices yourself. A smaller gap makes Ultra tempting. A large gap makes the non-Ultra the adult choice.",
      },
      {
        q: "Can I wear them with glasses?",
        a: "More comfortably than a hard clamp, which is why this line has the reputation. The arms of the glasses still break the seal a little. If silence on a plane is the whole purchase, try them on your own glasses inside the return window.",
      },
    ],
    related: ["beats-studio-pro", "sony-wh-1000xm6"],
    sources:
      "This note is about Bose's QuietComfort over-ear line, and specifically flags the 2nd-gen model that retail coverage was discounting in November 2026. Comfort and tuning descriptions match the line's long-published design, not a Northline measurement. Confirm the generation on the listing.",
  },
  {
    slug: "sony-wh-1000xm6",
    name: "Sony WH-1000XM6",
    brand: "Sony",
    category: "sound",
    tier: "flagship",
    spotlight: false,
    hero: false,
    plate: "headphones",
    updated: "2026-11-22",
    searchQuery: "Sony WH-1000XM6 headphones",
    verdict: "The flagship the others get compared with. Buy it if headphones are how you work. Price last year's model before you do.",
    dek: "The current WH-1000X over-ear. The line is famous for noise canceling, an app with a real EQ, and people who wear them more hours than they planned.",
    why: [
      "Sony's WH-1000X line is the reference pair in this category. The XM6 is the current one as of late 2026. People who write about headphones compare other headphones to it, which is a different kind of fame from a bestseller badge. You buy it when the headphones are your office: calls, focus, a flight, then a record you actually want to hear.",
      "We are not going to invent this year's battery hour or pretend a spec sheet is a listening test. Read the listing for battery, multipoint, and codec support, because those lines move when Sony ships a generation and the older listing stays up. What does not move is the buying pattern: the previous XM, a year later, is often the smarter spend. Open the XM6 and the XM5 side by side. If the older one is honestly cheaper and the new one's changes are not ones you can name, buy the older one.",
      "EQ is the Sony habit. If you will never open the app, you are paying for a hobby you don't have, and the [Bose](/products/bose-quietcomfort) or the [Studio Pro](/products/beats-studio-pro) will bother you less. If you like a signature you can push around, this is the shelf.",
      "Fit still outranks the flagship. A headphone that hurts at minute forty is a return, however good the silence is. [Headphones you'll still want](/guides/headphones-you-keep) is the longer version of that advice.",
    ],
    bestFor: [
      "All-day wear for work and travel",
      "Listeners who will use the app and an EQ",
      "Anyone comparing other pairs against 'the Sony'",
    ],
    skipIf: [
      "You want a simple pair for a few flights a year. Step down to Studio Pro and keep the difference.",
      "The previous generation is substantially less today and you cannot explain what the new one adds.",
      "Clamp force has been your problem on every flagship. Comfort is not a spec Sony wins by default. Try Bose on your own head.",
    ],
    watchouts: [
      "Flagship prices are sticky until they aren't. A percent off a number Sony barely sells at is not a deal. [Read the discount](/guides/read-a-discount) before you let an orange badge decide.",
      "Cases get crushed in bags. The hinges are the failure people actually hit, usually by stuffing the cans in sideways.",
      "Refurbished flagships are fine when the seller is the manufacturer or Amazon Renewed with a return window you will use. A random third party with a stock photo is how you buy someone else's problem.",
    ],
    specs: [
      { label: "Line", value: "Sony WH-1000X, current XM6 generation" },
      { label: "Job", value: "All-day noise canceling and tunable sound" },
      { label: "Check on the listing", value: "Battery, multipoint, codecs, and the XM5's price beside it" },
      { label: "Skip the badge", value: "Compare today's price with the previous generation" },
    ],
    faqs: [
      {
        q: "Should I wait for a sale?",
        a: "Flagships in this line do get cut, and they also sit at full price while the previous model becomes the deal. Waiting is reasonable if you already own a working pair. If you don't own any, a step-down pair you will wear beats a flagship you are timing like a stock.",
      },
      {
        q: "Is the XM6 a different product from the XM5 in daily use?",
        a: "It is the next generation, and daily use is exactly where you should be suspicious of adjectives. Read Sony's own 'what's new' and then look at the price gap. Small gaps favor the new one. Large gaps favor the XM5 for almost everyone who is not collecting the current model number.",
      },
    ],
    related: ["bose-quietcomfort", "beats-studio-pro"],
    sources:
      "The XM6 is Sony's current WH-1000X over-ear as covered in November 2026 retail reporting. This page does not restate a battery figure, because those lines should be read on the listing you are buying. Northline did not measure the XM6 against the XM5.",
  },
];
