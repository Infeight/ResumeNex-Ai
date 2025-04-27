import React, { useState } from "react";
import { Link } from "react-router-dom";

const DashboardContent = () => {
  const [userName, setUserName] = useState("Talha");

  const halfwayActivities = [
    {
      id: 1,
      creationDate: "12/11/2025",
      resumeImage: "/img/demoCL.png",
      type: "Resume",
    },
    {
      id: 2,
      creationDate: "12/11/2025",
      resumeImage: "/img/demoCL.png",
      type: "Resume",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      name: "Syed Talha Ahmed",
      jobRole: "Full Stack Developer",
      experience: "Fresher",
      creationDate: "11/05/2025",
      resumeImage: "/img/demoCL.png",
      type: "Resume",
      icon: "/Icons/Sidebar/MyResume.svg",
    },
    {
      id: 2,
      name: "Jarupula Sai Charan",
      jobRole: "Full Stack Developer",
      experience: "Fresher",
      creationDate: "20/05/2025",
      resumeImage: "/img/resume2.png",
      type: "Cover Letter",
      icon: "/Icons/Sidebar/MyCL.svg",
    },
    {
      id: 3,
      name: "Syed Talha Ahmed",
      jobRole: "Full Stack Developer",
      experience: "Fresher",
      creationDate: "25/05/2025",
      resumeImage: "/img/demoCL.png",
      type: "Resume",
      icon: "/Icons/Sidebar/MyResume.svg",
    },
  ];

  return (
    <section className="flex flex-col gap-[40px]">
      <p className="flex  gap-1 font-lexend font-semibold text-[40px] text-[#1E1B39] ">
        <img
          src="/img/wave-hello.gif"
          alt="wave"
          className="w-[55px] h-[55px] -mt-1"
        />
        Hi <span className="blueGradient">{userName}</span>, Welcome Back
      </p>

      {/* Continue Where you left */}
      {halfwayActivities.length > 0 && (
        <div className="bg-[#F7F7FB] rounded-[20px] px-[20px] py-[20px] space-y-4 border-3 border-[#dcdcdc] border-dashed">
          <p className="font-inter font-semibold text-[30px]">
            - Halfway there! Let's finish what you started and land that job.
          </p>
          <div className="flex flex-wrap gap-[20px]">
            {halfwayActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex justify-between w-fit gap-[20px] bg-white border border-[#DCDCDC] rounded-[20px] p-[20px]"
              >
                {/* Resume Image */}
                <img
                  src={activity.resumeImage}
                  alt="resume"
                  className="w-[194px] border border-[#DCDCDC] rounded-[15px]"
                />

                {/* Details */}
                <div className="flex flex-col justify-between w-fit h-56">
                  <div className="flex flex-col gap-[20px]">
                    <div className="flex gap-[10px] p-[15px] rounded-[9px] bg-[#F7F7FB] w-fit font-inter font-semibold text-[19.2px]">
                      <img
                        src="/Icons/Sidebar/MyResume.svg"
                        alt="resume"
                        className="w-[20px] fill-[#00A6F4]"
                      />
                      {activity.type}
                    </div>

                    <p className="text-[16px]">
                      <span className="font-bold font-inter">
                        Creation Date:
                      </span>{" "}
                      {activity.creationDate}
                    </p>
                  </div>

                  <div className="flex justify-center gap-[10px] border border-[#00A6F4] w-full py-[5px] rounded-full bg-[#F0F9FF] text-[#00A6F4] font-inter font-semibold text-[19.2px] cursor-pointer transition-all hover:scale-95">
                    Continue
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tools  */}

      <div className=" flex justify-between w-full ">
        <Link to={"/resumes_templates"}>
          <div className="relative w-[200px] h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group  border border-[#D9D9D9] ">
            <div className=" p-[15px] flex items-end">
              <p className="font-manrope font-bold text-[20px]">
                <span className="blueGradient"> AI</span> <br />
                Resume
              </p>
            </div>
            <img
              src="/ToolsImg/1.png"
              alt=""
              className="w-[99px] -rotate-[20deg] absolute right-[-15px] bottom-[-20px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:bottom-0"
            />
          </div>
        </Link>
        <Link to={"/cover_letter_templates"}>
          <div className="relative w-[200px] h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group  border border-[#D9D9D9] ">
            <div className=" relative z-10relative z-10 p-[15px] flex items-end">
              <p className="font-manrope font-bold text-[20px]">
                <span className="blueGradient"> AI</span> <br />
                Cover Letter
              </p>
            </div>
            <img
              src="/ToolsImg/2.png"
              alt=""
              className="w-[99px] -rotate-[8deg] absolute right-[-50px] bottom-[-10px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:bottom-0"
            />
          </div>
        </Link>
        <Link to={"/resume_optimization"}>
          <div className="relative w-[200px] h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group  border border-[#D9D9D9] ">
            <div className="relative z-10 p-[15px] flex items-end">
              <p className="font-manrope font-bold text-[20px]">
                <span className="blueGradient"> AI</span> Resume <br />
                Optimization
              </p>
            </div>
            <img
              src="/ToolsImg/3.png"
              alt=""
              className="w-[110px] -rotate-[8deg] absolute right-[-50px] bottom-[-10px]transition-all duration-300 ease-in-out group-hover:right-0 group-hover:bottom-0"
            />
          </div>
        </Link>
        <Link to={"/job_specific_resume"}>
          {" "}
          <div className="relative w-[200px] h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group  border border-[#D9D9D9] ">
            <div className="relative z-10 p-[15px] flex items-end">
              <p className="font-manrope font-bold text-[20px]">
                <span className="blueGradient"> AI </span> Specified <br />
                Job Resume
              </p>
            </div>
            <img
              src="/ToolsImg/4.png"
              alt=""
              className="w-[88px] absolute right-[-15px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:-rotate-12"
            />
          </div>
        </Link>{" "}
        <Link to={"/linkedIn_optimization"}>
          <div className="relative w-[200px] h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group  border border-[#D9D9D9] ">
            <div className="relative z-10 p-[15px] flex items-end">
              <p className="font-manrope font-bold text-[20px]">
                LinkedIn <br /> Optimization
              </p>
            </div>
            <img
              src="/ToolsImg/5.png"
              alt=""
              className="w-[109px] -rotate-[20deg] absolute right-[-15px] top-[-20px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:w-[120px]"
            />
          </div>
        </Link>
      </div>

      {/* Recent Activity  */}

      <div className="w-full space-y-[25px] border border-[#B8E6FE] bg-[#F0F9FF] px-[20px] py-[27px] rounded-[25px]">
        <p className="font-lexend font-semibold text-[25px] text-[#1E1B39]">
          Recent Activity
        </p>

        {recentActivities.map((activity) => (
          <div
            key={activity.id}
            className="flex justify-between items-center w-full bg-white border border-[#DCDCDC] rounded-[20px] p-[20px]"
          >
            {/* Resume Image */}
            <img
              src={`${activity.resumeImage}`}
              alt="resume"
              className="w-[194px] border border-[#DCDCDC] rounded-[15px]"
            />

            {/* Details */}
            <div className="flex flex-col gap-[25px]">
              <div className="flex gap-[10px] border border-[#00A6F4] px-[18px] py-[5px] rounded-full bg-[#F0F9FF] w-fit text-[#00A6F4] font-inter font-semibold text-[19.2px]">
                <img
                  src={`${activity.icon}`}
                  alt="resume"
                  className="w-[20px] fill-[#00A6F4]"
                />
                {activity.type}
              </div>

              <div className="flex flex-col gap-[20px]">
                <p className="text-[16px] ">
                  <span className="font-bold font-inter">⁃ Name:</span>{" "}
                  {activity.name}
                </p>
                <p className="text-[16px] ">
                  <span className="font-bold font-inter">⁃ Job Role:</span>{" "}
                  {activity.jobRole}
                </p>
                <p className="text-[16px] ">
                  <span className="font-bold font-inter">⁃ Experience:</span>{" "}
                  {activity.experience}
                </p>
                <p className="text-[16px] ">
                  <span className="font-bold font-inter">⁃ Creation Date:</span>{" "}
                  {activity.creationDate}
                </p>
              </div>
            </div>

            {/* Buttons */}
            {/* btns */}

            <div className="flex flex-col gap-4 md:gap-5 ">
              <div className="w-full px-4 py-4 md:px-6 md:py-5 bg-[#E3F6FF] border border-[#74D4FF] flex flex-col md:flex-row justify-between rounded-2xl gap-4">
                <div className="flex flex-wrap gap-3">
                  <div className="font-lexend text-base md:text-lg border border-[#D3D9DE] text-[#212529] px-3 py-2 rounded-xl bg-white flex items-center gap-2 cursor-pointer">
                    <img
                      src="/Icons/unSelect.svg"
                      alt="unSelect"
                      className="w-4 md:w-5"
                    />
                    <img
                      src="/Icons/PDF.svg"
                      alt="PDF"
                      className="w-5 md:w-6"
                    />
                    PDF
                  </div>
                  <div className="font-lexend text-base md:text-lg border border-[#D3D9DE] text-[#212529] px-3 py-2 rounded-xl bg-white flex items-center gap-2 cursor-pointer">
                    <img
                      src="/Icons/unSelect.svg"
                      alt="unSelect"
                      className="w-4 md:w-5"
                    />
                    <img
                      src="/Icons/DOCX.svg"
                      alt="Docx"
                      className="w-5 md:w-6"
                    />
                    Docx
                  </div>
                </div>
                <div className="font-lexend text-base md:text-lg border border-[#D3D9DE] text-white px-4 py-2 rounded-xl flex items-center gap-2 cursor-pointer bg-gradient-to-t from-[#336EE7] to-[#4C95FB]">
                  <img
                    src="/Icons/download.svg"
                    alt="download"
                    className="w-5 md:w-6"
                  />
                  Download
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
                <div className="w-full  font-lexend font-semibold text-base md:text-lg border-2 px-3 py-2 rounded-xl flex items-center justify-center gap-3 cursor-pointer text-[#336EE7] border-[#336EE7] bg-[#F8FDFF]">
                  <img
                    src="/Icons/Edit.svg"
                    alt="printer"
                    className="w-5 md:w-6"
                  />
                  Edit
                </div>
                <div className="w-full  font-lexend font-semibold text-base md:text-lg border-2 px-3 py-2 rounded-xl flex items-center justify-center gap-3 cursor-pointer text-[#FE9A00] border-[#FE9A00] bg-[#FFFAF2]">
                  <img
                    src="/Icons/print.svg"
                    alt="printer"
                    className="w-5 md:w-6"
                  />
                  Print
                </div>
                <div className="w-full font-lexend font-semibold text-base md:text-lg border-2 px-3 py-2 rounded-xl flex items-center justify-center gap-3 cursor-pointer text-[#9810FA] border-[#9810FA] bg-[#FAF3FF]">
                  <img
                    src="/Icons/mail.svg"
                    alt="mail"
                    className="w-5 md:w-6"
                  />
                  Email
                </div>
                <div className="w-full font-lexend font-semibold text-base md:text-lg border-2 px-5 py-2 rounded-xl flex items-center justify-center gap-3 cursor-pointer text-[#00A63E] border-[#00A63E] bg-[#F2FBF5]">
                  <img
                    src="/Icons/whatsapp.svg"
                    alt="whatsapp"
                    className="w-5 md:w-6"
                  />
                  Whatsapp
                </div>
              </div>
            </div>
          </div>
        ))}

        {recentActivities.length >= 3 && (
          <Link to={"/dashboard/downloads"}>
            <p className="flex items-center gap-2 px-3 py-1 border-2 border-[#3367E7] w-fit rounded-3xl font-manrope font-semibold text-xs sm:text-sm cursor-pointer transition hover:bg-[#3367E7] hover:text-white mx-auto">
              Show All
            </p>
          </Link>
        )}
      </div>

      {/* refer */}

      <div className="px-[30px] py-[20px] bg-[#F7F7FB] space-y-[20px] rounded-[20px] w-fit mx-auto">
        <p className="font-lexend font-semibold text-[40px] text-[#1E1B39]">
          <span className="blueGradient">Great Friend</span> Share{" "}
          <span className="purpleGradient">Great Opportunities</span>.
        </p>

        <p className="w-fit rounded-full mx-auto text-[#00A6F4] border border-[#00A6F4] font-inter font-medium px-[18px] py-[6px] text-[20px] cursor-pointer transition-all hover:scale-95">
          Refer Now and Change A Career
        </p>
      </div>
    </section>
  );
};

export default DashboardContent;
