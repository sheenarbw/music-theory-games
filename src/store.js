import logger from "redux-logger";
import { applyMiddleware, createStore, combineReducers } from "redux";
import HowManySemitonesGame from "./components/HowManySemitonesGame/reducer.js";

const store = createStore(
  combineReducers({ HowManySemitonesGame }),
  applyMiddleware(logger)
);

export default store;
