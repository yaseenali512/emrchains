import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="py-20 bg-gray-100" id="aboutUs">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Side Content (Text) */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 lg:mr-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 pl-6 md:pl-0 text-justify">
            At EMRChains, we are dedicated to revolutionizing healthcare by
            creating a patient-centric environment powered by cutting-edge
            technology. Our mission is to empower patients, improve healthcare
            accessibility, and drive innovation through the integration of
            blockchain and AI. With our personalized approach, we tailor
            solutions to the unique needs of each patient, ensuring a seamless
            and inclusive healthcare experience. Our flagship offerings include
            a secure blockchain-based electronic medical record system and an
            intelligent, multilingual AI chatbot designed to provide essential
            healthcare information and services. Additionally, we leverage
            AI-based medical imaging processes to speed up the interpretation of
            complex images and improve early detection of disease, ultimately
            delivering better outcomes for patients. Join us in shaping the
            future of healthcare, where technology and patient empowerment go
            hand in hand.
          </p>
        </div>

        {/* Right Side Content (Image) */}
        <div className="w-full md:w-1/2">
          <Image
            src="/aboutUs.jpeg" // Replace with your image path
            alt="About Us"
            width={500}
            height={300}
            className="object-cover rounded-lg shadow-md transform"
          />
        </div>
      </div>
    </section>
  );
}
