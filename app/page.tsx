import { activities } from "../data/activities";
import { BookingForm } from "./booking-form";

const categories = ["Trekking", "Camping", "Water Sports", "Off-road", "Experiences"];
const regions = [
  ["North", "Himalayan Treks", "Manali, Kasol, Spiti, Ladakh, Rishikesh"],
  ["West", "Desert and Coast", "Goa, Kutch, Jaisalmer, Alibaug, Diu"],
  ["South", "Hills and Forests", "Coorg, Wayanad, Ooty, Chikmagalur, Gokarna"],
  ["East", "Cloud Trails", "Meghalaya, Sikkim, Arunachal, Darjeeling"]
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Adventure INC home">
          <span className="brand-mark ridge-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="brand-text">
            <strong>Adventure INC</strong>
            <small>Verified outdoor escapes</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#booking">Booking</a>
          <a href="#trips">Trips</a>
          <a href="#provider">Providers</a>
        </nav>
        <a className="host-link" href="#provider">Become a host</a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-media" aria-hidden="true" />
          <div className="ridge-watermark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-content">
            <div className="brand-kicker">
              <span>Field-tested trips</span>
              <span>Local providers</span>
              <span>Instant booking</span>
            </div>
            <p className="eyebrow">Adventure marketplace</p>
            <h1>Adventure INC</h1>
            <p className="hero-copy">Book sunrise treks, forest camps, river runs, off-road drives, and hosted local experiences from verified providers.</p>
            <div className="hero-proof" aria-label="Adventure INC trust highlights">
              <span><strong>4.8</strong> average provider rating</span>
              <span><strong>120+</strong> curated weekend escapes</span>
              <span><strong>24/7</strong> trip support</span>
            </div>
            <form className="search-panel">
              <label>
                <span>Search adventures</span>
                <input type="search" placeholder="Nandi Hills, rafting, camping..." />
              </label>
              <label>
                <span>Location</span>
                <select defaultValue="Bangalore">
                  <option>Bangalore</option>
                  <option>Coorg</option>
                  <option>Dandeli</option>
                  <option>Sakleshpur</option>
                </select>
              </label>
              <label>
                <span>Date</span>
                <input type="date" defaultValue="2026-06-13" />
              </label>
              <button type="button">Search</button>
            </form>
          </div>
        </section>

        <section className="brand-band" aria-label="Adventure INC brand promises">
          <span className="mini-ridge" aria-hidden="true"><i /><i /><i /></span>
          <span>Curated for Bangalore weekends</span>
          <span>Safety-first operators</span>
          <span>Real routes, real hosts</span>
          <span>Pay now or reserve</span>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Categories</p>
              <h2><span className="heading-ridge" aria-hidden="true" />Choose your terrain</h2>
            </div>
            <a href="#explore">View all</a>
          </div>
          <div className="category-row" aria-label="Adventure categories">
            {categories.map((category) => (
              <button key={category}><span className="category-icon">^</span>{category}</button>
            ))}
          </div>
        </section>

        <section className="section identity-section">
          <div>
            <p className="eyebrow">The Adventure INC difference</p>
            <h2><span className="heading-ridge" aria-hidden="true" />Built like a field guide, booked like a modern marketplace</h2>
          </div>
          <div className="identity-grid">
            <article><span className="identity-number">01</span><h3>Adventure DNA</h3><p>Every listing shows difficulty, duration, group size, route mood, and provider standards before checkout.</p></article>
            <article><span className="identity-number">02</span><h3>Host Signal</h3><p>Provider cards highlight verified operators, safety readiness, guest reviews, and local expertise.</p></article>
            <article><span className="identity-number">03</span><h3>Weekend Ready</h3><p>Collections are framed around real customer intent: sunrise plans, quick escapes, and hosted getaways.</p></article>
          </div>
        </section>

        <section className="section" id="explore">
          <div className="section-head">
            <div>
              <p className="eyebrow">Explore</p>
              <h2><span className="heading-ridge" aria-hidden="true" />Featured adventures across India</h2>
            </div>
            <div className="filter-actions">
              <button>Price</button>
              <button>Distance</button>
              <button>Date</button>
              <button>Rating</button>
            </div>
          </div>
          <div className="explore-layout">
            <aside className="map-panel">
              <p className="map-label">Live route board</p>
              <strong>India adventure routes</strong>
              <span>Himachal - Ladakh - Goa - Meghalaya - Karnataka</span>
            </aside>
            <div className="card-grid">
              {activities.map((activity) => (
                <article className="adventure-card" key={activity.title}>
                  <span className="card-ridge" aria-hidden="true" />
                  <img src={activity.image} alt={activity.alt} />
                  <div>
                    <span className="pill">{activity.category}</span>
                    <h3>{activity.title}</h3>
                    <p>{activity.location} - {activity.rating} star - {activity.difficulty}</p>
                    <strong>{activity.price} per person</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section destinations-section">
          <div className="section-head">
            <div>
              <p className="eyebrow">India collections</p>
              <h2><span className="heading-ridge" aria-hidden="true" />Plan by region</h2>
            </div>
            <a href="#booking">Start booking</a>
          </div>
          <div className="destination-grid">
            {regions.map(([label, title, copy]) => (
              <article key={label}>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section booking-section" id="booking">
          <div>
            <p className="eyebrow">Checkout</p>
            <h2><span className="heading-ridge" aria-hidden="true" />Reserve your spot</h2>
            <p>Send your booking requirements directly to the Adventure INC team. Include dates, guests, pickup needs, add-ons, and any special requests.</p>
          </div>
          <BookingForm activities={activities} />
        </section>

        <section className="section two-column" id="trips">
          <div>
            <p className="eyebrow">Trips</p>
            <h2><span className="heading-ridge" aria-hidden="true" />Your adventure desk</h2>
            <p>Guests can manage upcoming bookings, see status, reschedule, cancel, and open tickets or QR codes.</p>
          </div>
          <div className="trip-card">
            <span className="status">Confirmed</span>
            <h3>Nandi Hills Sunrise Trek</h3>
            <p>Sat, 13 Jun - 5:00 AM - 2 guests</p>
            <div className="qr">QR</div>
            <div className="trip-actions">
              <button>Reschedule</button>
              <button>View ticket</button>
            </div>
          </div>
        </section>

        <section className="section provider-section" id="provider">
          <div>
            <p className="eyebrow">Provider marketplace</p>
            <h2><span className="heading-ridge" aria-hidden="true" />Host dashboards for operators</h2>
            <p>Adventure operators can list experiences, review bookings, manage revenue, and respond to guest questions.</p>
          </div>
          <div className="dashboard-preview">
            <div><strong>12</strong><span>Active listings</span></div>
            <div><strong>48</strong><span>Upcoming bookings</span></div>
            <div><strong>Rs 2.4L</strong><span>Monthly revenue</span></div>
            <div><strong>4.8</strong><span>Average rating</span></div>
            <button>Create experience</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <span className="brand-mark small ridge-mark" aria-hidden="true"><span /><span /><span /></span>
          <strong>Adventure INC</strong>
        </div>
        <span>Book your next adventure</span>
      </footer>
    </>
  );
}
