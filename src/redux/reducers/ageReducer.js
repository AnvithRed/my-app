import { SET_AGE } from "../actions/type";

const initialState = "";

const ageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AGE:
      return action.payload;
    default:
      return state;
  }
};

export default ageReducer;
