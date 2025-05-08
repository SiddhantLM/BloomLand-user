import React from "react";

const SectionHeader = ({ title, subtitle, lineColor }) => {
  return (
    <div
      className={`w-full md:pt-20 pt-10 flex mx-auto justify-center gap-10 container items-center bg-inherit`}
    >
      {lineColor && <div className={`flex-1 h-[1px] ${lineColor}`} />}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl capitalize text-[#E16B33] text-center">
          {title}
        </h1>
        <h1 className="text-2xl capitalize text-center">{subtitle}</h1>
      </div>
      {lineColor && <div className={`flex-1 h-[1px] ${lineColor}`} />}
    </div>
  );
};

export default SectionHeader;
