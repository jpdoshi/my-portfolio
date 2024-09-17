import React from 'react'

const FooterSection = () => {
  return (
    <footer>
      <hr color='#4C566A' style={{ height: '3px' }} />
      <p>Made with &#10084; by Jainam P Doshi &#169; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default FooterSection