import React from 'react';
import '../css/Hero.css';

function Hero() {
  return (
    <section className="hero d-flex flex-column justify-content-center align-items-center text-center text-white" id="index">
      <div className="overlay"></div>
      <div className="hero-content position-relative">
        <h1 className="hero-title display-4 fw-bold text-uppercase">Discover Comfort in Every Stay</h1>
        <p className="hero-lead fs-3 mb-4">Book your perfect room and make every journey memorable</p>
        <a href="./destination.html" className="btn btn-warning btn-lg fw-semibold px-4 py-2">
          Book Now
        </a>
      </div>
    </section>
  );
}

export default Hero;
