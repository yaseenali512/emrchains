"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient"; // Adjust the path based on your project structure
import { cardData } from "@/constants/index"; // Path to the constants file
import { motion } from "framer-motion"; // Import motion

const FutureInnovations = () => {
  const [visibleDescription, setVisibleDescription] = useState<number | null>(
    null
  );

  const toggleDescription = (index: number) => {
    setVisibleDescription((prev) => (prev === index ? null : index));
  };

  return (
    <BackgroundGradient className="py-1">
      <section className="py-10 relative z-10" id="future-innovations">
        <div className="container mx-auto text-center mb-12">
          {/* Motion div for animated text color */}
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ color: "#1ca0fb" }} // Initial color
            animate={{
              color: ["#00ccb1", "#7b61ff", "#ffc414", "#1ca0fb"], // Color change animation
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Future Innovations
          </motion.h2>

          <motion.p
            className="text-lg"
            initial={{ color: "#7b61ff" }} // Initial color
            animate={{
              color: ["#00ccb1", "#7b61ff", "#ffc414", "#1ca0fb"], // Color change animation
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Discover the cutting-edge innovations that are shaping the future of
            various industries.
          </motion.p>
        </div>

        {/* Flexbox Layout for Cards */}
        <div className="flex flex-wrap justify-center gap-6 px-6 lg:px-20">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col max-w-[350px] w-full relative"
            >
              {/* Image Wrapper */}
              <div className="w-full h-[340px] relative">
                <Image
                  className="rounded-t-lg"
                  src={card.image}
                  alt={card.description}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Show or Hide Description */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    visibleDescription === index ? "h-auto" : "h-0"
                  } overflow-hidden`}
                >
                  {visibleDescription === index && (
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {card.description}
                    </p>
                  )}
                </div>

                {/* Button to toggle description visibility */}
                <div className="mt-auto">
                  <button
                    onClick={() => toggleDescription(index)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-400 rounded-lg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 "
                  >
                    {visibleDescription === index ? "Show less" : "Read more"}
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </BackgroundGradient>
  );
};

export default FutureInnovations;
