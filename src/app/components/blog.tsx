import Image from 'next/image'
import React from 'react'
import blogpage1 from "@/app/images/blogpage1.png";
import blogpage2 from "@/app/images/blogpage2.png";
import blogpage3 from "@/app/images/blogpage3.png";
import { AiOutlineLike } from "react-icons/ai";
import { LuMessageSquareMore } from "react-icons/lu";
import { FiShare2 } from "react-icons/fi";
import Link from 'next/link'

export default function Blog() {
    const blogPosts = [
        {
            id: 1,
            image: blogpage1,
            title: "10 Reasons To Do A Digital Detox Challenge",
            excerpt: "In our fast-paced digital world, taking a break from screens can improve mental clarity, reduce stress, and help you reconnect with the present moment. Explore how a digital detox challenge can bring balance to your life and enhance overall well-being."
        },
        {
            id: 2,
            image: blogpage2,
            title: "Traditional Soft Pretzels with Sweet Beer Cheese",
            excerpt: "Discover the art of making traditional soft pretzels at home, paired with a rich and savory sweet beer cheese. This recipe brings the perfect blend of textures and flavors, making it an irresistible treat for any occasion."
        },
        {
            id: 3,
            image: blogpage3,
            title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
            excerpt: "Looking for the perfect cure for a hangover? This ultimate egg-in-a-hole burger features a crispy patty, a perfectly fried egg, and savory toppings, offering comfort and satisfaction all in one delicious bite."
        },
    ]
    return (
        <div className="bg-black font-[sans-serif] text-white">
            {/* Main container with padding and max-width */}
            <div className="px-4 sm:px-6 lg:px-8 py-7 mx-auto max-w-screen-xl">
                {/* Section Heading */}
                <div className="flex flex-col text-center text-white w-full mb-8">
                    <h2 className="text-[#FF9F0D] text-lg font-bold font-Great Vibes">
                        Blog Post
                    </h2>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] mt-2 leading-tight">
                        <span className="text-[#FF9F0D]">Le</span>test News & Blogs
                    </h1>

                </div>

                {/* Blog Cards */}
                <div className="bg-black font-[sans-serif] text-white">
                    <div className="px-4 sm:px-6 lg:px-8 py-7 mx-auto max-w-screen-xl">
                        {/* Blog Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {blogPosts.map(post => (
                                <div key={post.id} className="cursor-pointer rounded overflow-hidden border border-white relative top-0 hover:-top-2 transition-all duration-300">
                                    <Image src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                                    <div className="p-6">
                                        <span className="text-sm block text-[#FF9F0D] mb-2">10 February 2022</span>
                                        <h3 className="text-xl font-bold text-white">{post.title}</h3>
                                        <p className="text-white mt-4">{post.excerpt}</p>
                                        <div className="flex flex-row justify-between pt-6">

                                            <p><Link href={`/blog/${post.id}`} className='hover:text-[#FF9F0D]'>Learn More</Link></p>
                                            <div className="flex flex-row gap-3">
                                                <AiOutlineLike className='hover:text-[#FF9F0D]' />
                                                <LuMessageSquareMore className='hover:text-[#FF9F0D]' />
                                                <FiShare2 className='hover:text-[#FF9F0D]' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* More Blogs Button */}
                <div className="text-center mt-8">
                    <Link href="/blog">
                        <button className="bg-[#FF9F0D] text-white py-2 px-6 rounded-full font-semibold hover:bg-[#e6890a] transition duration-300">
                            More Blogs
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
