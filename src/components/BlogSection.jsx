import React from 'react'
import TypeWriter from 'typewriter-effect'

const BlogSection = () => {
  return (
    <section id='blog'>
      <TypeWriter options={{
        strings: 'Explore Blog',
        autoStart: true,
        loop: true,
        cursor: '_',
        wrapperClassName: 'section-heading',
        cursorClassName: 'section-heading'
      }}/>
      <br />
    </section>
  )
}

export default BlogSection
