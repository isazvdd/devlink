import React from "react";
import ReactDOM from "react-dom/client";

import { router } from "./App";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer autoClose={2000} />
    <RouterProvider router={router} />
  </React.StrictMode>
);
