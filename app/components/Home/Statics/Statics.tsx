import React from "react";
import Image from "next/image";

const Statics = () => {
  return (
    <div className="relative h-screen bg-white">
      <div className="flex lg-flex text-center justify-center md:space-x-25 sm:space-x-5 gap-8 mt-30 text-gray-700 grid-cols-4">
        <div className="">
          <p className="md:text-5xl sm:text-4xl">18M</p>
          <p className="font-thin text-gray-500 text-center">Total Students</p>
        </div>
        <div>
          <p className="md:text-5xl sm:text-4xl">550K</p>
          <p className="font-thin text-gray-500 text-center">
            Course Available
          </p>
        </div>
        <div>
          <p className="md:text-5xl sm:text-4xl">3,6K</p>
          <p className="font-thin text-gray-500 text-center">
            Teacher Instructure
          </p>
        </div>
        <div>
          <p className="md:text-5xl sm:text-4xl">+85%</p>
          <p className="font-thin text-gray-500 ">Get a Dream job</p>
        </div>
      </div>
      <div className="flex  justify-center mt-45 ">
        <div className=" box-border size-32 w-4xl h-48 md:w-5xl md:h-90  dark:bg-gray-100 columns-2 ">
          <Image src="/boy.png" alt="logo" width={450} height={250} />
       <div className="-top-2">
              <span className=" rounded-md md:w-25 md:h-24 md:text-sm text-xs dark:bg-yellow-400 text-white px-3 py-1   mb-4">
                In Fact Survey
              </span>
            </div>
          <div className="space-y-10">
           
            <p className="text-gray-700 text-balance md:text-3xl">
              <span className="font-bold">87% of People </span>learning for
              professional development to get a career benefits like getting a
              promotion or get starting new career.
            </p>
            <div className="grid-cols-2 md:w-5xl  md:h-90" >
              <Image src="/man.png" alt="logo" width={40} height={40} />
             <span><p className="text-gray-700 font-bold md:text-4">Vincent Luggerius</p><p className="text-gray-700 md:text-sm">HRD in A Company</p></span>
                
                
            
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-center mt-15 ">
        <div className=" box-border  size-32 w-4xl h-48 md:w-5xl md:h-90  bg-white border-gray-100 border-2 columns-2 ">
          <div className=" mt-10 text-center text-balance text-gray-700 space-y-3">
            <p className=" md:text-3xl font-medium">Why choose Ehya Course?</p>
            <p className="text-gray-500 font-thin  text-left md:ml-18">
              As we know. On internet we can find many same products like this.
              But we will tell you why we better :
            </p>
          </div>
          <Image
            src="/desk.png"
            alt="logo"
            width={450}
            height={250}
            className="mb-70 w-4xl h-48 md:w-5xl md:h-90  "
          />
        </div>
      </div>
    </div>
  );
};

export default Statics;
