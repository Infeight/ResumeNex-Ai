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
          <p className="flex items-center gap-2 px-4 py-1 border border-blue-600 bg-blue-50 text-blue-700 rounded-full font-manrope font-semibold text-sm sm:text-base shadow-sm w-fit transition-all duration-300 hover:shadow-md hover:bg-blue-100">
            <svg
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path
                d="M8.20796 2.57735C8.23673 2.52509 8.27901 2.4815 8.33037 2.45115C8.38173 2.4208 8.4403 2.40479 8.49996 2.40479C8.55962 2.40479 8.61819 2.4208 8.66955 2.45115C8.72091 2.4815 8.76318 2.52509 8.79196 2.57735L10.76 6.31335C10.8069 6.39986 10.8724 6.4749 10.9518 6.53309C11.0311 6.59129 11.1224 6.63118 11.219 6.64992C11.3156 6.66866 11.4152 6.66577 11.5106 6.64147C11.606 6.61716 11.6948 6.57204 11.7706 6.50935L14.622 4.06668C14.6767 4.02216 14.7441 3.99616 14.8146 3.99242C14.8851 3.98867 14.9549 4.00738 15.014 4.04585C15.0732 4.08431 15.1186 4.14055 15.1437 4.20647C15.1689 4.2724 15.1725 4.3446 15.154 4.41268L13.2646 11.2433C13.2261 11.3831 13.143 11.5065 13.028 11.5948C12.913 11.6831 12.7723 11.7315 12.6273 11.7327H4.37329C4.22818 11.7317 4.08736 11.6833 3.97222 11.595C3.85707 11.5067 3.77389 11.3832 3.73529 11.2433L1.84662 4.41335C1.82812 4.34526 1.8317 4.27306 1.85685 4.20714C1.882 4.14122 1.92741 4.08498 1.98656 4.04651C2.0457 4.00805 2.11553 3.98934 2.18598 3.99308C2.25644 3.99683 2.32389 4.02283 2.37862 4.06735L5.22929 6.51001C5.30516 6.57271 5.39396 6.61783 5.48933 6.64213C5.5847 6.66644 5.68427 6.66932 5.78089 6.65059C5.87751 6.63185 5.96878 6.59195 6.04815 6.53376C6.12752 6.47557 6.19303 6.40052 6.23996 6.31401L8.20796 2.57735Z"
                fill="#336ee7"
                stroke="#336ee7"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.83325 14.4H13.1666"
                stroke="#336ee7"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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
      <Link to={"/resumes_templates"} className="mx-auto">
        {/* <button className="font-inter text-white px-4 sm:px-5 py-2 sm:py-3 rounded-lg bg-gradient-to-t from-[#336EE7] to-[#4C95FB] cursor-pointer font-bold text-base sm:text-lg md:text-[22px] transition-transform hover:scale-105">
          Build Your AI Resume
        </button> */}
        <button class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium font-lexend transition-all  bg-gradient-to-t from-[#336EE7] to-[#4C95FB]  rounded-xl group cursor-pointer hover:scale-105">
          <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out  bg-gradient-to-t from-[#336EE7] to-[#4C95FB]  rounded group-hover:-mr-4 group-hover:-mt-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>

          <span class="relative w-full text-base sm:text-lg md:text-[22px] text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Build Your AI Resume
          </span>
        </button>
      </Link>
    </header>
  );
};

export default HeroSection;
