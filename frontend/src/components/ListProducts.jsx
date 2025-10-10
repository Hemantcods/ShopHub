import React from 'react'
import ProductCard from './ProductCard'

function ListProducts({ products }) {
    // product with prooduct array with product id
  return (
    <div className='flex'>
        {console.log(products)}
        {products.map((product) => (
            <ProductCard key={product.name} {...product}/>
        ))}
    </div>
  )
}

export default ListProducts