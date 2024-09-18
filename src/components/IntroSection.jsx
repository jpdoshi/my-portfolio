import React from 'react'
import TypeWriter from 'typewriter-effect'

import {
  UnityOriginalIcon,
  FlutterOriginalIcon,
  ReactOriginalIcon,
  NodejsOriginalIcon,
  DjangoPlainIcon,
  MongodbOriginalIcon,
  GitOriginalIcon,
  NeovimOriginalIcon,
  LinuxOriginalIcon
} from 'react-devicons'

const IntroSection = () => {
  return (
    <section id='intro'>
      <TypeWriter options={{
        strings: 'Welcome',
        autoStart: true,
        loop: true,
        cursor: '_',
        wrapperClassName: 'section-heading',
        cursorClassName: 'section-heading'
      }}/>
      <br />
      <h2>Hey, I am Jainam Doshi!</h2>
      <p>Hello there! I am Jainam P. Doshi, Software Developer from India 🇮🇳. I love to design cool apps with latest tech.</p>
      <br />
      <p>I am a software developer who loves to make innovative projects. I believe in self-learning and have fond of video game and software development. I enjoy building web apps with React and Node with seamless API integration 🚀. Feel free to refer to my github projects and follow if you find my work helpful. 😉</p>
      <br />
      <p>Here's the link to <a href="https://github.com/jpdoshi" target='_blank'>My Github profile</a>. All my projects are open source, so be sure to check them out. You can always connect with me through E-mail.</p>
      <br /><br />
      <h2>Favorite Tech</h2>
      <div className='icons'>
        <a href='https://unity.com/' target='_blank'><UnityOriginalIcon className='icon' /></a>
        <a href='https://flutter.dev/' target='_blank'><FlutterOriginalIcon className='icon' /></a>
        <a href='https://react.dev/' target='_blank'><ReactOriginalIcon className='icon' /></a>
        <a href='https://nodejs.org/en' target='_blank'><NodejsOriginalIcon className='icon' /></a>
        <a href='https://www.djangoproject.com/' target='_blank'><DjangoPlainIcon className='icon' /></a>
        <a href='https://www.mongodb.com/' target='_blank'><MongodbOriginalIcon className='icon' /></a>
        <a href='https://git-scm.com/' target='_blank'><GitOriginalIcon className='icon' /></a>
        <a href='https://neovim.io' target='_blank'><NeovimOriginalIcon className='icon' /></a>
        <a href='https://en.wikipedia.org/wiki/Linux' target='_blank'><LinuxOriginalIcon className='icon' /></a>
      </div>
      <br />
      <p>Above mentioned is the <code>tech stack</code> I love most to work with, for personal and/or work-related projects. I started my learning journey with Game development using Unity and C#. I primarily work with MERN stack for web projects, Though django is my favorite framework for full-stack web development.</p>
      <br />
      <p>While having keen interest in exploring various linux-based distros, I have experience of using it as my primary desktop operating system. There's much more to know about my tech journey, scroll down to explore more!</p>
      <br /><br />
      <a href='mailto:jpdoshi2811@gmail.com' target='_blank' className='btn'>Get in touch</a>
    </section>
  )
}

export default IntroSection
