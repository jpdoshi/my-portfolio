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
    const scrollImg = document.getElementsByClassName('scroll-img')[0];

    const content = document.getElementsByClassName('content')[0];
    const sections = content.getElementsByTagName('section');
    const navLinks = document.getElementsByClassName('nav-link');

    for (let current = 0; current < sections.length; current++) {
      const sectionHeight = sections[current].offsetHeight;
      const sectionTop = sections[current].offsetTop - 64;

      if (scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight) {
        navLinks[current].className = "nav-link active";
      } else {
        navLinks[current].className = "nav-link";
      }

      if (scrollY > 64) {
        scrollImg.style.opacity = '0';
      }
    };
  });

  return (
    <>
      <div className='container'>
        <NavMenu />
        <div className='content'>
          <IntroSection />
          <AboutSection />
          <ProjectsSection />
          <ResumeSection />
          <LinksSection />
        </div>
        <img src='/assets/scroll.gif' className='scroll-img' alt='scroll down' />
      </div>
    </>
  )
}

export default App