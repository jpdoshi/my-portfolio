import React, { useEffect } from 'react'

import NavMenu from './components/NavMenu'
import IntroSection from './components/IntroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ResumeSection from './components/PortfolioSection'
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
      const sectionTop = sections[current].offsetTop - (screen.height / 4);

      if (scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight) {
        navLinks[current].className = "nav-link active";

        sections[current].style.transform = 'translate(0, 0)';
        sections[current].style.opacity = '1';
      } else {
        navLinks[current].className = "nav-link";
      }

      if (scrollY > 0) {
        document.getElementsByClassName('scroll-panel')[0].style.transform = 'translateY(-100vh)';
      }
    };
  });

  return (
    <>
      <div className='container'>
        <NavMenu />
        <div className='content'>
          <div className='scroll-panel'>
            <div className="scroll-div">
              <img src='/assets/scroll.gif' className='scroll-img' alt='scroll down' />
              <p>Scroll Down</p>
            </div>
          </div>
          <IntroSection />
          <AboutSection />
          <ProjectsSection />
          <ResumeSection />
          <LinksSection />
        </div>
      </div>
    </>
  )
}

export default App