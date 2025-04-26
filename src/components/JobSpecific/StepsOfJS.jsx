import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Step1OfJS from "./Steps/Step1OfJS";
import Step2OfJS from "./Steps/Step2OfJS";
import Step3OfJS from "./Steps/Step3OfJS";
import Step4OfJS from "./Steps/Step4OfJS";
import Step5OfJS from "./Steps/Step5OfJS";

const StepsOfJS = () => {
  const { templateId } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const steps = [
    { title: "step 1", content: <Step1OfJS /> },
    { title: "step 2", content: <Step2OfJS /> },
    { title: "step 3", content: <Step3OfJS /> },
    { title: "step 4", content: <Step4OfJS /> },
    { title: "step 5", content: <Step5OfJS /> },
  ];

  return (
    <section className="w-fit mx-auto flex flex-col justify-center items-center gap-[50px] py-[50px] text-[#212529]">
      <p className="font-lexend font-semibold text-[30px] flex gap-3">
        Build
        <span className="text-[#774B35] font-bold"> Job Specific Resume </span>
        In Just simple 5 Steps
      </p>

      <div className="flex flex-col gap-[35px] w-[981px] mx-auto p-[50px] bg-white rounded-[34px] border border-[#DCDCDC] [box-shadow:0px_5px_16px_rgba(8,15,52,0.06)]">
        {/* Progress Bar */}
        <div className="flex items-center gap-[18px] w-[539px] mx-auto">
          {steps.map((_, idx, arr) => (
            <React.Fragment key={idx}>
              <div
                className={`w-[34px] h-[34px] flex items-center justify-center rounded-full text-[16px] font-medium ${
                  currentStep >= idx + 1
                    ? "bg-[#4C95FB] text-white"
                    : "bg-[#DCDCDC] text-[#A59DAA]"
                }`}
              >
                {idx + 1}
              </div>

              {idx < arr.length - 1 && (
                <div className="w-full relative flex-1 h-[6px] mx-2 bg-[#DCDCDC] rounded-4xl">
                  {currentStep > idx + 1 && (
                    <div className="absolute inset-0 bg-[#4C95FB] rounded-4xl" />
                  )}
                  {currentStep === idx + 1 && (
                    <div className="absolute top-0 left-0 h-[6px] bg-[#4C95FB] w-2/4 rounded-4xl" />
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

      {/* Navigation Buttons */}
      <div
        className={`flex items-center font-black font-manrope ${
          currentStep > 1 ? "justify-between" : "justify-end"
        } w-full`}
      >
        {currentStep > 1 && (
          <button
            onClick={() => {
              window.scrollTo({ top: 0 });
              setCurrentStep((prev) => prev - 1);
            }}
            className="px-[30px] py-[15px] border-2 border-[#4C95FB] hover:bg-[#4c95fb46] text-[#4C95FB] rounded-full transition-all cursor-pointer hover:scale-95"
          >
            Previous
          </button>
        )}

        {currentStep === totalSteps ? (
          <Link to={`/`}>
            <button className="px-[30px] py-[15px] -mt-5 rounded-full text-white transition-all cursor-pointer bg-[#4C95FB] hover:scale-95">
              Generate Ai Job Specific Resume
            </button>
          </Link>
        ) : (
          <button
            onClick={() => {
              window.scrollTo({ top: 0 });
              setCurrentStep((prev) => prev + 1);
            }}
            className="px-[30px] py-[15px] -mt-5 rounded-full text-white transition-all cursor-pointer bg-[#4C95FB] hover:scale-95"
          >
            Next Step
          </button>
        )}
      </div>
    </section>
  );
};

export default StepsOfJS;
