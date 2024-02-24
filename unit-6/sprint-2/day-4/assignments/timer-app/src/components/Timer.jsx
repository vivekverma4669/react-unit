import React, { useState, useEffect, useRef } from 'react';


const Timer = () => {

  const [initialTime, setInitialTime] = useState(10);
  const [time, setTime] = useState(initialTime);
  const [running, setRunning] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    let timer;
    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running, time]);

  const startTimer = () => {
    if (!running) {
      setRunning(true);
    }
  };

  const stopTimer = () => {
    if (running) {
      setRunning(false);
    }
  };

  const resetTimer = () => {
    setRunning(false);
    setTime(initialTime);
  };

    const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formatDigit = (digit) => (digit < 10 ? `0${digit}` : digit);

    return `${formatDigit(hours)}:${formatDigit(minutes)}:${formatDigit(remainingSeconds)}`;
  };

  return (
    <div>
      <input
        type="number"
        value={initialTime}
        onChange={(e) => setInitialTime(e.target.value)}
        ref={inputRef}
      />
      <div>{formatTime(time)}</div>
      <button onClick={startTimer} disabled={running}>
        START TIMER
      </button>
      <button onClick={stopTimer} disabled={!running}>
        STOP TIMER
      </button>
      <button onClick={resetTimer}>RESET TIMER</button>
    </div>
  );
};

export default Timer;
