import React from "react";
import { Navigate } from "react-router-dom";

function Protector({ children }) {
  let token = localStorage.getItem("token");

  return token ? children : <Navigate to="/login" />;
}

export default Protector;
