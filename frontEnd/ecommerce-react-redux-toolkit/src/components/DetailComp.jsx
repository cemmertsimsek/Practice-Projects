import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const increment = () => {
    if (quantity < productDetail?.rating?.count) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addItem = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        quantity: quantity,
        price: productDetail?.price,
      })
    );
  };
  return (
    <div className="product-detail">
      <div className="product-card">
        <h5>{productDetail.category}</h5>
        <img src={productDetail.image} alt={productDetail.title} />
      </div>
      <div className="product-description">
        <h4>{productDetail.title}</h4>
        <span className="product-rate">
          {productDetail?.rating?.rate} &#9733;
        </span>
        <p>{productDetail.description}</p>
        <span className="count">Count: {productDetail?.rating?.count}</span>
        <span className="product-price">₺ {productDetail.price}</span>
        <div className="product-count">
          <div onClick={decrement}>-</div>
          <input className="product-counter" type="text" value={quantity} />
          <div onClick={increment}>+</div>
        </div>
        <div className="slider-btn">
          <button onClick={addItem} className="btn-dark">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
