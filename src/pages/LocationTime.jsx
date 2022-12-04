import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import Json from "../data/db.json"
import '../styles/locationtime.css';
import axios from "axios";

function LocationTime() {

  const timezones = Object.values(Json.TimeZone); 
  console.log('Time Zones', timezones) 
  const [timezone, setTimezone] = useState("");
  const [submitDisable, setSubmitDisable] = useState(true);
  const [areaDisable, setAreaDisable] = useState(true)
  const [area, setArea] = useState([]);
  const [location, setLocation] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleArea = (e) => {
    setSubmitDisable(e.target.value === 'select');
    setLocation(e.target.value);
}

  const handleChange = async (e) => {
    setTimezone(e.target.value);
    setAreaDisable(e.target.value === 'select');
    const response = await fetch(`${process.env.REACT_APP_WORLD_CLOCK_URL}/timezone/${e.target.value}`);
    console.log("env ",process.env.REACT_APP_WORLD_CLOCK_URL);
    console.log("Selected Timezone:",e.target.value);
    const data = await response.json(); 
    setArea([]);
    data.map(item => {
      const len = item.split("/");
      console.log("len", len);
      const add = len[len.length-1].replace('_', ' ');
      setArea(area => [...area, add]);
    })
    console.log("RESPONSE", data);
  };
  console.log(area,"area");

  return (
    <div className="locationContainer">
      <div>
        <Header text={"Home Page"} route={"/"} />
      </div>
      <div className="timeForm">
        <form onSubmit={handleSubmit}>
          <section className="inputContainer">
          <div className="inputDiv">
            <h3 className="inputLabel">Select Timezone</h3>
            <select
              value={timezone}
              onChange={handleChange}
              className="dropdown"
            >
                <option default value={'select'} className='options'>Select</option>
                {
                    timezones.map(zone => {
                        return(<option value={zone} className='options'>{zone}</option>)
                    })
                }
            </select>
          </div>
          <div className="inputDiv">
            <h3 className="inputLabel">Select Location</h3>
            <select
              className="dropdown"
              value={location}
              onChange={handleArea}
              disabled={areaDisable}
            >
                <option default value={'select'} className='options'>Select</option>
                {
                    area.map(item => {
                        return(<option value={item} className='options'>{item}</option>)
                    })
                }
            </select>
          </div>
          </section>
          <div className="submitDiv">
          <button disabled={submitDisable}
          className="submitBtn"
          type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LocationTime;
