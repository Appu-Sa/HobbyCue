import React, { useState } from "react";
import "./Feature.css";

const Features = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mt-2">
          <div className="card py-5 px-2" id="card-hover1">
            <div className="card-body">
              <h5 className="card-title">
                <ion-icon name="people-outline" id="icon1"></ion-icon> People
              </h5>
              <p className="card-text" id="para1">
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </p>
              <button className="btn" id="btn1">
                connect
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-2">
          <div className="card py-5 px-2" id="card-hover2">
            <div className="card-body">
              <h5 className="card-title">
                <ion-icon name="location-outline" id="icon2"></ion-icon> Place
              </h5>
              <p className="card-text" id="para2">
                Find a class, school, playground, auditorium, studio, shop or an
                event venue. Book a slot at venues that allow booking through
                hobbycue.
              </p>
              <button className="btn" id="btn2">
                meet up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 mt-2">
          <div className="card py-5 px-2" id="card-hover3">
            <div className="card-body">
              <h5 className="card-title">
                <ion-icon name="cart-outline" id="icon3"></ion-icon> Product
              </h5>
              <p className="card-text" id="para3">
                Find equipment or supplies required for your hobby. Buy, rent or
                borrow from shops, online stores or from community members.
              </p>
              <button className="btn" id="btn3">
                get it
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-2">
          <div className="card py-5 px-2" id="card-hover4">
            <div className="card-body">
              <h5 className="card-title">
                <ion-icon name="calendar-clear-outline" id="icon4"></ion-icon>{" "}
                Program
              </h5>
              <p className="card-text" id="para4">
                Find events, meetups and workshops related to your hobby.
                Register or buy tickets online.
              </p>
              <button className="btn" id="btn4">
                Attend
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
