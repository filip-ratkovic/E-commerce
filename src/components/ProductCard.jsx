import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ name, id, price, image }) {
    return (
        
        <div className="product-card">
            <Link to={`/products/${id}`}>
                <div className="product-card-image">
                    <img src={image} alt={name} />
                    <div className="product-card-button">
                        <button >
                            <img src="https://img.icons8.com/external-becris-lineal-becris/64/FFFFFF/external-loupe-mintab-for-ios-becris-lineal-becris.png" />
                        </button>
                    </div>
                </div> </Link>
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