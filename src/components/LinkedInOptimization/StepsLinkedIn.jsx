import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Step1OfLO from "./Step1OfLO"; // Assuming these components are also responsive or adapt well
import Step2OfLO from "./Step2OfLO";
import Step3OfLO from "./Step3OfLO";
import Step4OfLO from "./Step4OfLO";
import { useLinkedIn } from "./linkedincontext";
import { useUser } from "../commonComponents/usercontext";

const StepsCoverLetter = () => {
  const linkedindata = useLinkedIn()
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const{darkMode} = useUser();

  const steps = [
    { title: "step 1", content: <Step1OfLO /> },
    { title: "step 2", content: <Step2OfLO /> },
    { title: "step 3", content: <Step3OfLO /> },
    { title: "step 4", content: <Step4OfLO /> },
  ];

  return (
    <section className={`${darkMode?'bg-[#23272F]':'bg-white'}  min-h-screen`}>
      {" "}
      {/* Added min-h-screen for better full page feel */}
      <div className={`w-full md:w-fit mx-auto flex flex-col justify-center items-center gap-[30px] md:gap-[50px] py-[30px] md:py-[50px] px-4 sm:px-6 ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
        <p className="font-lexend font-semibold text-[22px] sm:text-[26px] md:text-[30px] flex flex-wrap justify-center gap-2 md:gap-3 relative z-10 text-center md:text-left">
          Fill a few fields — let
          <span className="blueGradient">AI</span>
          get you noticed on
          <span className="font-normal">LinkedIn</span>.{" "}
        </p>

        <div className="relative w-full">
          <img
            src="/img/feature3.png"
            alt=""
            className="w-32 sm:w-40 md:w-52 absolute -rotate-12 -top-6 -left-6 sm:-top-8 sm:-left-10 md:-top-10 md:-left-20 z-0 rounded-2xl hidden md:block" // Hidden on small, shown on md+
          />
          <div className={`relative flex flex-col gap-[25px] md:gap-[35px] w-full max-w-[1000px] mx-auto p-[20px] sm:p-[30px] md:p-[50px] ${darkMode?'bg-[#1A1D23]':'bg-white'} rounded-[24px] md:rounded-[34px] border ${darkMode?'border-[#1A1D23]':'border-[#DCDCDC]'} [box-shadow:0px_5px_16px_rgba(8,15,52,0.06)]`}>
            {/* Progress Bar */}
            <div className="relative flex items-center gap-[10px] sm:gap-[18px] w-full mx-auto ">
              {steps.map((_, idx, arr) => (
                <React.Fragment key={idx}>
                  <div
                    className={`w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] flex items-center justify-center rounded-full text-[14px] sm:text-[16px] font-medium transition-all duration-300 ${
                      currentStep >= idx + 1
                        ? "bg-[#4C95FB] text-white"
                        : `${darkMode?'bg-[#464B55]':'bg-[#DCDCDC]'} text-[#A59DAA]`
                    }`}
                  >
                    {idx + 1}
                  </div>

                  {idx < arr.length - 1 && (
                    <div className={`w-full relative flex-1 h-[4px] sm:h-[6px] mx-1 sm:mx-2 ${darkMode?'bg-[#464B55]':'bg-[#DCDCDC]'} rounded-4xl`}>
                      {currentStep > idx + 1 && (
                        <div className="absolute inset-0 bg-[#4C95FB] rounded-4xl transition-all duration-300" />
                      )}
                      {currentStep === idx + 1 && (
                        <div className="absolute top-0 left-0 h-[4px] sm:h-[6px] bg-[#4C95FB] w-1/2 rounded-4xl transition-all duration-300" />
                      )}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <hr className="border-t border-[#DCDCDC]" />

            {/* Step Content */}
            <div>{steps[currentStep - 1].content}</div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center font-black font-manrope gap-4 sm:gap-0 ${
            // flex-col for mobile, gap for stacking
            currentStep > 1 ? "justify-between" : "justify-end"
          } w-full max-w-[981px] px-4 sm:px-0`} // Added max-width to align with card, and padding for mobile
        >
          {currentStep > 1 && (
            <button
              onClick={() => {
                window.scrollTo({ top: 0 }); // Added smooth scroll
                setCurrentStep((prev) => prev - 1);
              }}
              className="w-full sm:w-auto px-[20px] py-[10px] sm:px-[30px] sm:py-[15px] border-2 border-[#4C95FB] hover:bg-[#4c95fb46] text-[#4C95FB] rounded-full transition-all cursor-pointer hover:scale-95 text-[14px] sm:text-base"
            >
              Previous
            </button>
          )}

          {/* Spacer for mobile when only 'Next' button is shown, to push it to the right if needed, or remove if not desired */}
          {currentStep === 1 && <div className="sm:hidden w-full"></div>}

          {currentStep === totalSteps ? (
            <Link
              to={`/linkedIn_optimization/steps/final_page`}
              className="w-full sm:w-auto"
              onClick={() => {
                console.log(linkedindata)
                window.scrollTo({ top: 0 }); // Added smooth scroll
                setCurrentStep((prev) => prev - 1);
              }}
            >
              <button className="w-full sm:w-auto px-[20px] py-[12px] sm:px-[30px] sm:py-[15px] sm:-mt-5 rounded-full text-white transition-all cursor-pointer bg-[#4C95FB] hover:scale-95 text-[14px] sm:text-base">
                Optimize Now
              </button>
            </Link>
          ) : (
            <button
              onClick={() => {
                window.scrollTo({ top: 0 }); // Added smooth scroll
                setCurrentStep((prev) => prev + 1);
              }}
              className="w-full sm:w-auto px-[20px] py-[12px] sm:px-[30px] sm:py-[15px] sm:-mt-5 rounded-full text-white transition-all cursor-pointer bg-[#4C95FB] hover:scale-95 text-[14px] sm:text-base"
            >
              Next Step
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default StepsCoverLetter;
