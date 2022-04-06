import React from "react";
import "./rating.css";

const Ratings = (props) => {
  const { name, text, rating } = props.rating;
  return (
    <div className="container">
      <div className="rating-card col">
        <div className="card border-dark mb-3">
          <div className="card-body text-dark">
            <h4>{name}</h4>
            <p>{text}</p>
            <p>
              <small>Rating:{rating}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
