import React from "react";
import Globe from "../components/Globe";
import Button from "../components/Button";
import Clock from "../clock/Clock";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="homeContainer">
       <div>
      <Header text={"About"} route={"/about"}/>
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
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default Home;
