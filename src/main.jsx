import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

