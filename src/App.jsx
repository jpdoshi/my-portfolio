import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery'

const App = () => {
  let openMenu = () => {
    $('body').css('overflow-y', 'hidden');
    $('.side-menu').animate({left: '0%'}, 250);
    $('.menu').delay(250).fadeIn(500);

    $('.fries').eq(1).css({'opacity': '0', 'transform': 'translateX(1rem)'});
    $('.fries').eq(0).css({'transform': 'translateY(9px) rotate(45deg)'});
    $('.fries').eq(2).css({'transform': 'translateY(-9px) rotate(-45deg)'});
  }

  let closeMenu = () => {
    $('body').css('overflow-y', 'auto');
    $('.side-menu').animate({left: '100%'}, 250);
    $('.menu').fadeOut(250);

    $('.fries').eq(1).css({'opacity': '1', 'transform': 'none'});
    $('.fries').eq(0).css({'transform': 'none'});
    $('.fries').eq(2).css({'transform': 'none'});
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
          <div className='hero-content'>
            <h1>Hi, I'm <span id='label'>Jainam.</span></h1>
            <p>
              I am CS & IT student and enthusiast, who loves to build innovative projects. I believe in self-learning and have fond of research and development in field of CS and IT. I enjoy designing UI/UX as well as business logic, algorithms and data related stuff.
            </p>
            <a href='#projects' className='btn'>Explore Projects<FontAwesomeIcon style={{marginLeft: '8px'}} icon={faArrowRight} /></a>
          </div>
          <img src='radiohalo.gif'/>
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
    <div className='nav-icon'>jpdoshi.</div>
    <div className='menu-icon' onClick={() => handleMenu()}>
      <div className='fries'></div>
      <div className='fries'></div>
      <div className='fries'></div>
    </div>
    </main>
  )
}

export default App
