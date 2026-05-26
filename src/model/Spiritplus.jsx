import React from "react";
import spiritplus from "../assets/2.png";

function Spiritplus() {
  return (
    <div className="bg-light py-5">

      <div className="container">

        <div className="row align-items-center g-5">

          {/* Image Section */}
          <div className="col-lg-6 text-center">

            <div className="card border-0 shadow-lg rounded-4 p-3">

              <img
                src={spiritplus}
                alt="Spirit Plus Scooter"
                className="img-fluid rounded-4"
                style={{
                  maxHeight: "500px",
                  objectFit: "contain",
                }}
              />

            </div>

          </div>

          {/* Text Section */}
          <div className="col-lg-6">

            <span className="badge bg-success fs-6 px-3 py-2 mb-3">
              Advanced Electric Scooter
            </span>

            <h1 className="fw-bold display-3 text-dark">
              Spirit Plus
            </h1>

            <p className="mt-4 fs-5 text-secondary">
              Spirit Plus is designed for riders who
              want extra comfort, modern styling,
              and advanced electric performance in
              every journey.
            </p>

            <p className="fs-5 text-secondary">
              With improved battery efficiency,
              smooth acceleration, and premium
              design, Spirit Plus offers the perfect
              balance of technology and style.
            </p>

            {/* Features */}
            <div className="mt-4">

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">⚡</span>
                <h5 className="mb-0">
                  High Speed Performance
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">🔋</span>
                <h5 className="mb-0">
                  Extended Battery Backup
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">🛵</span>
                <h5 className="mb-0">
                  Premium Stylish Design
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">🌱</span>
                <h5 className="mb-0">
                  Eco-Friendly Smart Ride
                </h5>
              </div>

            </div>

            {/* Button */}
            <button className="btn btn-success btn-lg px-5 mt-4 shadow">
              Explore More
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Spiritplus;