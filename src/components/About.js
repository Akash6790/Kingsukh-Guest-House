import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <section className="py-5 bg-light" id="about">
      <div className="container">
        <h1 className="text-center mb-5 fw-bold text-uppercase text-primary">
          About Us  
        </h1>
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
            <h3 className="fw-semibold mb-3 text-dark">
              The Best Holidays Start Here!
            </h3>
            <p className="text-dark fs-5">
              Embark on a tranquil journey at our{" "}
              <strong>Kingsukh Guest House</strong>, enveloped by the scenic
              allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi
              Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating
              Panchat Dam.
            </p>
            <p className="text-dark fs-5">
              Revel in the embrace of comfort, relish delightful meals, and
              unwind in our verdant garden oasis. Your ideal retreat beckons,
              promising a harmonious blend of nature's beauty and heartfelt
              hospitality.
            </p>
          
            <div className="mt-4">
              <p className="mb-1 fw-semibold text-dark">
                📍 Address:{" "}
                <span className="text-dark">
                  Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
                  723156
                </span>
              </p>
              <p className="fw-semibold text-dark">
                📞 Contact us:{" "}
                <a href="tel:+919007062180" className="text-decoration-none text-primary">
                  +91 9007062180
                </a>
              </p>
            </div>
            <a href="#contact" className="btn btn-warning btn-lg fw-semibold px-4 mt-3">
              Book Now
            </a>
          </div>

      
          <div className="col-lg-5 col-md-12 text-center">
            <img
              src="/img/about.png"
              alt="Kingsukh Guest House"
              className="img-fluid rounded shadow-lg"
              style={{ height: "500px", width: "500px", objectFit: "cover", paddingLeft:"5px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
