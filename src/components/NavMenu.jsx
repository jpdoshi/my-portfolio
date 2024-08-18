import React from 'react'

const NavMenu = () => {
  return (
    <nav>
      <div className='profile'>
        <div className='spacer' style={{ height: '84px' }}></div>
        <img src="/assets/pfp.png" className='pfp' alt="Profile Image" onClick={() => { window.open('https://github.com/jpdoshi', '_blank'); }} />
        <div className='spacer' style={{ height: '54px' }}></div>
      </div>
      <ul>
        <li><a href="#intro" className='nav-link active'>Intro</a></li>
        <li><a href="#about" className='nav-link'>About</a></li>
        <li><a href="#projects" className='nav-link'>Projects</a></li>
        <li><a href="#resume" className='nav-link'>Resume</a></li>
        <li><a href="#links" className='nav-link'>More</a></li>
      </ul>
    </nav>
  )
}

export default NavMenu