import React from "react";
import { Route, Routes } from "react-router-dom";
import Ai from "./Components/Ai";
import { housesData } from "./data";
import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";
import { useLocation, Navigate } from "react-router-dom";
import Messages from "./Components/Messages";
import Adds from "./Components/Adds";
import AjouterAi from "./Components/AjouterAi";
import SearchAi from "./Components/SearchAi";
import axios from "axios";

function App() {
  const { pathname } = useLocation();
  const ProtectRoutes = ({ children }) => {
    const token = JSON.parse(localStorage.getItem("Recent_token"))?.token;
    console.log(token);
    return !token && pathname !== "/" ? (
      <Navigate to="/" />
    ) : token && pathname === "/" ? (
      <Navigate to="/user" />
    ) : (
      children
    );
  };
  console.log(housesData[0]);

  return (
    <div>
      {/*<ProtectRoutes>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user" element={<UserPage />}>
            <Route index element={<Adds />} />
            <Route path={"message"} element={<Messages />} />
            <Route path={"Search"} element={<SearchAi />} />
            <Route path={"Ajouter"} element={<AjouterAi />} />
          </Route>
        </Routes>
  </ProtectRoutes>*/}
    <Ai annonce={housesData[0]}/>
    </div>
  );
}

export default App;
