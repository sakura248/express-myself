import { faHandPeace } from "@fortawesome/free-regular-svg-icons";
// import img2 from './assets/IMG_3119.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
// import img1 from "../assets/chatbubble-ellipses-outline.svg";
import "./top.css";

class Top extends Component {
  render() {
    return (
      <div className="wrapper container-fluid">
        <div className="row">
          {/* left side */}
          <div className="col border border-dark side ">
            <div className="sideWrapper">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/chatbubble-ellipses-outline.svg"
                }
                alt=""
                className="mx-auto fu"
              />
              <p className="selfIntro">I'm Sakura.</p>
            </div>
          </div>
          {/* right side */}
          <div className="col border border-dark right-side container-fluid">
            <div className="sideWrapper">
              <p className="text-center blogIntro">Check My Blog!</p>
              <div className="card blogcard border-dark mb-3 rounded-0">
                <div className="card-body text-dark  container-fluid">
                  <h5 className="card-title">Release the beast!</h5>
                  <div className="line">
                    <span></span>
                  </div>
                  <p className="card-text">
                    I started reading the book “Release the Beast” written by
                    Bimini Bon-Boulash. They are one of my favorite queens in
                    DRUK S2. I guess they wrote about being non-binary, ...
                  </p>
                  <div className="text-end">
                    <a
                      href="https://zuisolog.com"
                      className="btn btn-outline-primary float-right"
                    >
                      {" "}
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="card blogcard border-dark mb-3 rounded-0">
                <div className="card-body text-dark  container-fluid">
                  <h5 className="card-title">NightOfTheLivingDrag</h5>
                  <div className="line">
                    <span></span>
                  </div>
                  <p className="card-text">
                    Last night, Oct 20th, I finally could go to “Night Of the
                    Living Drag” hld by Voss event in Vancouver. The show was
                    great!!!!! My hands swollen cuz I gave applaus ...
                  </p>
                  <div className="text-end">
                    <a
                      href="https://zuisolog.com"
                      className="btn btn-outline-primary"
                    >
                      {" "}
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* contact link */}
          <div className="fixed-bottom contact">
            <a href="mailto:test@test.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faHandPeace} className="contactBtn" />
            </a>
            <div className="rotate-container">
              {/* <p className="circle-text">
                Contact me! 📧　~ Contact me! 📧　~ Contact me! 📧　~
              </p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Top;
