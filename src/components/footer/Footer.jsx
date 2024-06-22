import React from "react";

const Footer = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-3">
          <div className="p fw-bold mb-4">HobbyCue</div>
          <ul className="list-unstyled mb-2 p-1 gap-1">
            <li>About Us</li>
            <li>Our Services</li>
            <li>Work with Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="col-md-3">
          <div className="p fw-bold mb-4">How do I</div>
          <ul className="list-unstyled mb-2 p-1 gap-1">
            <li>Sign Up</li>
            <li>Add a Listing</li>
            <li>Claim Listing</li>
            <li>Post a Query</li>
            <li>Add a Blog Post</li>
            <li>Other Queries</li>
          </ul>
        </div>
        <div className="col-md-3">
          <div className="p fw-bold mb-4">Quick Links</div>
          <ul className="list-unstyled mb-2 p-1 gap-1">
            <li>Listing Pages</li>
            <li>Blog Posts</li>
            <li>Shop / Store</li>
            <li>Community</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="col-md-3">
          <div className="p fw-bold mb-4">Invite Friends</div>
          <div className="d-flex">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email ID"
                style={{ border: "solid #8064A2" }}
              />
            </div>
            <button
              className="btn"
              style={{ backgroundColor: "#8064A2", color: "white" }}
            >
              Invite
            </button>
          </div>
          <div className="h4 mt-4">Social Media</div>
          <ul className="list-inline" style={{ gap: "80px" }}>
            <li className="list-inline-item">
              <a href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <ion-icon name="logo-paypal"></ion-icon>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <ion-icon name="logo-ionic"></ion-icon>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <ion-icon name="logo-whatsapp"></ion-icon>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <p className="mb-0">© Purple Cues Private Limited</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
