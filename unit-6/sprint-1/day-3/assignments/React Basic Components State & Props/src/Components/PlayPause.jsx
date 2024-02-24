// Write Code here
// do a default export
// PlayPause.jsx
import React, { useState } from 'react';

const PlayPause = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleState = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <h1>{`The state is ${isPlaying ? 'playing' : 'paused'}`}</h1>
      <button onClick={toggleState}>{isPlaying ? 'playing' : 'paused'}</button>
    </div>
  );
};

export default PlayPause;
