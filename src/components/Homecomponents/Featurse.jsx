import React from "react";
import { dataFeatures, dataTitle, featureData } from "../../data/Featurress";
const Features = () => {
  return (
    <div className="container py-5">
      {/* Section Title */}
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: "900px" }}
      >
        <h4 className="text-primary">{dataTitle.h4}</h4>
        <h1 className="display-5 mb-4">{dataTitle.h1}</h1>
        <p className="mb-0">{dataTitle.p}</p>
      </div>

      {/* Features Cards */}
      <div className="row g-4 justify-content-center text-center mb-5">
        {dataFeatures.map((fitur) => (
          <div
            className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
            data-wow-delay="0.1s"
            key={fitur.id}
          >
            <div className="text-center p-4">
              <div className="d-inline-block rounded bg-light p-4 mb-4">
                <i className={fitur.icon}></i>
              </div>
              <div className="feature-content">
                <h4>{fitur.text}</h4>
                <p className="mt-4 mb-0">{fitur.p1}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Button (Removed href) */}
        <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
          <div className="my-3">
            <button className="btn btn-primary d-inline rounded-pill px-5 py-3">
              More Features
            </button>
          </div>
        </div>
      </div>

      {/* Lower Section with Image and Text */}
      <div className="row g-5 pt-5" style={{ marginTop: "6rem" }}>
        {featureData.map((feature) => (
          <React.Fragment key={feature.id}>
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <div
                className="feature-img RotateMoveLeft h-100"
                style={{ objectFit: "cover" }}
              >
                <img
                  src={feature.imgSrc}
                  className="img-fluid w-100 h-100"
                  alt={feature.imgAlt}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
              <h4 className="text-primary">{feature.title}</h4>
              <h1 className="display-5 mb-4">{feature.heading}</h1>
              <p className="mb-4">{feature.description}</p>
              <div className="my-4">
                <button className="btn btn-primary rounded-pill py-3 px-5">
                  Read More
                </button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Features;
