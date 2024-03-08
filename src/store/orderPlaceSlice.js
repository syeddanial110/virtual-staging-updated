// Path: store\products-slice.js
"use client";
import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  name: "",
  email: "",
  phoneNumber: "",
  styleName: "",
  styleImage: "",
  styleId: "",
  uploadImageDetails: [
    // {
    //   image: "",
    //   roomArea: "",
    //   basicItems: [],
    //   otherBasicItems: "",
    // additionalServices :""
    // roomArea: [
    //   {
    //     roomValue: "",
    //     basicItems: [],
    //     oteherBasicItems: "",
    //   },
    // ],
    // },
  ],
  propertyVideo: "",
  propertyPrice: "",
  rapidDelivery: "",
  deliveryPrice: ""
};

export const orderPlaceSlice = createSlice({
  name: "Stepper values",
  initialState: initalState,
  reducers: {
    addOrderData(state, action) {
      console.log("action.payload", action.payload);
      // if (action.payload?.clickedIndex) {
      //   const { clickedIndex, newData } = action.payload;
      //   const updatedUploadImageDetails = [...state.uploadImageDetails];
      //   updatedUploadImageDetails[clickedIndex] = {
      //     ...updatedUploadImageDetails[clickedIndex],
      //     ...newData,
      //   };
      //   state.uploadImageDetails = updatedUploadImageDetails;
      // } else {
      Object.keys(action.payload).forEach((key) => {
        // Check if the key exists in the initial state
        if (state.hasOwnProperty(key)) {
          // Update the state with the value from the payload
          state[key] = action.payload[key];
        }
      });
      // }
    },
  },
});

export const { addOrderData } = orderPlaceSlice.actions;

export default orderPlaceSlice.reducer;
