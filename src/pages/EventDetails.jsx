import React, { useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowLeft,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
} from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { joinEvent, sendRequest } from "../services/operations/event";
import { setSelected } from "../store/slices/authSlice";
import { toast } from "react-toastify";
import Navbar from "../components/home/Navbar";

export default function EventDetails() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { isValid, detailsSubmitted, token } = useSelector(
    (state) => state.auth
  );
  const user = useSelector((state) => state.user);
  const { level } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { events } = useSelector((state) => state.event);
  const location = useLocation();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const getEvent = () => {
      const currEvent = events.filter((e) => e._id === id);
      setEvent(currEvent[0]);
    };
    getEvent();
  }, [events, id]);

  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    if (event) {
      setCarouselImages(event.images);
    }
  }, [event]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === carouselImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const isAllowed = (level) => {
    let i;

    if (event?.category === "day0") {
      i = 1;
    } else if (event?.category === "10x") {
      i = 2;
    } else if (event?.category === "100x") {
      i = 3;
    }

    if (level >= i) {
      return true;
    }
    return false;
  };

  const isJoined = () => {
    let ids = user?.events?.map((e) => e._id);
    if (ids && ids.length > 0 && ids.includes(id)) {
      return true;
    }
    ids = user?.approved?.map((e) => e._id);
    if (ids && ids.length > 0 && ids.includes(id)) {
      return true;
    }

    ids = user?.requests?.map((e) => e._id);
    if (ids && ids.length > 0 && ids.includes(id)) {
      return true;
    }
    return false;
  };

  const handleNavigate = () => {
    if (isJoined()) {
      toast(
        <>
          Action already performed!
          <br />
          Check Dashboard
        </>
      );
      return;
    }
    if (isAllowed(level)) {
      dispatch(joinEvent({ token: token, eventId: id }));
    } else {
      if (isValid) {
        if (detailsSubmitted) {
          dispatch(sendRequest({ token: token, eventId: id }));
        } else {
          dispatch(setSelected(location.pathname));
          navigate("/details");
        }
      } else {
        dispatch(setSelected(location.pathname));
        navigate("/auth/login");
      }
    }
  };

  if (!event) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#9CD8D2] to-white pt-10 px-5">
        <Navbar />
        {/* Hero Section */}
        <div className="relative w-full h-fit bg-white rounded-lg mb-8 container mx-auto flex flex-col items-center justify-center mt-8">
          {/* <div className="absolute top-0 left-0 inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div> */}
          <div
            onClick={() => navigate(-1)}
            className="absolute top-5 left-5 flex items-center mb-1 bg-[#9CD8D2] to-white px-3 py-2 rounded-lg font-semibold  cursor-pointer"
          >
            <ArrowLeft size={16} className="mr-1" />
            <span className="text-sm">Back</span>
          </div>
          <div className="flex flex-col justify-end p-8 md:mt-4 mt-10 w-1/2 ">
            <h1 className="text-3xl font-bold  text-[#E16B33] mb-5">
              {event.title}
            </h1>
            <p className=" text-sm max-w-2xl mb-4 ">
              Join us for a full-day conference on the latest trends and best
              practices in digital marketing. Hear from industry experts,
              network with fellow marketers, and gain valuable insights to level
              up your digital marketing strategy. This event offers the
              opportunity to learn, connect, and grow your digital marketing
              skills.
            </p>

            {/* IMPLEMENT CAROUSEL */}

            {/* <div className="flex items-center text-xs text-gray-400">
            <span>Home</span>
            <span className="mx-1">/</span>
            <span>Events</span>
          </div> */}
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Event Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4 text-[#E16B33]">
                  About Event
                </h2>
                <p
                  className="mb-4"
                  dangerouslySetInnerHTML={{ __html: event.description }}
                ></p>
              </div>

              {/* Speaker Section */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-6 text-[#E16B33]">
                  Speaker
                </h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src="https://picsum.photos/200/300"
                      alt="Mark Johnson"
                      className="w-32 h-32 object-cover rounded-lg grayscale"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Mark Johnson</h3>
                    <p className=" mb-4">
                      A leading digital marketing expert with over 15 years of
                      experience. Mark has helped numerous businesses of all
                      sizes and industries transform their digital presence and
                      drive consistent business growth through digital
                      marketing.
                    </p>
                    <div className=" text-sm">
                      <p className="mb-1">Contact Info:</p>
                      <p className="mb-1">www.markjohnson.com</p>
                      <p>mark@digitalmarketingexpert.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Date and Time */}
              <div className="bg-white rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-6 text-[#E16B33]">
                  Date and Time
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-[#E16B33] mr-3" />
                    <span>
                      {format(new Date(event.start_date), "d MMMM, yyyy")}
                    </span>
                  </div>

                  {/* TIME */}
                  {/* <div className="flex items-center">
                  <Clock className="w-5 h-5 text-[#E16B33] mr-3" />
                  <span>{new Date(event.start_time).toLocaleTimeString()}</span>
                </div> */}
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-[#E16B33] mr-3" />
                    <span>
                      {event.location &&
                        `${event.location.city}, ${event.location.state}, ${event.location.country}`}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleNavigate}
                  className="w-full bg-[#E16B33] hover:bg- text-white py-3 rounded-lg mt-8 font-medium transition-colors flex items-center justify-center"
                >
                  {isJoined() ? (
                    <CircleCheck className="" />
                  ) : isAllowed(level) ? (
                    "Join Now"
                  ) : (
                    "Request Invite"
                  )}
                </button>
              </div>

              {/* CAROUSEL */}

              <div className="relative w-full mx-auto mb-8 rounded-lg overflow-hidden shadow-lg">
                {/* Images */}
                <div className="relative h-64 md:h-80">
                  {carouselImages &&
                    carouselImages.length > 0 &&
                    carouselImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
                          index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img
                          src={image}
                          alt="img"
                          className="w-full h-full object-cover"
                        />
                        {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <p className="text-white text-sm md:text-base font-medium">
                        {image.caption}
                      </p>
                    </div> */}
                      </div>
                    ))}
                </div>
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full focus:outline-none transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full focus:outline-none transition-colors"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Indicator dots */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-2">
                  {carouselImages &&
                    carouselImages.length > 0 &&
                    carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentSlide === index ? "bg-white" : "bg-white/50"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                </div>
              </div>

              {/* Related Events */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-6 text-[#E16B33]">
                  Related Events
                </h2>
                <div className="space-y-4">
                  {/* Event 1 */}
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <img
                        src="https://picsum.photos/200/300"
                        alt="Creative Industries Symposium"
                        className="w-16 h-16 object-cover rounded"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-[#E16B33]">
                        Creative Industries Symposium
                      </h3>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>July 25-26, 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
