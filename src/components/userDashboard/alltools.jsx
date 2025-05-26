import React from 'react'
import { Link } from 'react-router-dom'


const Alltools = () => {
  return (

    <>
       <div className="flex flex-wrap justify-between gap-4 md:gap-6 w-full margin-top-[20px] md:mt-[30px]">
        <Link to={"/resumes_templates"}>
          <div className="relative w-[185px] sm:w-[170px] md:w-[200px] h-[110px] sm:h-[130px] md:h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group border border-[#D9D9D9] ">
            <div className="p-[10px] sm:p-[12px] md:p-[15px] flex items-end">
              <p className="font-manrope font-bold text-[16px] sm:text-[18px] md:text-[20px]">
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
          <div className="relative w-[185px] sm:w-[170px] md:w-[200px] h-[110px] sm:h-[130px] md:h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group border border-[#D9D9D9] ">
            <div className="relative z-10 p-[10px] sm:p-[12px] md:p-[15px] flex items-end">
              <p className="font-manrope font-bold text-[16px] sm:text-[18px] md:text-[20px]">
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
          <div className="relative w-[185px] sm:w-[170px] md:w-[200px] h-[110px] sm:h-[130px] md:h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group border border-[#D9D9D9] ">
            <div className="relative z-10 p-[10px] sm:p-[12px] md:p-[15px] flex items-end">
              <p className="font-manrope font-bold text-[16px] sm:text-[18px] md:text-[20px]">
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
          <div className="relative w-[185px] sm:w-[170px] md:w-[200px] h-[110px] sm:h-[130px] md:h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group border border-[#D9D9D9] ">
            <div className="relative z-10 p-[10px] sm:p-[12px] md:p-[15px] flex items-end">
              <p className="font-manrope font-bold text-[16px] sm:text-[18px] md:text-[20px]">
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
          <div className="relative w-[185px] sm:w-[170px] md:w-[200px] h-[110px] sm:h-[130px] md:h-[144px] bg-[#F8F8F8] rounded-[24px] flex cursor-pointer hover:shadow-[0px_0px_0px_2px_#4C95FB] hover:bg-[linear-gradient(to_top_right,#b0d7ff_1%,#F8f8f8_25%)] transition-all overflow-hidden group border border-[#D9D9D9] ">
            <div className="relative z-10 p-[10px] sm:p-[12px] md:p-[15px] flex items-end">
              <p className="font-manrope font-bold text-[16px] sm:text-[18px] md:text-[20px]">
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
    </>
  )
}

export default Alltools
