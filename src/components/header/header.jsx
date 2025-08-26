import React from "react";
import llglogo from '../../assets/llgfortblack.png';
import { IoMdSearch } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { FaShare, FaFacebookF } from "react-icons/fa";
import ResponciveNav from './responcivenav';
import { NavLink } from "react-router-dom";

function WebHeader() {
  return (
    <div>
      <header className="bg-transparent flex items-center relative shadow-md font-sans min-h-[7em] mx-15 max-[500px]:mx-0  ">
        {/* Logo */}
        <span>
          <img className="h-60 w-auto object-contain p-0 ml-1 -mb-25 relative -top-12 max-[550px]:h-40" src={llglogo} alt="Logo" />
        </span>

        {/* Like/Share buttons - always visible, but you can hide on xs if needed */}
        <div className="min-[751px]:top-[1vh] overflow-hidden bg-transparent h-7 flex items-center absolute right-[30vw]  min-[550px]:max-[750px]:right-[2vw] top-[8vh] max-[549px]:hidden">
          <ul className="flex gap-4 list-none h-5 text-white">
            <li className="flex items-center gap-1 bg-[#005eff] rounded px-2 cursor-pointer shadow hover:scale-105 transition font-helvetica text-black">
              <AiOutlineLike />like
            </li>
            <li className="flex items-center gap-1 bg-[#005eff] rounded px-2 cursor-pointer shadow hover:scale-105 transition font-helvetica text-black">
              <FaShare />share
            </li>
            <li className="flex items-center gap-1 bg-[#0099cc] rounded px-2 cursor-pointer shadow hover:scale-105 transition font-helvetica">
              <FaFacebookF />
              <span className="font-sans text-white md:inline hidden">share this web</span>
            </li>
          </ul>
        </div>

        {/* Search bar */}
        <div className="absolute right-[2vw] top-[2vh] flex items-center justify-center border border-gray-400 rounded-full bg-transparent px-2 py-1 max-[580px]:hidden">
          <form action="#" method="post" className="flex items-center ">
            <input
              type="text"
              placeholder="search here"
              className="pl-2 bg-transparent border-none outline-none"
            />
            <span className="cursor-pointer relative -right-0 -top-0 z-10 text-black">
              <IoMdSearch />
            </span>
          </form>
        </div>

        {/* Main navbar - hidden on small screens */}
        <nav className="absolute top-[79px] right-[1vw] max-[845px]:hidden">
          <ul className="flex flex-row gap-4 list-none">
            <li className="cursor-pointer bg-[#E05048] h-8 rounded w-fit px-1  flex items-center justify-center shadow hover:scale-110 transition">
              <NavLink className="no-underline text-white" to={'/'}>home</NavLink>
            </li>
            <li className="cursor-pointer bg-[#0088cc] h-8 rounded w-fit px-1  flex items-center justify-center shadow hover:scale-110 transition">
              <NavLink className="no-underline text-white" to={'/villages'}>village map</NavLink>
            </li>
            <li className="cursor-pointer bg-[#4EB25c] h-8 rounded w-fit px-1  flex items-center justify-center shadow hover:scale-110 transition">
              <NavLink className="no-underline text-white" to={'/guestbook'}>guest book</NavLink>
            </li>
            <li className="cursor-pointer bg-[#734BA9] h-8 rounded w-fit px-1  flex items-center justify-center shadow hover:scale-110 transition">
              <NavLink className="no-underline text-white" to={'/gallary'}>gallary</NavLink>
            </li>
            <li className="cursor-pointer bg-[#ff9900] h-8 rounded w-fit px-1  flex items-center justify-center shadow hover:scale-110 transition">
              <NavLink className="no-underline text-white" to={'/videos'}>videos</NavLink>
            </li>
            <li className="cursor-pointer bg-black h-8 rounded w-fit px-1  flex items-center justify-center shadow hover:scale-110 transition">
              <NavLink className="no-underline text-white" to={'/news'}>submit news</NavLink>
            </li>
          </ul>
        </nav>
        {/* Responsive nav for mobile - only visible on small screens */}
        <div className="hidden max-[845px]:flex min-[846px]:hidden absolute right-0  z-101 max-[550px]:top-11">
  <ResponciveNav />
</div>
      </header>
    </div>
  );
}

export default WebHeader;