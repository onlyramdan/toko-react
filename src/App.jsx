import { useState } from "react";
import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import React from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
    </div>
  );
}

export default App;
