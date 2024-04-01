import Image from "next/image";
import Link from "next/link";

import { IProject } from "@/models";

interface IProjectCardProps {
  project: IProject;
}

const ProjectCard = ({ project }: IProjectCardProps) => {
  return (
    <div className="group relative w-full rounded-lg border shadow-lg  dark:border-[#1b2c68a0] dark:bg-gradient-to-r dark:from-[#0d1224] dark:to-[#0a0d37]">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="flex items-center px-3 py-3 lg:px-6 lg:py-5">
        <div className="flex flex-row space-x-1 lg:space-x-2">
          <div className="h-2 w-2 rounded-full bg-red-400 lg:h-3 lg:w-3"></div>
          <div className="h-2 w-2 rounded-full bg-orange-400 lg:h-3 lg:w-3"></div>
          <div className="h-2 w-2 rounded-full bg-green-200 lg:h-3 lg:w-3"></div>
        </div>
        <Link
          href={project.code ?? "#"}
          target={project.code !== "#" ? "_blank" : undefined}
        >
          <p className="ml-3 text-center text-[#16f2b3] lg:text-lg">
            {project.name}
          </p>
        </Link>
      </div>
      <Link
        href={project.demo ?? "#"}
        target={project.demo !== "#" ? "_blank" : undefined}
      >
        <div className="overflow-hidden border-t-[2px] border-indigo-200 px-3 py-2 dark:border-indigo-900 lg:px-6 lg:py-6">
          <div className="h-48 w-auto cursor-pointer overflow-hidden rounded-lg lg:h-52">
            <Image
              src={project.image}
              alt=""
              className="h-full w-full transition-all duration-300 group-hover:scale-110 group-hover:rounded-lg"
            />
          </div>
        </div>
      </Link>
      <div className="flex flex-row flex-wrap justify-center px-3 pb-4 lg:px-6">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="my-1 mr-3 inline-flex items-center rounded-md bg-[#1a1443] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset dark:bg-gray-50 dark:text-gray-600 dark:ring-gray-500/10"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
