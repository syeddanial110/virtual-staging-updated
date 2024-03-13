// Path: store\products-slice.js
"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialProfileData = {
  name: "",
  email: "",
  phoneNumber: "",
};

export const profileDataSlice = createSlice({
  name: "Profile Data value",
  initialState: initialProfileData,
  reducers: {
    addProfileData(state, action) {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
});

export const { addProfileData } = profileDataSlice.actions;

export default profileDataSlice.reducer;
