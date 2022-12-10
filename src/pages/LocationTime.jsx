import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import Json from "../data/db.json"
import '../styles/locationtime.css';
import axios from "axios";
import Time from "../time/Time";
import Date from "../date/Date";
import Day from "../day/Day";

function LocationTime() {

  const timezones = Object.values(Json.TimeZone); 
  let index = 0;
  console.log('Time Zones', timezones) 
  const [timezone, setTimezone] = useState("");
  const [submitDisable, setSubmitDisable] = useState(true);
  const [areaDisable, setAreaDisable] = useState(true);
  const [display, setDisplay] = useState(false);
  const [area, setArea] = useState([]);
  const [db, setDb] = useState([]);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState(0);
  const [time, setTime] = useState("");
  

  const handleArea = (e) => {
    setSubmitDisable(e.target.value === 'select');
    setLocation(e.target.value);
    index = area.indexOf(e.target.value);
    console.log("INDEX", index);
    console.log(db[index]);
}

  const handleChange = async (e) => {
    setTimezone(e.target.value);
    setDisplay(false);
    setAreaDisable(e.target.value === 'select');
    const response = await fetch(`${process.env.REACT_APP_WORLD_CLOCK_URL}/timezone/${e.target.value}`);
    console.log("env ",process.env.REACT_APP_WORLD_CLOCK_URL);
    console.log("Selected Timezone:",e.target.value);
    setArea([]);
    const data = await response.json();
    setDb(data);
    data.map(item => {
      console.log("ITEMS", item);
      const len = item.split("/");
      console.log("len", len);
      const add = len[len.length-1].replace('_', ' ');
      setArea(area => [...area, add]);
    })
    console.log("RESPONSE", data);
  };
  console.log(area,"area");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_WORLD_CLOCK_URL}/timezone/${db[index]}`);
    const data = await response.json();
    console.log("FINAL RESPONSE", data);
    const date_from_json = data.datetime;
    setDate(date_from_json.split("T")[0]);
    const day_from_json = data.day_of_week;
    setDay(day_from_json);
    const time_from_json = date_from_json.split("T")[1].split(".")[0];
    console.log("TIME", time_from_json);
    setTime(time_from_json);
    setDisplay(!submitDisable)
  };

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
      {display&&(
        <div>
          <Date date={date}/>
          <Day day={day}/>
          <Time time={time}/>
        </div>
      )}
    </div>
  );
}

export default LocationTime;
