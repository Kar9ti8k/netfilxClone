import React, { useState, useEffect } from 'react'
import './Navv.css'
import avatar from '../assets/avatar.png'
import netfilxlogo from '../assets/netfilx-logo.png'
const Navv = () => {
  const [navBarShow, setNavBarShow] = useState(false)

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setNavBarShow(true)
    } else {
      setNavBarShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])
  return (
    <div className={`nav ${navBarShow && 'nav__block'}`}>
      <div className='nav__contants'>
        {' '}
        <img alt='' className='nav__logo' src={netfilxlogo} />
        <img src={avatar} alt='' className='nav__avatar' />
      </div>
    </div>
  )
}

export default Navv
