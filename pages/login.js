import React from "react";
import Login from "../components/authentication/Login";
import redirect from "../utils/redirect";
import nextCookie from "next-cookies";
import Nav from "../components/layout/Nav";

function login() {
  
  return (
    <div className="login-container"style={{background: "rgb(66, 43, 216)", height: "100vh"}}>
      <Nav />
      <div style={{paddingTop: "110px"}}></div>
      <Login />
    </div>
  );
}
Login.getInitialProps = ctx => {
  const auth = nextCookie(ctx).token;
  if (auth) redirect(ctx, "/");
  return {};
};

export default login;
