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
import SingleProductPage from './components/SingleProductPage'


function App() {
  const [productsData, setProductData] = useState([]);

  const getProductsData = (data) => {
    setProductData(data)
    console.log(data);
  }
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products getProductsData={getProductsData}/>} />
        <Route path="/korpa" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        {productsData.map((singleProduct) => {
        return <Route path={`/products/${singleProduct.id}`} 
        element={<SingleProductPage singleProductId={singleProduct.id} />} />
      })}
      </Routes>
    </div>
  )
}

export default App