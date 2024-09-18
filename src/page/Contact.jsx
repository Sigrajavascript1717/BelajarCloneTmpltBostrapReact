import React from "react";
import Navigasi from "../components/Homecomponents/Navigasi";
import ContatcListKomponen from "../components/Contact/ContatcListKomponen";
import ListContact from "../components/Contact/ListContact";
import Footer from "../components/Homecomponents/Footer";
import Copyrgiht from "../components/Homecomponents/Copyrgiht";

const Contact = () => {
  return (
    <>
      <div className="container-fluid header position-relative overflow-hidden p-0">
        <Navigasi />
      </div>
      <div className="container-fluid bg-breadcrumb">
        <ContatcListKomponen />
      </div>
      <div className="container-fluid contact py-5">
        <ListContact />
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

export default Contact;
