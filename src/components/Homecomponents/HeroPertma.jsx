import React from "react";
import { DataHero } from "../../data/HeroData";
const HeroPertma = () => {
  return (
    <>
      {DataHero.map((data, index) => {
        return (
          <div className="hero-header overflow-hidden px-5" key={index}>
            <div className="rotate-img">
              <img src={data.foto} className="img-fluid w-100" alt="" />
              <div className="rotate-sty-2"></div>
            </div>
            <div className="row gy-5 align-items-center">
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                <h1
                  className="display-4 text-dark mb-4 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  {data.h1}
                </h1>
                <p className="fs-4 mb-4 wow fadeInUp" data-wow-delay="0.5s">
                  {data.p}
                </p>
                <a
                  href="#"
                  className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  {data.tombol}
                </a>
              </div>
              <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                <img
                  src={data.heroFoto}
                  className="img-fluid w-100 h-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HeroPertma;
