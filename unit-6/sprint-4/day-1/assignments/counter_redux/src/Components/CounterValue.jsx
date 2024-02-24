import React, { useState, useEffect } from "react";
import { store } from '../Redux/store';

const CounterValue = () => {
  const [counter, setCounter] = useState(store.getState().counter);


     console.log(store.getState());
     console.log(store);
     console.log(store);

    useEffect(() => {
    const forceUpdate = store.subscribe(() => {
      setCounter(store.getState().counter);
    });

    return () => {
      forceUpdate();
    };

  }, []);
  

  return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;
