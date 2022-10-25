import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SingleProductPage({ singleProductId }) {
    const productId = singleProductId;
    const [product, setProduct] = useState();
    const [counter, setCounter] = useState(1);

    const getSingleProduct = async () => {
        const url = `https://course-api.com/react-store-single-product?id=${productId}`;
        const response = await axios.get(url);
        setProduct(response.data);
    }


    useEffect(() => {
        getSingleProduct();
    }, [])



    return (
        <main className="single-product-container">
            <div className="single-product-back">
                <Link to="/products"><button>BACK TO PRODUCTS</button></Link>
            </div>

            <div className="single-product-card">
                <div className="image-conteiner">
                    <div className="single-product-image">
                        <img src={product && product.images[0].url} alt={product && product.name} />
                    </div>
                    <div className="images-container"></div>
                </div>

                <div className="single-product-text">
                    <h1>{product && product.name.toUpperCase()}</h1>
                    <div className="single-product-reviews">
                        <p>*****</p>
                    </div>
                    <h4 id="single-price">${product && product.price / 100}</h4>
                    <br />
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