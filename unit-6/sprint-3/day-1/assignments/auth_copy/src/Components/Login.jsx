import React from 'react'

export default function Login() {
    
    return (
        <div>
            <form data-testid = "auth_form"  >
                <input
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                />
                <br />
                <input
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                />
                <br />
                <input type = "submit"/>

            </form>                
        </div>
    )
}
