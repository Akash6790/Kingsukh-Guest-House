import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Rooms() {
  // 🏨 Room data array
  const rooms = [
    {
      id: 1,
      name: "Cozy Haven Room",
      desc: "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
      price: "₹1000/night",
      img: "/img/room1.png",
    },
    {
      id: 2,
      name: "Spacious Serenity Suite",
      desc: "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
      price: "₹1500/night",
      img: "/img/room2.png",
    },
    {
      id: 3,
      name: "Luxury Mountain View",
      desc: "Wake up to breathtaking mountain views and elegant interiors in our Luxury Mountain View Room.",
      price: "₹1800/night",
      img: "/img/room3.png",
    },
    {
      id: 4,
      name: "Garden Retreat Room",
      desc: "Enjoy peace surrounded by lush greenery in our tranquil Garden Retreat Room.",
      price: "₹1200/night",
      img: "/img/room4.png",
    },
    {
      id: 5,
      name: "Family Comfort Suite",
      desc: "Spacious and cozy, perfect for families seeking comfort and togetherness.",
      price: "₹2000/night",
      img: "/img/room5.png",
    },
    {
      id: 6,
      name: "Premium Deluxe Room",
      desc: "Experience elegance and relaxation in our Premium Deluxe Room with modern amenities.",
      price: "₹2500/night",
      img: "/img/room6.png",
    },
  ];

  return (
    <section className="py-5 bg-light" id="rooms">
      <div className="container text-center">
        <div style={{ backgroundColor: "rgba(13, 110, 253, 0.1)",  borderRadius: "10px" }}>
            <h1 className="mb-4 fw-bold text-uppercase text-primary" >
          Our Living Rooms
        </h1>
        <p className="text-muted mb-5 fs-5 pb-3" >
          The Most Memorable Rest Time Starts Here.
        </p>
        </div>
        

        <div className="row g-4">
          {rooms.map((room) => (
            <div key={room.id} className="col-md-6 col-lg-4">
              <div className="card shadow-lg border-0 h-100">
                <img
                  src={room.img}
                  className="card-img-top"
                  alt={room.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">{room.name}</h5>
                  <p className="card-text text-muted">{room.desc}</p>
                  <p className="fw-semibold text-primary fs-5">
                    Starting from {room.price}
                  </p>
                  <a
                    href="https://wa.link/at5ion"
                    className="btn btn-warning fw-semibold px-4"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
