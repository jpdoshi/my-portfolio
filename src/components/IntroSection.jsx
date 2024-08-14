import React from 'react'

const IntroSection = () => {
  return (
    <section id='intro'>
      <h1 className='section-heading'>Welcome</h1>
      <h2>Hey, I am Jainam Doshi</h2>
      <p>Hello there, I am Jainam P. Doshi, Tech Enthusiast from India 🇮🇳. I love to create innovative apps</p>
      <br /><br />
      <h2>Favorite Tech</h2>
      <div className='icons'>
        <img src="/icons/flutter.png" alt="flutter" />
        <img src="/icons/node.png" alt="flutter" />
        <img src="/icons/python.png" alt="flutter" />
        <img src="/icons/mongodb.png" alt="flutter" />
        <img src="/icons/git.png" alt="flutter" />
        <img src="/icons/linux.png" alt="flutter" />
      </div>
      <br /><br /><br />
      <a href='mailto:jpdoshi2811@gmail.com' target='_blank' className='btn'>Get in touch</a>
    </section>
  )
}

export default IntroSection