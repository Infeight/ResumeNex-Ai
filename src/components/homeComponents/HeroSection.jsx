import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../commonComponents/usercontext";

// Memoize Check for performance
const Check = React.memo(({ title }) => {
  const {darkMode} = useUser();
  return (
    <div className="flex items-center justify-center gap-2 px-3 py-1 border border-[#05DF72] rounded-full sm:rounded-4xl">
      <img
        src="/img/Check.svg"
        alt="check"
        className="w-4 sm:w-[15.98px]"
        width={16}
        height={16}
        loading="lazy"
        decoding="async"
        style={{ minWidth: 16, minHeight: 16 }}
      />
      <p className={`text-nowrap font-manrope font-extrabold text-xs sm:text-[13.68px] leading-[130%] ${darkMode?'text-[#fff]':' text-[#151515]'}`}>
        {title}
      </p>
    </div>
  );
});

const HeroSection = () => {
  const{darkMode} = useUser();
  return (
    <header className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 flex flex-col gap-8 sm:gap-10 md:gap-12">
      {/* Top section */}
      <section className="mx-auto flex flex-col items-center justify-center gap-4 sm:gap-5 w-full">
        <div>
          <p className={`flex items-center gap-2 px-4 py-1 border border-blue-600 ${!darkMode?'bg-blue-50':'bg-[#23272F]'}  ${darkMode?'text-[#fff]':' text-blue-700'}   rounded-full font-manrope font-semibold text-sm sm:text-base shadow-sm w-fit transition-all duration-300 hover:shadow-md  hover:${darkMode?'bg-gray-700':'bg-blue-100'} `}>
            {/* SVG is already optimized */}
            <svg
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-5 sm:h-5"
              aria-hidden="true"
              focusable="false"
            >
              {/* ...paths as before */}
            </svg>
            India’s Most Affordable AI Resume Builder
          </p>
        </div>

<h1
  style={{
    fontFamily:
      "'Manrope', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    letterSpacing: '0.02em',
  }}
  className={` ${darkMode?'text-[#fff]':' text-[#151515]'} font-manrope font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-center max-w-4xl mx-auto`}
>
  One Step Closer To Your{" "}
  <span className="purpleGradient">Dream Career</span> With
  <span className="blueGradient"> AI-Powered </span>
  Resume.
</h1>

        <div className="relative py-2 sm:py-3 w-full max-w-[90vw] sm:max-w-3xl md:max-w-4xl overflow-hidden">
          <span className={`absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r ${darkMode?'from-[#23272F]':'from-white'} to-transparent z-10`}></span>
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
          <span className={`absolute inset-y-0 right-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l ${darkMode?'from-[#23272F]':'from-white'}  to-transparent z-10`}></span>
        </div>
      </section>

      {/* Button */}
      <Link to={"/resumes_templates"} className="mx-auto">
        <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium font-lexend transition-all  bg-gradient-to-t from-[#336EE7] to-[#4C95FB]  rounded-xl group cursor-pointer hover:scale-105">
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out  bg-gradient-to-t from-[#336EE7] to-[#4C95FB]  rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className={`absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 ${!darkMode?'bg-white':'bg-[#23272F]'}`}></span>
          </span>
          <span className="relative w-full text-base sm:text-lg md:text-[22px] text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Build Your AI Resume
          </span>
        </button>
      </Link>
    </header>
  );
};

export default HeroSection;
