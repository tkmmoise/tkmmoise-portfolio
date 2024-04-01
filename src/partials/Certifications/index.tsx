import { useTranslations } from "next-intl";
import CertificationCard from "@/components/Cards/CertificationCard";

import certificationsData from "@/utils/data/certifications";

const Certifications = () => {
  const t = useTranslations("Certifications");

  return (
    <div id="certifications" className="relative z-50  my-12 lg:my-24">
      <div className="top-10">
        <div className="absolute -top-3 left-0 h-[80px] w-[80px] translate-x-1/2 rounded-full bg-violet-100 opacity-30 blur-3xl  filter"></div>
        <div className="relative flex items-center justify-start">
          <span className="absolute left-0 w-fit rounded-md  bg-[#1a1443] px-5 py-3 text-xl uppercase text-white">
            {t("certifications")}
          </span>
          <span className="h-[2px] w-full bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:gap-8 xl:gap-10">
          {certificationsData.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
