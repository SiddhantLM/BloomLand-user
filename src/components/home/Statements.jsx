import React from "react";
import man from "../../assets/man.jpg";
// eslint-disable-next-line no-unused-vars
import { motion, useAnimationControls } from "motion/react";

const Statements = () => {
  const content = [
    {
      name: "Harsh Bhatt",
      position: "Director",
      company: "Antinoob",
      image: man,
      statement:
        "with the world's finest healers, guides, and leaders to create journeys of deep renewal, connection, and expansion",
    },
    {
      name: "Harsh Bhatt",
      position: "Director",
      company: "Antinoob",
      image: man,
      statement:
        "with the world's finest healers, guides, and leaders to create journeys of deep renewal, connection, and expansion",
    },
    {
      name: "Harsh Bhatt",
      position: "Director",
      company: "Antinoob",
      image: man,
      statement:
        "with the world's finest healers, guides, and leaders to create journeys of deep renewal, connection, and expansion",
    },
    {
      name: "Harsh Bhatt",
      position: "Director",
      company: "Antinoob",
      image: man,
      statement:
        "with the world's finest healers, guides, and leaders to create journeys of deep renewal, connection, and expansion",
    },
  ];

  // Duplicate content to create a seamless loop
  const allContent = [...content, ...content];

  // const containerRef = useRef(null);
  // const controls = useAnimationControls();

  // useEffect(() => {
  //   const startAnimation = async () => {
  //     // Get the width of the container to determine how far to animate
  //     const containerWidth = containerRef.current?.offsetWidth || 0;

  //     // First, set the initial position to the left
  //     await controls.set({ x: -containerWidth / 2 });

  //     // Then animate towards the right
  //     await controls.start({
  //       x: 0, // Move towards right (from -containerWidth/2 to 0)
  //       transition: {
  //         duration: 35, // Seconds for one complete rotation
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
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-xl font-semibold  pl-3">
        Statements from our Bloom leaders and Bloomers
      </h1>
      <div className="relative w-full overflow-hidden">
        <div className="w-full relative">
          <motion.div className="flex gap-5 my-10 w-max animate-slide-reverse">
            {allContent.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 max-w-xs p-6 bg-white rounded-3xl shadow-sm"
                style={{ backgroundColor: "#F9FEFF" }}
              >
                <div className="flex items-center mb-7">
                  <div className="w-12 h-12 bg-gray-500 rounded-full mr-3 overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.name}'s profile`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-sm">
                      <span className="text-[#F7751E] text-xs">
                        {item.position}
                      </span>
                      <span className="mx-1">•</span>
                      <span className="text-[#F7751E] font-semibold text-xs">
                        {item.company}
                      </span>
                    </p>
                  </div>
                </div>

                <p className="text-black font-semibold leading-relaxed">
                  {item.statement}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Statements;
