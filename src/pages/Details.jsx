import { useState } from "react";
import illustration from "../assets/illustration.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { submitDetails } from "../services/operations/auth";
// import { useEffect } from "react";
// import { useEffect } from "react";

export default function Details() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState(new Date().toISOString().split("T")[0]);
  const [journey, setJourney] = useState("");
  const [experience, setExperience] = useState([]);
  const [reason, setReason] = useState([]);
  const [reasonOther, setReasonOther] = useState("");
  const [area, setArea] = useState([]);
  const [state, setState] = useState("");
  const [bloom, setBloom] = useState([]);
  const [ready, setReady] = useState("");
  const [notes, setNotes] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { selected } = useSelector((state) => state.auth);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!name) {
      alert("Please enter your full name.");
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // console.log(formData);
    const data = {
      name,
      email,
      mobile,
      dob,
      journey,
      experience,
      reason: [...reason, reasonOther],
      area,
      state,
      bloom,
      ready,
      notes,
    };
    dispatch(submitDetails(data, token, navigate, selected));
  };

  // Check if a checkbox is checked - handle undefined arrays safely
  const isChecked = (name, value) => {
    let arr = null;

    if (name === "experience") {
      arr = experience;
    } else if (name === "reason") {
      arr = reason;
    } else if (name === "area") {
      arr = area;
    } else if (name === "bloom") {
      arr = bloom;
    } else if (name === "ready") {
      arr = ready;
    }

    return arr.includes(value);
  };

  return (
    <div className="flex min-h-screen relative overflow-x-hidden w-full overflow-y-auto">
      <div className="w-1/2 md:fixed hidden md:block top-0 left-0 h-screen">
        <img
          src={illustration}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="my-10 px-4 absolute md:right-26 mr-auto overflow-y-auto">
        {/* Commented error and success messages */}
        <svg
          className="leaf-decoration leaf-1"
          viewBox="0 0 512 512"
          fill="#84a98c"
        >
          <path d="M503.7,274.9c-2.8-13.8-12.5-33.9-35.7-57.3c-38.3-38.5-73.5-53.1-99.9-61.1c22-30.7,55.9-80.2,74.5-128.7 c2.8-7.5-5.5-14.5-12.6-10.9c-27.3,14.1-64.4,42.2-97.7,73c-24.2,22.5-54.2,83-70.9,119c-19.4-4.9-39.8-8-60.9-9 c-75.3-3.8-91.3,9.5-104.4,27.3c-43.6-9.5-68.8,13.7-80.4,37.5c-9.6,19.5-7.5,43,5.5,61.5c4.8,6.7,15.5,0.3,10.9-6.5 c-29.4-43.4-2.9-76.1,35.7-73.4c-9.1,20,5.9,50,20.4,58.1c11.9,6.7,47.4-5.5,53.4-12.1s2.8-30.7-3.5-49.5 c14.6-10.7,22.1-11.5,95.1-8.1c61.4,2.9,99.5,10.6,137.1,27.1c0.1,7,1,20.1,11.2,33.9c17,22.8,47.1,20.1,58.8,8.6 c19.3-19.1,13.9-51,8.4-65.4c35-25.9,39.5-34.2,47.9-11.3c9.6,26-12.9,46.2-38.3,58.4c-7.9,3.8-1.5,15.7,6.7,12.5 C490.6,390.7,567,355.9,503.7,274.9z M321.4,316.2c-27.9-14.9-71.3-26.6-134.7-28.7c-63.7-2.1-87.4,4.5-103.9,9.9 c33.9-58.3,177.5-77.5,285.7,8.5C356.6,309.9,340.8,314.1,321.4,316.2z"></path>
        </svg>
        <svg
          className="leaf-decoration leaf-2"
          viewBox="0 0 512 512"
          fill="#84a98c"
        >
          <path d="M503.7,274.9c-2.8-13.8-12.5-33.9-35.7-57.3c-38.3-38.5-73.5-53.1-99.9-61.1c22-30.7,55.9-80.2,74.5-128.7 c2.8-7.5-5.5-14.5-12.6-10.9c-27.3,14.1-64.4,42.2-97.7,73c-24.2,22.5-54.2,83-70.9,119c-19.4-4.9-39.8-8-60.9-9 c-75.3-3.8-91.3,9.5-104.4,27.3c-43.6-9.5-68.8,13.7-80.4,37.5c-9.6,19.5-7.5,43,5.5,61.5c4.8,6.7,15.5,0.3,10.9-6.5 c-29.4-43.4-2.9-76.1,35.7-73.4c-9.1,20,5.9,50,20.4,58.1c11.9,6.7,47.4-5.5,53.4-12.1s2.8-30.7-3.5-49.5 c14.6-10.7,22.1-11.5,95.1-8.1c61.4,2.9,99.5,10.6,137.1,27.1c0.1,7,1,20.1,11.2,33.9c17,22.8,47.1,20.1,58.8,8.6 c19.3-19.1,13.9-51,8.4-65.4c35-25.9,39.5-34.2,47.9-11.3c9.6,26-12.9,46.2-38.3,58.4c-7.9,3.8-1.5,15.7,6.7,12.5 C490.6,390.7,567,355.9,503.7,274.9z M321.4,316.2c-27.9-14.9-71.3-26.6-134.7-28.7c-63.7-2.1-87.4,4.5-103.9,9.9 c33.9-58.3,177.5-77.5,285.7,8.5C356.6,309.9,340.8,314.1,321.4,316.2z"></path>
        </svg>
        <div className="max-w-3xl mx-auto">
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-10">
            {/* Header */}
            <div className="relative pt-10 pb-5 text-center">
              <div className="absolute top-0 left-0 w-full h-4 bg-green-600"></div>
              <div className="w-20 h-20 rounded-full bg-amber-50 border-2 border-green-600 mx-auto mb-5 flex items-center justify-center text-green-700 font-medium">
                LOGO
              </div>
              <h1 className="text-3xl font-serif text-gray-800 mb-4">
                Personal Growth Journey
              </h1>
              <p className="text-base text-green-700 max-w-xl mx-auto leading-relaxed">
                Embark on a transformative path to discover your true potential
                and nurture your wellbeing through our guided experience.
              </p>
              <div className="w-48 h-0.5 bg-green-100 mx-auto mt-6"></div>
            </div>

            {/* Progress Bar */}
            <div className="px-10 py-6">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-green-600 rounded-full w-1/3"></div>
                </div>
                <div className="absolute top-0 left-0 transform -translate-y-1/2 w-full flex justify-between">
                  <div className="w-5 h-5 rounded-full bg-green-700 border-2 border-green-700"></div>
                  <div className="w-5 h-5 rounded-full bg-green-600 border-2 border-green-600"></div>
                  <div className="w-5 h-5 rounded-full bg-white border-2 border-green-600"></div>
                  <div className="w-5 h-5 rounded-full bg-white border-2 border-green-600"></div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-10 py-6">
              {/* Section 1: Basic Information */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-6 text-gray-700 flex items-center">
                  About You
                  <span className="ml-4 h-px bg-gray-200 flex-grow"></span>
                </h2>

                <div className="mb-6">
                  <label
                    htmlFor="fullName"
                    className="block mb-2 text-sm text-green-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border-2 border-green-100 rounded-lg focus:outline-none focus:border-green-600 focus:ring focus:ring-green-100"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-green-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border-2 border-green-100 rounded-lg focus:outline-none focus:border-green-600 focus:ring focus:ring-green-100"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="mobile"
                    className="block mb-2 text-sm text-green-700"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Your mobile number"
                    className="w-full px-4 py-3 border-2 border-green-100 rounded-lg focus:outline-none focus:border-green-600 focus:ring focus:ring-green-100"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="dob"
                    className="block mb-2 text-sm text-green-700"
                  >
                    Date of Birth
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-green-100 rounded-lg focus:outline-none focus:border-green-600 focus:ring focus:ring-green-100"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Journey Information */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-6 text-gray-700 flex items-center">
                  Your Journey
                  <span className="ml-4 h-px bg-gray-200 flex-grow"></span>
                </h2>

                <div className="mb-6">
                  <label
                    htmlFor="journey"
                    className="block mb-2 text-sm text-green-700"
                  >
                    What best describes your current journey?
                  </label>
                  <select
                    id="journey"
                    name="journey"
                    value={journey}
                    onChange={(e) => setJourney(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-green-100 rounded-lg focus:outline-none focus:border-green-600 focus:ring focus:ring-green-100"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="creative">Creative</option>
                    <option value="professional">Professional</option>
                    <option value="wellness">Wellness Explorer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block mb-2 text-sm text-green-700">
                    What has been the most beautiful experience you've had for
                    your personal growth so far?
                  </label>
                  <div className="mt-3 space-y-3">
                    {[
                      {
                        id: "experience1",
                        value: "retreat",
                        label: "A Retreat",
                      },
                      {
                        id: "experience2",
                        value: "book",
                        label: "A Life-Changing Book",
                      },
                      {
                        id: "experience3",
                        value: "mentor",
                        label: "A Transformational Mentor",
                      },
                      {
                        id: "experience4",
                        value: "travel",
                        label: "Deep Travel",
                      },
                      {
                        id: "experience5",
                        value: "healing",
                        label: "Personal Healing",
                      },
                      {
                        id: "experience6",
                        value: "searching",
                        label: "Still Searching",
                      },
                    ].map((item) => (
                      <div key={item.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={item.id}
                          name="experience"
                          value={item.value}
                          checked={isChecked("experience", item.value)}
                          onChange={() =>
                            setExperience((prev) => {
                              if (prev.includes(item.value)) {
                                return prev.filter((i) => i !== item.value);
                              } else {
                                return [...prev, item.value];
                              }
                            })
                          }
                          className="opacity-0 absolute h-5 w-5"
                        />
                        <div
                          className={`border-2 rounded h-5 w-5 flex flex-shrink-0 justify-center items-center mr-3 ${
                            isChecked("experience", item.value)
                              ? "bg-white border-green-600"
                              : "bg-white border-green-600"
                          }`}
                        >
                          {isChecked("experience", item.value) && (
                            <svg
                              className="fill-current w-3 h-3 text-green-600 pointer-events-none"
                              viewBox="0 0 20 20"
                            >
                              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                            </svg>
                          )}
                        </div>
                        <label
                          htmlFor={item.id}
                          className="text-sm text-gray-700"
                        >
                          {item.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block mb-2 text-sm text-green-700">
                    What made you realize it's time to adapt or shift something
                    within you?
                  </label>
                  <div className="mt-3 space-y-3">
                    {[
                      {
                        id: "reason1",
                        value: "restlessness",
                        label: "Inner Restlessness",
                      },
                      {
                        id: "reason2",
                        value: "burnout",
                        label: "Burnout Signs",
                      },
                      {
                        id: "reason3",
                        value: "health",
                        label: "Desire for a Healthier Life",
                      },
                      {
                        id: "reason4",
                        value: "disconnected",
                        label: "Feeling Disconnected",
                      },
                      {
                        id: "reason5",
                        value: "meaning",
                        label: "Craving Deeper Meaning",
                      },
                      {
                        id: "reason6",
                        value: "intuitive",
                        label: "Intuitive Calling",
                      },
                    ].map((item) => (
                      <div key={item.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={item.id}
                          name="reason"
                          value={item.value}
                          checked={isChecked("reason", item.value)}
                          onChange={() =>
                            setReason((prev) => {
                              if (prev.includes(item.value)) {
                                return prev.filter((i) => i !== item.value);
                              } else {
                                return [...prev, item.value];
                              }
                            })
                          }
                          className="opacity-0 absolute h-5 w-5"
                        />
                        <div
                          className={`border-2 rounded h-5 w-5 flex flex-shrink-0 justify-center items-center mr-3 ${
                            isChecked("reason", item.value)
                              ? "bg-white border-green-600 accent-green-600"
                              : "bg-white border-green-600"
                          }`}
                        >
                          {isChecked("reason", item.value) && (
                            <svg
                              className="fill-current w-3 h-3 text-green-600 pointer-events-none"
                              viewBox="0 0 20 20"
                            >
                              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                            </svg>
                          )}
                        </div>
                        <label
                          htmlFor={item.id}
                          className="text-sm text-gray-700"
                        >
                          {item.label}
                        </label>
                      </div>
                    ))}
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="reason7"
                        name="reason"
                        value="other"
                        checked={isChecked("reason", "other")}
                        onChange={() =>
                          setReason((prev) => {
                            if (prev.includes("other")) {
                              return prev.filter((i) => i !== "other");
                            } else {
                              return [...prev, "other"];
                            }
                          })
                        }
                        className="opacity-0 absolute h-5 w-5"
                      />
                      <div
                        className={`border-2 rounded h-5 w-5 flex flex-shrink-0 justify-center items-center mr-3 ${
                          isChecked("reason", "other")
                            ? "bg-white border-green-600"
                            : "bg-white border-green-600"
                        }`}
                      >
                        {isChecked("reason", "other") && (
                          <svg
                            className="fill-current w-3 h-3 text-green-600 pointer-events-none"
                            viewBox="0 0 20 20"
                          >
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                          </svg>
                        )}
                      </div>
                      <label
                        htmlFor="reason7"
                        className="text-sm text-gray-700"
                      >
                        Other
                      </label>
                      {isChecked("reason", "other") && (
                        <input
                          type="text"
                          name="reasonOther"
                          value={reasonOther}
                          onChange={(e) => setReasonOther(e.target.value)}
                          placeholder="Please specify"
                          className="ml-3 px-3 py-1 border-2 border-green-100 rounded"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Areas of Focus */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-6 text-gray-700 flex items-center">
                  Your Focus Areas
                  <span className="ml-4 h-px bg-gray-200 flex-grow"></span>
                </h2>

                <div className="mb-6">
                  <label className="block mb-2 text-sm text-green-700">
                    What areas of your life are calling for the most love and
                    attention right now?
                  </label>
                  <div className="mt-3 space-y-3">
                    {[
                      {
                        id: "area1",
                        value: "clarity",
                        label: "Mental Clarity",
                      },
                      {
                        id: "area2",
                        value: "energy",
                        label: "Physical Energy",
                      },
                      {
                        id: "area3",
                        value: "emotional",
                        label: "Emotional Healing",
                      },
                      { id: "area4", value: "peace", label: "Inner Peace" },
                      {
                        id: "area5",
                        value: "purpose",
                        label: "Connection to Purpose",
                      },
                      {
                        id: "area6",
                        value: "community",
                        label: "A Conscious Community",
                      },
                    ].map((item) => (
                      <div key={item.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={item.id}
                          name="area"
                          value={item.value}
                          checked={isChecked("area", item.value)}
                          onChange={() =>
                            setArea((prev) => {
                              if (prev.includes(item.value)) {
                                return prev.filter((i) => i !== item.value);
                              } else {
                                return [...prev, item.value];
                              }
                            })
                          }
                          className="opacity-0 absolute h-5 w-5"
                        />
                        <div
                          className={`border-2 rounded h-5 w-5 flex flex-shrink-0 justify-center items-center mr-3 ${
                            isChecked("area", item.value)
                              ? "bg-white border-green-600"
                              : "bg-white border-green-600"
                          }`}
                        >
                          {isChecked("area", item.value) && (
                            <svg
                              className="fill-current w-3 h-3 text-green-600 pointer-events-none"
                              viewBox="0 0 20 20"
                            >
                              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                            </svg>
                          )}
                        </div>
                        <label
                          htmlFor={item.id}
                          className="text-sm text-gray-700"
                        >
                          {item.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block mb-2 text-sm text-green-700">
                    Which statement best reflects your present state?
                  </label>
                  <div className="mt-3 space-y-3">
                    {[
                      {
                        id: "state1",
                        value: "thriving",
                        label: "I'm thriving but seeking deeper meaning",
                      },
                      {
                        id: "state2",
                        value: "turning",
                        label: "I feel I'm at a turning point",
                      },
                      {
                        id: "state3",
                        value: "reset",
                        label: "I'm ready for a full reset and renewal",
                      },
                    ].map((item) => (
                      <div key={item.id} className="flex items-center">
                        <input
                          type="radio"
                          id={item.id}
                          name="state"
                          value={item.value}
                          checked={state === item.value}
                          onChange={() => setState(item.value)}
                          className="opacity-0 absolute h-5 w-5"
                        />
                        <div
                          className={`border-2 rounded-full h-5 w-5 flex flex-shrink-0 justify-center items-center mr-3 ${
                            state === item.value
                              ? "border-green-600"
                              : "border-green-600"
                          }`}
                        >
                          {state === item.value && (
                            <div className="rounded-full h-2.5 w-2.5 bg-green-600"></div>
                          )}
                        </div>
                        <label
                          htmlFor={item.id}
                          className="text-sm text-gray-700"
                        >
                          {item.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block mb-2 text-sm text-green-700">
                    What are you most hoping to bloom into through this journey?
                  </label>
                  <div className="mt-3 space-y-3">
                    {[
                      {
                        id: "bloom1",
                        value: "recharged",
                        label: "A Recharged Self",
                      },
                      {
                        id: "bloom2",
                        value: "vision",
                        label: "A Clearer Vision",
                      },
                      {
                        id: "bloom3",
                        value: "health",
                        label: "A Healthier Body and Mind",
                      },
                      {
                        id: "bloom4",
                        value: "joy",
                        label: "Deeper Inner Joy",
                      },
                      {
                        id: "bloom5",
                        value: "friendships",
                        label: "Lifelong Conscious Friendships",
                      },
                    ].map((item) => (
                      <div key={item.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={item.id}
                          name="bloom"
                          value={item.value}
                          checked={isChecked("bloom", item.value)}
                          onChange={() =>
                            setBloom((prev) => {
                              if (prev.includes(item.value)) {
                                return prev.filter((i) => i !== item.value);
                              } else {
                                return [...prev, item.value];
                              }
                            })
                          }
                          className="opacity-0 absolute h-5 w-5"
                        />
                        <div
                          className={`border-2 rounded h-5 w-5 flex flex-shrink-0 justify-center items-center mr-3 ${
                            isChecked("bloom", item.value)
                              ? "bg-white border-green-600"
                              : "bg-white border-green-600"
                          }`}
                        >
                          {isChecked("bloom", item.value) && (
                            <svg
                              className="fill-current w-3 h-3 text-green-600 pointer-events-none"
                              viewBox="0 0 20 20"
                            >
                              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                            </svg>
                          )}
                        </div>
                        <label
                          htmlFor={item.id}
                          className="text-sm text-gray-700"
                        >
                          {item.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block mb-2 text-sm text-green-700">
                    How ready are you to invest time, energy, and intention into
                    yourself during this edition?
                  </label>
                  <div className="mt-3 space-y-3">
                    {[
                      { id: "ready1", value: "100", label: "100% Ready" },
                      {
                        id: "ready2",
                        value: "mostly",
                        label: "Mostly Ready",
                      },
                      {
                        id: "ready3",
                        value: "opening",
                        label: "Still Opening to It",
                      },
                    ].map((item) => (
                      <div key={item.id} className="flex items-center">
                        <input
                          type="radio"
                          id={item.id}
                          name="ready"
                          value={item.value}
                          checked={ready === item.value}
                          onChange={() => setReady(item.value)}
                          className="opacity-0 absolute h-5 w-5"
                        />
                        <div
                          className={`border-2 rounded-full h-5 w-5 flex flex-shrink-0 justify-center items-center mr-3 ${
                            ready === item.value
                              ? "border-green-600"
                              : "border-green-600"
                          }`}
                        >
                          {ready === item.value && (
                            <div className="rounded-full h-2.5 w-2.5 bg-green-600"></div>
                          )}
                        </div>
                        <label
                          htmlFor={item.id}
                          className="text-sm text-gray-700"
                        >
                          {item.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block mb-2 text-sm text-green-700">
                    Is there anything you'd like us to know to support your
                    journey into this Edition?
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows="4"
                    placeholder="Share any additional thoughts or questions (optional)"
                    className="w-full px-4 py-3 border-2 border-green-100 rounded-lg focus:outline-none focus:border-green-600 focus:ring focus:ring-green-100"
                  ></textarea>
                </div>
              </div>

              <div className="text-center pt-4 pb-8">
                <button
                  type="submit"
                  className="px-10 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-md transition-all text-lg font-medium"
                >
                  Begin Your Journey
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
