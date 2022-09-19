import React from "react";
import Globe from "../components/Globe";
import Button from "../components/Button";
import Clock from "../clock/Clock";
import { BsArrowLeft } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <div className="homeContainer">
      <Header text={"About"} route={"/about"}/>
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
