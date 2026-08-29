import { useEffect } from 'react';
import { trips } from './data/trips';

const tripsById = Object.fromEntries(trips.map(t => [t.id, t]));

const guideDestinations = [
  {
    id: 'japan',
    label: 'Japan',
    blurb: 'A first-timer favorite: language barrier, complex transit, and a rich itinerary that rewards structure. Best for travelers who want an English-speaking guide, private transfers, and the confidence of a handled itinerary while still choosing experiences and upgrades.',
  },
  {
    id: 'brazil',
    label: 'Brazil',
    blurb: 'Broad country, multiple regions, and significant ground logistics. A good fit for travelers who want someone else to own the routing between cities and regions while they focus on the experiences.',
  },
  {
    id: 'vietnam',
    label: 'Vietnam',
    blurb: 'A top destination for packaged guided trips: excellent value, well-trodden routing, and strong local-guide coverage. Great for cautious bucket-list first-timers and for couples.',
  },
  {
    id: 'ecuador',
    label: 'Galápagos',
    blurb: 'Logistically complex — cruises, permits, and tight schedules — which makes a fully assembled package genuinely valuable. Best for travelers who want the trip handled end-to-end rather than wired together piecemeal.',
  },
  {
    id: 'patagonia',
    label: 'Patagonia',
    blurb: 'Remote, weather-dependent, and spread across a huge region. A fixed itinerary with handled transfers and guides removes the hardest decisions. A strong fit for active travelers who want structure without the planning work.',
  },
  {
    id: 'sanfrancisco',
    label: 'San Francisco',
    blurb: 'A lower-stakes, accessible option — a good way to try a fixed-departure trip or city break before committing to a far-flung destination. The shortest package also means the lowest entry price.',
  },
  {
    id: 'egypt',
    label: 'Egypt',
    blurb: 'Two countries, internal logistics, and a strong language barrier — classic reasons to travel guided. The combination of ancient sites and handled transfers makes this ideal for cautious first-timers.',
  },
  {
    id: 'jordan',
    label: 'Jordan',
    blurb: 'Two countries, internal logistics, and a strong language barrier — classic reasons to travel guided. The combination of ancient sites and handled transfers makes this ideal for cautious first-timers.',
  },
];

const metaDescription = 'A destination-by-destination planning guide to choosing a fixed-departure guided trip — what is truly included, how to compare all-in totals, and how to pick among eight Maharaja destinations departing October 2026 through March 2027.';

export default function GuidePage({ onSelectTrip, onBack }) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'How to Choose a Fixed-Departure Guided Trip | Maharaja';

    let meta = document.querySelector('meta[name="description"]');
    let metaCreated = false;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
      metaCreated = true;
    }
    const prevDescription = meta.getAttribute('content');
    meta.setAttribute('content', metaDescription);

    let script = document.querySelector('script[data-guide-jsonld="true"]');
    let scriptCreated = false;
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-guide-jsonld', 'true');
      document.head.appendChild(script);
      scriptCreated = true;
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'How to Choose a Fixed-Departure Guided Trip: A Destination-by-Destination Guide',
      description: metaDescription,
      inLanguage: 'en',
      author: { '@type': 'Organization', name: 'Maharaja' },
      publisher: { '@type': 'Organization', name: 'Maharaja' },
      about: guideDestinations.map(d => d.label),
    });

    return () => {
      document.title = prevTitle;
      if (scriptCreated) script.remove();
      if (metaCreated) meta.remove();
      else if (prevDescription) meta.setAttribute('content', prevDescription);
    };
  }, []);

  return (
    <div className="guide-page">
      <div className="guide-top">
        <div className="logo">MAHARAJA</div>
        <button className="guide-back-btn" onClick={onBack}>&larr; Back to trips</button>
      </div>

      <header className="guide-hero">
        <span className="guide-kicker">Planning Guide</span>
        <h1>How to Choose a Fixed-Departure Guided Trip</h1>
        <p className="guide-hero-sub">A destination-by-destination planning guide for travelers who want a fully assembled, decision-free trip — flights, stays, transfers, and guides — without weeks of research.</p>
      </header>

      <div className="guide-body">
        <p className="guide-lede">If you're short on time, heading to a country for the first time, or done with independent trips and ready for a curated experience, a fixed-departure guided trip removes the hardest parts: researching dates, comparing airfare against tour rates, and wiring transfers and guides together yourself. This guide walks you through exactly what to compare before you commit, then gives you a snapshot of eight destinations worth a fixed-departure trip.</p>

        <section className="guide-section">
          <h2>What a fixed-departure guided trip actually includes</h2>
          <p>The core promise of a fixed-departure guided trip is that everything is assembled for you: round-trip flights from a US gateway, all hotel nights, private transfers, English-speaking local guides, and a menu of included experiences — all in one fixed price shown up front, with published departure dates and limited spots per departure.</p>
          <p>Before comparing packages, get clear on three things every operator should state plainly:</p>
          <ul>
            <li><strong>Is the price truly all-in, or is airfare separate?</strong> Many operators quote a per-person "touring price" and handle flights apart from it. That forces you to rebuild the real total yourself. Prefer a package where one number covers flight, stay, transfers, and included experiences.</li>
            <li><strong>What is actually included vs. optional?</strong> Ask for the what's-included and what's-not list up front. Optional add-ons are fine — the question is whether the base package stands on its own.</li>
            <li><strong>Are dates fixed and real?</strong> Fixed-departure is only useful if dates fit your actual days off. Verify published departures before you invest in planning.</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>How to compare two fixed-departure trips</h2>
          <p>The mistake most trip planners make is comparing quoted sticker prices that aren't built the same way. To compare fairly:</p>
          <ul>
            <li><strong>Rebuild the true total.</strong> Take the touring price, add separately quoted airfare, then add any must-have experiences that aren't included. Compare that full number, not the headline "from" price.</li>
            <li><strong>Weigh the non-price dimensions.</strong> Operator trust and track record, local-guide coverage, what's included vs. not, and the depth of the itinerary matter as much as price for a complex destination.</li>
            <li><strong>Check the review base.</strong> Dated traveler reviews and destination-expert profiles are stronger signals than a star rating pulled from nowhere.</li>
            <li><strong>Understand what you're paying for.</strong> A package premium buys convenience and a decision-free plan inside a defined budget. That's the value — not the cheapest way to travel.</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>How to pick the right destination for a fixed-departure trip</h2>
          <p>Fixed-departure guided trips shine when the destination is complex to assemble, language barriers are real, or the logistics (internal flights, cruises, permits) are hard to wire up solo. Here's a snapshot of eight destinations and the traveler each suits best. Each card is a live Maharaja package with its real price, length, and departure date.</p>
          <div className="guide-dest-grid">
            {guideDestinations.map(dest => {
              const trip = tripsById[dest.id];
              if (!trip) return null;
              return (
                <button key={dest.id} className="guide-dest-card" onClick={() => onSelectTrip(trip)}>
                  <div className="guide-dest-flag">{trip.flag}</div>
                  <h4>{dest.label}</h4>
                  <p>{dest.blurb}</p>
                  <div className="guide-dest-meta">
                    <span>From ${trip.basePrice.toLocaleString()}/person</span>
                    <span>{trip.duration} days</span>
                    <span>{trip.departureDate}</span>
                  </div>
                  <span className="guide-dest-link">View trip &rarr;</span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="guide-section">
          <h2>Choosing the trip type that fits how you travel</h2>
          <p>Beyond destination, match the trip to your travel style:</p>
          <ul>
            <li><strong>Time-poor planners</strong> want fixed published dates that fit their PTO, one all-in price, and a live total that updates as they choose. The decision happens in the catalog, not on a call.</li>
            <li><strong>Cautious first-timers</strong> lean on the trust layer: English-speaking guides throughout, private transfers, dated reviews, direct human support, and trip protection. For these travelers, trust signals beat headline price.</li>
            <li><strong>Premium upgraders</strong> want optional control: business-class flight upgrades, hotel tier choices, and a la carte experiences on top of a solid base. Personality presets that match how they want to travel help them shape the trip quickly.</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Red flags to avoid</h2>
          <ul>
            <li><strong>Vague or unpublished pricing and dates.</strong> A fixed-departure trip that won't show you a real total before you engage is working against the model's whole point.</li>
            <li><strong>Airfare priced separately with no clear all-in number.</strong> You shouldn't have to do the tour-plus-flights math yourself.</li>
            <li><strong>Template itineraries with hidden logistics.</strong> If you can't see a day-by-day itinerary before you commit, the plan may not be as assembled as it claims.</li>
            <li><strong>Artificial scarcity.</strong> Limited spots are genuine value when true; on every trip at all times they erode trust.</li>
            <li><strong>No human support.</strong> For a complex destination, direct phone and human support remove the biggest residual worry.</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Next step: check dates and build your trip</h2>
          <p>The fastest way to shortlist is to look at published departure dates that fit your actual days off, then open the trip builder and watch the total move as you add experiences and upgrades. A live, transparent total is the best test of whether the package is truly decision-free.</p>
          <p>Start with the destinations where a handled itinerary removes the most risk, filter by your traveler count and departure month, and choose the trip style that matches how you actually travel. When the all-in number is clear and the dates fit, you've found your contender.</p>
        </section>

        <div className="guide-cta">
          <div>
            <strong>Found your contender?</strong>
            <p>Browse the catalog, check a departure date that fits your days off, and build the trip — the total updates live as you add experiences and upgrades.</p>
          </div>
          <button className="btn-book" onClick={onBack}>Browse all trips &rarr;</button>
        </div>

        <p className="guide-note">This guide accompanies the eight Maharaja fixed-departure guided trips — Japan, Brazil, Vietnam, the Galápagos, Patagonia, San Francisco, and Egypt &amp; Jordan — departing October 2026 through March 2027. Trips start at $1,400 for the 5-day San Francisco city break and range up to $4,800 for the 9-day Galápagos adventure, with round-trip flights from LAX, NYC, and JFK, all hotel nights, private transfers, English-speaking guides, and optional upgrades available.</p>
      </div>
    </div>
  );
}
