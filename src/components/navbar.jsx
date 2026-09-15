// Navbar.jsx
import React from 'react';
import '../App.css';

function Navbar() {
  const navLinks = [
    'o nosso menu',
    'o ritual',
    'clube mimo',
  ];

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__brand">
          <div className="navbar__brand-mark">🌿</div>
          <div className="navbar__brand-name">mimoo.</div>
        </div>

        <nav className="navbar__nav" aria-label="Menu principal">
          {navLinks.map((item) => (
            <a key={item} href="#" className="navbar__link">
              {item}
            </a>
          ))}
        </nav>

        <div className="navbar__spacer" aria-hidden="true" />
      </div>
    </header>
  );
}

export default Navbar;