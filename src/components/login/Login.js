import React from "react";
import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";

export function Login() {
    return (
      <>
        <Heading content="Login"/>
        <LoginForm/>
      </>    
    );
}

export default Login;
