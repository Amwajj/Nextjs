import React from "react";
import Navbar from "../../Navbar/Navbar";

const Hero = () => {
  return (
   
    <div
      className="relative sm:h-96 sm:w-full ~sm/md~mt-12/60    bg-cover bg-center"
      style={{ backgroundImage: "url('/Image.png')" }}
    >
      <Navbar />
      <div className="flex md:ml-170 ml-44 bg-opacity-50">
        <div className="text-center ">
          <h1 className="md:text-5xl  mt-5 text-nowrap pb-6 mb-4 text-left  text-blue-950">
            Explore new skills
            <br />
            from your passions
          </h1>
          <p className=" text-left flex-wrap  text-gray-500">
            Find your trully passion by join our class. We have 2M+ course
            <br />
            that can help you to get what you really want for your bright
            future.
          </p>
          <form className="pt-8">
            <div className="relative">
              <input
                type="email"
                className="block md:w-full pr-14  p-4 md:ps-10  text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-white dark:placeholder-gray-400 dark:text-gray-500 "
                placeholder="Your Email here.."
                required
              />
              <button
                type="submit"
                className="text-white absolute md:end-2 px-1 bottom-2 bg-green-300 hover:bg-green-800 focus:ring-4  focus:outline-none focus:ring-blue-300 md:font-medium rounded-lg text-sm md:px-2  py-2 dark:bg-emerald-500 dark:hover:bg-emerald-700  "
              >
                Get Started Free
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
