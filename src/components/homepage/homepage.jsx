import React from 'react';
import { GiPiercedHeart } from "react-icons/gi";
import { LuTreePalm } from "react-icons/lu";
import { Outlet } from 'react-router-dom';
import Weather from './weatherinfo/weather';
import Sidebar from './sidebar/sidebar';

function HomePage() {
    return (
        <div className="bg-gray-50 min-h-screen w-full">
            {/* Welcome Banner */}
            <div className="flex justify-center items-center -mt-1 mx-15 ">
                <div className="   h-[50px] w-[90vw] flex justify-around items-center px-[3vw] py-9 mt-1 rounded-b-[10px] bg-black">
                    <p className="text-3xl font-sense text-white">Welcome To My Website</p>
                    <h2 className=" cursor-pointer text-xl font-roboto text-red-700 bg-red-100 rounded-s px-2 mt-2">Upload Photos!</h2>
                </div>
            </div>
            {/* Second Welcome Section */}
            <div className="flex flex-col items-center py-6  shadow-sm mx-15">
                <h2 className="text-lg md:text-3xl font-inherit text-gray-800 text-center">
                    Welcome to <strong className="text-white bg-red-500 px-3 rounded-sm">Lalgarh Jattan</strong> <GiPiercedHeart className="inline text-red-500" /> Lovely People, <LuTreePalm className="inline text-green-600" /> Beautiful Village.
                </h2>
                <div className="mt-4 w-full max-w-md">
                    <Weather />
                </div>
            </div>
            {/* Main Content Area */}
            <div className="flex flex-col md:flex-row gap-6 px-4 py-8">
                <div className="md:w-1/4 w-full">
                    <Sidebar />
                </div>
                <div className="md:ml-5 mx-15 flex-1 ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
export default HomePage;