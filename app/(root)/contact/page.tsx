import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const ContactUsSection = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          {/* Left Section */}
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <Image
                  src="https://pagedone.io/asset/uploads/1696488602.png"
                  alt="Contact Us"
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                />
                <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                  Contact us
                </h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-6 block">
                    <div className="flex items-center mb-6">
                      <Phone className="w-8 h-8 text-indigo-600" />
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        03125695868
                      </h5>
                    </div>
                    <div className="flex items-center mb-6">
                      <Mail className="w-8 h-8 text-indigo-600" />
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        emrchains123@gmail.com
                      </h5>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-8 h-8 text-indigo-600" />
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        National Science and Technology Park NSTP, NUST,
                        Islamabad
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
              Send Us A Message
            </h2>
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Name"
            />
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Email"
            />
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Phone"
            />

            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Message"
            />
            <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
