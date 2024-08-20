import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`products/${product?.id}`)} className='product-card'>
      <div className="product-card-img"><img src={product?.image} alt={product?.title} /></div>
      <div className="product-card-desc">
        <h5>{product.title}</h5>
        <span>₺ {product.price}</span>
      </div>

    </div>
  )
}

export default Product