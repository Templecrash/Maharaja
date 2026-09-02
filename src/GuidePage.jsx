import { trips } from './data/trips';

function TripChips({ ids, onSelectTrip }) {
  const links = ids.map(id => trips.find(t => t.id === id)).filter(Boolean);
  if (links.length === 0) return null;
  return (
    <div className="guide-trip-links">
      <span className="guide-trip-links-label">See it as a fixed-departure all-inclusive trip:</span>
      <div className="guide-trip-chips">
        {links.map(trip => (
          <button key={trip.id} className="guide-trip-chip" onClick={() => onSelectTrip(trip.id)}>
            {trip.flag} {trip.country}: {trip.title}
          </button>
        ))}
      </div>
    </div>
  );
}

function Spec({ label, children }) {
  return (
    <p className="guide-spec">
      <strong>{label}:</strong> {children}
    </p>
  );
}

export default function GuidePage({ onBack, onSelectTrip }) {
  return (
    <div className="guide-page">
      <div className="guide-topbar">
        <button className="guide-brand" onClick={onBack}>MAHARAJA</button>
        <button className="btn-custom guide-back" onClick={onBack}>&larr; All Trips</button>
      </div>

      <article className="guide-article">
        <p className="guide-eyebrow">Trip Planning Guide</p>
        <h1 className="guide-title">How to Choose Your Guided Trip: Small Group, All-Inclusive, Private, or Cruise</h1>

        <div className="guide-summary">
          <p><strong>The short version:</strong> The best way to travel with a guide isn't about which option is "best" — it's about how you want to make decisions. If you want someone else to own the logistics, compare trips by one number: the all-in fixed price that includes flights, hotels, transfers, and experiences. That's the number most tour operators make you calculate yourself.</p>
        </div>

        <h2 className="guide-section-title">The Modality Decision: What You're Actually Choosing</h2>
        <p className="guide-lede">Before you compare specific tours, you're making one structural decision: how the trip is organized. Each modality changes what you control, what you handle yourself, and what the final price actually covers.</p>

        <div className="guide-block">
          <h3>Small Group Tours</h3>
          <Spec label="What they are">A set itinerary with a fixed departure date, shared with other travelers (typically 8–16 people), led by a local guide.</Spec>
          <Spec label="What you control">The date, the group, and sometimes your room. You don't control the daily pace or the route.</Spec>
          <Spec label="What you handle">The tour price covers ground logistics and guiding. Flights, meals not on the itinerary, and many optional experiences are typically separate.</Spec>
          <Spec label="Who it fits">Travelers who want the social energy of a group, a fixed schedule, and someone handling the day-to-day — and who are comfortable that the quoted price is the tour portion, not the total.</Spec>
          <Spec label="Why it can disappoint">The quoted "from" price rarely includes flights. When you add airfare, the real total can be 40–80% higher than the list price. That math is where most trip budgets go wrong.</Spec>
        </div>

        <div className="guide-block">
          <h3>All-Inclusive Guided Tours</h3>
          <Spec label="What they are">A guided trip where the headline price bundles more components — often flights, hotels, transfers, and meals.</Spec>
          <Spec label="What you control">Usually less. Bundling means fewer choices about where you stay, what you eat, and which experiences you add.</Spec>
          <Spec label="What you handle">Ideally nothing. But "all-inclusive" is not a regulated term — what's included varies by operator and itinerary. You have to check each component.</Spec>
          <Spec label="Who it fits">Travelers who want one number and are willing to accept a fixed set of included components.</Spec>
          <Spec label="Why it can disappoint">"All-inclusive" can still exclude flights, internal transfers, visas, insurance, and the experiences you actually want. The headline price is only honest when you can see exactly what's in it.</Spec>
        </div>

        <div className="guide-block">
          <h3>Private Tours</h3>
          <Spec label="What they are">A guide and vehicle dedicated to your party only. The itinerary can be fixed or fully custom.</Spec>
          <Spec label="What you control">Pace, dates, and (usually) the itinerary itself. You'll pay for that control.</Spec>
          <Spec label="What you handle">Every customization is a decision. Each change to the itinerary, accommodation, or add-on is a new negotiation.</Spec>
          <Spec label="Who it fits">Travelers with specific interests, couples on milestone trips, families with varied needs, and anyone who's done group travel and wants a different pace.</Spec>
          <Spec label="Why it can disappoint">Private doesn't mean transparent. A quote covering one guide, one vehicle, and one itinerary can grow with each "oh, that's extra." Getting a true apples-to-apples quote across operators is difficult.</Spec>
        </div>

        <div className="guide-block">
          <h3>Cruise (Particularly in the Galápagos)</h3>
          <Spec label="What it is">A live-aboard vessel where the ship is your hotel, and daily excursions run from the boat.</Spec>
          <Spec label="What you control">Your cabin and your group's route. You're bound to the vessel's schedule and itinerary.</Spec>
          <Spec label="What you handle">The logistics of getting to and from the embarkation port, and the cost of the cruise itself as a separate line item.</Spec>
          <Spec label="Who it fits">Travelers who want to cover more ground per day (islands are closer to a boat than a land base), enjoy being on the water, and prefer unpacking once.</Spec>
          <Spec label="Why it can disappoint">Cruise vs land isn't simply "better" — it's a different trade-off. Cruises cover more islands but visit at fixed times. Land-based Galápagos tours spend more time traveling between sites but can go deeper at fewer locations.</Spec>
        </div>

        <h2 className="guide-section-title">The Question the Comparisons Don't Answer: What's the Real Total?</h2>
        <p>Every modality comparison will show you features, photos, and itineraries. What almost none of them show you is the true all-in price. Here's the gap:</p>
        <p><strong>Most tour operators publish a per-person touring price with flights handled separately.</strong> Intrepid Travel's listed prices are per-person touring rates. G Adventures' are the same — the touring component, not the total. Trafalgar includes internal flights on some itineraries, but international airfare remains separate.</p>
        <p>That means the buyer assembles the real price themselves:</p>
        <blockquote className="guide-formula">Tour price per person + international flights + transfers + meals not included + optional experiences + travel insurance = actual trip cost</blockquote>
        <p>The research on how travelers plan matches this: the information-gain gap in the current decision-guide landscape is not "which operator is best" — it's "what does this actually cost, all-in?"</p>

        <h2 className="guide-section-title">How to Compare Guided Trips on a Transparent Total</h2>
        <p>Use this checklist to compare any guided trip, regardless of modality:</p>
        <ol className="guide-list guide-ordered">
          <li><strong>Ask what the quoted price includes — in writing.</strong> Flights? Hotel nights? Transfers? Meals? Experiences? Guides?</li>
          <li><strong>Add the missing lines yourself.</strong> If flights aren't in the price, add a realistic round-trip fare from your gateway. If transfers aren't included, add the ground cost.</li>
          <li><strong>Check the days-on-the-ground count.</strong> Two 8-day trips can have different numbers of actual touring days.</li>
          <li><strong>Ask what's optional.</strong> Experiences you want may be priced separately. Add those.</li>
          <li><strong>Ask about single supplements.</strong> Solo travelers often pay a premium on group tours.</li>
          <li><strong>Compare the total, not the "from" price.</strong> The operator with a higher list price can be the cheaper trip when flights and transfers are included.</li>
        </ol>

        <h2 className="guide-section-title">Matching Modality to Traveler Type</h2>

        <div className="guide-block">
          <h3>The Time-Poor Planner</h3>
          <p>You know the destination. You don't know the logistics. You want to book, not research.</p>
          <p><strong>Best fit:</strong> All-inclusive guided with a fixed, transparent total. You need one number that's the real number — flights included, hotels included, transfers included. The modality itself matters less than the price honesty.</p>
          <p className="guide-watch"><strong>Watch for:</strong> "From" pricing, separate airfare, and itineraries that say "optional experiences" without prices.</p>
        </div>

        <div className="guide-block">
          <h3>The Cautious Bucket-List First-Timer</h3>
          <p>You're going somewhere new, you don't speak the language, and safety matters more than the deal.</p>
          <p><strong>Best fit:</strong> Small group or all-inclusive with strong guide coverage. English-speaking local guides, private transfers, and a handled itinerary reduce the uncertainty that makes a first-time destination stressful.</p>
          <p className="guide-watch"><strong>Watch for:</strong> Operators with thin review bases on your destination, vague "what's included" lists, and tour prices quoted without the flight component you'll need to add.</p>
        </div>

        <div className="guide-block">
          <h3>The Premium Upgrader</h3>
          <p>You've traveled independently. You know what you like. You want convenience without giving up choice.</p>
          <p><strong>Best fit:</strong> A base package with real optionality. You want the convenience of a fixed frame — flights, hotels, transfers, guides — plus the ability to upgrade business class, choose premium hotels, and add experiences that matter to you.</p>
          <p className="guide-watch"><strong>Watch for:</strong> Packages where "upgrades" are cosmetic. The optionality is only real if the price visibly moves when you change the components.</p>
        </div>

        <h2 className="guide-section-title">What This Means for Each Destination</h2>

        <div className="guide-destination">
          <h3>Japan</h3>
          <p>The planning question is usually <strong>small group vs. private</strong>. Japan's transit is excellent, so independent travel is viable — but first-timers often want the structure and language support of a guided trip. If you want structure without giving up flexibility, compare the all-in package price against what you'd spend assembling the same components yourself.</p>
          <TripChips ids={['japan']} onSelectTrip={onSelectTrip} />
        </div>

        <div className="guide-destination">
          <h3>Vietnam</h3>
          <p>The dominant question is <strong>small group vs. all-inclusive</strong>. Vietnam's an affordable destination on the ground, which means the all-in price premium is really paying for logistics and guidance. The value shows up when you're not haggling with motorbike taxis and typhoon-season plans.</p>
          <TripChips ids={['vietnam']} onSelectTrip={onSelectTrip} />
        </div>

        <div className="guide-destination">
          <h3>Brazil</h3>
          <p><strong>Small group vs. private</strong> is the operative trade-off. Distances are large, Portuguese is the working language, and a guided structure removes the planning burden. The upgrade question matters here — Brazil's great distances make flight class and hotel tier a meaningful part of the total.</p>
          <TripChips ids={['brazil']} onSelectTrip={onSelectTrip} />
        </div>

        <div className="guide-destination">
          <h3>Patagonia</h3>
          <p><strong>All-inclusive vs. à la carte</strong> is the real comparison. Patagonia's remote logistics — internal flights, transfers between trailheads, and weather-driven schedule changes — are where a bundle earns its keep. An all-inclusive with internal flights folded in is a different product from a tour price plus separately-booked air.</p>
          <TripChips ids={['patagonia']} onSelectTrip={onSelectTrip} />
        </div>

        <div className="guide-destination">
          <h3>Egypt &amp; Jordan</h3>
          <p><strong>Small group vs. private</strong> dominates. For first-timers, the safety and structure of a guided trip is the primary value. The comparison should be against the cost of arranging drivers, guides, and site logistics independently — which many travelers underestimate.</p>
          <TripChips ids={['egypt', 'jordan']} onSelectTrip={onSelectTrip} />
        </div>

        <div className="guide-destination">
          <h3>The Galápagos</h3>
          <p>This is the one destination where the decisive question is <strong>cruise vs. land</strong>.</p>
          <ul className="guide-list">
            <li><strong>Cruise</strong> covers more islands per day and produces a different daily rhythm — morning excursion, boat to the next island, afternoon excursion. You unpack once and the ship moves overnight.</li>
            <li><strong>Land-based</strong> keeps you at a single base with day trips, which means more ground travel but more time at each site and more flexible scheduling.</li>
          </ul>
          <p>The comparison guides on this question are extensive, but they rarely show the same number twice: the total cost including flights to and from the Galápagos, park fees (which are significant), and internal transfers. That's the number that should decide.</p>
          <TripChips ids={['ecuador']} onSelectTrip={onSelectTrip} />
        </div>

        <h2 className="guide-section-title">The Fixed-Departure All-Inclusive Model</h2>
        <p>There's a fourth option beyond the standard four modalities: a fixed-departure all-inclusive trip where the price includes flights, hotels, transfers, and experiences up front — not as a "from" price with add-ons, but as a total that updates as you configure the trip.</p>
        <p>This model differs from the standard categories in three ways:</p>
        <ol className="guide-list guide-ordered">
          <li><strong>Flights are in the price.</strong> Round-trip from US gateways (LAX, NYC, JFK) is bundled, so the quoted price is the real total — not a touring rate plus airfare.</li>
          <li><strong>The total is live, not a "from."</strong> The price recalculates as you toggle experiences, upgrades, and traveler count. There's no separate quote request or call-back-to-get-the-price step.</li>
          <li><strong>Optionality is real.</strong> Business-class flight upgrades, premium hotel tiers, and a la carte experiences each move the price. The base package is fixed-departure; the customization is on top.</li>
        </ol>
        <p>If you're the time-poor planner, the cautious first-timer, or the premium upgrader, this model combines what each modality does best: someone else owns the logistics, the price is stated up front, and you still make the choices that matter.</p>

        <h2 className="guide-section-title">How to Use This Guide</h2>
        <ol className="guide-list guide-ordered">
          <li><strong>Decide your modality first</strong> — small group for social energy, all-inclusive for one-number simplicity, private for full control, cruise (in the Galápagos) for maximum island coverage, or a fixed-departure all-inclusive for convenience plus optionality.</li>
          <li><strong>Convert every quote to an all-in total.</strong> Add flights, transfers, meals not included, and optional experiences to every "from" price before comparing.</li>
          <li><strong>Compare totals, not list prices.</strong> The trip with the higher sticker price can be the better value when the full-cost picture is visible.</li>
          <li><strong>Check what "included" actually means</strong> in writing, for each operator.</li>
        </ol>
        <p>The trip that wins is rarely the one with the lowest advertised number. It's the one whose advertised number is the real number.</p>

        <div className="guide-cta">
          <h2>Browse the fixed-departure all-inclusive trips</h2>
          <p>Flights from US gateways, hotels, transfers, and experiences in one live total — compare them against the "from" prices above.</p>
          <button className="btn-book" onClick={onBack}>View All Trips</button>
        </div>
      </article>
    </div>
  );
}
