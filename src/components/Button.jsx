import React from 'react'
import {Link} from 'react-router-dom'

function Button({text, route}) {
  return (
    <div className='buttonDiv'>
       <Link className={`btn ${text==='About'&&'btnAbout'}`}  to={route}>{text}</Link>
    </div>
  )
}

export default Button