import React from "react";
// import Spinesr from "../components/Spinesr";

import Navigasi from "../components/Homecomponents/Navigasi";
import HeroPertma from "../components/Homecomponents/HeroPertma";
import AboutHome from "../components/Homecomponents/AboutHome";
import Servicekoponen from "../components/Homecomponents/Servicekoponen";
import Featurse from "../components/Homecomponents/Featurse";
import FaQ from "../components/Homecomponents/FaQ";
import Blog from "../components/Homecomponents/Blog";
import Tesinti from "../components/Homecomponents/Tesinti";
import Footer from "../components/Homecomponents/Footer";
import Copyrgiht from "../components/Homecomponents/Copyrgiht";

const Home = () => {
  return (
    <>
      {/* <Spinesr /> */}
      {/* // Navbar dan hero section */}
      <div className="container-fluid header position-relative overflow-hidden p-0">
        <Navigasi />
        {/* // hero pertama */}
        <HeroPertma />
      </div>
      <div
        data-about="true" // Menggunakan data-* untuk informasi kustom
        data-section="true" // Menggunakan data-* untuk informasi kustom
        className="container-fluid overflow-hidden py-5"
        style={{ marginTop: "6rem" }}
      >
        <AboutHome />
      </div>
      {/* service start */}
      <div className="container-fluid service py-5">
        <Servicekoponen />
      </div>
      {/* // fetures */}
      <div className="container-fluid feature overflow-hidden py-5">
        <Featurse />
      </div>
      {/* // Faq start */}
      <div className="container-fluid FAQ bg-light overflow-hidden py-5">
        <FaQ />
      </div>
      {/* // blog  */}
      <div className="container-fluid blog py-5">
        <Blog />
      </div>
      {/* //testimonial */}
      <div className="container-fluid testimonial py-5">
        <Tesinti />
      </div>
      {/* // Footer  */}
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

export default Home;
