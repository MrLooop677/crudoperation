import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseAction, increaseAction, increaseByNumAction } from "../redux/actions/counterAction";

function Counter() {
    const { value, count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
    <div>
      <h1>Hello Redux Basics</h1>

      <div className="counter">Counter:{count}</div>
      <div>
        <button className="btn"onClick={()=>increaseAction(dispatch)}>
          Increase
        </button>
        <button className="btn"onClick={()=>decreaseAction(dispatch)}>
          Decrease
        </button>
      </div>
      <div>
        <button className="btn" onClick={()=>increaseByNumAction(dispatch,10)}>
          Increase By Dynamic Number
        </button>
      </div>
    </div>
  );
}

export default Counter;
