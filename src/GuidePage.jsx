import { useEffect } from 'react';

const sources = [
  'Rick Steves Travel Forum — "Price comparison between a guided tour vs. booking everything on your own"',
  'thepointsguy.com — value-bundling framing',
  'pieterontour.com — "Cost of Guided Tours vs Solo Travel: Real Price Breakdown"',
  'shescribes.com — "Best Vacation Packages to Europe (2026)"',
  'TourRadar — single supplement 10–50%',
  'r/travel — single-supplement range USD 575–3,750',
  'Exoticca Galápagos review — worked example',
];

export default function GuidePage({ onBack }) {
  useEffect(() => {
    const prev = document.title;
    document.title = "How to Audit a Guided-Tour Operator's All-In Price | Maharaja Travel Guide";
    return () => { document.title = prev; };
  }, []);

  return (
    <div className="guide-page">
      <header className="guide-hero">
        <div className="guide-hero-top">
          <button className="back-btn" onClick={onBack}>&larr; All Trips</button>
          <span className="guide-brand">MAHARAJA</span>
        </div>
        <div className="guide-hero-content">
          <span className="guide-kicker">Travel Guide</span>
          <h1>How to Audit a Guided-Tour Operator's All-In Price Before You Book</h1>
        </div>
      </header>

      <article className="guide-body">
        <p className="guide-intro">
          Tour operators advertise a headline "from" price. What that price actually covers — and what it
          leaves out — determines whether you're getting a fair deal or quietly paying 30–50% more than the
          advertised figure.
        </p>
        <p className="guide-intro">
          This guide walks you through the exact checklist an experienced traveler runs before committing to
          a guided tour, so you can compare operators on the <strong>true all-in cost per day</strong>, not the
          marketing price.
        </p>

        <section className="guide-step">
          <h2>Step 1: Convert every headline price to a true per-person-per-day cost</h2>
          <p>
            The single most useful habit for comparing tours is converting a headline price into a daily rate
            per person. This is how travel forums and savvy shoppers compare fundamentally different itineraries.
          </p>
          <div className="guide-callout">
            <strong>The "drop a day" rule.</strong> A tour advertised as "21 days" rarely delivers 21 full travel
            days with 21 nights. When computing your daily cost, drop a day: a 21-day tour delivers roughly 20
            travel days and 20 nights. Divide the headline price by that real figure, not the marketing number.
          </div>
          <p>
            Practical context from active travel communities: a well-regarded 21-day "Best of Europe" tour
            typically runs around $295 per person per day before any single supplement; many operators land in
            the $300s per person per day. Benchmarking against building the trip yourself at $400–500 per person
            per day <strong>can</strong> be strong value — but only if the inclusions genuinely add up to that cost.
          </p>
          <div className="guide-callout">
            <strong>Why this matters:</strong> A $4,800 trip over 9 days is $533/day. The same trip over 12 real
            travel days is $400/day. Which one is the better deal depends entirely on what those days include.
          </div>
        </section>

        <section className="guide-step">
          <h2>Step 2: Ask what the headline price does NOT include</h2>
          <p>
            The hidden-cost gap is where the advertised price and the real price diverge. Work through this
            inclusion checklist before you allow any operator to quote a fair comparison:
          </p>
          <ul className="guide-checklist">
            <li><strong>International airfare.</strong> Many operators quote land-only "from" prices and handle flights separately. Confirm explicitly whether your gateway flights are in or out.</li>
            <li><strong>Domestic and internal flights.</strong> Transfers between cities or islands are frequently priced apart from the headline.</li>
            <li><strong>Meals, lunches, and drinks.</strong> Some dinners and many lunches are excluded — and beverages with included meals often are too.</li>
            <li><strong>Optional excursions.</strong> These are the classic up-sell. Ask which stops are truly included and which are "optional but effectively expected."</li>
            <li><strong>Gratuities and tips</strong> for your guide and driver. One popular European tour model itemizes this at roughly €85–110 per traveler.</li>
            <li><strong>Single supplement.</strong> Most operators charge 10–50% extra for solo travelers; a common figure in community discussion is $575–$3,750 depending on the trip.</li>
            <li><strong>Entrance fees and park passes.</strong> Sites not in the itinerary, plus mandatory national-park or entry fees, frequently land on your card at the destination.</li>
            <li><strong>Local taxes, city taxes, resort fees.</strong> Small per-night charges that add up across a two-week trip.</li>
            <li><strong>Change and cancellation terms.</strong> Per-change land fees plus air-change fees — and surprise charges when a promised direct flight turns out to have a connection.</li>
          </ul>
          <div className="guide-callout">
            <strong>One worked example</strong> (from an active traveler's actual experience): a $1,599 headline
            Galápagos package ended up at $2,569 after add-on excursions ($295), tips (~$150), food ($250), and
            the park entry fee ($100).
          </div>
        </section>

        <section className="guide-step">
          <h2>Step 3: Watch the "from + % off" framing</h2>
          <p>
            A headline like "From $849 — 60% off" is nearly always quoted per person, double occupancy, before the
            exclusions above. The discount anchors you to a number almost no one actually pays. When you audit
            price, ignore the percentage and the "from" and ask for <strong>the all-in figure at your traveler
            count, your dates, and your room setup.</strong>
          </p>
        </section>

        <section className="guide-step">
          <h2>Step 4: Test the transparency behavior, not just the checklist</h2>
          <p>
            Any operator can say "everything's included." The strongest signal of a fair all-in price is
            <strong> whether the seller shows you a live, itemized total as you configure the trip</strong> —
            experiences, flight class, hotel tier, and insurance — rather than a static marketing "from" figure.
          </p>
          <p>A transparent operator gives you:</p>
          <ul className="guide-checkmark-list">
            <li>A fixed total that updates as you add or remove options, in real time.</li>
            <li>A clear split (transport + stay / add-ons / total) so you can see what each decision costs.</li>
            <li>Upgrade paths priced per night or per segment, not a vague "plus upgrades."</li>
            <li>A day-by-day itinerary before you commit.</li>
          </ul>
          <p>
            If a seller can only show you a "from" price and tells you the real cost "once we talk," that is a red
            flag worth holding against them.
          </p>
        </section>

        <section className="guide-step">
          <h2>The five-question audit you can run on any operator right now</h2>
          <ol className="guide-audit-list">
            <li><strong>What is the all-in price per person at my exact traveler count, dates, and room setup — including flights?</strong></li>
            <li><strong>Which meals, drinks, and tips are genuinely included?</strong> Run the itinerary day by day.</li>
            <li><strong>Which excursions and entrance fees are included vs. optional add-ons?</strong> Ask for the price of each optional item in writing.</li>
            <li><strong>What is the single supplement if I travel solo?</strong> Get the exact number, not a range.</li>
            <li><strong>Can you show me a live total as I configure the trip, or just a "from" price?</strong> The answer tells you how confident they are in their own pricing.</li>
          </ol>
        </section>

        <section className="guide-step">
          <h2>The bottom line</h2>
          <p>
            A tour's advertised price is the beginning of the conversation, never the end. Convert it to a true
            per-person-per-day cost, run the inclusion checklist, discard the "% off" theater, and prefer
            operators who will show you a live all-in total. When a seller publishes that live total up front —
            flights, stays, transfers, guides, and experiences in one fixed price — the audit gets dramatically
            easier, and that transparency is the strongest evidence you've found a fair deal.
          </p>
        </section>

        <div className="guide-cta">
          <h3>See the live all-in total in action</h3>
          <p>
            Maharaja prices every trip the way this guide recommends: a fixed, all-in total that updates as you
            configure flights, stays, and experiences — no hidden extras.
          </p>
          <button className="btn-book" onClick={onBack}>Browse All-In Trips</button>
        </div>

        <footer className="guide-sources">
          <h3>Sources</h3>
          <ul>
            {sources.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </footer>
      </article>
    </div>
  );
}
