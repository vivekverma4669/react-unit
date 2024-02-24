import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleTheme } from "../Redux/action";

const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
                                                                                                                                 
  return (
    <div data-testid="theme">
      <button
        data-testid="switchToLightButton"
        disabled={theme === "light"}
        onClick={() => dispatch(handleTheme("light"))}
      >
        Switch to Light
      </button>
      <button
        data-testid="switchToDarkButton"
        disabled={theme === "dark"}
        onClick={() => dispatch(handleTheme("dark"))}
      >
        Switch to Dark
      </button>
    </div>
  );
};

export default Theme;
