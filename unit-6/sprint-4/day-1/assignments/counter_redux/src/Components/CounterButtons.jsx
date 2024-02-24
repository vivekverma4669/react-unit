import React from "react";
import { handleAddActionObj, handleReduceActionObj } from '../Redux/action';
import { store } from '../Redux/store';

const CounterButtons = () => {
  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={() => store.dispatch(handleAddActionObj(1))}>ADD</button>
      <button data-testid="reduceButton" onClick={() => store.dispatch(handleReduceActionObj(1))}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;
