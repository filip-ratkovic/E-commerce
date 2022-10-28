import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SingleProductReviews from './SingleProductReviews';
import ProductsImage from './ProductsImage';

function SingleProductPage({ singleProductId, addToCart, quantityData }) {
    const productId = singleProductId;
    const [product, setProduct] = useState();
    const [counter, setCounter] = useState(1);

    const getSingleProduct = async () => {
        const url = `https://course-api.com/react-store-single-product?id=${productId}`;
        const response = await axios.get(url);
        setProduct(response.data);
        console.log(response.data)
        addToCart(response.data);
    }


    useEffect(() => {
        getSingleProduct();
    }, [])

    quantityData(counter)

    return (
        <main className="single-product-container">
            <div className="single-product-back">
                <Link to="/products"><button>BACK TO PRODUCTS</button></Link>
            </div>

            <div className="single-product-card">
                <ProductsImage product={product}/>

                <div className="single-product-text">
                    <h1>{product && product.name.toUpperCase()}</h1>
                    <SingleProductReviews reviews = {product && product.reviews} star = {product &&  product.stars}/>
                    <h4 id="single-price">${product && product.price / 100}</h4>
                    <p id="single-description">{product && product.description}</p>
                    <div className="single-left">
                        <div className="single-text-left">
                            <h4>Available:</h4>
                        </div>
                        <p>{product && product.stock}</p>
                    </div>

                    <div className="single-left">
                        <div className="single-text-left">
                            <h4>SKU:</h4>
                        </div>
                        <p>{product && product.id}</p>
                    </div>

                    <div className="single-left">
                        <div className="single-text-left">
                            <h4>Brand:</h4>
                        </div>
                        <p>{product && product.company}</p>
                    </div>
                    <div className="single-border"></div>

                    <div className="single-quantity">
                        <button onClick={() => {
                            if (counter < 2) {
                                counter = 1;
                            }
                            setCounter(counter - 1)
                        }}><h1>-</h1></button>

                        <h1>{counter}</h1>

                        <button onClick={() => {

                            setCounter(counter + 1)
                        }}><h1>+</h1></button>                        </div>
                    <Link to="/Korpa"><button className="add-to-cart">Add to cart</button></Link>

                </div>
            </div>
        </main>
    )
}

export default SingleProductPage