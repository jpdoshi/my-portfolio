import React from 'react'
import TypeWriter from 'typewriter-effect'

const ProjectsSection = () => {
  return (
    <section id='projects'>
      <TypeWriter options={{
        strings: 'Projects',
        autoStart: true,
        loop: true,
        cursor: '_',
        wrapperClassName: 'section-heading',
        cursorClassName: 'section-heading'
      }}/>
      <br/>
    </section>
  )
}

export default ProjectsSection
