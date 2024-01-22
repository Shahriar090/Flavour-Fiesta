import React from "react";
import { LuMenu } from "react-icons/lu";
const NavSm = () => {
  return (
    <nav>
      <div className="sec-container ">
        <div className="nav-container w-full h-auto bg-base-200 flex items-center">
          {/* side bar */}
          <div className="drawer w-2/12">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="">
                <LuMenu className="text-xl" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-44 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="logo w-3/5">
            <h1 className="text-xl font-bold font-mono text-center">
              Flavour Fiesta
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavSm;
