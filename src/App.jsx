import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faBarsStaggered, faClose, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery'

const App = () => {
  let openMenu = () => {
    $('body').css('overflow-y', 'hidden');
    $('.menu-icon').fadeOut(250);
    $('.close-icon').fadeIn(500);
    $('.side-menu').animate({left: '0%'}, 250);
    $('.menu').delay(250).fadeIn(500);
  }

  let closeMenu = () => {
    $('body').css('overflow-y', 'auto');
    $('.menu-icon').fadeIn(500);
    $('.close-icon').fadeOut(250);
    $('.side-menu').animate({left: '100%'}, 250);
    $('.menu').fadeOut(250);
  }
  return (
    <main>
    <div className="content">
      <section className='hero' id='home'>
        <div className='hero-grid'>
          <div>
            <h1>Hi, I'm <span>Jainam</span><div id='dot'></div></h1>
            <p>
              I am CS & IT student and enthusiast, who loves to build innovative projects. I believe in self-learning and have fond of research and development in field of CS and IT. I enjoy designing UI/UX as well as business logic, algorithms and data related stuff.
            </p>
            <a href='#projects' className='btn'>Explore Projects <FontAwesomeIcon icon={faArrowRight} /></a>
          </div>
          <img src='hero.gif'/>
        </div>
      </section>
    </div>
    <div className="side-menu">
      <div className="menu">
        <ul>
          <li><a href='#home'>HOME</a></li>
          <li><a href='#projects'>PROJECTS</a></li>
          <li><a href='#about'>ABOUT</a></li>
          <li><a href='#contact'>CONTACT</a></li>
        </ul>
        <ul className='outer-links'>
            <li><a href='https://in.linkedin.com/in/jainam-doshi-24063a2a0'><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href='https://github.com/jpdoshi'><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href='mailto:jpdoshi2811'><FontAwesomeIcon icon={faEnvelope} /></a></li>
            <li><a href='https://instagram.com/_jpdoshi'><FontAwesomeIcon icon={faInstagram} /></a></li>
          </ul>
      </div>
    </div>
    <FontAwesomeIcon icon={faClose} className='close-icon' onClick={() => closeMenu()} />
    <FontAwesomeIcon icon={faBarsStaggered} className='menu-icon' onClick={() => openMenu()} />
    </main>
  )
}

export default App
