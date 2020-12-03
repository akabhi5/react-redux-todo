import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { todoReducer } from "./reducers/todoReducer";

const reducer = combineReducers({
  todo: todoReducer,
});

const todoFromStorage = localStorage.getItem("todo")
  ? JSON.parse(localStorage.getItem("todo"))
  : [];

const initialState = {
  todo: todoFromStorage,
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
