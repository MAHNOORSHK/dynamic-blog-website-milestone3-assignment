import Image from 'next/image'
import React from 'react'
import blog1 from "@/app/images/blog1.png"
import blog2 from "@/app/images/blog2.png"
import blog3 from "@/app/images/blog3.png"
import { AiOutlineLike } from "react-icons/ai";
import { LuMessageSquareMore } from "react-icons/lu";
import { FiShare2 } from "react-icons/fi";
import Link from 'next/link'

export default function Blog() {
    return (
        <div className="bg-black font-[sans-serif] text-white">
            {/* Main container with padding and max-width */}
            <div className="px-4 sm:px-6 lg:px-8 py-7 mx-auto max-w-screen-xl">
                {/* Section Heading */}
                <div className="flex flex-col text-center text-white w-full mb-8">
                    <h1 className="text-2xl font-medium text-[#FF9F0D]">Blog Post</h1>
                    <p className='text-[38px] font-bold'>
                        <span className="text-[#FF9F0D]">Le</span>test News & Blogs
                    </p>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Blog 1 */}
                    <div className="cursor-pointer rounded overflow-hidden border border-white relative top-0 hover:-top-2 transition-all duration-300">
                        <Image src={blog1} alt="Blog Post 1" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <span className="text-sm block text-[#FF9F0D] mb-2">10 February 2022</span>
                            <h3 className="text-xl font-bold text-white">Pellentesque Non Efficitur Mi Aliquam Convallis</h3>
                            <div className='flex flex-row justify-between pt-6'>
                                <p><Link href="#">Learn More</Link></p>
                                <div className='flex flex-row gap-3'>
                                    <AiOutlineLike />
                                    <LuMessageSquareMore />
                                    <FiShare2 />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog 2 */}
                    <div className="cursor-pointer rounded overflow-hidden border border-white relative top-0 hover:-top-2 transition-all duration-300">
                        <Image src={blog2} alt="Blog Post 2" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <span className="text-sm block text-[#FF9F0D] mb-2">10 February 2022</span>
                            <h3 className="text-xl font-bold text-white">Pellentesque Non Efficitur Mi Aliquam Convallis</h3>
                            <div className='flex flex-row justify-between pt-6'>
                                <p><Link href="#">Learn More</Link></p>
                                <div className='flex flex-row gap-3'>
                                    <AiOutlineLike />
                                    <LuMessageSquareMore />
                                    <FiShare2 />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog 3 */}
                    <div className="cursor-pointer rounded overflow-hidden border border-white relative top-0 hover:-top-2 transition-all duration-300">
                        <Image src={blog3} alt="Blog Post 3" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <span className="text-sm block text-[#FF9F0D] mb-2">10 February 2022</span>
                            <h3 className="text-xl font-bold text-white">Pellentesque Non Efficitur Mi Aliquam Convallis</h3>
                            <div className='flex flex-row justify-between pt-6'>
                                <p><Link href="#">Learn More</Link></p>
                                <div className='flex flex-row gap-3'>
                                    <AiOutlineLike />
                                    <LuMessageSquareMore />
                                    <FiShare2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
