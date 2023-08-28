import React from "react";
import Header from "./LoginComponents/Header";
import Form from "./LoginComponents/Form";
import "./login.css";

function Login() {
  return (
    <div className="containerLogin">
      <Header />
      <div className="containerForm">
        <Form />
      </div>
    </div>
  );
}

export default Login;
