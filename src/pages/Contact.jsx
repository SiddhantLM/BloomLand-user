import { useState } from "react";
import { Phone, Mail, MapPin, Twitter, Instagram, Disc, X } from "lucide-react";
import { ReactComponent as Whatsapp } from "../assets/Whatsapp.svg";
import { createTicket } from "../services/operations/ticket";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

export default function Contact() {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || e.dataTransfer.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    setImages((prev) => [...prev, ...imageFiles]);
  };

  const handleImageRemove = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("email", formData.email);
    data.append("category", formData.subject);
    data.append("description", formData.message);

    if (images && images.length > 0) {
      data.append("images", images);
    }

    await createTicket({ data });
    setFormData({
      email: "",
      subject: "",
      message: "",
    });
    setImages([]);
  };

  return (
    <div className="w-full h-full overflow-ato min-h-screen mx-auto shadow-lg rounded-lg">
      <Navbar />
      <div className="pt-10 md:flex w-full h-full min-h-screen">
        {/* Left side - Dark panel */}
        <div className="bg-[#E16B33] text-white p-8 w-full md:w-2/5 relative  justify-center flex flex-col">
          <h2 className="text-2xl font-bold mb-2 text-start">
            Contact Information
          </h2>
          <p className="text-[#E3FDFF] mb-12">
            Say something to start a live chat!
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-center">
              <Phone className="mr-4 text-[#E3FDFF]" size={20} />
              <span>+1012 3456 789</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-4 text-[#E3FDFF]" size={20} />
              <span>demo@gmail.com</span>
            </div>
            <div className="flex items-start">
              <MapPin className="mr-4 text-[#E3FDFF] mt-1" size={20} />
              <span>
                132 Dartmouth Street Boston,
                <br />
                Massachusetts 02156 United States
              </span>
            </div>
          </div>

          {/* Social icons */}
          <div className="absolute bottom-8 flex space-x-4 ">
            <div className="bg-gray-800 p-2 rounded-full cursor-pointer hover:bg-gray-700">
              <Twitter size={20} />
            </div>
            <div className="bg-gray-800 p-2 rounded-full cursor-pointer hover:bg-gray-700">
              <Instagram size={20} />
            </div>
            <div className="bg-gray-800 p-2 rounded-full cursor-pointer hover:bg-gray-700">
              <Whatsapp className="text-white w-[21px]" />
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#F9A26B] rounded-full opacity-20 -mr-16 -mb-16"></div>
        </div>

        {/* Right side - Form */}
        <div className="bg-white p-8 w-full md:w-3/5 flex flex-col  justify-center">
          <div className="space-y-6 flex flex-col md:w-3/4 mx-auto">
            {/* Heading */}
            <h1 className="text-[#E16B33] font-bold text-3xl">Get In Touch</h1>

            {/* Email and Phone row */}
            <div className="flex flex-col md:flex-row">
              <div className="w-full">
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#E16B33]"
                  placeholder=""
                />
              </div>
            </div>

            {/* Subject selection */}
            <div>
              <label className="block text-sm text-gray-600 mb-3 font-semibold">
                Select Subject?
              </label>
              <div className="flex flex-wrap gap-4">
                {["inquiry", "auth", "event"].map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="subject"
                      value={option}
                      checked={formData.subject === option}
                      onChange={handleChange}
                      className="mr-2 appearance-none w-4 h-4 rounded-full border border-gray-300 checked:bg-[#E16B33] checked:border-transparent focus:outline-none relative"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message area */}
            <div>
              <label className="block text-sm text-gray-600 mb-1 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#E16B33] resize-none"
                rows={3}
              ></textarea>
            </div>

            {/* Image upload */}
            <label className="block text-sm text-gray-600 mb-3 font-semibold">
              Screenshot
            </label>
            <div
              onDrop={(e) => {
                e.preventDefault();
                handleImageUpload(e);
              }}
              onDragOver={(e) => e.preventDefault()}
              className="w-full border-b border-gray-300 py-6 px-4 text-gray-600 text-sm text-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            >
              <label>
                Drag & drop images here or{" "}
                <span className="text-black underline">click to select</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              {images.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      className="w-20 h-20 rounded border border-gray-200 relative  overflow-visible"
                    >
                      <img
                        src={URL.createObjectURL(img)}
                        alt={`upload-${idx}`}
                        className="w-full h-full object-cover"
                      />
                      <div
                        onClick={() => handleImageRemove(idx)}
                        className="rounded-full bg-black absolute -top-1 -right-1"
                      >
                        <X size={15} className="text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit button */}
            <div className="flex justify-start relative">
              <button
                onClick={handleSubmit}
                className="bg-[#E16B33] text-white px-6 py-3 rounded-md hover:bg-[#F9A26B] focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Send Message
              </button>

              {/* Decoration */}
              {/* <div className="flex justify-start mt-8 absolute -bottom-20">
              <div className="text-gray-200">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12L5 9M5 9L8 12M5 9V15"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8L15 5M15 5L18 8M15 5V11"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 19H21"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
