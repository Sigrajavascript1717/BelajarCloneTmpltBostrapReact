import React from "react";
import { DataAbout } from "../../data/AboutsData";
const AboutHome = () => {
  return (
    <>
      {DataAbout.map((data, index) => {
        return (
          <div className="container py-5" key={index}>
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="RotateMoveLeft">
                  <img src={data.img} className="img-fluid w-100" alt="" />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h4 className="mb-1 text-primary">{data.h4}</h4>
                <h1 className="display-5 mb-4">{data.h1}</h1>
                <p className="mb-4">{data.p}</p>
                <a href="#" className="btn btn-primary rounded-pill py-3 px-5">
                  {data.tombol}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AboutHome;
