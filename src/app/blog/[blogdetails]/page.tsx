'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/app/components/header';
import blogpage1 from "@/app/images/blogpage1.png";
import blogpage2 from "@/app/images/blogpage2.png";
import blogpage3 from "@/app/images/blogpage3.png";
import blogpage4 from "@/app/images/blogpage4.png";
import blogpage5 from "@/app/images/blogpage5.png";
import blogpage6 from "@/app/images/blogpage6.png";
import blogpage7 from "@/app/images/blogpage7.png";
import blogpage8 from "@/app/images/blogpage8.png";
import blogpage9 from "@/app/images/blogpage9.png";
import blogpage10 from "@/app/images/blogpage10.png";
import blogpage11 from "@/app/images/blogpage11.png";
import blogpage12 from "@/app/images/blogpage12.png";
import quote from '@/app/images/Quotes.png';
import blogauthor from "@/app/images/blogauthor.png";
import recent1 from "@/app/images/recent1.png";
import recent2 from "@/app/images/recent2.png";
import recent3 from "@/app/images/recent3.png";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaPinterest, FaRegCalendarAlt, FaRegCommentDots, FaSearch, FaTwitter, FaUserAlt, FaYoutube } from 'react-icons/fa';


type BlogPost = {
  id: number;
  image: StaticImageData;
  title: string;
  content: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: blogpage1,
    title: "10 Reasons To Do A Digital Detox Challenge",
    content: "In our fast-paced digital world, taking a break from screens can improve mental clarity, reduce stress, and help you reconnect with the present moment. Explore how a digital detox challenge can bring balance to your life and enhance overall well-being."
  },
  {
    id: 2,
    image: blogpage2,
    title: "Traditional Soft Pretzels with Sweet Beer Cheese",
    content: "Discover the art of making traditional soft pretzels at home, paired with a rich and savory sweet beer cheese. This recipe brings the perfect blend of textures and flavors, making it an irresistible treat for any occasion."
  },
  {
    id: 3,
    image: blogpage3,
    title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
    content: "Looking for the perfect cure for a hangover? This ultimate egg-in-a-hole burger features a crispy patty, a perfectly fried egg, and savory toppings, offering comfort and satisfaction all in one delicious bite."
  },
  {
    id: 4,
    image: blogpage4,
    title: "My Favorite Easy Black Pizza Toast Recipe",
    content: "Craving a quick and delicious snack? This easy black pizza toast recipe is a perfect blend of crispy toast, melted cheese, and savory toppings, all in just a few minutes. It’s the ideal comfort food for a busy day or casual evening."
  },
  {
    id: 5,
    image: blogpage5,
    title: "5 Health Benefits of a Plant-Based Diet",
    content: "Discover the many health benefits of switching to a plant-based diet. From better digestion to improved heart health, this article explores how plant-based eating can help you feel better inside and out. Learn about nutritious food options that will fuel your body and boost energy.",
  },
  {
    id: 6,
    image: blogpage6,
    title: "How to Make the Perfect Homemade Pizza",
    content: "Learn the secrets to making the perfect homemade pizza with this easy-to-follow guide. From the dough to the sauce and toppings, you'll discover how to create a crispy, cheesy pizza that tastes like it came from your favorite pizzeria. Ideal for family nights or weekend gatherings!",
  },
  {
    id: 7,
    image: blogpage7,
    title: "Exploring the Best Global Breakfast Dishes",
    content: "Breakfast around the world offers a variety of flavors and traditions. In this blog, we explore some of the best breakfast dishes from different countries. Whether it's a hearty English breakfast or a light Japanese miso soup, you'll find inspiration for your next morning meal.",
  },
  {
    id: 8,
    image: blogpage8,
    title: "Top 10 Must-Try Dessert Recipes for Chocolate Lovers",
    content: "Indulge your sweet tooth with these decadent chocolate desserts. From gooey brownies to creamy chocolate mousse, this list of must-try recipes is perfect for chocolate lovers looking to create some irresistible treats at home. Get ready to satisfy your cravings!",
  },
  {
    id: 9,
    image: blogpage9,
    title: "10 Must-Try Street Foods Around the World",
    content: "Explore the best street food from different corners of the world. From spicy tacos in Mexico to savory bao buns in Taiwan, this guide takes you through the most delicious and unique street food experiences. Get ready to satisfy your taste buds with authentic flavors from global food stalls.",
  },
  {
    id: 10,
    image: blogpage10,
    title: "How to Choose the Perfect Wine Pairing for Dinner",
    content: "Elevate your dining experience with the perfect wine pairing. Whether you're having a steak or seafood, this blog will guide you through the best wine pairings that complement your meal. Learn tips from sommeliers on how to choose wines that enhance the flavors of your dishes.",
  },
  {
    id: 11,
    image: blogpage11,
    title: "The Ultimate Guide to Vegan Dining: Best Restaurants & Recipes",
    content: "Looking for delicious vegan food options? This guide covers the best vegan-friendly restaurants and recipes. Whether you're a full-time vegan or just curious, discover tasty plant-based dishes and dining spots that cater to a cruelty-free lifestyle without compromising on flavor.",
  },
  {
    id: 12,
    image: blogpage12,
    title: "Exploring the World of Fine Dining: Top Michelin-Starred Restaurants",
    content: "Step into the world of luxury dining with a look at the finest Michelin-starred restaurants. From exquisite French cuisine to innovative culinary artistry, this blog explores the best of the best in fine dining. Learn about the dining experience, ambiance, and signature dishes that make these restaurants exceptional.",
  }
];


interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
}

export default function BlogDetail({ params }: { params: { blogdetails: string } },) {
  const router = useRouter();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  //comment
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [editComment, setEditComment] = useState<string | null>(null);

  useEffect(() => {
    if (params?.blogdetails) {
      const post = blogPosts.find((post) => post.id === parseInt(params.blogdetails));
      if (post) {
        setBlogPost(post);
      } else {
        router.push('/blog');
      }
    }
  }, [params, router]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  //comment

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
        date: new Date().toLocaleString(),
      };
      setComments((prevComments) => [...prevComments, newCommentObj]);
      setNewComment('');
      setAuthorName('');
    }
  };

  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditComment(commentId);
    }
  };

  const handleSaveComment = () => {
    if (newComment.trim() && authorName.trim() && editComment) {
      const updatedComments = comments.map((comment) =>
        comment.id === editComment
          ? { ...comment, text: newComment, author: authorName, date: new Date().toLocaleString() }
          : comment
      );
      setComments(updatedComments);
      setNewComment('');
      setAuthorName('');
      setEditComment(null);
    }
  };

  const handleDeleteComment = (commentId: string) => {
    const filteredComments = comments.filter((comment) => comment.id !== commentId);
    setComments(filteredComments);
  };


  return (
    <>
      <Navbar />
      <section className='w-full signup-bg-image py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
              Blog Details
            </h1>
            <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
              <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
                Home
              </Link>
              <span className='text-white'>/</span>
              <Link href="/pages" className='text-[#FF9F0D]'>
                Blog Details
              </Link>
            </div>
          </div>
        </div>
      </section>


      <div className="container mx-auto py-12 px-9">

        {/* Blog Layout */}
        <div className="grid lg:grid-cols-3 gap-10 justify-center">
          {/* Left Section: Comments and Form */}
          <div className="lg:col-span-2 space-y-12">
            {/* Blog Content */}
            <div>
              <Image
                src={blogPost.image}
                alt={blogPost.title}
                width={900}
                height={400}
                className="w-full rounded-lg mb-6"
              />

              {/* Page Header */}
              <div className="mt-6 space-y-4">
                {/* Date, Icons, and Metadata */}
                <div className="flex items-center text-gray-600 text-sm space-x-4">
                  {/* Date */}
                  <div className="flex items-center space-x-1">
                    <FaRegCalendarAlt className="text-[#FF9F0D]" />
                    <span>Feb 14, 2022 /</span>
                  </div>

                  {/* Comments */}
                  <div className="flex items-center space-x-1">
                    <FaRegCommentDots className="text-[#FF9F0D]" />
                    <span>3 /</span>
                  </div>

                  {/* Admin */}
                  <div className="flex items-center space-x-1">
                    <FaUserAlt className="text-[#FF9F0D]" />
                    <span>Admin</span>
                  </div>
                </div>

                {/* Blog Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {blogPost.title}
                </h1>
              </div>
              <div className="text-lg leading-relaxed text-gray-700 mb-8 pt-5">{blogPost.content}</div>
              <div className="text-lg leading-relaxed text-gray-700 mb-8 pt-5">{blogPost.content}</div>
              <div className="my-3">
                {/* Yellow Box Section */}
                <div className="bg-[#FF9F0D] flex flex-col md:flex-row p-3 md:p-8 rounded-md shadow-md my-3">
                  <Image src={quote} alt="quote" width={100} height={100} className="mx-auto md:mr-6 md:mx-0" />
                  <p className="text-white text-lg md:text-xl font-semibold text-justify p-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                  </p>
                </div>


                {/* Content After Yellow Box */}
                <div className="mt-6 space-y-6">
                  {/* First Text Section */}
                  <div>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                  {/* Text and Image Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* Text Content */}
                    <div>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                      </p>
                    </div>

                    {/* Image Content */}
                    <div className="overflow-hidden rounded-md shadow-md">
                      <Image
                        src={blogPost.image}
                        alt="Food Image"
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>

                  {/* Second Text Section */}
                  <div>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    </p>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
                      Sed diam nonummy euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Tags Container */}
            <div className="border p-4 rounded-md flex flex-col sm:flex-row sm:gap-3 gap-4">
              {/* Section Title */}
              <h3 className="text-md font-semibold text-gray-800">Tags: </h3>

              {/* Responsive Two-Column Layout */}
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 w-full">
                {/* Tags Column */}
                <div className="flex flex-wrap gap-3">
                  <span className="text-sm px-3 py-1 bg-gray-200 rounded-md">Sandwich</span>
                  <span className="text-sm px-3 py-1 bg-gray-200 rounded-md">Tikka</span>
                  <span className="text-sm px-3 py-1 bg-gray-200 rounded-md">BBQ</span>
                  <span className="text-sm px-3 py-1 bg-gray-200 rounded-md">Restaurant</span>
                  <span className="text-sm px-3 py-1 bg-gray-200 rounded-md">Health</span>
                </div>

                {/* Social Icons Column */}
                <div className="flex flex-col sm:flex-row sm:items-center items-start sm:justify-end gap-4">
                  <h3 className="text-md font-semibold text-gray-800">Share: </h3>
                  <div className="flex flex-row items-center gap-4">
                    <a href="#" className="text-xl text-gray-700 hover:text-gray-900">
                      <FaFacebook />
                    </a>
                    <a href="#" className="text-xl text-gray-700 hover:text-gray-900">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-xl text-gray-700 hover:text-gray-900">
                      <FaInstagram />
                    </a>
                    <a href="#" className="text-xl text-gray-700 hover:text-gray-900">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>


            <section className="bg-white border rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Comments</h3>
              <ul className="mb-6">
                {comments.map((comment) => (
                  <li key={comment.id} className="bg-gray-100 shadow-md rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-xl text-gray-800">
                          {comment.author} <span className="text-sm text-gray-500">({comment.date})</span>
                        </p>
                        <p className="mt-2 text-gray-700 leading-relaxed">{comment.text}</p>
                      </div>
                      <div className="flex space-x-4">
                        <button
                          onClick={() => handleEditComment(comment.id)}
                          className="text-blue-500 hover:text-blue-700 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteComment(comment.id)}
                          className="text-red-500 hover:text-red-700 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="max-w-4xl mx-auto">
                <form
                  className="w-full p-4 bg-gray-50 rounded-lg border"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (editComment) {
                      handleSaveComment();
                    } else {
                      handleAddComment();
                    }
                  }}
                >
                  <h2 className="text-2xl mb-4 font-medium text-gray-800">
                    {editComment ? 'Edit Comment' : 'Post a Comment'}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="mb-4 col-span-1 md:col-span-2">
                      <textarea
                        id="comment"
                        name="comment"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        placeholder="Write your comment here..."
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-right">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      {editComment ? 'Save Comment' : 'Post Comment'}
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>

          {/* Right Section: Sidebar */}
          <div className="w-full  px-6 py-12 space-y-8 bg-white border-l-2">
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
      </div>
    </>
  );
}
