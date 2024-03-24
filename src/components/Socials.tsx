"use client";
import { FaDiscord, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="absolute hidden left-3 top-0 md:flex flex-col items-center gap-3">
      <div className="w-[1px] h-[12rem] bg-white mb-2" />
      <a
        target="_blank"
        href={"https://github.com/guillermoanguiano"}
        rel="noopener noreferrer"
      >
        <FaGithub fontSize={22} />
      </a>
      <a
        target="_blank"
        href={"https://www.linkedin.com/in/guille128/"}
        rel="noopener noreferrer"
      >
        <FaLinkedin fontSize={22} />
      </a>
      <a target="_blank" href={"/"} rel="noopener noreferrer">
        <FaDiscord fontSize={22} />
      </a>

      <div className="animate-bounce mt-3 place-items-center flex flex-col gap-2">
        <FaArrowUp fontSize={20} />
        <p className="text-sm font-dancing-script">Social <br/> Media</p>
      </div>
    </div>
  );
};

export default Socials;
