import reducers from "./redux/reducers/index";
import { createStore,applyMiddleware } from "redux"
import reduxThunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
const store=createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)))
export default store