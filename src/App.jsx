import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Features from "./pages/Features/Features";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </>
  );
}

export default App;
