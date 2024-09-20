import React from 'react'

import NavMenu from './components/NavMenu'
import IntroSection from './components/sections/IntroSection'
import AboutSection from './components/sections/AboutSection'
import ProjectsSection from './components/sections/ProjectsSection'
import PortfolioSection from './components/sections/PortfolioSection'
import BlogSection from './components/sections/BlogSection'
import LinksSection from './components/sections/LinksSection'
import FooterSection from './components/sections/FooterSection'

const App = () => {
  const [contentLoading, setContentLoading] = React.useState(true);

  // handle contentLoading:
  React.useEffect(() => {
    setTimeout(() => {
      setContentLoading(false);
    }, 500);
  }, []);

  // handle onScroll event:
  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    const content = document.getElementsByClassName('content')[0];
    const sections = content.getElementsByTagName('section');
    const navLinks = document.getElementsByClassName('nav-link');

    const scrollPercentBar = document.getElementById('scroll-percent-bar');
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;

    let scrollPercent = scrollY / (docHeight - winHeight);
    let scrollContainer = document.getElementsByClassName('scroll-container')[0];
    let scrollPercentRound = Math.round(scrollPercent * 100);

    if (scrollPercentRound > 0 && scrollPercentRound < 100) {
      scrollContainer.style.opacity = '1';
    } else {
      scrollContainer.style.opacity = '0';
    }
    scrollPercentBar.style.width = `${scrollPercentRound}%`;

    for (let current = 0; current < sections.length; current++) {
      const sectionHeight = sections[current].offsetHeight;
      const sectionTop = sections[current].offsetTop - (screen.height / 2);

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

  return contentLoading ? (
    <>
      <h1 style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        Loading
      </h1>
    </>
  ) : (
    <>
      <div className="scroll-container">
        <div id="scroll-percent-bar" />
      </div>
      <div className='container'>
        <NavMenu />
        <div className='content'>
          <IntroSection />
          <AboutSection />
          <ProjectsSection />
          <PortfolioSection />
          <BlogSection />
          <LinksSection />
          <FooterSection />
        </div>
      </div>
    </>
  )
}

export default App
