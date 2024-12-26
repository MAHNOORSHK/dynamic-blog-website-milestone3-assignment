import React from 'react';
import { TiTick } from "react-icons/ti";
import restu1 from "@/app/images/restu1.png";
import restu2 from "@/app/images/restu2.png";
import restu3 from "@/app/images/restu3.png";
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="bg-black text-[#FFFFFF] min-h-screen flex items-center justify-center px-6 lg:px-12 py-14 ">
      <div className="max-w-screen-xl flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="lg:w-[50%] space-y-6">
          <h2 className="text-[#FF9F0D] text-lg font-bold font-Great Vibes">
            About Us
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] mt-2 leading-tight">
            <span className="text-[#FF9F0D]">We</span> Create the best foody product
          </h1>

          <p className="text-base pt-4 leading-7 text-justify">
          At our company, we are passionate about creating exceptional food products that deliver the perfect balance of flavor, quality, and convenience. Our products are crafted using the finest ingredients, ensuring a memorable taste experience with every bite. We understand that food is not just about nourishment, but about bringing joy and satisfaction to your daily life.           </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <TiTick className="text-xl mt-1 text-[#FF9F0D]" />
              <p className="text-lg leading-7">
              Premium Ingredients for Exceptional Flavor
              </p>
            </div>
            <div className="flex items-start gap-3">
              <TiTick className="text-xl mt-1 text-[#FF9F0D]" />
              <p className="text-lg leading-7">
              Innovative Recipes with Unique Flavor Combinations
              </p>
            </div>
            <div className="flex items-start gap-3">
              <TiTick className="text-xl mt-1 text-[#FF9F0D]" />
              <p className="text-lg leading-7">
              Convenient and Quick Meal Solutions
              </p>
            </div>
          </div>
          <button className="mt-6 px-8 py-3 bg-[#FF9F0D] text-[#FFFFFF] rounded-full font-semibold hover:bg-[#FF8C00] transition">
            Read More
          </button>
        </div>

        {/* Right Content */}
        <div className="lg:w-[50%] space-y-4">
          {/* First Image */}
          <div className="w-full">
            <Image
              src={restu1}
              alt="restaurant1"
              className="w-full h-[180px] md:h-[280px] lg:h-[400px] object-cover rounded-md"
            />
          </div>

          {/* Second and Third Image in a Row */}
          <div className="flex gap-4">
            <div className="flex-1">
              <Image
                src={restu2}
                alt="restaurant2"
                className="w-full h-[100px] md:h-[160px] lg:h-[200px] object-cover rounded-md"
              />
            </div>
            <div className="flex-1">
              <Image
                src={restu3}
                alt="restaurant3"
                className="w-full h-[100px] md:h-[160px] lg:h-[200px] object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
