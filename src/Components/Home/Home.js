import React from "react";
import "./Home.css";
import img1 from "../img/img3.jpg";
import { Link } from "react-router-dom";
import useRating from "../../hooks/ratingPoint";
import Ratings from "../rating/Ratings";

const Home = () => {
  const [rating, setRating] = useRating();
  return (
    <div className="card-container">
      <div className="firstSection">
        <div className="i-name">
          <h1>
            <span className="heading">PowerFull Camera House</span> <br />
            <span className="heading2">Buy Your Camera</span>
          </h1>
          <p>
            <span className="homeText">
              <p>
                A camera is an optical instrument that catches a visual picture. At a fundamental
                level, cameras comprise of fixed boxes (the camera body), with a little opening (the
                gap) that permits light through to catch a picture on a light-touchy surface
                (normally visual film or a computerized sensor). Cameras have different systems to
                control how the light falls onto the light-delicate surface.
              </p>
            </span>
          </p>
          <button className="btn btn-primary mt-5">Live Demo</button>
        </div>

        <div className="homeImg">
          <img src={img1} alt="" />
        </div>
      </div>
      <h3>Coustomer Reviews</h3>
      <div className="coustomarReview mt-5">
        <Link to={"/reviews"}>
          <span className="btn btn-primary">See All Reviews</span>
        </Link>
      </div>

      <div className="rating-container">
        {rating.slice(0,3).map((rating) => (
          <Ratings key={rating.name} rating={rating}></Ratings>
        ))}
        ;
      </div>
    </div>
  );
};

export default Home;
