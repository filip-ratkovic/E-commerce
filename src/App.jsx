import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Products from './components/Products'
import Cart from './components/Cart'
import Login from './components/Login'
import "./App.css"
import "./style/loading.css"
import "./style/products.css"
import "./style/singleProduct.css"
import "./style/aside.css"
import "./style/cart.css"
import "./style/home.css"
import SingleProductPage from './components/SingleProductPage'


function App() {
  const [productsData, setProductData] = useState([]);
  const [cartData, setCartData] = useState();
  const [quantity, setQuantity] = useState();
  const [cartNumber, setCartNumber] = useState(0);

  const addToCart = (data) => {
    setCartData(data)
  }

  const getCartNumber = (data) => {
    setCartNumber(data)
  }

  const quantityData = (data) => {
    setQuantity(data)
  }


  const getProductsData = (data) => {
    setProductData(data)
  }
  return (
    <div>
      <Nav cartNumber = {cartNumber}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products getProductsData={getProductsData}/>} />
        <Route path="/korpa" element={<Cart cartData={cartData} quantity={quantity} getCartNumber={getCartNumber}/>} />
        <Route path="/login" element={<Login/>} />
        {productsData.map((singleProduct) => {
        return <Route path={`/products/${singleProduct.id}`} 
        element={<SingleProductPage singleProductId={singleProduct.id} addToCart={addToCart}
         quantityData={quantityData}  />} />
      })}
      </Routes>
    </div>
  )
}

export default App