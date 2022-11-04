import React from 'react'
import { useState } from 'react'


function Cart({ cartData, quantity }) {
  console.log(cartData)
  const [counter, setCounter] = useState(quantity)
  return (
    <main className="cart-main">
      <header className="cart-header">
        <p>Item</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </header>
      <div className="cart-items">
        <div className="cart-product">
          <section className="image-section">
            <img src={cartData.images[0].url} alt={cartData.name} />
            <div className="cart-name">
              <p>{cartData.name}</p>
            </div>
          </section>

          <section className="price">
            <p>${cartData.price / 100}</p>
          </section>

          <section className="quantity">
            <button onClick={() => {
              if (counter < 2) {
                counter = 1;
              }
              setCounter(counter - 1)
            }}><h1>-</h1></button>

            <h1>{counter}</h1>

            <button onClick={() => {

              setCounter(counter + 1)
            }}><h1>+</h1></button>
          </section>

          <section className="subtotal">
            <p>{counter * cartData.price/ 100}</p>
          </section>

          <button className="delete-btn">
          <img src="https://img.icons8.com/ios-glyphs/25/000000/delete-forever.png"/>    
               </button>
        </div>
      </div>
    </main>
  )
}

export default Cart