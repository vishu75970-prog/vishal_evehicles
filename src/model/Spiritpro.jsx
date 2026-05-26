import React from "react";
import spiritpro from "../assets/3.png";
import { Link } from "react-router-dom";
import contact from "../pages/Contact";

function Spiritpro() {
  return (
    <div className="bg-light py-5">

      <div className="container">

        <div className="row align-items-center g-5">

          {/* Text Section */}
          <div className="col-lg-6">

            <span className="badge bg-success fs-6 px-3 py-2 mb-3">
              Premium Performance EV
            </span>

            <h1 className="fw-bold display-3 text-dark mb-4">
              Spirit Pro
            </h1>

            <p className="fs-5 text-secondary">
              Spirit Pro is built for riders who
              demand premium performance, futuristic
              styling, and advanced electric mobility.
            </p>

            <p className="fs-5 text-secondary">
              With powerful acceleration, long-range
              battery backup, and smart riding comfort,
              Spirit Pro delivers an unmatched
              electric riding experience.
            </p>

            {/* Features */}
            <div className="mt-4">

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">⚡</span>
                <h5 className="mb-0">
                  High Power Motor Performance
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">🔋</span>
                <h5 className="mb-0">
                  Ultra Long Battery Range
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">🛵</span>
                <h5 className="mb-0">
                  Sporty & Premium Design
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
            <Link to="../contact">
            <button className="btn btn-success btn-lg px-5 mt-4 shadow">
              Book Now
            </button>
            </Link>

          </div>

          {/* Image Section */}
          <div className="col-lg-6 text-center">

            <div className="card border-0 shadow-lg rounded-4 p-3">

              <img
                src={spiritpro}
                alt="Spirit Pro Scooter"
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

export default Spiritpro;