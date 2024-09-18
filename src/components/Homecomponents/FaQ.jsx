import React from "react";
import { dataFaq, fqfoto } from "../../data/fqdata";

const FaQ = () => {
  return (
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <div className="accordion" id="accordionExample">
            {dataFaq.map((faq) => (
              <div className="accordion-item border-0 mb-4" key={faq.id}>
                <h2 className="accordion-header" id={`heading${faq.id}`}>
                  <button
                    className={`accordion-button ${
                      faq.id === 1 ? "" : "collapsed"
                    } rounded-top`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${faq.id}`}
                    aria-expanded={faq.id === 1 ? "true" : "false"}
                    aria-controls={`collapse${faq.id}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${faq.id}`}
                  className={`accordion-collapse collapse ${
                    faq.id === 1 ? "show" : ""
                  }`}
                  aria-labelledby={`heading${faq.id}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body my-2">
                    <h5>{faq.answerTitle}</h5>
                    {faq.answerBody.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {fqfoto.map((dump, indexing) => {
          return (
            <div
              className="col-lg-6 wow fadeInRight"
              data-wow-delay="0.3s"
              key={indexing}
            >
              <div className={dump.div1}>
                <img src={dump.imgfq} className="img-fluid w-100" alt="FAQ" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaQ;
