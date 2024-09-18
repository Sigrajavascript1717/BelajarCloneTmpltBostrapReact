import React from "react";
import Navigasi from "../components/Homecomponents/Navigasi";
import TestiNewList from "../components/testimoniallist/TestiNewList";
import Tesinti from "../components/Homecomponents/Tesinti";
import Footer from "../components/Homecomponents/Footer";
import Copyrgiht from "../components/Homecomponents/Copyrgiht";

const Testi = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Navigasi />
      </div>
      <div className="container-fluid bg-breadcrumb mb-0">
        <TestiNewList />
      </div>
      <div className="container-fluid testimonial py-5">
        <Tesinti />
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

export default Testi;
