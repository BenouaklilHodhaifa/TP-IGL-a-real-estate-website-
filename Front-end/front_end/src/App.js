import React from "react";
import Ai from "./Components/Ai";
import {housesData} from "./data"
import LandingPage from "./pages/LandingPage";

function App() {
  const houses = housesData;

  return (
    <div>
      <LandingPage/>
    </div>
  );
}

export default App;
