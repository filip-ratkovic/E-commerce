import React from 'react'


function Cart({cartData, quantity}) {
console.log(cartData)
  return (
    <div>
      <h1>{cartData && cartData.name}</h1>
      <p>{1 && quantity}</p>
       </div>
  )
}

export default Cart