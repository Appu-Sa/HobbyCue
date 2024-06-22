import React, { useState } from "react";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import useScreenSize from "../useScreenSize.jsx";

function ExploreSection() {
  const screeSize = useScreenSize();
  const [swtich, setSwtich] = useState("signIn");
  console.log(screeSize.width);

  return (
    <body style={{ backgroundColor: "#F7F5F9" }}>
      {/* blog */}
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 col-md-7 pe-5">
            <h1 className="display-4 fw-bold">
              Explore your <span className="text-info">hobby</span> or{" "}
              <span style={{ color: "#8064A2" }}>passion</span>
            </h1>
            <p className="mt-3">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities...
            </p>
            <p className="mt-3">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
          </div>

          {/* Form */}

          <div className="col-12 col-md-5">
            <div
              className="card "
              style={{ border: "none", backgroundColor: "#F7F5F9" }}
            >
              <div className="card-body">
                {swtich === "signIn" && (
                  <div className=" d-flex justify-content-center align-item-center mb-3">
                    <button
                      type="button"
                      className="btn"
                      value="signIn"
                      onClick={(e) => setSwtich(e.currentTarget.value)}
                      style={{ border: "none" }}
                    >
                      <span style={{ color: "#8064A2" }}>Sign In</span>
                      <hr style={{ marginTop: "-2px", color: "#8064A2" }} />
                    </button>
                    <button
                      type="button"
                      className="btn"
                      value="joinIn"
                      onClick={(e) => setSwtich(e.currentTarget.value)}
                    >
                      <span className="text-muted">Join In</span>
                    </button>
                  </div>
                )}

                {swtich === "joinIn" && (
                  <div className=" d-flex justify-content-center align-item-center mb-3">
                    <button
                      type="button"
                      className="btn"
                      value="signIn"
                      onClick={(e) => setSwtich(e.currentTarget.value)}
                    >
                      <span className="text-muted">Sign In</span>
                    </button>
                    <button
                      type="button"
                      className="btn"
                      value="joinIn"
                      onClick={(e) => setSwtich(e.currentTarget.value)}
                      style={{ border: "none" }}
                    >
                      <span style={{ color: "#8064A2" }}>Join In</span>
                      <hr style={{ marginTop: "-2px", color: "#8064A2" }} />
                    </button>
                  </div>
                )}

                <button
                  className="btn btn-light w-100 mb-3 text-start d-flex align-items-center justify-content-center"
                  style={{ border: "solid #8064A2", gap: "10px" }}
                >
                  <img
                    src={google}
                    alt="Google"
                    className="mt-2 mb-2"
                    height="20"
                  />
                  <span>Continue with Google</span>
                </button>
                <button
                  className="btn btn-light w-100 mb-3 text-start d-flex align-items-center justify-content-center"
                  style={{ border: "solid #8064A2", gap: "10px" }}
                >
                  <img
                    src={facebook}
                    alt="Google"
                    className="mt-2 mb-2"
                    height="20"
                  />
                  <span>Continue with Facebook</span>
                </button>
                <div className="my-3 d-flex justify-content-center">
                  <hr
                    style={{ borderBottom: "1px solid #888", width: "100px" }}
                  />
                  <span className="mx-1" style={{ marginTop: "2px" }}>
                    or connect with
                  </span>
                  <hr
                    style={{ borderBottom: "1px solid #888", width: "100px" }}
                  />
                </div>
                <form>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>

                  {swtich === "signIn" && (
                    <>
                      {" "}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
                        </div>
                        <a href="#" className="text-muted">
                          Forgot password?
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="btn w-100"
                        style={{ backgroundColor: "#8064A2", color: "white" }}
                      >
                        Continue
                      </button>
                    </>
                  )}

                  {swtich === "joinIn" && (
                    <>
                      <div className="mb-3">
                        <p style={{ textAlign: "end", fontSize: "10px" }}>
                          Password Strength
                        </p>
                        <p style={{ fontSize: "10px" }}>
                          By continuing, you agree to our{" "}
                          <span className="fw-bold">Terms of Service</span> and{" "}
                          <span className="fw-bold">Privacy Policy</span>
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="btn w-100"
                        style={{ backgroundColor: "#8064A2", color: "white" }}
                      >
                        Agree and Continue
                      </button>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {screeSize.width >= 1071 && (
          <div className="row mt-4">
            <div className="col-12">
              <img
                src="https://hobbycue.com/_next/static/media/landing-illustration.36d12f2d.svg"
                alt="Hobbies"
                className="img-fluid "
                style={{ marginTop: "-65px", marginLeft: "-30px" }}
              />
            </div>
          </div>
        )}

        {screeSize.width >= 769 && screeSize.width < 1071 && (
          <div className="row mt-4">
            <div className="col-12">
              <img
                src="https://hobbycue.com/_next/static/media/landing-illustration.36d12f2d.svg"
                alt="Hobbies"
                className="img-fluid"
                style={{ marginTop: "-20px" }}
              />
            </div>
          </div>
        )}
        {screeSize.width < 769 && (
          <div className="row mt-4">
            <div className="col-12">
              <img
                src="https://hobbycue.com/_next/static/media/landing-illustration.36d12f2d.svg"
                alt="Hobbies"
                className="img-fluid "
              />
            </div>
          </div>
        )}
      </div>
    </body>
  );
}

export default ExploreSection;
