import { SET_NAME } from "../actions/type";

const initialState = "";

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return action.payload;
    default:
      return state;
  }
};

export default nameReducer;
