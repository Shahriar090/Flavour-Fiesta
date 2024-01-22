import React from "react";
import NavLg from "./NavLg/NavLg";
import NavSm from "./NavSm/NavSm";

const Nav = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <NavLg></NavLg>
      </div>
      <div className="lg:hidden">
        <NavSm></NavSm>
      </div>
    </div>
  );
};

export default Nav;
