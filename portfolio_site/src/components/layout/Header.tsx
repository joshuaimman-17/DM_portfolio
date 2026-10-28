import Link from "next/link";
import type { CSSProperties } from "react";
import "./fullscreen-menu.css";

const links = [
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fsm">
      <input
        type="checkbox"
        id="fsm-toggle"
        className="fsm-check"
        aria-label="Toggle menu"
      />

      {/* top bar */}
      <div className="fsm-bar">
        <Link href="/" className="fsm-logo">
          Your<span>Name</span>
        </Link>

        <label htmlFor="fsm-toggle" className="fsm-btn">
          <span className="fsm-btn-text">
            <span>Menu</span>
            <span>Close</span>
          </span>
          <svg className="fsm-btn-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M7.33 16V0h1.34v16z" fill="currentColor" />
            <path d="M16 8.67H0V7.33h16z" fill="currentColor" />
          </svg>
        </label>
      </div>

      {/* click outside to close */}
      <label htmlFor="fsm-toggle" className="fsm-overlay" aria-hidden="true" />

      {/* fullscreen panel */}
      <nav className="fsm-panel" aria-label="Main">
        <div className="fsm-layer l1" />
        <div className="fsm-layer l2" />
        <div className="fsm-layer l3" />

        <div className="fsm-shapes" aria-hidden="true">
          <svg className="fsm-shape s1" viewBox="0 0 400 400" fill="none">
            <circle cx="80" cy="120" r="40" fill="rgba(99,102,241,0.15)" />
            <circle cx="300" cy="80" r="60" fill="rgba(139,92,246,0.12)" />
            <circle cx="200" cy="300" r="80" fill="rgba(236,72,153,0.1)" />
            <circle cx="350" cy="280" r="30" fill="rgba(99,102,241,0.15)" />
          </svg>
          <svg className="fsm-shape s2" viewBox="0 0 400 400" fill="none">
            <path d="M0 200 Q100 100, 200 200 T 400 200" stroke="rgba(99,102,241,0.2)" strokeWidth="60" />
            <path d="M0 280 Q100 180, 200 280 T 400 280" stroke="rgba(139,92,246,0.15)" strokeWidth="40" />
          </svg>
          <svg className="fsm-shape s3" viewBox="0 0 400 400" fill="none">
            {[50, 150, 250, 350].map((x) => (
              <circle key={`a${x}`} cx={x} cy="50" r="8" fill="rgba(99,102,241,0.3)" />
            ))}
            {[100, 200, 300].map((x) => (
              <circle key={`b${x}`} cx={x} cy="150" r="12" fill="rgba(139,92,246,0.25)" />
            ))}
            {[50, 150, 250, 350].map((x) => (
              <circle key={`c${x}`} cx={x} cy="250" r="10" fill="rgba(236,72,153,0.3)" />
            ))}
            {[100, 200, 300].map((x) => (
              <circle key={`d${x}`} cx={x} cy="350" r="6" fill="rgba(99,102,241,0.3)" />
            ))}
          </svg>
          <svg className="fsm-shape s4" viewBox="0 0 400 400" fill="none">
            <path d="M100 100 Q150 50, 200 100 Q250 150, 200 200 Q150 250, 100 200 Q50 150, 100 100" fill="rgba(99,102,241,0.12)" />
            <path d="M250 200 Q300 150, 350 200 Q400 250, 350 300 Q300 350, 250 300 Q200 250, 250 200" fill="rgba(236,72,153,0.1)" />
          </svg>
          <svg className="fsm-shape s5" viewBox="0 0 400 400" fill="none">
            <line x1="0" y1="100" x2="300" y2="400" stroke="rgba(99,102,241,0.15)" strokeWidth="30" />
            <line x1="100" y1="0" x2="400" y2="300" stroke="rgba(139,92,246,0.12)" strokeWidth="25" />
            <line x1="200" y1="0" x2="400" y2="200" stroke="rgba(236,72,153,0.1)" strokeWidth="20" />
          </svg>
        </div>

        <ul className="fsm-list">
          {links.map(({ href, label }, i) => (
            <li
              key={href}
              className="fsm-item"
              style={{ "--i": i } as CSSProperties}
            >
              <Link href={href} className="fsm-link">
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}