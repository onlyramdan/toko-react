import { useState } from "react";
import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import React from "react";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Congratulation from "./pages/Congratulation";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/categories/:idc" Component={Details} />
        <Route path="/cart" Component={Cart} />
        <Route path="/congratulation" Component={Congratulation} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
