import reducerCounter from "./reducerCounter";
import reducerUser from "./reducerUser";
import { combineReducers } from "redux";
export default combineReducers({
    counter:reducerCounter,
    user:reducerUser
})
