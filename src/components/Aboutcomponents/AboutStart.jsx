import React from "react";
import { Link } from "react-router-dom";

const AboutStart = () => {
  return (
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="RotateMoveLeft">
            <img src="img/about-1.png" className="img-fluid w-100" alt="" />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <h4 className="mb-1 text-primary">About Us</h4>
          <h1 className="display-5 mb-4">
            Get Started Easily With a Personalized Product Tour
          </h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, suscipit itaque quaerat dicta porro illum, autem,
            molestias ut animi ab aspernatur dolorum officia nam dolore.
            Voluptatibus aliquam earum labore atque.
          </p>
          <Link to={"/"} className="btn btn-primary rounded-pill py-3 px-5">
            About More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutStart;
