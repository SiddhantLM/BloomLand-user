import React from "react";
import Editions from "../components/home/Editions";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import SectionHeader from "../components/common/SectionHeader";

const EditionsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:mt-[53px] mt-[47px]">
        <div className="md:pb-10">
          <SectionHeader title={"Our Editions"} lineColor={"bg-[#3CA18F]"} />
        </div>
        <Editions />
      </div>
      <Footer />
    </div>
  );
};

export default EditionsPage;
