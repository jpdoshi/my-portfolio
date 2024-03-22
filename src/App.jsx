import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery'
import { ReactTyped } from 'react-typed'

const App = () => {
  let openMenu = () => {
    $('body').css('overflow-y', 'hidden');
    $('.side-menu').animate({ left: '0%' }, 250);
    $('.menu').delay(250).fadeIn(250);

    $('.fries').eq(1).css({ 'opacity': '0', 'transform': 'translateX(1rem)' });
    $('.fries').eq(0).css({ 'transform': 'translateY(9px) rotate(45deg)' });
    $('.fries').eq(2).css({ 'transform': 'translateY(-9px) rotate(-45deg)' });
  }

  let closeMenu = () => {
    $('body').css('overflow-y', 'auto');
    $('.side-menu').animate({ left: '100%' }, 250);
    $('.menu').fadeOut(250);

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
                  typeSpeed={60}
                  backSpeed={20}
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
            <li><a href='#home'>Home</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#contact'>Contact</a></li>
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
