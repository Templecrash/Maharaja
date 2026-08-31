import { useEffect } from 'react';

function GuideBlock({ block, onSelectTrip }) {
  switch (block.type) {
    case 'heading':
      return <h2 className="guide-heading">{block.text}</h2>;
    case 'subheading':
      return <h3 className="guide-subheading">{block.text}</h3>;
    case 'paragraph':
      return <p className="guide-paragraph">{block.text}</p>;
    case 'bullets':
      return (
        <ul className="guide-list">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote className="guide-quote">
          <p>{block.text}</p>
          <cite>{block.source}</cite>
        </blockquote>
      );
    case 'table':
      return (
        <div className="guide-table-wrap">
          <table className="guide-table">
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'decision':
      return (
        <div className="guide-decision">
          <div className="guide-decision-col">
            <h4>{block.cruise.title}</h4>
            <ul className="guide-list">
              {block.cruise.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="guide-decision-col">
            <h4>{block.land.title}</h4>
            <ul className="guide-list">
              {block.land.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    case 'cta':
      return (
        <div className="guide-cta">
          <p>{block.note}</p>
          <button className="btn-book" onClick={onSelectTrip}> {block.buttonLabel} →</button>
        </div>
      );
    case 'footnote':
      return <p className="guide-footnote">{block.text}</p>;
    default:
      return null;
  }
}

export default function GuidePage({ guide, trip, onBack, onSelectTrip }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${guide.title} — Maharaja`;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-structured-data';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: guide.title,
      description: guide.description,
      articleSection: `${guide.destinationLabel} Travel Guide`,
      publisher: { '@type': 'Organization', name: 'Maharaja' },
      about: { '@type': 'Place', name: 'Galápagos Islands' },
    });
    document.head.appendChild(script);
    return () => {
      document.title = previousTitle;
      document.head.removeChild(script);
    };
  }, [guide]);

  return (
    <div className="guide-page">
      <header className="guide-header">
        <div className="landing-top">
          <div className="logo">MAHARAJA</div>
          <button className="back-btn" onClick={onBack}>&larr; All Trips</button>
        </div>
      </header>

      <div className="guide-hero">
        <span className="guide-kicker">{guide.kicker}</span>
        <h1>{guide.title}</h1>
        <p className="guide-description">{guide.description}</p>
      </div>

      <div className="guide-content">
        {guide.blocks.map((block, i) => (
          <GuideBlock key={i} block={block} onSelectTrip={() => onSelectTrip(trip)} />
        ))}

        <div className="guide-related">
          <h3>Explore the Galápagos with Maharaja</h3>
          <div className="guide-related-card" onClick={() => onSelectTrip(trip)}>
            <div className="guide-related-image" style={{ backgroundImage: `url(${trip.heroImage})` }} />
            <div className="guide-related-info">
              <strong>{trip.flag} {trip.country}: {trip.title}</strong>
              <span>{trip.departureDateFull} · {trip.duration} days</span>
              <span className="guide-related-price">From ${trip.basePrice.toLocaleString()}/person</span>
            </div>
            <button className="btn-custom">View Trip</button>
          </div>
        </div>
      </div>
    </div>
  );
}
