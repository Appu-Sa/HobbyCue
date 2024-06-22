import React from "react";

const AddTestimonials = () => {
  return (
    <div
      className="container py-5 px-5 my-3"
      style={{ backgroundColor: "#F7FDFF" }}
    >
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body p-2">
              <h4
                className="card-title text-start p-4 d-flex "
                style={{ gap: "15px" }}
              >
                <ion-icon
                  name="add-circle"
                  style={{ color: "#0096C8", fontSize: "34px" }}
                ></ion-icon>{" "}
                Add your own
              </h4>
              <p className="card-text p-3">
                Are you a teacher or expert? Do you sell or rent out equipment,
                venue or event tickets? Or, you know someone who should be on
                hobbycue? Go ahead and Add your Own page
              </p>
              <button
                className="btn btn-block m-3"
                style={{ border: "solid #8064A2", borderRadius: "10px" }}
              >
                Add new
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTestimonials;
