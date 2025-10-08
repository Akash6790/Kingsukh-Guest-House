import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-primary fixed-top transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out',
        backgroundColor: '#3cbeee',
      }}
    >
      <div className="container-fluid">
        <img
          src="./img/logo.jpeg"
          alt="Logo"
          width="55"
          height="53"
          style={{
            borderRadius: '45px',
            width: '70px',
            height: '70px',
          }}
        />
        <a
          className="navbar-brand text-white ms-3"
          href="#home"
          style={{ fontSize: '25px', fontWeight: '400' }}
        >
          Akash_Guest_House
        </a>

        {/* ✅ FIXED here: added #navbarNav */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav ms-auto me-3 text-center"
            style={{ fontSize: '18px', gap: '10px' }}
          >
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#rooms">
                Rooms
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <a href="https://wa.link/at5ion" className="text-center">
            <button
              type="button"
              className="btn btn-warning me-3 ms-3"
              style={{ fontWeight: '500' }}
            >
              Book Now
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
