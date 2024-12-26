import Image from "next/image";
import aboutpg1 from "@/app/images/aboutpg1.png";
import aboutpg2 from "@/app/images/aboutpg2.png";
import aboutpg3 from "@/app/images/aboutpg3.png";
import aboutpg4 from "@/app/images/aboutpg4.png";
import { IoPlayOutline } from "react-icons/io5";
import student from '@/app/images/Student.png';
import coffee from '@/app/images/Coffee.png';
import person from '@/app/images/Person.png';
import Navbar from "@/app/components/header";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className='w-full signup-bg-image py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-6'>
              About Us
            </h1>
            <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
              <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
                Home
              </Link>
              <span className='text-white'>/</span>
              <Link href="/menu" className='text-[#FF9F0D]'>
                About
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2 Section */}
      <section className="text-white body-font py-2 ">
        <div className="container mx-auto flex px-7 lg:px-16 py-4 flex-wrap md:flex-nowrap">
          
          {/* Left Hero Image */}
          <div className="flex flex-col md:flex-row items-center md:space-x-6 mt-4 ml-4">
            <Image
              className="object-cover object-center w-[200px] h-[300px] md:w-[336px] md:h-[536px] mt-2 md:mt-0 rounded-lg"
              alt="hero"
              src={aboutpg1}
            />
          </div>
          
          {/* Right Images - stacked on smaller devices */}
          <div className="flex flex-col space-y-4 mt-4 ml-4">
            <Image
              className="object-cover object-center w-[120px] h-[200px] md:w-[309px] md:h-[271px] rounded-lg"
              alt="image2"
              src={aboutpg2}
              width={309}
              height={271}
            />
            <Image
              className="object-cover object-center w-[120px] h-[200px] md:w-[309px] md:h-[332px] rounded-lg"
              alt="image3"
              src={aboutpg3}
              width={309}
              height={271}
            />
          </div>
          
          {/* Text Content Section */}
          <div className="pt-12 lg:flex-grow md:w-[85%] lg:pl-10 md:pl-6 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-lg mb-2 md:text-xl font-bold text-[#FF9F0D]">
              About us
            </h1>
            <p className="text-black title-font text-xl md:text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-6 leading-relaxed mt-4 text-[#333333] text-sm md:text-base md:leading-relaxed">
            Food is an essential part of a balanced diet, providing the nutrients and energy needed to maintain a healthy lifestyle. At Food Tuck, we believe in offering delicious and nutritious meals that support your well-being. Our focus is on using fresh, high-quality ingredients to create flavorful dishes that not only satisfy your cravings but also contribute to your overall health.
            </p>
            <p className="mb-6 leading-relaxed mt-4 text-[#333333] text-sm md:text-base md:leading-relaxed">
            At Food Tuck, we understand that food is not just about taste, but about nourishing the body and soul. Our team of culinary experts is dedicated to crafting meals that are both wholesome and satisfying, bringing together the finest ingredients to ensure each dish supports your nutritional needs. Whether you&apos;re looking for a quick snack, a wholesome meal, or a delightful treat, we are committed to providing food that fuels your lifestyle.
            </p>
            <p className="mb-6 leading-relaxed mt-4 text-[#333333] text-sm md:text-base md:leading-relaxed">
            We take pride in sourcing ingredients from trusted suppliers and focusing on sustainability. Every dish we prepare is made with care and attention to detail, ensuring that you experience the perfect balance of flavor, texture, and nutrition. At Food Tuck, we believe that great food should be accessible, enjoyable, and beneficial for your health, helping you stay energized and motivated throughout your day.
            </p>
            <div className="flex flex-row justify-center md:justify-start gap-4">
              {/* Button 1 */}
              <button className="inline-flex text-white bg-[#FF9F0D] border-0 py-3 px-6 focus:outline-none rounded text-lg">
                Show More
              </button>
              {/* Button 2 */}
              <button className="inline-flex text-black bg-white border-0 py-3 px-6 focus:outline-none rounded text-lg">
                <IoPlayOutline className="mr-2 w-5 h-5" />
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Section */}
      <section className="text-black px-7 lg:px-16 py-4">
        <div className="mx-auto flex px-6 items-center justify-center flex-col">
          <h1 className="text-3xl text-black font-bold mb-4">Why Choose Us</h1>
          <p className="text-center w-fit text-wrap">We prioritize quality above all else, using only the freshest, finest ingredients in every dish we create. Our commitment to excellence ensures that every meal is both delicious and nutritious.
          With years of experience, our culinary team brings a wealth of knowledge and passion to every recipe. We create balanced, flavorful meals that cater to your tastes and dietary preferences.
          </p>
          <Image
            className="mb-10 object-cover object-center w-full h-96 mt-10"
            alt="hero"
            src={aboutpg4}
          />
        </div>
      </section>

      {/* 4 Section */}
      <section className="relative text-white px-7 lg:px-16 py-4">
        {/* Content */}
        <div className="relative px-6 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-6 sm:w-1/3 w-1/2 flex flex-col items-center">
              {/* Image */}
              <div className="w-20 h-20 flex items-center justify-center rounded-md mb-6">
                <Image src={student} alt='' />
              </div>

              {/* Text */}
              <h2 className="font-bold sm:text-xl text-2xl text-black">BEST CHEF</h2>
              <p className="leading-relaxed text-black text-[14px]">Our chefs are experts in crafting exceptional dishes, blending creativity and skill to deliver unforgettable culinary experiences.</p>
            </div>

            <div className="p-6 sm:w-1/3 w-1/2 flex flex-col items-center">
              {/* Image */}
              <div className="w-20 h-20 flex items-center justify-center rounded-md mb-6">
                <Image src={coffee} alt='' />
              </div>

              {/* Text */}
              <h2 className="font-bold sm:text-xl text-2xl text-black">120 Item food</h2>
              <p className="leading-relaxed text-black text-[14px]">Explore a diverse range of 120 mouthwatering dishes, offering something for every taste and craving!</p>
            </div>

            <div className="p-6 sm:w-1/3 w-1/2 flex flex-col items-center">
              {/* Image */}
              <div className="w-20 h-20 flex items-center justify-center rounded-md mb-6">
                <Image src={person} alt='' />
              </div>

              {/* Text */}
              <h2 className="font-bold sm:text-xl text-2xl text-black">Clean Environment</h2>
              <p className="leading-relaxed text-black text-[14px]">Enjoy your meals in a clean, comfortable, and welcoming environment, ensuring a pleasant dining experience every time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
