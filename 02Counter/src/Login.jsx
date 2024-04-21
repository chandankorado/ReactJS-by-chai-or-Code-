import React from "react";

function Login() {
  return (
    <>
      <div className="login">
        <h1>*Login*</h1>
        <label htmlFor="name">UserName: </label>
        <input type="text" name="name" /> <br />
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" />
      </div>
    </>
  );
}

export default Login;
