import React from 'react'

const NavMenu = () => {
  return (
    <nav>
      <div style={{ height: '15vh' }}></div>
      <img src="https://avatars.githubusercontent.com/u/122164427?v=4" className='pfp' alt="Profile Image" />
      <div style={{ height: '16px' }}></div>
      <a href='https://github.com/jpdoshi' style={{ marginLeft: '40px', color: '#ddd' }}>JPDOSHI</a>
      <div style={{ height: '64px' }}></div>
      <ul>
        <li><a href="#intro">INTRO</a></li>
        <li><a href="#about">ABOUT ME</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#resume">RESUME</a></li>
        <li><a href="#links">MORE</a></li>
      </ul>
    </nav>
  )
}

export default NavMenu