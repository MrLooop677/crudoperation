import { DECREASE, INCREASE, INCREASE_BY_DYNAMIC_NUMBER } from "../actions/type";

const reducerCounter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case INCREASE_BY_DYNAMIC_NUMBER:
      return { ...state, count:state.count+action.payLoad };

    default:
      return state;
  }
};                                                                                                                                                                                                               
export default reducerCounter;
 