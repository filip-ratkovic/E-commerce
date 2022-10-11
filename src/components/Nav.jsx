import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <div className="nav-logo">
        <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg" alt="logo" style={{ width: "150px" }} />
      </div>

      <div className="nav-name">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-cartLogin">
      <div className='nav-cart'><Link  to="/korpa"> Cart</Link></div>
      <div className='nav-login'><Link to="/login"> Login</Link></div>

      </div>

    </nav>
  )
}

export default Nav