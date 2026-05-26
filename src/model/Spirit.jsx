import React from "react";
import spirit from "../assets/1.webp";
import contact from "../pages/Contact";
import { Link } from "react-router-dom";

function Spirit() {
  return (
    <div className="bg-light py-5">

      <div className="container">

        <div className="row align-items-center g-5">

          {/* Left Side Text */}
          <div className="col-lg-6">

            <span className="badge bg-success fs-6 px-3 py-2 mb-3">
              Premium Electric Scooter
            </span>

            <h1 className="fw-bold display-3 text-dark">
              Spirit
            </h1>

            <p className="mt-4 fs-5 text-secondary">
              Introducing Spirit — a smart and stylish
              electric scooter designed for modern city
              riders who want comfort, performance,
              and eco-friendly mobility.
            </p>

            <p className="fs-5 text-secondary">
              With advanced battery technology,
              smooth riding experience, and a bold
              modern design, Spirit is built for
              everyday travel and long-lasting performance.
            </p>

            {/* Features */}
            <div className="mt-4">

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">⚡</span>
                <h5 className="mb-0">
                  Powerful Electric Performance
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">🔋</span>
                <h5 className="mb-0">
                  Long Battery Life
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">🛵</span>
                <h5 className="mb-0">
                  Stylish & Comfortable Ride
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">🌱</span>
                <h5 className="mb-0">
                  Eco-Friendly Technology
                </h5>
              </div>

            </div>

            {/* Button */}
            <Link to="../contact">
            <button className="btn btn-success btn-lg px-5 mt-4 shadow">
              Book Now
            </button>
            </Link>

          </div>

          {/* Right Side Image */}
          <div className="col-lg-6 text-center">

            <div className="card border-0 shadow-lg rounded-4 p-3">

              <img
                src={spirit}
                alt="Spirit Scooter"
                className="img-fluid rounded-4"
                style={{
                  maxHeight: "500px",
                  objectFit: "contain",
                }}
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Spirit;