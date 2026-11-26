import type { Product } from "@/data/types";

export const careProducts: Product[] = [
  {
    slug: "suri-toothbrush",
    name: "SURI sonic toothbrush",
    brand: "SURI",
    category: "care",
    tier: "step-up",
    spotlight: true,
    hero: false,
    plate: "care",
    updated: "2026-11-22",
    searchQuery: "SURI sonic electric toothbrush",
    verdict: "The sonic brush reviewers have been putting first. Heads are the second bill, and floss is still a separate tool.",
    dek: "A slim aluminum handle, a pressure sensor that eases off instead of beeping, and a travel case that charges while it UV-cleans the head.",
    why: [
      "SURI's sonic brush has been sitting at the top of independent electric-toothbrush guides, including Tom's Guide's, for a specific set of reasons. Published figures: about 33,000 sonic strokes a minute, a pressure sensor that reduces vibration when you push too hard instead of flashing a scolding light, an aluminum body, brush heads the company sells as recyclable, a battery on the order of 40 days, and a travel case that charges the brush and UV-cleans the head.",
      "That is a lot of toothbrush. It is still a toothbrush. It does not replace a dentist, and it does not replace floss or a water flosser for the edge of the gum. If the gap you skip is between teeth, read the [Aquarius](/products/waterpik-aquarius) and own both or own the one you will use.",
      "Heads are the running cost. A beautiful handle with a subscription you resent is how people go back to a manual brush. See the price of a year's heads on the listing before you decide the handle is a deal. A sale on the handle and a shrug at the heads is how the math gets flattering.",
      "The [CHI iron](/products/chi-original-flat-iron) is the other 'tool you replace on a schedule or keep for years' on this shelf. They do not belong in the same decision, except that both punish a person who skips the boring companion product: heads here, heat protectant there.",
    ],
    bestFor: [
      "Someone ready to keep an electric brush by the sink and actually charge it",
      "Travelers who want the case to do something besides rattle",
      "People who press too hard and ignore beep-style sensors",
    ],
    skipIf: [
      "You will not replace heads. A manual brush you use well beats a dead sonic brush.",
      "You wanted the cheapest electric brush that vibrates. This is the step-up, and the step-up is wasted if you hate the feel.",
      "You think it removes the need to clean between teeth. It doesn't.",
    ],
    watchouts: [
      "Model names move (SURI 1.0, 2.0, Pro). The listing's strokes, battery, and whether the case includes UV are the spec. Match them to the paragraph above before you assume you are buying this one.",
      "Recyclable heads still have to be sent back or dropped where the company says. A head in the trash is a head in the trash, whatever the adjective was.",
      "Electric brushes are a sensation. If sonic feels ticklish or harsh, use the return window. No review can feel your teeth.",
    ],
    specs: [
      { label: "Motion", value: "About 33,000 sonic strokes a minute" },
      { label: "Pressure", value: "Sensor eases vibration instead of a beep" },
      { label: "Battery", value: "On the order of 40 days" },
      { label: "Case", value: "Travel case that charges and UV-cleans the head" },
      { label: "Running cost", value: "Replacement heads" },
    ],
    faqs: [
      {
        q: "Is a sonic brush better than a manual one?",
        a: "A brush you use for two minutes, reaching the gumline, beats a technology you avoid. Sonic brushes help people who under-brush, because the motion covers more once the head is in the right place. They do not excuse rushing, and they do not floss.",
      },
      {
        q: "Why not a big drugstore brand?",
        a: "Buy the drugstore brand if the heads are easy to find and you like the feel. SURI is here because reviewers keep ranking the whole package first, especially the pressure behavior and the case. That is a preference with a price, not a medical ranking.",
      },
    ],
    related: ["waterpik-aquarius", "chi-original-flat-iron"],
    sources:
      "Stroke rate, pressure behavior, materials, battery, and travel-case features follow SURI's published specs as reported in Tom's Guide's electric toothbrush coverage in November 2026. Guidevale did not run a clinical study. This is not dental advice.",
  },
  {
    slug: "chi-original-flat-iron",
    name: "CHI Original 1-inch flat iron",
    brand: "CHI",
    category: "care",
    tier: "everyday",
    spotlight: false,
    hero: false,
    plate: "care",
    updated: "2026-11-22",
    searchQuery: "CHI Original 1 inch ceramic hairstyling iron",
    verdict: "The salon iron that has been in bags for years. It runs hot. Heat protectant is part of the purchase.",
    dek: "A 1-inch ceramic flat iron for a polished, straight pass. The wrong tool for hair that is already breaking.",
    why: [
      "The original CHI 1-inch is one of those tools that stays in the 'people actually buy this' pile because salons made it ordinary. One inch is the versatile plate width: short hair, long hair, a bend at the ends. Narrower plates are for short cuts and edges. Wider plates are faster on long, thick hair and clumsier everywhere else.",
      "It gets hot, and it gets hot on purpose. That is how a pass looks smooth, and it is how damaged hair gets more damaged. A heat protectant is not a lotion the internet invented. It is the companion product. If the hair is bleached, fine, or already snapping, a hot iron is a poor place to save money. Look for a tool with real temperature control and stay lower.",
      "On the listing, check the cord: swivel, length, and whether you are buying the original ceramic iron or a CHI tool with a similar name and a different plate. The brand has a family. The original is the one this note is about.",
      "This is a styling tool, not a treatment. It sits on the care shelf next to the [SURI](/products/suri-toothbrush) only because both are tools people keep. They solve nothing about each other.",
    ],
    bestFor: [
      "A straight, polished finish on hair that can take heat",
      "Someone who already uses protectant and will not skip it because the morning is short",
      "A 1-inch plate as the one iron, rather than a set",
    ],
    skipIf: [
      "Hair is bleached, breaking, or very fine. High heat is the problem you already have.",
      "You want curls and volume as the main style. A iron can bend ends. It is not a roller set.",
      "You will use it on dripping wet hair. Dry the hair first. Steam against a plate is how ends split.",
    ],
    watchouts: [
      "Don't believe a 'salon only' story as a reason to overpay. Do believe the plate and the model name. Fakes of famous irons exist. Buy from the listing that is clearly CHI, not a photo with the logo slightly wrong.",
      "A plate with a chip scratches. If you already own one and it snags, the sale on a new one is more real than a sale on a first iron you don't need.",
      "Unplug it. A hot iron on a bed is a fire note, not a styling note.",
    ],
    specs: [
      { label: "Plate", value: "1 inch, the general-purpose width" },
      { label: "Heat", value: "Runs hot. Protectant is required." },
      { label: "Confirm", value: "Original ceramic iron, not a similarly named CHI tool" },
      { label: "Cord", value: "Check swivel and length on the listing" },
    ],
    faqs: [
      {
        q: "Is 1 inch the right width?",
        a: "For most hair, yes. If your hair is very short, a narrower plate is easier at the root. If your hair is extremely long and thick and you care about speed, a wider plate saves passes, and each pass is heat. Fewer careful passes beat more rushed ones.",
      },
      {
        q: "How is this a deal product?",
        a: "It is a product people keep, and it is a product whose price moves. The deal is a real CHI original at a number you would pay on a boring Tuesday. A huge percent off a list price you have never seen in a store is not information. [Read the discount](/guides/read-a-discount).",
      },
    ],
    related: ["suri-toothbrush", "waterpik-aquarius"],
    sources:
      "This is a buying note on the long-sold CHI Original 1-inch ceramic iron and the way it is used. Plate width and heat behavior are the product's well-known design. Guidevale did not instrument plate temperature.",
  },
  {
    slug: "waterpik-aquarius",
    name: "Waterpik Aquarius",
    brand: "Waterpik",
    category: "care",
    tier: "everyday",
    spotlight: false,
    hero: false,
    plate: "care",
    updated: "2026-11-22",
    searchQuery: "Waterpik Aquarius water flosser",
    verdict: "The countertop water flosser you will use at night, because it doesn't need to be charged and it doesn't hide in a drawer.",
    dek: "A reservoir and a handle on a cradle. It takes counter space. A cordless model is easier to store and easier to forget.",
    why: [
      "The Aquarius is the water flosser that became the default recommendation because it stays on the counter, plugged in, full of water. That is unglamorous and it is the whole reason it works. A cordless flosser in a cabinet is a gadget. A reservoir you see while you brush is a habit.",
      "It does not replace a toothbrush. Brushing cleans the surfaces. A water flosser is for the edge and the spaces people skip with string, and for braces, bridges, and gums that punish traditional floss. Many people do best with both. If you will only keep one electric tool, a brush you use beats a flosser you don't, and the [SURI](/products/suri-toothbrush) page is honest about that limit too.",
      "It splashes until you learn the angle. Lean over the sink, start on a low pressure, and close your lips enough to keep the bathroom dry. Pressure range on the Aquarius is wide. Start low. Gums that bleed a little at first are a reason to be gentle and consistent, not a reason to turn it to the top setting on night one. Bleeding that doesn't calm down is a dentist, not a higher number.",
      "Tips are a small ongoing cost, and the tip in the box is not the only tip. Orthodontic and plaque-seeker tips exist. Buy the special tip if you have the hardware in your mouth. Don't buy a drawer of tips you will not switch.",
    ],
    bestFor: [
      "People who will not string-floss and will use a machine they can see",
      "Braces, bridges, and gums that need a gentler daily flush",
      "A bathroom with a few inches of counter and an outlet",
    ],
    skipIf: [
      "There is no counter and no outlet. A cordless Waterpik is the compromise, with the risk that you will not charge it.",
      "You already floss well and you are collecting appliances. You don't need this.",
      "You want something you can throw in a toiletry bag every week. The Aquarius is a counter object. Travel wants a cordless model.",
    ],
    watchouts: [
      "Don't aim it at a healing extraction or a situation a dentist told you to leave alone. This is a hygiene tool, not a treatment.",
      "Empty the reservoir if you will be away. Standing water is not a feature.",
      "Confirm 'Aquarius' on the listing. Waterpik's cordless and smaller counter models are easier to confuse in a search grid than in a bathroom.",
    ],
    specs: [
      { label: "Form", value: "Countertop reservoir and corded handle" },
      { label: "Habit", value: "Stays out, so it gets used" },
      { label: "Pressure", value: "A wide range. Start low." },
      { label: "Running cost", value: "Replacement tips" },
    ],
    faqs: [
      {
        q: "Is a water flosser as good as string floss?",
        a: "String floss, used well, scrapes the contact between teeth in a way water doesn't copy exactly. Water is what a lot of people will actually do every night, and it is genuinely useful along the gumline. Dentists often tell patients to use both. If you will only do one, do the one you will do.",
      },
      {
        q: "Countertop or cordless?",
        a: "Countertop if it can live next to the sink. Cordless if the counter is impossible or you travel. The Aquarius wins on 'I used it,' not on packing.",
      },
    ],
    related: ["suri-toothbrush", "chi-original-flat-iron"],
    sources:
      "This note describes the Waterpik Aquarius countertop water flosser, the long-selling reservoir model. Tip names and pressure settings should be confirmed on the current listing. Guidevale did not run a clinical comparison against string floss. This is not dental advice.",
  },
];
