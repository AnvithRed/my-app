import { SET_NAME, SET_AGE } from "./type";

export const setName = (name) => {
  return (dispatch)=>{
    dispatch({
      type: SET_NAME,
      payload: name,
    })
  }
 
};

export const setAge = (age) => {
  return (dispatch)=>{
    dispatch({
      type: SET_AGE,
      payload: age,
    })
  }
 
};
