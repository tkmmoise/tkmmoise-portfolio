import { StaticImageData } from "next/image";

export interface IProject {
  id: number;
  name: string;
  description: string;
  tools: string[];
  role?: string;
  code?: string;
  demo?: string;
  image: string | StaticImageData;
}
