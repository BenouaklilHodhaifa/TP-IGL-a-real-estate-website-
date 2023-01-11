import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Ai from "./Components/Ai";
import { housesData } from "./data";
import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";

function App() {
  const houses = housesData;

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/user" element={<UserPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
