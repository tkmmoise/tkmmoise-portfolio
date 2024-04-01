// @flow strict
import Image from "next/image";
import { useRouter } from "next/router";

import { useTranslations } from "next-intl";

import AnimationLottie from "@/components/Cards/AnimationLottie";
import EducationExperienceCard from "@/components/Cards/EducationExperienceCard";

import studyAnimation from "../../../public/lottie/study.json";
import data from "@/utils/data/educations";

const Education = () => {
  const t = useTranslations("Educations");
  const { locale } = useRouter();
  const educationsData = data[locale as keyof typeof data];

  return (
    <div
      id="education"
      className="relative z-50 my-12 border-t border-[#25213b] lg:my-24"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex -translate-y-[1px] justify-center">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500  to-transparent" />
        </div>
      </div>

      <div className="my-5 flex justify-center lg:py-8">
        <div className="flex  items-center">
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
          <span className="w-fit rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white">
            {t("educations")}
          </span>
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex flex-col gap-6">
              {educationsData.map((education) => (
                <EducationExperienceCard key={education.id} data={education} />
              ))}
            </div>
          </div>

          <div className="flex items-start justify-center">
            <div className="h-3/4 w-3/4">
              <AnimationLottie animationPath={studyAnimation} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
