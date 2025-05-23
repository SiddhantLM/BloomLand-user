import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useAnimationControls } from "motion/react";
import vocal from "../../assets/vocal.png";
import medium from "../../assets/medium.png";
import elephant from "../../assets/elephantjournal.png";
import authority from "../../assets/Authority-Magazine.png";
import thrive from "../../assets/Thrive-Global-Logo.png";

// Add this to your components folder
const IconsList = () => {
  // Use your actual logo paths here
  const logos = [
    { id: 1, name: "Vocal", imgSrc: vocal },
    { id: 2, name: "Medium", imgSrc: medium },
    {
      id: 3,
      name: "Elephant Journal",
      imgSrc: elephant,
    },
    {
      id: 4,
      name: "Authority Magazine",
      imgSrc: authority,
    },
    { id: 5, name: "Thrive Global", imgSrc: thrive },
  ];

  // Duplicate the logos to create a seamless infinite loop effect
  const allLogos = [...logos, ...logos];

  // const containerRef = useRef(null);
  // const controls = useAnimationControls();

  // useEffect(() => {
  //   const startAnimation = async () => {
  //     // Get the width of the container to determine how far to animate
  //     const containerWidth = containerRef.current?.offsetWidth || 0;

  //     // Start the animation sequence
  //     await controls.start({
  //       x: -containerWidth / 2, // Move exactly half the width to create seamless loop
  //       transition: {
  //         duration: 35, // Seconds for one complete rotation (adjust for speed)
  //         ease: "linear", // Constant speed
  //         repeat: Infinity, // Repeat forever
  //       },
  //     });
  //   };

  //   startAnimation();

  //   // Handle window resize
  //   const handleResize = () => {
  //     startAnimation();
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [controls]);

  // ref={containerRef}

  return (
    <div className="w-full bg-inherit md:py-8 overflow-hidden">
      <div className=" mx-auto">
        <div className="relative w-full overflow-hidden">
          <div className="w-full relative my-10">
            <div className="animate-slide flex w-max">
              {allLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex-shrink-0 md:mx-8 mx-0  px-0 py-0 bg-inherit rounded-lg transition-all duration-300 hover:scale-110"
                  style={{ width: "160px" }}
                >
                  <img
                    src={logo.imgSrc}
                    alt={logo.name}
                    className="w-24 md:w-full md:h-24 h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconsList;
