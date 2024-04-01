import { useTranslations } from "next-intl";
import SkillsList from "@/components/List/SkillsList";
import skillsData from "@/utils/data/skills";

const Skills = () => {
  const t = useTranslations("Skills");

  return (
    <div
      id="skills"
      className="relative z-50 my-12 border-t border-[#25213b] lg:my-24"
    >
      <div className="absolute left-[42%] top-6 h-[100px] w-[100px] translate-x-1/2 rounded-full bg-violet-100 opacity-20 blur-3xl  filter"></div>

      <div className="flex -translate-y-[1px] justify-center">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500  to-transparent" />
        </div>
      </div>

      <div className="my-5 flex justify-center lg:py-8">
        <div className="flex  items-center">
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
          <span className="w-fit rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white">
            {t("skills")}
          </span>
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="my-12 w-full">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:gap-8 xl:gap-10">
          {skillsData.map((skill, id) => (
            <SkillsList key={id} domain={skill} />
          ))}
        </div>
        {/* <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          
        </Marquee> */}
      </div>
    </div>
  );
};

export default Skills;
