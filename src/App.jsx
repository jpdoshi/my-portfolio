import React from 'react'

import NavMenu from './components/NavMenu'
import IntroSection from './components/IntroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ResumeSection from './components/ResumeSection'
import LinksSection from './components/LinksSection'

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <NavMenu />
      <div className='content'>
        <IntroSection />
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
        <LinksSection />
      </div>
    </div>
  )
}

export default App