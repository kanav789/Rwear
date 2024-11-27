import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";

import Signup from "./Components/Signup/Signup.jsx";
import Mens from "./Pages/Mens/Mens.jsx";
import Women from "./Pages/Women/Women.jsx";
import CardRwears from "./Components/Card/Card.jsx";
import Teenguy from "./Pages/Teenguy/TeenGuy.jsx";

// Router
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/mens",
        element: <Mens />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/teenguy",
        element: <Teenguy />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
