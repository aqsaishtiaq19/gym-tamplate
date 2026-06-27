import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div id='main'>
        <div className='name'>
        <h2>Train Smarter</h2>
        <h1><span>Live</span>Better</h1>
          <p className='details'>Start Your Body Transformation Today</p>
         <div className='header-btns'>
              {/* <a href="/Contact" className='header-btn'>JOIN US</a> */}
              <Link to='./Contact' className='header-btn'><button>JOIN US</button></Link>
            </div>         
         </div>      
    </div>
  )
}

export default Header
