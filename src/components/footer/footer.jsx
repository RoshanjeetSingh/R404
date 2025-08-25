import React from "react";
import { FaBluesky } from "react-icons/fa6";
import { PiCopyrightThin } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";

function FooterBanner() {
  return (
    <div>
      {/* Footer Menu */}
      <div className="flex flex-col sm:flex-row justify-start gap-8 items-start px-[5%] py-6 text-white bg-[#192024] font-sans flex-wrap">
        <ul className="font-sans border-b sm:border-b-0 sm:border-r border-white px-4 pb-4 sm:pb-0">
          <li><h3 className="pb-2 font-semibold">ABOUT</h3></li>
          <li><a href="/about" className="text-[#cdf7f1] hover:text-[#2987da] no-underline leading-5">About Us</a></li>
          <li><a href="/contact" className="text-[#cdf7f1] hover:text-[#2987da] no-underline leading-5">Contact Us</a></li>
          <li><a href="/privacy" className="text-[#cdf7f1] hover:text-[#2987da] no-underline leading-5">Privacy Policy</a></li>
          <li><a href="/terms" className="text-[#cdf7f1] hover:text-[#2987da] no-underline leading-5">Terms of Service</a></li>
        </ul>
        <ul className="font-sans border-b sm:border-b-0 sm:border-r border-white px-4 pb-4 sm:pb-0">
          <li><h3 className="pb-2 font-semibold">VILLAGE UPDATES</h3></li>
          <li><a href="/news" className="text-[#cdf7f1] hover:text-[#2987da] no-underline leading-5">Latest News</a></li>
          <li><a href="/events" className="text-[#cdf7f1] hover:text-[#2987da] no-underline leading-5">Upcoming Events</a></li>
          <li><a href="/gallery" className="text-[#cdf7f1] hover:text-[#2987da] no-underline leading-5">Photo Gallery</a></li>
        </ul>
        <ul className="font-sans px-4">
          <li><h3 className="pb-2 font-semibold">FOLLOW US</h3></li>
          <li>
            <a href="https://www.facebook.com/lalgarhjattan" target="_blank" rel="noopener noreferrer" className="flex justify-start items-center text-[#2987da] hover:text-[#cdf7f1] py-1 text-xl">
              <CiFacebook />
              <span className="ml-2 hidden sm:inline">Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex justify-start items-center text-[#2987da] hover:text-[#cdf7f1] py-1 text-xl">
              <FaXTwitter />
              <span className="ml-2 hidden sm:inline">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex justify-start items-center text-[#2987da] hover:text-[#cdf7f1] py-1 text-xl">
              <CiInstagram />
              <span className="ml-2 hidden sm:inline">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
      {/* Footer Banner */}
      <footer className="flex flex-col sm:flex-row items-center justify-between text-white bg-[#201d1d] font-sans px-4 py-3">
        <div className="flex items-center mb-2 sm:mb-0">
          <FaBluesky className="text-[#2987da] text-2xl mr-2" />
          <span className="font-bold text-lg">Lalgarh Jattan</span>
        </div>
        <ul className="list-none">
          <li className="flex items-center gap-2 text-sm">
            <PiCopyrightThin /> Copyright 2025 Lalgarhjattan.com. All Rights Reserved | Developed by Roshanjeetsingh
          </li>
        </ul>
      </footer>
    </div>
  );
}
export default FooterBanner;
