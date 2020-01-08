import React from 'react'
import Login from '../components/authentication/Login';
import redirect from "../utils/redirect";
import nextCookie from "next-cookies";
import Nav from '../components/layout/Nav'

function login() {
    return (
        <div className="login-container">
            <Nav />
            <Login />
        </div>
    )
}
    Login.getInitialProps = ctx => {
        const auth = nextCookie(ctx).token;
        if (auth) redirect(ctx, "/");
        return {};
      };

export default login