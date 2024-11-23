import React from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav"; // Import MobileNav

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-2 overflow-hidden">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          <Image src={"/logo.svg"} width={75} height={75} alt="Logo" />
        </Link>
        {/* Mobile Navigation (Hamburger Menu) */}
        <MobileNav /> {/* Add MobileNav for mobile view */}
        {/* Center Navigation Links for Larger Screens */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="#aboutUs"
            className="text-green-600 hover:text-primary font-bold"
          >
            About Us
          </Link>
          <Link
            href="#accomplishments" // Link to the accomplishments section
            className="text-green-600 hover:text-primary font-bold"
          >
            News
          </Link>
          <Link
            href="#members"
            className="text-green-600 hover:text-primary font-bold"
          >
            Our Members
          </Link>

          <Link
            href="/contact"
            className="text-green-600 hover:text-primary font-bold"
          >
            Contact Us
          </Link>
        </div>
        {/* Action Buttons for Mobile and Desktop */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
          <Link
            href="/get-started"
            className="hidden md:block px-4 py-2 text-white bg-primary-1 rounded-md hover:bg-green-700"
          >
            Get a Demo
          </Link>
          <Link
            href="/start-free-trial"
            className="hidden md:block px-4 py-2 text-primary-1 border border-primary-1 rounded-md hover:bg-primary-light"
          >
            Start Chatting
          </Link>
        </div>
      </div>
    </nav>
  );
}
