import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    //** dont change the below code **
    if (window.Cypress) {
      window.store = providerState;
    }
    //** dont change the above code **
  

  const [authState, setAuthState] = useState(providerState);

  const loginUser = (userDetails) => {
    setAuthState({ isAuth: true, userDetails });
  };

  const logoutUser = () => {
    setAuthState({ isAuth: false, userDetails: null });
  };
  let providerState ={isAuth: false, userDetails: null }

  return (
    <AuthContext.Provider value={{loginUser , logoutUser ,authState}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
