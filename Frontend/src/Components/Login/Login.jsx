import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h3>Login</h3>

      <form>
        <input type="email" placeholder="Enter your email" required />
        <input type="password" placeholder="Enter your password" required />
        <input type="submit" value="Login" />
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
