import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      let token = localStorage.getItem("token");
      if (token) {
        return setError("User is already login");
      }
      const response = await axios.post(
        `${import.meta.env.VITE_BASEURL}/api/users/login`,
        {
          email,
          password,
        }
      );
      console.log(token);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login Successfully");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="login-container">
      <h3>Login</h3>

      {/* Show error messages */}
      {error && <h5 className="error-message">{error}</h5>}

      <form onSubmit={handleLogin}>
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
        <input type="submit" value="Login" />
      </form>
      <h6>
        Don't have an account? <a href="/signup">Sign Up</a>
      </h6>
    </div>
  );
};

export default Login;
