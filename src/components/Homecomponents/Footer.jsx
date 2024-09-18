import React from "react";
import { footerData } from "../../data/dataFOtter";

const Footer = () => {
  return (
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="text-dark mb-4">Company</h4>
            {footerData.company.map((item, index) => (
              <a key={index} href={item.link}>
                {item.text}
              </a>
            ))}
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-dark">Quick Links</h4>
            {footerData.quickLinks.map((item, index) => (
              <a key={index} href={item.link}>
                {item.text}
              </a>
            ))}
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-dark">Services</h4>
            {footerData.services.map((item, index) => (
              <a key={index} href={item.link}>
                {item.text}
              </a>
            ))}
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-dark">Contact Info</h4>
            {footerData.contactInfo.map((item, index) => (
              <a key={index} href={item.link}>
                <i className={`fa ${item.icon} me-2`}></i> {item.text}
              </a>
            ))}
            <div className="d-flex align-items-center">
              <i className="fas fa-share fa-2x text-secondary me-2"></i>
              {footerData.socialLinks.map((item, index) => (
                <a
                  key={index}
                  className="btn-square btn btn-primary rounded-circle mx-1"
                  href={item.link}
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
