import AboutUs from "@/components/AboutUs";
// import FutureInnovations from "@/components/FutureInnovations";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import RecentAccomplishments from "@/components/RecentAccomplishments";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Testimonials, tractionData } from "@/constants/index";
import React from "react";
import { pricingPlans } from "@/constants/index";
import Traction from "@/components/Traction";
import TeamMembers from "@/components/TeamMembers";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="w-full overflow-x-hidden  bg-gray-50">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <RecentAccomplishments />
      <Pricing plans={pricingPlans} />
      <div className="md:max-w-full bg-gray-50">
        <Traction title="Our Clients" logos={tractionData.clients} />
        <Traction title="Our Partners" logos={tractionData.partners} />
        <Traction title="Alumni" logos={tractionData.alumni} />
      </div>
      <AnimatedTestimonials testimonials={Testimonials} autoplay={true} />
      {/* <FutureInnovations /> */}
      <TeamMembers />
      <Footer />
    </div>
  );
};

export default HomePage;
