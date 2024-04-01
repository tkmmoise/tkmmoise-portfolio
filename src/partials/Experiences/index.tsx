import Image from "next/image";
import { useRouter } from "next/router";

import { useTranslations } from "next-intl";

import AnimationLottie from "@/components/Cards/AnimationLottie";
import EducationExperienceCard from "@/components/Cards/EducationExperienceCard";

import codeAnimation from "../../../public/lottie/code.json";

import data from "@/utils/data/experiences";

const Experience = () => {
  const t = useTranslations("Experiences");
  const { locale } = useRouter();
  const experiencesData = data[locale as keyof typeof data];

  return (
    <div
      id="experience"
      className="relative z-50 my-12 border-t border-[#25213b] lg:my-24"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="my-5 flex justify-center lg:py-8">
        <div className="flex  items-center">
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
          <span className="w-fit rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white">
            {t("experiences")}
          </span>
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-start justify-center">
            <div className="h-full w-full">
              <AnimationLottie animationPath={codeAnimation} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {experiencesData.map((experience) => (
                <EducationExperienceCard
                  key={experience.id}
                  data={experience}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
