import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

export const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];
const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
