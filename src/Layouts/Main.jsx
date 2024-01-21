import React from "react";
import { Outlet } from "react-router-dom";
import NavLg from "../components/Navbar/NavLg";

const Main = () => {
  return (
    <div>
      <NavLg></NavLg>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
