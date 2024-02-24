import React from "react";
import { useDispatch } from "react-redux";
import { handleAdd, handleReduce } from "../Redux/action";

const CounterButtons = () => {
  const dispatch = useDispatch();

  return (
    
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={() => dispatch(handleAdd())}>
        ADD
      </button>
      <button data-testid="reduceButton" onClick={() => dispatch(handleReduce())}>
        REDUCE
      </button>
    </div>
  );
};

export default CounterButtons;
