import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Services.css"; // ✅ custom style here

function Services() {
  const services = [
    {
      icon: "bi-house-door",
      title: "Luxury Rooms",
      description:
        "Spacious, well-furnished rooms with modern amenities for your perfect stay.",
    },
    {
      icon: "bi-wifi",
      title: "Free Wi-Fi",
      description:
        "High-speed internet access throughout the hotel for work or leisure.",
    },
    {
      icon: "bi-cup-straw",
      title: "Restaurant & Room Service",
      description:
        "Delicious meals served at our restaurant or in the comfort of your room.",
    },
    {
      icon: "bi-water",
      title: "Swimming Pool",
      description:
        "Relax and refresh yourself in our clean and well-maintained pool area.",
    },
    {
      icon: "bi-clock-history",
      title: "24/7 Reception",
      description:
        "Our friendly staff is available around the clock to assist you.",
    },
    {
      icon: "bi-map",
      title: "Tour Assistance",
      description:
        "Get help planning and booking local tours to explore the area.",
    },
  ];

  return (
    <section
      className="services-section text-center text-white py-5"
      id="services"
    >
      <div className="overlay"></div>
      <div className="container position-relative">
        <h2 className="fw-bold mb-3 text-uppercase">Our Services</h2>
        <p className="mb-5 fs-5 text-light">
          Experience comfort, convenience, and hospitality with our exclusive hotel services designed to make your stay memorable.
        </p>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="service-card p-4 shadow-sm h-100 rounded-4 bg-white text-dark">
                <div className="icon-wrapper mx-auto mb-3">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="#contact" className="btn btn-warning btn-lg mt-4 px-4 fw-semibold shadow-sm">
          Book Your Stay
        </a>
      </div>
    </section>
  );
}

export default Services;
