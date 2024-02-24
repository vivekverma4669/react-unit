import React from "react";
import CounterButtons from './CounterButtons'
import CounterValue from "./CounterValue";
import { useSelector } from "react-redux";

const themeStyles = {
  light_theme: {
    color: 'black',
    backgroundColor: 'white',
  },
  dark_theme: {
    color: 'white',
    backgroundColor: 'black',
  },
};

const Counter = () => {
  const theme = useSelector((state) => state.theme);
  console.log(theme);
  console.log(theme === 'light' ? 'light_theme' : 'dark_theme');
  
  return (
    <div
      data-testid="counter"
      style={theme === 'light' ? themeStyles.light_theme : themeStyles.dark_theme}
    >
      <h1>Counter</h1>
      <CounterValue />
      <CounterButtons />
    </div>
  );
};

export default Counter;
