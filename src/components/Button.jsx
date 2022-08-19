import React from 'react'
import {Link} from 'react-router-dom'

function Button({text, route}) {
  return (
    <div className='buttonDiv'>
        <button className='btn'><Link className='btn' to={route}>{text}</Link></button>
    </div>
  )
}

export default Button