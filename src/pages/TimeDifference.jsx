import React from 'react'
import Header from '../components/Header'
import '../styles/locationtime.css'
import Json from "../data/db.json"
import { useState } from "react";

function TimeDifference() {

const timezones = Object.values(Json.TimeZone); 
  console.log('Time Zones', timezones) 
  let index1 = 0;
  let index2 = 0;
  const [timezone1, setTimezone1] = useState("");
  const [timezone2, setTimezone2] = useState("");
  const [submitDisable, setSubmitDisable] = useState(true);
  const [area1Disable, setArea1Disable] = useState(true)
  const [area2Disable, setArea2Disable] = useState(true)
  const [display, setDisplay] = useState(false);
  const [area1, setArea1] = useState([]);
  const [area2, setArea2] = useState([]);
  const [db1, setDb1] = useState([]);
  const [db2, setDb2] = useState([]);
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const [date1, setDate1] = useState("");
  const [day1, setDay1] = useState(0);
  const [time1, setTime1] = useState("");
  const [date2, setDate2] = useState("");
  const [day2, setDay2] = useState(0);
  const [time2, setTime2] = useState("");

  

  const handleArea1 = (e) => {
    setLocation1(e.target.value);
    index1 = area1.indexOf(e.target.value);
    console.log("INDEX_ONE", index1);
    console.log(db1[index1]);
}

const handleArea2 = (e) => {
    setLocation2(e.target.value);
    index2 = area2.indexOf(e.target.value);
    console.log("INDEX_TWO", index2);
    console.log(db2[index2]);
}

  const handleChange1 = async (e) => {
    setTimezone1(e.target.value);
    setDisplay(false);
    setArea1Disable(e.target.value === 'select');
    const response = await fetch(`${process.env.REACT_APP_WORLD_CLOCK_URL}/timezone/${e.target.value}`);
    const data = await response.json(); 
    setArea1([]);
    setDb1(data);
    data.map(item => {
      const len = item.split("/");
      
      const add = len[len.length-1].replace('_', ' ');
      setArea1(area => [...area, add]);
    })
    
  };

  const handleChange2 = async (e) => {
    setTimezone2(e.target.value);
    setDisplay(false);
    setArea2Disable(e.target.value === 'select');
    const response = await fetch(`${process.env.REACT_APP_WORLD_CLOCK_URL}/timezone/${e.target.value}`);
    const data = await response.json(); 
    setArea2([]);
    setDb2(data);
    data.map(item => {
      const len = item.split("/");
      
      const add = len[len.length-1].replace('_', ' ');
      setArea2(area => [...area, add]);
    })
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const date_from_json1 = db1.datetime;
    setDate1(date_from_json1.split("T")[0]);
    const date_from_json2 = db2.datetime;
    setDate2(date_from_json2.split("T")[0]);

    const day_from_json1 = db1.day_of_week;
    setDay1(day_from_json1);
    const day_from_json2 = db2.day_of_week;
    setDay2(day_from_json2);

    const time_from_json1 = date_from_json1.split("T")[1].split(".")[0];
    setTime1(time_from_json1);
    const time_from_json2 = date_from_json2.split("T")[1].split(".")[0];
    setTime1(time_from_json2);

      setSubmitDisable(location1!=='select' && location2!=='select');
      setDisplay(!submitDisable)
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