// Path: store\products-slice.js
"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialAddToCartState = {
  step: 0,
};

export const stepperValueSlice = createSlice({
  name: "Stepper value",
  initialState: initialAddToCartState,
  reducers: {
    addStepperValue(state, action) {
      state.step = action.payload + 1;
    },
    backStepperValue(state, action) {
      state.step = action.payload - 1;
    },
    initialStepperValue(state, action) {
      state.step = action.payload;
    },
  },
});

export const { addStepperValue, backStepperValue, initialStepperValue } =
  stepperValueSlice.actions;

export default stepperValueSlice.reducer;
