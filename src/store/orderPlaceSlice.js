// Path: store\products-slice.js
"use client";
import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  name: "",
  email: "",
  phoneNumber: "",
  serviceName: "",
  servicePrice: "",
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
  rapidDelivery: "",
  deliveryPrice: "",
  promoCodeDiscount: 0,
  promoCodeType: "",
  promoCodeId: null,
  // promoCodeId: "",
  additionalItemsTotal: 0,
  total: 0,
};

export const orderPlaceSlice = createSlice({
  name: "Stepper values",
  initialState: initalState,
  reducers: {
    addOrderData(state, action) {
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
