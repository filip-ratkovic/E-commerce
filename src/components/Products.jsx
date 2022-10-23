import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import ProductCard from './ProductCard';
const url = "https://course-api.com/react-store-products"
function Products() {
  const [productsData, setProductData] = useState();
  const [loading, setLoading] = useState(true);


const fetchProductsData = async () => {
  setLoading(true);
        try {
            const response = await fetch(url);
            const productData = await response.json();
            setLoading(true);
            setProductData(productData);
            console.log(productData)
        } catch (error) {
            setLoading(true);
            console.log(error);
        }
}

useEffect(() => {
fetchProductsData();
},[])

if (loading) {
  return (
      <main>
          <Loading/>
      </main>
  )
}
  return (
<div className='product-content'>
         {
          productsData.map((product) => {
         return <ProductCard key={product.id} {...product}/>
         })
          }
        </div>  )
}

export default Products