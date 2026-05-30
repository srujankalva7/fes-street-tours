import { Link } from "react-router-dom";
import { tours } from "../data/tours.js";
import TourCard from "../components/TourCard.jsx";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <p className="eyebrow">Authentic private and small-group tours</p>
          <h1>
            Discover the streets of Fes with guides who bring every alley,
            market, and hidden corner to life.
          </h1>
          <p className="hero-text">
            Thoughtfully designed walking tours, market experiences, and private
            itineraries led by knowledgeable local guides in Fes, Morocco.
          </p>

          <div className="hero-actions">
            <a href="#tours" className="button dark">
              View Tours
            </a>
            <Link to="/book-tour" className="button outline">
              Plan a Private Tour
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <p>Featured Experience</p>
          <h2>Sunset Walk Through Fes</h2>
          <span>
            A golden-hour journey through the medina, artisan markets, and
            rooftop viewpoints.
          </span>
        </div>
      </section>

      <section id="tours" className="section">
        <p className="eyebrow">Popular tours</p>
        <h2>Choose your experience</h2>

        <div className="tour-grid">
          {tours.map((tour) => (
            <TourCard key={tour.title} tour={tour} />
          ))}
        </div>
      </section>

      <section className="about">
        <h2>Built for curious travelers and trusted local guides.</h2>
        <p>
          Fes Street Tours connects travelers with passionate local guides to
          experience the real rhythm of Fes — from narrow alleys to hidden
          artisan workshops and traditional markets.
        </p>
      </section>
    </main>
  );
}