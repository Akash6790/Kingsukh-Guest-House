import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const Slide = () => {
  const slides = [
    require("../assests/slide1.jpg"),
    require("../assests/slide2.jpg"),
    require("../assests/slide3.jpg"),
    require("../assests/slide4.jpg"),
    require("../assests/slide5.jpg"),
    require("../assests/slide6.jpg"),
    require("../assests/slide7.jpg"),
    require("../assests/slide8.jpg"),
    require("../assests/slide9.jpg"),
    require("../assests/slide10.jpg"),
  ];

  return (
    <>
      <style>{`
        .slide-section {
          background: linear-gradient(135deg, #eceff4 0%, #bfd8e4 100%);
          padding: 80px 20px;
          color: #141213;
        }

        .slide-carousel img {
          height: 500px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }

        .carousel-caption {
          background: rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          padding: 10px 20px;
        }

        .carousel-indicators [data-bs-target] {
          background-color: #fff;
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          filter: invert(1);
        }

        @media (max-width: 768px) {
          .slide-carousel img {
            height: 300px;
          }
        }
      `}</style>

      <section className="slide-section text-center" id="gallery">
        <div className="container">
          <h2 className="fw-bold mb-2 text-uppercase ">Our Gallery</h2>
          <p className="mb-5 fs-5">
            A glimpse into our elegant spaces and unforgettable experiences.
          </p>

          <div
            id="slideCarousel"
            className="carousel slide slide-carousel"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#slideCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>

            <div className="carousel-inner">
              {slides.map((image, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`slide ${index + 1}`}
                  />
                 
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#slideCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="text-warning bg-black text-white visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#slideCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="text-warning bg-black text-white visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slide;
