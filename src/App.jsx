import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery'

const App = () => {
  let openMenu = () => {
    $('body').css('overflow-y', 'hidden');
    $('.menu-icon').fadeOut(400);
    $('.close-icon').fadeIn(400);
    $('.side-menu').animate({left: '0%'}, 400);
    $('.menu').delay(400).fadeIn(200);
  }

  let closeMenu = () => {
    $('body').css('overflow-y', 'auto');
    $('.menu-icon').fadeIn(400);
    $('.close-icon').fadeOut(400);
    $('.side-menu').animate({left: '100%'}, 400);
    $('.menu').fadeOut(400);
  }
  return (
    <main>
    <div className="content">
      <section className='hero'>
        <div className='center'>
          <h1>Hi, I am <span className='subject-title'>Jainam.</span></h1>
          <p>
          I am CS & IT student and enthusiast, who loves to build innovative projects 💡. I believe in self-learning and have fond of research and development in field of CS and IT. I enjoy designing UI/UX as well as business logic, algorithms and data related stuff 🚀. Feel free to refer to my github projects.
          </p>
          <ul>
            <li><a href='https://in.linkedin.com/in/jainam-doshi-24063a2a0' style={{color: '#1976d2'}}><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href='https://github.com/jpdoshi' style={{color: 'black'}}><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href='https://www.instagram.com/_jpdoshi/' style={{color: '#e91e63'}}><FontAwesomeIcon icon={faInstagram} /></a></li>
          </ul>
        </div>
      </section>
    </div>
    <div className="side-menu">
      <div className="menu">
        <ul>
          <li><a href='#hero'>HOME</a></li>
          <li><a href='#projects'>PROJECTS</a></li>
          <li><a href='#about'>ABOUT</a></li>
          <li><a href='#contact'>CONTACT</a></li>
        </ul>
      </div>
    </div>
    <FontAwesomeIcon icon={faClose} className='close-icon' onClick={() => closeMenu()} />
    <FontAwesomeIcon icon={faBars} className='menu-icon' onClick={() => openMenu()} />
    </main>
  )
}

export default App
