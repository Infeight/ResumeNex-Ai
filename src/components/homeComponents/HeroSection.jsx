import React from "react";
import { Link } from "react-router-dom";

const Check = ({ title }) => {
  return (
    <div className="flex items-center justify-center gap-2 px-3 py-1 border border-[#05DF72] rounded-full sm:rounded-4xl">
      <img src="/img/Check.svg" alt="check" className="w-4 sm:w-[15.98px]" />
      <p className="text-nowrap font-manrope font-extrabold text-xs sm:text-[13.68px] leading-[130%] text-[#151515]">
        {title}
      </p>
    </div>
  );
};

const HeroSection = () => {
  return (
    <header className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 flex flex-col gap-8 sm:gap-10 md:gap-12">
      {/* Top section */}
      <section className="mx-auto flex flex-col items-center justify-center gap-4 sm:gap-5 w-full">
        <div>
          <p className="flex items-center gap-2 px-3 py-1 border border-[#3367E7] rounded-3xl font-manrope font-semibold text-xs sm:text-[13.68px] w-fit">
            <img
              src="/img/crown.svg"
              alt="crown"
              className="w-4 h-4 sm:w-[16px] sm:h-[16px]"
            />
            India’s Most Affordable AI Resume Builder
          </p>
        </div>
        <h1 className="text-[#151515] font-manrope font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-center max-w-4xl mx-auto">
          One Step Closer To Your{" "}
          <span className="purpleGradient">Dream Career</span> With
          <span className="blueGradient"> AI-Powered </span>
          Resume.
        </h1>
        <div className="relative py-2 sm:py-3 w-full max-w-[90vw] sm:max-w-3xl md:max-w-4xl overflow-hidden">
          <span className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></span>
          <div className="loopScroll flex animate-scroll items-center gap-2 sm:gap-3 whitespace-nowrap">
            <Check title={"Ai Cover Letter"} />
            <Check title={"LinkedIn Optimization"} />
            <Check title={"Ai Resume"} />
            <Check title={"Ai Specified Job Resume"} />
            <Check title={"Ai Resume Optimization"} />
            {/* Duplicate for seamless scroll */}
            <Check title={"Ai Cover Letter"} />
            <Check title={"LinkedIn Optimization"} />
            <Check title={"Ai Resume"} />
            <Check title={"Ai Specified Job Resume"} />
            <Check title={"Ai Resume Optimization"} />
          </div>
          <span className="absolute inset-y-0 right-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></span>
        </div>
      </section>

      {/* Button */}
      <Link to={"/templates"} className="mx-auto">
        <button className="font-inter text-white px-4 sm:px-5 py-2 sm:py-3 rounded-lg bg-gradient-to-t from-[#336EE7] to-[#4C95FB] cursor-pointer font-bold text-base sm:text-lg md:text-[22px] transition-transform hover:scale-105">
          Build Your AI Resume
        </button>
      </Link>
    </header>
  );
};

export default HeroSection;
