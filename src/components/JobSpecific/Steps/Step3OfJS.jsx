import React, { useState } from "react";
import AddIcon from "../../commonComponents/AddIcon";

const Step3OfJS = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [date, setDate] = useState("");
  return (
    <>
      <section className="flex flex-col gap-[36px]">
        {/* job details */}
        <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full ">
          <div className="relative  w-fit">
            <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
              Projects
            </h2>
            <div className="bg-[#FFF4CC] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
          </div>
          {/* Two-column grid, responsive to one column on small screens */}
          <div className="border-l-2 border-[#FDC700] p-[30px] mx-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
              <div className="flex flex-col">
                <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                  Project Name
                </label>
                <input
                  type="text"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]"
                  placeholder="Email address"
                />
              </div>
              {/* Date Field */}
              <div className="flex gap-[13px] ">
                <div>
                  <label className="text-[#170F49] font-inter font-medium text-[18px]">
                    Start Year
                  </label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full mt-1 bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]"
                    placeholder="--/--/----"
                  />
                </div>
                <div>
                  {" "}
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    End Year
                  </label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full mt-1 bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]"
                    placeholder="--/--/----"
                  />
                </div>
              </div>
              {/* Full Name Field */}
              <div className="flex flex-col">
                <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                  Tech Used{" "}
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]"
                  placeholder="John Doe"
                />
              </div>
              {/* Phone Number Field */}
              <div className="flex flex-col">
                <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                  About Project
                </label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]"
                  placeholder="(+91) 12345 67890"
                />
              </div>
              {/* Email Address Field */}
            </div>
          </div>
          <button className="border flex items-center gap-1 font-inter text-[#D08700] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#FEFCE8] rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#fdfada] ">
            Hr Name
            <AddIcon color={"#D08700"} />
          </button>
        </div>

        {/* Skills & Achievements: */}
        <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full ">
          <div className="relative  w-fit">
            <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
              Skills & Achievements:
            </h2>
            <div className="bg-[#F8F0FF] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
          </div>
          {/* Two-column grid, responsive to one column on small screens */}
          <div className="border-l-2 border-[#DAB2FF] p-[30px] mx-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-[35px]">
              {/* skills */}
              <div className="flex flex-col">
                <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                  Skills
                  <span className="ml-1 text-[#A59DAA] text-[14px]">
                    (Max 3 skills)
                  </span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]"
                  placeholder="John Doe"
                />
              </div>

              <div className=" text-[#170F49] font-inter font-medium flex items-center w-fit gap-[15px] p-[15px] border border-dashed border-[#DCDCDC] rounded-full">
                Skill Based On Job Role:
                <button className="border flex items-center gap-1 font-inter text-[#AD46FF] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#FAF5FF] rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#e8d9f8] ">
                  SQL
                  <AddIcon color={"#AD46FF"} />
                </button>
                <button className="border flex items-center gap-1 font-inter text-[#AD46FF] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#FAF5FF] rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#e8d9f8] ">
                  Flask
                  <AddIcon color={"#AD46FF"} />
                </button>
                <button className="border flex items-center gap-1 font-inter text-[#AD46FF] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#FAF5FF] rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#e8d9f8] ">
                  SQL
                  <AddIcon color={"#AD46FF"} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Step3OfJS;
