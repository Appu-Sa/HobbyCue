import React from "react";
// import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="container">
      <nav
        className="navbar sticky-top navbar-expand-lg navbar-light"
        style={{ height: "80px" }}
      >
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            <img
              src="https://hobbycue.com/_next/static/media/logo-full.13d59baf.svg"
              alt="hobbycue logo"
              height="30"
              className="d-inline-block align-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <form className="d-flex mx-auto my-2 my-lg-0">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search here..."
                aria-label="Search"
              />
              <button
                className="btn btn-outline"
                type="submit"
                style={{ border: "solid #8064A2", backgroundColor: "#8064A2" }}
              >
                <ion-icon
                  name="search-outline"
                  style={{ color: "white" }}
                ></ion-icon>
              </button>
            </form>
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center justify-content-center"
              style={{ gap: "10px" }}
            >
              <li className="nav-item dropdown d-flex align-items-center justify-content-center">
                <span>
                  <ion-icon
                    name="compass-outline"
                    style={{ paddingTop: "8px", color: "#8064A2" }}
                  ></ion-icon>
                </span>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="exploreDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span style={{ color: "#8064A2" }}>Explore</span>
                </a>
                <ul
                  className="dropdown-menu p-1 "
                  aria-labelledby="exploreDropdown"
                >
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      People - Community
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Places - Venues
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Programs - Events
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Products - Store
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Blogs
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown d-flex align-items-center justify-content-center">
                <span>
                  <ion-icon
                    name="sparkles-outline"
                    style={{ paddingTop: "8px", color: "#8064A2" }}
                  ></ion-icon>
                </span>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="hobbiesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span style={{ color: "#8064A2" }}>Hobbies</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="hobbiesDropdown">
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      People - Community
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Places - Venues
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Programs - Events
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Products - Store
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Blogs
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <ion-icon
                    name="bookmark-outline"
                    style={{ color: "#8064A2" }}
                  ></ion-icon>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <ion-icon
                    name="notifications-outline"
                    style={{ color: "#8064A2" }}
                  ></ion-icon>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <ion-icon
                    name="cart-outline"
                    style={{ color: "#8064A2" }}
                  ></ion-icon>
                </a>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-purple ms-2">Sign In</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
