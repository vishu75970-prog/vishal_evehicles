import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">

      <div className="container">

        <div className="row g-4">

          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <h2 className="fw-bold text-success mb-3">
              Vishal E-Vehicles
            </h2>

            <p className="text-light fs-6">
              Premium electric scooters with modern design,
              high performance, and eco-friendly technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6">
            <h4 className="fw-bold mb-3">
              Quick Links
            </h4>

            <ul className="list-unstyled">

              <li className="mb-2">
                <Link
                  to="/"
                  className="text-decoration-none text-light"
                >
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-decoration-none text-light"
                >
                  About
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-decoration-none text-light"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-12">
            <h4 className="fw-bold mb-3">
              Contact Us
            </h4>

            <p className="mb-2">
              📍 Rajasthan, India
            </p>

            <p className="mb-2">
              📞 +91 94615-61932
              🟢 +91 76150-39000
            </p>

            <p className="mb-2">
              ✉️ info@vishalevehicles@gmail.com
            </p>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-light my-4" />

        {/* Bottom */}
        <div className="text-center">
          <p className="mb-0 fs-6">
            © 2026 Vishal E-Vehicles | All Rights Reserved
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;