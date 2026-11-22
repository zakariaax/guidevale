import type { Product } from "@/data/types";

export const airProducts: Product[] = [
  {
    slug: "winix-5530",
    name: "Winix 5530",
    brand: "Winix",
    category: "air",
    tier: "step-up",
    spotlight: false,
    hero: true,
    plate: "purifier",
    updated: "2026-11-22",
    searchQuery: "Winix 5530 air purifier",
    verdict: "The large-room purifier people keep buying, if you size it by 392 square feet and not by the billboard number.",
    dek: "A white 2026 refresh of Winix's long-running 5500-2 line: True HEPA, carbon, a washable pre-filter, and a PlasmaWave stage you can switch off.",
    why: [
      "Retail roundups through November 2026 still had the Winix 5530 at the top of air-purifier unit sales over the prior year. That is a buying signal, not a lab result. The machine itself is a known shape: the same AHAM-verified performance Winix has shipped on the 5510 and 5520, in a white housing, with Wi-Fi.",
      "The certified room is 392 square feet at about 4.8 air changes an hour. Published CADR figures are 253 for smoke, 252 for dust, and 247 for pollen. That is a large bedroom or a modest living room. The box also talks about a room near 1,900 square feet. That larger figure is one air change in an hour, which is a slow background refresh, not pollen season and not wildfire smoke.",
      "Filtration is four stages: a washable fine-mesh pre-filter, activated carbon, True HEPA, and PlasmaWave. The carbon and HEPA ship together as Filter Q and are a yearly replacement, which is the real running cost. PlasmaWave is an ionizer stage. People who would rather not run one can turn it off and keep the mechanical filter.",
      "For a smaller bedroom, the [Levoit Core 300-P](/products/levoit-core-300-p) is the more honest fit. For a sensor that can stop the fan when the air is already clean, read the [Coway Mighty](/products/coway-mighty-ap-1512hh). The room-size lesson, with all three side by side, is in [Match the purifier to the room](/guides/air-purifier-room-size).",
    ],
    bestFor: [
      "A primary bedroom or a living room around 400 square feet with an 8-foot ceiling",
      "Allergy dust and pollen, where the HEPA stage does the work",
      "Someone who wants an app and will actually open it",
    ],
    skipIf: [
      "Your space is one open room well past 400 square feet. Look at a higher CADR instead of believing the one-hour number.",
      "You want a purifier you can tuck on a nightstand. This is a 22-inch tower, about 13 pounds.",
      "You refuse any ionizer, even a switchable one, and would rather buy a machine that never had the stage.",
    ],
    watchouts: [
      "Auto mode and Wi-Fi are conveniences. They do not change the CADR. Sleep mode and a lower fan still move less air.",
      "Budget the replacement filter when you buy the machine, not a year from now when the light comes on.",
      "Northline has not run a particle counter on this unit. The CADR and room figures come from Winix's AHAM-verified ratings as published in the manual and retailer spec sheets.",
    ],
    specs: [
      { label: "AHAM room", value: "392 sq ft at 4.8 air changes/hour" },
      { label: "CADR", value: "Smoke 253 · dust 252 · pollen 247 CFM" },
      { label: "Filtration", value: "Washable pre-filter, carbon, True HEPA, PlasmaWave" },
      { label: "Power", value: "65 W" },
      { label: "Filter", value: "Filter Q, replaced about yearly" },
      { label: "Size", value: "About 13.6 × 8.3 × 22.2 in, 12.6 lb" },
    ],
    faqs: [
      {
        q: "Is the Winix 5530 a different cleaner from the 5510?",
        a: "The published CADR, room rating, power draw, and Filter Q match the 5510 and 5520. The 5530 is the white 2026 housing of that line. You are not buying a new filter science. You are buying that machine in the current shell.",
      },
      {
        q: "Can it cover a whole apartment?",
        a: "Only if the apartment is small and the doors are open enough for air to reach the intake. A certified 392 square feet is the planning number. Hallways and closed bedrooms need their own air changes, which one tower in the living room will not provide.",
      },
    ],
    related: ["coway-mighty-ap-1512hh", "levoit-core-300-p"],
    sources:
      "CADR, room size, power, and dimensions are Winix's published figures for the 5530, including AHAM Verifide ratings repeated in retailer spec sheets and the user manual. Sales rank is from public bestseller roundups current as of November 22, 2026. Northline did not test this unit in a lab.",
  },
  {
    slug: "coway-mighty-ap-1512hh",
    name: "Coway Airmega Mighty AP-1512HH",
    brand: "Coway",
    category: "air",
    tier: "step-up",
    spotlight: true,
    hero: false,
    plate: "purifier",
    updated: "2026-11-22",
    searchQuery: "Coway Airmega AP-1512HH Mighty air purifier",
    verdict: "The square purifier that runs itself, for a medium room where you want the fan to notice the air.",
    dek: "A particle sensor, an auto mode, and an eco mode that can stop the fan. Sized for about 361 square feet at a real air-change rate.",
    why: [
      "The Mighty has been the default 'buy a serious purifier' answer for years, and it is still on the shelf in late 2026 because the job didn't change. It watches particles and speeds up when the room gets worse. That is the feature the Core 300-P does not have.",
      "Coway's certified room is 361 square feet at 4.8 air changes an hour. CADR figures used by comparison desks are 233 smoke, 246 dust, and 240 pollen. Noise runs roughly from the mid-20s dB on low to the low-50s on high. Power is 77 watts. It is a box, not a cylinder: about 17 by 18 by 10 inches and a little over 12 pounds, so it takes a footprint.",
      "The filter stack is a washable pre-filter, a deodorizing filter Coway suggests replacing on the order of every six months, a HEPA filter on the order of every year, and a bipolar ionizer stage. Read the current manual for the exact interval. Carbon is what handles odor, and it loads up whether or not the HEPA still looks clean.",
      "Put it in a living room. Put the [Levoit Core 300-P](/products/levoit-core-300-p) in a small bedroom. Put the [Winix 5530](/products/winix-5530) in the larger bedroom that also wants an app. The side-by-side is [Match the purifier to the room](/guides/air-purifier-room-size).",
    ],
    bestFor: [
      "A medium living room that gets cooking, pets, or a window on a busy street",
      "People who will not remember to change fan speeds",
      "Buyers who want the fan to pause when the air is already fine",
    ],
    skipIf: [
      "The room is a small bedroom. You will pay for capacity and a larger body you don't need.",
      "You want the lowest possible sleep noise in a nursery-sized room. The Core 300-P's sleep mode is the simpler object.",
      "You need wildfire-level air changes in a big open plan. Step up in CADR.",
    ],
    watchouts: [
      "Eco mode stopping the fan is a feature only if you trust the sensor. Dust on the sensor makes a liar of it. Vacuum the sensor when you clean the pre-filter.",
      "Two filter intervals means two chances to forget. The deodorizing layer and the HEPA do not expire on the same day.",
      "The bipolar stage is part of Coway's stack. If you want mechanical filtration only, confirm in the current manual whether that stage can be disabled on the unit you are opening.",
    ],
    specs: [
      { label: "AHAM room", value: "361 sq ft at 4.8 air changes/hour" },
      { label: "CADR", value: "Smoke 233 · dust 246 · pollen 240 CFM" },
      { label: "Sensor", value: "Particle sensor, auto and eco modes" },
      { label: "Noise", value: "About 24–53 dB" },
      { label: "Power", value: "77 W" },
      { label: "Size", value: "About 16.8 × 18.3 × 9.6 in, 12.3 lb" },
    ],
    faqs: [
      {
        q: "Why do people still buy this instead of a newer smart tower?",
        a: "Because the sensor-and-stop behavior is the product. A newer tower with a higher CADR can be the right buy for a bigger room. In a medium room, a machine that has been serviceable for years, with filters you can still find, is a calmer purchase than a new app.",
      },
      {
        q: "Does the green light mean the air is clean?",
        a: "It means the particle sensor is happy. Sensors miss gases and many odors. A green light in a room that smells like last night's fish is a particle reading, not a verdict on the carbon.",
      },
    ],
    related: ["winix-5530", "levoit-core-300-p"],
    sources:
      "Room size, CADR, noise, power, and dimensions are Coway's published ratings for the AP-1512HH as compiled by comparison desks from the manufacturer. Filter intervals are the maker's guidance and should be checked against the manual in the box. Northline did not test this unit.",
  },
  {
    slug: "levoit-core-300-p",
    name: "Levoit Core 300-P",
    brand: "Levoit",
    category: "air",
    tier: "everyday",
    spotlight: true,
    hero: false,
    plate: "purifier",
    updated: "2026-11-22",
    searchQuery: "Levoit Core 300-P air purifier",
    verdict: "The small-bedroom purifier. Quiet enough to sleep beside, and honest only if you ignore the thousand-square-foot line.",
    dek: "A compact cylinder rated for 222 square feet at 4.8 air changes an hour, with a 24 dB sleep mode and no air-quality sensor.",
    why: [
      "The Core 300-P is the machine you buy when the room is a bedroom and the Winix would be doing a job three sizes too big. Levoit's own manual lists CADR at 143 smoke, 153 dust, and 167 pollen, and a room of 222 square feet at the higher air-change rate. The marketing page also prints a figure past 1,000 square feet. That is one air change an hour. Both numbers can be on the same page. Only one of them is the bedroom.",
      "It is a cylinder about 8.7 inches across and 14.2 inches tall, under 8 pounds, drawing 56 watts. Sleep mode is published at 24 dB, and the top of the range is about 54.5 dB. Controls are manual speeds, a timer, a display you can turn off, and a filter indicator. There is no particle sensor and no auto mode. You choose the fan. For a lot of bedrooms that is a virtue: nothing to connect, nothing to argue with.",
      "The stack is three stages: a pre-filter, a HEPA-grade main filter, and carbon. Levoit sells alternate cartridges for pet allergy, smoke, and stronger odor. Use the maker's filters. A bargain cartridge that doesn't seal is a fan.",
      "If the room is the living room, move up to the [Coway Mighty](/products/coway-mighty-ap-1512hh) or the [Winix 5530](/products/winix-5530). The full sizing note is [Match the purifier to the room](/guides/air-purifier-room-size).",
    ],
    bestFor: [
      "A bedroom around 150 to 220 square feet",
      "People who want sleep mode and a display that goes dark",
      "A first purifier that should not require an account",
    ],
    skipIf: [
      "The room is a living room you share with a dog and a kitchen. The CADR is the wrong tool.",
      "You want the fan to react while you are out. This unit will keep doing whatever speed you left it on.",
      "You picked it because the listing said it covers a thousand square feet.",
    ],
    watchouts: [
      "HEPA-grade language is Levoit's. It is a sealed cylindrical filter, and it is not the same shopping errand as a Winix True HEPA panel. Read the listing's filter name and buy that one.",
      "The 'P' matters. Levoit has sold several Core 300 variants. Match the model on the box to Core 300-P before you compare notes.",
      "A purifier on the floor behind a dresser is furniture. Leave space around the intake.",
    ],
    specs: [
      { label: "Rated room", value: "222 sq ft at about 5 air changes/hour" },
      { label: "CADR", value: "Smoke 143 · dust 153 · pollen 167 CFM" },
      { label: "Noise", value: "24–54.5 dB, with a sleep mode" },
      { label: "Power", value: "56 W" },
      { label: "Controls", value: "Manual speeds, timer, display off. No sensor." },
      { label: "Size", value: "About 8.7 × 8.7 × 14.2 in, 7.9 lb" },
    ],
    faqs: [
      {
        q: "Core 300-P or Core 300S?",
        a: "The S models add smart features. The 300-P is the simpler cylinder. If you will not use an app, the P is the one to open. If you want scheduling from your phone, read the current S listing and check that its room rating still matches the bedroom.",
      },
      {
        q: "Will it help with wildfire smoke in a one-bedroom?",
        a: "In a small closed bedroom, run it on a higher speed and keep windows shut. The carbon stage is limited. Smoke that fills a whole apartment is a bigger CADR conversation, and a single Core 300-P in the living room will not clean the back room.",
      },
    ],
    related: ["coway-mighty-ap-1512hh", "winix-5530"],
    sources:
      "CADR, power, noise, room size, and dimensions are taken from Levoit's Core 300-P user manual and from the maker's published air-change figures. Northline did not test this unit.",
  },
];
