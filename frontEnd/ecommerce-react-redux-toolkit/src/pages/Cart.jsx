import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      {carts?.length > 0 ? (
        carts?.map((cart, i) => <CartComp key={i} cart={cart} />)
      ) : (
        <div>Cart is Empty</div>
      )}
      <div className="cart-totalAmount">
        SubTotal: <span>₺ {totalAmount.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Cart;
