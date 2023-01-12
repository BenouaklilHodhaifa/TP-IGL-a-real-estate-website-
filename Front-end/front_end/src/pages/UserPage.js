import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navuser from "../Components/Navuser";

function UserPage(props) {
  return (
    <div>
      <Navuser />
      <Outlet />
    </div>
  );
}

export default UserPage;
