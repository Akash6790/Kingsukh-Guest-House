import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer-section text-white pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">
          {/* Brand / About */}
          <div className="col-lg-4 col-md-6">
            <h4 className="fw-bold mb-3">Kingsukh Guest House</h4>
            <p className="footer-text small">
              Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels,
              making every moment of your getaway truly extraordinary.
            </p>
            <a href="#book" className="btn btn-primary btn-sm rounded-1 mt-2 fw-semibold">
              BOOK NOW
            </a>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3 text-uppercase">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Browse Destinations</a></li>
              <li><a href="#">Special Offers & Packages</a></li>
              <li><a href="#">Room Types & Amenities</a></li>
              <li><a href="#">Customer Reviews & Ratings</a></li>
              <li><a href="#">Travel Tips & Guides</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3 text-uppercase">Our Services</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Concierge Assistance</a></li>
              <li><a href="#">Flexible Booking Options</a></li>
              <li><a href="#">Airport Transfers</a></li>
              <li><a href="#">Wellness & Recreation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3 text-uppercase">Contact Us</h6>
            <ul className="list-unstyled contact-info">
              <li>
                <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
              </li>
              <li>
                <i className="bi bi-envelope-fill me-2 text-primary"></i>
                <a href="mailto:kkghosh0099@gmail.com" className="text-white">
                  kkghosh0099@gmail.com
                </a>
              </li>
              <li>
                <i className="bi bi-telephone-fill me-2 text-primary"></i>
                <a href="tel:+919007062180" className="text-white">
                  +91 9007062180
                </a>
              </li>
            </ul>
            <div className="social-icons mt-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-3 border-light" />
        <div className="text-center small">
          © {new Date().getFullYear()} Kingsukh Guest House. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
