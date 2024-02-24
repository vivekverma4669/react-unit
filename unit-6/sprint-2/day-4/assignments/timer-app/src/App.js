import React, { useState } from 'react';
import Timer from './components/Timer';

const App = () => {
  const [showTimer, setShowTimer] = useState(false);

  const toggleTimer = () => {
    setShowTimer(!showTimer);
  };

  return (
    <div>
      <button onClick={toggleTimer}>
        {showTimer ? 'HIDE TIMER' : 'SHOW TIMER'}
      </button>
      {showTimer && <Timer />}
    </div>
  );
};

export default App;
