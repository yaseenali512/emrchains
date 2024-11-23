"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";

export default function HeroSection() {
  return (
    <section className="relative py-5 bg-hero-bg">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 text-white space-y-6 mb-4 lg:mb-0 flex flex-col justify-center">
          <h1 className="text-4xl font-bold leading-tight mb-2 lg:mb-4">
            Revolutionizing Healthcare with
            <span className="bg-yellow-600 text-white px-2 py-1 rounded">
              Sana
            </span>
            <span> AI </span>
            <span className="bg-yellow-600 text-white px-2 py-1 rounded">
              Chatbot{" "}
            </span>
          </h1>

          <p className="text-lg font-light leading-relaxed mb-4 lg:mb-6">
            Sana is your personal healthcare assistant, designed to provide
            instant support and guidance for all your medical queries. From
            health tips to appointment scheduling, Sana ensures that quality
            care is just a conversation away.
          </p>

          <div className="flex space-x-6">
            <Button className="bg-[#28A745] text-white px-6 py-3 rounded-md hover:bg-[#34d058]">
              Start Chatting
            </Button>
            <Button className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-md hover:bg-[#34d058]">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Side Content (Main Image with Scroll Animation) */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <ContainerScroll
            titleComponent={null} // No need for title, we only want the image with scroll effect here
          >
            <Image
              src="/card1/chatbot.jpeg"
              alt="Sana AI Chatbot"
              width={700}
              height={700}
              className="object-fill object-top rounded-lg bg-transparent shadow-lg h-[30rem] md:h-[40rem] w-full"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
}
