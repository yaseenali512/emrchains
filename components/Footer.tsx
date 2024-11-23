import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-300 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        {/* Left Section */}
        <div className="text-sm text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row items-center">
          <span>© EMRChains 2024</span>
          <div className="flex sm:ml-4 mt-2 sm:mt-0">
            <a
              href="/terms"
              className="hover:underline text-gray-600 dark:text-gray-400 mx-2"
            >
              Terms
            </a>
            <a
              href="/privacy"
              className="hover:underline text-gray-600 dark:text-gray-400 mx-2"
            >
              Privacy
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/emrchains/"
            aria-label="LinkedIn"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
