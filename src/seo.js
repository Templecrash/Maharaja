export const SITE_URL = 'https://maharaja.example';

export const HOME_META = {
  title: 'Maharaja — Curated Travel',
  description: 'Curated trips. Fixed dates. No guessing. Fixed-departure guided trips with round-trip flights from US gateways, hotels, private transfers, English-speaking guides and experiences in one transparent price — Japan, Brazil, Vietnam, Galápagos, Patagonia, San Francisco, Egypt and Jordan. Departures October 2026–March 2027.',
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Maharaja',
  url: SITE_URL,
  telephone: '1-888-903-0001',
  slogan: 'Curated trips. Fixed dates. No guessing.',
};

export function productJsonLd(trip) {
  const url = `${SITE_URL}/trips/${trip.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${trip.country} ${trip.title} — Fixed-Departure Guided Trip`,
    description: trip.metaDescription,
    brand: {
      '@type': 'Brand',
      name: 'Maharaja',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: String(trip.basePrice),
      availability: 'https://schema.org/InStock',
      url,
    },
    url,
    image: trip.heroImage,
  };
}

export function breadcrumbJsonLd(trip) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: trip.country,
        item: `${SITE_URL}/trips/${trip.slug}`,
      },
    ],
  };
}

function upsertMeta(attr, key, value) {
  if (!value) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

export function applySeo({ trip }) {
  const isTrip = Boolean(trip);
  const title = isTrip ? trip.metaTitle : HOME_META.title;
  const description = isTrip ? trip.metaDescription : HOME_META.description;
  const pageUrl = isTrip ? `${SITE_URL}/trips/${trip.slug}` : `${SITE_URL}/`;
  const image = isTrip ? trip.heroImage : null;

  document.title = title;
  upsertMeta('name', 'description', description);
  upsertMeta('name', 'robots', 'index, follow');
  upsertLink('canonical', pageUrl);

  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', description);
  upsertMeta('property', 'og:type', 'website');
  upsertMeta('property', 'og:url', pageUrl);
  upsertMeta('property', 'og:site_name', 'Maharaja');
  upsertMeta('property', 'og:image', image);
  upsertMeta('name', 'twitter:card', 'summary_large_image');

  upsertJsonLd('organization-jsonld', organizationJsonLd);
  if (isTrip) {
    upsertJsonLd('product-jsonld', productJsonLd(trip));
    upsertJsonLd('breadcrumb-jsonld', breadcrumbJsonLd(trip));
  } else {
    removeJsonLd('product-jsonld');
    removeJsonLd('breadcrumb-jsonld');
  }
}
