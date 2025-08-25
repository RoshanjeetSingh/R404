import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="h-fit p-5  border-r-[rgba(167,150,150,0.34)] mx-15"
      style={{ width: "150px" }}
    >
      <ul className="list-none flex flex-col items-start">
        <li className="bg-[aliceblue] my-2 w-fit rounded">
          <NavLink
            to={'/aboutpeople'}
            className="block shadow-[0_3px_3px_rgba(0,0,0,0.27)] no-underline text-[#010202] font-bold uppercase transition-colors duration-300 px-3 py-2 w-full"
          >
            aboutpeople
          </NavLink>
        </li>
        <li className="bg-[aliceblue] my-2 w-full rounded">
          <NavLink
            to={'/sports'}
            className="block shadow-[0_3px_3px_rgba(0,0,0,0.27)] no-underline text-[#010202] font-bold uppercase transition-colors duration-300 px-3 py-2 w-full"
          >
            sports
          </NavLink>
        </li>
        <li className="bg-[aliceblue] my-2 w-full rounded">
          <NavLink
            to={'/history'}
            className="block shadow-[0_3px_3px_rgba(0,0,0,0.27)] no-underline text-[#010202] font-bold uppercase transition-colors duration-300 px-3 py-2 w-full"
          >
            history
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;