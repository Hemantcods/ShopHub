import React from 'react'
import ProductCard from './ProductCard'

function ListProducts({ products,...props }) {
    // product with prooduct array with product id
  return (
    <div className=' grid grid-cols-4 grid-rows-4  gap-4 '>
        {console.log(products)}
        {products.map((product) => (
            <ProductCard key={product.name} {...product} {...props} className="h-30" />
        ))}
    </div>
  )
}

export default ListProducts