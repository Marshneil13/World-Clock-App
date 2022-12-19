import React from 'react'
import { useState } from 'react';
import './Time.css'
import '../components/DigiClock'
import DigiClock from '../components/DigiClock';

function Time({time, difference}) {
  const t = time.split(':');
  console.log("TIME ARRAY: ", t);
  const [hours, setHours] = useState(parseInt(t[0]));
  const [minutes, setMinutes] = useState(parseInt(t[1]));
  const [seconds, setSeconds] = useState(parseInt(t[2]));

  
  return (
    <div className={difference?'timeDiff':'timeDiv'}>
      <DigiClock hours={hours} minutes={minutes} seconds={seconds} difference={difference}/>
    </div>
  )
}

export default Time
