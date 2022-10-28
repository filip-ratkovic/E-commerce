import React from 'react'


function Cart({cartData, quantity}) {
  console.log(cartData)
  console.log(quantity)
  return (
    <div>
      <h1>{cartData.name}</h1>
      <p>{quantity}</p>
       </div>
  )
}

export default Cart