import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Componets/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Componets/Login/Login";
import Register from "../Componets/Register/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
            path: "/",
            element: <Home></Home>
      },
      {
            path: "/login",
            element: <Login></Login>
      },
      {
            path: "/register",
            element: <Register></Register>
      },
    ]
  },
]);