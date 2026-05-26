import React from "react";
import venice from "../assets/7.webp";

function Venice() {
  return (
    <div className="bg-light py-5">

      <div className="container">

        <div className="row align-items-center g-5">

          {/* Text Section */}
          <div className="col-lg-6">

            <span className="badge bg-success fs-6 px-3 py-2 mb-3">
              Luxury Electric Scooter
            </span>

            <h1 className="fw-bold display-3 text-dark mb-4">
              VENICE
            </h1>

            <p className="fs-5 text-secondary">
              Venice is a premium electric scooter
              crafted for riders who want luxury,
              comfort, and high-end performance
              in every journey.
            </p>

            <p className="fs-5 text-secondary">
              Featuring a modern aerodynamic design,
              smooth riding experience, and advanced
              electric technology, Venice delivers
              style with power.
            </p>

            {/* Features */}
            <div className="mt-4">

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">⚡</span>
                <h5 className="mb-0">
                  Powerful Electric Drive
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">🔋</span>
                <h5 className="mb-0">
                  Long Lasting Battery Range
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">🛵</span>
                <h5 className="mb-0">
                  Premium Luxury Design
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">🌱</span>
                <h5 className="mb-0">
                  Smart Eco-Friendly Technology
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
                src={venice}
                alt="Venice Scooter"
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

export default Venice;