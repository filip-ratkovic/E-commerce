import React, { useState, useEffect } from 'react'

function ProductsImage({ product }) {
    const [imageSrc, setImageSrc] = useState("")

    let imgSrc = product && product.images[0].url;
    const imageHandler = (data) => {
        setImageSrc(data);
    }

    useEffect(() => {
        if (imgSrc) {
            setImageSrc(imgSrc);
        }
    }, [imgSrc])

    return (
        <div className="image-conteiner">
            <div className="single-product-image">
                <img src={product && imageSrc} alt={product && product.name} />
            </div>
            <div className="images-container">
                {product && product.images.map((image) => {
                    return <img src={image.url} id="small-image" alt={image.name}
                        onClick={(el) => {
                            imageHandler(el.target.src);
                            
                        }}
                    />
                })}
            </div>
        </div>
    )
}

export default ProductsImage