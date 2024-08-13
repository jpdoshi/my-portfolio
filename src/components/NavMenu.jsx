import React from 'react'

const NavMenu = () => {
  return (
    <nav>
      <div style={{ height: '15vh' }}></div>
      <img src="https://avatars.githubusercontent.com/u/122164427?v=4" className='pfp' alt="Profile Image" />
      <div style={{ height: '16px' }}></div>
      <a href='https://github.com/jpdoshi' style={{
        marginLeft: '50px', textTransform: 'lowercase',
        color: '#ddd', fontFamily: 'Inter',
        fontWeight: 'normal'
      }}>jpdoshi.</a>
      <div style={{ height: '64px' }}></div>
      <ul>
        <li><a href="#intro" className='nav-link active'>Intro</a></li>
        <li><a href="#about" className='nav-link'>About Me</a></li>
        <li><a href="#projects" className='nav-link'>Projects</a></li>
        <li><a href="#resume" className='nav-link'>Resume</a></li>
        <li><a href="#links" className='nav-link'>More</a></li>
      </ul>
    </nav>
  )
}

export default NavMenu