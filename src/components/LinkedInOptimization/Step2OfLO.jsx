import React, { useState } from "react";
import AddIcon from "../commonComponents/AddIcon";
import RemoveIcon from "../commonComponents/RemoveIcon.jsx";

const Step2OfLO = () => {
  // State for Education
  const [educationList, setEducationList] = useState([
    {
      college: "",
      degree: "",
      stream: "",
      startYear: "",
      endYear: "",
    },
  ]);

  // State for Certifications
  const [certifications, setCertifications] = useState([
    {
      name: "",
      provider: "",
      link: "",
    },
  ]);

  // Handle Education input changes
  const handleEducationChange = (index, field, value) => {
    const updatedList = [...educationList];
    updatedList[index][field] = value;
    setEducationList(updatedList);
  };

  // Handle Certification input changes
  const handleCertificationChange = (index, field, value) => {
    const updatedList = [...certifications];
    updatedList[index][field] = value;
    setCertifications(updatedList);
  };

  // Add new Education entry
  const addMoreEducation = () => {
    setEducationList([
      ...educationList,
      {
        college: "",
        degree: "",
        stream: "",
        startYear: "",
        endYear: "",
      },
    ]);
  };

  // Add new Certification entry
  const addMoreCertification = () => {
    setCertifications([
      ...certifications,
      {
        name: "",
        provider: "",
        link: "",
      },
    ]);
  };

  // Remove Education entry
  const removeEducation = (index) => {
    if (educationList.length > 1) {
      const updatedList = educationList.filter((_, i) => i !== index);
      setEducationList(updatedList);
    }
  };

  // Remove Certification entry
  const removeCertification = (index) => {
    if (certifications.length > 1) {
      const updatedList = certifications.filter((_, i) => i !== index);
      setCertifications(updatedList);
    }
  };

  return (
    <section className="flex flex-col gap-[36px] ">
      {/* Education Section */}
      <div className="flex flex-col gap-[20px] bg-white  py-5 px-2  lg:p-6 rounded-lg w-full">
        <div className="relative w-fit">
          <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
            Education Details
          </h2>
          <div className="bg-[#E3F6FF] h-2/4 w-3/4 absolute -bottom-0 -left-2"></div>
        </div>
        <div className="border-l-2 border-[#74D4FF] pl-[20px] lg:pl-[30px] ml-[10px]  md:ml-[20px]">
          {educationList.map((edu, index) => (
            <div key={index} className="mb-[20px] relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
                {/* College Name */}
                <div className="flex flex-col">
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    College Name
                  </label>
                  <input
                    type="text"
                    value={edu.college}
                    onChange={(e) =>
                      handleEducationChange(index, "college", e.target.value)
                    }
                    className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                    placeholder="e.g., Delhi University"
                  />
                </div>

                {/* Degree */}
                <div className="flex flex-col">
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    Degree
                  </label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) =>
                      handleEducationChange(index, "degree", e.target.value)
                    }
                    className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                    placeholder="e.g., B.Tech"
                  />
                </div>

                {/* Stream */}
                <div className="flex flex-col">
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    Stream
                  </label>
                  <input
                    type="text"
                    value={edu.stream}
                    onChange={(e) =>
                      handleEducationChange(index, "stream", e.target.value)
                    }
                    className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                    placeholder="e.g., Computer Science"
                  />
                </div>

                {/* Start Year and End Year */}
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3  flex-col md:flex-row">
                    <div className="flex flex-col  w-full md:w-1/2">
                      <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                        Start Date
                      </label>
                      <input
                        type="month"
                        value={edu.startYear}
                        onChange={(e) =>
                          handleEducationChange(
                            index,
                            "startYear",
                            e.target.value
                          )
                        }
                        className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] text-[#A59DAA]"
                        placeholder="Select a month"
                      />
                    </div>
                    {!edu.currentlyPursuing && (
                      <div className="flex flex-col w-full md:w-1/2">
                        <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                          End Date
                        </label>
                        <input
                          type="month"
                          value={edu.endYear}
                          onChange={(e) =>
                            handleEducationChange(
                              index,
                              "endYear",
                              e.target.value
                            )
                          }
                          className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] text-[#A59DAA]"
                          placeholder="Select a month"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={edu.currentlyPursuing}
                      onChange={(e) => {
                        handleEducationChange(
                          index,
                          "currentlyPursuing",
                          e.target.checked
                        );
                        if (e.target.checked) {
                          handleEducationChange(index, "endYear", "");
                        }
                      }}
                      className="w-5 h-5 text-[#74D4FF] border-[#DCDCDC] rounded focus:ring-[#74D4FF]"
                    />
                    <label className="ml-2 text-[#170F49] font-inter font-medium text-[16px]">
                      Currently Pursuing
                    </label>
                  </div>
                </div>
              </div>

              {/* Remove Button (only if more than one entry) */}
              {educationList.length > 1 && (
                <button
                  className="border flex items-center gap-1 font-inter text-[#00A6F4] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#F0F9FF] rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#d8eefd] absolute right-0 -top-10"
                  onClick={() => removeEducation(index)}
                >
                  Remove Education
                  <RemoveIcon color={"#00A6F4"} />
                </button>
              )}

              {/* Horizontal Line (except for the last entry) */}
              {index < educationList.length - 1 && (
                <hr className="my-16 border border-[#74D4FF]" />
              )}
            </div>
          ))}
          <button
            className="border flex items-center gap-1 font-inter text-[#00A6F4] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#F0F9FF] rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#d8eefd]"
            onClick={addMoreEducation}
          >
            Add Another Education
            <AddIcon color={"#00A6F4"} />
          </button>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="flex flex-col gap-[20px] bg-white py-5 px-2  lg:p-6 rounded-lg w-full">
        <div className="relative w-fit">
          <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
            Certifications (Optional)
          </h2>
          <div className="bg-[#EBFACC] h-2/4 w-3/4 absolute -bottom-0 -left-2"></div>
        </div>
        <div className="border-l-2 border-[#9AE600]  pl-[20px] lg:pl-[30px] ml-[10px]  md:ml-[20px]">
          {certifications.map((cert, index) => (
            <div key={index} className="mb-[20px] relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
                {/* Certification Name */}
                <div className="flex flex-col">
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    Certification Name
                  </label>
                  <input
                    type="text"
                    value={cert.name}
                    onChange={(e) =>
                      handleCertificationChange(index, "name", e.target.value)
                    }
                    className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA]"
                    placeholder="e.g., React Developer"
                  />
                </div>

                {/* Provider */}
                <div className="flex flex-col">
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    Organisation
                  </label>
                  <input
                    type="text"
                    value={cert.provider}
                    onChange={(e) =>
                      handleCertificationChange(
                        index,
                        "provider",
                        e.target.value
                      )
                    }
                    className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA]"
                    placeholder="e.g., Udemy"
                  />
                </div>

                {/* Issue Date and Expiry Date */}
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 flex-col md:flex-row ">
                    <div className="flex flex-col w-full md:w-1/2">
                      <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                        Issue Date
                      </label>
                      <input
                        type="month"
                        value={cert.issueDate}
                        onChange={(e) =>
                          handleCertificationChange(
                            index,
                            "issueDate",
                            e.target.value
                          )
                        }
                        className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] text-[#A59DAA]"
                        placeholder="Select a month"
                      />
                    </div>
                    {!cert.noExpiry && (
                      <div className="flex flex-col w-full md:w-1/2">
                        <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                          Expiry Date
                        </label>
                        <input
                          type="month"
                          value={cert.expireDate}
                          onChange={(e) =>
                            handleCertificationChange(
                              index,
                              "expireDate",
                              e.target.value
                            )
                          }
                          className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] text-[#A59DAA]"
                          placeholder="Select a month"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={cert.noExpiry}
                      onChange={(e) => {
                        handleCertificationChange(
                          index,
                          "noExpiry",
                          e.target.checked
                        );
                        if (e.target.checked) {
                          handleCertificationChange(index, "expireDate", "");
                        }
                      }}
                      className="w-5 h-5 text-[#9AE600] border-[#DCDCDC] rounded focus:ring-[#9AE600]"
                    />
                    <label className="ml-2 text-[#170F49] font-inter font-medium text-[16px]">
                      No Expiry Date
                    </label>
                  </div>
                </div>

                {/* Certification Link */}
                <div className="flex flex-col">
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    Certification Link{" "}
                    <span className="text-[#A59DAA] text-[14px]">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="url"
                    value={cert.link}
                    onChange={(e) =>
                      handleCertificationChange(index, "link", e.target.value)
                    }
                    className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA]"
                    placeholder="e.g., https://www.udemy.com/certificate/..."
                  />
                </div>
              </div>

              {/* Remove Button (only if more than one entry) */}
              {certifications.length > 1 && (
                <button
                  className="border flex items-center gap-1 font-inter text-[#7eb908] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#F6FFED] rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#e8f5c8] absolute right-0 -top-10"
                  onClick={() => removeCertification(index)}
                >
                  Remove Certification
                  <RemoveIcon color={"#7eb908"} />
                </button>
              )}

              {/* Horizontal Line (except for the last entry) */}
              {index < certifications.length - 1 && (
                <hr className="my-16 border-t border-[#9AE600]" />
              )}
            </div>
          ))}
          <button
            className="border flex items-center gap-1 font-inter text-[#7eb908] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#F6FFED] rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#e8f5c8]"
            onClick={addMoreCertification}
          >
            Add Another Certification
            <AddIcon color={"#7eb908"} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Step2OfLO;
