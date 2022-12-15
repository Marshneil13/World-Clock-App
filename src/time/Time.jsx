import React from 'react'
import './Time.css'

function Time({time, difference}) {
  return (
    <div className={difference?'timeDiff':'timeDiv'}>
      <h2>{time}</h2>
    </div>
  )
}

export default Time
