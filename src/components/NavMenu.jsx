import React from 'react'

const NavMenu = () => {
  return (
    <nav>
      <div className='profile'>
        <img src="/assets/pfp.png" className='pfp' alt="Profile Image" onClick={() => { window.open('https://github.com/jpdoshi', '_blank'); }} />
      </div>
      <div className='spacer' style={{ width: '24px' }}></div>
      <ul>
        <li><a href="#intro" className='nav-link active'>Intro</a></li>
        <li><a href="#about" className='nav-link'>About</a></li>
        <li><a href="#projects" className='nav-link'>Projects</a></li>
        <li><a href="#portfolio" className='nav-link'>Portfolio</a></li>
        <li><a href="#links" className='nav-link'>More</a></li>
      </ul>
    </nav>
  )
}

export default NavMenu