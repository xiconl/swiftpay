import React, { _useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Hero from "./components/Hero";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Hero" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
