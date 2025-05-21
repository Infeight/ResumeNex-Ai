import React, { useState } from "react";
import ExperienceResume from "../ExpAndFresherResume";

import RESUME_ExpAndFresher_4 from '../../A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_4'
import { useResume } from "./resumecontext";

const ResumePreview = () => {

   const resumeData = useResume;

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
    <div className="relative w-full min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 p">
      {/* Popup Modal */}
      {isSelectorOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-[90%] sm:max-w-[80%] lg:max-w-5xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 relative">
            <button
              onClick={() => setIsSelectorOpen(false)}
              className="absolute top-3 right-3 bg-red-600 text-white rounded-full px-3 py-1.5 text-sm font-semibold hover:bg-red-700 transition-colors"
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

      {/* Resume Preview */}
      <div className="w-full lg:w-3/4 h-[calc(100vh-3rem)] sm:h-[calc(100vh-7rem)]">
        <div className="w-full h-full bg-white rounded-2xl shadow-lg border border-gray-200 flex justify-center items-start overflow-y-auto">
          <img
            src={selectedResume}
            alt="Resume Preview"
            className="w-full h-[80vh] sm:h-[85vh] object-contain rounded-2xl"
          />

 {/* <RESUME_ExpAndFresher_4 {...resumeData} /> */}

        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-80 flex flex-col items-center gap-6 bg-white rounded-2xl shadow-lg p-6">
        {/* ATS Score */}
        <div className="w-full bg-gray-50 rounded-xl p-6 flex flex-col items-center gap-4 text-center border border-gray-200">
          <p className="text-lg sm:text-xl font-bold font-sans text-gray-900">
            ATS Score
          </p>
          <div className="relative w-20 h-20">
            <svg className="transform -rotate-90" width="80" height="80">
              <circle
                cx="40"
                cy="40"
                r="34"
                stroke="#E5E7EB"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="40"
                cy="40"
                r="34"
                stroke="url(#grad)"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${(87 / 100) * 213} 213`}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#34D399" }} />
                  <stop offset="100%" style={{ stopColor: "#10B981" }} />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="text-2xl font-bold text-emerald-600">87%</p>
            </div>
          </div>
        </div>

        {/* Recommended Templates */}
        <div className="w-full bg-gray-50 rounded-xl p-5 flex flex-col items-center gap-4 border border-gray-200">
          <p className="text-sm font-semibold text-gray-900">
            Recommended Templates
          </p>
          <div className="w-full bg-white rounded-lg p-3 border border-gray-200">
            <img
              src={resume1}
              alt="Resume Thumbnail"
              className="w-full h-36 object-cover rounded-lg"
            />
            <button
              onClick={() => setIsSelectorOpen(true)}
              className="mt-3 w-full py-2 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-colors"
            >
              Show All
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col items-center gap-4">
          <button
            onClick={handleDownload}
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-600 transition-colors"
          >
            <img src={downloadicon} alt="Download Icon" className="w-5 h-5" />
            Download
          </button>
          <div className="w-full flex justify-center gap-3">
            <button
              onClick={handlePrint}
              className="w-14 h-14 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center hover:bg-orange-100 transition-colors"
            >
              <img src={printicon} alt="Print Icon" className="w-6 h-6" />
            </button>
            <button
              onClick={handleMail}
              className="w-14 h-14 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center hover:bg-purple-100 transition-colors"
            >
              <img src={mailicon} alt="Mail Icon" className="w-5 h-5" />
            </button>
            <button
              onClick={handleWhatsAppShare}
              className="w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center hover:bg-green-100 transition-colors"
            >
              <img src={whatsappicon} alt="WhatsApp Icon" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
