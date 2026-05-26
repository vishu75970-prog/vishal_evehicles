import React from "react";
import drifty from "../assets/5.png";

function Drifty() {
  return (
    <div className="bg-light py-5">

      <div className="container">

        <div className="row align-items-center g-5">

          {/* Text Section */}
          <div className="col-lg-6">

            <span className="badge bg-success fs-6 px-3 py-2 mb-3">
              Smart Electric Scooter
            </span>

            <h1 className="fw-bold display-3 text-dark mb-4">
              DRIFTY
            </h1>

            <p className="fs-5 text-secondary">
              Meet the all-new Drifty electric scooter,
              designed for riders who want style,
              performance, and comfort in every ride.
            </p>

            <p className="fs-5 text-secondary">
              With powerful battery performance,
              smooth acceleration, and futuristic
              design, Drifty delivers a premium
              riding experience for daily travel.
            </p>

            {/* Features */}
            <div className="mt-4">

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">⚡</span>
                <h5 className="mb-0">
                  Fast & Powerful Performance
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">🔋</span>
                <h5 className="mb-0">
                  Long Range Battery
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">🛵</span>
                <h5 className="mb-0">
                  Stylish Modern Design
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
            <button className="btn btn-success btn-lg px-5 mt-4 shadow">
              Explore More
            </button>

          </div>

          {/* Image Section */}
          <div className="col-lg-6 text-center">

            <div className="card border-0 shadow-lg rounded-4 p-3">

              <img
                src={drifty}
                alt="Drifty Scooter"
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

export default Drifty;