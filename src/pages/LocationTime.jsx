import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import Json from "../data/db.json"

function LocationTime() {

  const timezones = Object.values(Json.TimeZone) 
  console.log('Time Zones', timezones) 
  const [timezone, setTimezone] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = async (e) => {
    setTimezone(e.target.value);
  };

  return (
    <div className="locationContainer">
      <div>
        <Header text={"Home Page"} route={"/"} />
      </div>
      <div className="timeForm">
        <form onSubmit={handleSubmit}>
          <div className="inputDiv">
            <h3 className="inputLabel">Select your Timezone</h3>
            <select
              value={timezone}
              onChange={handleChange}
            >
                <option disabled selected value={'select-timezone'}>Select</option>
                {
                    timezones.map(zone => {
                        return(<option value={`${zone}`}>{zone}</option>)
                    })
                }
            </select>
          </div>
          <div className="inputDiv">
            <h3 className="inputLabel">Select Location</h3>
            <input
              type="text"
              placeholder="Select"
              value={timezone}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LocationTime;
