import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Step1OfCL from "./Step1OfCL";
import Step2OfCL from "./Step2OfCL";
import Step3OfCL from "./Step3OfCL";
import Step4OfCL from "./Step4OfCL";
import { useCoverLetter } from "./coverlettercontext";

const StepsCoverLetter = () => {
 const coverletterdata = useCoverLetter();
  const { templateIdOfCL } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const steps = [
    { title: "step 1", content: <Step1OfCL /> },
    { title: "step 2", content: <Step2OfCL /> },
    { title: "step 3", content: <Step3OfCL /> },
    { title: "step 4", content: <Step4OfCL /> },
  ];

  return (
    <section className="bg-[#F7F7FB] min-h-screen">
      <div className="w-full md:w-fit mx-auto flex flex-col justify-center items-center gap-[30px] md:gap-[50px] py-[30px] md:py-[50px] px-4 sm:px-6 text-[#212529]">
        <p className="font-lexend font-semibold text-[22px] sm:text-[26px] md:text-[30px] flex flex-wrap justify-center gap-2 md:gap-3 text-center md:text-left">
          Build
          <span className="purpleGradient"> Cover Letter </span>
          In Just Simple 4 Steps
        </p>

        <div className="relative w-full">
          <div className="relative flex flex-col gap-[25px] md:gap-[35px] w-full max-w-[1000px] mx-auto p-[20px] sm:p-[30px] md:p-[50px] bg-white rounded-[24px] md:rounded-[34px] border border-[#DCDCDC] [box-shadow:0px_5px_16px_rgba(8,15,52,0.06)]">
            {/* Progress Bar */}
            <div
              className="relative flex items-center gap-[10px] sm:gap-[18px] w-full max-w-[539px] mx-auto"
              role="progressbar"
              aria-valuenow={currentStep}
              aria-valuemin="1"
              aria-valuemax={totalSteps}
            >
              {steps.map((_, idx, arr) => (
                <React.Fragment key={idx}>
                  <div
                    className={`w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] flex items-center justify-center rounded-full text-[14px] sm:text-[16px] font-medium transition-all duration-300 ${
                      currentStep >= idx + 1
                        ? "bg-[#4C95FB] text-white"
                        : "bg-[#DCDCDC] text-[#A59DAA]"
                    }`}
                    aria-label={`Step ${idx + 1} ${
                      currentStep === idx + 1 ? "current" : ""
                    }`}
                  >
                    {idx + 1}
                  </div>

                  {idx < arr.length - 1 && (
                    <div className="w-full relative flex-1 h-[4px] sm:h-[6px] mx-1 sm:mx-2 bg-[#DCDCDC] rounded-4xl">
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
            currentStep > 1 ? "justify-between" : "justify-end"
          } w-full max-w-[981px] px-4 sm:px-0`}
        >
          {currentStep > 1 && (
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setCurrentStep((prev) => prev - 1);
              }}
              className="w-full sm:w-auto px-[20px] py-[10px] sm:px-[30px] sm:py-[15px] border-2 border-[#4C95FB] hover:bg-[#4c95fb46] text-[#4C95FB] rounded-full transition-all cursor-pointer hover:scale-95 text-[14px] sm:text-base focus:outline-none focus:ring-2 focus:ring-[#4C95FB]"
              style={{ touchAction: "manipulation" }}
            >
              Previous
            </button>
          )}

          {currentStep === 1 && <div className="sm:hidden w-full"></div>}

          {currentStep === totalSteps ? (
            <Link
              to={`/cover_letter_templates/steps/${templateIdOfCL}/final-download-page`}
              className="w-full sm:w-auto"
              onClick={() => {
                console.log(coverletterdata);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <button
                className="w-full sm:w-auto px-[20px] py-[12px] sm:px-[30px] sm:py-[15px] rounded-full text-white transition-all cursor-pointer bg-[#4C95FB] hover:scale-95 text-[14px] sm:text-base focus:outline-none focus:ring-2 focus:ring-[#4C95FB]"
                style={{ touchAction: "manipulation" }}
              >
                Create AI Cover Letter
              </button>
            </Link>
          ) : (
            <button
              onClick={() => {
                console.log();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setCurrentStep((prev) => prev + 1);
              }}
              className="w-full sm:w-auto px-[20px] py-[12px] sm:px-[30px] sm:py-[15px] rounded-full text-white transition-all cursor-pointer bg-[#4C95FB] hover:scale-95 text-[14px] sm:text-base focus:outline-none focus:ring-2 focus:ring-[#4C95FB]"
              style={{ touchAction: "manipulation" }}
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
