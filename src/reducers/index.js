import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import category from "./category";

export default history =>
  combineReducers({
    category,
    router: connectRouter(history)
  });
