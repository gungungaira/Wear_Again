import React from "react";
import { Link } from "react-router-dom";
import "../css-part/login.css";

const Login = () => {
  return (
    <main className="login">
      <div className="login__card">
        <h1 className="login__title">Welcome back</h1>
        <p className="login__sub">
          Log in to keep giving clothes a second life.
        </p>

        <form className="login__form">
          <label className="login__field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>

          <label className="login__field">
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Type your password"
              autoComplete="current-password"
            />
          </label>

          <button type="submit" className="login__btn">
            Log in
          </button>
        </form>

        <p className="login__alt">
          New here? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;