// @flow strict
import Link from "next/link";

import { useTranslations } from "next-intl";
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <div className="relative border-t border-[#353951]">
      <div className="mx-auto px-6 py-6 sm:px-12 lg:max-w-[70rem] lg:py-10 xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <div className="-z-40 flex justify-center">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm">
            © Developer Portfolio {t("by")}{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/moise-tengue/"
              className="text-[#16f2b3]"
            >
              Komi Moïse TENGUE
            </Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/tkmmoise/tkm-portfolio"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/tkmmoise/tkm-portfolio/fork"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
