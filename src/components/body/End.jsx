import React from "react";

const End = () => {
  return (
    <div className="container-fluid p-5" style={{ backgroundColor: "#F7FDFF" }}>
      <div className="row">
        <div className="col-12 text-start py-5">
          <h1 style={{ fontStyle: "italic" }}>
            Your <span style={{ color: "#8064A2" }}>Hobby</span>, Your{" "}
            <span style={{ color: "blue" }}>Community</span>...
          </h1>
          <button
            className="btn mt-3"
            style={{ backgroundColor: "#8064A2", color: "white" }}
          >
            Get started
          </button>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-12">
          <div>
            <img
              src="https://hobbycue.com/_next/static/media/community-bottom.79dd2552.svg"
              alt="Woman"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default End;
