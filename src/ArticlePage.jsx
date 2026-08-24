import { useEffect } from 'react';

const TITLE = 'How to Plan a Fixed-Departure Guided Trip | Maharaja';
const DESCRIPTION = 'How fixed-departure guided trips actually work, what an all-in price should include, and the exact questions to ask before you book — the walkthrough US travelers use to compare tours honestly.';

function ArticlePage({ onBrowseTrips }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = TITLE;

    let meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta ? meta.getAttribute('content') : null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', DESCRIPTION);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'article-structured-data';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'How to Plan a Fixed-Departure Guided Trip: The Full Walkthrough',
      description: DESCRIPTION,
      inLanguage: 'en',
      datePublished: '2026-08-24',
      dateModified: '2026-08-24',
      publisher: { '@type': 'Organization', name: 'Maharaja' },
    });
    document.head.appendChild(script);

    return () => {
      document.title = previousTitle;
      if (previousDescription !== null) {
        meta.setAttribute('content', previousDescription);
      }
      const existing = document.getElementById('article-structured-data');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="article-page">
      <div className="article-head">
        <a className="article-back" href="#/trips" onClick={(e) => { e.preventDefault(); onBrowseTrips(); }}>
          &larr; All Trips
        </a>
        <p className="article-kicker">Travel Guide</p>
        <h1 className="article-title">How to Plan a Fixed-Departure Guided Trip: The Full Walkthrough</h1>
        <p className="article-deck">You've decided you want a trip to Japan, Vietnam, the Galápagos, or Egypt — a real one, not a vague someday list. Then you search "guided tours" and immediately face two problems: a thousand departures with no dates you can plan around, and pricing that says "from $4,500" but quietly leaves out flights.</p>
        <p className="article-meta">Published August 24, 2026</p>
      </div>

      <div className="article-body">
        <p>Fixed-departure guided trips are the answer to both problems, if you understand what you're actually buying. This guide walks you through what a fixed-departure trip really includes, how to tell a genuinely transparent package from a "tour price plus flights" shell game, and the exact questions to ask before you hand over a deposit.</p>

        <h2>What a fixed-departure trip actually is</h2>
        <p>A fixed-departure trip is a travel package with a set start date, published itinerary, and a single up-front price that bundles the pieces of the journey.</p>
        <p>Unlike a fully custom itinerary (where every hotel and transfer is designed one-off for you, usually with a travel advisor), a fixed-departure trip runs on a set schedule with a defined group, guide, and route. Unlike a DIY trip (where you assemble flights, hotels, transfers, and activities yourself), it's pre-built by someone who has run the route before.</p>
        <p>That matters because the tradeoff is real. You give up some flexibility on timing — you travel on the published dates, not "whenever." In exchange you get three things DIY planning rarely delivers:</p>
        <ol>
          <li><strong>You see the total before you commit.</strong> Not a per-day touring rate with flights "added at checkout." A real package shows you the all-in number first.</li>
          <li><strong>Logistics are already solved.</strong> Someone has already figured out the airport transfer, the hotel that's actually close to the sites, the guide who's booked, the narrow ferry window.</li>
          <li><strong>You're protected by preparation.</strong> A route that's been run before means the pitfalls — closed temples, high-season crowds, road timing — are already engineered around.</li>
        </ol>

        <h2>The question that separates honest packages from marketing</h2>
        <p>The single most useful question you can ask about any guided trip is this:</p>
        <blockquote className="article-quote">"What is the total price, including flights and transfers, for the exact dates I want?"</blockquote>
        <p>Many operators quote a per-person "from" price for the tour itself and list international flights separately, sometimes by a different airline, often leaving you to book them yourself. The math feels manageable until you add a $1,400 flight and suddenly the trip is 30% more than the headline.</p>
        <p>A transparent fixed-departure package answers the question up front. It says the trip is X dollars per person, and that number already includes your round-trip flights from a stated gateway city, your hotels, transfers, guides, and the experiences that are "included." No second-currency surprise, no separate booking.</p>
        <p>This is the core difference to watch for. It's not about one price being better than another — it's about whether the quoted price is actually the price.</p>

        <h2>What should actually be included</h2>
        <p>When you compare packages, a genuinely all-in fixed-departure trip should clearly state these elements. If any are missing or vague, ask directly:</p>
        <ul>
          <li><strong>Round-trip flights</strong> from a named gateway city (e.g., Los Angeles or New York) — and whether that's economy or an upgrade option exists</li>
          <li><strong>All hotel nights</strong>, with the standard tier named and an upgrade path if you want one</li>
          <li><strong>Private transfers</strong>, not just "group transport"; on the ground, that's the difference between being driven door-to-door and waiting on a bus schedule</li>
          <li><strong>English-speaking local guides</strong>, and what days they're with you vs. open days</li>
          <li><strong>The specific experiences labeled "included"</strong>, so you can compare actual itineraries, not just day counts</li>
          <li><strong>A day-by-day itinerary you can read before booking</strong>, so the structure is real, not a template</li>
          <li><strong>A named point of contact</strong> for questions and a stated support promise during the trip</li>
        </ul>

        <h2>Fixed dates are the feature</h2>
        <p>It's worth naming the obvious tension you may feel: fixed dates mean you don't choose your own travel day. That's the point, and it's why the price stays low.</p>
        <p>An operator that runs a set departure can fill a group, lock in group airfare, book a guide once, and spread fixed costs across travelers. That's how a fully-arranged trip ends up priced at a level a bespoke one-off itinerary can't touch.</p>
        <p>The flip side of that efficiency is the scarcity message you'll see on nearly every trip page: "limited spots per departure." Treat it as real when it's real. Fixed-departure trips genuinely do have a capped group size — the guide-to-traveler ratio is a staffing decision, not a marketing trick. If a departure matters to you and the dates fit your calendar, the rational move is to secure it and sort the details, rather than assume it'll still be there next week.</p>

        <h2>The decisions that actually change the price</h2>
        <p>A modern fixed-departure package isn't a take-it-or-leave-it product. Once the base is transparent, the useful question becomes what you can change and what it costs. Watch for these levers on a good trip builder:</p>
        <ul>
          <li><strong>Flights:</strong> economy vs. business upgrade, stated up front</li>
          <li><strong>Hotels:</strong> a standard vs. premium tier per property, priced per night</li>
          <li><strong>Experiences:</strong> an à la carte menu where you add or drop activities and see the total move instantly</li>
          <li><strong>Trip protection:</strong> a basic plan and a cancel-for-any-reason premium option, with the percentage clearly stated</li>
        </ul>
        <p>If a package only offers one rigid tier, ask how it stays competitive against a package where you can tune the experience to taste. The best signal of a real builder is a <strong>live total</strong> — a price bar that recalculates as you toggle choices. If the number only changes when you call a salesperson, you're not looking at transparent pricing.</p>

        <h2>The exact questions to ask before you book</h2>
        <p>Walk into the decision with this short checklist. If an operator hesitates on any of these, that's information:</p>
        <ol>
          <li>What is the all-in price, including flights and transfers, for the dates I want?</li>
          <li>Which gateway airports does the package fly from?</li>
          <li>Which hotels, and what does the upgrade cost per night?</li>
          <li>Which experiences are included in the base price, and which are add-ons?</li>
          <li>How many travelers per departure, and how many spots are left on my date?</li>
          <li>What happens if a departure doesn't fill — is it still guaranteed, and what's the policy?</li>
          <li>What does trip protection cover, and when's the last day to buy the cancel-for-any-reason plan?</li>
          <li>Who is my contact before and during the trip, and what are their hours?</li>
        </ol>

        <h2>How to fit a fixed-departure trip to your travel style</h2>
        <p>One misconception is that fixed-departure trips are only for people who don't like planning. The travelers who get the most from them actually split three ways:</p>
        <ul>
          <li><strong>The time-poor planner</strong> who values their weekends more than the DIY savings and wants the trip finished inside a defined budget.</li>
          <li><strong>The cautious first-timer</strong> heading to a country where the language, logistics, or safety are new — Japan, Egypt, the Galápagos — who wants a guide and a handled itinerary.</li>
          <li><strong>The upgrader</strong> who has traveled independently but now wants convenience without giving up choice — business class, better hotels, exactly the experiences they want.</li>
        </ul>
        <p>Know which one you are, because it changes what matters. A first-timer in the Galápagos should weigh guide quality, included transfers, and trip protection above price. An upgrader should look hardest at the upgrade tiers and the à la carte menu. A time-poor planner should check that the dates are real and the total is stable.</p>

        <h2>Fixed dates, no guessing</h2>
        <p>You now know what separates a genuinely transparent fixed-departure trip from a tour price with add-on flights: whether the quoted number is the actual number, and whether you can see what changes it.</p>
        <p>If you're looking at a package that bundles round-trip flights from US gateways, all hotel nights, private transfers, English-speaking guides, and included experiences into one stated price with a live total and a real upgrade path — that's the kind of offer worth putting a deposit on. The dates are fixed, which is exactly what makes the price honest.</p>

        <div className="article-cta">
          <h2>See the all-in number for yourself</h2>
          <p>Browse Maharaja's fixed-departure trips — round-trip flights from US gateways, hotels, private transfers, English-speaking guides, and experiences in one published total that updates as you tune it.</p>
          <a className="btn-article" href="#/trips" onClick={(e) => { e.preventDefault(); onBrowseTrips(); }}>
            Browse Fixed-Departure Trips
          </a>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
