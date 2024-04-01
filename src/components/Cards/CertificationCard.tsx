import { ICertification } from "@/models/certifications";
import Image from "next/image";
import Link from "next/link";

interface ICertificationCardProps {
  certification: ICertification;
}

const CertificationCard = ({ certification }: ICertificationCardProps) => {
  return (
    <Link href={certification.url} target="_blank">
      <div className="group relative">
        <div className="dark:bg-surface-dark block h-80 w-full cursor-pointer overflow-hidden rounded-lg shadow-lg group-hover:opacity-85 sm:h-64">
          <Image
            className="h-full w-full rounded-lg duration-1000 group-hover:scale-125"
            src={certification.image ?? ""}
            alt={certification.title}
          />
          <div className="absolute bottom-0 w-full rounded-b-lg bg-gradient-to-t from-neutral-500 p-6 group-hover:bg-none">
            <h5 className="mb-2 text-xl font-bold text-white group-hover:opacity-0">
              {certification.title}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CertificationCard;
