import Image from "next/image";
import testinomial from "@/app/images/testinomial.png";
import quote from "@/app/images/Quote.png";

export default function Testimonial() {
  return (
    <main className="bg-black w-full h-auto text-white flex justify-center items-center py-12 px-4 lg:px-6 xl:px-12">
      <div className="w-full lg:w-[1320px] flex flex-col items-center">
        {/* Heading */}
        <div className="w-full text-center mb-8 lg:text-left">
          <h2 className="text-[#FF9F0D] text-lg font-bold font-Great Vibes">
            Testimonial
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] mt-2 leading-tight">
            <span className="text-[#FF9F0D]">Wh</span>at Our Clients are Saying
          </h1>
        </div>

        {/* Testimonial Card */}
        <div className="font-[sans-serif] max-w-[510px] h-auto p-6 rounded-lg bg-white relative mt-12">
          <Image
            src={testinomial}
            className="w-24 h-24 rounded-full absolute right-0 left-0 mx-auto -top-16"
            alt="Profile"
          />
          <div className="mt-6 text-center">
            <div className="flex sm:grid sm:place-items-center">
              <Image src={quote} alt="Centered Image" className="max-w-full max-h-full sm:max-w-[50%]" />
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-800 leading-relaxed">Alamin Hasan, a renowned food specialist, brings a wealth of experience and passion for culinary excellence. With a deep understanding of flavors, ingredients, and cooking techniques, Alamin consistently creates exceptional dishes that captivate the senses. Whether it&apos;s crafting innovative recipes or mastering classic favorites, Alamin&apos;s commitment to quality and creativity ensures every dish is a delightful experience. His expertise has made him a trusted figure in the world of food, where he continues to inspire and educate others with his culinary skills.</p>
            </div>

            {/* Star Ratings */}
            <div className="flex justify-center space-x-1 mt-4">
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 fill-[#FF9F0D]"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
              <svg
                className="w-5 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-extrabold text-gray-800">Alamin Hasan</h4>
              <p className="text-xs text-gray-500 mt-0.5">Food Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
