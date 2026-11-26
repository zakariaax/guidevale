import type { Guide } from "@/data/types";

export const guides: Guide[] = [
  {
    slug: "read-a-discount",
    title: "How to read an Amazon discount",
    description:
      "A percent-off badge is a story about a list price. Here is how to tell a price worth paying from a number that was never the price.",
    dek: "The orange badge is the loudest thing on a product page and the least reliable. The useful question is whether you would buy the thing at today's price with the badge turned off.",
    updated: "2026-11-22",
    minutes: 8,
    faqs: [
      {
        q: "Why doesn't Guidevale print the price?",
        a: "Amazon's associate rules allow a product price on a site like this only when it comes from Amazon's own API and is refreshed on a short clock, with the time shown. A price we typed would be wrong the next time Amazon's algorithm moved, and it would put an Associates account at risk. The button opens today's price. That is the only number we want you to use.",
      },
      {
        q: "Are all list prices fake?",
        a: "No. Some items really do sell at the higher number between promotions. The problem is that a shopper cannot see which is which from a percent badge alone. Compare today's price with the job the product does, and with the other model sitting next to it, instead of with a strikethrough.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "A deal page is good at one optical trick. It prints a large percent, a crossed-out number, and a smaller number in a friendly color. The eye does the rest. You feel late, and you feel lucky, and you add the item to a cart before you have decided you wanted it on a normal day.",
      },
      {
        type: "p",
        text: "Sometimes the smaller number is a genuine low. Sometimes the crossed-out number is a list price the item has barely ever sold at, and the 'deal' is the ordinary price in a costume. Amazon's own page is allowed to tell that story. A careful independent desk does not copy the costume and leave it up for a month.",
      },
      {
        type: "h2",
        text: "Start with the job, then look at the number",
      },
      {
        type: "p",
        text: "Open the listing. Ignore the badge for ten seconds. Ask what job you are hiring the product to do, and what you would pay for that job on a Tuesday with no holiday attached. A [Winix 5530](/products/winix-5530) is a large-room purifier with a yearly filter. A [Lodge skillet](/products/lodge-12-skillet) is a pan you buy once. A [Blink Outdoor 4](/products/blink-outdoor-4) is a camera plus whatever the current plan charges to keep the clips. The job has a fair price. The badge does not know it.",
      },
      {
        type: "h2",
        text: "What the strikethrough is, and what it isn't",
      },
      {
        type: "p",
        text: "A strikethrough on Amazon is Amazon's claim, at that moment, that the item was offered at the higher number. It is not a history you can audit from a blog post, and it is not a promise that the higher number was common. When the promotion ends, the claim has to come down with it. A page that still says a specific percent off next month is not a research site. It is a stale ad.",
      },
      {
        type: "callout",
        title: "The only price that counts",
        text: "Guidevale links you to Amazon and lets Amazon show the price. If a number on some other site and the number on Amazon disagree, Amazon is the one about to charge your card.",
      },
      {
        type: "h2",
        text: "Five ways a 'deal' gets flattering",
      },
      {
        type: "ul",
        items: [
          "The list price was raised, then cut. Echo hardware has been through exactly this kind of repricing. A percent off a newly higher MSRP can land you near the old ordinary price.",
          "The cheap tile is a different variant: fewer watts, a smaller basket, a renewed return, a colorway missing the part you wanted. Read the title under the photo, not the photo.",
          "A coupon checkbox changes the price after you thought you understood it. Click it, watch the total, and see whether it stacks with the sale or replaces it.",
          "Subscribe and Save is a discount in exchange for a cadence. That is a good deal on filters you know you need. It is a bad deal on a gadget you wanted once.",
          "The bundle includes a thing you will not use. A doorbell kit with a base you already own, or a headphone color exclusive, is not 'more off.' It is a different product.",
        ],
      },
      {
        type: "h2",
        text: "Who is selling it",
      },
      {
        type: "p",
        text: "Sold by Amazon, shipped by Amazon, and sold by a third-party storefront are three different promises. The photo can be identical. The return is not. If the price looks strangely low next to every other offer, open the seller line before you congratulate yourself. Renewed and used are honest when they are labeled and you meant to buy them. They are a trick when the title is quiet and the photo is of a new unit.",
      },
      {
        type: "h2",
        text: "A small test that takes one minute",
      },
      {
        type: "p",
        text: "Look at the current price. Look at the closest sibling: the previous Sony generation next to the [WH-1000XM6](/products/sony-wh-1000xm6), the Mini next to the full-size [Little Green](/products/bissell-little-green), the Core 300-P next to a living-room purifier. If you cannot explain why this one costs what it costs relative to that one, you are not looking at a deal. You are looking at a badge.",
      },
      {
        type: "p",
        text: "Then ask the question the badge is designed to skip. Would you buy it at today's price if the orange rectangle disappeared? If yes, buy it. If you need the rectangle to feel good, close the tab. The product notes on this site exist so that question has somewhere to land.",
      },
    ],
  },
  {
    slug: "air-purifier-room-size",
    title: "Match an air purifier to the room",
    description:
      "The giant square-foot number on the box is one air change an hour. The certified number is the one that clears a room. Here is how to use it.",
    dek: "AHAM's suggested room assumes several air changes an hour under an 8-foot ceiling. The marketing number is often about five times larger, and both can be printed on the same page.",
    updated: "2026-11-22",
    minutes: 9,
    faqs: [
      {
        q: "What is CADR?",
        a: "Clean air delivery rate, in cubic feet per minute, for smoke, dust, and pollen. Higher CADR moves more cleaned air. It is a particle number. Odors and gases need carbon, and carbon loads up on its own schedule.",
      },
      {
        q: "Do I need a purifier in every room?",
        a: "You need air changes where you breathe. A machine in the living room does little for a closed bedroom. One honest unit in the room you sleep in beats three oversized claims in a hallway.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Purifier listings lead with the largest square-foot number they can print. Levoit has put a figure past 1,000 square feet on a Core 300-class page whose certified room is a little over 200. Coway prints a one-air-change figure near 1,700 next to a certified room of 361. Winix's one-hour claim for this line is near 1,900, next to an AHAM room of 392. Nobody is inventing the arithmetic. They are answering a different question than the one you asked.",
      },
      {
        type: "p",
        text: "The question you asked is: how big a room will this clean properly? AHAM's Verifide suggestion uses about 4.8 air changes an hour and assumes an 8-foot ceiling. That rate sits above the rough minimum indoor-air researchers talk about, with some margin. One air change an hour is a slow background stir. It is not pollen season, and it is not a smoky week.",
      },
      {
        type: "h2",
        text: "Three machines, three rooms",
      },
      {
        type: "table",
        caption:
          "Published manufacturer figures, not a Guidevale lab test. Marketing square footage is intentionally left off.",
        headers: ["", "Levoit Core 300-P", "Coway Mighty", "Winix 5530"],
        rows: [
          ["Certified room", "222 sq ft", "361 sq ft", "392 sq ft"],
          ["CADR, smoke / dust / pollen", "143 / 153 / 167", "233 / 246 / 240", "253 / 252 / 247"],
          ["Sensor", "No", "Yes, with auto and eco", "App / Wi-Fi"],
          ["Sleep", "24 dB mode, display off", "Low around the mid-20s dB", "Has a quiet setting"],
          ["Best room", "Small bedroom", "Medium living room", "Large bedroom or modest living room"],
        ],
      },
      {
        type: "products",
        slugs: ["levoit-core-300-p", "coway-mighty-ap-1512hh", "winix-5530"],
        note: "Open the note before the listing. The listing will try to sell you the larger number.",
      },
      {
        type: "h2",
        text: "How to pick without a spreadsheet",
      },
      {
        type: "ul",
        items: [
          "Measure the room you will close the door on. A 12 by 15 bedroom is 180 square feet. The Core 300-P has air to spare there. A 20 by 18 living room is 360. That is the Mighty's neighborhood, not the Levoit's.",
          "If the room is one open plan past about 400 square feet, none of these three is the honest buy. Step up in CADR. A Levoit Core 600S-class machine is the shape of that conversation, and you should read its certified room, not its banner.",
          "Smoke and wildfire days want the higher CADR running on a higher speed, with the windows shut, in the room you are in. Carbon helps with odor and then it loads. A green light is a particle reading.",
          "A purifier behind a sofa is a piece of furniture. Leave the intake a path.",
        ],
      },
      {
        type: "h2",
        text: "The second price",
      },
      {
        type: "p",
        text: "Filters are the part the deal badge never includes. The Winix 5530 takes Filter Q, a yearly HEPA-and-carbon replacement. The Mighty splits a deodorizing layer and a HEPA layer on different intervals. The Core 300-P wants Levoit's own cartridge, and a loose third-party filter is a way to buy a fan. When you open Amazon, look at a year of filters next to the machine. A cheap unit with a costly cartridge can pass a pricier unit somewhere in year two.",
      },
      {
        type: "h2",
        text: "Ionizers, briefly",
      },
      {
        type: "p",
        text: "Winix includes PlasmaWave and lets you switch it off, which is the correct design if you want the option. Coway's Mighty stack includes a bipolar stage. The Levoit Core 300-P is the mechanical filter without that conversation. If you came here to avoid ionizers, buy the machine that doesn't have one, or buy the Winix and turn the stage off. Don't pay extra for a feature you intend to disable and then forget.",
      },
      {
        type: "callout",
        title: "A purifier is not a medical device",
        text: "These machines reduce particles in a room. They do not treat asthma, and they do not make a smoky apartment safe to ignore. If breathing is a medical problem, that problem belongs to a clinician. The machine belongs in the right-sized room.",
      },
    ],
  },
  {
    slug: "apartment-robot-vacuum",
    title: "A robot vacuum in an apartment",
    description:
      "What a robot mop is for, what it still refuses to do, and why the dock's footprint matters more than the percent off.",
    dek: "A robot maintains a floor you already picked up. It does not renovate one. In a small home the station is often the piece that doesn't fit.",
    updated: "2026-11-22",
    minutes: 7,
    faqs: [
      {
        q: "Do I still need a regular vacuum?",
        a: "Yes, if you have stairs, a car, or a rug that has never met a beater bar. The robot is the Tuesday pass. The upright is the job the robot is built to refuse.",
      },
      {
        q: "Is a camera on a robot a problem?",
        a: "It is a preference with a tradeoff. A camera can help a robot see a cable. It is also a lens in your home. The Omni C28 skips the camera and, in a published test, pays for that with weaker obstacle avoidance. Pick the side you will actually live with.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Apartments are where robot mops make the most sense and where they are most often returned. The floor is small, mostly hard, and you are tired of it. The closet is also small, and the dock is a piece of furniture nobody put in the rendering. Measure the station before you measure the discount.",
      },
      {
        type: "h2",
        text: "The one on the desk",
      },
      {
        type: "p",
        text: "The [eufy Omni C28](/products/eufy-omni-c28) is here because two different kinds of evidence pointed at it in November 2026. It was leading twelve-month robot sales lists, and The Verge's smart-home editor, after testing 16 robot mops, called it a top pick for apartments and smaller homes. The notes worth keeping: a narrow robot, navigation that handled real furniture, a mop that lifted dried oatmeal on hardwood, and a dock that washes the mop with hot water and dries it with hot air.",
      },
      {
        type: "p",
        text: "The same review was plain about the miss. There is no camera, which is a privacy advantage, and obstacle detection is mediocre. Socks, cables, and pet toys still come off the floor before a run. A robot that eats a charger cable is not a story you want from a sale.",
      },
      {
        type: "products",
        slugs: ["eufy-omni-c28", "shark-navigator-lift-away", "bissell-little-green"],
        note: "Robot, upright, extractor. Three jobs.",
      },
      {
        type: "h2",
        text: "What to confirm on the listing",
      },
      {
        type: "ul",
        items: [
          "Whether the dock empties the dust bin, or only washes and dries the mop. Those are different Tuesday nights.",
          "The mop's behavior when it meets a rug. A pad that drags a wet edge onto a tasseled rug is a return.",
          "The height of the robot against the sofa you actually own, not the sofa in the diagram.",
          "What the replacement parts cost: bags if it has them, mop rollers, and whatever solution the dock wants.",
        ],
      },
      {
        type: "h2",
        text: "The jobs that stay yours",
      },
      {
        type: "p",
        text: "Stairs. The inside of a car. The first time you clean a place that has been neglected. A spot that is a stain rather than dust, which is why the [Little Green](/products/bissell-little-green) is on the same shelf. Hair wound around a brush you still have to cut. A robot is a maintenance crew. The [Navigator](/products/shark-navigator-lift-away) is the crew you send when the maintenance crew reports that the problem has legs.",
      },
      {
        type: "callout",
        title: "Run it like a roommate, not like a miracle",
        text: "Pick up the floor, start the job when you leave, and empty whatever the dock doesn't empty. Homes that do this like their robots. Homes that don't, write the one-star review the robot was always going to earn.",
      },
    ],
  },
  {
    slug: "headphones-you-keep",
    title: "Headphones you'll still want next year",
    description:
      "Travel pair, all-day pair, flagship. Fit decides the return. Last year's flagship often decides the money.",
    dek: "Three over-ear pairs cover the actual choice. The spec that never shows up in the badge is whether they hurt at minute forty.",
    updated: "2026-11-22",
    minutes: 7,
    faqs: [
      {
        q: "Which one is the best?",
        a: "The one you are still wearing in March. For a few flights a year, that is usually the Beats Studio Pro. For a full day of calls and a cabin, try Bose on your own glasses. For headphones that are your office, price the Sony XM6 against the XM5 and buy the gap you can explain.",
      },
      {
        q: "Does noise canceling work with glasses?",
        a: "The seal is the silence. Glasses arms break it. Bose has the reputation for being kinder about that. It is still a thing to test inside the return window, on your glasses, not on a reviewer's.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Headphone reviews pick a winner because a winner is a headline. Heads are less consistent than headlines. Clamp force, cushion heat, a piercing, glasses, and whether you wear a hood decide more returns than a frequency chart you will not read twice.",
      },
      {
        type: "h2",
        text: "Three jobs",
      },
      {
        type: "p",
        text: "The [Beats Studio Pro](/products/beats-studio-pro) is the travel pair. Published battery up to 40 hours, USB-C, noise canceling, a case, a sound with some weight in it. Lossless is a cable at a desk, not a Bluetooth promise. Buy these when you want the headphones to disappear into a bag and not into a settings menu.",
      },
      {
        type: "p",
        text: "The [Bose QuietComfort](/products/bose-quietcomfort) is the five-hour pair. The line's whole reputation is that you forget the clamp. Confirm you are buying the over-ear generation you meant. QuietComfort, Ultra, and the earbuds share a family name and not a product. The sound is calmer than a Beats or an EQ'd Sony. Calm is the point, until it isn't.",
      },
      {
        type: "p",
        text: "The [Sony WH-1000XM6](/products/sony-wh-1000xm6) is the flagship people compare the other two against. Buy it if the headphones are how you work and you will open the app. Then open the previous generation in the next tab. A large price gap and a small list of changes you can name is the previous generation's argument, and it is often the correct one.",
      },
      {
        type: "products",
        slugs: ["beats-studio-pro", "bose-quietcomfort", "sony-wh-1000xm6"],
      },
      {
        type: "h2",
        text: "The return window is part of the price",
      },
      {
        type: "p",
        text: "Wear them at your desk for a long call before the return window closes. Walk outside. Wear your glasses. Turn ANC on and off. If you need the orange badge to justify a pair that hurts, the badge is doing the only job it is good at, which is rushing you. How that badge gets painted is covered in [How to read a discount](/guides/read-a-discount).",
      },
      {
        type: "ul",
        items: [
          "A case you will crush by packing the cans sideways is how flagship hinges die. Put them in the case, then in the bag.",
          "Multipoint, the trick of staying on a phone and a laptop, changes by generation. Read the listing's line. Don't inherit it from the pair you owned in 2022.",
          "Refurbished is fine from a seller with a return window you will use. A strangely cheap third-party listing with a stock photo is a different hobby.",
        ],
      },
    ],
  },
  {
    slug: "kitchen-counter-space",
    title: "Kitchen tools that earn the counter",
    description:
      "An air fryer, a skillet, and a mixer. Only the ones you will use on a Wednesday belong in the room.",
    dek: "Counter space is the expensive part of a small kitchen. A tool that lives in a cabinet is a tool you used to mean to use.",
    updated: "2026-11-22",
    minutes: 6,
    faqs: [
      {
        q: "Should I buy all three?",
        a: "Only if the kitchen is empty and the habits are real. Most homes need the skillet. Homes that cook on weeknights earn the air fryer. Homes that bake earn the mixer. One in, and something else out.",
      },
      {
        q: "Is cast iron actually hard to keep?",
        a: "It is hard to keep if you soak it and ignore it. Dry it on a warm burner and wipe on a drop of oil. Soap is fine. A dishwasher is how you start the seasoning over, which is annoying and not fatal.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "The kitchen tools that disappoint are rarely bad at the task on the box. They are bad at living in the room. A single-purpose machine that has to be hauled off a high shelf will lose to a worse tool that was already on the counter. Guidevale's kitchen shelf is three objects, and the test for each is a Wednesday in March.",
      },
      {
        type: "h2",
        text: "The air fryer, if you cook",
      },
      {
        type: "p",
        text: "The [Ninja Air Fryer Pro](/products/ninja-air-fryer-pro) in the 5-quart 4-in-1 is a basket that air-fries, roasts, reheats, and dehydrates. It is the right size for two to four people and the wrong size for a crowd you imagined while reading a quart number. It earns the counter if dinner happens on weeknights and you are tired of heating an apartment with the oven. It does not earn a cabinet. If it goes in a cabinet, sell it to your future self by not buying it.",
      },
      {
        type: "h2",
        text: "The skillet, almost regardless",
      },
      {
        type: "p",
        text: "The [Lodge 12-inch](/products/lodge-12-skillet) is the pan that survives the purge. It sear, it goes in the oven, it has no coating to peel. Twelve inches is right until the day you cannot lift it full, in which case a smaller Lodge is the same pan and a kinder one. Eggs stick until you use it. That is the tuition, and it is cheaper than replacing nonstick every three years.",
      },
      {
        type: "h2",
        text: "The mixer, only if you bake",
      },
      {
        type: "p",
        text: "The [KitchenAid Artisan](/products/kitchenaid-artisan) is a 5-quart tilt-head, and it is wonderful at cookies, cakes, frosting, and ordinary dough. It is a lot of money and a lot of counter if you bake twice a year. A hand mixer is the honest tool in that house. A tilt-head will also tell you, by walking across the counter, when a dough is stiffer than the machine wants. Believe it.",
      },
      {
        type: "products",
        slugs: ["ninja-air-fryer-pro", "lodge-12-skillet", "kitchenaid-artisan"],
      },
      {
        type: "callout",
        title: "One in, one out",
        text: "Before a new plug-in appliance arrives, name the thing that leaves. A kitchen with no empty outlet does not have an appliance problem. It has an editing problem, and another sale will not edit it.",
      },
    ],
  },
  {
    slug: "smart-home-subscriptions",
    title: "Smart home without a surprise subscription",
    description:
      "The camera is the advertisement. The plan is the product. What to read before a doorbell, a yard camera, or a voice speaker lands in the cart.",
    dek: "Ask what still works the day you don't pay. Then ask whether you are allowed to drill. The hardware percent-off is the smallest number in the story.",
    updated: "2026-11-22",
    minutes: 8,
    faqs: [
      {
        q: "Are all cameras a subscription now?",
        a: "No. Some store video locally and sell a plan for extras. Some are barely a camera without the plan. The only way to know which you are holding is to read the current plan for that model, not a review from a different year.",
      },
      {
        q: "Is a voice speaker a privacy problem?",
        a: "It is a microphone you chose to put in a room. The mute button matters. It is a smaller problem than a camera aimed at a neighbor, and it is still a choice, not a default a sale should make for you.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Smart-home deals are priced like the interesting object is the plastic. Often the interesting object is the plan that starts the month after the return window, or the hub that was not in the photo, or a hole in a wall you don't own. Guidevale's home shelf is three devices and a set of questions. The questions are the guide.",
      },
      {
        type: "h2",
        text: "The questions, in order",
      },
      {
        type: "ul",
        items: [
          "What still works the day the subscription lapses? Live view, recorded history, person alerts, and a siren are frequently four different answers.",
          "Where is the video stored? On a base in the house, on a card, or on someone else's server. Local is not automatically private if the app is sloppy, and cloud is not automatically a scam. You should know which you are buying.",
          "Is there a second device in the kit? Blink's Outdoor cameras have historically wanted a Sync Module. A doorbell bundle with a base is not the same box as a doorbell alone.",
          "How is it powered? Battery cameras sleep. That is why the battery lasts, and it is why they are not a 24/7 recorder. Wired is better when the wire already exists.",
          "Are you allowed to install it? If you rent, don't drill. A removable mount is the product.",
        ],
      },
      {
        type: "h2",
        text: "Three devices, three jobs",
      },
      {
        type: "p",
        text: "The [Echo Dot (5th Gen)](/products/echo-dot-5) is a timer and a voice on a counter. It still leads speaker sales lists because the job is small and real. It is a bad music speaker. It has a microphone, and it has a mute. There is no video. Keep it that way unless you meant to add video.",
      },
      {
        type: "p",
        text: "The [Blink Outdoor 4](/products/blink-outdoor-4) is a battery camera for a yard or a porch, with person detection and a wider view than the Outdoor before it. It is discounted deeply and often. The hardware price can be genuinely low and the plan can still be the bill. Read Blink's current plan page before a multi-camera kit. A battery camera records events. It does not sit there filming the whole night unless the current hardware and the current plan explicitly say so.",
      },
      {
        type: "p",
        text: "The [eufy Video Doorbell E340](/products/eufy-doorbell-e340) is the dual-camera doorbell, visitor plus the package at the step. eufy advertises local storage. Read the kit anyway: which events stay on the base, which ask for an add-on, and whether you are buying a battery, a wired install, or a box that can do both. If packages are not your problem, don't pay for the lens that looks at the mat.",
      },
      {
        type: "products",
        slugs: ["echo-dot-5", "blink-outdoor-4", "eufy-doorbell-e340"],
      },
      {
        type: "h2",
        text: "Fewer devices, still used in March",
      },
      {
        type: "p",
        text: "A weekend that starts with one viral roundup ends with a speaker, two cameras, a doorbell, and three apps. You will open one of them. Buy that one. Point cameras at your own door and your own yard. The percent off a four-pack is not a reason to film a sidewalk you don't care about, and it is not a reason to skip the plan page. [How to read a discount](/guides/read-a-discount) applies twice as hard here, because the second price isn't even on the product tile.",
      },
    ],
  },
];
