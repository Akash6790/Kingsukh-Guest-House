import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Contact.css";

function Contact() {
  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">
        <h2 className="fw-bold text-center mb-4 text-uppercase">Contact Us</h2>
        <p className="text-center text-muted mb-5 fs-5">
          We’d love to hear from you. Get in touch for bookings, questions, or special requests.
        </p>

        <div
          className="row g-0 shadow rounded overflow-hidden mb-5"
          style={{
            background: "linear-gradient(135deg, #eceff4 0%, #bfd8e4 100%)",
          }}>
          {/* Left Side - Contact Info */}
          <div className="col-lg-5">
            <div className="contact-info p-4 rounded shadow-sm h-100">
              <h5 className="fw-bold mb-3">Hotel Information</h5>
              <p><i className="bi bi-geo-alt-fill text-primary me-2"></i> 123 Dream Street, Paradise City</p>
              <p><i className="bi bi-telephone-fill text-primary me-2"></i> +91 98765 43210</p>
              <p><i className="bi bi-envelope-fill text-primary me-2"></i> info@yourhotel.com</p>
              <p><i className="bi bi-clock-fill text-primary me-2"></i> Open 24/7</p>
              <div className="mt-3">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>

              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form p-4 rounded shadow-sm bg-light">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Write your message..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary px-4 py-2 fw-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
