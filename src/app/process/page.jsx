"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";

const Process = () => {
  return (
    <>
      {/* section-1 */}

      <Banner  heading={"Our Process"} className={"text-white"}/>

      {/* section-2 */}

      <section className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Grid - Image */}
          <div>
            <Image
              src="/g.jpg"
              width={700}
              height={700}
              alt="About Us"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

          {/* Right Grid - Content */}
          <div className="flex flex-col p-8">
            <span className="uppercase font-semibold text-lg">
              Medical research
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Collaboration in research centers
            </h2>
            <p className="text-gray-600 mt-4">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia.
            </p>

            {/* Second Image Below Text */}
            <Image
              src="/h.jpg"
              width={700}
              height={700}
              alt="Innovation"
              className=" w-full relative top-[90px] h-auto rounded-xl object-cover mt-6"
            />
          </div>
        </div>
      </section>

      {/* section-3 */}

      {/* marquee */}
      <section className="py-3 gap-4 mt-32">
        <marquee
          speed="100"
          behavior="infinite"
          direction="left"
          className="-mt-[40px]"
        >
          <div className="flex gap-20 ">
            <span className="text-[40px] font-bold">#</span>
            <h3 className="text-[40px] font-bold">INNOVATION TODAY</h3>
            <span className="text-[40px] font-bold">#</span>
            <h3 className="text-[40px] font-bold">INNOVATION TODAY</h3>
            <span className="text-[40px] font-bold">#</span>
            <h3 className="text-[40px] font-bold">INNOVATION TODAY</h3>
            <span className="text-[40px] font-bold">#</span>
            <h3 className="text-[40px] font-bold">INNOVATION TODAY</h3>
            <span className="text-[40px] font-bold">#</span>
            <h3 className="text-[40px] font-bold">INNOVATION TODAY</h3>
            <span className="text-[40px] font-bold">#</span>
            <h3 className="text-[40px] font-bold">INNOVATION TODAY</h3>
            <span className="text-[40px] font-bold">#</span>
            <h3 className="text-[40px] font-bold">INNOVATION TODAY</h3>
          </div>
        </marquee>
      </section>
    </>
  );
};

export default Process;
