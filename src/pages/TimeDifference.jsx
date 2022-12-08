import React from 'react'
import Header from '../components/Header'
import '../styles/locationtime.css'
import Json from "../data/db.json"
import { useState } from "react";

function TimeDifference() {

const timezones = Object.values(Json.TimeZone); 
  console.log('Time Zones', timezones) 
  const [timezone1, setTimezone1] = useState("");
  const [timezone2, setTimezone2] = useState("");
  const [submitDisable, setSubmitDisable] = useState(true);
  const [area1Disable, setArea1Disable] = useState(true)
  const [area2Disable, setArea2Disable] = useState(true)
  const [area1, setArea1] = useState([]);
  const [area2, setArea2] = useState([]);
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
      setSubmitDisable(location1!=='select' && location2!=='select')
    };

  const handleArea1 = (e) => {
    setLocation1(e.target.value);
}

const handleArea2 = (e) => {
    setLocation2(e.target.value);
}

  const handleChange1 = async (e) => {
    setTimezone1(e.target.value);
    setArea1Disable(e.target.value === 'select');
    const response = await fetch(`${process.env.REACT_APP_WORLD_CLOCK_URL}/timezone/${e.target.value}`);
    const data = await response.json(); 
    setArea1([]);
    data.map(item => {
      const len = item.split("/");
      
      const add = len[len.length-1].replace('_', ' ');
      setArea1(area => [...area, add]);
    })
    
  };

  const handleChange2 = async (e) => {
    setTimezone2(e.target.value);
    setArea2Disable(e.target.value === 'select');
    const response = await fetch(`${process.env.REACT_APP_WORLD_CLOCK_URL}/timezone/${e.target.value}`);
    const data = await response.json(); 
    setArea2([]);
    data.map(item => {
      const len = item.split("/");
      
      const add = len[len.length-1].replace('_', ' ');
      setArea2(area => [...area, add]);
    })
    
  };
  

  return (
    <div className='timeDifferenceContainer'>
        <div>
            <Header text={"Home Page"} route={"/"} />
        </div>
        <div className="timeForm">
        <form onSubmit={handleSubmit}>
          <section className="inputContainer">
          <div className="inputDiv">
            <h3 className="inputLabel">Select Timezone 1</h3>
            <select
              value={timezone1}
              onChange={handleChange1}
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
            <h3 className="inputLabel">Select Location 1</h3>
            <select
              className="dropdown"
              value={location1}
              onChange={handleArea1}
              disabled={area1Disable}
            >
                <option default value={'select'} className='options'>Select</option>
                {
                    area1.map(item => {
                        return(<option value={item} className='options'>{item}</option>)
                    })
                }
            </select>
          </div>
          </section>

          <section className="inputContainer">
          <div className="inputDiv">
            <h3 className="inputLabel">Select Timezone 2</h3>
            <select
              value={timezone2}
              onChange={handleChange2}
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
            <h3 className="inputLabel">Select Location 2</h3>
            <select
              className="dropdown"
              value={location2}
              onChange={handleArea2}
              disabled={area2Disable}
            >
                <option default value={'select'} className='options'>Select</option>
                {
                    area2.map(item => {
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
      <div>
        
      </div>
    </div>
  )
}

export default TimeDifference