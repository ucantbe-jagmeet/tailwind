import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between text-white items-center h-24 px-4 max-w-[1240px] mx-auto ">
      <ul className="flex">
        <li className="p-4">+</li>
        <li className="p-4">-</li>
        <li className="p-4">=</li>
      </ul>

      <h1 className="w-full text-3xl font-bold text-[#00df9a] text-center">
        Navbar
      </h1>
      <ul className="flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;