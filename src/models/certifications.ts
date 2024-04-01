import { StaticImageData } from "next/image";

export interface ICertification {
  id: number;
  title: string;
  issuer?: string;
  duration?: string;
  description?: string;
  image?: string | StaticImageData;
  url: string;
}
