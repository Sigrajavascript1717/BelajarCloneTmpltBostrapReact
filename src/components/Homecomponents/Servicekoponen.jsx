import React from "react";
import { CardService, DataKomponen } from "../../data/KomponenData";
const Servicekoponen = () => {
  return (
    <div className="container py-5">
      {DataKomponen.map((header, index) => {
        return (
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "900px" }}
            key={index}
          >
            <h4 className="mb-1 text-primary">{header.h4}</h4>
            <h1 className="display-5 mb-4">{header.h1}</h1>
            <p className="mb-0">{header.p}</p>
          </div>
        );
      })}

      {/* // Card */}
      <div className="row g-4 justify-content-center">
        {CardService.map((DataCard) => {
          return (
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
              key={DataCard.id}
            >
              <div className="service-item text-center rounded p-4">
                <div className="service-icon d-inline-block bg-light rounded p-4 mb-4">
                  <i className={DataCard.icon}></i>
                </div>
                <div className="service-content">
                  <h4 className="mb-4">{DataCard.h4}</h4>
                  <p className="mb-4">{DataCard.p}</p>
                  <a
                    href="#"
                    className="btn btn-light rounded-pill text-primary py-2 px-4"
                  >
                    {DataCard.button}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Servicekoponen;
