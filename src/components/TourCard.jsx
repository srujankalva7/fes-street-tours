import { Link } from "react-router-dom";

export default function TourCard({ tour }) {
  return (
    <div className="card">
      <div className="icon">⌖</div>
      <h3>{tour.title}</h3>
      <p className="muted">
        {tour.duration} · {tour.price}
      </p>
      <p>{tour.description}</p>
      <Link className="button outline" to="/book-tour">
        Book This Tour
      </Link>
    </div>
  );
}