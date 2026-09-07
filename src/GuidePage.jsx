import { destinationExperts } from './data/trips';
import './App.css';

const heroImage = 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80';
const railImage = 'https://images.unsplash.com/photo-1514337224818-9787cf717f2a?w=800&q=80';
const hotelImage = 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80';

function GuideFigure({ src, alt, caption, className }) {
  return (
    <figure className={`guide-figure ${className || ''}`}>
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function GuidePage({ guide }) {
  const expert = destinationExperts[guide.tripId];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="guide-page">
      <a href="#/" className="guide-back">&larr; All Trips</a>

      <header className="guide-page-header">
        <div className="guide-kicker">{guide.flag} {guide.category}</div>
        <h1>{guide.title}</h1>
        {expert && (
          <div className="guide-byline">
            <img src={expert.photo} alt={expert.name} className="guide-byline-photo" />
            <div className="guide-byline-text">
              <span>By <strong>{expert.name}</strong></span>
              <span className="guide-byline-role">{expert.title}, Maharaja</span>
            </div>
          </div>
        )}
      </header>

      <GuideFigure
        src={heroImage}
        alt="Pedestrians crossing a busy intersection in Tokyo's Shibuya district at dusk."
        caption="Japan rewards advance planning; the question is who you want to do it."
        className="guide-hero-figure"
      />

      <nav className="guide-toc" aria-label="In this guide">
        <div className="guide-toc-title">In this guide</div>
        <ol className="guide-toc-list">
          {guide.sections.map((section, i) => (
            <li key={section.id}>
              <button type="button" onClick={() => scrollToSection(section.id)}>
                <span className="guide-toc-num">{i + 1}</span>
                {section.label}
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div className="guide-body">

        <section className="guide-section" id="what-a-package-includes">
          <h2>What an all-in guided Japan package can include</h2>
          <p>A fixed-departure guided package can fold the pieces most first-timers find hardest to coordinate into one up-front price:</p>
          <ul className="guide-list">
            <li>Round-trip flights from a US gateway</li>
            <li>All hotel nights, usually in centrally located properties</li>
            <li>Private transfers between airports and hotels, and between cities</li>
            <li>An English-speaking local guide on core sightseeing days</li>
            <li>A selected set of experiences, from temples and museums to food tours and cultural activities</li>
            <li>An in-trip support line if something goes wrong</li>
            <li>A day-by-day itinerary you can read before you commit</li>
          </ul>
          <p>One caution applies across the category: not every advertised tour price is the same. Some operators quote only the touring portion and add flights later, so check exactly what the headline figure covers before you compare it with anything else. Inclusions matter too. Most packages do not include every meal, personal spending, or optional experiences, and trip protection may be separate. Read the list carefully.</p>
        </section>

        <section className="guide-section" id="what-diy-involves">
          <h2>What DIY Japan planning actually involves</h2>
          <p>Planning Japan independently is very doable. It gives you total freedom: your pace, your hotels, your restaurants, your days. The real cost is research time and judgment. Here is what you take on.</p>
          <p className="guide-media-text"><strong>Flights.</strong> You compare carriers, gateways, and dates yourself, and fares vary widely with season and how far ahead you book.</p>

          <div className="guide-media">
            <p className="guide-media-text"><strong>Hotels.</strong> You research neighborhoods, from Shinjuku versus Shibuya versus Ginza in Tokyo to Gion versus the downtown core in Kyoto, weigh reviews and cancellation policies, and book each property separately. Budget rooms in Tokyo and Kyoto are famously small, and more space costs more.</p>
            <GuideFigure
              src={hotelImage}
              alt="Traditional Japanese ryokan guest room with tatami flooring and a low table."
              caption="Hotel rooms in Tokyo and Kyoto run small at budget level; a guided package preselects hotels for location and quality."
            />
          </div>

          <div className="guide-media">
            <p className="guide-media-text"><strong>Internal transport.</strong> You decide between a rail pass and point-to-point tickets for your actual route. For a Tokyo-Kyoto-Osaka itinerary you will ride the Shinkansen, and whether a pass pays off depends on how many long-distance legs you take and when you travel. The math is yours to run.</p>
            <GuideFigure
              src={railImage}
              alt="White Shinkansen bullet train arriving at a Japanese station platform."
              caption="Japan's rail network is excellent, but whether a pass or point-to-point tickets works better depends on your route."
            />
          </div>

          <p><strong>Transfers.</strong> You navigate Narita or Haneda into the city and repeat the exercise at each city change. Taxis are expensive; trains are cheap but involve handling luggage through stations.</p>
          <p><strong>Itinerary.</strong> You decide what to see, in what order, and when to book. Many of Japan's most popular attractions and museums run on advance timed entry, so checking reservation requirements is part of the job.</p>
          <p><strong>Problem-solving on the ground.</strong> You do not need to speak Japanese, but you handle every hiccup yourself, from a missed train to a closed restaurant to a hotel check-in issue, in a country where English signage is common in major tourist areas but not universal.</p>
          <p>Be honest about the calendar as well. A careful first-trip plan takes a substantial block of evenings and weekends, and every booking decision and every on-the-ground problem is yours alone.</p>
        </section>

        <section className="guide-section" id="the-cost-question">
          <h2>The cost question: is an all-in package a rip-off?</h2>
          <p>The most common objection to a guided tour is that you pay more than you would on your own. Sometimes true, sometimes not, and the difference is rarely as simple as the sticker price.</p>
          <p><strong>Build the true DIY number.</strong> Travelers often compare a package price against a DIY estimate that covers flights and hotels and forgets the rest: airport transfers, Shinkansen tickets, admission and timed-entry fees, and the value of their own research time. Add those in, and an all-in package price is often closer to DIY than it first appears, especially when the DIY plan uses comparable centrally located hotels rather than budget hostels.</p>
          <p><strong>Weigh what the premium buys.</strong> Someone else doing the research, a local guide handling language and logistics on the ground, hotels preselected for location and quality, and a safety net when plans go wrong. For some travelers that is worth the difference. For others it is wasted money.</p>
          <p><strong>Know what DIY can genuinely save.</strong> If you are flexible, comfortable in simpler hotels, willing to use trains instead of private transfers, and you actually enjoy the research, independent planning can undercut an all-in package by a meaningful margin. That saving is conditional: it depends on doing the work and accepting the friction.</p>
          <p><strong>Compare like for like.</strong> A package with business-class flights and premium hotels will always cost more than a budget DIY trip, and that is not a fair comparison. Match the package's exact inclusions against a realistic DIY plan, not an idealized one.</p>
        </section>

        <section className="guide-section" id="side-by-side">
          <h2>Guided package vs. DIY: side by side</h2>
          <div className="guide-table-scroll">
            <table className="guide-table">
              <thead>
                <tr>
                  <th scope="col">Consideration</th>
                  <th scope="col">Guided fixed-departure package</th>
                  <th scope="col">DIY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Up-front price</th>
                  <td>One all-in figure, when flights are priced in</td>
                  <td>Flights and hotels visible; research and ground costs hidden until you build the plan</td>
                </tr>
                <tr>
                  <th scope="row">Research time</th>
                  <td>Done for you</td>
                  <td>A serious block of evenings and weekends</td>
                </tr>
                <tr>
                  <th scope="row">Flights</th>
                  <td>Bundled from a US gateway</td>
                  <td>You compare and book</td>
                </tr>
                <tr>
                  <th scope="row">Hotels</th>
                  <td>Preselected and centrally located</td>
                  <td>You choose and book each property</td>
                </tr>
                <tr>
                  <th scope="row">Internal transport</th>
                  <td>Handled by the package</td>
                  <td>You choose pass versus tickets and navigate</td>
                </tr>
                <tr>
                  <th scope="row">Local guide</th>
                  <td>English-speaking on core sightseeing days</td>
                  <td>None</td>
                </tr>
                <tr>
                  <th scope="row">Day-to-day plan</th>
                  <td>Set and visible before you book</td>
                  <td>Yours to design</td>
                </tr>
                <tr>
                  <th scope="row">Flexibility on the ground</th>
                  <td>Fixed structure with optional add-ons</td>
                  <td>Total freedom</td>
                </tr>
                <tr>
                  <th scope="row">Language barrier</th>
                  <td>Guide handles it</td>
                  <td>You manage with apps and signage</td>
                </tr>
                <tr>
                  <th scope="row">Support</th>
                  <td>In-trip support line</td>
                  <td>Self-service</td>
                </tr>
                <tr>
                  <th scope="row">Best for</th>
                  <td>Time-poor first-timers who want structure</td>
                  <td>Flexible, experienced, budget-conscious planners</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="guide-section" id="who-benefits-from-guided">
          <h2>Who benefits from a guided fixed-departure package</h2>
          <p>You are a strong candidate for a fixed-departure package if any of these sound like you.</p>
          <p><strong>You have limited vacation time and do not want to burn it on research.</strong> A traveler with a couple of weeks off and Japan high on the list is the classic fit. A package delivers a finished plan inside a defined budget. The trade-off is paying for convenience you could have arranged yourself, if you had the time.</p>
          <p><strong>This is your first trip to Japan, and the logistics feel intimidating.</strong> You do not speak Japanese. You have heard about the rail system, the timed-entry museums, and the tiny hotel rooms. You want a local guide to remove the uncertainty. Peace of mind is a real product.</p>
          <p><strong>You are traveling for a milestone, such as a honeymoon or an anniversary.</strong> You want the trip to feel curated, not like a scavenger hunt. A package with upgrade options, from business-class flights to premium hotels to a la carte experiences, delivers convenience without giving up choice.</p>
          <p><strong>You do not want to argue about logistics with your travel partner.</strong> The package settles where you stay, how you get there, and what you do each day, so you can focus on the experience instead of the planning.</p>
        </section>

        <section className="guide-section" id="who-should-plan-diy">
          <h2>Who should plan Japan independently</h2>
          <p>Independent planning is likely the better call if:</p>
          <p><strong>You enjoy the research.</strong> For many travelers, planning is part of the fun. If you look forward to reading neighborhood guides and building your own itinerary, a package removes exactly what you enjoy.</p>
          <p><strong>You want total freedom and spontaneity.</strong> A fixed-departure package has set dates and a structure. If you want to linger in a café, change plans mid-day, or decide each morning what you feel like doing, that structure will feel like a constraint.</p>
          <p><strong>Flexibility matters more than convenience.</strong> Packages run on fixed dates. If your dates are fluid, or you want to combine Japan with another country on your own schedule, DIY gives you that room.</p>
          <p><strong>You are on a tight budget and willing to compromise on comfort.</strong> If you are happy with simpler hotels, willing to navigate trains with luggage, and fine eating where locals eat, DIY can save real money, provided you do the work.</p>
          <p><strong>You have traveled independently in similarly complex countries.</strong> If you have navigated non-English-speaking destinations before and enjoyed it, Japan is manageable, and you already know you can handle the friction.</p>
        </section>

        <section className="guide-section" id="the-middle-path">
          <h2>The middle path: guidance without a straitjacket</h2>
          <p>Not every guided option is a rigid tour-bus experience, and not every package is all-in. If you want structure with room to choose, evaluate an operator on these points.</p>
          <ul className="guide-list">
            <li><strong>Check what the quoted price actually covers.</strong> Some operators advertise a per-person touring price and handle flights separately, so the true total emerges late in the process. Get the all-in number, including airfare, before you compare it with anything.</li>
            <li><strong>Review the itinerary before you pay.</strong> A specific day-by-day plan with hotels and inclusions beats a vague promise of nine days in Japan. If the operator will not show the plan up front, treat that as a warning sign.</li>
            <li><strong>Read the inclusions and exclusions.</strong> Which meals are covered? Which experiences are included versus optional add-ons? Are transfers private or shared? Is the English-speaking guide present for the whole trip or only select days?</li>
            <li><strong>Look for genuine optionality.</strong> Flight upgrades, hotel tiers, and add-on experiences, each priced transparently, let you tune the trip instead of accepting a single fixed tier.</li>
            <li><strong>Check the trust signals.</strong> Dated traveler reviews, a named destination expert whose background you can verify, and a clear support promise such as a phone line, live chat, or a stated response time all matter on a first trip to a complex country.</li>
          </ul>
        </section>

        <section className="guide-section" id="how-maharaja-approaches">
          <h2>How Maharaja approaches the Japan decision</h2>
          <p>Maharaja is a curated fixed-departure guided travel operator, and its Japan trip is built to remove much of the opacity that makes this decision hard. The package bundles round-trip flights from US gateways, all hotel nights, private transfers, English-speaking local guides, and a menu of experiences into one fixed, stated price. The points most relevant to the guided-versus-DIY choice:</p>
          <ul className="guide-list">
            <li><strong>The all-in price is visible up front and updates as you customize.</strong> Upgrade from economy to business, switch hotels between tiers, or add and remove experiences, and the displayed total changes so you see the real number before you commit rather than discovering airfare later.</li>
            <li><strong>The itinerary is visible before booking.</strong> The day-by-day plan is laid out in advance, alongside traveler reviews and a destination expert profile, so you can judge the trip before you pay for it.</li>
            <li><strong>The optionality is concrete.</strong> Business-class upgrades, premium hotel tiers, and a la carte experiences are priced individually. Personality presets such as Food Lover, Adventure, Culture, and Luxury can pre-select matching experiences if you want a shortcut, or you can build your own combination.</li>
            <li><strong>A human layer exists</strong> through a phone line, live chat, and a Customize with Expert request with responses promised within 24 hours, for travelers who want to talk the decision through.</li>
          </ul>
          <p>The honest limitation: a fixed-departure package means fixed dates. If your travel dates must flex widely, or you genuinely enjoy building the plan yourself, it may not be the right fit. If you want Japan fully assembled, with the itinerary and the true all-in price visible before you commit, the <a href={`#/trip/${guide.tripId}`}>Maharaja Japan trip page</a> lets you review both and customize from there.</p>
        </section>

        <section className="guide-section" id="decision-framework">
          <h2>Your decision framework</h2>
          <p>Ask yourself these five questions:</p>
          <ol className="guide-questions">
            <li><strong>How much time do I actually have to plan, not in theory but this month?</strong> If the calendar is already full, a package removes a genuine burden.</li>
            <li><strong>Do I enjoy the research, or is it a chore I will postpone until it becomes a problem?</strong> The honest answer matters more than the aspirational one.</li>
            <li><strong>How do I feel about problem-solving in a country where I do not speak the language?</strong> Excitement points to DIY. Anxiety points to a guide being worth the cost.</li>
            <li><strong>What is my real budget, and have I built the true DIY number including transfers, rail, and timed entries?</strong> Compare like for like.</li>
            <li><strong>Will a fixed structure feel like freedom or a cage?</strong> If a planned day-by-day itinerary sounds relaxing, a package fits. If it sounds restrictive, you want flexibility.</li>
          </ol>
        </section>

        <section className="guide-section" id="bottom-line">
          <h2>Bottom line</h2>
          <p>There is no universally right answer. There is only the right answer for you, based on your time, temperament, budget, and experience.</p>
          <p><strong>Choose a guided fixed-departure package if</strong> you want Japan's highlights assembled for you, with an all-in price up front, a local guide handling logistics, and none of your vacation spent on planning or problem-solving.</p>
          <p><strong>Plan it yourself if</strong> you enjoy the research, want total flexibility, are comfortable navigating independently, and are honest about building the full DIY cost, including your time.</p>
          <p>If you land in the middle, wanting guidance without giving up control and choice, find an operator that shows you the real all-in price, the day-by-day itinerary, and the optionality to shape the trip before you commit. That transparency is what separates a genuinely useful package from an opaque price that hides the real cost.</p>
        </section>

      </div>

      <div className="guide-cta">
        <div className="guide-cta-icon">🗾</div>
        <div className="guide-cta-text">
          <h2>See how Maharaja puts this into practice</h2>
          <p>Review the all-in price, the day-by-day itinerary, and your customization options on the Maharaja Japan trip page.</p>
        </div>
        <a className="guide-cta-btn" href={`#/trip/${guide.tripId}`}>Review the Japan Trip</a>
      </div>

      <nav className="guide-footer-nav" aria-label="Continue exploring">
        <a href="#/" className="guide-footer-link">&larr; Browse all trips</a>
        <a href={`#/trip/${guide.tripId}`} className="guide-footer-link">{guide.flag} Japan trip details &rarr;</a>
      </nav>
    </main>
  );
}
