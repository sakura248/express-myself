// `${process.env.PUBLIC_URL}/assets/25C7117A-9770-4932-B60F-15C7D489EC5A.JPG')`;
import React, { Component } from "react";
import Card from "./CardUI";
import { cardData } from "./cardData.js";

class Cards extends Component {
  render() {
    return (
      <>
        <div
          className="text-banner bg-warning border-bottom border-dark"
          id="Arts"
        >
          <div className="text-banner__content">
            <p>
              My favorite drag artists! : Yvie Oddly, Abhora, Dahli, Hoso Terra
              Toma, Bimini Bon Boulash, Tayce, Crystal, Awhora, Shea Coulee,
              Pythia
            </p>
          </div>
        </div>

        <div className="container-fluid">
          <p className="text-center artIntro">Check My Arts!</p>
          <div className="d-flex justify-content-center flex-wrap">
            {cardData.map((item, id) => (
              <Card
                key={id}
                imgSrc={`/assets/${item.src}`}
                title={item.title}
                text={item.description}
              />
            ))}
          </div>
        </div>
        <div className="text-center">
          <button className="instaBtn">
            <a
              href="https://www.instagram.com/kobujimesaga/"
              target="_blank "
              className=""
            >
              Go to Insta
            </a>
          </button>
        </div>
      </>
    );
  }
}

export default Cards;
