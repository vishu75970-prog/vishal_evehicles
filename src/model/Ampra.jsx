import React from "react";
import ampra from "../assets/4.webp";

function Ampra() {
  return (
    <div className="bg-light py-5">

      <div className="container">

        <div className="row align-items-center g-5">

          {/* Image Section */}
          <div className="col-lg-6 text-center">

            <div className="card border-0 shadow-lg rounded-4 p-3">
              <img
                src={ampra}
                alt="Ampra Scooter"
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
              Electric Scooter
            </span>

            <h1 className="fw-bold display-4 text-dark">
              Ampra
            </h1>

            <p className="mt-4 fs-5 text-secondary">
              Experience the perfect combination of
              performance, comfort, and modern electric
              mobility with the all-new Ampra E-Scooter.
            </p>

            <p className="fs-5 text-secondary">
              Designed for everyday riders who want
              stylish looks, smooth riding experience,
              and eco-friendly transportation.
            </p>

            {/* Features */}
            <div className="mt-4">

              <div className="d-flex align-items-center mb-3">
                <span className="fs-4 me-3">⚡</span>
                <h5 className="mb-0">
                  High Performance Motor
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-4 me-3">🔋</span>
                <h5 className="mb-0">
                  Long Battery Backup
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-4 me-3">🛵</span>
                <h5 className="mb-0">
                  Stylish Modern Design
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-4 me-3">🌱</span>
                <h5 className="mb-0">
                  Eco-Friendly Ride
                </h5>
              </div>

            </div>

            {/* Button */}
            <button className="btn btn-success btn-lg px-5 mt-4 shadow">
              Book   Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Ampra;