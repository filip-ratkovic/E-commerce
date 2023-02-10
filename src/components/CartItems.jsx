import React , {useState} from 'react'
var korpa = []

function CartItems(props) {
    const {item,quantity} = props;
    const [counter, setCounter] = useState(quantity);
    const [product, setProduct] = useState(item);
  return (
    <div className="cart-product">
            <section className="image-section">
              <img src={product.images[0].url} alt={product.name} />
              <div className="cart-name">
                <p>{product.name}</p>
              </div>
            </section>

            <section className="price">
              <p>${product.price / 100}</p>
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
              <p>{counter * product.price / 100}</p>
            </section>
            {/* <button className="delete-btn" onClick={()=>{
              removeCart(product.id)
            }}>
              <img src="https://img.icons8.com/ios-glyphs/25/000000/delete-forever.png" />
            </button> */}
          </div>
  )
}

export default CartItems