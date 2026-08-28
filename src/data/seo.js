export const SITE_URL = 'https://www.maharaja.travel';

export const tripSlugs = {
  japan: 'japan',
  brazil: 'brazil',
  vietnam: 'vietnam',
  ecuador: 'galapagos',
  patagonia: 'patagonia',
  sanfrancisco: 'san-francisco',
  egypt: 'egypt',
  jordan: 'jordan',
};

export const destinationNames = {
  japan: 'Japan',
  brazil: 'Brazil',
  vietnam: 'Vietnam',
  ecuador: 'Galápagos',
  patagonia: 'Patagonia',
  sanfrancisco: 'San Francisco',
  egypt: 'Egypt',
  jordan: 'Jordan',
};

const metaDescription = (name) => {
  if (name === 'San Francisco') {
    return 'All-in San Francisco trips with flights, hotels, transfers and an English-speaking guide. One fixed price. Fixed departures Oct 2026–Mar 2027.';
  }
  return `All-in ${name} trips with round-trip flights, hotels, private transfers and an English-speaking guide. One fixed price. Fixed departures Oct 2026–Mar 2027.`;
};

const howBulletsEgypt = [
  'Start from the all-in fixed total.',
  'Tune experiences, flight and hotel tiers, and traveler count live.',
  "Review the day-by-day itinerary and What's Included / Not Included.",
  'Book in the multi-passenger flow or engage a human — 1-888-903-0001, live chat, or expert reply in 24 hours.',
];

const howBulletsJordan = [
  'Land on the all-in fixed package total.',
  'Customize experiences, flight and hotel tiers, and traveler count in real time.',
  "Review the day-by-day itinerary and What's Included / Not Included before committing.",
  'Book or talk to a human: 1-888-903-0001, live chat, or expert reply within 24 hours.',
];

const transparentEgypt = 'Transparent by design. The live price bar shows Flight + Stay, Add-ons and Total, updating as you toggle experiences, choose a personality preset (Food Lover, Adventure, Culture, Luxury), upgrade to business-class flights or premium hotels, and add trip protection (5% basic / 8% cancel-for-any-reason).';

const transparentStandard = 'One fixed, per-person price with no hidden math. Tune the trip live in the builder — toggle experiences, set a personality preset, upgrade to business-class flights or premium hotels, and add trip protection (5% or 8% cancel-for-any-reason) — and the sticky price bar recalculates Flight + Stay, Add-ons and Total instantly.';

const trustFirstTimers = 'For cautious first-timers: structure, safety and local expertise come standard — English-speaking guides throughout, private transfers, a named destination-expert profile and dated traveler reviews.';

const trustUpgraders = 'For first-timers and upgraders: the English-speaking guide and private transfers handle the geography and language, backed by a destination-expert profile and dated traveler reviews.';

export const tripSeo = {
  japan: {
    title: 'Japan Guided Trips | Fixed Dates 2026–2027 | Maharaja',
    metaDescription: metaDescription('Japan'),
    h1: 'Guided Trips to Japan — All-Included, Fixed-Date',
    intro: 'Japan is a bucket-list destination where the logistics — language, trains, etiquette, reservations — usually dominate the planning. Maharaja removes all of it. Your package includes round-trip flights from US gateways, every hotel night, private transfers, an English-speaking local guide, included experiences and 24/7 in-trip support — assembled into set departures from October 2026 through March 2027, priced up front as one fixed per-person total.',
    transparent: 'No guessing at the real cost. The live price bar splits your total into Flight + Stay, Add-ons and Total, and recalculates as you toggle experiences, choose a personality preset (Food Lover, Adventure, Culture, Luxury), upgrade to business-class flights or premium hotels, and add trip protection (5% basic / 8% cancel-for-any-reason).',
    howTitle: 'How your Japan trip is built:',
    howBullets: howBulletsEgypt,
    trustNote: trustFirstTimers,
  },
  brazil: {
    title: 'Brazil Guided Trips | Fixed Dates 2026–2027 | Maharaja',
    metaDescription: metaDescription('Brazil'),
    h1: 'Guided Trips to Brazil — All-Included, Fixed-Date',
    intro: 'Brazil is rhythm, views and adrenaline — and Rio de Janeiro is the Cidade Maravilhosa that ties them together. Maharaja assembles the whole trip: round-trip flights from US gateways, every hotel night, private transfers, an English-speaking local guide, included experiences and 24/7 in-trip support, on fixed departures from October 2026 through March 2027.',
    transparent: transparentStandard,
    howTitle: 'How your Brazil trip is built:',
    howBullets: howBulletsJordan,
    trustNote: trustFirstTimers,
  },
  vietnam: {
    title: 'Vietnam Guided Trips | Fixed Dates 2026–2027 | Maharaja',
    metaDescription: metaDescription('Vietnam'),
    h1: 'Guided Trips to Vietnam — All-Included, Fixed-Date',
    intro: 'Vietnam is ancient charm, street food heaven and emerald waters — from the old streets of Hanoi to the lantern-lit town of Hoi An. Maharaja assembles the whole trip: round-trip flights from US gateways, every hotel night, private transfers, an English-speaking local guide, included experiences and 24/7 in-trip support, on fixed departures from October 2026 through March 2027.',
    transparent: transparentStandard,
    howTitle: 'How your Vietnam trip is built:',
    howBullets: howBulletsJordan,
    trustNote: trustFirstTimers,
  },
  ecuador: {
    title: 'Galápagos Guided Trips | Fixed Dates 2026–2027 | Maharaja',
    metaDescription: metaDescription('Galápagos'),
    h1: 'Guided Trips to Galápagos — All-Included, Fixed-Date',
    intro: 'The Galápagos are the most untouched islands on Earth — a place where you can walk with giant tortoises, swim with sea lions and snorkel among reef sharks. Maharaja assembles the whole trip: round-trip flights from US gateways, every hotel night, private transfers, an English-speaking local guide, included experiences and 24/7 in-trip support, on fixed departures from October 2026 through March 2027. From $4,800 per person for 9 days.',
    transparent: transparentStandard,
    howTitle: 'How your Galápagos trip is built:',
    howBullets: howBulletsJordan,
    trustNote: trustUpgraders,
  },
  patagonia: {
    title: 'Patagonia Guided Trips | Fixed Dates 2026–2027 | Maharaja',
    metaDescription: metaDescription('Patagonia'),
    h1: 'Guided Trips to Patagonia — All-Included, Fixed-Date',
    intro: 'Patagonia is glaciers, granite peaks and the edge of the world — a landscape that rewards an expert plan. Maharaja assembles the whole trip: round-trip flights from US gateways, every hotel night, private transfers, an English-speaking local guide, included experiences and 24/7 in-trip support, on fixed departures from October 2026 through March 2027.',
    transparent: transparentStandard,
    howTitle: 'How your Patagonia trip is built:',
    howBullets: howBulletsJordan,
    trustNote: trustUpgraders,
  },
  sanfrancisco: {
    title: 'San Francisco Guided Trips | Fixed Dates 2026–2027 | Maharaja',
    metaDescription: metaDescription('San Francisco'),
    h1: 'Guided Trips to San Francisco — All-Included, Fixed-Date',
    intro: 'San Francisco packs tech, tacos and the best bridge on Earth into a compact city break. Maharaja assembles the whole trip: round-trip flights from US gateways, every hotel night, private transfers, an English-speaking local guide, included experiences and 24/7 in-trip support, on fixed departures from October 2026 through March 2027. From $1,400 per person for 5 days.',
    transparent: transparentStandard,
    howTitle: 'How your San Francisco trip is built:',
    howBullets: howBulletsJordan,
    trustNote: trustFirstTimers,
  },
  egypt: {
    title: 'Egypt Guided Trips | Fixed Dates 2026–2027 | Maharaja',
    metaDescription: metaDescription('Egypt'),
    h1: 'Guided Trips to Egypt — All-Included, Fixed-Date',
    intro: 'Egypt is pyramids, pharaohs and coral-reef diving across Cairo, Luxor and the Red Sea — a trip where a driver and a plan make all the difference. Maharaja assembles the whole trip: round-trip flights from US gateways, every hotel night, private transfers, an English-speaking local guide, included experiences and 24/7 in-trip support, on fixed departures from October 2026 through March 2027.',
    transparent: transparentEgypt,
    howTitle: 'How your Egypt trip is built:',
    howBullets: howBulletsEgypt,
    trustNote: trustFirstTimers,
  },
  jordan: {
    title: 'Jordan Guided Trips | Fixed Dates 2026–2027 | Maharaja',
    metaDescription: metaDescription('Jordan'),
    h1: 'Guided Trips to Jordan — All-Included, Fixed-Date',
    intro: 'Jordan combines deep history with distances that are far easier with a driver and a plan. Maharaja assembles the whole trip: round-trip flights from US gateways, every hotel night, private transfers, an English-speaking local guide, included experiences and 24/7 in-trip support, on fixed departures from October 2026 through March 2027.',
    transparent: transparentStandard,
    howTitle: 'How your Jordan trip is built:',
    howBullets: howBulletsJordan,
    trustNote: trustUpgraders,
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Maharaja',
  url: `${SITE_URL}/`,
  description: 'Curated, fixed-departure guided trips that bundle flights, hotels, transfers, guides and experiences into one all-in price.',
};

export function productSchema(trip) {
  const name = destinationNames[trip.id];
  const canonical = `${SITE_URL}/trips/${tripSlugs[trip.id]}/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Guided trips to ${name}`,
    description: `All-in ${name} trips with round-trip flights from US gateways, all hotel nights, private transfers, an English-speaking local guide, included experiences, and 24/7 support — fixed departures October 2026 through March 2027.`,
    brand: { '@type': 'Brand', name: 'Maharaja' },
    url: canonical,
    image: trip.heroImage,
    offers: {
      '@type': 'Offer',
      url: canonical,
      priceCurrency: 'USD',
      price: trip.basePrice,
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2027-03-31',
      description: 'Per-person all-inclusive package: round-trip flights, all hotel nights, private transfers, English-speaking local guides, included experiences, 24/7 support, digital itinerary. Fixed departures October 2026 through March 2027.',
    },
  };
}

export function breadcrumbSchema(trip) {
  const name = destinationNames[trip.id];
  const canonical = `${SITE_URL}/trips/${tripSlugs[trip.id]}/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Trips', item: `${SITE_URL}/trips/` },
      { '@type': 'ListItem', position: 3, name, item: canonical },
    ],
  };
}
