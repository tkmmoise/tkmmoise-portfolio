import React from "react";
import SkillCard from "../Cards/SkillCard";
import { ISkill } from "@/models";

interface ISkillsListProps {
  domain: ISkill;
}

const SkillsList = ({ domain }: ISkillsListProps) => {
  const { name, levels } = domain;
  return (
    <div>
      <div className="flex flex-col text-center">
        <h2 className="text-2xl font-bold uppercase text-pink-500 lg:text-3xl">
          {name}
        </h2>
        {Object.keys(levels).map((level) => (
          <React.Fragment key={level}>
            <div className="mb-5 flex flex-col text-center lg:mb-6">
              <h3 className="my-5 text-lg font-bold uppercase lg:my-7">
                {levels[level as keyof typeof levels]?.name}
              </h3>
              <div className="flex flex-row flex-wrap justify-center gap-2">
                {levels[level as keyof typeof levels]?.skills.map((skill) => (
                  <SkillCard key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
