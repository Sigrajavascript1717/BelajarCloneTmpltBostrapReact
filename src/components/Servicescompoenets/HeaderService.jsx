import React from "react";
import { Link } from "react-router-dom";

const HeaderService = () => {
  return (
    <>
      <ul className="breadcrumb-animation">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
        <h3 className="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">
          Our Services
        </h3>
        <ol
          className="breadcrumb justify-content-center mb-0 wow fadeInDown"
          data-wow-delay="0.3s"
        >
          <li className="breadcrumb-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="breadcrumb-item active text-primary">Service</li>
        </ol>
      </div>
    </>
  );
};

export default HeaderService;
