import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";

import Login from "./Components/Login/Login.jsx";

import Signup from "./Components/Signup/Signup.jsx";
import Mens from "./Pages/Mens/Mens.jsx";
import Women from "./Pages/Women/Women.jsx";

import Teenguy from "./Pages/Teenguy/TeenGuy.jsx";
import OverCard from "./Components/OverCard/OverCard.jsx";
import Protector from "./Components/ProtectedRoute/Protector.jsx";
import CartSection from "./Components/Cart/CartSection.jsx";
import Home from "./Components/Home/Home.jsx";

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
        path: "",
        element: (
          <Protector>
            <Home />
          </Protector>
        ),
      },
      {
        path: "/mens",
        element: (
          <Protector>
            <Mens />
          </Protector>
        ),
      },
      {
        path: "/women",
        element: (
          <Protector>
            <Women />
          </Protector>
        ),
      },
      {
        path: "/teenguy",
        element: (
          <Protector>
            <Teenguy />
          </Protector>
        ),
      },
      {
        path: "/overCard/:id",
        element: (
          <Protector>
            <OverCard />
          </Protector>
        ),
      },
      {
        path: "/cart",
        element: (
          <Protector>
            <CartSection />
          </Protector>
        ),
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
