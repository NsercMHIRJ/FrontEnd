import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from '@material-ui/core/Button';
//import Button from "react-bootstrap/Button";



export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = () => {
        
            instance.loginPopup(loginRequest).catch(e => {
                console.log(e);
           
        } );
    }
   
    return (
        
        //  <Button variant="secondary" onClick={handleLogin}>sign in</Button>
        // <h1    onClick={handleLogin}>sign in</h1>
        <>
        <Button  variant="contained"  onClick={handleLogin} style={{ backgroundColor: "#001C3E", color: "WHITE", marginRight: "0px" }}>Sign In</Button>
    </>
    )
}