import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className='container header_container'>
          <h5>Hello I'm</h5>
          <h1>Ananya Sharma</h1>
          <h5 className='text-light'>Full Stack Developer & AWS Cloud Practitioner</h5>
          <CTA />
          <HeaderSocial />
          <div className='me'>
             <img src={ME} alt="me" />
          </div>
          <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header