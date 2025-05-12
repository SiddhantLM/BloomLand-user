/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import HikerImg from "../assets/hiker.webp";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import Navbar from "../components/home/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { joinEvent, sendRequest } from "../services/operations/event";
import { setSelected } from "../store/slices/authSlice";
import Card from "../components/event/Card";

const EventsPage = () => {
  const location = useLocation();
  const [edition, setEdition] = useState(null);
  const [isAllowed, setIsAllowed] = useState(false);
  const { level } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { token, detailsSubmitted } = useSelector((state) => state.auth);
  const { requests, approved } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const currPage = location.pathname.split("/");
    setEdition(currPage[currPage.length - 1]);
  }, [location]);

  useEffect(() => {
    if (edition === "day0" && level > 0) {
      setIsAllowed(true);
    } else if (edition === "10x" && level > 1) {
      setIsAllowed(true);
    } else if (edition === "100x" && level > 2) {
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }
  }, [level, edition]);

  const [events, setEvents] = useState(null);
  const Event = useSelector((state) => state.event);
  useEffect(() => {
    setEvents(Event.events.filter((e) => e.category === edition));
  }, [Event, edition]);

  const handleRequest = (eventId) => {
    if (!token) {
      console.log(window.location.pathname);
      dispatch(setSelected(window.location.pathname));
      navigate("/auth/login");
    } else {
      if (!detailsSubmitted) {
        dispatch(setSelected(window.location.pathname));
        navigate("/auth/login");
      } else {
        if (isAllowed) {
          dispatch(joinEvent({ token, eventId }));
        } else {
          dispatch(sendRequest({ token: token, eventId: eventId }));
        }
      }
    }
  };

  const isApproved = (eventId) => {
    const temp = approved.map((e) => e._id);
    if (temp.includes(eventId)) {
      return true;
    } else {
      return false;
    }
  };

  const requestSent = (eventId) => {
    const temp = requests.map((e) => e._id);
    if (temp.includes(eventId)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="bg-white">
      <Navbar />
      <section className="relative min-h-screen  flex items-center pt-16">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <div className="text-[8rem] font-bold text-gray-600 opacity-30 leading-none">
                {edition}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#E16B33] -mt-6 mb-6">
                What level of hiker are you?
              </h2>
              <p className="text-black opacity-80 mb-8">
                Determine your level of hiking expertise and find the trail that
                matches your experience. From beginners looking for gentle paths
                to experienced adventurers seeking challenging terrain, we have
                trails for every skill level. Our expert-curated selections
                ensure you'll find the perfect match for your outdoor adventure
                goals.
              </p>
              <motion.button
                className="px-6 py-3 bg-[#E16B33] text-white rounded-md text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Take the Quiz
              </motion.button>
            </div>
            <div className="w-full md:w-1/2">
              <motion.div
                className="rounded-lg overflow-hidden h-80 md:h-96"
                whileInView={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <img
                  src={HikerImg}
                  alt="Hiker on mountain path"
                  className="w-full h-full object-cover select-none"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="  md:h-[150px] h-[50px] " />
      <section className="min-h-screen items-center justify-center ">
        <div className="container mx-auto py-20">
          <h1 className="[word-spacing:7px] mt-20 mb-6 text-[#E16B33] font-bold text-4xl md:px-1 px-5 underline-offset-12 underline decoration-[#E16B33]">
            All{" "}
            <span className="text-[#E16B33] italic">
              {edition === "day0"
                ? "Day 0"
                : edition === "10x"
                ? "10x"
                : "100x"}{" "}
            </span>
            Events
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-16 my-5  md:px-0 px-5 py-10 container w-fit">
            {events &&
              events.map((event) => (
                // <div
                //   key={event.id}
                //   className=" w-full h-52 flex py-8 px-5 rounded-lg hover:scale-101 duration-300 holographic-card  bg-white"
                // >
                //   {/* <div className=""> */}
                //   <img
                //     src={HikerImg}
                //     className="h-full object-cover rounded-lg hover:touch-pinch-zoom duration-300"
                //   />
                //   {/* </div> */}
                //   <div className="px-5">
                //     <h1 className="my-3 text-[#E16B33] text-xl font-semibold">
                //       {event.title}
                //     </h1>
                //     <p
                //       className="mb-3 text- text-sm leading-6"
                //       dangerouslySetInnerHTML={{ __html: event.description }}
                //     ></p>
                //     <button
                //       onClick={() => handleRequest(event._id)}
                //       className="bg-[#E16B33] px-4 py-1 text-white rounded-lg text-sm"
                //     >
                //       {isAllowed
                //         ? isApproved(event._id)
                //           ? "Joined"
                //           : "Join Now"
                //         : requestSent(event._id)
                //         ? "Invite Requested"
                //         : "Request Invite"}
                //     </button>
                //   </div>
                // </div>
                <div className={`lg:mx-10 px-2`}>
                  <Card key={event._id} event={event} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
