import { combineReducers } from "redux";

import isLooged from "./reducers/isLogged";
import cart from "./reducers/cart";
import { LoaderReducer, NetworkInfoReducer } from "./reducers/commonReducer";

const rootReducers = combineReducers({
  isLooged,
  cart,
  LoaderReducer,
  NetworkInfoReducer,
});
export default rootReducers;
