import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
var korpa = [];

function Cart({ cartData, quantity,getCartNumber }) {
  const [counter, setCounter] = useState(quantity);
  const [cart, setCart] = useState(korpa);
  if (cartData === undefined) {
    return <div> Korpa je prazna.

<Link to="/products">
  <button className="cart-btn">Back shopping</button>
</Link>
    </div>
  }

  let postoji=0
   if(cart.length===0){
    cart.push(cartData)
   }
   else{
    for(var i=0;i<cart.length;i++){
     if(cart[i].id=== cartData.id){
      postoji++
     }
    }
    if(postoji===0){
      cart.push(cartData)
    }
   }

   let getCount = (data) => {
    setCounter(data)
   }

   getCartNumber(cart.length)

   const removeCart = (id) => {
    const newCart = cart.filter((carts) =>  carts.id !== id);
    console.log(newCart);
    setCart(newCart);
    korpa = newCart;
}
if(cart.length === 0) {
  return <div>prazn</div>
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
        {cart.map((item) => {
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
                setCounter(
                   counter + 1)
              }}><h1>+</h1></button>
            </section>

            <section className="subtotal">
              <p>{counter * item.price / 100}</p>
            </section>
            <button className="delete-btn" onClick={()=>{
              removeCart(item.id)
            }}>
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