import { useState, useMemo, useCallback } from 'react';
import { trips, personalityLabels, travelStyles, tripStyles, dayByDay, tripReviews, destinationExperts, tripInclusions, awards, tripProtectionPlans } from './data/trips';
import './App.css';

function LandingPage({ onSelectTrip }) {
  const [travelers, setTravelers] = useState(2);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [showChat, setShowChat] = useState(false);

  const months = useMemo(() => [...new Set(trips.map(t => t.departureDate.split(' ')[0]))], []);
  const continents = useMemo(() => [...new Set(trips.map(t => t.continent))], []);

  const filtered = useMemo(() => {
    return trips.filter(trip => {
      if (selectedMonth && !trip.departureDate.startsWith(selectedMonth)) return false;
      if (selectedContinent && trip.continent !== selectedContinent) return false;
      if (selectedStyle && !(tripStyles[trip.id] || []).includes(selectedStyle)) return false;
      return true;
    });
  }, [selectedMonth, selectedContinent, selectedStyle]);

  return (
    <div className="landing">
      <header className="landing-header">
        <div className="landing-top">
          <div className="logo">MAHARAJA</div>
          <button className="signup-btn" onClick={() => setShowSignUp(true)}>Sign Up</button>
        </div>
        <p className="landing-subtitle">Curated trips. Fixed dates. No guessing.</p>
        <div className="awards-bar">
          {awards.map((a, i) => (
            <div key={i} className="award-badge">
              <span className="award-icon">{a.icon}</span>
              <div className="award-text">
                <strong>{a.name}</strong>
                <span>{a.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </header>

      <div className="filter-bar">
        <div className="filter-group">
          <span className="filter-label">Travelers</span>
          <div className="traveler-stepper">
            <button className="stepper-btn" onClick={() => setTravelers(t => Math.max(1, t - 1))}>−</button>
            <span className="stepper-count">{travelers}</span>
            <button className="stepper-btn" onClick={() => setTravelers(t => Math.min(12, t + 1))}>+</button>
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-label">Month</span>
          <select className="filter-select" value={selectedMonth || ''} onChange={e => setSelectedMonth(e.target.value || null)}>
            <option value="">All Months</option>
            {months.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <div className="filter-group">
          <span className="filter-label">Region</span>
          <select className="filter-select" value={selectedContinent || ''} onChange={e => setSelectedContinent(e.target.value || null)}>
            <option value="">All Regions</option>
            {continents.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="style-pills">
        <span className="style-pills-label">Travel Style:</span>
        {travelStyles.map(s => (
          <button key={s.id} className={`style-pill ${selectedStyle === s.id ? 'active' : ''}`} onClick={() => setSelectedStyle(selectedStyle === s.id ? null : s.id)}>
            {s.emoji} {s.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="no-results">No trips match your filters. Try adjusting your selection.</div>
      ) : (
        <div className="trip-grid">
          {filtered.map(trip => (
            <div key={trip.id} className="trip-card" onClick={() => onSelectTrip(trip)}>
              <div className="trip-card-image" style={{ backgroundImage: `url(${trip.heroImage})` }}>
                <div className="trip-card-overlay">
                  <span className="trip-card-flag">{trip.flag}</span>
                  <div className="trip-card-spots">{trip.spotsLeft} spots left</div>
                </div>
              </div>
              <div className="trip-card-info">
                <h2>{trip.country}</h2>
                <p className="trip-card-tagline">{trip.tagline}</p>
                <div className="trip-card-meta">
                  <span className="trip-card-price">From ${(trip.basePrice * travelers).toLocaleString()}</span>
                  {travelers > 1 && <span className="trip-card-per-person">${trip.basePrice.toLocaleString()}/pp</span>}
                  <span className="trip-card-duration">{trip.duration} days</span>
                  <span className="trip-card-date">{trip.departureDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="why-us-section">
        <h2>Why Maharaja?</h2>
        <div className="why-us-grid">
          <div className="why-us-card">
            <div className="why-us-icon">🧑‍✈️</div>
            <h3>Private Guides</h3>
            <p>Every trip includes expert local guides who know hidden gems no guidebook covers.</p>
          </div>
          <div className="why-us-card">
            <div className="why-us-icon">✏️</div>
            <h3>Fully Customizable</h3>
            <p>Every itinerary is a starting point. Add, remove, or swap anything before you book.</p>
          </div>
          <div className="why-us-card">
            <div className="why-us-icon">📞</div>
            <h3>24/7 Support</h3>
            <p>Our team is available around the clock while you travel — one call away, always.</p>
          </div>
          <div className="why-us-card">
            <div className="why-us-icon">🛡️</div>
            <h3>Trip Protection</h3>
            <p>Optional insurance plans cover cancellations, medical emergencies, and lost luggage.</p>
          </div>
        </div>
      </div>

      <div className="phone-cta-bar">
        <div className="phone-cta-content">
          <span className="phone-cta-icon">📞</span>
          <div className="phone-cta-text">
            <strong>Talk to a Destination Expert</strong>
            <span>Call us at <a href="tel:+18889030001">1-888-903-0001</a> or chat live</span>
          </div>
          <button className="btn-live-chat" onClick={() => setShowChat(true)}>Live Chat</button>
        </div>
      </div>

      {showChat && (
        <div className="chat-widget">
          <div className="chat-header">
            <span>💬 Live Chat</span>
            <button className="chat-close" onClick={() => setShowChat(false)}>×</button>
          </div>
          <div className="chat-body">
            <div className="chat-message bot">
              <strong>Maharaja</strong>
              <p>Hi! 👋 How can we help you plan your perfect trip?</p>
            </div>
          </div>
          <div className="chat-input-bar">
            <input type="text" placeholder="Type a message..." />
            <button className="chat-send">→</button>
          </div>
        </div>
      )}

      {showSignUp && (
        <div className="modal-overlay" onClick={() => setShowSignUp(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowSignUp(false)}>&times;</button>
            <h2>Create Your Account</h2>
            <p>Set up your traveler profile so booking is faster next time.</p>
            <form onSubmit={e => { e.preventDefault(); setShowSignUp(false); }}>
              <input type="text" placeholder="Full name" required />
              <input type="email" placeholder="Email address" required />
              <input type="text" placeholder="Nationality" />
              <input type="date" placeholder="Date of birth" />
              <input type="text" placeholder="Passport number" />
              <div className="passport-upload">
                <label className="upload-label">
                  <span>Upload passport photo</span>
                  <input type="file" accept="image/*" />
                </label>
              </div>
              <button type="submit" className="btn-book">Create Account</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function TripPage({ trip, onBack }) {
  const allExperiences = useMemo(() => {
    const map = {};
    trip.segments.forEach(seg => {
      seg.experiences.forEach(exp => {
        map[exp.id] = exp.defaultOn;
      });
    });
    return map;
  }, [trip]);

  const [toggled, setToggled] = useState(allExperiences);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [activePersonality, setActivePersonality] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const initialUpgrades = useMemo(() => {
    const map = {};
    trip.hotels.forEach((h, i) => { map[i] = false; });
    return map;
  }, [trip]);
  const [hotelUpgrades, setHotelUpgrades] = useState(initialUpgrades);
  const [flightUpgrade, setFlightUpgrade] = useState(false);
  const [showBookModal, setShowBookModal] = useState(false);
  const [passengers, setPassengers] = useState([{ name: '', dob: '', passport: '', nationality: '' }]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareForm, setShareForm] = useState({ friendName: '', friendEmail: '', yourName: '', message: '' });
  const [shareSent, setShareSent] = useState(false);
  const [selectedProtection, setSelectedProtection] = useState('none');
  const [showItinerary, setShowItinerary] = useState(false);

  const addPassenger = useCallback(() => {
    setPassengers(prev => [...prev, { name: '', dob: '', passport: '', nationality: '' }]);
  }, []);

  const removePassenger = useCallback((index) => {
    setPassengers(prev => prev.filter((_, i) => i !== index));
  }, []);

  const updatePassenger = useCallback((index, field, value) => {
    setPassengers(prev => prev.map((p, i) => i === index ? { ...p, [field]: value } : p));
  }, []);

  const toggleExperience = useCallback((id, included) => {
    if (included) return;
    setToggled(prev => ({ ...prev, [id]: !prev[id] }));
    setActivePersonality(null);
  }, []);

  const applyPersonality = useCallback((key) => {
    if (activePersonality === key) {
      setActivePersonality(null);
      setToggled(allExperiences);
      return;
    }
    setActivePersonality(key);
    const ids = trip.personalities[key] || [];
    const newToggled = {};
    trip.segments.forEach(seg => {
      seg.experiences.forEach(exp => {
        newToggled[exp.id] = exp.included || ids.includes(exp.id);
      });
    });
    setToggled(newToggled);
  }, [trip, allExperiences, activePersonality]);

  const stayTotal = useMemo(() => {
    return trip.hotels.reduce((sum, hotel, i) => {
      const selected = hotelUpgrades[i] ? hotel.upgrade : hotel.base;
      return sum + selected.pricePerNight * hotel.nights;
    }, 0);
  }, [trip, hotelUpgrades]);

  const addOnsTotal = useMemo(() => {
    let total = 0;
    trip.segments.forEach(seg => {
      seg.experiences.forEach(exp => {
        if (toggled[exp.id] && !exp.included && exp.price > 0) {
          total += exp.price;
        }
      });
    });
    return total;
  }, [trip, toggled]);

  const currentFlightPrice = flightUpgrade ? trip.flightBusiness.price : trip.flightPrice;
  const subtotal = currentFlightPrice + stayTotal + addOnsTotal;
  const protectionPlan = tripProtectionPlans.find(p => p.id === selectedProtection);
  const protectionCost = protectionPlan?.pricePercent ? Math.round(subtotal * protectionPlan.pricePercent / 100) : 0;
  const totalPrice = subtotal + protectionCost;

  return (
    <div className="trip-page">
      <div className="trip-hero" style={{ backgroundImage: `url(${trip.heroImage})` }}>
        <button className="back-btn" onClick={onBack}>&larr; All Trips</button>
        <div className="trip-hero-content">
          <h1>{trip.flag} {trip.country}: {trip.title}</h1>
          <p className="trip-hero-dates">{trip.departureDateFull}</p>
          <div className="trip-hero-spots">{trip.spotsLeft} spots left</div>
        </div>
      </div>

      <div className="trip-sticky-bar">
        <div className="trip-sticky-left">
          <div className="price-breakdown">
            <span className="price-label">Flight + Stay</span>
            <span className="price-value">${(currentFlightPrice + stayTotal).toLocaleString()}</span>
          </div>
          <span className="price-plus">+</span>
          <div className="price-breakdown">
            <span className="price-label">Add-ons</span>
            <span className="price-value">${addOnsTotal.toLocaleString()}</span>
          </div>
          <span className="price-equals">=</span>
          <div className="price-breakdown price-total">
            <span className="price-label">Total</span>
            <span className="price-value">${totalPrice.toLocaleString()}</span>
          </div>
        </div>
        <div className="trip-sticky-right">
          <button className="btn-custom" onClick={() => setShowCustomModal(true)}>Customize with Expert</button>
          <button className="btn-book" onClick={() => setShowBookModal(true)}>Book Now</button>
        </div>
      </div>

      <div className="trip-content">
        <div className="personality-bar">
          <span className="personality-label">Quick select:</span>
          {Object.entries(personalityLabels).map(([key, { label, emoji }]) => (
            <button
              key={key}
              className={`personality-btn ${activePersonality === key ? 'active' : ''}`}
              onClick={() => applyPersonality(key)}
            >
              {emoji} {label}
            </button>
          ))}
        </div>

        <div className="flight-selector">
          <div
            className={`flight-option ${!flightUpgrade ? 'selected' : ''}`}
            onClick={() => setFlightUpgrade(false)}
          >
            <div className={`flight-radio ${!flightUpgrade ? 'checked' : ''}`} />
            <div className="flight-option-info">
              <div className="flight-option-label">Economy</div>
              <strong>{trip.flightIncluded}</strong>
            </div>
            <div className="flight-option-price">${trip.flightPrice.toLocaleString()}</div>
          </div>
          <div
            className={`flight-option upgrade ${flightUpgrade ? 'selected' : ''}`}
            onClick={() => setFlightUpgrade(true)}
          >
            <div className={`flight-radio ${flightUpgrade ? 'checked' : ''}`} />
            <div className="flight-option-info">
              <div className="flight-option-label upgrade-label">Business</div>
              <strong>{trip.flightBusiness.label}</strong>
            </div>
            <div className="flight-option-price">
              ${trip.flightBusiness.price.toLocaleString()}
              <span className="upgrade-diff">+${(trip.flightBusiness.price - trip.flightPrice).toLocaleString()}</span>
            </div>
          </div>
        </div>

        {trip.segments.map((segment, segIdx) => {
          const hotel = trip.hotels.find(h => h.segment === segment.name);
          const hotelIndex = hotel ? trip.hotels.indexOf(hotel) : -1;
          const isUpgraded = hotel ? hotelUpgrades[hotelIndex] : false;
          const selected = hotel ? (isUpgraded ? hotel.upgrade : hotel.base) : null;
          const upgradeDiff = hotel ? (hotel.upgrade.pricePerNight - hotel.base.pricePerNight) * hotel.nights : 0;
          return (
          <div key={segment.name} className="segment">
            <div className="segment-header">
              <h2>{segment.name}</h2>
              <span className="segment-days">{segment.days}</span>
            </div>

            {hotel && (
              <div className="hotel-card">
                <div className="hotel-card-images">
                  <div
                    className={`hotel-option ${!isUpgraded ? 'selected' : ''}`}
                    onClick={() => setHotelUpgrades(prev => ({ ...prev, [hotelIndex]: false }))}
                  >
                    <div className="hotel-option-image" style={{ backgroundImage: `url(${hotel.base.image})` }} />
                    <div className="hotel-option-info">
                      <div className="hotel-option-label">Standard</div>
                      <strong>{hotel.base.name}</strong>
                      <span className="hotel-option-price">${hotel.base.pricePerNight}/night</span>
                    </div>
                    <div className={`hotel-radio ${!isUpgraded ? 'checked' : ''}`} />
                  </div>
                  <div
                    className={`hotel-option upgrade ${isUpgraded ? 'selected' : ''}`}
                    onClick={() => setHotelUpgrades(prev => ({ ...prev, [hotelIndex]: true }))}
                  >
                    <div className="hotel-option-image" style={{ backgroundImage: `url(${hotel.upgrade.image})` }} />
                    <div className="hotel-option-info">
                      <div className="hotel-option-label upgrade-label">Upgrade</div>
                      <strong>{hotel.upgrade.name}</strong>
                      <span className="hotel-option-price">${hotel.upgrade.pricePerNight}/night <span className="upgrade-diff">+${upgradeDiff.toLocaleString()}</span></span>
                    </div>
                    <div className={`hotel-radio ${isUpgraded ? 'checked' : ''}`} />
                  </div>
                </div>
                <div className="hotel-card-detail">
                  <p className="hotel-description">{selected.description}</p>
                  <div className="hotel-total">
                    ${selected.pricePerNight}/night × {hotel.nights} nights = <strong>${(selected.pricePerNight * hotel.nights).toLocaleString()}</strong>
                  </div>
                </div>
              </div>
            )}
            <div className="experiences-list">
              {segment.experiences.map(exp => (
                <div
                  key={exp.id}
                  className={`experience-card ${toggled[exp.id] ? 'active' : 'inactive'} ${exp.included ? 'included' : ''}`}
                >
                  <div className="experience-toggle" onClick={() => toggleExperience(exp.id, exp.included)}>
                    <div className={`toggle-switch ${toggled[exp.id] ? 'on' : 'off'}`}>
                      <div className="toggle-knob" />
                    </div>
                  </div>
                  <div className="experience-clickable" onClick={() => setSelectedExperience(exp)}>
                    <div className="experience-emoji">{exp.emoji}</div>
                    <div className="experience-info">
                      <div className="experience-name">
                        {exp.name}
                        {exp.popular && <span className="popular-badge">{exp.popularPercent}% add this</span>}
                      </div>
                      <p className="experience-desc">{exp.description}</p>
                      <div className="experience-card-meta">
                        {exp.duration && <span className="experience-duration">{exp.duration}</span>}
                        <span className="experience-details-link" onClick={(e) => { e.stopPropagation(); setSelectedExperience(exp); }}>View details →</span>
                      </div>
                    </div>
                  </div>
                  <div className="experience-price">
                    {exp.included ? <span className="free">Included</span> : `+$${exp.price}`}
                  </div>
                </div>
              ))}
            </div>
          </div>
          );
        })}

        {/* Day-by-Day Itinerary */}
        <div className="itinerary-section">
          <div className="itinerary-header" onClick={() => setShowItinerary(!showItinerary)}>
            <h2>📅 Day-by-Day Itinerary</h2>
            <span className="itinerary-toggle">{showItinerary ? '▲' : '▼'}</span>
          </div>
          {showItinerary && dayByDay[trip.id] && (
            <div className="itinerary-timeline">
              {dayByDay[trip.id].map((day, i) => (
                <div key={i} className="itinerary-day">
                  <div className="itinerary-day-marker">
                    <span className="itinerary-day-icon">{day.icon}</span>
                    <span className="itinerary-day-num">Day {day.day}</span>
                  </div>
                  <div className="itinerary-day-content">
                    <div className="itinerary-day-location">{day.location}</div>
                    <h4>{day.title}</h4>
                    <p>{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Trip Protection */}
        <div className="protection-section">
          <h2>🛡️ Trip Protection</h2>
          <p className="protection-subtitle">Protect your investment with optional travel insurance.</p>
          <div className="protection-options">
            {tripProtectionPlans.map(plan => (
              <div key={plan.id} className={`protection-card ${selectedProtection === plan.id ? 'selected' : ''} ${plan.recommended ? 'recommended' : ''}`} onClick={() => setSelectedProtection(plan.id)}>
                {plan.recommended && <div className="protection-badge">Recommended</div>}
                <div className="protection-radio">
                  <div className={`radio-dot ${selectedProtection === plan.id ? 'on' : ''}`} />
                </div>
                <div className="protection-info">
                  <strong>{plan.name}</strong>
                  <span className="protection-price">
                    {plan.price === 0 ? 'Free' : `+${plan.pricePercent}% ($${Math.round(subtotal * plan.pricePercent / 100)})`}
                  </span>
                  <p>{plan.description}</p>
                  {plan.features && (
                    <ul className="protection-features">
                      {plan.features.map((f, i) => <li key={i}>✓ {f}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included / Not Included */}
        <div className="inclusions-section">
          <h2>📋 What's Included</h2>
          <div className="inclusions-grid">
            <div className="inclusions-col included">
              <h3>✅ Included</h3>
              <ul>{tripInclusions.included.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </div>
            <div className="inclusions-col not-included">
              <h3>❌ Not Included</h3>
              <ul>{tripInclusions.notIncluded.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </div>
          </div>
        </div>

        {/* Destination Expert */}
        {destinationExperts[trip.id] && (
          <div className="expert-section">
            <h2>🧑‍✈️ Your Destination Expert</h2>
            <div className="expert-card">
              <img src={destinationExperts[trip.id].photo} alt={destinationExperts[trip.id].name} className="expert-photo" />
              <div className="expert-info">
                <h3>{destinationExperts[trip.id].name}</h3>
                <span className="expert-title">{destinationExperts[trip.id].title}</span>
                <p>{destinationExperts[trip.id].bio}</p>
                <div className="expert-stats">
                  <span>⭐ {destinationExperts[trip.id].rating}</span>
                  <span>✈️ {destinationExperts[trip.id].trips} trips designed</span>
                  <span>🗣️ {destinationExperts[trip.id].languages.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Traveler Reviews */}
        {tripReviews[trip.id] && (
          <div className="reviews-section">
            <h2>⭐ Traveler Reviews</h2>
            <div className="reviews-grid">
              {tripReviews[trip.id].map((review, i) => (
                <div key={i} className="review-card">
                  <div className="review-header">
                    <span className="review-avatar">{review.avatar}</span>
                    <div className="review-meta">
                      <strong>{review.name}</strong>
                      <span className="review-date">{review.date}</span>
                    </div>
                    <div className="review-stars">{'★'.repeat(review.rating)}</div>
                  </div>
                  <p className="review-text">"{review.text}"</p>
                  <span className="review-highlight">📍 {review.tripHighlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="share-cta-section">
          <div className="share-cta-icon">✉️</div>
          <h3>Share this trip with a friend</h3>
          <p>Invite someone to join you and you'll <strong>both get 5% off</strong> your trip.</p>
          <button className="btn-share-large" onClick={() => { setShareSent(false); setShareForm({ friendName: '', friendEmail: '', yourName: '', message: '' }); setShowShareModal(true); }}>Send Invite</button>
        </div>

        <div className="custom-cta-section">
          <h3>Want this trip tailored to you?</h3>
          <p>Our travel experts can customize dates, hotels, activities — anything you need.</p>
          <button className="btn-custom-large" onClick={() => setShowCustomModal(true)}>Talk to a Travel Expert</button>
        </div>
      </div>

      {selectedExperience && (
        <div className="modal-overlay" onClick={() => setSelectedExperience(null)}>
          <div className="activity-detail" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedExperience(null)}>&times;</button>
            <div className="activity-detail-image" style={{ backgroundImage: `url(${selectedExperience.image})` }}>
              <div className="activity-detail-image-overlay">
                <span className="activity-detail-emoji">{selectedExperience.emoji}</span>
              </div>
            </div>
            <div className="activity-detail-body">
              <h2>{selectedExperience.name}</h2>
              <div className="activity-detail-meta">
                {selectedExperience.duration && (
                  <span className="activity-meta-tag">
                    <span className="meta-icon">&#128339;</span> {selectedExperience.duration}
                  </span>
                )}
                {selectedExperience.timeOfDay && (
                  <span className="activity-meta-tag">
                    <span className="meta-icon">&#9728;&#65039;</span> {selectedExperience.timeOfDay}
                  </span>
                )}
                <span className="activity-meta-tag activity-meta-price">
                  {selectedExperience.included ? 'Included' : selectedExperience.price === 0 ? 'Free' : `+$${selectedExperience.price}`}
                </span>
              </div>
              <p className="activity-detail-desc">{selectedExperience.description}</p>

              {selectedExperience.whatsIncluded && (
                <div className="activity-detail-section">
                  <h3>What's included</h3>
                  <ul className="activity-included-list">
                    {selectedExperience.whatsIncluded.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedExperience.gallery && selectedExperience.gallery.length > 0 && (
                <div className="activity-detail-section">
                  <h3>Photos</h3>
                  <div className="activity-gallery">
                    {selectedExperience.gallery.map((img, i) => (
                      <div key={i} className="gallery-thumb" style={{ backgroundImage: `url(${img})` }} />
                    ))}
                  </div>
                </div>
              )}

              {selectedExperience.host && (
                <div className="activity-detail-section">
                  <h3>Your host</h3>
                  <div className="activity-host-card">
                    <img src={selectedExperience.host.photo} alt={selectedExperience.host.name} className="host-photo" />
                    <div className="host-info">
                      <strong>{selectedExperience.host.name}</strong>
                      <span className="host-role">{selectedExperience.host.role}</span>
                    </div>
                    <a href={`mailto:${selectedExperience.host.contact}`} className="host-contact-btn">Message</a>
                  </div>
                </div>
              )}

              <div className="activity-detail-actions">
                {!selectedExperience.included && (
                  <button
                    className={`btn-toggle-activity ${toggled[selectedExperience.id] ? 'added' : ''}`}
                    onClick={() => {
                      toggleExperience(selectedExperience.id, selectedExperience.included);
                    }}
                  >
                    {toggled[selectedExperience.id] ? 'Remove from trip' : 'Add to trip'}
                  </button>
                )}
                <button className="btn-close-detail" onClick={() => setSelectedExperience(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCustomModal && (
        <div className="modal-overlay" onClick={() => setShowCustomModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowCustomModal(false)}>&times;</button>
            <h2>Customize Your {trip.country} Trip</h2>
            <p>Tell us what you're looking for and a travel expert will get back to you within 24 hours.</p>
            <form onSubmit={e => { e.preventDefault(); setShowCustomModal(false); }}>
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Email address" required />
              <input type="tel" placeholder="Phone (optional)" />
              <textarea placeholder="What would you like to change or add?" rows={4} />
              <button type="submit" className="btn-book">Send Request</button>
            </form>
          </div>
        </div>
      )}

      {showShareModal && (
        <div className="modal-overlay" onClick={() => setShowShareModal(false)}>
          <div className="modal share-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowShareModal(false)}>&times;</button>
            {shareSent ? (
              <div className="share-success">
                <div className="share-success-icon">✅</div>
                <h2>Invite Sent!</h2>
                <p>We've emailed the trip details for <strong>{trip.country}: {trip.title}</strong> to <strong>{shareForm.friendEmail}</strong>.</p>
                <p className="share-discount-note">When your friend books, you'll both receive a <strong>5% discount</strong> automatically.</p>
                <button className="btn-book" onClick={() => setShowShareModal(false)}>Done</button>
              </div>
            ) : (
              <>
                <h2>Share {trip.country} Trip</h2>
                <p className="share-subtitle">Send your friend the full trip details. When they book, you <strong>both save 5%</strong> on your trip.</p>
                <form onSubmit={e => { e.preventDefault(); setShareSent(true); }}>
                  <div className="booking-section">
                    <h3>Your Friend</h3>
                    <input type="text" placeholder="Friend's name" required value={shareForm.friendName} onChange={e => setShareForm(f => ({ ...f, friendName: e.target.value }))} />
                    <input type="email" placeholder="Friend's email address" required value={shareForm.friendEmail} onChange={e => setShareForm(f => ({ ...f, friendEmail: e.target.value }))} />
                  </div>
                  <div className="booking-section">
                    <h3>From You</h3>
                    <input type="text" placeholder="Your name" required value={shareForm.yourName} onChange={e => setShareForm(f => ({ ...f, yourName: e.target.value }))} />
                    <textarea placeholder="Add a personal message (optional)" rows={3} value={shareForm.message} onChange={e => setShareForm(f => ({ ...f, message: e.target.value }))} />
                  </div>
                  <div className="share-preview">
                    <div className="share-preview-card">
                      <div className="share-preview-image" style={{ backgroundImage: `url(${trip.heroImage})` }} />
                      <div className="share-preview-info">
                        <strong>{trip.flag} {trip.country}: {trip.title}</strong>
                        <span>{trip.departureDateFull} · {trip.duration} days</span>
                        <span className="share-preview-price">From ${trip.basePrice.toLocaleString()}/person <span className="share-discount-badge">5% off with referral</span></span>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn-book">Send Invite ✉️</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {showBookModal && (
        <div className="modal-overlay" onClick={() => setShowBookModal(false)}>
          <div className="modal booking-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowBookModal(false)}>&times;</button>
            <h2>Book {trip.country}: {trip.title}</h2>
            <form onSubmit={e => { e.preventDefault(); setShowBookModal(false); }}>

              <div className="booking-section">
                <h3>Lead Passenger</h3>
                <input type="text" placeholder="Full name" required value={passengers[0].name} onChange={e => updatePassenger(0, 'name', e.target.value)} />
                <input type="email" placeholder="Email address" required />
                <input type="tel" placeholder="Phone" />
                <div className="form-row">
                  <input type="date" placeholder="Date of birth" required value={passengers[0].dob} onChange={e => updatePassenger(0, 'dob', e.target.value)} />
                  <input type="text" placeholder="Nationality" value={passengers[0].nationality} onChange={e => updatePassenger(0, 'nationality', e.target.value)} />
                </div>
                <input type="text" placeholder="Passport number" value={passengers[0].passport} onChange={e => updatePassenger(0, 'passport', e.target.value)} />
              </div>

              {passengers.slice(1).map((p, i) => (
                <div key={i + 1} className="booking-section passenger-section">
                  <div className="passenger-header">
                    <h3>Passenger {i + 2}</h3>
                    <button type="button" className="remove-passenger-btn" onClick={() => removePassenger(i + 1)}>Remove</button>
                  </div>
                  <input type="text" placeholder="Full name" required value={p.name} onChange={e => updatePassenger(i + 1, 'name', e.target.value)} />
                  <div className="form-row">
                    <input type="date" placeholder="Date of birth" required value={p.dob} onChange={e => updatePassenger(i + 1, 'dob', e.target.value)} />
                    <input type="text" placeholder="Nationality" value={p.nationality} onChange={e => updatePassenger(i + 1, 'nationality', e.target.value)} />
                  </div>
                  <input type="text" placeholder="Passport number" value={p.passport} onChange={e => updatePassenger(i + 1, 'passport', e.target.value)} />
                </div>
              ))}

              <button type="button" className="add-passenger-btn" onClick={addPassenger}>+ Add Another Passenger</button>

              <div className="booking-section">
                <h3>Payment Information</h3>
                <input type="text" placeholder="Cardholder name" required />
                <input type="text" placeholder="Card number" required />
                <div className="form-row">
                  <input type="text" placeholder="MM/YY" required />
                  <input type="text" placeholder="CVV" required />
                </div>
              </div>

              <div className="booking-summary">
                <h3>Trip Summary</h3>
                <div className="summary-line">
                  <span>Flight ({flightUpgrade ? 'Business' : 'Economy'})</span>
                  <span>${currentFlightPrice.toLocaleString()}</span>
                </div>
                <div className="summary-line">
                  <span>Accommodation</span>
                  <span>${stayTotal.toLocaleString()}</span>
                </div>
                <div className="summary-line">
                  <span>Add-ons</span>
                  <span>${addOnsTotal.toLocaleString()}</span>
                </div>
                <div className="summary-line summary-total">
                  <span>Total</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <button type="submit" className="btn-book">Confirm Booking</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [selectedTrip, setSelectedTrip] = useState(null);

  return (
    <div className="app">
      {selectedTrip ? (
        <TripPage trip={selectedTrip} onBack={() => setSelectedTrip(null)} />
      ) : (
        <LandingPage onSelectTrip={setSelectedTrip} />
      )}
    </div>
  );
}
