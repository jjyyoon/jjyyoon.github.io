import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleWares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
