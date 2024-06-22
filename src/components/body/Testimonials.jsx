import React from "react";

function Testimonials() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card p-4 shadow-sm">
            <div
              className="d-flex align-items-center justify-content-center mb-4 gap-2"
              style={{ color: "#8064A2" }}
            >
              <ion-icon
                name="flash-outline"
                style={{ fontSize: "40px" }}
              ></ion-icon>
              <h4 className="mb-0">Testimonials</h4>
            </div>
            <p className="card-text" style={{ textAlign: "center" }}>
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city, all under one roof, is an excellent idea
              and I highly recommend it.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <img
                src="https://hobbycue.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial.e085c9af.png&w=128&q=75"
                className="card-img-top rounded-circle mb-3"
                alt="Testimonial Profile"
                style={{ width: "60px" }}
              />
              <div>
                <h5 className="card-title" style={{ color: "#8064A2" }}>
                  Shubha Nagarajan
                </h5>
                <p className="card-text" style={{ color: "blue" }}>
                  Classical Dancer
                </p>
              </div>
            </div>
            <div
              className=" d-flex mt-2"
              style={{
                backgroundColor: "#8064A2",
                justifyContent: "center",
                padding: "5px",
                gap: "5px",
                borderRadius: "10px",
              }}
            >
              <button className="btn btn-sm">
                <ion-icon
                  name="play-circle-outline"
                  style={{ color: "white", fontSize: "40px" }}
                ></ion-icon>
              </button>
              <div
                className="progress mt-4"
                style={{ height: "5px", width: "100%" }}
              >
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <img
                src="https://hobbycue.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial.e085c9af.png&w=128&q=75"
                className="card-img-top rounded-circle"
                alt="Testimonial Profile"
                style={{ width: "60px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
