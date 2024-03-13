"use client";

import { configureStore } from "@reduxjs/toolkit";
// import productsReducer from "./products-slice";
// import listTypeReducer from "./categorySlice";
// import favouriteProductReducer from "./favouriteProductSlice";
// import addToCartReducer from "./addToCartSlice";
// import filterReducer from "./filterSlice";
import stepperValueReducer from "./stepperValueSlice";
import orderPlaceReducer from "./orderPlaceSlice";
import profileDataReducer from "./profileDataSlice";

const store = configureStore({
  reducer: {
    // products: productsReducer,
    // listType: listTypeReducer,
    // favouriteProductReducer: favouriteProductReducer,
    // addToCartReducer: addToCartReducer,
    // filterReducer: filterReducer,
    stepperValueReducer: stepperValueReducer,
    orderPlaceReducer: orderPlaceReducer,
    profileDataReducer: profileDataReducer,
  },
});

export default store;
