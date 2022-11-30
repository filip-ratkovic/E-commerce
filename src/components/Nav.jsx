import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from "../photo/logo.png"


function Nav({cartNumber}) {
  const [homeActive, setHomeActive] = useState(true);
  const [productsActive, setProductsActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleHomeClick = event => {
    if (homeActive) {
      setToggleMenu(!toggleMenu)   
    } else {
      setHomeActive(curent => !curent);
      setProductsActive(false)
      setCartActive(false);
      setLoginActive(false);
      setToggleMenu(!toggleMenu)   
     }
  }

  const handleProductsClick = event => {
    if (productsActive) {
      setToggleMenu(!toggleMenu)   

    } else {
      setProductsActive(curent => !curent);
      setHomeActive(false)
      setCartActive(false);
      setLoginActive(false);
      setToggleMenu(!toggleMenu)   
    }
  }

  const handleCartClick = event => {
    if (cartActive) {
      setToggleMenu(!toggleMenu)   

    } else {
      setCartActive(curent => !curent);
      setHomeActive(false)
      setProductsActive(false);
      setLoginActive(false);
      setToggleMenu(!toggleMenu)   
    }
  }

  const handleLoginClick = event => {
    
    if (loginActive) {
      setToggleMenu(!toggleMenu)   

    } else {
      setLoginActive(curent => !curent);
      setHomeActive(false)
      setCartActive(false);
      setProductsActive(false);
      setToggleMenu(!toggleMenu)   
    }
  }

  const handleToggle = () => {
      setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
  }
  }, [])




  return (
    <nav>
       <div className="nav-logo">
          <img src={logo} alt="logo" style={{ width: "100px" }} />
        </div>
    {(toggleMenu || screenWidth > 550) && (
       <div className="nav-cont">
      
  
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
            <div className="nav-cart-num">{cartNumber}</div>
          </Link></div>
          <div className='nav-login'><Link to="/login">
            <span className={`${loginActive ? "nav-active" : ""}`} onClick={handleLoginClick}>Login</span>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png" alt="login" />
          </Link></div>
        </div>
  
       </div>
    )}
     <button className="nav-btn" onClick={handleToggle}>
      <img style={{ width:"30px"}} 
      src="https://img.icons8.com/ios-filled/50/null/menu-rounded.png"
      alt="btn"/>
    
      </button>
    </nav>
  )
}

export default Nav