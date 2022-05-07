import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = {
  price: 0,
  size: 0,
  quantity: 1,
  isOpenModal: false,
  extras: [],
  prices: [],
  item: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    reduxSetOpen: (state, action) => {
      state.isOpenModal = action.payload;
    },
    reduxSelectedProduct: (state, action) => {
      state.isOpenModal = true;
      state.item = action.payload;
      if (action.payload.product === "pizza") {
        state.size = 0;
        state.prices = action.payload.prices;
        state.price = action.payload.prices[0];
      } else {
        state.price = action.payload.price;
      }
      console.log(current(state), "current state");
    },
    reduxHandleSize: (state, action) => {
      const difference =
        state.prices[action.payload] - state.prices[state.size];
      state.price = state.price + difference;
      state.size = action.payload;
      // console.log(current(state), "current state");
    },
    reduxHandleChange: (state, action) => {
      const newExtra = action.payload.extras;
      const existingExtra = state.extras.find(
        (item) => item.text === newExtra.text
      );
      if (!existingExtra) {
        state.extras.push(newExtra);
      } else {
        state.extras = state.extras.filter(
          (extra) => extra.text !== existingExtra.text
        );
      }
      state.price = state.price + action.payload.price;
      // console.log(current(state), "current state");
    },
    reduxChangeQuantity: (state, action) => {
      if (state.quantity === 1 && Math.sign(action.payload) === -1) return;
      state.quantity = state.quantity + action.payload;
      // console.log(current(state), "current state");
    },
    reduxReset: (state) => {
      state.price = 0;
      state.size = 0;
      state.quantity = 1;
      state.extras = [];
      state.prices = [];
      state.item = null;
    },
  },
});

export const {
  reduxSelectedProduct,
  reduxHandleSize,
  reduxHandleChange,
  reduxChangeQuantity,
  reduxReset,
  reduxSetOpen,
} = orderSlice.actions;

export default orderSlice.reducer;
