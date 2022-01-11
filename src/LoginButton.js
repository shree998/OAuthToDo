import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import "./App.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (

    <div className="login">
<Button  variant="contained" onClick={() => loginWithRedirect()}>
        Log In
      </Button>
    </div>
      

  );
};

export default LoginButton;
