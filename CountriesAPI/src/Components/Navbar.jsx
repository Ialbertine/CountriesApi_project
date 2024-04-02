import React from "react";

const Navbar = () => {
  return (
    <div className="w-[100%] flex justify-around mt-[1rem]">
      <img src="./image/logo.svg" alt="logo" className=" md:text-[20px]" />
      <a href="" className="sm:text-[white] md:invisible">
        <fasicon />
      </a>
      <a href="" className="sm:invisible text-[white] text-[16px] py-6  md:visible hover:text-blue-400">Countries</a>
    </div>
  );
};

export default Navbar;
