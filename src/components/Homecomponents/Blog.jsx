import React from "react";
import { dataBlog } from "../../data/BlogData";

const Blog = () => {
  return (
    <div className="container py-5">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: "900px" }}
      >
        <h4 className="text-primary">Our Blog</h4>
        <h1 className="display-5 mb-4">Join Us For New Blog</h1>
        <p className="mb-0">
          Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae maxime.
          Vel animi eveniet doloremque reiciendis soluta iste provident non
          rerum illum perferendis earum est architecto dolores vitae quia vero
          quod incidunt culpa corporis, porro doloribus. Voluptates nemo
          doloremque cum.
        </p>
      </div>
      <div className="row g-4 justify-content-center">
        {dataBlog.map((post, index) => (
          <div
            key={index}
            className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
            data-wow-delay={`${0.1 * (index + 1)}s`}
          >
            <div className="blog-item">
              <div className="blog-img">
                <img
                  src={post.imgSrc}
                  className="img-fluid w-100"
                  alt={`Blog post ${index + 1}`}
                />
                <div className="blog-info">
                  <span>
                    <i className="fa fa-clock"></i> {post.date}
                  </span>
                  <div className="d-flex">
                    <span className="me-3">
                      {post.likes} <i className="fa fa-heart"></i>
                    </span>
                    <a href="#" className="text-white">
                      {post.comments} <i className="fa fa-comment"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="blog-content text-dark border p-4">
                <h5 className="mb-4">{post.title}</h5>
                <p className="mb-4">{post.excerpt}</p>
                <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
