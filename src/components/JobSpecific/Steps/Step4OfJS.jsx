import React, { useState } from "react";
import AddIcon from "../../commonComponents/AddIcon";
import { useJobSpecific } from "../jobspecificcontext";

const Step4OfJS = () => {
  // Certifications
  const {certifications, setCertifications} = useJobSpecific();

  // Languages Known
  const {languages, setLanguages} = useJobSpecific();

  // Handlers for Certifications
  const handleCertificationChange = (idx, field, value) => {
    const updated = certifications.map((cert, i) =>
      i === idx ? { ...cert, [field]: value } : cert
    );
    setCertifications(updated);
  };

  const addMoreCertification = () => {
    setCertifications([
      ...certifications,
      {
        certificationName: "",
        startYear: "",
        endYear: "",
        issuedBy: "",
      },
    ]);
  };

  // Handlers for Languages
  const handleLanguageChange = (idx, field, value) => {
    const updated = languages.map((lang, i) =>
      i === idx ? { ...lang, [field]: value } : lang
    );
    setLanguages(updated);
  };

  const addMoreLanguage = () => {
    setLanguages([
      ...languages,
      {
        language: "",
        proficiency: "Fluent",
      },
    ]);
  };

  return (
    <>
      <section className="flex flex-col gap-[36px]">
        {/* Certification details */}
        <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full ">
          <div className="relative w-fit">
            <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
              Certification{" "}
            </h2>
            <div className="bg-[#E3F6FF] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
          </div>
          <div className="border-l-2 border-[#74D4FF] p-[30px] mx-[20px]">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-[35px] mb-6"
              >
                {/* Certification Name */}
                <div className="flex flex-col gap-[5px]">
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    Certification name
                  </label>
                  <input
                    type="text"
                    value={cert.certificationName}
                    onChange={(e) =>
                      handleCertificationChange(idx, "certificationName", e.target.value)
                    }
                    className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                    placeholder="e.g. AWS Certified Solutions Architect"
                  />
                </div>
                {/* Start/End Year */}
                <div className="flex gap-[13px]">
                  <div className="flex flex-col gap-[5px]">
                    <label className="text-[#170F49] font-inter font-medium text-[18px]">
                      Start Year
                    </label>
                    <input
                      type="text"
                      value={cert.startYear}
                      onChange={(e) =>
                        handleCertificationChange(idx, "startYear", e.target.value)
                      }
                      className="w-full mt-1 bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                      placeholder="e.g. 2022"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                      End Year
                    </label>
                    <input
                      type="text"
                      value={cert.endYear}
                      onChange={(e) =>
                        handleCertificationChange(idx, "endYear", e.target.value)
                      }
                      className="w-full mt-1 bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                      placeholder="e.g. 2023"
                    />
                  </div>
                </div>
                {/* Issued By */}
                <div className="flex flex-col gap-[5px]">
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    Issued By
                  </label>
                  <input
                    type="text"
                    value={cert.issuedBy}
                    onChange={(e) =>
                      handleCertificationChange(idx, "issuedBy", e.target.value)
                    }
                    className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                    placeholder="e.g. Amazon Web Services"
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="border flex items-center gap-1 font-inter text-[#00A6F4] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#F0F9FF] rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#d8eefd] "
            onClick={addMoreCertification}
          >
            Add More Certification
            <AddIcon color={"#00A6F4"} />
          </button>
        </div>

        {/* Languages Known */}
        <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg   ">
          <div className="relative w-fit">
            <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
              Languages known
              <span className="text-[18px] text-[#A59DAA]"> (Optional)</span>
            </h2>
            <div className="bg-[#EBFACC] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
          </div>
          <div className="border-l-2 border-[#9AE600] p-[30px] mx-[20px] ">
            {languages.map((lang, idx) => (
              <div key={idx} className="flex gap-[35px] mb-6">
                <div className="relative flex flex-col gap-[5px] w-full">
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    Enter Language
                  </label>
                  <input
                    type="text"
                    value={lang.language}
                    onChange={(e) =>
                      handleLanguageChange(idx, "language", e.target.value)
                    }
                    className="w-full bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA]"
                    placeholder="e.g. English"
                  />
                  {/* option */}
                  <div className="absolute right-5 top-[50px] w-fit flex gap-2">
                    <select
                      className="w-fit text-[16px] rounded-full text-[#212529] bg-[#EEEEEE] pl-5 pr-8 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 appearance-none cursor-pointer"
                      value={lang.proficiency}
                      onChange={(e) =>
                        handleLanguageChange(idx, "proficiency", e.target.value)
                      }
                    >
                      <option value="Fluent">Fluent</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Beginner">Beginner</option>
                    </select>
                    <button className="px-[20px] bg-[#CDF9E3] rounded-full py-[2px] cursor-pointer">
                      Enter
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="border flex items-center gap-1 font-inter text-[#699C01] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#EBFACC] rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#e5fabc] "
            onClick={addMoreLanguage}
          >
            Add More Language
            <AddIcon color={"#699C01"} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Step4OfJS;
