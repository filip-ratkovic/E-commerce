import React, { useEffect, useState } from 'react'
import Aside from './Aside';
import Loading from './Loading';
import ProductCard from './ProductCard';
const url = "https://course-api.com/react-store-products"
function Products({ getProductsData }) {
  const [productsData, setProductData] = useState();
  const [loading, setLoading] = useState(true);


  const fetchProductsData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const productData = await response.json();
      setLoading(false);
      setProductData(productData);
      console.log(productData)
      getProductsData(productData)
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProductsData();
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <div className="product-page">
      <Aside/>
      <div className="product-container">
        <div className="product-top">
          <div className="product-left">
          <div className="product-icons">
          <img src="https://img.icons8.com/ios/50/228BE6/squared-menu.png"/>
          <img src="https://img.icons8.com/fluency/48/000000/menu-rounded.png"/>
          </div>
          <div className="products-found">
            <p>{productsData.length} products found</p>
          </div>
          </div>
          <div className="product-sort-by">
            <label htmlFor="">Sort by:</label>
            <select name="sort" id="sort">
            <option value="price-lowest">Price lowest</option>
            <option value="price-highest">Price highest</option>
            <option value="name-a">Name (a - z) </option>
            <option value="name-z">Name (z - a)</option>
            </select>
          </div>
        </div>
      <div className='product-content'>
        
        {
          productsData.map((product) => {
            return <ProductCard key={product.id} {...product} />
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Products