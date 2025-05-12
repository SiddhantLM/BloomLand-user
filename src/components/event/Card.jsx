import { useEffect, useState } from "react";

export default function Card({ event }) {
  const [expanded, setExpanded] = useState(false);
  const [duration, setDuration] = useState("");

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const getDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start) || isNaN(end)) {
      console.warn("Invalid date format. Ensure the dates are in ISO format.");
      return "Invalid dates";
    }

    const diffInMs = end - start;
    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const nights = days - 1;

    return `${nights} nights, ${days} days`;
  };

  useEffect(() => {
    console.log(event);
    if (event?.start_date !== null && event?.end_data !== null) {
      const calculatedDuration = getDuration(event.start_date, event.end_data);
      setDuration(calculatedDuration);
    }
  }, [duration, event]);

  return (
    <div className="relative max-w-md rounded-lg  flex flex-col bg-">
      {/* Background image */}
      <img
        src={event.images[0]}
        alt="Conference audience"
        className="w-3/4 object-cover aspect-square rounded-3xl brightness-85"
      />

      {/* Overlay card */}
      <div className="absolute top-1/2 md:-right-[60%]  transform -translate-y-1/2 md:-translate-x-1/2 min-h-[80%] bg-gray-50  p-5 max-w-sm min-w-sm h-fit my-auto ">
        <h2 className="text-lg font-semibold tracking-wide text-black mb-3">
          {event.title}
        </h2>

        <div className="flex mb-4">
          {/* Date box */}
          <div className="relative w-16 aspect-square mr-4 ">
            {/* Outer border/outline */}
            <div className="absolute -top-1 -left-1 w-16 h-16 border-2 border-yellow-400"></div>

            {/* Main yellow box */}
            <div className="absolute top-0 left-0 bg-yellow-400 text-white text-center p-2 w-full h-full flex flex-col justify-center">
              <span className="text-sm uppercase">
                {new Date(event.start_date).toLocaleString("en-US", {
                  month: "short",
                })}
              </span>
              <span className="text-2xl font-bold">
                {new Date(event.start_date).getDate()}
              </span>
            </div>
          </div>

          {/* Time and location */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-600 mb-1 font-light">{duration}</p>
            <div className="w-full h-[1px] bg-gray-400 relative my-1">
              <div className="absolute right-0 h-[1px] w-12 bg-yellow-400 opacity-80"></div>
            </div>
            <p className="text-gray-500">
              {event.location.city}, {event.location.state},{" "}
              {event.location.country}
            </p>
          </div>
        </div>

        {/* Event description */}
        <p
          className="text-gray-700 text-sm my-4 leading-6 tracking-widest"
          dangerouslySetInnerHTML={{
            __html: expanded
              ? event.description
              : event.description.slice(0, 120),
          }}
        ></p>

        {/* Read more button */}
        {event && event.description.length > 120 && (
          <button
            onClick={toggleExpansion}
            className="text-blue-600 hover:text-blue-800 mt-2 text-sm self-start"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>
    </div>
  );
}
