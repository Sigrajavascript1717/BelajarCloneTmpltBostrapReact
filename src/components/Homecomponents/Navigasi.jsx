import React from "react";
import { Link } from "react-router-dom";

const Navigasi = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <Link to={"/"} className="navbar-brand p-0">
        <h1 className="display-6 text-primary m-0">
          <i className="fas fa-envelope me-3"></i>Contoh
        </h1>
        {/* <img src="img/logo.png" alt="Logo" /> */}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link href="index.html" className="nav-item nav-link active" to={"/"}>
            Home
          </Link>
          <Link href="about.html" className="nav-item nav-link" to={"/about"}>
            About
          </Link>
          <Link to={"/services"} className="nav-item nav-link">
            Services
          </Link>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu m-0">
              <Link to={"/features"} className="dropdown-item">
                Features
              </Link>
              {/* <a href="pricing.html" className="dropdown-item">
                Pricing
              </a> */}
              <Link to={"/blog"} className="dropdown-item">
                Blog
              </Link>
              <Link to={"/testimonial"} className="dropdown-item">
                Testimonial
              </Link>
            </div>
          </div>
          <Link to={"/contact"} className="nav-item nav-link">
            Contact Us
          </Link>
        </div>
        <a
          href="#"
          className="btn btn-light border border-primary rounded-pill text-primary py-2 px-4 me-4"
        >
          Log In
        </a>
        <a
          href="#"
          className="btn btn-primary rounded-pill text-white py-2 px-4"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navigasi;
