import React from "react";
import { useUser } from "../commonComponents/usercontext";
const steps = [
  {
    number: "01",
    color: "bg-[#5691E9]",
    text: "Choose a Resume Template",
  },
  {
    number: "02",
    color: "bg-[#E6723F]",
    text: "AI-Powered Resume Generation",
  },
  {
    number: "03",
    color: "bg-[#36A582]",
    text: "Customize & Optimize",
  },
  {
    number: "04",
    color: "bg-[#EA5A9F]",
    text: "Review & Finalize",
  },
  {
    number: "05",
    color: "bg-[#6871B9]",
    text: "Download & Apply",
  },
];

const Arrow = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    className={`text-gray-400 `}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 5l8 7-8 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Steps = () => {
  const{darkMode} = useUser();
  return (
    <div className="p-5">
      <section className={`max-w-6xl mx-auto px-4 py-10 border ${darkMode?'bg-[#1A1D23]':'bg-[#FAF5FF] '}  ${darkMode?'border-[#363B45]':'border-[#FAF5FF]'} rounded-3xl`}>
        <h2 className={`${darkMode?'text-[#fff]':'text-[black]'} text-[28px] md:text-[32px] font-semibold text-center font-lexend`}>
          Build Your Resume{" "}
          <span className="text-blue-500">In Just 5 Simple Steps</span>
        </h2>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col justify-center items-center w-[140px] md:w-[160px] lg:w-[180px]">
                <div className={`px-4 py-2 rounded-xl ${step.color} mb-2`}>
                  <p className="text-white text-[30px] md:text-[36px] font-bold font-outfit">
                    {step.number}
                  </p>
                </div>
                <p className={`${darkMode?'text-[#fff]':'text-[black]'} text-center text-[15px] md:text-[16px] font-semibold font-manrope`}>
                  {step.text}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Steps;
