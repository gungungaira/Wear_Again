
import "../css-part/navbar.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  
  { to: "/ buyer ", label: " BUYER " },
  { to: "/seller", label: "SELLER" },
  { to: "/chat", label: "INBOX" },
  { to: "/profile", label: "PROFILE" },
  
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__brand" onClick={close}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 7.5a2 2 0 1 0-2-2" />
            <path d="M12 7.5v1.8l8.2 5.4a1.3 1.3 0 0 1-.7 2.4H4.5a1.3 1.3 0 0 1-.7-2.4L12 9.3" />
          </svg>
          Give your clothes a second life.
        </Link>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`nav__bars ${open ? "is-open" : ""}`} />
        </button>

        <nav id="nav-menu" className={`nav__menu ${open ? "is-open" : ""}`}>
          <ul className="nav__list">
            {links.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={close}
                  className={({ isActive }) =>
                    `nav__link ${isActive ? "is-active" : ""}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/login" className="nav__cta" onClick={close}>
            Log in
          </Link>
        </nav>
      </div>
    </header>
  );
}