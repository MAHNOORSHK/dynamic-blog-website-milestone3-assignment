'use client';
import Image from 'next/image';
import blogpage1 from "@/app/images/blogpage1.png";
import blogpage2 from "@/app/images/blogpage2.png";
import blogpage3 from "@/app/images/blogpage3.png";
import blogpage4 from "@/app/images/blogpage4.png";
import blogauthor from "@/app/images/blogauthor.png";
import recent1 from "@/app/images/recent1.png";
import recent2 from "@/app/images/recent2.png";
import recent3 from "@/app/images/recent3.png";
import { FaInstagram, FaPinterest, FaSearch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import Link from 'next/link';
import Navbar from '@/app/components/header';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      image: blogpage1,
      title: "10 Reasons To Do A Digital Detox Challenge",
      excerpt: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      id: 2,
      image: blogpage2,
      title: "Traditional Soft Pretzels with Sweet Beer Cheese",
      excerpt: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      id: 3,
      image: blogpage3,
      title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
      excerpt: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      id: 4,
      image: blogpage4,
      title: "My Favorite Easy Black Pizza Toast Recipe",
      excerpt: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
  ];
  return (
    <>
      <Navbar />
      <section className='w-full signup-bg-image py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
              Blog List
            </h1>
            <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
              <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
                Home
              </Link>
              <span className='text-white'>/</span>
              <Link href="/pages" className='text-[#FF9F0D]'>
                Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Page Container */}
      <div className="flex flex-wrap bg-white px-4 sm:px-6 lg:px-8">

        {/* Left Section */}
        <div className="w-full lg:w-[70%] px-6 py-12 bg-white">
          {blogPosts.map((post) => (
            <div key={post.id} className="mb-12">
              <Image
                src={post.image}
                alt={`Blog Image ${post.id}`}
                width={952}
                height={530}
                className="rounded-lg"
              />
              <h2 className="font-bold text-2xl text-gray-900 mt-4">{post.title}</h2>
              <p className="text-gray-700 mt-4">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`}>
                <button className="w-40 mt-6 py-2 px-4 border border-[#FF9F0D] text-[#FF9F0D] rounded hover:bg-[#FF9F0D] hover:text-white transition ease-in-out duration-300">
                  Read More
                </button>
              </Link>
            </div>
          ))}

          <ul className="flex space-x-5 justify-center font-[sans-serif]">
            <li className="flex items-center justify-center shrink-0 border hover:border-[#FF9F0D] cursor-pointer w-9 h-9 rounded-md">
              <svg fill="#FF9F0D" width="20px" height="20px" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"></path>
                </g>
              </svg>
            </li>
            <li
              className="flex items-center justify-center shrink-0 hover:bg-[#FF9F0D]  border hover:border-[#FF9F0D] border-[#FF9F0D] text-[#FF9F0D] hover:text-[#FFFFFF] cursor-pointer text-base font-bold px-[13px] h-9 rounded-md">
              1
            </li>
            <li
              className="flex items-center justify-center shrink-0 border hover:bg-[#FF9F0D] hover:border-[#FF9F0D] border-[#FF9F0D] text-[#FF9F0D] hover:text-[#FFFFFF] cursor-pointer text-base font-bold px-[13px] h-9 rounded-md">
              2
            </li>
            <li
              className="flex items-center justify-center shrink-0 border hover:bg-[#FF9F0D] hover:border-[#FF9F0D] border-[#FF9F0D] text-[#FF9F0D] hover:text-[#FFFFFF] cursor-pointer text-base font-bold px-[13px] h-9 rounded-md">
              3
            </li>
            <li className="flex items-center justify-center shrink-0 border hover:border-[#FF9F0D] cursor-pointer w-9 h-9 rounded-md">
              <svg fill="#FF9F0D" width="20px" height="20px" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#FF9F0D">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path>
                </g>
              </svg>
            </li>
          </ul>


        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[30%] px-6 py-12 space-y-8 bg-white border-l-2">
          {/* Search Bar */}
          <div className="flex">
            {/* Input Field */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search your keyword..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-0 focus:ring-[#FF9F0D] focus:border-[#FF9F0D] text-gray-700"
              />
            </div>

            {/* Search Icon */}
            <div className="bg-[#FF9F0D] flex items-center justify-center px-4 rounded-r-md">
              <FaSearch className="text-white" />
            </div>
          </div>

          {/* Author Info */}
          <div className="border p-6 rounded-lg text-center">
            <Image
              src={blogauthor}
              alt="Author"
              width={80}
              height={80}
              className="mx-auto rounded-full mb-4"
            />
            <h4 className="font-bold text-lg">Prince Miyako</h4>
            <p className="text-md text-gray-500">Blogger / Photographer</p>


            <div className="flex items-center justify-center">
              <svg className="w-4 h-4 text-[#FF9F0D] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-4 h-4 text-[#FF9F0D] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-4 h-4 text-[#FF9F0D] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-4 h-4 text-[#FF9F0D] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-4 h-4 text-[#FF9F0D] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">(1 Review)</p>
            </div>

            <p className="text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quas vitae reprehenderit nesciunt corrupti facilis culpa voluptatem animi repudiandae.</p>
            <div className="flex justify-center gap-[14px]">
              <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaFacebookF /></div>
              <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaTwitter /></div>
              <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaInstagram /></div>
              <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaYoutube /></div>
              <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaPinterest /></div>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="mt-10 md:mt-0 border p-2">
            <h2 className="mb-6 text-[24px] font-semibold text-black">
              Recent Post
            </h2>
            <ul className="text-black  font-medium gap-[14px]">
              <li className="flex gap-[16.5px]">
                <Image src={recent1} alt="Food" />
                <div className="ml-1">
                  <h2 className="text-[16px] text-black font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="text-[18px] font-normal text-black">
                    Keep Your Business
                  </h3>
                </div>
              </li>

              <li className="flex gap-[16.5px] mt-[14px]">
                <Image src={recent2} alt="Food" />
                <div className="ml-1">
                  <h2 className="text-[16px] text-black font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="text-[18px] font-normal text-black">
                    Keep Your Business
                  </h3>
                </div>
              </li>

              <li className="flex gap-[16.5px] mt-[14px]">
                <Image src={recent3} alt="Food" />
                <div className="ml-1">
                  <h2 className="text-[16px] text-black font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="text-[18px] font-normal text-black">
                    Keep Your Business
                  </h3>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex justify-center gap-[14px]">
              <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaFacebookF /></div>
              <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaTwitter /></div>
              <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaInstagram /></div>
              <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaYoutube /></div>
              <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaPinterest /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
