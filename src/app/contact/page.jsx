"use client"
import ContactForm from "@/components/ContactForm";
import React, { Suspense } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      {/* section-1 */}

      <section className="w-full h-[500px]">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086165!2d144.95592831531685!3d-37.81720997975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577cc4c0f9b19d1!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1633079622227!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      {/* section-2 */}

      <section className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Grid - Contact Info */}
          <div className="mx-auto flex flex-col mt-20">
            <span className="text-black font-semibold text-2xl">
              Contact Information
            </span>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>
                785 15h Street, Office 478
                <br />
                Berlin, De 81566
              </li>
              <li>info@email.com</li>
              <li>+123 456 7890</li>
            </ul>

            {/* Right Grid - Social Media Icons */}
            <div className="flex space-x-4 mt-4 md:mt-6">
              <a href="#" className="text-black hover:text-orange-500 duration-300 text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-black text-2xl hover:text-orange-500 duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-black text-2xl hover:text-orange-500 duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-black text-2xl hover:text-orange-500 duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Form */}
          <Suspense fallback={<div>Loading...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default Contact;
