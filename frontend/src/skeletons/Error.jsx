import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="relative z-10 py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[50px] font-bold leading-none text-sky-500 sm:text-[80px] md:text-[100px]">
                  4o4 😭
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                Nothing Here!
                 
                </h4>
                <p className="mb-8 text-lg text-white">
                apologies 🫰🏻 
                </p>
                <Link
                  to="/"
                  className="inline-block rounded-lg border hover:bg-gray-900 px-8 py-3 text-center text-base font-semibold transitionhover:text-primary"
                >
                  Go To Home
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-0 -z-10 flex h-screen w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          <div className="flex h-full w-1/3">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div>
      </section>
    </>
  );
};

export default Error;
