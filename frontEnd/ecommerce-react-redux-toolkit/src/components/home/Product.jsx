import React from 'react'

const Product = ({product}) => {
  return (
    <div className='product-card'>
      <div className="product-card-img"><img src={product?.image} alt={product?.title} /></div>
      <div className="product-card-desc">
        <h5>{product.title}</h5>
        <span>{product.price} TL</span>
      </div>

    </div>
  )
}

export default Product