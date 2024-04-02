import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col justify-center gap-2 items-center text-white text-center pt-[4rem]">
      <h2 className="text-[40px] font-bold mb-3">Country API App</h2>
      <p className="text-[20px] sm:w-[70%] mb-5 lg:w-[100%]">
        This is a simple app that allows you to search for countries and
        continents using the API.
      </p>
      <input type="search" placeholder="Search country by name" className="w-[80%] py-3 pl-4 border-1 border-black"/>
    </div>
  );
}

export default Header