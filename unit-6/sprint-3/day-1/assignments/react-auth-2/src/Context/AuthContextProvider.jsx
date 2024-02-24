import React, {createContext, useContext, useState} from 'react'

export const  AuthContext= createContext();

export default function AuthContextProvider({children }) {
  
  const [authState, setAuthState] = useState({
    isAuth: false,
    loading: false,
    error: null,
    token: "",
  });

  const login = async (username, password) => {
    try {

      setAuthState((prevState) => ({ ...prevState, loading: true }));
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
     
      const data = await response.json();
      console.log(data);


      if (response.ok) {
        setAuthState({
          isAuth: true,
          loading: false,
          error: null,
          token: data.token,
        });
      } else {
        setAuthState({
          isAuth: false,
          loading: false,
          error: data.error || 'An unexpected error occurred',
          token: '',
        });
      }
    }
    catch (error) {
      setAuthState({
        isAuth: false,
        loading: false,
        error: 'An unexpected error occurred',
        token: "",
      });
    }
  };


  const logout = () => {
    setAuthState({
      isAuth: false,
      loading: false,
      error: null,
      token: "",
    });
  };



return (
    <div><AuthContext.Provider value={{ login , logout, authState }}> {children} </AuthContext.Provider></div>
  )
}
