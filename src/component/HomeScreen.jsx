import React from 'react'
import Navv from './Navv'
import '../component/HomeScreen.css'
import Banner from './Banner'

const HomeScreen = () => {
  return (
    <div className='HomeScreen'>
      <div className='Nav__block'>
        <Navv />
      </div>

      {/* Banner */}
      <div className='Banner'>
        <Banner />
      </div>
    </div>
  )
}

export default HomeScreen
