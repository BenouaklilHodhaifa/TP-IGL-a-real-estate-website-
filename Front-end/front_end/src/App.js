import React from "react";
import { Route, Routes } from "react-router-dom";
import Ai from "./Components/Ai";
import { housesData } from "./data";
import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";

function App() {
  const houses = housesData;

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
