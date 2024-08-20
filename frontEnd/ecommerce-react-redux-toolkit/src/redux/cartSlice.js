import { createSlice } from "@reduxjs/toolkit";

const addToLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};
const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};
const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemAlreadyInCart = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (isItemAlreadyInCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQuantity = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQuantity + item.price;
            return {
              ...item,
              quantity: tempQuantity,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
        addToLocalStorage(state.carts);
      } else {
        state.carts.push(action.payload);
        addToLocalStorage(state.carts);
      }
    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload);
      state.carts = tempCart;
      addToLocalStorage(state.carts);
    },
    clearCart: (state) => {
      state.carts = [];
      addToLocalStorage(state.carts);
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.price * cartItem.quantity);
      }, 0);
      state.itemCount = state.carts.length;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
