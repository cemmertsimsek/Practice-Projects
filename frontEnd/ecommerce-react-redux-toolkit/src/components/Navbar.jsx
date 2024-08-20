import React, { useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch()
  const {carts, itemCount} = useSelector(state => state.carts)

  const navigate = useNavigate()
  let totalItem = carts.map(cart => {
    let quantity =+ cart.quantity
    return quantity
  }).reduce((a,b)=> a+b, 0)

  useEffect(()=> {
    dispatch(getCartTotal())
    
  },[dispatch, carts])
  return (
    <header>
      <div className="nav-logo" onClick={()=> navigate("/")}>MyShop</div>
      <div className="nav-items">
        <div className="searchbar">
            <input type="text" placeholder="Search..." />
            <IoIosSearch className="search-icon" />
        </div>
        <IoIosHeartEmpty />
        <div className="cart-icon" onClick={() => navigate("cart")}>
          <FiShoppingCart />
          <div className="item-count">
              <p>{totalItem}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
