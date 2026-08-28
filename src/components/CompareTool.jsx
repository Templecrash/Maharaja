import { useEffect, useMemo, useState } from 'react';
import { trips } from '../data/trips';
import './CompareTool.css';

const COMPARE_TITLE = 'All-In Trip Price Compare: Guided Tour Cost Calculator | Maharaja';
const COMPARE_DESCRIPTION = 'See what an all-in guided trip really costs vs. a tour operator\u2019s "from" price plus airfare. Enter your own numbers for an honest side-by-side. No guessing.';
const DEFAULT_TITLE = 'Maharaja \u2014 Curated Travel';

function toNumber(value) {
  if (value == null) return 0;
  const cleaned = String(value).replace(/[^0-9.]/g, '');
  if (cleaned === '') return 0;
  const n = parseFloat(cleaned);
  return Number.isFinite(n) ? n : 0;
}

function fmt(n) {
  return '$' + Math.round(n).toLocaleString('en-US');
}

const CHECKLIST = [
  { q: 'What\u2019s actually inside the "from" price', detail: 'Flights? Transfers? Meals? Check what the touring rate states as included.' },
  { q: 'Trust signals', detail: 'Dated traveler reviews, operator history, local-guide coverage, and trip protection or cancel options.' },
  { q: 'Optionality', detail: 'Can you upgrade flights (e.g., business) and hotels, and add or drop experiences? Does the quoted operator offer that control?' },
  { q: 'Departure fit', detail: 'Do the fixed dates match your actual days off? Are dates and spots published up front?' },
  { q: 'Human support', detail: 'Is there a live total, a phone line (1-888-903-0001), live chat, or a 24-hour expert reply if you need help?' },
];

const INCLUDE_ROWS = [
  ['Round-trip flights', 'Often separate', 'Included'],
  ['All hotel nights', 'Varies by tour', 'Included'],
  ['Private transfers', 'Often separate', 'Included'],
  ['Local guides', 'Usually included', 'Included, English-speaking'],
  ['Included experiences', 'Varies', 'Included'],
  ['24/7 in-trip support', 'Varies', 'Included'],
  ['Digital itinerary', 'Varies', 'Included'],
  ['Trip protection', 'Separate', 'Optional (5% or 8%)'],
];

function Field({ id, label, helper, value, onChange }) {
  return (
    <div className="compare-field">
      <label className="compare-field-label" htmlFor={id}>{label}</label>
      <div className="compare-input-wrap">
        <span className="compare-currency" aria-hidden="true">$</span>
        <input
          id={id}
          className="compare-input"
          type="text"
          inputMode="decimal"
          autoComplete="off"
          placeholder="0"
          value={value}
          onChange={e => onChange(e.target.value)}
          aria-describedby={helper ? `${id}-help` : undefined}
        />
      </div>
      {helper && <p className="compare-field-help" id={`${id}-help`}>{helper}</p>}
    </div>
  );
}

export default function CompareTool({ params, onBrowseTrips }) {
  const [values, setValues] = useState(() => {
    const initial = { tour: '', airfare: '', separate: '', maharaja: '' };
    ['tour', 'airfare', 'separate', 'maharaja'].forEach(key => {
      const value = params.get(key);
      if (value != null && value !== '') initial[key] = value;
    });
    return initial;
  });
  const [exampleOn, setExampleOn] = useState(() => params.get('example') === '1');
  const [answers, setAnswers] = useState(() => CHECKLIST.map(() => 'verify'));
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    document.title = COMPARE_TITLE;
    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('description', COMPARE_DESCRIPTION);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'compare-ldjson';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'The All-In Trip Price Compare',
      url: window.location.origin + window.location.pathname + '#/compare',
      description: COMPARE_DESCRIPTION,
      applicationCategory: 'TravelApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    });
    document.head.appendChild(script);

    return () => {
      document.title = DEFAULT_TITLE;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', 'Curated trips. Fixed dates. No guessing. Eight all-in guided trips departing October 2026 through March 2027, priced up front with flights, hotels, transfers, guides, and experiences included.');
      document.getElementById('compare-ldjson')?.remove();
    };
  }, []);

  const tour = toNumber(values.tour);
  const airfare = toNumber(values.airfare);
  const separate = toNumber(values.separate);
  const maharaja = toNumber(values.maharaja);

  const tourFlights = tour + airfare;
  const tourTotal = tourFlights + separate;
  const difference = tourTotal - maharaja;
  const tourSideEntered = values.tour.trim() !== '' || values.airfare.trim() !== '' || values.separate.trim() !== '';
  const maharajaEntered = values.maharaja.trim() !== '';
  const showDifference = tourSideEntered && maharajaEntered;

  const moneyOrDash = (has, n) => (has ? fmt(n) : '\u2014');

  const direction = difference > 0 ? 'lower' : difference < 0 ? 'higher' : 'even';
  const diffWord = direction === 'lower' ? 'Maharaja lower' : direction === 'higher' ? 'Maharaja higher' : 'Equal';

  const buildQuery = useMemo(() => {
    const params = new URLSearchParams();
    if (values.tour.trim()) params.set('tour', values.tour.trim());
    if (values.airfare.trim()) params.set('airfare', values.airfare.trim());
    if (values.separate.trim()) params.set('separate', values.separate.trim());
    if (values.maharaja.trim()) params.set('maharaja', values.maharaja.trim());
    if (exampleOn) params.set('example', '1');
    return params.toString();
  }, [values, exampleOn]);

  const shareUrl = useMemo(() => {
    const base = window.location.origin + window.location.pathname + window.location.search + '#/compare';
    return buildQuery ? `${base}?${buildQuery}` : base;
  }, [buildQuery]);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch { ok = false; }
      document.body.removeChild(ta);
      return ok;
    }
  };

  const handleCompare = () => {
    const newHash = buildQuery ? `#/compare?${buildQuery}` : '#/compare';
    if (window.location.hash !== newHash) window.location.hash = newHash;
    document.getElementById('compare-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleShare = async () => {
    await copyToClipboard(shareUrl);
    setCopied('share');
    window.setTimeout(() => setCopied(null), 4000);
  };

  const handleCopyComparison = async () => {
    const lines = [
      'All-In Trip Price Compare \u2014 Maharaja',
      'Tour operator all-in estimate: ' + fmt(tourTotal) + ' per person',
      '  Tour "from" price: ' + fmt(tour) + ' | Round-trip airfare: ' + fmt(airfare) + ' | Separately priced items: ' + fmt(separate),
      'Maharaja all-in: ' + fmt(maharaja) + ' per person',
      'Difference: ' + fmt(Math.abs(difference)) + ' per person',
      'Compare with your own numbers: ' + shareUrl,
    ];
    await copyToClipboard(lines.join('\n'));
    setCopied('copy');
    window.setTimeout(() => setCopied(null), 4000);
  };

  const toggleExample = () => {
    if (exampleOn) {
      setExampleOn(false);
      setValues({ tour: '', airfare: '', separate: '', maharaja: '' });
      return;
    }
    const galapagos = trips.find(t => t.id === 'ecuador');
    setExampleOn(true);
    setValues({ tour: '3930', airfare: '1700', separate: '250', maharaja: String(galapagos ? galapagos.basePrice : 4800) });
  };

  const updateValue = (key, value) => {
    if (exampleOn) setExampleOn(false);
    setValues(s => ({ ...s, [key]: value }));
  };

  const differenceSentence = () => {
    if (direction === 'lower') {
      return `At these numbers, Maharaja\u2019s all-in price is ${fmt(difference)} per person lower than the reconstructed tour total. Your real-world prices will vary with dates, gateway, and availability.`;
    }
    if (direction === 'higher') {
      return `At these numbers, Maharaja\u2019s all-in price is ${fmt(Math.abs(difference))} per person higher than the reconstructed tour total. Your real-world prices will vary with dates, gateway, and availability.`;
    }
    return 'At these numbers, the two all-in totals are equal. Your real-world prices will vary with dates, gateway, and availability.';
  };

  return (
    <div className="compare-page">
      <div className="compare-sticky-bar">
        <div className="compare-sticky-brand">
          <span className="compare-logo">MAHARAJA</span>
          <button className="compare-back-link" onClick={onBrowseTrips}>All trips</button>
        </div>
        <div className="compare-sticky-totals">
          <div className="sticky-total">
            <span className="sticky-label">Tour all-in estimate</span>
            <span className="sticky-value money">{moneyOrDash(tourSideEntered, tourTotal)}</span>
          </div>
          <div className="sticky-total">
            <span className="sticky-label">Maharaja all-in</span>
            <span className="sticky-value money">{moneyOrDash(maharajaEntered, maharaja)}</span>
          </div>
          <div className={`sticky-total sticky-diff ${direction}`}>
            <span className="sticky-label">Difference / person</span>
            <span className="sticky-value money">{showDifference ? fmt(Math.abs(difference)) : '\u2014'}</span>
            {showDifference && <span className="sticky-dir">{diffWord}</span>}
          </div>
        </div>
      </div>

      <main className="compare-main">
        <section className="compare-hero">
          <h1>What does an all-in guided trip actually cost?</h1>
          <p className="compare-subhead">Tour operators quote a per-person "from" price — then add flights and the extras the tour doesn’t include. Maharaja shows one all-in price up front. Compare the real number, side by side, with your own figures.</p>
          <p className="compare-status">A free planning tool. You bring the numbers; it does the honest math.</p>
        </section>

        <div
          className="compare-illustration"
          role="img"
          aria-label="Illustration comparing a quoted tour price plus airfare and extras to a single all-in Maharaja price."
        >
          <div className="illustration-row">
            <span className="illustration-name">Tour operator</span>
            <div className="segmented-bar" aria-hidden="true">
              <span className="seg seg-tour">Tour price</span>
              <span className="seg seg-airfare">+ Airfare</span>
              <span className="seg seg-extras">+ Extras</span>
            </div>
            <span className="illustration-eq">= true all-in estimate</span>
          </div>
          <div className="illustration-row">
            <span className="illustration-name">Maharaja</span>
            <div className="single-bar" aria-hidden="true"><span className="single-bar-label">All-in price</span></div>
            <span className="illustration-eq">= one number</span>
          </div>
        </div>

        <section className="compare-calculator" aria-labelledby="compare-heading">
          <h2 id="compare-heading" className="compare-section-title">Compare with your own numbers</h2>
          <div className="example-row">
            <button className="btn-example" onClick={toggleExample}>
              {exampleOn ? 'Clear example' : 'See an example'}
            </button>
            {exampleOn && (
              <p className="example-note" role="note">
                Hypothetical example numbers for a 9-day Galápagos trip — not real quotes. Replace them with your own.
              </p>
            )}
          </div>

          <div className="compare-columns">
            <div className="compare-column column-tour">
              <div className="column-heading">
                <h3>Step 1 — Tour operator option</h3>
                <p>Their quoted "from" price, plus what the touring rate doesn’t include.</p>
              </div>
              <Field
                id="tour-price"
                label="Tour operator “from” price (per person, in USD)"
                helper="Enter the per-person listed touring price, not including airfare. Example: 3,930."
                value={values.tour}
                onChange={v => updateValue('tour', v)}
              />
              <Field
                id="tour-airfare"
                label="Their round-trip airfare (per person, in USD)"
                helper="Your best current quote for the same departure month and gateway (LAX, JFK, NYC). This is what most “from” tour prices quietly leave out."
                value={values.airfare}
                onChange={v => updateValue('airfare', v)}
              />
              <Field
                id="tour-separate"
                label="Any trip-days priced separately (per person, in USD)"
                helper="Add optional excursions, some meals, or internal transport the touring rate doesn’t state as included. Skip if everything you’d want is included."
                value={values.separate}
                onChange={v => updateValue('separate', v)}
              />
              <div className="compare-subtotals" aria-live="polite">
                <div className="subtotal-line"><span>Tour price</span><span className="money">{fmt(tour)}</span></div>
                <div className="subtotal-line"><span>+ Airfare</span><span className="money">{fmt(airfare)}</span></div>
                <div className="subtotal-line subtotal-eq"><span>= Tour + flights</span><span className="money">{moneyOrDash(tour || airfare, tourFlights)}</span></div>
                <div className="subtotal-line"><span>+ Separately priced items</span><span className="money">{fmt(separate)}</span></div>
                <div className="subtotal-line subtotal-total"><span>Their true all-in estimate</span><span className="money">{moneyOrDash(tourSideEntered, tourTotal)}</span></div>
              </div>
            </div>

            <div className="compare-column column-maharaja">
              <div className="column-heading">
                <h3>Step 2 — Maharaja option</h3>
                <p>One published all-in price for the same destination and departure month.</p>
              </div>
              <Field
                id="maharaja-price"
                label="Maharaja all-in price (per person, in USD)"
                helper="The live total for the same destination and departure month — already includes round-trip flights from US gateways, all hotel nights, private transfers, included experiences, English-speaking guides, 24/7 support, and a digital itinerary."
                value={values.maharaja}
                onChange={v => updateValue('maharaja', v)}
              />
              <div className="compare-subtotals" aria-live="polite">
                <div className="subtotal-line subtotal-total"><span>Their all-in price</span><span className="money">{moneyOrDash(maharajaEntered, maharaja)}</span></div>
                <p className="subtotal-note">One number, no math needed. Upgrades, add-on experiences ($25–$450), and trip protection (5% or 8%) are extra.</p>
              </div>
            </div>
          </div>

          <div className="compare-submit">
            <button className="btn-compare" onClick={handleCompare}>Compare the real numbers</button>
          </div>
        </section>

        <section id="compare-results" className="compare-results" aria-label="Results">
          <h2 className="compare-section-title">The comparison</h2>
          <div className="results-cards">
            <div className="result-card result-tour">
              <h3>Tour operator option</h3>
              <div className="result-big money">{moneyOrDash(tourSideEntered, tourTotal)}</div>
              <p className="result-caption">per person — your reconstructed true all-in estimate</p>
              <ul className="result-breakdown">
                <li><span>Tour "from" price</span><span className="money">{fmt(tour)}</span></li>
                <li><span>Round-trip airfare</span><span className="money">{fmt(airfare)}</span></li>
                <li><span>Separately priced items</span><span className="money">{fmt(separate)}</span></li>
              </ul>
            </div>
            <div className="result-card result-maharaja">
              <h3>Maharaja option</h3>
              <div className="result-big money">{moneyOrDash(maharajaEntered, maharaja)}</div>
              <p className="result-caption">per person — the published all-in price</p>
              <ul className="result-breakdown">
                <li><span>All-in price: flights, stays, transfers, included experiences, guides, support, digital itinerary</span><span className="money">{fmt(maharaja)}</span></li>
              </ul>
            </div>
          </div>

          {showDifference ? (
            <div className="difference-line" role="status">
              <strong>The difference is {fmt(Math.abs(difference))} per person.</strong>
              <p>{differenceSentence()}</p>
            </div>
          ) : (
            <div className="difference-line difference-empty">
              <p>Enter numbers above to see the reconstructed totals and the difference.</p>
            </div>
          )}

          <div className="compare-actions">
            <button className="btn-copy" onClick={handleCopyComparison}>Copy this comparison</button>
            <button className="btn-share" onClick={handleShare}>Share this guide</button>
            {copied && (
              <p className="copy-confirm" role="status">
                {copied === 'share'
                  ? 'Share link copied to clipboard \u2014 paste it to send the math to a travel partner.'
                  : 'Comparison copied to clipboard, including a link to these exact numbers.'}
              </p>
            )}
          </div>
        </section>

        <section className="compare-includes" aria-labelledby="includes-heading">
          <h2 id="includes-heading" className="compare-section-title">What each price includes</h2>
          <div className="table-wrap">
            <table className="includes-table">
              <thead>
                <tr>
                  <th scope="col">Line</th>
                  <th scope="col">Tour operator (per your quote)</th>
                  <th scope="col">Maharaja (all-in)</th>
                </tr>
              </thead>
              <tbody>
                {INCLUDE_ROWS.map(([line, tourCell, maharajaCell]) => (
                  <tr key={line}>
                    <th scope="row">{line}</th>
                    <td className="cell-tour">{tourCell}</td>
                    <td className="cell-maharaja"><span className="cell-check">✓</span> {maharajaCell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="table-legend">Check the operator’s terms for what your specific tour quotes include — touring rates differ by departure and inclusions. This table lists what to verify, not what every tour includes.</p>
        </section>

        <section className="compare-checklist" aria-labelledby="checklist-heading">
          <h2 id="checklist-heading" className="compare-section-title">What else to weigh alongside price</h2>
          <p className="checklist-intro">Not scored — mark where each option stands for the trip you’re planning.</p>
          <ol className="checklist-list">
            {CHECKLIST.map((item, i) => (
              <li key={item.q} className="checklist-item">
                <div className="checklist-text">
                  <strong>{item.q}</strong>
                  <span>{item.detail}</span>
                </div>
                <div className="checklist-options" role="group" aria-label={item.q}>
                  {[['yes', 'Yes'], ['no', 'No'], ['verify', 'Not sure \u2014 verify']].map(([key, label]) => (
                    <button
                      key={key}
                      className={`check-chip ${answers[i] === key ? `active ${key}` : ''}`}
                      aria-pressed={answers[i] === key}
                      onClick={() => setAnswers(prev => prev.map((a, idx) => (idx === i ? key : a)))}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="compare-interpretation" aria-labelledby="interpretation-heading">
          <h2 id="interpretation-heading" className="compare-section-title">How to read the comparison</h2>
          <p>A true comparison is your reconstructed all-in number against ours — plus what each price includes and the control you want over the trip. Where one side wins on the number and the other on inclusions or flexibility, that’s a real tradeoff to weigh. The tool doesn’t decide for you.</p>
        </section>

        <section className="compare-caveats" aria-labelledby="caveats-heading">
          <h2 id="caveats-heading" className="compare-section-title">Keep in mind</h2>
          <ul className="caveats-list">
            <li>Airfare varies with dates, gateway, and booking timing. Recompute with your current quote.</li>
            <li>Operator "from" prices change and vary by departure and inclusions — verify the figure you enter against the operator’s current listing.</li>
            <li>Maharaja published prices are per person for fixed departures (October 2026–March 2027) and include flights, stays, transfers, included experiences, guides, support, and a digital itinerary; optional upgrades, add-on experiences ($25–$450), and trip protection (5% or 8%) are extra.</li>
            <li>This tool compares figures you enter and Maharaja’s published prices; it makes no claim about any tour operator’s current pricing.</li>
          </ul>
        </section>

        <section className="compare-cta">
          <h2>See the trips behind the numbers</h2>
          <p>Eight fixed-date trips, October 2026 through March 2027. Every price is all-in and shown up front.</p>
          <div className="compare-cta-actions">
            <button className="btn-browse" onClick={onBrowseTrips}>Browse all trips</button>
            <a className="btn-call" href="tel:+18889030001">Call 1-888-903-0001</a>
          </div>
        </section>
      </main>
    </div>
  );
}
