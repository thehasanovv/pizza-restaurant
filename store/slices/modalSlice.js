import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    reduxOpenModal: (state) => {
      state.isOpen = true;
    },
    reduxCloseModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { reduxOpenModal, reduxCloseModal } = modalSlice.actions;

export default modalSlice.reducer;
