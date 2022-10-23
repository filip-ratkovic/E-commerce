import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ name, id, price, image }) {
    return (
        <div className="product-card">
            <div className="product-card-image">
                <img src={image} alt={name} />
                <div className="product-card-button">
                    <Link to={`/products/${id}`}><button>Click here</button></Link>
                </div>
            </div>
            <div className="product-card-text">
                <div className="product-card-name">
                    <p>{name}</p>
                </div>
                <div className="product-card-price">
                    <p id="price">${price / 100}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard