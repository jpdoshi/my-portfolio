import React from 'react'

const NavMenu = () => {
  return (
    <nav>
      <div className='profile'>
        <div className='spacer' style={{ height: '15vh' }}></div>
        <img src="https://avatars.githubusercontent.com/u/122164427?v=4" className='pfp' alt="Profile Image" />
        <div className='spacer' style={{ height: '10vh' }}></div>
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