import React, { useState } from 'react'

function Aside() {
  const [priceValue, setPriceValue] = useState(3100);

  const handlePriceValue = (data) => {
    setPriceValue(data);
  }
 

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
          <input type="range" name="price" id="price" max="3100" min="0" value={priceValue}
            onChange={(el) => {
              setPriceValue(el.target.value)
            }} />
        </form>
      </div>
      <div className="free-shipping">
        <label htmlFor="free">Free shipping</label>
        <input type="checkbox" name="freeShipping" />
      </div>
      <div className="clear-filters">
        <button>Clear filters</button>
      </div>
    </div>
  )
}

export default Aside