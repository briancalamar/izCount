import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from "../reducers/productReducer";
import userReducer from "../reducers/userReducer";
import categoryReducer from "../reducers/categoryReducer";
import orderReducer from "../reducers/orderReducer";
import sizeReducer from "../reducers/sizeReducer";

let rootReducer = combineReducers({
    products: productReducer,
    user: userReducer,
    order: orderReducer,
    category: categoryReducer,
    size: sizeReducer,
});

export default function generatorStore() {
  let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}

