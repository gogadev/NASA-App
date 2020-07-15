import React from "react";

import { Link } from "react-router-dom";

import image from "../../assets/image.jpg";
import spinner from "../../assets/spinner.gif";

import "./main.style.css";

const Main = ({ nasaData }) => {
  return (
    <div className="main">
      {nasaData.title ? (
        <React.Fragment>
          <div className="image">
            <h3 className="title">Image Of The Day</h3>
            <img className="app-image" src={image} alt="" />
            <h5 className="copyright">{nasaData.copyright}</h5>
          </div>
          <div className="explanation">{nasaData.explanation}</div>
        </React.Fragment>
      ) : (
        <div className="loading">
          <img src={spinner} alt="" />
        </div>
      )}
      <Link to="/nasa">
        {" "}
        <button className="btn">Learn More</button>
      </Link>
    </div>
  );
};

export default Main;
