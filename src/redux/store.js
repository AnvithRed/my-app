import { createStore, combineReducers, applyMiddleware } from "redux";
import nameReducer from "./reducers/nameReducer";
import ageReducer from "./reducers/ageReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  name: nameReducer,
  age: ageReducer,
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
