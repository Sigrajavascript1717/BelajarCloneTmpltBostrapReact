import React from "react";
import Navigasi from "../components/Homecomponents/Navigasi";
import HeaderFeatures from "../components/Featureskomponen/HeaderFeatures";
import Featurse from "../components/Homecomponents/Featurse";
import FaQ from "../components/Homecomponents/FaQ";
import Footer from "../components/Homecomponents/Footer";
import Copyrgiht from "../components/Homecomponents/Copyrgiht";

const Features = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Navigasi />
      </div>
      <div className="container-fluid bg-breadcrumb">
        <HeaderFeatures />
      </div>
      <div className="container-fluid feature overflow-hidden py-5">
        <Featurse />
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
      {/* // cpyright */}
      <div className="container-fluid copyright py-4">
        <Copyrgiht />
      </div>
      <a href="#" className="btn btn-primary btn-lg-square back-to-top">
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Features;
