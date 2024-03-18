import { faArrowRight, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
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
        <div className='container'>
          <h1>Hi, I am <span className='subject-title'>Jainam.</span></h1>
          <p>
          I am CS & IT student and enthusiast, who loves to build innovative projects 💡. I believe in self-learning and have fond of research and development in field of CS and IT. I enjoy designing UI/UX as well as business logic, algorithms and data related stuff 🚀. Feel free to refer to my github projects.
          </p>
          <a className='btn' href='#projects'>Explore Projects<FontAwesomeIcon style={{marginLeft: '12px'}} icon={faArrowRight}/></a>
        </div>
      </section>

      <section className='hero'>
        <div className='container'>
          <h1>Hi, I am <span className='subject-title'>Jainam.</span></h1>
          <p>
          I am CS & IT student and enthusiast, who loves to build innovative projects 💡. I believe in self-learning and have fond of research and development in field of CS and IT. I enjoy designing UI/UX as well as business logic, algorithms and data related stuff 🚀. Feel free to refer to my github projects.
          </p>
          <a className='btn' href='#projects'>Explore Projects<FontAwesomeIcon style={{marginLeft: '12px'}} icon={faArrowRight}/></a>
        </div>
      </section>

      <section className='hero'>
        <div className='container'>
          <h1>Hi, I am <span className='subject-title'>Jainam.</span></h1>
          <p>
          I am CS & IT student and enthusiast, who loves to build innovative projects 💡. I believe in self-learning and have fond of research and development in field of CS and IT. I enjoy designing UI/UX as well as business logic, algorithms and data related stuff 🚀. Feel free to refer to my github projects.
          </p>
          <a className='btn' href='#projects'>Explore Projects<FontAwesomeIcon style={{marginLeft: '12px'}} icon={faArrowRight}/></a>
        </div>
      </section>
    </div>
    <div className="side-menu">
      <div className="menu">
        <h1>Nav Menu</h1>
      </div>
    </div>
    <FontAwesomeIcon icon={faClose} className='close-icon' onClick={() => closeMenu()} />
    <FontAwesomeIcon icon={faBars} className='menu-icon' onClick={() => openMenu()} />
    </main>
  )
}

export default App
