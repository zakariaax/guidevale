import type { Product } from "@/data/types";

export const homeProducts: Product[] = [
  {
    slug: "echo-dot-5",
    name: "Echo Dot (5th Gen)",
    brand: "Amazon",
    category: "home",
    tier: "everyday",
    spotlight: true,
    hero: false,
    plate: "speaker",
    updated: "2026-11-22",
    searchQuery: "Echo Dot 5th generation",
    verdict: "The small speaker that still leads the category. Buy it for timers and a voice in the kitchen, not for music you care about.",
    dek: "A compact Alexa speaker. Useful on a counter. The wrong object if the point was listening.",
    why: [
      "Twelve-month sales lists in November 2026 still put the Echo Dot (5th Gen) first among speakers. That matches how people actually use it: a kitchen timer, a shopping list, a voice to turn a lamp on, a speaker that is fine for the news. It is not a hi-fi. If the music matters, leave this page and read [Sound](/categories/sound).",
      "Amazon has repriced Echo hardware, and the MSRP on the box is a poor guide to whether today is a deal. Open the listing. Decide whether you would pay today's number for a timer and a voice. A painted percent off a number Amazon raised is not a research finding. The longer version is [How to read a discount](/guides/read-a-discount).",
      "There is a microphone in the room. The mute button is the feature. If a household doesn't want a mic on the counter, this is an easy no, and no sale changes it. Alexa+ and newer Echo models with screens, like the Spot, are a different product with a different job. Don't let a bundle name decide.",
      "Cameras and doorbells are where the bill hides. Read [The subscription question](/guides/smart-home-subscriptions) before you add a [Blink](/products/blink-outdoor-4) or a [doorbell](/products/eufy-doorbell-e340) to the same cart.",
    ],
    bestFor: [
      "Kitchens, bedrooms, and a guest room that needs a timer",
      "A first voice speaker when you already know you will talk to it",
      "Smart-home control of plugs and bulbs you already own",
    ],
    skipIf: [
      "You wanted a speaker for records, focus, or a party. Buy headphones or a real speaker.",
      "Nobody in the house wants a microphone on the counter.",
      "You are buying it because a percent-off badge is large. Price the job, not the badge.",
    ],
    watchouts: [
      "With a clock and without a clock are different Dots. Kids editions are a different product. Read the title.",
      "Voice shopping is on unless you turn it off. If you have a household of people who say 'Alexa, order' as a joke, turn it off first.",
      "A Dot does not by itself record video. The moment you add a camera, you have a different privacy problem. Keep those decisions separate.",
    ],
    specs: [
      { label: "Job", value: "Voice assistant and a small-room speaker" },
      { label: "Not the job", value: "Music you sit down to hear" },
      { label: "Privacy", value: "Mic mute is a hardware button. Use it." },
      { label: "Generation", value: "5th Gen. Don't accept a mystery older Dot in a bundle." },
    ],
    faqs: [
      {
        q: "Dot, Pop, or a model with a screen?",
        a: "The Dot is the default because the speaker is good enough and the size disappears. The Pop is smaller and cheaper to treat as a timer. A screen (Spot, Show) is for a nightstand clock or a kitchen you will look at. Buy the screen only if you will look at it.",
      },
      {
        q: "Does it work if the internet drops?",
        a: "Almost nothing about Alexa works without the network. A kitchen timer you needed during an outage is a reason to also own a $8 timer. This is not a criticism of the Dot. It is the shape of the product.",
      },
    ],
    related: ["blink-outdoor-4", "eufy-doorbell-e340"],
    sources:
      "Sales position from public speaker bestseller roundups as of November 22, 2026. The note about Echo price increases follows contemporaneous retail reporting. Guidevale did not benchmark speaker quality.",
  },
  {
    slug: "blink-outdoor-4",
    name: "Blink Outdoor 4",
    brand: "Blink",
    category: "home",
    tier: "everyday",
    spotlight: true,
    hero: false,
    plate: "speaker",
    updated: "2026-11-22",
    searchQuery: "Blink Outdoor 4 security camera",
    verdict: "A simple battery camera for a yard. The plan, not the camera, decides whether it is cheap.",
    dek: "Weatherproof, battery-powered, with person detection and a wider view than the Outdoor before it. Read the current Blink plan before you buy a second one.",
    why: [
      "The Outdoor 4 is the camera people recommend when they want a view of a gate or a porch without running a wire. Review notes that have held up: it is small, it runs on AA batteries, setup is ordinary, the field of view is wider than the previous Outdoor, and person detection is the feature that makes the notifications usable. None of that is a security system. It is a camera that wakes up.",
      "Blink's plans are the product you are also buying. What you can see live, what is stored, and which alerts exist without a subscription have changed before and will change again. Guidevale will not print a plan price that expires. Open Blink's current plan page, and open the listing, and see what a single camera does the day you don't subscribe. Then decide.",
      "Many Outdoor kits still expect a Sync Module somewhere in the house. Confirm that on the kit in the cart. A camera advertised alone and a camera that needs a hub are different errands.",
      "If the job is a door and a package, the [E340 doorbell](/products/eufy-doorbell-e340) is the more direct tool. If the job is a voice in the kitchen, it is the [Dot](/products/echo-dot-5), and it should not be in the same decision. The questions to ask of all three are in [The subscription question](/guides/smart-home-subscriptions).",
    ],
    bestFor: [
      "A wire-free view of a yard, gate, or porch",
      "Renters and houses where running power is the thing you will never do",
      "Someone who has already read what the free tier records",
    ],
    skipIf: [
      "You want 24/7 recording. A battery camera sleeps. That is how the battery lasts.",
      "You have not looked at the subscription and you are buying a four-pack because the bundle percent looks large.",
      "The area is a hallway you could cover with a plugged-in camera that stores locally. Don't buy batteries to solve a power-outlet problem.",
    ],
    watchouts: [
      "Person detection is better than motion-on-a-tree and it is not a guard. Animals, headlights, and a neighbor's visit will still teach you about notification settings.",
      "Battery life depends on traffic and cold. A camera aimed at a sidewalk will eat cells. AA batteries are the maintenance.",
      "Point it at your property. A camera aimed into a neighbor's window is a feud, not a feature.",
    ],
    specs: [
      { label: "Power", value: "Battery, commonly AA. Confirm the pack." },
      { label: "Place", value: "Outdoors. Weatherproof housing." },
      { label: "Detection", value: "Person detection, wider view than the prior Outdoor" },
      { label: "The other price", value: "Blink's current plan, and whether a Sync Module is in the kit" },
    ],
    faqs: [
      {
        q: "Is a big percent off the Outdoor 4 a real deal?",
        a: "This camera is discounted often, including deep cuts in holiday coverage. The camera price can be genuinely low and the plan can still be the bill. Treat a low hardware price as an invitation to read the plan, not as the end of the math.",
      },
      {
        q: "Does it record all night?",
        a: "It records events, not a continuous DVR, unless the current plan and the current hardware say otherwise. A battery camera that recorded continuously would be a camera you recharge every day. If continuous is the requirement, buy a powered camera on purpose.",
      },
    ],
    related: ["eufy-doorbell-e340", "echo-dot-5"],
    sources:
      "Hardware notes (battery, weatherproofing, person detection, wider field of view) follow published Outdoor 4 reviews, including November 2026 retail coverage. Subscription terms are deliberately not quoted because Blink changes them. Guidevale did not install this camera.",
  },
  {
    slug: "eufy-doorbell-e340",
    name: "eufy Video Doorbell E340",
    brand: "eufy",
    category: "home",
    tier: "step-up",
    spotlight: false,
    hero: false,
    plate: "speaker",
    updated: "2026-11-22",
    searchQuery: "eufy Video Doorbell E340",
    verdict: "The dual-camera doorbell people have been buying. Power and where the video lives matter more than the second lens.",
    dek: "A doorbell sold with two views, one for the person and one toward the package. Confirm power and storage on the kit before you drill.",
    why: [
      "The E340 led recent doorbell sales lists for a reason you can explain to a person at the door: one camera looks at the visitor, one looks down at the step where packages disappear. That is the product. It is a good product if you own the door, you can power it the way the kit expects, and you have read where video is stored.",
      "eufy markets local storage. Plans and add-ons still exist around the edges of that sentence. Read the current listing for which events stay on the home base and which ones ask for a cloud feature. A doorbell that needs a monthly fee to show you a package is a different purchase from the one in the ad.",
      "Power is the install. Battery, wired, or a kit that can do both will be printed on the listing and ignored by the bundle photo. Wired is better if a previous doorbell already ran wires and you are allowed to use them. Battery is better if you rent or the wires are a mystery. If you rent, don't drill. A removable mount is the whole ethics of the install.",
      "A yard camera is the [Outdoor 4](/products/blink-outdoor-4). A counter speaker is the [Dot](/products/echo-dot-5). Buying all three because a roundup said 'smart home' is how a weekend becomes a subscription. [The subscription question](/guides/smart-home-subscriptions) is the checklist.",
    ],
    bestFor: [
      "A front door you own, with packages that sit on the step",
      "People who have checked power and storage before the drill comes out",
      "A household that will answer the door from a phone and also still open the door",
    ],
    skipIf: [
      "You rent and the lease is quiet about cameras and holes.",
      "You have not read the storage terms and you are assuming 'no fee' from a review written last year.",
      "The problem is a back gate, not a door. Buy a camera for the gate.",
    ],
    watchouts: [
      "Dual camera means two lenses to keep clean and a wider privacy footprint. Aim at your step, not across the street into a neighbor's entrance.",
      "Chime kits and existing mechanical chimes are a compatibility line on the listing. Read it before you disconnect the old button.",
      "HomeBase models differ. A bundle with a base and a bare doorbell are not the same box.",
    ],
    specs: [
      { label: "Views", value: "Dual camera: visitor and package step" },
      { label: "Confirm", value: "Battery, wired, or both, on this exact kit" },
      { label: "Storage", value: "Read what stays local and what asks for a plan" },
      { label: "Install", value: "Own the door, or don't drill" },
    ],
    faqs: [
      {
        q: "Is the second camera worth it?",
        a: "If packages are the thing that goes missing, yes. If you only want to see a face, a simpler doorbell is a smaller install and you should not pay for a lens aimed at the mat. The E340's fame is the package view. That is either your problem or it isn't.",
      },
      {
        q: "Will it work with Alexa or a chime I already own?",
        a: "Sometimes, depending on the kit and the chime. Treat compatibility as a listing checkbox you verify, not as a promise from a category page. Have a way to put the old doorbell back before you disconnect it.",
      },
    ],
    related: ["blink-outdoor-4", "echo-dot-5"],
    sources:
      "Sales position from public doorbell roundups as of November 22, 2026. The dual-camera package view is the E340's advertised design. Storage and power options change by kit and should be read on the listing. Guidevale did not install this doorbell.",
  },
];
