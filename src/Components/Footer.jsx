import React from 'react'

const Footer = () => {
  let footerStyle = {
    position:"absolute",
    top:"90vh",
    width: "100%"
  }
  return (
    <footer className='bg-dark text-light ' style={footerStyle}>
    <p className='text-center py-3'>Copyright &copy; devsbydiganta</p>
    </footer>
  )
}

export default Footer
