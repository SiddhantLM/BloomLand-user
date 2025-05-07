import React from "react";

const SectionHeader = ({ title, subtitle, lineColor = "#000000" }) => {
  return (
    <div
      className={`w-full pt-20 flex mx-auto justify-center gap-10 container items-center bg-inherit`}
    >
      <div className={`flex-1 h-[1px] bg-[${lineColor}]`} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl capitalize text-[#E16B33] text-center">
          {title}
        </h1>
        <h1 className="text-2xl capitalize text-center">{subtitle}</h1>
      </div>
      <div className={`flex-1 h-[1px] bg-[${lineColor}]`} />
    </div>
  );
};

export default SectionHeader;
