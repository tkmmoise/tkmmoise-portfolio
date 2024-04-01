import Link from "next/link";
import { useTranslations } from "next-intl";

import ThemeSwitch from "@/components/Buttons/ThemeSwitch";
import LocaleSwitcherSelect from "../Select/LocaleSwitcherSelect";

const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className=" text-3xl font-bold text-[#16f2b3]">
            Komi Moïse TENGUE
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#about"
            >
              <div className="text-sm uppercase transition-colors duration-300 hover:text-pink-600">
                {t("about")}
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#experience"
            >
              <div className="text-sm uppercase transition-colors duration-300 hover:text-pink-600">
                {t("experience")}
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#education"
            >
              <div className="text-sm uppercase transition-colors duration-300 hover:text-pink-600">
                {t("education")}
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#projects"
            >
              <div className="text-sm uppercase transition-colors duration-300 hover:text-pink-600">
                {t("projects")}
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#skills"
            >
              <div className="text-sm uppercase transition-colors duration-300 hover:text-pink-600">
                {t("skills")}
              </div>
            </a>
          </li>

          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#blogs"
            >
              <div className="text-sm uppercase transition-colors duration-300 hover:text-pink-600">
                {t("certifications")}
              </div>
            </a>
          </li>
        </ul>
        <div className="flex items-center">
          <LocaleSwitcherSelect />
          <div className="fixed right-10 top-7 ">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
