import React, { useEffect } from 'react'

import NavMenu from './components/NavMenu'
import IntroSection from './components/IntroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import PortfolioSection from './components/PortfolioSection'
import BlogSection from './components/BlogSection'
import LinksSection from './components/LinksSection'

const App = () => {
  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    const content = document.getElementsByClassName('content')[0];
    const sections = content.getElementsByTagName('section');
    const navLinks = document.getElementsByClassName('nav-link');

    const scrollPercentBar = document.getElementById('scroll-percent-bar');
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollY / (docHeight - winHeight);
    let scrollPercentRound = Math.round(scrollPercent * 100);
    scrollPercentBar.style.width = `${scrollPercentRound}vw`;

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
    };
  });

  return (
    <>
      <div className='scroll-track' />
      <div id="scroll-percent-bar" />
      <div className='container'>
        <NavMenu />
        <div className='content'>
          <IntroSection />
          <AboutSection />
          <ProjectsSection />
          <PortfolioSection />
          <BlogSection />
          <LinksSection />
          <div style={{
            position: 'fixed',
            bottom: '0px',
            height: '5vh',
            width: '100%',
            background: 'linear-gradient(to bottom, transparent, white)'
          }} />
        </div>
      </div>
    </>
  )
}

export default App
