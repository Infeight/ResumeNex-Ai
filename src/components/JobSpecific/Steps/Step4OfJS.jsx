import React, { useState } from "react";
import AddIcon from "../../commonComponents/AddIcon";

const Step4OfJS = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [date, setDate] = useState("");
  return (
    <>
      <section className="flex flex-col gap-[36px]">
        {/* education details */}
        <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full ">
          <div className="relative  w-fit">
            <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
              Certification {" "}
            </h2>
            <div className="bg-[#E3F6FF] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
          </div>
          {/* Two-column grid, responsive to one column on small screens */}
          <div className="border-l-2 border-[#74D4FF] p-[30px] mx-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
              {/* Full Name Field */}
              <div className="flex flex-col gap-[5px]">
                <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                  Certification  name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                  placeholder="John Doe"
                />
              </div>

              {/* Date Field */}
              <div className="flex gap-[13px] ">
                <div className="flex flex-col gap-[5px]">
                  <label className="text-[#170F49] font-inter font-medium text-[18px]">
                    Start Year
                  </label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full mt-1 bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                    placeholder="--/--/----"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  {" "}
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    End Year
                  </label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full mt-1 bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                    placeholder="--/--/----"
                  />
                </div>
              </div>

              {/* Email Address Field */}
              <div className="flex flex-col gap-[5px]">
                <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                  Issued By
                </label>
                <input
                  type="text"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                  placeholder="Email address"
                />
              </div>
            </div>
          </div>

          <button className="border flex items-center gap-1 font-inter text-[#00A6F4] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#F0F9FF] rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#d8eefd] ">
            Add More Education
            <AddIcon color={"#00A6F4"} />
          </button>
        </div>

        <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg   ">
          <div className="relative  w-fit">
            <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
              Languages know{" "}
              <span className="text-[18px] text-[#A59DAA]"> (Optional)</span>
            </h2>
            <div className="bg-[#EBFACC] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
          </div>
          <div className="border-l-2 border-[#9AE600] p-[30px] mx-[20px] ">
            <div className="flex gap-[35px]">
              {/* Previous Company Name */}
              <div className="relative flex flex-col gap-[5px]  w-full">
                <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                  Enter Language
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA]"
                  placeholder="John Doe"
                />
                {/* option */}
                <div class="absolute right-5 top-[50px] w-fit flex gap-2">
                  <select class="w-fit  text-[16px] rounded-full  text-[#212529]  bg-[#EEEEEE] pl-5 pr-8 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 appearance-none cursor-pointer">
                    <option value="brazil">Fluent</option>
                    <option value="bucharest">Intermediate</option>
                    <option value="washington">Beginner</option>
                  </select>
                  <button className="px-[20px] bg-[#CDF9E3] rounded-full py-[2px] cursor-pointer">
                    Enter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Step4OfJS;
