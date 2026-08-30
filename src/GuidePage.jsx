import { useEffect } from 'react';
import { trips } from './data/trips';

const GUIDE_TITLE = 'How to Choose a Fixed-Departure Guided Trip: The Flight Question Most Guides Skip';
const GUIDE_DESCRIPTION = 'Compare fixed-departure guided tours with confidence: what to demand from a real all-in price, how to verify operator credibility, and how to spot the flight question most guides skip.';

export default function GuidePage({ onBack, onSelectTrip }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${GUIDE_TITLE} | Maharaja`;
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = GUIDE_DESCRIPTION;
    document.head.appendChild(meta);
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: GUIDE_TITLE,
      description: GUIDE_DESCRIPTION,
      mainEntityOfPage: window.location.href,
      publisher: { '@type': 'Organization', name: 'Maharaja' },
    });
    document.head.appendChild(script);
    return () => {
      document.title = previousTitle;
      meta.remove();
      script.remove();
    };
  }, []);

  return (
    <div className="guide-page">
      <div className="guide-hero">
        <button className="back-btn guide-back-btn" onClick={onBack}>&larr; All Trips</button>
        <div className="guide-hero-inner">
          <span className="guide-eyebrow">The Fixed-Departure Guide</span>
          <h1>{GUIDE_TITLE}</h1>
          <p>
            A practical guide for US travelers comparing fixed-departure guided tours — and deciding which
            operator&rsquo;s number to trust.
          </p>
        </div>
      </div>

      <div className="guide-content">
        <p>
          Set-date guided trips promise a finished plan: your itinerary, your hotels, your ground transport,
          your local guide. The catch is that most quotes you&rsquo;ll see are <em>not</em> finished.
          They&rsquo;re a touring price per person with your flights added on later, in a second transaction,
          at a number nobody will tell you up front.
        </p>
        <p>
          This guide is for US travelers comparing fixed-departure guided tours and deciding which operator&rsquo;s
          number to trust. It walks the four things travelers actually weigh — operator credibility, the real
          all-in price, date reliability, and group-and-guide fit — and then shows how to spot the difference
          between a quote and a true total.
        </p>

        <h2>Start with the number you can&rsquo;t see: the flight cost</h2>
        <p>
          The single biggest gap in how guided trips are quoted is whether flights are in the price. Most
          operators publish a per-person &ldquo;from&rdquo; touring rate and carry your round-trip airfare
          separately. That&rsquo;s a meaningful amount of money — for US gateways, transatlantic and transpacific
          flights are often the difference between a trip feeling within budget and over it — and it&rsquo;s
          exactly the figure the quote page won&rsquo;t commit to.
        </p>
        <p>
          When you compare two operators, force both onto the same basis. A &ldquo;$3,900 per person&rdquo;
          tour without flights is not comparable to a fixed all-in package that includes round-trip flights to
          that destination. Until you have the flight number in both, you are comparing an incomplete total
          against a complete one.
        </p>

        <h2>What to demand from any fixed-departure package</h2>
        <p>Before you trust a total, check that the package actually resolves these four things:</p>
        <div className="guide-requirements">
          <div className="guide-requirement">
            <span className="guide-requirement-num">1</span>
            <div>
              <strong>Is it a genuine fixed price, or a &ldquo;from&rdquo; price?</strong>
              <span>
                A real fixed price is stated for a specific departure and doesn&rsquo;t hide behind floor
                pricing. The itinerary, accommodation tier, and date should produce a number you can commit
                to today.
              </span>
            </div>
          </div>
          <div className="guide-requirement">
            <span className="guide-requirement-num">2</span>
            <div>
              <strong>Are flights in it?</strong>
              <span>
                Round-trip flights from an actual US gateway — not a note that says &ldquo;flights are
                separate.&rdquo; This is the single most common omission and the easiest way for a budget to
                get quietly bigger.
              </span>
            </div>
          </div>
          <div className="guide-requirement">
            <span className="guide-requirement-num">3</span>
            <div>
              <strong>What&rsquo;s included vs. not?</strong>
              <span>
                Hotels for every night, private transfers, English-speaking local guides, the experiences
                shown in the day-by-day itinerary. A clean &ldquo;included / not included&rdquo; list matters
                more than a glossy day count.
              </span>
            </div>
          </div>
          <div className="guide-requirement">
            <span className="guide-requirement-num">4</span>
            <div>
              <strong>Does the price change when you do?</strong>
              <span>
                On a fixed departure, changing your flight class, your hotel tier, or your experiences should
                change a live, visible total — not require a call to &ldquo;get a price.&rdquo;
              </span>
            </div>
          </div>
        </div>

        <h2>How credibility moves the decision</h2>
        <p>
          For travelers going somewhere new and unfamiliar — a language and culture they haven&rsquo;t
          navigated — the operator&rsquo;s trust signals often weigh more than the price. Read the actual
          reviews (look for dated, specific ones tied to real departures), check who will actually guide you,
          and confirm there&rsquo;s a human route to reach before you book: a phone number, live chat, or a
          person who can answer questions about safety and logistics.
        </p>
        <p>Credibility checks that pay off:</p>
        <ul className="guide-feature-list">
          <li><strong>Named local guides with real profiles</strong> — not a generic promise of &ldquo;local guides.&rdquo;</li>
          <li><strong>Dated traveler reviews</strong> — specific and recent beats a star rating with no dates.</li>
          <li><strong>A support promise that means something on the ground</strong> — someone reachable during the trip, not just at booking time.</li>
          <li><strong>Clear what happens if plans change</strong> — trip protection and cancellation terms stated up front, not discovered later.</li>
        </ul>

        <h2>Date reliability: fixed means the trip actually runs</h2>
        <p>
          A fixed-departure trip only helps if the date holds. Limited spots on a published departure is normal
          and often genuine; what you want is certainty that the departure is real and can&rsquo;t drift. If a
          package posts exact dates with limited spots per departure, that&rsquo;s a stronger signal than an
          open-ended &ldquo;roll a date yourself&rdquo; model. Ask what happens if a departure fills — and what
          guarantee exists that the date runs as published.
        </p>

        <h2>Group and guide fit</h2>
        <p>
          Small-group trips live or die on chemistry, and the two levers you control are group size and guide
          quality. Match the style to how you want to travel:
        </p>
        <div className="guide-styles-grid">
          <div className="guide-style-card">
            <strong>Luxury</strong>
            <span>Premium hotels, upgraded flights, finer experiences.</span>
          </div>
          <div className="guide-style-card">
            <strong>Adventure</strong>
            <span>Active days, remote places, physical itineraries.</span>
          </div>
          <div className="guide-style-card">
            <strong>Family and honeymoon</strong>
            <span>Small, compatible groups with the right pacing.</span>
          </div>
          <div className="guide-style-card">
            <strong>Cultural and food &amp; wine</strong>
            <span>Destinations where local experience is the point.</span>
          </div>
          <div className="guide-style-card">
            <strong>Safari and beach</strong>
            <span>Specialist itineraries with the right season and logistics.</span>
          </div>
        </div>
        <p>
          Most operators group these into fixed styles. The best systems let you change your own trip — upgrade
          the flight, pick a better hotel tier, add or drop experiences — and watch the total move in real time.
          A trip you can tune is different from a rigid one-size-fits-all package.
        </p>

        <h2>What a genuinely all-in fixed price looks like</h2>
        <p>
          A genuine fixed all-in price for a set-date guided trip bundles the round-trip flights from a real US
          gateway, every hotel night, private transfers, English-speaking guides, and the experiences on the
          itinerary into one number — with optional upgrades and add-ons priced separately so you can see
          exactly where your money goes.
        </p>
        <p>
          That&rsquo;s the standard Maharaja builds around: round-trip flights from US gateways like LAX, NYC,
          and JFK, all hotel nights, private transfers, English-speaking local guides, and a menu of experiences
          priced into set-date departures — Japan, Brazil, Vietnam, the Galápagos, Patagonia, San Francisco,
          Egypt and Jordan — running October 2026 through March 2027 with limited spots per departure.
        </p>
        <p>
          The live total updates as you build: toggle experiences, switch economy to business (roughly +$1,400
          to +$3,800), upgrade a hotel tier per night, add trip protection at 5% or 8% of the subtotal. One
          number, stated up front, that moves with your choices. Packages start at $1,400 for a 5-day San
          Francisco break and run to $4,800 for the 9-day Galápagos adventure.
        </p>

        <h2>The decision checklist</h2>
        <p>Before you book any fixed-departure guided trip, confirm:</p>
        <ul className="guide-checklist">
          <li>The price is a real fixed number for a specific departure — not a &ldquo;from&rdquo; rate.</li>
          <li>Round-trip flights from a US gateway are included, or the flight cost is stated.</li>
          <li>Every hotel night, transfer, guide, and itinerary experience is covered.</li>
          <li>A clear included/not-included list exists.</li>
          <li>The total updates live when you change flight, hotel, or experiences.</li>
          <li>Credibility is verifiable: named guides, dated reviews, real support.</li>
          <li>The departure date is fixed with certainty, and cancellation/protection terms are clear.</li>
        </ul>

        <h2>The bottom line</h2>
        <p>
          The operator who wins your booking is the one whose price is real. Give the edge to a fixed, all-in
          total that includes the flights, stated up front and updated live as you build — over a per-person
          touring rate that makes you do the airfare math yourself. Curated trips, fixed dates, and a number
          you can trust before you commit.
        </p>

        <h2>Browse the departures</h2>
        <p>
          Every Maharaja departure is a fixed all-in price: round-trip flights from a US gateway, all hotel
          nights, private transfers, English-speaking local guides, and the experiences on the itinerary.
        </p>
        <div className="guide-destinations">
          {trips.map(trip => (
            <button key={trip.id} className="guide-destination" onClick={() => onSelectTrip(trip)}>
              <div className="guide-destination-image" style={{ backgroundImage: `url(${trip.heroImage})` }}>
                <span className="guide-destination-flag">{trip.flag}</span>
              </div>
              <div className="guide-destination-info">
                <strong>{trip.country}</strong>
                <div className="guide-destination-meta">
                  <span className="guide-destination-price">From ${trip.basePrice.toLocaleString()}</span>
                  <span>{trip.duration} days</span>
                </div>
                <div className="guide-destination-meta">
                  <span>{trip.departureDateFull}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="guide-cta">
          <h3>Interested in a destination?</h3>
          <p>
            Call <a href="tel:+18889030001">1-888-903-0001</a>, use live chat, or start a
            &ldquo;Customize with Expert&rdquo; request (responses within 24 hours) to talk through a specific
            departure with a real person.
          </p>
          <button className="btn-custom-large" onClick={onBack}>Browse All Trips</button>
        </div>
      </div>
    </div>
  );
}
