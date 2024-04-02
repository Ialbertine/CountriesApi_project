import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col justify-center gap-2 items-center text-white text-center pt-[7rem]">
      <h2 className="text-[40px] font-bold ">Country API App</h2>
      <p className="text-[20px] w-[70%] mb-3">
        This is a simple app that allows you to search for countries and
        continents using the API.
      </p>
      <input
        type="search"
        placeholder="Search country by name"
        className="w-[80%] py-3 pl-4"
      />
    </div>
  );
}

export default Header