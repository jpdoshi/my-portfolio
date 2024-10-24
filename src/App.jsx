import React, { useEffect, Suspense, lazy } from "react";

import Chatbot from "./components/Chatbot";

const NavMenu = lazy(() => import("./components/NavMenu"));
const IntroSection = lazy(() => import("./components/sections/IntroSection"));
const AboutSection = lazy(() => import("./components/sections/AboutSection"));
const ProjectsSection = lazy(() =>
  import("./components/sections/ProjectsSection")
);
const PortfolioSection = lazy(() =>
  import("./components/sections/PortfolioSection")
);
const BlogSection = lazy(() => import("./components/sections/BlogSection"));
const LinksSection = lazy(() => import("./components/sections/LinksSection"));
const FooterSection = lazy(() => import("./components/sections/FooterSection"));

const Loader = () => {
  return (
    <>
      <img
        src="/assets/loading.gif"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        loading="lazy"
        alt="LOADING"
        height={200}
        width={200}
      />
    </>
  );
};

const App = () => {
  const handleScroll = () => {
    let scrollY = window.scrollY;

    const content = document.getElementsByClassName("content")[0];
    const sections = content.getElementsByTagName("section");
    const navLinks = document.getElementsByClassName("nav-link");

    const scrollPercentBar = document.getElementById("scroll-percent-bar");
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;

    let scrollPercent = scrollY / (docHeight - winHeight);
    let scrollContainer =
      document.getElementsByClassName("scroll-container")[0];
    let scrollPercentRound = Math.round(scrollPercent * 100);

    if (scrollPercentRound > 0 && scrollPercentRound < 100) {
      scrollContainer.style.opacity = "1";
    } else {
      scrollContainer.style.opacity = "0";
    }
    scrollPercentBar.style.width = `${scrollPercentRound}%`;

    for (let current = 0; current < sections.length; current++) {
      const sectionHeight = sections[current].offsetHeight;
      const sectionTop = sections[current].offsetTop - screen.height / 2;

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks[current].className = "nav-link active";

        sections[current].style.transform = "translate(0, 0)";
        sections[current].style.opacity = "1";
      } else {
        navLinks[current].className = "nav-link";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Suspense fallback={<Loader />}>
      <div className="scroll-container">
        <div id="scroll-percent-bar" />
      </div>
      <div className="container">
        <NavMenu />
        <div className="content">
          <IntroSection />
          <AboutSection />
          <ProjectsSection />
          <PortfolioSection />
          <BlogSection />
          <LinksSection />
          <FooterSection />
        </div>
      </div>
      <Chatbot />
    </Suspense>
  );
};

export default App;
