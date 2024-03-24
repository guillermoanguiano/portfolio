"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SpinningText from "./SpiningText";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations('About');

  return (
    <section id="about" className="flex justify-between gap-5 flex-col-reverse md:flex-row items-center text-pretty md:gap-2">
      <div className="w-full text-center md:text-left md:w-[50%]">
        <p className="text-lg font-bold">{t('hello')}</p>
        <p className="text-3xl font-extrabold">Guillermo Anguiano</p>

        <TypeAnimation
          sequence={[
            "Frontend",
            200,
            "Frontend Developer",
            2000,
            "React Developer",
            2000
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="text-xl font-semibold"
        />
      </div>
      <div className="">
        <SpinningText
          size={300}
          mobile
          text="Frontend Developer • Software • Engineer • "
        >
          <Image
            src="/me.png"
            alt="my icon"
            width={250}
            height={250}
            className="w-auto -mt-5"
            quality={100}
            priority
          />
        </SpinningText>
      </div>
    </section>
  );
};

export default About;
