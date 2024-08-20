import React, { useEffect, useState } from "react";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartComp = ({ cart }) => {
    const dispatch = useDispatch()
    
    const [quantity, setQuantity] = useState(cart?.quantity);

    const increment = () => {
        if (cart?.id && cart?.title && cart?.image && cart?.price) {
          const newQuantity = quantity + 1;
          setQuantity(newQuantity);
          dispatch(
            addToCart({
              id: cart.id,
              title: cart.title,
              image: cart.image,
              quantity: 1,
              price: cart.price,
            })
          );
        } else {
          console.error("Product details are incomplete:", cart);
        }
      };
      
      const decrement = () => {
        if (quantity > 0) {
          if (cart?.id && cart?.title && cart?.image && cart?.price) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            dispatch(
              addToCart({
                id: cart.id,
                title: cart.title,
                image: cart.image,
                quantity: -1,
                price: cart.price,
              })
            );
          } else {
            console.error("Product details are incomplete:", productDetail);
          }
        }
      };
      
      
  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={cart?.image} alt={cart?.title} />
      </div>
      <div className="cart-item-description">
        <div>
            <h4>{cart?.title}</h4>
            <span className="cart-item-quantity">Quantity: {cart?.quantity}</span>
            <span className="cart-item-price">₺ {cart?.price}</span>
        </div>
        <div className="product-count">
          <div onClick={()=> decrement()}>-</div>
          <input className="product-counter" type="text" value={quantity} />
          <div onClick={()=> increment()}>+</div>
        </div>
        <button className="cart-item-del-btn" onClick={()=> dispatch(removeFromCart(cart?.id))}>Delete</button>
      </div>
    </div>
  );
};

export default CartComp;
