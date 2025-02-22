import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
        {/* footer */}

        <footer className=" text-white py-10 p-6" >
        <div className="container mx-auto px-4">
          {/* Logo and Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 ">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.webp"
                alt="Logo"
                width={100}
                height={50}
                className="text-white"
              />
            </div>
            <nav className="flex justify-center md:justify-end space-x-4">
              <Link href="/" className="hover:underline text-black">
                Home
              </Link>
              <Link href="/location" className="hover:underline text-black">
                Location
              </Link>
              <Link href="/shop" className="hover:underline text-black">
                Shop
              </Link>
              <Link href="/news" className="hover:underline text-black">
                News
              </Link>
            </nav>
          </div>

          {/* Divider */}
          <hr className="border-gray-700 mb-6" />

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6">
            <div>
              <h3 className="font-semibold mb-2 text-black">Address</h3>
              <p className="text-black">
                Germany — 
                <br />
                785 15h Street, Office 478
                <br /> Berlin, De 81566
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-black">Contact</h3>
              <p className="text-black font-bold">+123 456 7890</p>
              <p className="text-black">info@example.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-black">Get fresh updates.</h3>
              <p className="text-black">
              Just Subscribe
              </p>
            </div>
          </div>

          {/* Copyright and Social Media */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm pt-6">
            <p className="text-center md:text-left text-black">
              © 2025 Company Name. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-4">
              <Link href="/" className="hover:text-gray-400 text-black">
                <FaFacebook />
              </Link>
              <Link href="/" className="hover:text-gray-400 text-black">
                <FaTwitter />
              </Link>
              <Link href="/" className="hover:text-gray-400 text-black">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </footer>    
    </>
  )
}

export default Footer
