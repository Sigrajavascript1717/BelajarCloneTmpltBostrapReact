import React from "react";
import { testimonialdata } from "../../data/Testi";
const Tesinti = () => {
  return (
    <>
      <div className="container py-5">
        {testimonialdata.map((data, index) => {
          return (
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "900px" }}
              key={index}
            >
              <h4 className="text-primary">{data.h4}</h4>
              <h1 className="display-5 mb-4">{data.h1}</h1>
              <p className="mb-0">{data.p}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tesinti;
