import React from "react";
import "../css-part/register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="register">
      <div className="register__card">
        <h1 className="register__title">Join us</h1>
        <p className="register__sub">
          Create an account and give your clothes a second life.
        </p>

        <form className="register__form">
          <label className="register__field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              autoComplete="name"
            />
          </label>

          <label className="register__field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>

          <label className="register__field">
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              autoComplete="new-password"
            />
          </label>

          <label className="register__field">
            <span>Confirm password</span>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Type your password again"
              autoComplete="new-password"
            />
          </label>

          <button type="submit" className="register__btn">
            Create account
          </button>
        </form>

        <p className="register__alt">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;