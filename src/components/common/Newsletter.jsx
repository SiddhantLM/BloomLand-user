import React, { useState } from "react";
import { newslettter } from "../../services/operations/ticket";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleNewsletter = async (e) => {
    e.preventDefault();
    await newslettter(email);
    setEmail("");
  };

  return (
    <>
      <h3 className="text-xl font-bold mb-3 text-[#E16B33]">
        Subscribe to our Newsletter
      </h3>
      <p className="text-gray-600 mb-4">
        Get the latest React tips and tutorials delivered to your inbox
      </p>
      <form onSubmit={handleNewsletter} className="flex">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#E16B33]"
        />
        <button
          type="submit"
          className="bg-[#E16B33] text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </>
  );
};

export default Newsletter;
