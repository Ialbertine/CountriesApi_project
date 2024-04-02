import React from "react";

const Navbar = () => {
  return (
    <div className="w-[100%] flex justify-around">
      <img src="./image/logo.svg" alt="logo" className=" md:text-[20px]"/>
      <a href="" className="sm:text-[white] md:invisible">
        <fasicon />
      </a>
      <a
        href=""
        className="text-[white] text-[20px] py-6 sm:invisible md:visible hover:text-blue-400"
      >
        Countries
      </a>
    </div>
  );
};

export default Navbar;
