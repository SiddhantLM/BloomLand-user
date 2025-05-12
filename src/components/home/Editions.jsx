import React from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";
import HikerImg from "../../assets/hiker.webp";
import day0 from "../../assets/day0.png";
import x100 from "../../assets/100x.png";
import x10 from "../../assets/10x.png";
import { ArrowRight, ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setSelected } from "../../store/slices/authSlice";

const Editions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isValid, detailsSubmitted } = useSelector((state) => state.auth);

  const content = [
    {
      id: "01",
      image: day0,
      category: "day0",
      title: "Begin your blooming journey with Day-0 edition",
      description: "where healing meets community, and intention meets action.",
    },
    {
      id: "02",
      category: "10x",
      image: x10,

      title: "Heal, expand, and bloom into your highest self ",
      description: "across the world’s most inspiring destinations.",
    },
    {
      id: "03",
      category: "100x",
      image: x100,

      title: "The Ultimate Reset.",
      description: "A Journey Back to Your Purest, Highest Self.",
    },
  ];

  return (
    <section className="relative bg-inherit">
      <AnimatePresence>
        {content &&
          content.length > 0 &&
          content.map((item) => (
            <section className="relative flex items-center" key={item.id}>
              <div className="container mx-auto px-6 py-10 md:py-10">
                <div className="flex flex-col md:flex-row md:gap-12 holographic-card bg-white border border-[#3CA18F] ">
                  <div className="w-full md:w-1/3">
                    <motion.div
                      className="rounded-lg overflow-hidden md:h-96"
                      whileInView={{ opacity: [0, 1] }}
                      // transition={{ duration: 0.8 }}
                      viewport={{ once: false, amount: 0.2 }}
                    >
                      <img
                        src={item.image}
                        alt="Hiker on mountain path"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  <div className="flex-1 md:p-10 p-5 max-h-full flex flex-col justify-between">
                    <div>
                      <div className=" capitalize mb-6 md:text-[41px] text-3xl font-medium text-[#E16B33] ">
                        {item.category} Edition
                      </div>
                      <h2 className="text-[18px] md:text-[25px] font-medium text-black mb-4">
                        {item.title}
                      </h2>
                      <p className="text-black md:text-[20px] font-light mb-8">
                        {item.description}
                      </p>
                    </div>
                    <motion.button
                      className=" w-fit text-[#E16B33] md:text-xl text-lg font-semibold flex gap-1 items-center-safe  "
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        if (isValid) {
                          if (detailsSubmitted) {
                            navigate(`/editions/${item.category}`);
                          } else {
                            dispatch(setSelected(`/editions/${item.category}`));
                            navigate("/details");
                          }
                        } else {
                          dispatch(setSelected(`/editions/${item.category}`));
                          navigate("/auth/login");
                        }
                      }}
                    >
                      Join Edition
                      <ArrowRight className="arrow-animation" />
                      {/* <span className="arrow-animation">→</span> */}
                    </motion.button>
                  </div>
                </div>
              </div>
            </section>
          ))}
      </AnimatePresence>
    </section>
  );
};

export default Editions;
