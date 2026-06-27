import React from 'react'
import aboutimg from '../my-component/gym-image/banner2.jpg'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutimg} alt="" />

      </div>
      <div className='about-text'>
        <h1>Learn about our fitness journey</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure tempore ab quibusdam commodi reiciendis consequuntur, nesciunt dolorum explicabo id qui!</p>
        <Link to="/offer"> <button>Discover More</button></Link>
      </div>
    </div>
  )
}

export default About
