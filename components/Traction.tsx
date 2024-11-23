import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

// Define the type for the logo object
interface Logo {
  src: string;
  alt: string;
}

// Define the Traction component props
interface TractionProps {
  title: string;
  logos: Logo[];
}

const Traction = ({ title, logos }: TractionProps) => {
  return (
    <div className="md:max-w-full bg-gray-50">
      <div className="container mx-auto text-center mb-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <div className="relative overflow-hidden h-[10rem] animate-scroll">
          <InfiniteMovingCards
            items={logos.map((logo) => ({
              src: logo.src,
              alt: logo.alt,
            }))}
            direction="right"
            speed="slow"
            className="py-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Traction;
