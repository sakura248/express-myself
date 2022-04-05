import React, { Component } from "react";
import { favs } from "./favs";
import "./favthings.css";

class Favthings extends Component {
  render() {
    return (
      <div className="favWrapper" id="Favs">
        <div className="fav border-top border-dark">
          <div className="fukidashi1">
            <img src={process.env.PUBLIC_URL + "/assets/e0709_3.png"} alt="" />
          </div>
          <h2 className="text-center">My Favorites Things!</h2>
          <div className="fukidashi2">
            <img src={process.env.PUBLIC_URL + "/assets/e0186_1.png"} alt="" />
          </div>
          <p className="text-center">
            {favs.map((item) => (
              <span> {item} </span>
            ))}
          </p>
        </div>
      </div>
    );
  }
}
export default Favthings;
