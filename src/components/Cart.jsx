import React from 'react'
import { useState } from 'react'
var korpa = [];

function Cart({ cartData, quantity }) {
  const [counter, setCounter] = useState(quantity);
console.log(korpa);
  if (cartData == undefined) {
    return <div>prazno</div>
  }

  let postoji=0
   if(korpa.length===0){
    korpa.push(cartData)
   }
   else{
    for(var i=0;i<korpa.length;i++){
     if(korpa[i].id=== cartData.id){
      postoji++
     }
    }
    if(postoji===0){
      korpa.push(cartData)
    }
   }

  
  return (
    <main className="cart-main">
      <header className="cart-header">
        <p>Item</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </header>
      <div className="cart-items">
        {korpa.map((item) => {
          return <div className="cart-product">
            <section className="image-section">
              <img src={item.images[0].url} alt={item.name} />
              <div className="cart-name">
                <p>{item.name}</p>
              </div>
            </section>

            <section className="price">
              <p>${item.price / 100}</p>
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
              <p>{counter * item.price / 100}</p>
            </section>
            <button className="delete-btn">
              <img src="https://img.icons8.com/ios-glyphs/25/000000/delete-forever.png" />
            </button>
          </div>
        })}

      </div>
      <div className="buttons">
        <button className="continue"></button>
        <button className="clear-cart"></button>
      </div>

    </main>
  )
}

export default Cart