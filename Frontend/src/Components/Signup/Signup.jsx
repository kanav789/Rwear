import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="register-container">
      <h3>Register</h3>

      <form>
        <input type="text" placeholder="Enter your full name" required />
        <input type="email" placeholder="Enter your email" required />
        <input type="password" placeholder="Enter your password" required />

        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Signup;
