import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const [homeActive, setHomeActive] = useState(true);
  const [productsActive, setProductsActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);


  const handleHomeClick = event => {
    if (homeActive) {
    } else {
      setHomeActive(curent => !curent);
      setProductsActive(false)
      setCartActive(false);
      setLoginActive(false);
    }
  }

  const handleProductsClick = event => {
    if (productsActive) {
    } else {
      setProductsActive(curent => !curent);
      setHomeActive(false)
      setCartActive(false);
      setLoginActive(false);
    }
  }

  const handleCartClick = event => {
    if (cartActive) {
    } else {
      setCartActive(curent => !curent);
      setHomeActive(false)
      setProductsActive(false);
      setLoginActive(false);
    }
  }

  const handleLoginClick = event => {
    if (loginActive) {
    } else {
      setLoginActive(curent => !curent);
      setHomeActive(false)
      setCartActive(false);
      setProductsActive(false);
    }
  }




  return (
    <nav>
      <div className="nav-logo">
        <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg" alt="logo" style={{ width: "150px" }} />
      </div>

      <div className="nav-name">
        <Link to="/" >
          <p className={`${homeActive ? "nav-active" : ""}`} onClick={handleHomeClick}>Home</p>
        </Link>
        <Link to="/products" >
          <p className={`${productsActive ? "nav-active" : ""}`} onClick={handleProductsClick}>Products</p>
        </Link>
      </div>

      <div className="nav-cartLogin">
        <div className='nav-cart'><Link to="/korpa">
          <span className={`${cartActive ? "nav-active" : ""}`} onClick={handleCartClick}>Cart</span>
          <img src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png" alt="cart" />
          <div className="nav-cart-num">0</div>
        </Link></div>
        <div className='nav-login'><Link to="/login">
          <span className={`${loginActive ? "nav-active" : ""}`} onClick={handleLoginClick}>Login</span>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png" alt="login" />
        </Link></div>

      </div>

    </nav>
  )
}

export default Nav