import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const App = () => {
  return (
    <>
    <div className="section-wrapper">
      <section className="hero">
        <h1>Hi, I am Jainam.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi excepturi doloribus cupiditate maxime nam quidem consectetur quasi dicta, magni voluptates esse explicabo id soluta saepe minus!</p>
        <a className="btn" href="#projects">Explore Projects</a>
      </section>
    </div>

    <div className="hamburger-menu">
      <div className="fries-wrapper">
        <div className="fries"></div>
        <div className="fries"></div>
      </div>
      <div className="menu-items">
        <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
        <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
      </div>
    </div>
    
    </>
  )
}

export default App
