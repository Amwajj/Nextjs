import React from "react";
import Image from "next/image";

const classes = () => {
  return (
    <div className=" relative h-screen mt-140">
      <div className="border-t-2 border-gray-100 ">
        <div className="text-gray-700 justify-center text-center mt-20 space-y-5">
          <p className=" md:text-4xl font-bold">
            How to join Class in Ehya Course
          </p>
          <p className="md:text-2xl wrap-break-word">
            Follow these steps to join a class from Ehya Course.You can copy the
            course file
            <br />
            and watching wherever and whenever you are.
          </p>
        </div>

        <div className="flex lg-flex text-center justify-center md:space-x-15 gap-2 mt-30 text-gray-700 grid-cols-4">
          <div>
            <Image src="/item.png" alt="logo" width={200} height={100} />
          </div>
          <div>
            <Image src="/item2.png" alt="logo" width={200} height={100} />
          </div>
          <div>
            <Image src="/item3.png" alt="logo" width={200} height={100} />
          </div>
          <div>
            <Image src="/item4.png" alt="logo" width={200} height={100} />
          </div>
        </div>
      </div>

      <div className="flex  justify-center mt-15 ">
        <div className="box-border  size-32 w-6xl h-130 dark:bg-green-800  ">
          <div className="columns-2 mt-20 text-left ">
            <div>
            <p className="md:ml-30 ml-7 md:text-3xl text-wrap space-x-3">
              All Class taught <br /> by all Best Creator
            </p>
            </div>
            <div className="pb-10 text-sm text-wrap">
            <p >
              Ehya Course teachers are icons, experts, and industry rock stars
              excited to share their experience, wisdom, and trusted tools with
              you.
            </p>
            </div>
          </div>
          <div className="flex lg-flex text-center justify-center space-x-5 gap-2 mt-15  grid-cols-4">
            <div>
              <Image src="/1.png" alt="logo" width={210} height={300} />
            </div>
            <div>
              <Image src="/2.png" alt="logo" width={210} height={300} />
            </div>
            <div>
              <Image src="/3.png" alt="logo" width={210} height={300} />
            </div>
            <div>
              <Image src="/4.png" alt="logo" width={210} height={300} />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 ">
        <p className="text-gray-700">
          Trusted by best companies to find incredible talent
        </p>
        <div className="flex lg-flex text-center justify-center space-x-20 gap-2 mt-8  grid-cols-3">
          <Image src="/fitbit.png" alt="logo" width={70} height={50} />
          <Image src="/google.png" alt="logo" width={70} height={50} />
          <Image src="/Shape.png" alt="logo" width={70} height={50} />
        </div>
      </div>

      <div className="flex  justify-center mt-15 ">
        <div className="relative grid grid-flow-col grid-rows-4 gap-4 box-border  justify-center size-32 w-6xl h-70 dark:bg-blue-950  ">
          <div className="text-center mt-20">
            <p className="md:text-3xl">Join and Get 30 Days free Class</p>
          </div>

          <form className="pt-8">
            <section className="absolute mt-15">
              <input
                type="email"
                id="search"
                className="block md:w-96 p-4 pr-14 md:ps-10 text-sm md:text-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-white dark:placeholder-gray-400 dark:text-gray-500 "
                placeholder="Your Email here.."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2 px-1 bottom-2 bg-green-300 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 md:font-medium rounded-lg text-sm md:px-2  py-2 dark:bg-emerald-500 dark:hover:bg-emerald-700 "
              >
                Get Started Free
              </button>
            </section>
          </form>
          </div>
        </div>
      </div>
  );
};

export default classes;
