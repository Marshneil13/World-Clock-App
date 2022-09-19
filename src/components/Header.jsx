import React from 'react'
import Button from './Button'

function Header({text, route}) {
  return (
    <div className="headerContainer">
        <div className="aboutDiv">
          <Button text={text} route={route} />
        </div>
        <div className="mainHeadDiv">
          <h1 className="mainHead">World Clock</h1>
        </div>
      </div>
  )
}

export default Header
