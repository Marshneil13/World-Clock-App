import React from 'react'
import './Day.css'

function Day({day, difference}) {
  const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  console.log(week[day]);
  return (
    <div className={difference?'dayDiff':'dayDiv'}>
      <h2>{week[day]}</h2>
    </div>
  )
}

export default Day
