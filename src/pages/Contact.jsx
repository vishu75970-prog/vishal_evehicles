import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wvnrkgp",
        "template_iv2ag4f",
        form.current,
        "3rSZaJJK86-Z359nn"
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
        },
        () => {
          alert("Failed to Send Message!");
        }
      );

    e.target.reset();
  };

  return (
    <div className="bg-light py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-4 text-success">
            Contact Us
          </h1>

          <p className="fs-5 text-secondary mt-3">
            We would love to hear from you
          </p>
        </div>

        <div className="row g-5 align-items-center">

          {/* Left Side */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-lg rounded-4 p-4 h-100">

              <h2 className="fw-bold mb-4 text-dark">
                Get In Touch
              </h2>

              {/* Address */}
              <div className="mb-4">
                <h5 className="fw-bold">
                  📍 Address
                </h5>

                <p className="text-secondary fs-5">
                  Rajasthan, India
                </p>
              </div>

              {/* WhatsApp */}
              <div className="mb-4">
                <h5 className="fw-bold">
                  📞 WhatsApp
                </h5>

                <a
                  href="https://wa.me/919461561932"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-success fs-5 fw-semibold"
                >
                  +91 94615-61932
                </a>
              </div>

              {/* Email */}
              <div className="mb-4">
                <h5 className="fw-bold">
                  ✉️ Email
                </h5>

                <a
                  href="mailto:vishalevehicles@gmail.com"
                  className="text-decoration-none text-secondary fs-5"
                >
                  vishalevehicles@gmail.com
                </a>
              </div>

            </div>
          </div>

          {/* Right Side Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-lg rounded-4 p-4">

              <h2 className="fw-bold mb-4 text-dark">
                Send Message
              </h2>

              <form ref={form} onSubmit={sendEmail}>

                {/* Name */}
                <div className="mb-3">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control form-control-lg"
                    placeholder="Your Name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control form-control-lg"
                    placeholder="Your Email"
                    required
                  />
                </div>

                {/* Contact Number */}
                <div className="mb-3">
                  <input
                    type="tel"
                    name="user_phone"
                    className="form-control form-control-lg"
                    placeholder="Your Contact Number"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    required
                  />
                </div>

                {/* Subject Dropdown */}
                <div className="mb-3">
                  <select
                    name="subject"
                    className="form-select form-select-lg"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Service
                    </option>

                    <option value="New Booking">
                      New Booking
                    </option>

                    <option value="Test Drive">
                      Test Drive
                    </option>

                    <option value="Service Request">
                      Service Request
                    </option>

                    <option value="Battery Inquiry">
                      Battery Inquiry
                    </option>

                    <option value="Finance Inquiry">
                      Finance Inquiry
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control form-control-lg"
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="btn btn-success btn-lg px-5 shadow"
                >
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;