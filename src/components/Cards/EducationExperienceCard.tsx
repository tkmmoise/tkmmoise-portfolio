import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";

import GlowCard from "./GlowCard";
import { IExperience, IEducation } from "@/models";

interface IEducationExperienceCardProps {
  data: IExperience | IEducation;
}

const EducationExperienceCard = ({ data }: IEducationExperienceCardProps) => {
  const isExperience = typeof data === "object" && "company" in data;
  return (
    <GlowCard
      key={data.id}
      identifier={`${isExperience ? "experience" : "education"}-${data.id}`}
    >
      <div className="relative p-3">
        <Image
          src="/blur-23.svg"
          alt="Hero"
          width={1080}
          height={200}
          className="absolute bottom-0 opacity-0 dark:opacity-80"
        />
        {/* Duration */}
        <div className="flex justify-center">
          <p className="text-xs text-[#16f2b3] sm:text-sm">{data.duration}</p>
        </div>
        {/* Logo and Company Name and Title */}
        <div className="flex items-center gap-x-8 px-3 py-5">
          <div className="text-violet-500 transition-all duration-300 hover:scale-125">
            <BsPersonWorkspace size={36} />
          </div>
          <div>
            <p className="mb-2 text-base font-medium uppercase sm:text-xl">
              {data.title}
            </p>
            <div className="flex items-center">
              <p className="text-sm sm:text-base">
                {isExperience
                  ? `${data.company} (${data.contract})`
                  : data.institution}{" "}
                {` | `} {data.address}
              </p>
            </div>
          </div>
        </div>
        {/* Details */}
        <div>
          <ul className="list-inside list-disc px-6 pb-4">
            {data.details?.map((detail, index) => (
              <li key={index} className="pb-1 text-sm sm:text-base">
                {detail}
              </li>
            ))}
          </ul>
          <p className="px-3 text-justify text-sm sm:text-base">
            {data.description}
          </p>
        </div>
      </div>
    </GlowCard>
  );
};

export default EducationExperienceCard;
