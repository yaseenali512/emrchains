import { ThreeDCardDemo } from "./3DCard"; // Import the customized 3D card component

const RecentAccomplishments: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50" id="accomplishments">
      <div className="container mx-auto text-center mb-8">
        {/* Title with adjusted font size and left-right padding */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5 px-4 sm:px-8">
          Our Recent Accomplishments
        </h2>
        <p className="text-lg text-gray-600 mb-8 px-4 sm:px-8">
          We are proud of our achievements and the impact we've made. Here's a
          glimpse into some of our recent accomplishments.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-6 px-5 justify-center">
        {/* Card 1 */}
        <ThreeDCardDemo imageSrc="/card1/im1.png" />

        {/* Card 2 */}
        <ThreeDCardDemo imageSrc="/card1/im2.png" />

        {/* Card 3 */}
        <ThreeDCardDemo imageSrc="/card1/im3.png" />
      </div>
    </section>
  );
};

export default RecentAccomplishments;
