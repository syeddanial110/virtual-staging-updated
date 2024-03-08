"use client";

import store from "./index";

const { Provider } = require("react-redux");

function Providers(props) {
  return <Provider store={store}>{props.children}</Provider>;
}

export default Providers;
