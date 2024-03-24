"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";

//! Separe por tipo de menu para hacerlo mas rápido, asi que:
// TODO: Refactorizar

const Navbar = ({ locale }: { locale: string }) => {
  const [language, setLanguage] = useState(locale);
  const [isActive, setIsActive] = useState(false);
  const t = useTranslations("Navbar");
  const router = useRouter();

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    router.push(`/${e.target.value}`);
  };

  const renderLinks = () => (
    <>
      <Link
        id="about"
        className="hover:underline-offset-4 hover:underline transition-all duration-200"
        href="#about"
      >
        {t("about")}
      </Link>
      <Link
        className="hover:underline-offset-4 hover:underline transition-all duration-200"
        href="#"
      >
        {t("experience")}
      </Link>
      <Link
        className="hover:underline-offset-4 hover:underline transition-all duration-200"
        href="#"
      >
        {t("projects")}
      </Link>
      {/* <Link href="#">Technologies</Link> */}
      <select
        value={language}
        onChange={handleLanguage}
        className="block mt-0.5 px-0 md:w-full text-sm bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 peer"
      >
        <option value="en">EN 🇺🇸</option>
        <option value="es">ES 🇲🇽</option>
      </select>
    </>
  );

  return (
    <header className="mb-14">
      <div className="hidden md:flex font-bold justify-between py-6">
        <h2 className="text-xl">Guillermo Anguiano</h2>

        <nav className="flex gap-4 items-center">{renderLinks()}</nav>
      </div>

      <div className="flex flex-col justify-between items-center md:hidden relative p-4">
        <div className="flex justify-between w-full items-center">
          <h2 className="text-2xl font-bold">Guillermo Anguiano</h2>

          <button className="cursor-pointer" onClick={toggleMenu}>
            {!isActive ? (
              <BiMenu fontSize={35} />
            ) : (
              <IoIosCloseCircleOutline fontSize={35} />
            )}
          </button>
        </div>

        {isActive && (
          <nav className="fixed z-50 w-full h-screen flex top-16 flex-col items-start px-4 mt-10 font-bold text-xl justify-start gap-4 bg-[#1e1e1e]">
            {renderLinks()}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
