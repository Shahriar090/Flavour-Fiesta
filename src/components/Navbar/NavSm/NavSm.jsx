import React from "react";
import { LuMenu } from "react-icons/lu";
import ActiveLink from "../../shared/ActiveLink";
const NavSm = () => {
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
      <div className="sec-container">
        <div className="nav-container w-full h-10 bg-black flex items-center">
          {/* side bar */}
          <div className="drawer w-2/12 z-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="">
                <LuMenu className="text-xl text-white" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-44 min-h-full bg-white text-black">
                {/* Sidebar content here */}
                {navOptions}
              </ul>
            </div>
          </div>
          <div className="logo w-3/5">
            <h1 className="text-xl font-bold font-mono text-center text-white">
              Flavour Fiesta
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavSm;
