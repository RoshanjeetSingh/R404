import React from "react";
import { FaPeoplePulling } from "react-icons/fa6";

const AboutPeople = () => {
  return (
    <div>
      <fieldset className="mt-8 mb-2">
        <legend>
          <h1 className="inline text-[#333] bg-white border-none px-1.5 rounded shadow-[3px_3px_5px_0_rgba(0,0,0,0.15)] font-bold text-xl flex items-center gap-2">
            <FaPeoplePulling className="text-2xl" /> ABOUT PEOPLE
          </h1>
        </legend>
        <p className="text-[22px] px-2 py-0.5 font-[Impact,Haettenschweiler,'Arial Narrow Bold',sans-serif]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident delectus 
          fuga sunt adipisci nobis, aliquam consectetur, magni dignissimos, pariatur laudantium quas illo autem cum necessitatibus neque 
          quibusdam facere quidem quo.
        </p>
      </fieldset>
    </div>
  );
};

export default AboutPeople;