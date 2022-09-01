import { legacy_createStore as createStore, combineReducers } from "redux";
import stockReducer from "./stock";

const store = createStore(stockReducer);
export default store;
