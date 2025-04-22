import React from "react";

const ProgressIndicator = ({ percentage }) => {
  const radius = 96;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center justify-center  bg-white ">
      <div className="relative w-[110px] h-[110px]">
        <svg
          className="transform -rotate-90 w-full h-full "
          viewBox="0 0 256 256"
        >
          <circle
            cx="128"
            cy="128"
            r={radius}
            fill="transparent"
            stroke="#DEF1CE" // Lighter green for unfilled portion
            strokeWidth="32"
          />
          <circle
            cx="128"
            cy="128"
            r={radius}
            fill="transparent"
            stroke="#58B90A" // Green for filled portion
            strokeWidth="32"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-[#58B90A] ">
          {percentage}%
        </div>
      </div>
    </div>
  );
};

const FinalPageOR = () => {
  return (
    <section className="w-full max-w-[1700px] mx-auto bg-[#F7F7FB] flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 p-4 sm:p-6 lg:p-12">
      {/* Left resume display */}
      <img
        src="/img/demoOR1.png"
        alt="demo"
        className="w-full max-w-[496px] rounded-[20px] border border-[#DCDCDC] shadow-sm"
      />

      {/* Middle AI suggestions */}
      <div className="w-full max-w-[502px] h-[702px] rounded-[20px] border border-[#DCDCDC] bg-white p-4 sm:p-5 flex flex-col gap-5 font-inter font-normal overflow-y-auto custom-scrollbar">
        <p className="text-base sm:text-lg flex gap-1 items-center">
          Suggested By
          <span className="text-[#336EE7] font-bold flex gap-0.5 items-center">
            AI
            <svg
              width="19"
              height="19"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1523 0.171875C15.3992 4.09924 17.0706 7.80203 19.8535 10.585C22.6363 13.3676 26.3386 15.0382 30.2656 15.2852V15.2979C26.3385 15.5448 22.6363 17.2172 19.8535 20C17.0707 22.7828 15.3993 26.485 15.1523 30.4121H15.1387C14.8998 26.608 13.3251 23.0145 10.6973 20.2637L10.4385 19.999C7.73221 17.2929 4.15616 15.638 0.349609 15.3223C4.03394 15.0134 7.50224 13.4004 10.1748 10.8438L10.4385 10.585C13.2215 7.80196 14.8922 4.09936 15.1387 0.171875H15.1523Z"
                fill="#336EE7"
                stroke="black"
                stroke-width="0.0512"
              />
            </svg>
          </span>
        </p>

        {/* Suggestions */}
        <div className="w-full rounded-[20px] p-4 flex flex-col gap-3 bg-[#F5F5F5]">
          <p className="font-medium text-sm sm:text-base">Profile Summary:</p>
          <p className="text-xs sm:text-sm">
            Aspiring software developer skilled in MERN stack and Java
            full-stack development, with a focus on building scalable web
            applications. Seeking a challenging role to enhance development
            skills and contribute to impactful projects
          </p>
          <div className="w-full flex gap-2 justify-end text-xs sm:text-sm font-medium">
            <div className="px-3 py-1 border rounded-full cursor-pointer hover:bg-gray-100">
              Undo
            </div>
            <div className="px-3 py-1 border rounded-full cursor-pointer bg-[#C5F1DB] flex gap-1 items-center">
              <img src="/Icons/Check.svg" alt="Check" /> Replaced
            </div>
          </div>
        </div>
        <div className="w-full rounded-[20px] p-4 flex flex-col gap-3 bg-[#F5F5F5]">
          <p className="font-medium text-sm sm:text-base">
            Experience Section (Wells Fargo Advisors):
          </p>
          <p className="text-xs sm:text-sm">
            Aspiring software developer skilled in MERN stack and Java
            full-stack development, with a focus on building scalable web
            applications. Seeking a challenging role to enhance development
            skills and contribute to impactful projects
          </p>
          <div className="w-full flex gap-2 justify-end text-xs sm:text-sm font-medium">
            <div className="px-3 py-1 border rounded-full cursor-pointer hover:bg-gray-100">
              Replace
            </div>
          </div>
        </div>
        <div className="w-full rounded-[20px] p-4 flex flex-col gap-3 bg-[#F5F5F5]">
          <p className="font-medium text-sm sm:text-base">
            Experience Section (Suntrust Investment Services):
          </p>
          <p className="text-xs sm:text-sm">
            Aspiring software developer skilled in MERN stack and Java
            full-stack development, with a focus on building scalable web
            applications. Seeking a challenging role to enhance development
            skills and contribute to impactful projects
          </p>
          <div className="w-full flex gap-2 justify-end text-xs sm:text-sm font-medium">
            <div className="px-3 py-1 border rounded-full cursor-pointer hover:bg-gray-100">
              Replace
            </div>
          </div>
        </div>
        <div className="w-full rounded-[20px] p-4 flex flex-col gap-3 bg-[#F5F5F5]">
          <p className="font-medium text-sm sm:text-base">
            Experience Section (Suntrust Investment Services):
          </p>
          <p className="text-xs sm:text-sm">
            Aspiring software developer skilled in MERN stack and Java
            full-stack development, with a focus on building scalable web
            applications. Seeking a challenging role to enhance development
            skills and contribute to impactful projects
          </p>
          <div className="w-full flex gap-2 justify-end text-xs sm:text-sm font-medium">
            <div className="px-3 py-1 border rounded-full cursor-pointer hover:bg-gray-100">
              Replace
            </div>
          </div>
        </div>
      </div>

      {/* Right action buttons */}
      <div className="w-full max-w-[242px] h-auto flex flex-col gap-4">
        <div className="w-full h-[143px] px-2 py-6 bg-white border border-[#DCDCDC] text-xl sm:text-2xl font-manrope font-bold flex items-center justify-center gap-5 rounded-[30px] shadow-sm">
          <p>ATS</p>
          <ProgressIndicator percentage={85} />
        </div>

        <div className="w-full bg-[#FFD230] flex flex-col items-center justify-center rounded-[20px] overflow-hidden">
          <p className="text-xs sm:text-sm font-inter font-medium py-2">
            Recommend Templates
          </p>
          <div className="flex flex-col gap-3 items-center bg-white p-3 w-full rounded-[10px] border border-[#DCDCDC]">
            <img
              src="/img/demoCL.png"
              alt="img"
              className="w-full rounded-[10px] border border-[#DCDCDC]"
            />
            <p className="flex items-center gap-2 px-3 py-1 border-2 border-[#3367E7] w-fit rounded-3xl font-manrope font-semibold text-xs sm:text-sm cursor-pointer transition hover:bg-[#3367E7] hover:text-white">
              Show All
            </p>
          </div>
        </div>

        <div className="w-full bg-[#FFFFFF] flex flex-col gap-3 items-center justify-center rounded-[16px] border border-[#DCDCDC] p-4">
          <div className="w-full font-lexend text-base border border-[#D3D9DE] text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-t from-[#336EE7] to-[#4C95FB] hover:from-[#2F61D3] hover:to-[#4387E5]">
            <img src="/Icons/download.svg" alt="download" />
            Download
          </div>

          <div className="flex justify-between w-full gap-2">
            <div className="w-full h-12 border-2 p-2 rounded-[9.6px] flex items-center justify-center cursor-pointer border-[#FE9A00] bg-[#FFFAF2] hover:bg-[#FFF5E6]">
              <img
                src="/Icons/print.svg"
                alt="printer"
                className="w-6 sm:w-8"
              />
            </div>
            <div className="w-full h-12 border-2 p-2 rounded-[9.6px] flex items-center justify-center cursor-pointer border-[#9810FA] bg-[#FAF3FF] hover:bg-[#F5E9FF]">
              <img src="/Icons/mail.svg" alt="mail" className="w-6 sm:w-8" />
            </div>
            <div className="w-full h-12 border-2 p-2 rounded-[9.6px] flex items-center justify-center cursor-pointer border-[#00A63E] bg-[#F2FBF5] hover:bg-[#E6F8EB]">
              <img
                src="/Icons/whatsapp.svg"
                alt="whatsapp"
                className="w-6 sm:w-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalPageOR;
