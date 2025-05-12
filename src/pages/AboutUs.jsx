import React from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import Problem from "../components/home/Problem";
import SectionHeader from "../components/common/SectionHeader";
import Solution from "../components/about/Solution";
import Mission from "../components/about/Mission";
import Faq from "../components/about/Faq";
import Socials from "../components/about/Socials";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="lg:mt-[54px] mt-[47px] bg-gradient-to-b from-[#C1EDF1] to-white rounded-xl">
        <h1 className="md:text-3xl text-xl text-center text-[#E16B33] pb-10 pt-15 font-medium">
          About Bloomland
        </h1>
        <div className="md:px-0 px-4">
          <div className="bg-inherit">
            <h1 className="md:text-4xl text-xl text-black text-center font-medium mb-3">
              BloomLand is a global wellness movement
            </h1>
            <h1 className="md:text-2xl text-base text-center text-gray-500">
              Reimagining holistic health and conscious living and a call to
              reset, reimagine and rise
            </h1>
          </div>
        </div>
      </div>

      <div className="md:pt-[1rem] pt-[3rem]">
        <div>
          <SectionHeader
            subtitle={"5 Dimensions and Facts"}
            title={"Holistic Health Problems"}
            lineColor="bg-[#3CA18F]"
          />
          <Problem />
        </div>
      </div>

      <div>
        <div className="md:my-10">
          <SectionHeader
            title={"The Solution"}
            subtitle={"A Space to Reset, Reconnect, and Rise."}
            lineColor={"bg-[#3CA18F]"}
          />
        </div>
        <Solution />
      </div>

      <div className="md:my-10 container mx-auto px-4">
        <Mission />
      </div>

      <div className="container mx-auto px-4">
        <div className="my-10">
          <SectionHeader title={"FAQS"} lineColor={"bg-[#3CA18F]"} />
        </div>
        <Faq />
      </div>

      <div className="container mx-auto px-4">
        <Socials />
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
