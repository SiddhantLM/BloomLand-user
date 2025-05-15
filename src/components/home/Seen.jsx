import React from "react";
import SectionHeader from "../common/SectionHeader";
import IconsList from "./IconsList";
import Statements from "./Statements";
import Visionaries from "./Visionaries";

const Seen = () => {
  return (
    <div className="flex flex-col container mx-auto items-center">
      <div className="my-10">
        <h1 className="md:text-4xl text-2xl my-5 text-[#E16B33] text-center font-semibold">
          BloomLand is a global wellness movement
        </h1>
        <h1 className="md:text-2xl text-lg sm:w-3/4 mx-auto text-center">
          BloomLand is a global wellness movement
        </h1>
      </div>
      <div
        className={`w-full md:pt-20 flex mx-auto justify-center gap-10 container items-center bg-inherit`}
      >
        <div className={`flex-1 h-[1px] bg-[#AE7A62]`} />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl capitalize text-center">As Seen In</h1>
        </div>
        <div className={`flex-1 h-[1px] bg-[#AE7A62]`} />
      </div>
      <IconsList />

      <Statements />
      <SectionHeader title={"What We Do"} lineColor={"bg-[#3CA18F]"} />
      <Visionaries />
    </div>
  );
};

export default Seen;
