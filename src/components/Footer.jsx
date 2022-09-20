import React from 'react'

function Footer() {

    const footerYear = new Date().getFullYear();

  return (
    <footer className='footer'>
        <div className='footerContent'>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer