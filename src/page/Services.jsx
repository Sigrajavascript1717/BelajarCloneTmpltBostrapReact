import React from "react";
import Navigasi from "../components/Homecomponents/Navigasi";
import HeaderService from "../components/Servicescompoenets/HeaderService";
import Servicekoponen from "../components/Homecomponents/Servicekoponen";
import FaQ from "../components/Homecomponents/FaQ";
import Footer from "../components/Homecomponents/Footer";
import Copyrgiht from "../components/Homecomponents/Copyrgiht";

const Services = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Navigasi />
      </div>
      <div className="container-fluid bg-breadcrumb">
        <HeaderService />
      </div>
      <div className="container-fluid service py-5">
        <Servicekoponen />
      </div>
      <div className="container-fluid FAQ bg-light overflow-hidden py-5">
        <FaQ />
      </div>
      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <Footer />
      </div>
      <div className="container-fluid copyright py-4">
        <Copyrgiht />
      </div>
      <a href="#" className="btn btn-primary btn-lg-square back-to-top">
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Services;
