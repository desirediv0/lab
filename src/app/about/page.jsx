"use client";
import Banner from "@/components/Banner";
import Drug from "@/components/drug";
import Service from "@/components/service";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { FaArrowDownLong } from "react-icons/fa6";

const About = () => {
  return (
    <div>
      <Banner
        heading="About Us"
        src="/banner.jpg"
        className="text-white"
        alt="About Us Banner"
      />

      <div className="min-h-screen">
        <section className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 md:p-6 relative">
            <div className="relative h-[250px] sm:h-full rounded-xl overflow-hidden">
              <Image
                src="/about-page.jpg"
                alt="About Us"
                width={900}
                height={900}
                className="h-full object-contain rounded-3xl"
              />
            </div>
            <div className="lg:min-h-[800px]">
              <div className="rounded-xl p-8">
                <span className=" font-semibold">About Us</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
                  Pioneering innovation in drug discovery
                </h2>
                <p className="text-gray-600 mt-6 leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus ut perspic iatis
                  unde omnis iste perspiciatis ut perspiciatis unde omnis iste
                  natus. Sed ut perspiciatis unde omnis iste natus.
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Perspic iatis unde omnis iste perspiciatis ut perspiciatis
                  unde omnis iste natus. Sed ut perspiciatis.
                </p>
                <Link href={"/"}>
                  <FaArrowDownLong className="mt-8" size={30} />
                </Link>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="rounded-xl p-8">
                  <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                    10+
                  </h2>
                  <hr className="my-4 border-gray-300" />
                  <p className="text-md font-bold text-gray-900">Years</p>
                </div>
                <div className="rounded-xl p-8">
                  <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                    100+
                  </h2>
                  <hr className="my-4 border-gray-300" />
                  <p className="text-md font-bold text-gray-900">Divisions</p>
                </div>
                <div className="rounded-xl p-8">
                  <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                    15+
                  </h2>
                  <hr className="my-4 border-gray-300" />
                  <p className="text-md font-bold text-gray-900">Countries</p>
                </div>
                <div className="rounded-xl p-8">
                  <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                    30+
                  </h2>
                  <hr className="my-4 border-gray-300" />
                  <p className="text-md font-bold text-gray-900">Employees</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Drug />

      <div className="relative h-[700px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-label="Laboratory video background"
          className="w-full h-full object-cover"
        >
          <source
            src="https://lab.axiomthemes.com/wp-content/uploads/2024/10/l-lab-viedo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <Service />

      <section className="py-16 w-full h-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <Suspense fallback={<div>Loading...</div>}>
              <ContactForm />
            </Suspense>

            <div className="p-8">
              <p className="text-gray-600 text-lg">Contact Us</p>
              <h2 className="lg:text-5xl sm:text-3xl font-bold text-gray-800 mt-5">
                Have questions? Get in touch!
              </h2>
              <p className="text-gray-600 mt-6">
                Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde
                omnis iste perspiciatis ut perspiciatis unde omnis iste natus.
                Eiusmod tempor incididunt ut labore.
              </p>
              <p className="mt-6">+1234 1234</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;