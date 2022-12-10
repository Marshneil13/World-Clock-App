import React from 'react'
import './Time.css'

function Time({time}) {
  return (
    <div className='timeDiv'>
      <h2>{time}</h2>
    </div>
  )
}

export default Time
