import React, { useState } from "react";

const Step1OfCL = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="flex flex-col gap-[20px] bg-white py-5 px-2  lg:p-6 rounded-lg w-full ">
      <div className="relative w-fit">
        <h2 className="text-[#170F49] font-manrope font-bold text-[20px] sm:text-[22px] md:text-[24px] relative z-1">
          Personal Information
        </h2>
        <div className="bg-[#F8F0FF] h-2/4 w-3/4 absolute -bottom-0 -left-2"></div>
      </div>

      <div className="border-l-2 border-[#DAB2FF] pl-[20px] lg:pl-[30px] ml-[10px] md:ml-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] sm:gap-[30px] md:gap-[35px]">
          {/* Full Name */}
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="text-[#170F49] font-inter font-medium mb-1 text-[18px]"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
              placeholder="Enter your full name"
              style={{ touchAction: "manipulation" }}
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="text-[#170F49] font-inter font-medium mb-1 text-[18px]"
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
              placeholder="Enter your phone number"
              style={{ touchAction: "manipulation" }}
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <label
              htmlFor="emailAddress"
              className="text-[#170F49] font-inter font-medium mb-1 text-[18px]"
            >
              Email Address
            </label>
            <input
              id="emailAddress"
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
              placeholder="Enter your email address"
              style={{ touchAction: "manipulation" }}
            />
          </div>

          {/* Date */}
          <div className="flex flex-col">
            <label
              htmlFor="date"
              className="text-[#170F49] font-inter font-medium mb-1 text-[18px]"
            >
              Date
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA] text-[14px] sm:text-base w-full"
              placeholder="Select a date"
              style={{ touchAction: "manipulation" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1OfCL;
