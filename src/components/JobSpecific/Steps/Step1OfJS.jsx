import React from "react";
import AddIcon from "../../commonComponents/AddIcon";
import { useJobSpecific } from "../jobspecificcontext";
import { useUser } from "../../commonComponents/usercontext";

const Step1OfJS = () => {
  // Destructure all fields from context
  const {
    fullName, setFullName,
    middleName, setMiddleName,
    lastName, setLastName,
    phoneNumber, setPhoneNumber,
    emailAddress, setEmailAddress,
    state, setState,
    city, setCity,
    pincode, setPincode,
    // date, setDate, // Uncomment if needed
  } = useJobSpecific();
  const {darkMode} = useUser();

  return (
    <>
      <div className={`flex flex-col gap-[20px]  ${darkMode?'bg-[#1A1D23]':'bg-white'} p-6 rounded-lg w-full `}>
        <div className="relative  w-fit">
          <h2 className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-manrope font-bold text-[24px] relative z-1`}>
            Personal Information
          </h2>
          <div className={`${darkMode?'bg-[#1A1D23]':'bg-[#F8F0FF]'} h-2/4 w-3/4 absolute -bottom-0 -left-2 `}></div>
        </div>
        {/* input fields */}
        <div className="border-l-2 border-[#DAB2FF] p-[30px] mx-[20px]">
          <div className="flex flex-col gap-[40px]">
            {/* Full Name Fields */}
            <div className="flex gap-5">
              <div className="flex flex-col">
                <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col">
                <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                  Middle Name
                </label>
                <input
                  type="text"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                  className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                  placeholder="Michael"
                />
              </div>
              <div className="flex flex-col">
                <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                  placeholder="Doe"
                />
              </div>
            </div>
            {/* phone and email */}
            <div className="flex gap-5">
              {/* Phone Number Field */}
              <div className="flex flex-col w-full">
                <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                  Phone Number
                </label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                  placeholder="(+91) 12345 67890"
                />
              </div>
              {/* Email Address Field */}
              <div className="flex flex-col w-full">
                <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                  Email Address
                </label>
                <input
                  type="text"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                  placeholder="Email address"
                />
              </div>
            </div>
            {/* address*/}
            <div className="flex gap-5">
              <div className="flex flex-col">
                <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                  State
                </label>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                  placeholder="California"
                />
              </div>
              <div className="flex flex-col">
                <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                  City
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                  placeholder="San Francisco"
                />
              </div>
              <div className="flex flex-col">
                <label className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter font-medium mb-1 text-[18px]`}>
                  Pincode
                </label>
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className={`${darkMode?'bg-[#363B45]':'bg-white'} border ${darkMode?'border-[#363B45]':'border-[#DCDCDC]'} rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA] ${darkMode?'text-[white]':'text-[#1E1B39]'}`}
                  placeholder="94105"
                />
              </div>
            </div>
          </div>
        </div>
        {/* optional */}
        <div className={`flex flex-col gap-[20px] p-[15px]  ${darkMode?'bg-[#DAB2FF33]':'bg-[#FAF5FF]'}  border-[3px] border-[#DAB2FF] border-dashed rounded-[9px]`}>
          <p className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-inter text-[12px]`}>
            <span className={`${darkMode?'text-[white]':'text-[#1E1B39]'} px-[10px] py-[5px] rounded-full bg-[#DAB2FF] font-bold`}>
              Optional
            </span>
            {"  "} ( We recommend to add for good ATS )
          </p>
          <div className="flex gap-2">
            <button className={`border flex items-center gap-1 font-inter ${darkMode?'text-[white]':'text-[#1E1B39]'} font-medium text-[16px] px-[15px] py-[1px] w-fit  rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#e8d9f8] `}>
              LinkedIn
              <AddIcon color={"#555555"} />
            </button>
            <button className={`border flex items-center gap-1 font-inter ${darkMode?'text-[white]':'text-[#1E1B39]'} font-medium text-[16px] px-[15px] py-[1px] w-fit  rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#e8d9f8] `}>
              GitHub
              <AddIcon color={"#555555"} />
            </button>
            <button className={`border flex items-center gap-1 font-inter ${darkMode?'text-[white]':'text-[#1E1B39]'} font-medium text-[16px] px-[15px] py-[1px] w-fit  rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#e8d9f8] `}>
              Portfolio
              <AddIcon color={"#555555"} />
            </button>
            <button className={`border flex items-center gap-1 font-inter ${darkMode?'text-[white]':'text-[#1E1B39]'} font-medium text-[16px] px-[15px] py-[1px] w-fit  rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#e8d9f8] `}>
              Figma Profile
              <AddIcon color={"#555555"} />
            </button>
            <button className={`border flex items-center gap-1 font-inter ${darkMode?'text-[white]':'text-[#1E1B39]'} font-medium text-[16px] px-[15px] py-[1px] w-fit  rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#e8d9f8] `}>
              LeedCode
              <AddIcon color={"#555555"} />
            </button>
            <button className={`border flex items-center gap-1 font-inter ${darkMode?'text-[white]':'text-[#1E1B39]'} font-medium text-[16px] px-[15px] py-[1px] w-fit  rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#e8d9f8] `}>
              Other
              <AddIcon color={"#555555"} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1OfJS;
