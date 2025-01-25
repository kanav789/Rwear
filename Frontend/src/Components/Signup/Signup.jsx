import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
const Signup = () => {
  const [name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BASEURL}/api/users/signup`,
        {
          name,
          email,
          password,
        }
      );

      if (response.data.message) {
        localStorage.setItem("token", response.data.token);
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message);
        toast.error(err.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
        toast.error("An unexpected error occurred. Please try again.");
      }
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="register-container">
      <h3>Register</h3>

      {/* Show error messages */}
      {error && <h5 className="error-message">{error}</h5>}

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Register" />
      </form>
      <h6>
        Already have an account? <a href="/login">Login here</a>
      </h6>
    </div>
  );
};

export default Signup;
