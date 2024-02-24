import React from "react";
import  CounterButtons from './CounterButtons'
import  CounterValue from './CounterValue'
const Counter = () => {
  return (
    <div data-testid="counter">
      <h1>Counter Application</h1>
      <CounterValue/>
      <CounterButtons/>

      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}

      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
    </div>
  );
};

export default Counter;
