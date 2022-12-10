import React from 'react'
import { useState } from 'react';
import './clock.css';

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    console.log("TIME OF SYSTEM", time);
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000)

  return (
    <div className='clock'>
        <h1 className="timeHead">Time:</h1>
        <h1 className='time'>{currentTime}</h1>
    </div>
  )
}

export default Clock