import React, { useState } from "react";
import ExperienceResume from "../ExperienceResume";

const ResumePreview = () => {
  const resume1 = "/AIResumeAssets/resume1.png";
  const resume2 = "/AIResumeAssets/resume2.png";
  const resume3 = "/AIResumeAssets/resume3.png";
  const resume4 = "/AIResumeAssets/resume4.png";
  const resume5 = "/AIResumeAssets/resume5.png";

  const printicon = "/AIResumeAssets/printicon.png";
  const mailicon = "/AIResumeAssets/mailicon.png";
  const whatsappicon = "/AIResumeAssets/whatsappicon.png";
  const downloadicon = "/AIResumeAssets/downloadicon.png";

  const resumes = [resume1, resume2, resume3, resume4, resume5];
  const [fileFormat] = useState("pdf");
  const [selectedResume, setSelectedResume] = useState(resumes[0]);
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = selectedResume;
    link.download = `resume.${fileFormat}`;
    link.click();
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(
      `<html><head><title>Print Resume</title></head><body><img src="${selectedResume}" style="width:100%" /></body></html>`
    );
    printWindow.document.close();
    printWindow.print();
  };

  const handleMail = () => {
    window.location.href = `mailto:?subject=My Resume&body=Check out my resume: ${selectedResume}`;
  };

  const handleWhatsAppShare = () => {
    const whatsappNumber = "919999999999"; // Replace with your target number
    const message = `Check out my resume: ${selectedResume}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative w-full h-[700px] border-l border-gray-300 bg-[#E8ECF5] p-[30px] gap-[30px] overflow-hidden flex">
      {/* Popup Modal */}
      {isSelectorOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 h-[90%] overflow-auto relative p-4">
            <button
              onClick={() => setIsSelectorOpen(false)}
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full px-3 py-1 text-sm"
            >
              Close
            </button>
            <ExperienceResume
              onSelect={(resume) => {
                setSelectedResume(resume);
                setIsSelectorOpen(false);
              }}
            />
          </div>
        </div>
      )}

      <div className="w-3/4 h-full overflow-x-hidden">
        <div className="w-full h-full border-2 overflow-y-auto overflow-x-hidden flex justify-center items-start bg-white rounded-lg">
          <img
            src={selectedResume}
            alt="Resume Preview"
            className="object-contain"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div className="w-[242px] h-[702px] flex flex-col border-4 items-center gap-[20px] relative z-20">
        <div className="w-[242px] h-[143.18px] gap-[20px] border border-[#DCDCDC] rounded-[30px] px-[10px] py-[25px] bg-white flex items-center justify-center text-center">
          <p className="w-[46px] h-[10px] text-[25px] leading-[9.86px] font-bold text-center font-manrope tracking-[-0.5px] text-[#1E1E1E]">
            ATS
          </p>
          <div className="relative w-[93.18px] h-[93.18px] flex items-center justify-center rounded-[12.9px]">
            <svg
              className="transform -rotate-[90deg] overflow-visible"
              width="93"
              height="93"
            >
              <circle
                cx="46.5"
                cy="46.5"
                r="42"
                stroke="#E5E7EB"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="46.5"
                cy="46.5"
                r="42"
                stroke="#58B90A"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${(87 / 100) * 264} 264`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute top-[31.31px] left-[7.09px] w-[80.28px] h-[34.41px] flex items-center justify-center">
              <p className="font-bold text-[26.52px] leading-[7.88px] tracking-[-0.53px] text-[#58B90A] text-center font-figtree">
                87%
              </p>
            </div>
          </div>
        </div>

        <div className="w-[242px] h-[366.23px] flex flex-col items-center justify-center bg-[#FFD230] rounded-[20px]">
          <div className="px-[35px] py-[5px] gap-[10px] flex items-center justify-center">
            <p className="w-[135px] h-[15px] font-inter font-medium text-[12px] leading-[100%] tracking-[0px] text-[#000000]">
              Recommend Templates
            </p>
          </div>
          <div className="w-[242px] h-[341.23px] flex flex-col items-center rounded-[20px] border-[1px] p-[10px] gap-[10px] bg-[#FFFFFF] border-[#DCDCDC]">
            <img
              src={resume1}
              className="w-[222px] h-[287.23px] rounded-[10px] border-[1.2px] border-[#DCDCDC]"
              alt="Resume Thumbnail"
            />
            <button
              onClick={() => setIsSelectorOpen(true)}
              className="w-[107px] h-[24px] rounded-[500px] border-[2px] px-[25px] py-[5px] bg-[#FFFFFF] border-[#336EE7]"
            >
              <p className="text-manrope text-[12px] font-medium leading-[100%] text-[#000000]">
                Show All
              </p>
            </button>
          </div>
        </div>

        <div className="w-[242px] h-[144px] flex flex-col items-center gap-[15px]">
          <button
            onClick={handleDownload}
            className="w-[222px] h-[48px] px-[7.68px] py-[19.2px] gap-[9.6px] flex items-center justify-center rounded-[9.8px] bg-gradient-to-r from-[#4c95FB] to-[#336EE7] hover:opacity-90"
          >
            <img src={downloadicon} className="w-4 h-4" alt="Download Icon" />
            <span className="text--lexend font-medium text-[17.28px] text-[#FFFFFF]">
              Download
            </span>
          </button>
          <div className="w-[222px] h-[48px] gap-[15px] flex items-center justify-center">
            <button
              onClick={handlePrint}
              className="w-[68px] h-[48px] rounded-[9.6px] border-[0.96px] flex items-center justify-center p-[8px] border-[#FE9A00] bg-[#FE9A00]/[5%]"
            >
              <img
                src={printicon}
                className="w-[32px] h-[32px]"
                alt="Print Icon"
              />
            </button>
            <button
              onClick={handleMail}
              className="w-[68px] h-[48px] rounded-[9.6px] border-[0.96px] p-[8px] flex items-center justify-center border-[#9810FA] bg-[#9810FA]/[5%]"
            >
              <img
                src={mailicon}
                className="w-[24px] h-[19.1px]"
                alt="Mail Icon"
              />
            </button>
            <button
              onClick={handleWhatsAppShare}
              className="w-[68px] h-[48px] rounded-[9.6px] border-[0.96px] p-[8px] flex items-center justify-center border-[#00A63E] bg-[#00A63E]/[5%]"
            >
              <img
                src={whatsappicon}
                className="w-[28px] h-[28px]"
                alt="WhatsApp Icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
