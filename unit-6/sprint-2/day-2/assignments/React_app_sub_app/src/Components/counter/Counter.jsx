import Container from "../common/container/Container";
// import Button from '../common/button/Button';
import React, { useState } from 'react';
import Button from "../common/button/Button";

  
  const Counter = () => {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      if (count < 10) {
        setCount(count + 1);
      }
    };
  
    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
  
    const reset = () => {
      setCount(0);
    };



  return (
    <Container>
      {/* You can wrap all the elements in such a way that `Container` component will act like a parent div */}
      <h1>Count : {count}</h1>
      <div>

      <Button onClick={increment} disabled={count === 10}>
        INC
      </Button>
      <Button onClick={decrement} disabled={count === 0}>
        DEC
      </Button>
      <Button onClick={reset} disabled={count === 0}>
        RESET
      </Button>

      </div>
   
    </Container>
  
  );
}

export default Counter;
