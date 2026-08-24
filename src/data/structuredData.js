import { tripStyles, travelStyles } from './trips';

const styleLabelById = Object.fromEntries(
  travelStyles.map(style => [style.id, style.label])
);

function availabilityFor(spotsLeft) {
  if (spotsLeft <= 0) return 'https://schema.org/SoldOut';
  if (spotsLeft <= 5) return 'https://schema.org/LimitedAvailability';
  return 'https://schema.org/InStock';
}

function itineraryFor(trip) {
  return {
    '@type': 'ItemList',
    itemListElement: trip.segments.map((segment, index) => {
      const includedExperiences = segment.experiences
        .filter(exp => exp.defaultOn)
        .map(exp => exp.name);
      const descriptionParts = [];
      if (segment.stay) {
        descriptionParts.push(`${segment.stay.name} (${segment.stay.nights} nights)`);
      }
      if (includedExperiences.length > 0) {
        descriptionParts.push(`Experiences: ${includedExperiences.join(', ')}`);
      }
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'TouristTrip',
          name: `${segment.name} — ${segment.days}`,
          description: descriptionParts.join('. '),
        },
      };
    }),
  };
}

export function buildTripStructuredData(trip) {
  const touristType = (tripStyles[trip.id] || [])
    .map(id => styleLabelById[id])
    .filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: `${trip.country}: ${trip.title}`,
    description: `${trip.tagline} Fixed-departure dates: ${trip.departureDateFull}. ${trip.duration} days.`,
    image: trip.heroImage,
    availableLanguage: 'English',
    touristType,
    provider: {
      '@type': 'TravelAgency',
      name: 'Maharaja',
    },
    itinerary: itineraryFor(trip),
    offers: {
      '@type': 'Offer',
      price: trip.basePrice,
      priceCurrency: 'USD',
      availability: availabilityFor(trip.spotsLeft),
    },
  };
}
