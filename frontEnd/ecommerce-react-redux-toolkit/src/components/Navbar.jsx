import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
const Navbar = () => {
  return (
    <header>
      <div className="nav-logo">MyShop</div>
      <div className="nav-items">
        <div className="searchbar">
            <input type="text" placeholder="Search..." />
            <IoIosSearch className="search-icon" />
        </div>
        <IoIosHeartEmpty />
        <div className="cart-icon">
          <FiShoppingCart />
          <div className="item-count">
              <p>3</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
