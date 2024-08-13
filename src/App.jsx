import React from 'react'

import NavMenu from './components/NavMenu'
import IntroSection from './components/IntroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ResumeSection from './components/ResumeSection'
import LinksSection from './components/LinksSection'

const App = () => {
  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    const sections = document.getElementsByTagName('section');
    const navLinks = document.getElementsByClassName('nav-link');

    for (const current in sections) {
      const sectionHeight = sections[current].offsetHeight;
      const sectionTop = sections[current].offsetTop - 50;

      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ) {
        navLinks[current].className = "nav-link active";
      } else {
        navLinks[current].className = "nav-link";
      }
    };
  });

  return (
    <div className='container'>
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