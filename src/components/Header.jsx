import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        ⌖ Fes Street Tours
      </Link>

      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/book-tour">Book Your Tour</NavLink>
      </nav>
    </header>
  );
}