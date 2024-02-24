import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';


export const Dashboard = () => {
    const {authState ,logout} =useContext(AuthContext);
    console.log(authState);
    return (
        <div >
            <h3 data-testid = "token" >Token: {authState.token} </h3>
            <button data-testid = "logout"  onClick={logout}>LOGOUT</button>
        </div>
    )
}
