import Image, { StaticImageData } from "next/image";

import { skillsImage } from "@/utils/skill-image";

interface ISkillCardProps {
  skill: string;
}

const SkillCard = ({ skill }: ISkillCardProps) => {
  return (
    <div className="group relative flex h-fit w-16 min-w-fit cursor-pointer flex-col items-center justify-center rounded-lg transition-all duration-500 hover:scale-[1.05]">
      <div className="h-full w-full rounded-lg border border-gray-300 shadow-md transition-all duration-500 group-hover:border-violet-500 dark:border-[#1f223c] dark:bg-[#11152c]">
        <div className="flex -translate-y-[1px] justify-center">
          <div className="w-3/4">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 p-2">
          <div className="h-8 sm:h-10">
            <Image
              src={(skillsImage(skill) as StaticImageData)?.src}
              alt={skill}
              width="25"
              height="25"
              className="h-full w-auto rounded-lg text-transparent"
            />
          </div>
          <p className="sm:text-md text-sm">{skill}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
