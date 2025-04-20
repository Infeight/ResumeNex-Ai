import React, { useState } from "react";

const Step4OfCL = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [date, setDate] = useState("");
  return (
    <>
      <section className="flex flex-col gap-[36px]">
        {/* Interview ava details */}
        <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full ">
          <div className="relative  w-fit">
            <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
              Interview Availability
            </h2>
            <div className="bg-[#E3F6FF] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
          </div>
          {/* Two-column grid, responsive to one column on small screens */}
          <div className="border-l-2 border-[#74D4FF] p-[30px] mx-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
              <div className="flex flex-col">
                <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                  Availability for Interview:
                </label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                  placeholder="--/--/----"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Mode of Cover Letter */}
        <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full ">
          <div className="relative  w-fit">
            <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
              Mode of Cover Letter
            </h2>
            <div className="bg-[#EBFACC] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
          </div>
          <div className="border-l-2 border-[#9AE600] p-[30px] mx-[20px]">
            <div className="flex gap-[15px]">
              <button className="border flex items-center gap-1 font-inter text-[#A59DAA] font-medium text-[20px] px-[10px] py-[2px] w-fit  rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#f5f5f5] ">
                Formal
              </button>
              <button className="border flex items-center gap-1 font-inter text-[#699C01] font-medium text-[20px] px-[10px] py-[2px] w-fit  rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#e5fabc] ">
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

export default Step4OfCL;
