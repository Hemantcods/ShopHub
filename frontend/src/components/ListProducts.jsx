import React from 'react'
import ProductCard from './ProductCard'

function ListProducts({ products }) {
    // product with prooduct array with product id
  return (
    <div className='flex grid-cols-4 grid-auto-flow-row gap-4 '>
        {console.log(products)}
        {products.map((product) => (
            <ProductCard key={product.name} {...product} />
        ))}
    </div>
  )
}

export default ListProducts