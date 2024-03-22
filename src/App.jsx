import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery'
import { ReactTyped } from 'react-typed'

const App = () => {
  let openMenu = () => {
    $('body').css('overflow-y', 'hidden');
    $('.side-menu').animate({ left: '0%' }, 400);
    $('.menu').delay(400).fadeIn(400);

    $('.fries').eq(1).css({ 'opacity': '0', 'transform': 'translateX(1rem)' });
    $('.fries').eq(0).css({ 'transform': 'translateY(9px) rotate(45deg)' });
    $('.fries').eq(2).css({ 'transform': 'translateY(-9px) rotate(-45deg)' });
  }

  let closeMenu = () => {
    $('body').css('overflow-y', 'auto');
    $('.side-menu').animate({ left: '100%' }, 400);
    $('.menu').fadeOut(400);

    $('.fries').eq(1).css({ 'opacity': '1', 'transform': 'none' });
    $('.fries').eq(0).css({ 'transform': 'none' });
    $('.fries').eq(2).css({ 'transform': 'none' });
  }

  let handleMenu = () => {
    if ($('.side-menu').css('left') == "0px") {
      closeMenu();
    } else {
      openMenu();
    }
  }
  return (
    <main>
      <div className="content">
        <section className='hero' id='home'>
          <div className='hero-grid'>
            <div>
              <img src='hero.gif' />
            </div>
            <div>
              <h1>
                Hey,<br />I'm <ReactTyped
                  strings={[
                    "Jainam.",
                    "Tech Enthusiast.",
                    "From India."
                  ]}
                  typeSpeed={80}
                  backSpeed={40}
                  showCursor={false}
                  loop
                /> 
              </h1>
              <a href='#projects' className='btn'>Explore Projects<FontAwesomeIcon style={{ marginLeft: '8px' }} icon={faArrowRight} /></a>
            </div>
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
      <div className='nav-icon'><a href='/'>jpdoshi.</a></div>
      <div className='menu-icon' onClick={() => handleMenu()}>
        <div className='fries'></div>
        <div className='fries'></div>
        <div className='fries'></div>
      </div>
    </main>
  )
}

export default App
