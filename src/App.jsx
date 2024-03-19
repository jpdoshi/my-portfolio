import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBarsStaggered, faClose, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery'

const App = () => {
  let openMenu = () => {
    $('body').css('overflow-y', 'hidden');
    $('.menu-icon').fadeOut(250);
    $('.close-icon').fadeIn(500);
    $('.side-menu').animate({left: '0%'}, 250);
    $('.menu').delay(300).fadeIn(400);
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
      <section className='hero'>
        <h1>Hi, I'm <span>Jainam.</span></h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam debitis exercitationem accusamus soluta, voluptatem explicabo nisi rerum in at architecto iusto repellendus eaque dolor dignissimos consectetur reiciendis odio quam dolores. Ab dolor deserunt, quas earum corporis vel ratione, nostrum incidunt consequuntur enim excepturi inventore placeat accusantium eius dolore veritatis alias!</p>
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
