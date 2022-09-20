import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

function About() {
  return (
    <div className="aboutContainer">
      <Header text={"Home Page"} route={"/"} />
      <div className="mainContentAbout">
        <h2 className="aboutHead">About</h2>
        <p className="aboutText">
          This app is built on <b>React</b> framework. It allows to find the
          current date and time/time-difference of various timezones. The data
          has been received through an external API-<b>WorldTimeAPI</b>
        </p>
        <div className="credits">
            <p className="aboutText"><b>Developed by:</b> Marshneil Prasad</p>
            <div className="infoIcons">
                <div className="iconDiv">
                    <a href={'https://github.com/Marshneil13'} target='_blank' rel='noreferrer'><BsGithub className="githubIcon"/></a>
                </div>
                <div className="iconDiv">
                    <a href={'https://www.linkedin.com/in/marshneil-prasad-591a8a205/'} target='_blank' rel='noreferrer'><BsLinkedin className="linkedInIcon"/></a>
                </div>
            </div>
        </div>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default About;
