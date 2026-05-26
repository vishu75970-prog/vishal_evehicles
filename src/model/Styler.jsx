import React from "react";
import styler from "../assets/6.webp";

function Styler() {
  return (
    <div className="bg-light py-5">

      <div className="container">

        <div className="row align-items-center g-5">

          {/* Image Section */}
          <div className="col-lg-6 text-center">

            <div className="card border-0 shadow-lg rounded-4 p-3">

              <img
                src={styler}
                alt="Styler Scooter"
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
              Stylish Electric Scooter
            </span>

            <h1 className="fw-bold display-3 text-dark">
              Styler
            </h1>

            <p className="mt-4 fs-5 text-secondary">
              Styler is designed for riders who
              love elegance, comfort, and modern
              electric mobility in one stylish package.
            </p>

            <p className="fs-5 text-secondary">
              With a sleek body design, smooth riding
              experience, and efficient battery
              performance, Styler brings fashion
              and technology together.
            </p>

            {/* Features */}
            <div className="mt-4">

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">⚡</span>
                <h5 className="mb-0">
                  Smooth Electric Performance
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">🔋</span>
                <h5 className="mb-0">
                  Reliable Battery Backup
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">🛵</span>
                <h5 className="mb-0">
                  Elegant Modern Design
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

export default Styler;