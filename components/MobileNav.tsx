import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"; // ShadCN UI components
import { HiMenu } from "react-icons/hi"; // Hamburger Icon (react-icons)

const MobileNav = () => {
  return (
    <div className="relative">
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center space-x-4">
        <Sheet>
          <SheetTrigger>
            {/* Hamburger Menu Icon */}
            <div className="p-2 cursor-pointer">
              <HiMenu size={30} className="text-gray-800" />
            </div>
          </SheetTrigger>

          {/* Sheet Content - Navbar Items */}
          <SheetContent className="flex flex-col space-y-6 p-6 bg-white max-w-full overflow-x-hidden">
            {/* <SheetHeader>
              <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
            </SheetHeader> */}

            {/* Menu Links */}
            <div className="flex flex-col space-y-4">
              <a
                href="/news"
                className="text-gray-800 hover:text-primary font-bold"
              >
                News
              </a>
              <a
                href="/our-members"
                className="text-gray-800 hover:text-primary font-bold"
              >
                Our Members
              </a>
              <a
                href="/about-us"
                className="text-gray-800 hover:text-primary font-bold"
              >
                About Us
              </a>
              <a
                href="/contact-us"
                className="text-gray-800 hover:text-primary font-bold"
              >
                Contact Us
              </a>
              <a
                href="/get-started"
                className="px-4 py-2 text-white bg-primary rounded-md hover:bg-green-700"
              >
                Get a Demo
              </a>
              <a
                href="/start-free-trial"
                className="px-4 py-2 text-primary border border-primary rounded-md hover:bg-primary-light"
              >
                Start Free Trial
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;
