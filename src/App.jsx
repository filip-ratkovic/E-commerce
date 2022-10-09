import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Contact from './components/Contact'
import Products from './components/Products'
import "./App.css"



function App() {
  return (
    <div>
      <Nav/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App