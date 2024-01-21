import React from "react";
import "./nav-css/nav.css";
import ActiveLink from "../shared/ActiveLink";
import NavSm from "./NavSm";
const NavLg = () => {
  return (
    <nav>
      <div className="nav-container w-full h-full bg-base-200 hidden lg:block lg:flex justify-between items-center px-4 py-4">
        <div className="logo">
          <h1 className="text-4xl font-bold font-mono">Flavour Fiesta</h1>
        </div>

        <div className="nav-options">
          <ul className="nav-items flex gap-5 font-semibold  font-mono text-lg">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink>About Us</ActiveLink>
            </li>
            <li>
              <ActiveLink>Your Order</ActiveLink>
            </li>
            <li>
              <ActiveLink>Contact Us</ActiveLink>
            </li>
          </ul>
        </div>

        <div className="login">
          <h1>Login</h1>
        </div>
      </div>
      <NavSm></NavSm>
    </nav>
  );
};

export default NavLg;
