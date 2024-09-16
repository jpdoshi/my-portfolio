import React from 'react'
import TypeWriter from 'typewriter-effect'

const PortfolioSection = () => {
  return (
    <section id='portfolio'>
      <TypeWriter options={{
        strings: 'My Portfolio',
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

export default PortfolioSection
