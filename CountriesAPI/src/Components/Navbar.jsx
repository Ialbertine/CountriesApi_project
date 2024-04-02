import React from "react";

const Navbar = () => {
  return (
    <div className="w-[100%] flex justify-around">
      <img src="./image/logo.svg" alt="logo" />
      <a href="" className="sm:text-[white] md:invisible">
        <fasicon />
      </a>
      <a
        href=""
        className="text-[white] text-[25px] py-6 sm:invisible md:visible"
      >
        countries
      </a>
    </div>
  );
};

export default Navbar;
