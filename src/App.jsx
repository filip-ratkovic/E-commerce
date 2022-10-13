import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Products from './components/Products'
import Cart from './components/Cart'

import "./App.css"



function App() {
  return (
    <div>
      <Nav/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/korpa" element={<Cart/>} />

      </Routes>
    </div>
  )
}

export default App