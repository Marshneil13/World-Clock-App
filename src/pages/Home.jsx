import React from 'react'
import Globe from '../components/Globe'
import Button from '../components/Button'

function Home() {
  return (
      <>
    <div className='mainHeadDiv'>
        <h1 className='mainHead'>World Clock</h1>
    </div>
    <div className='mainContent'>
        <div className='sideContent'>
            <Button text={'Btn 1'} route={'/location-time'}/>
        </div>
        <div className='homeImage'>
            <Globe/>
        </div>
        <div className='sideContent'>
            <Button text={'Btn 2'} route={'/time-difference'}/>
        </div>
    </div>
    
    </>
  )
}

export default Home