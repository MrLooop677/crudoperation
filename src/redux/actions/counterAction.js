import { DECREASE, INCREASE, INCREASE_BY_DYNAMIC_NUMBER } from "./type";

const increaseAction = async(dispatch) => {
  return dispatch({ type: INCREASE }) ;
};
const decreaseAction = async(dispatch) => {
  return dispatch({ type: DECREASE });
};
const increaseByNumAction = async(dispatch,val) => {
  return dispatch( { type: INCREASE_BY_DYNAMIC_NUMBER ,payLoad: val });
};
export { increaseAction, decreaseAction, increaseByNumAction };
