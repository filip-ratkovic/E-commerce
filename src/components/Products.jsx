import React, { useEffect, useState } from 'react'
import Aside from './Aside';
import Loading from './Loading';
import ProductCard from './ProductCard';
const url = "https://course-api.com/react-store-products"
function Products({ getProductsData }) {
  const [productsData, setProductData] = useState();
  const [loading, setLoading] = useState(true);
  const [priceValue, setPriceValue] = useState(3100);
  const [companyValue, setCompanyValue] = useState("all");
  const [categoryValue, setCategoryValue] = useState("all");
  const [shipping, setShipping] = useState(false);


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
      {/* <Aside /> */}


      <div className="aside">
        <input type="search" name="search" id="search" placeholder="Search" />
        <div className="category">
          <h3>Category</h3>
          <ul onClick={(el) => {
            setCategoryValue(el.target.innerText)
          }}>
            <li>All</li>
            <li >Office</li>
            <li>Living room</li>
            <li>Kitchen</li>
            <li>Badroom</li>
            <li>Dining</li>
            <li>Kids</li>
          </ul>
        </div>
        <div className="company">
          <h3>Company</h3>
          <select name="company" onChange={(el) => {
            setCompanyValue(el.target.value)
          }}>
            <option value="all">All</option>
            <option value="marcos">Marcos</option>
            <option value="ikea">Ikea</option>
            <option value="liddy">Liddy</option>
          </select>
        </div>
        <div className="price">
          <h3>Price</h3>
          <form action="price">
            <p>${priceValue} </p>
            <input type="range" name="price" id="price" max="3100" min="0" value={priceValue}
              onChange={(el) => {
                setPriceValue(el.target.value)
              }} />
          </form>
        </div>
        <div className="free-shipping">
          <label htmlFor="free">Free shipping</label>
          <input type="checkbox" name="freeShipping"
              onChange={(el) => {
                setShipping(el.target.checked)
            }} />
        </div>
        <div className="clear-filters">
          <button onClick={() => {
            setPriceValue(3100)
            setCategoryValue("all")
            setCompanyValue("all")
            setShipping(false)
          }}>Clear filters</button>
        </div>
      </div>

      {/* aside aside L */}




      <div className="product-container">
        <div className="product-top">
          <div className="product-left">
            <div className="product-icons">
              <img src="https://img.icons8.com/ios/50/228BE6/squared-menu.png" />
              <img src="https://img.icons8.com/fluency/48/000000/menu-rounded.png" />
            </div>
            <div className="products-found">
              <p>{productsData.length} products found</p>
            </div>
          </div>

        </div>
        <div className='product-content'>
          {
            productsData.map((product) => {
              if (product.price < priceValue * 100 &&
                (product.company === companyValue || companyValue === "all") &&
                (product.category === categoryValue.toLocaleLowerCase() || categoryValue.toLocaleLowerCase() === "all") &&
                (product.shipping === true || shipping === false)
              ) {
                return <ProductCard key={product.id} {...product} />
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Products