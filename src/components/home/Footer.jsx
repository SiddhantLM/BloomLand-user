import React from "react";
import { Facebook, Instagram, Github, Youtube } from "lucide-react";
import Newsletter from "../common/Newsletter";
import { format } from "date-fns";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-8">
          {/* Solutions Column */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#e16b33]">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#e16b33]">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#e16b33]">
                  Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#e16b33]">
                  Commerce
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#e16b33]">
                  Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Support</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#e16b33]">
                  Submit ticket
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#e16b33]">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#e16b33]">
                  Guides
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#e16b33]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#e16b33]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#e16b33]">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#e16b33]">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          {/* <div>
            <h3 className="font-medium text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#e16b33]">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#e16b33]">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#e16b33]">
                  License
                </a>
              </li>
            </ul>
          </div> */}

          {/* Newsletter Column */}
          <div className="w-11/12 col-span-2">
            {/* <h3 className="font-medium text-gray-900 mb-4">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-600 mb-4">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p> */}
            {/* <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#e16b33] focus:border-[#e16b33]"
                required
              />
              <button
                type="submit"
                className="bg-[#e16b33] text-white px-4 py-2 rounded-md hover:bg-[#F9A26B] transition-colors"
              >
                Subscribe
              </button>
            </form> */}
            <div>
              <Newsletter />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {format(new Date(Date.now()), "yyyy")} Antinoob Solutions, All
            rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-[#e16b33]">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#e16b33]">
              <Instagram size={20} />
            </a>

            <a href="#" className="text-gray-500 hover:text-[#e16b33]">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
