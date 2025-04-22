import React, { useEffect, useState } from 'react'
import Product from './Product'

const Appproduct = () => {

  let [products, setProducts] = useState([]);

  let getProduct = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((datas) => {
        setProducts(datas.products);
        console.log(datas.products)
      }).catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>


      <Product pr={products} />
    </div>
  )
}

export default Appproduct;
