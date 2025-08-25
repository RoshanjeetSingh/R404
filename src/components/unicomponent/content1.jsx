import React from 'react';

const Content1 = ({ title, content, imageUrl, reverse }) => {
  return (
    <div className="flex justify-center items-center font-sans">
      <section
        className={`flex items-center justify-between m-1 w-[80vw] gap-8 flex-wrap bg-white border border-[rgb(133,117,117)] rounded-[10px] ${reverse ? 'flex-row-reverse' : ''}`}
      >
{imageUrl && (
  <div className="w-full h-[200px] sm:w-[40%] sm:h-auto flex items-center justify-center">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full sm:w-auto sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-[9px] pt-[3px] max-w-full"
    />
  </div>
)}
        <div className="flex-1 min-w-[250px] p-1">
          <h2 className="text-2xl mb-4 text-[#333]">{title}</h2>
          <p className="text-base text-[#555]">{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Content1;