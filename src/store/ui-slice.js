import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false, notification: null };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotifications(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.message,
        message: action.payload.messsage,
      };
    },
  },
});

export default uiSlice;
export const uiActions = uiSlice.actions;
