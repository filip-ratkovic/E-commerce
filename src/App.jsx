import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Products from './components/Products'
import Cart from './components/Cart'
import Login from './components/Login'
import "./App.css"
import "./style/loading.css"
import "./style/products.css"


function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/korpa" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App