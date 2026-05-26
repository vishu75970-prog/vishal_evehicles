import React from "react";

function About() {
  return (
    <div className="bg-light py-5">

      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-4 text-success">
            About Vishal E-Vehicles
          </h1>

          <p className="fs-5 text-secondary mt-3">
            Driving the Future with Smart Electric Mobility..
          </p>
        </div>

        {/* Main Card */}
        <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5">

          <div className="row align-items-center">

            {/* Left Side */}
            <div className="col-lg-6 mb-4 mb-lg-0">

              <h2 className="fw-bold text-dark mb-4">
                Who We Are
              </h2>

              <p className="text-secondary fs-5">
                Vishal E-Vehicles is dedicated to providing
                stylish, eco-friendly, and high-performance
                electric scooters for modern riders.
              </p>

              <p className="text-secondary fs-5">
                Our mission is to make electric mobility
                affordable, reliable, and accessible for everyone.
              </p>

              <p className="text-secondary fs-5">
                We focus on innovation, comfort, battery
                performance, and premium design to deliver the
                best riding experience.
              </p>

            </div>

            {/* Right Side */}
            <div className="col-lg-6">

              <div className="bg-success text-white rounded-4 p-4 shadow">

                <h3 className="fw-bold mb-4 text-center">
                  Why Choose Us ?
                </h3>

                <div className="mb-3 fs-5">
                  ⚡ High Performance EV Scooters
                </div>

                <div className="mb-3 fs-5">
                  🔋 Long Battery Backup
                </div>

                <div className="mb-3 fs-5">
                  🌱 Eco-Friendly Technology
                </div>

                <div className="mb-3 fs-5">
                  🛵 Stylish & Modern Designs
                </div>

                <div className="fs-5">
                  💯 Trusted Customer Support
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="row mt-5 g-4">

          <div className="col-md-4">
            <div className="card border-0 shadow rounded-4 text-center p-4 h-100">
              <h2 className="fw-bold text-success">500+</h2>
              <p className="text-secondary fs-5">
                Happy Customers
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow rounded-4 text-center p-4 h-100">
              <h2 className="fw-bold text-success">7+</h2>
              <p className="text-secondary fs-5">
                EV Models
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow rounded-4 text-center p-4 h-100">
              <h2 className="fw-bold text-success">24/7</h2>
              <p className="text-secondary fs-5">
                Customer Support
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;