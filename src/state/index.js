import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const getCartData = () => {
  const userId = JSON.parse(localStorage.getItem("userId"));
  let newCartData = JSON.parse(localStorage.getItem("cart"));
  if (newCartData !== null) {
    let cartData = newCartData.filter((item) => {
      return item.item.userId === userId;
    });

    if (cartData.length != 0) {
      return cartData;
    } else {
      return newCartData;
    }
  } else {
    return [];
  }
};
const initialState = {
  cart: getCartData(),
  items: [],
};

// const user = localStorage.getItem("user");
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      const userId = JSON.parse(localStorage.getItem("userId"));
      const newItem = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) =>
          item.item.id === newItem.item.id &&
          item.item.size === newItem.item.size &&
          item.item.userId === userId
      );
      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].item.count++;
      } else {
        const newId = Date.now() + Math.random() * 100;
        const newCartItem = {
          ...newItem,
          item: {
            ...newItem.item,
            cartId: newId,
            userId: JSON.parse(localStorage.getItem("userId")),
          },
        };
        state.cart.push(newCartItem);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.item.cartId !== action.payload.cartId
      );
      console.log(action.payload.cartId);
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.item.cartId === action.payload.cartId) {
          item.item.count++;
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.item.cartId === action.payload.cartId && item.item.count > 1) {
          item.item.count--;
        }
        return item;
      });
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
} = cartSlice.actions;

export default cartSlice.reducer;
