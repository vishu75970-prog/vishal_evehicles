import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow sticky-top py-3"
      style={{ backgroundColor: "#07c71f" }}
    >
      <div className="container">

        {/* Logo + Brand */}
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
        >
          <img
            src={logo}
            alt="Logo"
            className="img-fluid rounded-circle bg-white p-1 shadow"
            style={{
              width: "70px",
              height: "70px",
              objectFit: "contain",
            }}
          />

          <span
            className="ms-3 fw-bold"
            style={{
              fontSize: "28px",
              color: "white",
            }}
          >
            Vishal E-Vehicles
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarContent"
        >
          <ul className="navbar-nav align-items-lg-center gap-lg-2">

            {/* Home */}
            <li className="nav-item">
              <Link
                className="nav-link text-white fs-5 fw-semibold px-3"
                to="/"
              >
                Home
              </Link>
            </li>

            {/* Models Dropdown */}
            <li className="nav-item dropdown">

              <a
                className="nav-link dropdown-toggle text-white fs-5 fw-semibold px-3"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
              >
                Models
              </a>

              <ul className="dropdown-menu border-0 shadow-lg rounded-4 p-3">

                <li>
                  <Link
                    className="dropdown-item rounded-3 py-2 fw-semibold"
                    to="/Spirit"
                  >
                    ⚡ Spirit
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item rounded-3 py-2 fw-semibold"
                    to="/Spiritplus"
                  >
                    🔋 Spirit Plus
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item rounded-3 py-2 fw-semibold"
                    to="/Spiritpro"
                  >
                    🛵 Spirit Pro
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item rounded-3 py-2 fw-semibold"
                    to="/Ampra"
                  >
                    ⚙️ Ampra
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item rounded-3 py-2 fw-semibold"
                    to="/Drifty"
                  >
                    🌟 Drifty
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item rounded-3 py-2 fw-semibold"
                    to="/Styler"
                  >
                    ✨ Styler
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item rounded-3 py-2 fw-semibold"
                    to="/Venice"
                  >
                    🚀 Venice
                  </Link>
                </li>

              </ul>

            </li>

            {/* About */}
            <li className="nav-item">
              <Link
                className="nav-link text-white fs-5 fw-semibold px-3"
                to="/about"
              >
                About
              </Link>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <Link
                className="nav-link text-white fs-5 fw-semibold px-3"
                to="/contact"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Header;