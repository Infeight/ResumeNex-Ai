import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUser } from "../commonComponents/usercontext";
import { CgFileDocument } from "react-icons/cg";
import { LuLetterText } from "react-icons/lu";




const FileTypeSelector = ({ id }) => {
  // Each component instance manages its own state
  const [selected, setSelected] = useState("pdf");
  const {darkMode} = useUser()

  return (
    <div className="flex flex-wrap gap-0 sm:gap-3 justify-around">
      {/* PDF Option */}
      <label className={`w-[45%] font-lexend text-xs sm:text-base md:text-lg border  ${darkMode?'border-[#363B45]':'border-[#D3D9DE] '} ${darkMode?'text-[white]':'text-[#1E1B39]'}  px-1 sm:px-3 py-1 sm:py-2 rounded-xl ${darkMode?'bg-[#1A1D23]':'bg-[white]'}  flex items-center justify-center gap-2 cursor-pointer`}>
        <input
          type="radio"
          name={`fileType-${id}`} // Unique name per div
          value="pdf"
          checked={selected === "pdf"}
          onChange={() => setSelected("pdf")}
          className="hidden"
        />
        <img
          src={selected === "pdf" ? "/Icons/select.png" : "/Icons/unSelect.svg"}
          alt={selected === "pdf" ? "Selected" : "Unselected"}
          className="w-4 md:w-5"
        />
        <img src="/Icons/PDF.svg" alt="PDF" className="w-5 md:w-6" />
        PDF
      </label>

      {/* DOCX Option */}
      <label className={`w-1/2 font-lexend text-xs sm:text-base md:text-lg border  ${darkMode?'border-[#363B45]':'border-[#D3D9DE] '}  ${darkMode?'text-[white]':'text-[#1E1B39]'}  px-1 sm:px-3 py-1 sm:py-2 rounded-xl ${darkMode?'bg-[#1A1D23]':'bg-[white]'}  flex items-center justify-center gap-2 cursor-pointer`}>
        <input
          type="radio"
          name={`fileType-${id}`} // Unique name per div
          value="docx"
          checked={selected === "docx"}
          onChange={() => setSelected("docx")}
          className="hidden"
        />
        <img
          src={selected === "docx" ? "/Icons/select.png" : "/Icons/unSelect.svg"}
          alt={selected === "docx" ? "Selected" : "Unselected"}
          className="w-4 md:w-5"
        />
        <img src="/Icons/DOCX.svg" alt="Docx" className="w-5 md:w-6" />
        Docx
      </label>
    </div>
  );
};







const DashboardContent = () => {
  const [userName, setUserName] = useState("Talha");
   const [selected, setSelected] = useState("pdf");
   const{darkMode} = useUser();
  const navigate = useNavigate();

  const url = `/resumes_templates/steps/`

  const halfwayActivities = [
    {
      id: 'RESUME_ExpAndFresher_1',
      creationDate: "12/11/2025",
      resumeImage: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_1.avif",
      type: "Resume",
       icon: "/Icons/Sidebar/MyResume.svg",
      darkIcon:<CgFileDocument style={{color:'white', fontSize:'1.7vw'}}/>
    },
    {
      id: 'RESUME_ExpAndFresher_2',
      creationDate: "12/11/2025",
      resumeImage: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_2.avif",
      type: "Resume",
       icon: "/Icons/Sidebar/MyResume.svg",
      darkIcon:<CgFileDocument style={{color:'white', fontSize:'1.7vw'}}/>
    },
  ];

  const recentActivities = [
    {
      id: 'RESUME_ExpAndFresher_1',
      name: "Syed Talha Ahmed",
      jobRole: "Full Stack Developer",
      experience: "Fresher",
      creationDate: "11/05/2025",
      resumeImage: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_1.avif",
      type: "Resume",
      icon: "/Icons/Sidebar/MyResume.svg",
      darkIcon:<CgFileDocument style={{color:'white', fontSize:'1.7vw'}}/>
      
    },
    {
      id: 'RESUME_ExpAndFresher_2',
      name: "Jarupula Sai Charan",
      jobRole: "Full Stack Developer",
      experience: "Fresher",
      creationDate: "20/05/2025",
      resumeImage: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_2.avif",
      type: "Cover Letter",
      icon: "/Icons/Sidebar/MyCL.svg",
      darkIcon:<LuLetterText style={{color:'white', fontSize:'1.7vw'}}/>
    },
    {
      id: 'RESUME_ExpAndFresher_3',
      name: "Syed Talha Ahmed",
      jobRole: "Full Stack Developer",
      experience: "Fresher",
      creationDate: "25/05/2025",
      resumeImage: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_3.avif",
      type: "Resume",
      icon: "/Icons/Sidebar/MyResume.svg",
      darkIcon:<CgFileDocument style={{color:'white', fontSize:'1.7vw'}}/>
    },
  ];

  return (
    <section className={`flex flex-col gap-[40px] ${darkMode?'bg-[#23272F]':'bg-white'}`}>
      {/* Responsive sticky welcome message */}
     <p
  className={`
    flex gap-1 font-lexend font-semibold text-[28px] sm:text-[36px] md:text-[40px]  ${darkMode?'text-[white]':'text-[#1E1B39]'} 
    ${darkMode?'bg-[#23272F]':'bg-white'} z-10
    sticky top-0 left-0 right-0
    py-2
    md:static md:py-0
  `}
  style={{ boxShadow: '0 2px 8px -8px #0002' }} // subtle shadow for sticky
>
  <img
    src="/img/wave-hello.gif"
    alt="wave"
    className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[55px] md:h-[55px] -mt-1"
  />
  Hi <span className="blueGradient">{userName}</span>, Welcome Back
</p>

      {/* Continue Where you left */}
      {halfwayActivities.length > 0 && (
        <div className={`${darkMode?'bg-[#1A1D23]':'bg-[#F7F7FB]'}  rounded-[20px] px-[10px] sm:px-[14px] md:px-[20px] py-[14px] md:py-[20px] space-y-4 border-3  ${darkMode?'border-[#363B45]':'border-[#dcdcdc]'} border-dashed`}>
          <p className={`font-inter font-semibold text-[20px] sm:text-[24px] md:text-[30px] ${darkMode?'text-[white]':'text-[#1E1B39]'} `}>
            - Halfway there! Let's finish what you started and land that job.
          </p>
          <div className="flex flex-wrap gap-[16px] md:gap-[20px] ">
            {halfwayActivities.map((activity) => (
              <div
                key={activity.id}
                className={`items-center flex flex-col sm:flex-row justify-between w-full sm:w-fit gap-[12px] md:gap-[20px] ${darkMode?'bg-[#23272F]':'bg-[#F7F7FB]'} border ${darkMode?'border-[#363B45]':'border-[#dcdcdc]'} rounded-[20px] p-[12px] md:p-[20px]`}
              >
                {/* Resume Image */}
             <img
  alt="resume"
  class="
    w-[250px]    /* Default for mobile/tablet */
    sm:w-[140px] 
    md:w-[194px]
    border border-[#DCDCDC] rounded-[15px]
    mx-auto sm:mx-0
    h-[249.74px]
  "
  src={activity.resumeImage}
/>

                {/* Details */}
                <div className="flex flex-col justify-between w-full sm:w-fit h-auto sm:h-56 mx-auto sm:mx-0">
                  <div className="flex flex-col gap-[10px] md:gap-[20px]">
                    <div className={`flex gap-[8px] md:gap-[10px] p-[10px] md:p-[15px] rounded-[9px] ${darkMode?'text-[white]':'text-[#1E1B39]'} ${darkMode?'bg-[#1A1D23]':'bg-[#F7F7FB]'}  w-fit font-inter font-semibold text-[16px] md:text-[19.2px]`}>
                     {
                      darkMode?activity.darkIcon:
                       <img
                        src={activity.icon}
                        alt="resume"
                        className="w-[16px] md:w-[20px] fill-[#00A6F4]"
                      />
                     }
                      {activity.type}
                    </div>

                    <p className={`text-[14px] md:text-[16px] ${darkMode?'text-[white]':'text-[#1E1B39]'}`} >
                      <span className="font-bold font-inter">
                        Creation Date:
                      </span>{" "}
                      {activity.creationDate}
                    </p>
                  </div>

                  <div className={`flex justify-center gap-[10px] border border-[#00A6F4] w-full py-[5px] rounded-full ${darkMode?'bg-[#1A1D23]':'bg-[#F7F7FB]'} text-[#00A6F4] font-inter font-semibold text-[16px] md:text-[19.2px] cursor-pointer transition-all hover:scale-95 mt-2 sm:mt-0`}
                    onClick={()=>{
                          navigate(`${url}${activity.id}`)
                    }}>
                    Continue
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tools  */}
      <div className="flex flex-wrap justify-between gap-4 md:gap-6 w-full">
        <Link to={"/resumes_templates"}>
          <div className={`relative w-[185px] sm:w-[170px] md:w-[200px] h-[110px] sm:h-[130px] md:h-[144px] ${darkMode?'bg-[#1A1D23]':'bg-[#F7F7FB]'} rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group border ${darkMode?'border-[#363B45]':'border-[#D9D9D9]'}`}>
            <div className="p-[10px] sm:p-[12px] md:p-[15px] flex items-end">
              <p className={`font-manrope font-bold text-[16px] sm:text-[18px] md:text-[20px] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
                <span className="blueGradient"> AI</span> <br />
                Resume
              </p>
            </div>
            <img
              src="/ToolsImg/1.avif"
              alt=""
              className="w-[60px] sm:w-[80px] md:w-[99px] -rotate-[20deg] absolute right-[-15px] bottom-[-20px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:bottom-0"
            />
          </div>
        </Link>
        <Link to={"/cover_letter_templates"}>
          <div className={`relative w-[185px] sm:w-[170px] md:w-[200px] h-[110px] sm:h-[130px] md:h-[144px] ${darkMode?'bg-[#1A1D23]':'bg-[#F7F7FB]'} rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group border ${darkMode?'border-[#363B45]':'border-[#D9D9D9]'} `}>
            <div className="relative z-10 p-[10px] sm:p-[12px] md:p-[15px] flex items-end">
              <p className={`font-manrope font-bold text-[16px] sm:text-[18px] md:text-[20px] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
                <span className="blueGradient"> AI</span> <br />
                Cover Letter
              </p>
            </div>
            <img
              src="/ToolsImg/2.avif"
              alt=""
              className="w-[60px] sm:w-[80px] md:w-[99px] -rotate-[8deg] absolute right-[-30px] sm:right-[-40px] md:right-[-50px] bottom-[-10px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:bottom-0"
            />
          </div>
        </Link>
        <Link to={"/resume_optimization"}>
          <div className={`relative w-[185px] sm:w-[170px] md:w-[200px] h-[110px] sm:h-[130px] md:h-[144px] ${darkMode?'bg-[#1A1D23]':'bg-[#F7F7FB]'} rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group border ${darkMode?'border-[#363B45]':'border-[#D9D9D9]'}`}>
            <div className="relative z-10 p-[10px] sm:p-[12px] md:p-[15px] flex items-end">
              <p className={`font-manrope font-bold text-[16px] sm:text-[18px] md:text-[20px] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
                <span className="blueGradient"> AI</span> Resume <br />
                Optimization
              </p>
            </div>
            <img
              src="/ToolsImg/3.avif"
              alt=""
              className="w-[70px] sm:w-[90px] md:w-[110px] -rotate-[8deg] absolute right-[-30px] sm:right-[-40px] md:right-[-50px] bottom-[-10px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:bottom-0"
            />
          </div>
        </Link>
        <Link to={"/job_specific_resume"}>
          <div className={`relative w-[185px] sm:w-[170px] md:w-[200px] h-[110px] sm:h-[130px] md:h-[144px] ${darkMode?'bg-[#1A1D23]':'bg-[#F7F7FB]'} rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group border ${darkMode?'border-[#363B45]':'border-[#D9D9D9]'}`}>
            <div className="relative z-10 p-[10px] sm:p-[12px] md:p-[15px] flex items-end">
              <p className={`font-manrope font-bold text-[16px] sm:text-[18px] md:text-[20px] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
                <span className="blueGradient"> AI </span> Specified <br />
                Job Resume
              </p>
            </div>
            <img
              src="/ToolsImg/4.avif"
              alt=""
              className="w-[60px] sm:w-[75px] md:w-[88px] absolute right-[-15px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:-rotate-12"
            />
          </div>
        </Link>
        <Link to={"/linkedIn_optimization"}>
          <div className={`relative w-[185px] sm:w-[170px] md:w-[200px] h-[110px] sm:h-[130px] md:h-[144px] ${darkMode?'bg-[#1A1D23]':'bg-[#F7F7FB]'} rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group border ${darkMode?'border-[#363B45]':'border-[#D9D9D9]'}`}>
            <div className="relative z-10 p-[10px] sm:p-[12px] md:p-[15px] flex items-end">
              <p className={`font-manrope font-bold text-[16px] sm:text-[18px] md:text-[20px] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
                LinkedIn <br /> Optimization
              </p>
            </div>
            <img
              src="/ToolsImg/5.avif"
              alt=""
              className="w-[70px] sm:w-[90px] md:w-[109px] -rotate-[20deg] absolute right-[-15px] top-[-20px] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:w-[120px]"
            />
          </div>
        </Link>
      </div>

      {/* Recent Activity  */}
      <div className={`w-full space-y-[18px] sm:space-y-[20px] md:space-y-[25px] border ${darkMode?'border-[#74D4FF]':'border-[#B8E6FE]'} ${darkMode?'bg-[#00A6F433]':'bg-[#F0F9FF]'}    px-[8px] sm:px-[14px] md:px-[20px] py-[16px] sm:py-[22px] md:py-[27px] rounded-[18px] md:rounded-[25px]`}>
        <p className={`font-lexend font-semibold text-[18px] sm:text-[22px] md:text-[25px] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
          Recent Activity
        </p>

        {recentActivities.map((activity) => (
         <div
  key={activity.id}
  className={`flex flex-col lg:flex-row justify-between items-center w-full ${darkMode?'bg-[#23272F]':'bg-[white] '} border  ${darkMode?'border-[#363B45]':'border-[#DCDCDC] '} rounded-[20px] p-[10px] sm:p-[16px] md:p-[20px] gap-4`}
>
  {/* Resume Image */}
  <img
    src={`${activity.resumeImage}`}
    alt="resume"
    className="
      w-[250px]   
      sm:w-[140px] 
      md:w-[194px]
      border border-[#DCDCDC] rounded-[15px]
      h-[249.74px]
    "
  />
            {/* Details */}
            <div className="flex flex-col gap-[10px] sm:gap-[18px] md:gap-[25px]">
              <div className={`flex gap-[6px] sm:gap-[8px] md:gap-[10px] border border-[#00A6F4] px-[12px] sm:px-[14px] md:px-[18px] py-[4px] sm:py-[5px] rounded-full ${darkMode?'bg-[#23272F]':'bg-[white] '} w-fit text-[#00A6F4] font-inter font-semibold text-[15px] sm:text-[17px] md:text-[19.2px]`}>
               {
                darkMode?activity.darkIcon:
                 <img
                  src={`${activity.icon}`}
                  alt="resume"
                  className="w-[16px] sm:w-[18px] md:w-[20px] fill-[#00A6F4]"
                />
               }
                {activity.type}
              </div>

              <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[20px]">
                <p className={`text-[13px] sm:text-[15px] md:text-[16px] ${darkMode?'text-[white]':'text-[#1E1B39]'} `}>
                  <span className="font-bold font-inter">⁃ Name:</span>{" "}
                  {activity.name}
                </p>
                <p className={`text-[13px] sm:text-[15px] md:text-[16px] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
                  <span className="font-bold font-inter">⁃ Job Role:</span>{" "}
                  {activity.jobRole}
                </p>
                <p className={`text-[13px] sm:text-[15px] md:text-[16px] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
                  <span className="font-bold font-inter">⁃ Experience:</span>{" "}
                  {activity.experience}
                </p>
                <p className={`text-[13px] sm:text-[15px] md:text-[16px] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}>
                  <span className="font-bold font-inter">⁃ Creation Date:</span>{" "}
                  {activity.creationDate}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-full md:w-auto">
              <div className={`w-full px-2 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5  ${darkMode?'bg-[#1A1D23]':'bg-[#E3F6FF]'}  border ${darkMode?'border-[#363B45]':'border-[#74D4FF]'}  flex flex-col md:flex-row justify-between rounded-2xl gap-2 sm:gap-4 md:gap-4`}>
                 
<FileTypeSelector id={activity.id} />

<div className="mt-2 font-lexend text-xs sm:text-base md:text-lg border border-[#D3D9DE] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-xl flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-t from-[#336EE7] to-[#4C95FB]">
  <img
    src="/Icons/download.svg"
    alt="download"
    className="w-5 md:w-6"
  />
  Download
</div>
</div>
             <div className="flex flex-row  sm:flex-row justify-between w-full gap-2 sm:gap-4">
  <div className={`max-w-[calc(50%-0.25rem)] sm:w-full font-lexend font-semibold text-[10px] sm:text-base md:text-lg border-2 px-1.5 sm:px-3 py-1 sm:py-2 rounded-xl flex items-center justify-center gap-1.5 sm:gap-3 cursor-pointer text-[#336EE7] border-[#336EE7] ${darkMode?'bg-[#336EE70D]':'bg-[white] '}`}
   onClick={()=>{
                  navigate(`${url}${activity.id}`)
                }}
  >
    <img src="/Icons/Edit.svg" alt="edit" className="w-4 sm:w-5 md:w-6" />
    Edit
  </div>
  <div className={`max-w-[calc(50%-0.25rem)] sm:w-full font-lexend font-semibold text-[10px] sm:text-base md:text-lg border-2 px-1.5 sm:px-3 py-1 sm:py-2 rounded-xl flex items-center justify-center gap-1.5 sm:gap-3 cursor-pointer text-[#FE9A00] border-[#FE9A00]  ${darkMode?'bg-[#FE9A000D]':'bg-[white] '}`}>
    <img src="/Icons/print.svg" alt="print" className="w-4 sm:w-5 md:w-6" />
    Print
  </div>
  <div className={`max-w-[calc(50%-0.25rem)] sm:w-full font-lexend font-semibold text-[10px] sm:text-base md:text-lg border-2 px-1.5 sm:px-3 py-1 sm:py-2 rounded-xl flex items-center justify-center gap-1.5 sm:gap-3 cursor-pointer text-[#9810FA] border-[#9810FA] ${darkMode?'bg-[#9810FA0D]':'bg-[white] '}`}>
    <img src="/Icons/mail.svg" alt="mail" className="w-4 sm:w-5 md:w-6" />
    Email
  </div>
  <div className={`max-w-[calc(50%-0.25rem)] sm:w-full font-lexend font-semibold text-[10px] sm:text-base md:text-lg border-2 px-1.5 sm:px-5 py-1 sm:py-2 rounded-xl flex items-center justify-center gap-1.5 sm:gap-3 cursor-pointer text-[#00A63E] border-[#00A63E]  ${darkMode?'bg-[#9810FA0D]':'bg-[white] '}`}>
    <img src="/Icons/whatsapp.svg" alt="whatsapp" className="w-4 sm:w-5 md:w-6" />
    Whatsapp
  </div>
</div>
            </div>
          </div>
        ))}

        {recentActivities.length >= 3 && (
          <Link to={"/dashboard/downloads"}>
            <p className={`flex items-center gap-2 px-3 py-1 border-2 border-[#3367E7] w-fit rounded-3xl font-manrope font-semibold text-xs sm:text-sm cursor-pointer transition hover:bg-[#3367E7] hover:text-white mx-auto ${darkMode?'text-[white]':'text-[black] '}`}>
              Show All
            </p>
          </Link>
        )}
      </div>

      {/* refer */}
      <div className={`px-[10px] sm:px-[18px] md:px-[30px] py-[10px] sm:py-[14px] md:py-[20px] ${darkMode?'bg-[#1A1D23]':'bg-[#F7F7FB]'}  space-y-[10px] sm:space-y-[14px] md:space-y-[20px] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] w-full sm:w-fit mx-auto`}>
      <p className={`font-lexend font-semibold text-[22px] sm:text-[28px] md:text-[40px] ${darkMode?'text-[white]':'text-[#1E1B39]'} text-center sm:text-left`}>
  <span className="blueGradient">Great Friend</span> Share{" "}
  <span className="purpleGradient">Great Opportunities</span>.
</p>

        <p className="w-fit rounded-full mx-auto text-[#00A6F4] border border-[#00A6F4] font-inter font-medium px-[12px] sm:px-[16px] md:px-[18px] py-[4px] sm:py-[5px] md:py-[6px] text-[14px] sm:text-[16px] md:text-[20px] cursor-pointer transition-all hover:scale-95">
          Refer Now and Change A Career
        </p>
      </div>
    </section>
  );
};

export default DashboardContent;
