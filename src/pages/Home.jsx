import React from "react";
import Globe from "../components/Globe";
import Button from "../components/Button";
import Clock from "../clock/Clock";
import { BsArrowLeft } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homeContainer">
      <div className="headerContainer">
        <div className="aboutDiv">
          <Button text={"About"} route={"/about"} />
        </div>
        <div className="mainHeadDiv">
          <h1 className="mainHead">World Clock</h1>
        </div>
      </div>
      <div className="mainContent">
        <div className="sideContent">
          <Button text={"Find Time of the Location"} route={"/location-time"} />
        </div>
        <div className="homeImage">
          <Globe />
        </div>
        <div className="sideContent">
          <Button
            text={"Find Time Difference of Locations"}
            route={"/time-difference"}
          />
        </div>
      </div>
      <div className="timeContainer">
         <Clock/>
      </div>
    </div>
  );
}

export default Home;
