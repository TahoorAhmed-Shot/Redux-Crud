import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const Store = configureStore(
  { reducer: rootReducer },
  {},
  applyMiddleware(thunk)
);

export default Store;
