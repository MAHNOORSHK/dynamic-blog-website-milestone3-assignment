import React from "react";
import Image from "next/image";
import footer1 from "@/app/images/footer1.png";
import footer2 from "@/app/images/footer2.png";
import footer3 from "@/app/images/footer3.png";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold">
              <span className="text-[#FF9F0D]">St</span>ill Need Our Support
            </h2>
            <p className="text-sm md:text-base mt-4">
              Don&#39;t wait, make a smart & logical quote here. It’s pretty easy.
            </p>
          </div>

          <div className="flex mt-6 md:mt-0 w-full md:w-auto">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="flex-1 md:flex-none bg-[#FF9F0D] text-white py-2 px-4 md:py-3 md:px-6 outline-none placeholder:text-white"
            />
            <button className="bg-white text-[#FF9F0D] py-2 px-4 md:py-3 md:px-6">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <hr className="border-t border-[#FF9F0D] max-w-screen-xl mx-auto" />

      {/* Middle Section */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-sm text-gray-300 mb-6 leading-6">
              Corporate clients and leisure travelers rely on us for dependable, safe, and professional chauffeured car
              service in major cities across the world.
            </p>
            <div className="flex gap-4 items-start">
              <div className="bg-[#FF9F0D] p-4">
                <PiClockClockwiseBold className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-sm font-medium">Opening Hours</h3>
                <p className="text-sm">Mon - Sat (8.00 - 6.00)</p>
                <p className="text-sm">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              {["About", "News", "Partner", "Team", "Menu", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-300 hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Help?</h2>
            <ul className="space-y-2">
              {["FAQ", "Terms & Conditions", "Reporting", "Documentation", "Support Policy", "Privacy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-300 hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
            {[
              { image: footer1, date: "20 Feb 2022", title: "Keep Your Business" },
              { image: footer2, date: "18 Feb 2022", title: "Manage Effectively" },
              { image: footer3, date: "15 Feb 2022", title: "Scale for Success" },
            ].map((post, idx) => (
              <div key={idx} className="flex items-center gap-4 mb-4">
                <Image src={post.image} alt={post.title} width={64} height={64} className="object-cover" />
                <div>
                  <p className="text-sm text-gray-400">{post.date}</p>
                  <h3 className="text-sm font-medium">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#4F4F4F] px-4 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between max-w-full mx-auto">
        <p className="text-sm text-gray-300 text-center md:text-left">
          © 2024 by <a href="https://example.com" className="text-[#FF9F0D]">Mahnoor Shaikh</a>. All Rights Reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map((Icon, idx) => (
            <div
              key={idx}
              className="bg-white text-black w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#FF9F0D] hover:text-white transition"
            >
              <Icon size={18} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
