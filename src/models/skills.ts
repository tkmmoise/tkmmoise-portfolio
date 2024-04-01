export interface ISkill {
  name: string;
  levels: IDomainLevel;
}

interface IDomainLevel {
  advanced?: ISkillLevel;
  intermediate?: ISkillLevel;
  basics?: ISkillLevel;
}

interface ISkillLevel {
  name: string;
  skills: string[];
}
