export default function GuidePage({ onBrowseTrips }) {
  return (
    <div className="guide-page">
      <header className="guide-header">
        <div className="guide-top">
          <div className="logo">MAHARAJA</div>
          <button className="back-btn guide-back-btn" onClick={onBrowseTrips}>&larr; All Trips</button>
        </div>
        <p className="guide-subtitle">Curated trips. Fixed dates. No guessing.</p>
      </header>

      <article className="guide-article">
        <p className="guide-eyebrow">Maharaja Guide</p>
        <h1>What an All-In Guided Trip Really Includes (and How to Compare Tour Quotes)</h1>

        <p className="guide-lead">
          You found a tour you like: fixed dates, a packed itinerary, a price that looks reasonable.
          Then you read the fine print. Flight&rsquo;s not included. The &lsquo;From&rsquo; price is per
          person before taxes. Some experiences cost extra on the ground. Before you know it, your
          tidy tour price has become a spreadsheet.
        </p>
        <p className="guide-lead">
          That gap between the advertised tour price and what you actually spend is the single most
          confusing part of booking a guided trip. This guide walks through how tour pricing is quoted,
          what &lsquo;all-in&rsquo; genuinely means, and how to line up two quotes so you&rsquo;re
          comparing the same thing.
        </p>

        <h2>How tour pricing is usually quoted</h2>
        <p>
          Most fixed-departure tour operators sell by <strong>per-person &lsquo;From&rsquo; pricing</strong>.
          That means the number you see covers the land portion of the trip &mdash; the itinerary, guides,
          some or all hotels, and some transport &mdash; calculated per traveler before taxes and, commonly,
          before airfare.
        </p>
        <p>
          Take a quick look at how a widely used cross-operator marketplace describes its own catalog.
          TourRadar advertises tours across 2,500 operators and lists trips like Intrepid&rsquo;s{' '}
          <em>Japan Express</em> 9-day itinerary &lsquo;From $2,350&rsquo;, <em>Explore Jordan</em> 8d
          &lsquo;From $1,996&rsquo;, and G Adventures&rsquo; <em>Highlights of Jordan</em> 8d
          &lsquo;From $1,819&rsquo;. On that marketplace&rsquo;s own page explaining what an organized
          adventure covers, the &lsquo;always included&rsquo; list is{' '}
          <strong>guides, local transport, accommodation, and like-minded travelers</strong> &mdash; airfare
          is not in that list. Its starting prices are frequently shown with strikethrough discounts
          (&lsquo;-20% off&rsquo;, &lsquo;-30% off&rsquo;, &lsquo;-50% off&rsquo;), and the actual payable
          total is gated behind a &lsquo;Sign up to unlock savings&rsquo; wall.
        </p>
        <p>
          None of this is bad. It is how the big operators quote. But it means the advertised number is a
          floor: the trip you actually book usually costs more once you add the flight, your chosen dates,
          and the experiences you want.
        </p>

        <h2>The two ways a fixed-price trip can be sold</h2>
        <p>There are two fundamentally different structures underneath the glossy tour pages:</p>
        <div className="guide-two-col">
          <div className="guide-card">
            <span className="guide-card-num">1</span>
            <h3>Land-only + separate airfare</h3>
            <p>
              The quoted &lsquo;From&rsquo; price covers the ground portion. You then shop for, pay for, and
              coordinate your own flights on top. The advertised price is lower, but the true total &mdash; and
              your planning work &mdash; is higher.
            </p>
          </div>
          <div className="guide-card">
            <span className="guide-card-num">2</span>
            <h3>Truly all-in fixed price</h3>
            <p>
              The quoted price bundles the round-trip flight, hotels, transfers, guides, and a defined set of
              experiences into one number shown up front. When the price moves, you can see exactly what changed
              and why.
            </p>
          </div>
        </div>
        <p>
          Both can be legitimate. They are simply not the same number, and comparing them without adjusting for
          the missing flight is comparing apples to pears.
        </p>

        <h2>What &lsquo;all-in&rsquo; should actually include</h2>
        <p>When someone promises an all-in fixed price, here is the checklist worth holding them to:</p>
        <ul className="guide-checklist">
          <li>
            <strong>Round-trip flights</strong> from a named gateway (which cities, and are they included in the
            headline price?)
          </li>
          <li>
            <strong>Every hotel night</strong>, not just some of them, and clarity on the standard used to pick
            them
          </li>
          <li>
            <strong>Private transfers</strong> between the airport, hotels, and experiences &mdash; not &lsquo;make
            your own way to the meeting point&rsquo;
          </li>
          <li>
            <strong>A defined set of experiences</strong> included in the base price, listed up front rather than
            sold on the ground
          </li>
          <li>
            <strong>An English-speaking local guide</strong> for the days you&rsquo;re touring
          </li>
          <li>
            <strong>The logistics someone else owns</strong>: bookings, timing, and coordination that would
            otherwise fall to you
          </li>
          <li>
            <strong>What&rsquo;s not included</strong>, stated just as clearly: optional add-ons, personal
            spending, trip protection, and anything billed on your arrival
          </li>
        </ul>
        <p className="guide-callout">
          The most useful single question to ask before booking: <strong>does the headline price include my
          flight, or is that added separately?</strong> Everything else follows from the answer.
        </p>

        <h2>How to compare two tour quotes fairly</h2>
        <p>
          Same destination, same-ish dates, two operators, two prices. To compare them honestly, put both on the
          same footing:
        </p>
        <ol className="guide-steps">
          <li>
            <strong>Estimate the flight into the land-only quote.</strong> If one operator quotes land-only, add a
            realistic round-trip fare from your nearest US gateway. Watch for a price list that quietly leaves this
            out.
          </li>
          <li>
            <strong>Check the date-specific price, not the &lsquo;From&rsquo; price.</strong> &lsquo;From&rsquo; is
            a floor for a specific travel date and tier, not a promise that your departure costs that. Get the price
            for the exact dates you want.
          </li>
          <li>
            <strong>Count the nights and the logistics.</strong> A 9-day advertised trip may include fewer hotel
            nights than a shorter-looking one. Confirm which transfers and experiences fall inside the price.
          </li>
          <li>
            <strong>Add the optional extras to both sides.</strong> Upgrades, add-on experiences, and trip protection
            change the total. Compare the full configured trip, not the stripped base.
          </li>
          <li>
            <strong>Ask what changes the price.</strong> On an all-in trip, you should be able to see the total move
            when you add an experience or upgrade a flight or hotel. If the price only appears after you sign up or
            call, that transparency isn&rsquo;t there yet.
          </li>
        </ol>

        <h2>What a genuinely all-in trip looks like in practice</h2>
        <p>
          When the flight is inside the price, the headline number gets bigger &mdash; and so does your certainty.
          A genuinely all-in fixed-departure trip is a finished plan with a single number you can trust:
          round-trip flights from a named US gateway, all hotel nights, private transfers, English-speaking guides,
          a defined set of included experiences, and 24/7 in-trip support, priced up front.
        </p>
        <p>
          The trade worth noticing: the land-only quote looks cheaper and frequently costs more by the time you add
          the flight and extras. The all-in quote looks bigger and is the number you actually pay &mdash; with the
          planning done for you.
        </p>

        <h2>The takeaway</h2>
        <p>
          Tour pricing isn&rsquo;t designed to be confusing, but &lsquo;From&rsquo; prices, per-person math, and
          separate airfare make it easy to compare the wrong number. Before you book, put every quote on the same
          footing: add the flight, check your exact dates, count the nights and the included logistics, and add your
          extras. Then decide based on the true total &mdash; the price you&rsquo;ll actually pay for the trip you
          actually want.
        </p>

        <div className="guide-cta">
          <h2>See the all-in number up front</h2>
          <p>
            Maharaja trips price round-trip flights, hotels, private transfers, guides, and a defined set of
            experiences into one fixed total &mdash; and you can watch it move as you add experiences or upgrade
            flights and hotels.
          </p>
          <button className="btn-book" onClick={onBrowseTrips}>Browse Fixed-Date Departures</button>
        </div>

        <p className="guide-source-note">
          Sources: pricing and inclusion patterns verified against TourRadar catalog and guidance pages (
          <a href="https://tourradar.com/organized-adventures" target="_blank" rel="nofollow noopener noreferrer">tourradar.com/organized-adventures</a>;
          <a href="https://tourradar.com/o/intrepid" target="_blank" rel="nofollow noopener noreferrer">tourradar.com/o/intrepid</a>;
          <a href="https://tourradar.com/o/g-adventures" target="_blank" rel="nofollow noopener noreferrer">tourradar.com/o/g-adventures</a>;
          <a href="https://tourradar.com" target="_blank" rel="nofollow noopener noreferrer">tourradar.com</a>).
        </p>
      </article>
    </div>
  );
}
