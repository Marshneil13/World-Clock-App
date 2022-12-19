import React from 'react'
import { useState } from 'react';
import '../styles/digiClock.css'

function DigiClock({hours, minutes, seconds, difference}) {

  const [hrs, setHrs] = useState(hours);
  const [mins, setMins] = useState(minutes);
  const [sec, setSec] = useState(seconds)
  // const updatetime = () => {

  //   if(sec<=58){
  //     setSec(sec+1);
  //   }
    
  //   else if(mins<=58 && sec===59)
  //   {
  //     setSec(0);
  //     setMins(mins+1);
  //   }
  //   else if(mins===59 && sec===59){
  //     setSec(0);
  //     setMins(0);
  //     setHrs(hrs+1)
  //   }
  // }

  // setInterval(updatetime, 1000);
  return (
    <div className={difference?'digiDiff':'digiClock'}>
      <div className='digiDiv'>
          <section>
            <p className='digiPara'>{`${hrs<10?`0${hrs}`:hrs} `}</p>
            <small className='digiSmall'>Hrs</small>
        </section>
        
        <section>
            <p className='digiPara'>{`: ${mins<10?`0${mins}`:mins} `}</p>
            <small className='digiSmall'>Mins</small>
        </section>
        <section>
            <p className='digiPara'>{`: ${sec<10?`0${sec}`:sec}`}</p>
            <small className='digiSmall'>Secs</small>
        </section>
      </div>
    </div>
  )
}

export default DigiClock