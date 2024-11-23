import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

interface ThreeDCardProps {
  imageSrc: string;
  linkHref: string;
}

export function ThreeDCardDemo({ imageSrc, linkHref }: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var py-10">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[28rem] h-[400px] rounded-xl border transition-transform duration-500 ease-in-out hover:scale-105 my-1 flex flex-col">
        {/* Image */}
        <CardItem translateZ="100" className="w-full flex-1">
          <Image
            src={imageSrc}
            layout="responsive"
            height={300} // Adjust height for a more responsive design
            width={1000} // Set width
            objectFit="contain" // Ensure image is contained without cropping
            className="rounded-xl group-hover/card:shadow-xl"
            alt="accomplishment image"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
