import React from "react";
import "./card-style.css";

const Card = ({ imgSrc, title, text }) => {
  return (
    <div className="card tex-center border border-dark rounded-0">
      <div className="overflow">
        <img
          class="card-img-top border-bottom border-dark"
          alt={title}
          src={imgSrc}
        />
      </div>
      <div className="card-body ">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-secondary">{text}</p>
      </div>
    </div>
  );
};

export default Card;
