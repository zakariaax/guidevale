import type { Comparison } from "@/data/types";

export const comparisons: Comparison[] = [
  {
    slug: "winix-5530-vs-coway-mighty",
    title: "Winix 5530 vs Coway Mighty: which air purifier fits your room?",
    description:
      "Winix 5530 or Coway Airmega Mighty AP-1512HH? Certified room size, CADR, filters, ionizer, sensor, and shape side by side, with who should buy which.",
    dek: "Two purifiers rated for almost the same room. The choice is an app and one yearly filter, or a sensor that stops the fan and a squat box.",
    updated: "2026-11-26",
    minutes: 6,
    products: ["winix-5530", "coway-mighty-ap-1512hh"],
    pickIf: [
      [
        "The room is closer to 400 square feet: a primary bedroom or a modest living room",
        "You want an app and will actually open it",
        "You would rather replace one filter a year than track two dates",
        "Floor space is tight and a taller, narrower tower fits better",
        "You want an ionizer stage you can definitely switch off",
      ],
      [
        "The room is a medium living room around 360 square feet",
        "You want the fan to slow down or stop on its own when the air is already clean",
        "You do not want another app on your phone",
        "A quiet low setting matters: Coway publishes about 24 dB at the bottom",
        "A wider, shorter box suits the spot better than a 22-inch tower",
      ],
    ],
    bottomLine:
      "They clean nearly the same room at the same air-change rate. Buy the Winix for the app, the single yearly filter, and a little more room. Buy the Coway for the sensor that runs itself and a quieter floor. If both fit your room, today's price on the two listings is a fair tiebreaker.",
    table: [
      ["Certified room (AHAM)", "392 sq ft", "361 sq ft"],
      ["Air changes at that size", "About 4.8 per hour", "About 4.8 per hour"],
      ["CADR smoke · dust · pollen", "253 · 252 · 247 CFM", "233 · 246 · 240 CFM"],
      ["Filters", "Washable pre-filter, carbon, True HEPA, PlasmaWave", "Washable pre-filter, deodorizing filter, HEPA, bipolar ionizer"],
      ["Replacement schedule", "Filter Q (carbon and HEPA together), about yearly", "Deodorizing about every 6 months, HEPA about yearly"],
      ["Ionizer stage", "PlasmaWave, can be switched off", "Bipolar stage; confirm in the manual whether it disables"],
      ["Smart features", "Wi-Fi app and auto mode", "Particle sensor, auto mode, eco mode that can stop the fan"],
      ["Published noise", "Read the current listing", "About 24–53 dB"],
      ["Power", "65 W", "77 W"],
      ["Shape and size", "Tower, about 13.6 × 8.3 × 22.2 in, 12.6 lb", "Box, about 16.8 × 18.3 × 9.6 in, 12.3 lb"],
      ["Guidevale tier", "Step-up", "Step-up"],
    ],
    blocks: [
      { type: "h2", text: "They clean almost the same room" },
      {
        type: "p",
        text: "Start with the number that should decide any purifier: the AHAM certified room. The [Winix 5530](/products/winix-5530) is rated for 392 square feet and the [Coway Mighty](/products/coway-mighty-ap-1512hh) for 361, both at about 4.8 air changes an hour. That is a difference of roughly 30 square feet, or the size of a closet. If your room is near 400 square feet, the Winix has the honest edge. If it is around 350, either machine is sized correctly.",
      },
      {
        type: "p",
        text: "The CADR figures tell the same story. Winix publishes 253 for smoke, 252 for dust, and 247 for pollen. Coway's figures, as compiled by comparison desks, are 233, 246, and 240. Smoke is where the gap is widest, and it is still modest. Neither machine is the answer for one big open-plan room, and both boxes print a much larger 'up to' number that assumes one air change an hour. Ignore that one.",
      },
      { type: "h2", text: "The real difference is how you live with it" },
      {
        type: "p",
        text: "The Winix is a connected tower. It has Wi-Fi, an app, and an auto mode. If you like checking air quality from the couch or scheduling the fan, that is the machine built for it. If you never open apps, you are paying for a feature you will forget.",
      },
      {
        type: "p",
        text: "The Coway skips the app and leans on its particle sensor. Auto mode speeds the fan up when the room gets worse, and eco mode can stop the fan entirely when the air is already clean. That is the behavior people buy it for: a machine you set once and stop thinking about. The catch is that the sensor has to stay clean. Dust on the sensor makes it misread the room, so vacuum it when you clean the pre-filter.",
      },
      { type: "h2", text: "Filters: one date or two" },
      {
        type: "p",
        text: "Running cost is the second price of any purifier. The Winix combines its carbon and HEPA layers in a single Filter Q, replaced about once a year. The Coway splits them: a deodorizing filter Coway suggests replacing about every six months, and a HEPA filter about every year. Two schedules means two chances to forget, and the carbon layer that handles odor keeps loading up even when the HEPA still looks fine.",
      },
      {
        type: "callout",
        title: "Price the filters before the machine",
        text: "Open the replacement filter listings for both models on the same day you compare the purifiers. A cheaper machine with a pricier yearly filter set is not the cheaper machine by the second winter.",
      },
      { type: "h2", text: "The ionizer question" },
      {
        type: "p",
        text: "Both machines include an ionizer stage on top of mechanical filtration. On the Winix it is PlasmaWave, and it can be switched off while the carbon and HEPA keep working. On the Coway it is a bipolar stage. If you want mechanical filtration only, read the current manual for the unit you are buying and confirm whether that stage can be disabled before you order.",
      },
      { type: "h2", text: "Where each one belongs" },
      {
        type: "ul",
        items: [
          "A primary bedroom or a living room near 400 square feet, with someone who likes an app: the Winix 5530.",
          "A medium living room that gets cooking smells, pets, or a busy street, with people who will not touch the controls: the Coway Mighty.",
          "A small bedroom or a nursery: neither. The [Levoit Core 300-P](/products/levoit-core-300-p) is sized for it and costs less to run.",
          "One open room well past 400 square feet: neither. Look for a higher CADR instead of trusting the one-air-change number on the box.",
        ],
      },
      {
        type: "p",
        text: "The longer version of the room-size lesson, with all three purifiers side by side, is in [Match an air purifier to the room](/guides/air-purifier-room-size).",
      },
    ],
    faqs: [
      {
        q: "Which is better for allergies, the Winix 5530 or the Coway Mighty?",
        a: "For dust and pollen, the HEPA stage does the work in both, and both are rated at about 4.8 air changes an hour for their certified room. The better allergy machine is the one sized for your room and left running. Pick by square footage first, then by whether you want the app or the self-adjusting sensor.",
      },
      {
        q: "Can I turn off the ionizer?",
        a: "On the Winix 5530, yes: PlasmaWave is switchable and the mechanical filters keep working. On the Coway Mighty, check the current manual for the unit you are opening, because whether the bipolar stage can be disabled is the thing to confirm before buying.",
      },
      {
        q: "Which one costs less to run?",
        a: "The Winix draws up to 65 W and uses one combined filter about once a year. The Coway draws up to 77 W and uses two filters on different schedules. Electricity is a small part of either bill. Compare today's replacement filter prices for both models, because the filters are the real running cost.",
      },
      {
        q: "Which is quieter?",
        a: "Coway publishes a range of about 24 dB on low to about 53 dB on high. Our Winix note does not quote a noise figure, so read it on the current listing. For a bedroom, the fan speed you can sleep through matters more than the lowest number on either box.",
      },
    ],
    sources:
      "Room ratings, CADR, power, dimensions, and filter details come from Winix's published figures for the 5530 and Coway's published ratings for the AP-1512HH, as summarized on each Guidevale product note. Guidevale did not test either unit.",
    guide: "air-purifier-room-size",
  },
  {
    slug: "bose-quietcomfort-vs-sony-wh-1000xm6",
    title: "Bose QuietComfort vs Sony WH-1000XM6: comfort or control?",
    description:
      "Bose QuietComfort Headphones or Sony WH-1000XM6? Comfort, sound, app and EQ, glasses, generations, and who should buy which noise-canceling pair.",
    dek: "Two of the noise-canceling pairs everyone compares. Bose sells comfort at hour five. Sony sells control. Your ears and your habits decide.",
    updated: "2026-11-26",
    minutes: 6,
    products: ["bose-quietcomfort", "sony-wh-1000xm6"],
    pickIf: [
      [
        "You wear headphones for long stretches: flights, open offices, a day of calls",
        "Your last pair hurt your ears or pressed your glasses",
        "You want calm sound and silence more than a bass showcase",
        "You will never open an EQ app",
        "You want to spend a rung less than a flagship",
      ],
      [
        "Headphones are your office: calls, focus, travel, then music you care about",
        "You will use the app and push the sound around with an EQ",
        "You want the pair other headphones get measured against",
        "You have already priced the previous Sony XM5 and still want the current model",
        "Clamp force has never been a problem for you",
      ],
    ],
    bottomLine:
      "Comfort or control. The Bose is the pair people forget they are wearing, with polite sound and a gentle clamp. The Sony is the reference flagship, with an app and EQ for people who like to tune. If neither sounds like you, the Beats Studio Pro is the simpler, cheaper pair.",
    table: [
      ["Guidevale tier", "Step-up", "Splurge"],
      ["Point of the buy", "Clamp and cushion over a long day", "All-day noise canceling and tunable sound"],
      ["Sound out of the box", "Calm. Not a bass showcase.", "Tunable. Built for people who use the EQ."],
      ["App and EQ", "App behavior changes by generation", "A real EQ is the Sony habit"],
      ["With glasses", "The line's reputation: more comfortable than a hard clamp", "Comfort is not a spec Sony wins by default"],
      ["Name trap", "QuietComfort, QC Ultra, and QC Headphones (2nd Gen) are different listings", "XM6 and the previous XM5 sit side by side; the older one is often the deal"],
      ["Battery and multipoint", "Read the listing for the exact generation", "Read the listing; Guidevale does not restate Sony's figure"],
      ["Wear part to expect", "Ear cushions, sold as replacements", "Hinges, usually from stuffing cans in a bag"],
    ],
    blocks: [
      { type: "h2", text: "Comfort or control" },
      {
        type: "p",
        text: "These two pairs answer different questions. The [Bose QuietComfort Headphones](/products/bose-quietcomfort) answer 'how do they feel at hour five?' Bose has spent years being the headphone people forget they are wearing: plush cushions, a clamp frequent flyers recommend to each other, and noise canceling tuned for cabins and offices.",
      },
      {
        type: "p",
        text: "The [Sony WH-1000XM6](/products/sony-wh-1000xm6) answers 'what can these do?' Sony's WH-1000X line is the reference pair in the category, the one reviewers compare everything else to. You buy it when headphones are how you work: calls, focus, flights, and then a record you actually want to hear.",
      },
      { type: "h2", text: "Sound you leave alone, or sound you tune" },
      {
        type: "p",
        text: "Out of the box, the Bose sounds polite next to a pair that has been tuned for fun. That is a compliment if you listen to podcasts and land in new cities, and a miss if you wanted theater on a train. The Sony is built around its app and a real EQ. If you like a sound signature you can push around, that is its strongest argument. If you will never open the app, you are paying for a hobby you do not have.",
      },
      { type: "h2", text: "Fit beats specs" },
      {
        type: "p",
        text: "A headphone that hurts at minute forty is a return, however good its silence is. Bose's reputation is comfort, including for people who wear glasses: the arms of the glasses break the seal less than they do on a hard clamp. Sony's comfort is good for many heads and not guaranteed for yours. If clamp force has bothered you on every flagship, try the Bose first.",
      },
      {
        type: "callout",
        title: "Use the return window as the test",
        text: "Wear the pair for a full workday or a long flight inside the return window, with your own glasses if you wear them. That tells you more than any reviewer's adjectives, including ours.",
      },
      { type: "h2", text: "Names and generations will trip you" },
      {
        type: "p",
        text: "Bose sells QuietComfort, QuietComfort Ultra, and QuietComfort Headphones (2nd Gen) as separate listings with different prices. The 2nd Gen over-ear is the one this comparison is about. Read the model line under the photo before you buy.",
      },
      {
        type: "p",
        text: "With Sony, the trap is the previous generation. The XM5 often stays on sale next to the XM6, and a year into a new model, the older one is frequently the smarter spend. Open both listings. If the gap is large and you cannot name what the XM6 adds for you, buy the XM5.",
      },
      { type: "h2", text: "What we will not tell you" },
      {
        type: "p",
        text: "We are not going to print battery hours or a noise-canceling score. Those numbers change between generations, and the older listing usually stays up. Read battery, multipoint, and codec support on the exact listing you are buying. Guidevale did not measure either pair.",
      },
      {
        type: "products",
        slugs: ["beats-studio-pro"],
        note: "If you want a simpler pair and the difference in your pocket:",
      },
      {
        type: "p",
        text: "More on choosing a pair you will still like in a year is in [Headphones you'll still want next year](/guides/headphones-you-keep).",
      },
    ],
    faqs: [
      {
        q: "Which has better noise canceling, Bose QuietComfort or Sony WH-1000XM6?",
        a: "Both lines are known for strong noise canceling, and Sony's WH-1000X series is the reference many reviews measure against. Bose tunes for cabins and offices and wins on comfort. The seal decides real-world silence, so the pair that fits your head and glasses best will usually sound quieter to you.",
      },
      {
        q: "Which is better with glasses?",
        a: "The Bose QuietComfort line has the reputation for it, because its clamp is gentler than most flagships. Glasses still break the seal a little on any over-ear pair. Try them with your own glasses inside the return window.",
      },
      {
        q: "Should I buy the Sony XM5 instead of the XM6?",
        a: "Often, yes. When a new generation arrives, the previous one tends to drop while the new one holds its price. If the gap is large and you cannot name a change in the XM6 that matters to you, the XM5 is the better spend for most people.",
      },
      {
        q: "Is the Bose QuietComfort Ultra worth it over the QuietComfort Headphones?",
        a: "Ultra is the step above, with its own price and immersive modes. If you have not missed those modes, the QuietComfort Headphones are the pair people wear all day. A small price gap makes Ultra tempting; a large one makes the non-Ultra the sensible choice.",
      },
    ],
    sources:
      "Comfort, tuning, and naming notes come from Bose's long-published QuietComfort design and November 2026 retail coverage of the 2nd Gen model. Sony notes describe the current WH-1000X generation as covered in November 2026 retail reporting. Guidevale did not measure either pair, and does not restate battery figures that change by generation.",
    guide: "headphones-you-keep",
  },
  {
    slug: "robot-vs-upright-vacuum",
    title: "Robot vacuum vs upright vacuum: eufy Omni C28 or Shark Navigator?",
    description:
      "Robot vacuum or upright? The eufy Omni C28 and Shark Navigator Lift-Away compared on floors, stairs, mopping, obstacles, upkeep, and who should own one or both.",
    dek: "One maintains a floor while you are out. The other does the stairs, the car, and the day the robot gets stuck. Many homes end up with both, and that is not a failure.",
    updated: "2026-11-26",
    minutes: 6,
    products: ["eufy-omni-c28", "shark-navigator-lift-away"],
    pickIf: [
      [
        "You live in an apartment or a smaller home with mostly hard floors",
        "You want a daily pass and mop without doing it yourself",
        "The household will keep socks, cables, and toys off the floor",
        "You have measured a spot for the dock",
        "You prefer a robot without a camera",
      ],
      [
        "You have stairs, a car, or upholstery to clean",
        "Rugs and carpet are a big part of the home",
        "You want one tool that handles the deep clean",
        "You are fine with a cord, a dust cup, and some noise",
        "You want the lower of the two price tiers",
      ],
    ],
    bottomLine:
      "A robot maintains a floor you already picked up. An upright does the jobs a robot refuses. In a small, mostly hard-floor home, the robot changes your week. With stairs, rugs, or a car, the upright is the one you cannot skip. If the budget allows, a robot for weekdays and an upright for the stairs is a normal setup.",
    table: [
      ["Job", "Daily vacuum and mop while you are away", "Deep clean, stairs, car, and edges by hand"],
      ["Who does the work", "The robot, after you clear the floor", "You"],
      ["Best floors", "Hard floors in a smaller home", "Carpet, rugs, stairs, and hard floors"],
      ["Stairs and car", "No", "Yes: the canister lifts off the base"],
      ["Mopping", "Yes. The dock washes the mop with hot water and dries it with hot air", "No"],
      ["Obstacles", "Mediocre. Cables and socks still go first", "You steer"],
      ["Camera", "None", "Not applicable"],
      ["Upkeep", "Mop pads and dock solution; confirm whether the dock empties the bin", "Empty the cup, clean the filter, cut hair off the brush"],
      ["Noise", "Quiet next to an upright", "Loud, like any upright"],
      ["Space needed", "A spot for the dock: measure the dock, not the robot", "A closet corner"],
      ["Guidevale tier", "Step-up", "Everyday pick"],
    ],
    blocks: [
      { type: "h2", text: "They do not do the same job" },
      {
        type: "p",
        text: "The question 'robot or upright?' sounds like a choice between two vacuums. It is closer to a choice between a dishwasher and a sponge. The [eufy Omni C28](/products/eufy-omni-c28) keeps a floor clean day to day while you are out. The [Shark Navigator Lift-Away](/products/shark-navigator-lift-away) is the tool you push when something needs real cleaning, or when the floor goes up a flight of stairs.",
      },
      { type: "h2", text: "When the robot wins" },
      {
        type: "p",
        text: "Through November 2026 the Omni C28 was the best-selling robot vacuum in twelve-month roundups. The Verge's smart-home editor tested 16 robot mops and named it a top pick for apartments and smaller homes: it navigates well, it is narrow enough for tight rooms, its mop handled dried oatmeal on hardwood, and the dock washes the mop roller with hot water and dries it with hot air.",
      },
      {
        type: "p",
        text: "That makes it the right buy for a smaller home with mostly hard floors, where the goal is a floor that stays clean without anyone thinking about it. It also has no camera, which matters if a robot with a lens in your home bothers you.",
      },
      {
        type: "callout",
        title: "The robot's honest weakness",
        text: "Obstacle avoidance is mediocre, by the same review's account. Cables, socks, and pet toys need to be off the floor before a run. A robot that eats a phone cord is an expensive mop.",
      },
      { type: "h2", text: "When the upright wins" },
      {
        type: "p",
        text: "The Navigator's whole idea is that the canister lifts off the base. You can carry it up the stairs, into the car, or along a baseboard with the hose. Those are exactly the jobs robots skip. It also handles rugs and carpet without wondering whether to lift a mop pad.",
      },
      {
        type: "p",
        text: "The tradeoffs are ordinary: it is loud, it is bagless so the cup needs emptying, and the filter needs cleaning or it will 'suddenly' lose suction. Model names within the Lift-Away family differ in hose and pet tools, so read the exact model on the listing.",
      },
      { type: "h2", text: "Why many homes end up with both" },
      {
        type: "p",
        text: "A robot handles weekday dust and mopping. An upright handles stairs, the car, the crumb line under the cabinets, and the day the robot gets stuck on a sock. If the problem is stains on carpet or upholstery rather than dust, neither one is the tool: that is the [Bissell Little Green](/products/bissell-little-green).",
      },
      { type: "h2", text: "Before you buy either" },
      {
        type: "ul",
        items: [
          "Robot: measure the space for the dock, not the robot. A station that does not fit ends up in the hallway.",
          "Robot: check the current listing for whether the dock empties the dust bin or only washes and dries the mop. Those are different chores.",
          "Upright: read the exact model name and tool list. A cheaper listing is sometimes cheaper because the hose or pet brush is missing.",
          "Both: a percent-off badge is not the decision. [How to read an Amazon discount](/guides/read-a-discount) takes eight minutes.",
        ],
      },
      {
        type: "p",
        text: "Thinking about a robot for a small space? [A robot vacuum in an apartment](/guides/apartment-robot-vacuum) covers dock space, rugs, and the household habits that make or break one.",
      },
    ],
    faqs: [
      {
        q: "Can a robot vacuum replace an upright vacuum?",
        a: "Not entirely. A robot maintains open floor you have already cleared. It cannot do stairs, a car, upholstery, or a neglected rug. In a small apartment with mostly hard floors, some people manage with a robot and a handheld. With stairs or lots of carpet, keep an upright.",
      },
      {
        q: "Is a robot vacuum worth it for pet hair?",
        a: "For hair on hard floors that are otherwise clear, yes: a daily run keeps it from building up. It will not clean pet hair off stairs or a sofa, and it may try to eat toys. Long hair and tassels belong in the pick-up pile.",
      },
      {
        q: "Which is better for a small apartment?",
        a: "If the floors are mostly hard and you have a spot for the dock, the robot changes your week more. If the apartment is mostly carpet or you have no room for a station, an upright is the simpler buy.",
      },
      {
        q: "Does the eufy Omni C28 have a camera?",
        a: "No. That is a privacy plus, and it is also why its obstacle avoidance is weaker than camera-based robots. Plan to pick up cables and socks before each run.",
      },
    ],
    sources:
      "Omni C28 sales position comes from public bestseller roundups as of November 22, 2026; cleaning, navigation, dock, camera, and obstacle notes are summarized from The Verge's November 20, 2026 review. Shark notes describe the Lift-Away design sold across several model numbers. Guidevale did not test either vacuum.",
    guide: "apartment-robot-vacuum",
  },
];
