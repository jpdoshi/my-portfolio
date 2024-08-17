import React from 'react'

const IntroSection = () => {
  return (
    <section id='intro'>
      <h1 className='section-heading'>Welcome</h1>
      <h2>Hey, I am Jainam Doshi!</h2>
      <p>Hello there! I am Jainam P. Doshi, Tech Enthusiast from India 🇮🇳. 💻 I love to design cool apps with latest tech.</p>
      <br />
      <p>I am tech enthusiast and CS & IT student, who loves to make innovative projects 💡. I believe in self-learning and have fond of mobile development. I enjoy building APIs with NodeJS and mobile apps with Flutter and seamless API integration 🚀. Feel free to refer to my github projects and follow if you find my work helpful. 😉</p>
      <br />
      <p>Here's the link to <a href="https://github.com/jpdoshi" target='_blank'>My Github profile</a>. All my projects are open source, so be sure to check them out. You can always connect with me through E-mail.</p>
      <br /><br />
      <h2>Favorite Tech</h2>
      <div className='icons'>
        <a href='https://unity.com/' target='_blank'><img src="/icons/unity.png" alt="unity" /></a>
        <a href='https://flutter.dev/' target='_blank'><img src="/icons/flutter.png" alt="flutter" /></a>
        <a href='https://react.dev/' target='_blank'><img src="/icons/react.png" alt="react" /></a>
        <a href='https://nodejs.org/en' target='_blank'><img src="/icons/node.png" alt="node" /></a>
        <a href='https://www.djangoproject.com/' target='_blank'><img src="/icons/django.png" alt="django" /></a>
        <a href='https://www.mongodb.com/' target='_blank'><img src="/icons/mongodb.png" alt="mongodb" /></a>
        <a href='https://git-scm.com/' target='_blank'><img src="/icons/git.png" alt="git" /></a>
        <a href='https://en.wikipedia.org/wiki/Linux' target='_blank'><img src="/icons/linux.png" alt="linux" /></a>
      </div>
      <br />
      <p>Above mentioned is the <code>tech stack</code> I love most to work with, for personal and/or work-related projects.</p>
      <br /><br /><br />
      <a href='mailto:jpdoshi2811@gmail.com' target='_blank' className='btn'>Get in touch</a>
    </section>
  )
}

export default IntroSection