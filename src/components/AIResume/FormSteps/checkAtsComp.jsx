import React from 'react';

const Checkats = () => {
  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#1D1B4F] mb-6">
        Upload your resume to check <span className="text-[#A000FF]">ATS</span>
      </h2>

      {/* Upload Area */}
      <div className="border-2 border-dashed border-[#A000FF] rounded-xl py-12 px-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#f9f1ff] transition">
        {/* Cloud icon (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-gray-700 mb-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 16a4 4 0 01.88-7.888A5.002 5.002 0 0117 9a5 5 0 01-.036 9.999H7z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 12v6m0 0l-3-3m3 3l3-3"
          />
        </svg>

        {/* Text */}
        <p className="text-sm sm:text-base text-gray-700 font-medium">
          <span className="font-semibold text-black">Choose a file</span> or drag it here
        </p>
      </div>
    </div>
  );
};

export default Checkats;
