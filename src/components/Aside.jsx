import React, { useEffect, useState } from 'react'
import { useMemo } from 'react';

function Aside() {
  const [priceValue, setPriceValue] = useState(0);
  const inputValue = document.getElementById('price')

  return (
    <div className="aside">
      <input type="search" name="search" id="search" placeholder="Search" />
      <div className="category">
        <h3>Category</h3>
        <ul>
          <li className="active-list">All</li>
          <li>Office</li>
          <li>Living room</li>
          <li>Kitchen</li>
          <li>Badroom</li>
          <li>Dining</li>
          <li>Kids</li>
        </ul>
      </div>
      <div className="company">
      <h3>Company</h3>
        <select name="company">
          <option value="all">All</option>
          <option value="marcos">Marcos</option>
          <option value="ikea">Ikea</option>
          <option value="liddy">Liddy</option>
        </select>
      </div>
      <div className="price">
      <h3>Price</h3>
        <form action="price">
          <p>${priceValue} </p>
          <label htmlFor="price">Price</label>
          <input type="range" name="price" id="price" min="0" max="3100"/>
        </form>
      </div>
      <div className="free-shipping">
        <label htmlFor="free">Free shipping</label>
        <input type="checkbox" name="freeShipping"/>
      </div>
      <div className="clear-filters">
        <button>Clear filters</button>
      </div>
    </div>
  )
}

export default Aside