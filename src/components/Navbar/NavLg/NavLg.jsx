import React from "react";
import "../nav-css/nav.css";
import ActiveLink from "../../shared/ActiveLink";

const NavLg = () => {
  const navOptions = (
    <>
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
    </>
  );
  return (
    <nav>
      <div className="nav-container w-full h-16 fixed top-0 right-0 left-0 z-10 bg-black  flex justify-between items-center px-4 py-4">
        <div className="logo">
          <h1 className="text-4xl font-bold font-mono text-white">
            Flavour Fiesta
          </h1>
        </div>

        <div className="nav-options">
          <ul className="nav-items flex gap-5 font-semibold  font-mono text-lg ">
            {navOptions}
          </ul>
        </div>

        <div className="login">
          <h1 className="text-white">Login</h1>
        </div>
      </div>
    </nav>
  );
};

export default NavLg;
