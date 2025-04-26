import React, { useState } from "react";
import AddIcon from "../../commonComponents/AddIcon";

const Step5OfJS = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [date, setDate] = useState("");
  return (
    <>
      <section className="flex flex-col gap-[36px]">
        {/* hobies */}
        <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full ">
          <div className="relative  w-fit">
            <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
              Hobbies 
            </h2>
            <div className="bg-[#FFF4CC] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
          </div>
          {/* Two-column grid, responsive to one column on small screens */}
          <div className="border-l-2 border-[#FDC700] p-[30px] mx-[20px]">
            <div className="flex flex-col">
              <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                Hobbies Name
              </label>
              <input
                type="text"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]"
                placeholder="Email address"
              />
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full ">
          <div className="relative  w-fit">
            <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
              Achievements
            </h2>
            <div className="bg-[#F8F0FF] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
          </div>
          {/* Two-column grid, responsive to one column on small screens */}
          <div className="border-l-2 border-[#DAB2FF] p-[30px] mx-[20px]">
            <div className="flex flex-col">
              <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                Achievements Name
              </label>
              <input
                type="text"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]"
                placeholder="Email address"
              />
            </div>
          </div>
        </div>

        {/* Mode Resume */}
        <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full ">
          <div className="relative  w-fit">
            <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
              Mode of Resume
            </h2>
            <div className="bg-[#CCEDFD] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
          </div>
          <div className="border-l-2 border-[#00A6F4] p-[30px] mx-[20px]">
            <div className="flex gap-[15px]">
              <button className="border flex items-center gap-1 font-inter text-[#A59DAA] font-medium text-[20px] px-[10px] py-[2px] w-fit  rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#f5f5f5] ">
                Formal
              </button>
              <button className="border flex items-center gap-1 font-inter text-[#00A6F4] font-medium text-[20px] px-[10px] py-[2px] w-fit  rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#CCEDFD] ">
                Professional
              </button>
              <button className="border flex items-center gap-1 font-inter text-[#A59DAA] font-medium text-[20px] px-[10px] py-[2px] w-fit  rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#f5f5f5] ">
                Enthusiastic
              </button>
              <button className="border flex items-center gap-1 font-inter text-[#A59DAA] font-medium text-[20px] px-[10px] py-[2px] w-fit  rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#f5f5f5] ">
                Interested
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Step5OfJS;
