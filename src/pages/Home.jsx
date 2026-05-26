import React from "react";
import { Link } from "react-router-dom";
import Spirit from "../assets/1.webp";
import Spiritplus from "../assets/2.png";
import Spiritpro from "../assets/3.png";
import Ampra from "../assets/4.webp";
import Drifty from "../assets/5.png";
import Styler from "../assets/6.webp";
import Venice from "../assets/7.webp";
function Home() {

  const scooters = [
  {
    name: "Spirit",
    image: Spirit,
    path: "/Spirit",
  },

  {
    name: "Spirit Plus",
    image: Spiritplus,
    path: "/Spiritplus",
  },

  {
    name: "Spirit Pro",
    image: Spiritpro,
    path: "/Spiritpro",
  },

  {
    name: "Ampra",
    image: Ampra,
    path: "/Ampra",
  },

  {
    name: "Drifty",
    image: Drifty,
    path: "/Drifty",
  },

  {
    name: "Styler",
    image: Styler,
    path: "/Styler",
  },

  {
    name: "Venice",
    image: Venice,
    path: "/Venice",
  },
];

  return (
    <div className="bg-light">

      {/* Hero Section */}
      {/* Hero Section */}
<div className="position-relative">

  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-100"
    style={{
      height: "90vh",
      objectFit: "cover",
    }}
  >
    <source src="/video.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
    style={{
      backgroundColor: "rgba(0,0,0,0.5)",
    }}
  >

    {/* Content */}
    <div className="text-center text-white">

      <h1 className="display-2 fw-bold">
        Vishal E-Vehicles
      </h1>

      <p className="fs-2 mt-3">
        Ride Smart • Ride Electric • Ride Future
      </p>

      <button className="btn btn-success btn-lg px-5 mt-4 shadow">
        Explore More
      </button>

    </div>

  </div>

</div>

      {/* About Section */}
      <div className="container py-5">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <h2 className="fw-bold display-5 text-dark">
              Future of Electric Mobility
            </h2>

            <p className="fs-5 text-secondary mt-4">
              Vishal E-Vehicles provides stylish,
              eco-friendly and high-performance
              electric scooters for modern riders.
            </p>

            <p className="fs-5 text-secondary">
              Experience smart mobility with
              futuristic technology and premium design.
            </p>

            <Link to="/contact">
              <button className="btn btn-success px-4 py-2 mt-3 shadow">
                Contact Us
              </button>
            </Link>

          </div>

          <div className="col-lg-6 text-center mt-5 mt-lg-0">

            <img
              src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1200&auto=format&fit=crop"
              alt="EV Scooter"
              className="img-fluid rounded-4 shadow-lg"
            />

          </div>

        </div>

      </div>

      {/* Models Section */}
      <div className="container py-5">

  <div className="text-center mb-5">

    <h1 className="fw-bold display-4 text-dark">
      Our Models
    </h1>

    <p className="fs-5 text-secondary mt-3">
      Explore Our Premium Electric Scooters
    </p>

  </div>

  {/* Simple Models View */}
  <div className="d-flex flex-wrap justify-content-center gap-4">

    {scooters.map((item, index) => (
      <Link
        key={index}
        to={item.path}
        className="text-decoration-none text-center"
      >

        <img
          src={item.image}
          alt={item.name}
          style={{
            width: "140px",
            height: "140px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
          className="shadow"
        />

        <h5 className="mt-3 text-dark fw-bold">
          {item.name}
        </h5>

      </Link>
    ))}

  </div>

</div>

      {/* Why Choose Us */}
      <div className="py-5 bg-success text-white">

        <div className="container">

          <div className="text-center mb-5">

            <h1 className="fw-bold display-5">
              Why Choose Us
            </h1>

          </div>

          <div className="row g-4 text-center">

            <div className="col-md-3">

              <div className="p-4 bg-white text-dark rounded-4 shadow h-100">

                <h1>⚡</h1>

                <h4 className="fw-bold mt-3">
                  High Performance
                </h4>

              </div>

            </div>

            <div className="col-md-3">

              <div className="p-4 bg-white text-dark rounded-4 shadow h-100">

                <h1>🔋</h1>

                <h4 className="fw-bold mt-3">
                  Long Battery
                </h4>

              </div>

            </div>

            <div className="col-md-3">

              <div className="p-4 bg-white text-dark rounded-4 shadow h-100">

                <h1>🛵</h1>

                <h4 className="fw-bold mt-3">
                  Modern Design
                </h4>

              </div>

            </div>

            <div className="col-md-3">

              <div className="p-4 bg-white text-dark rounded-4 shadow h-100">

                <h1>🌱</h1>

                <h4 className="fw-bold mt-3">
                  Eco Friendly
                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;