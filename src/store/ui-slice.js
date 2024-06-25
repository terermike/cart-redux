import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export default uiSlice;
export const cartActions = uiSlice.actions;
