import React from 'react'
import './Date.css'

function Date({date, difference}) {

  const dateArr = date.split('-');
  console.log("DATE ARRAY" , dateArr);
  const month = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <div className={difference? 'dateDiff':'dateDiv'}>
      <h2>{`${dateArr[2]} ${month[parseInt(dateArr[1])]}, ${dateArr[0]}`}</h2>
    </div>
  )
}

export default Date
