import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface FeatureCardProps {
  img: string;
  title: string;
}

export function FeatureCard({ img, title }: FeatureCardProps) {
  return (
    <div className="border rounded-md p-4 flex items-center gap-4 hover:shadow-md transition">
      <div className="w-12 h-12">
        <Image
          src={img}
          alt={title}
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <Typography variant="h6" className="text-gray-900">
          {title}
        </Typography>
        <div className="flex items-center text-sm text-gray-600 font-medium">
          Jelajahi
          <ChevronRightIcon className="h-4 w-4 ml-1" />
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
