import React from "react";
import Navigasi from "../components/Homecomponents/Navigasi";
import BlogHeader from "../components/Blogkomponents/BlogHeader";
import Blog from "../components/Homecomponents/Blog";
import Footer from "../components/Homecomponents/Footer";
import Copyrgiht from "../components/Homecomponents/Copyrgiht";

const Blogs = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Navigasi />
      </div>
      <div className="container-fluid bg-breadcrumb">
        <BlogHeader />
      </div>
      <div className="container-fluid blog py-5">
        <Blog />
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

export default Blogs;
