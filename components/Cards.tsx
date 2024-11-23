import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

// Define the type for the props
interface Image {
  src: string;
  alt: string;
}

interface CardComponentProps {
  images: Image[]; // Accepts an array of image objects
  contentText: string;
  linkHref: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
  images,
  contentText,
  linkHref,
}) => {
  return (
    <Card className="bg-white shadow-lg rounded-lg mx-auto max-w-sm md:max-w-md lg:max-w-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      {/* Grid container for images with responsive columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="w-full h-[200px] md:h-[250px] lg:h-[300px] p-0"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* Content text with background */}
      <CardContent className="bg-gray-200 p-6">
        <div className="text-lg text-gray-600 font-bold mb-4">
          <ReactMarkdown>{contentText}</ReactMarkdown>
        </div>
      </CardContent>

      {/* Read More Button */}
      <CardFooter className="p-4 bg-gray-100">
        <Link
          href={linkHref}
          className="text-primary font-bold hover:underline text-center block w-full"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
