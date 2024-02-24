import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';



export default function Login() {
const { login , authState } = useContext(AuthContext);
const [username,setUsername]=useState("");
const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        login(username, password);
      };
    console.log(authState);

    return (
        <div style={{display :"grid" , margin:"auto" , width :"400px", gap:"50px", gridTEmplateColumns:"repeat(3,1fr)"}}>
            <form data-testid = "auth_form" onSubmit={handleLogin} >
                <input
                   
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                    value={username}
                    onChange= {(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                    value={password}
                     onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input  type = "submit" />

            </form>                
        </div>
    )
}
