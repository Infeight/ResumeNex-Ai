import React, { useState } from "react";

const StepsCoverLetter = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // State variables for each input field
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [date, setDate] = useState("");

  const steps = [
    {
      title: "step 1",
      content: (
        <>
          {/* Form container with white background, padding, shadow, and max width */}
          <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full ">
            <div className="relative  w-fit">
              <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
                Personal Information
              </h2>
              <div className="bg-[#F8F0FF] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
            </div>
            {/* Two-column grid, responsive to one column on small screens */}
            <div className="border-l-2 border-[#DAB2FF] p-[30px] mx-[20px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
                {/* Full Name Field */}
                <div className="flex flex-col">
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]"
                    placeholder="John Doe"
                  />
                </div>
                {/* Phone Number Field */}
                <div className="flex flex-col">
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]"
                    placeholder="(+91) 12345 67890"
                  />
                </div>
                {/* Email Address Field */}
                <div className="flex flex-col">
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    Email Address
                  </label>
                  <input
                    type="text"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]"
                    placeholder="Email address"
                  />
                </div>
                {/* Date Field */}
                <div className="flex flex-col">
                  <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                    Date
                  </label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]"
                    placeholder="--/--/----"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "step 2",
      content: (
        <>
          <section className="flex flex-col gap-[36px]">
            {/* education details */}
            <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full ">
              <div className="relative  w-fit">
                <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
                  Education Details
                </h2>
                <div className="bg-[#E3F6FF] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
              </div>
              {/* Two-column grid, responsive to one column on small screens */}
              <div className="border-l-2 border-[#74D4FF] p-[30px] mx-[20px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
                  {/* Full Name Field */}
                  <div className="flex flex-col">
                    <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                      College Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                      placeholder="John Doe"
                    />
                  </div>
                  {/* Phone Number Field */}
                  <div className="flex flex-col">
                    <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                      Degree
                    </label>
                    <input
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                      placeholder="(+91) 12345 67890"
                    />
                  </div>
                  {/* Email Address Field */}
                  <div className="flex flex-col">
                    <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                      Stream
                    </label>
                    <input
                      type="text"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
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
                        className="w-full mt-1 bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
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
                        className="w-full mt-1 bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74D4FF] placeholder-[#A59DAA]"
                        placeholder="--/--/----"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button className="border flex items-center gap-1 font-inter text-[#00A6F4] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#F0F9FF] rounded-full hover:scale-95 transition-all cursor-pointer hover:bg-[#d8eefd] ">
                Add More Education{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.375 10.125H7.625V7.625H10.125V6.375H7.625V3.875H6.375V6.375H3.875V7.625H6.375V10.125ZM7 13.25C6.13542 13.25 5.32292 13.0885 4.5625 12.7656C3.80208 12.4323 3.14062 11.9844 2.57812 11.4219C2.01562 10.8594 1.56771 10.1979 1.23438 9.4375C0.911458 8.67708 0.75 7.86458 0.75 7C0.75 6.13542 0.911458 5.32292 1.23438 4.5625C1.56771 3.80208 2.01562 3.14062 2.57812 2.57812C3.14062 2.01562 3.80208 1.57292 4.5625 1.25C5.32292 0.916666 6.13542 0.75 7 0.75C7.86458 0.75 8.67708 0.916666 9.4375 1.25C10.1979 1.57292 10.8594 2.01562 11.4219 2.57812C11.9844 3.14062 12.4271 3.80208 12.75 4.5625C13.0833 5.32292 13.25 6.13542 13.25 7C13.25 7.86458 13.0833 8.67708 12.75 9.4375C12.4271 10.1979 11.9844 10.8594 11.4219 11.4219C10.8594 11.9844 10.1979 12.4323 9.4375 12.7656C8.67708 13.0885 7.86458 13.25 7 13.25ZM7 12C8.39583 12 9.57812 11.5156 10.5469 10.5469C11.5156 9.57812 12 8.39583 12 7C12 5.60417 11.5156 4.42187 10.5469 3.45312C9.57812 2.48437 8.39583 2 7 2C5.60417 2 4.42187 2.48437 3.45312 3.45312C2.48437 4.42187 2 5.60417 2 7C2 8.39583 2.48437 9.57812 3.45312 10.5469C4.42187 11.5156 5.60417 12 7 12Z"
                    fill="#00A6F4"
                  />
                </svg>
              </button>
            </div>

            {/* work exp */}

            <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full ">
              <div className="relative  w-fit">
                <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
                  Work Experience{" "}
                  <span className="text-[18px] text-[#A59DAA]">
                    {" "}
                    (Optional)
                  </span>
                </h2>
                <div className="bg-[#EBFACC] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
              </div>
              <div className="border-l-2 border-[#9AE600] p-[30px] mx-[20px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
                  {/* Previous Company Name */}
                  <div className="flex flex-col">
                    <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                      Previous Company Name{" "}
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA]"
                      placeholder="John Doe"
                    />
                  </div>
                  {/* job */}
                  <div className="flex flex-col">
                    <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                      Job Role
                    </label>
                    <input
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA]"
                      placeholder="(+91) 12345 67890"
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
                        className="w-full mt-1 bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA]"
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
                        className="w-full mt-1 bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9AE600] placeholder-[#A59DAA]"
                        placeholder="--/--/----"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button className="border flex items-center gap-1 font-inter text-[#699C01] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#EBFACC] rounded-full hover:scale-95 transition-all cursor-pointer bg-[#EBFACC] hover:bg-[#e5fabc] ">
                Add Notice Period
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.375 10.125H7.625V7.625H10.125V6.375H7.625V3.875H6.375V6.375H3.875V7.625H6.375V10.125ZM7 13.25C6.13542 13.25 5.32292 13.0885 4.5625 12.7656C3.80208 12.4323 3.14062 11.9844 2.57812 11.4219C2.01562 10.8594 1.56771 10.1979 1.23438 9.4375C0.911458 8.67708 0.75 7.86458 0.75 7C0.75 6.13542 0.911458 5.32292 1.23438 4.5625C1.56771 3.80208 2.01562 3.14062 2.57812 2.57812C3.14062 2.01562 3.80208 1.57292 4.5625 1.25C5.32292 0.916666 6.13542 0.75 7 0.75C7.86458 0.75 8.67708 0.916666 9.4375 1.25C10.1979 1.57292 10.8594 2.01562 11.4219 2.57812C11.9844 3.14062 12.4271 3.80208 12.75 4.5625C13.0833 5.32292 13.25 6.13542 13.25 7C13.25 7.86458 13.0833 8.67708 12.75 9.4375C12.4271 10.1979 11.9844 10.8594 11.4219 11.4219C10.8594 11.9844 10.1979 12.4323 9.4375 12.7656C8.67708 13.0885 7.86458 13.25 7 13.25ZM7 12C8.39583 12 9.57812 11.5156 10.5469 10.5469C11.5156 9.57812 12 8.39583 12 7C12 5.60417 11.5156 4.42187 10.5469 3.45312C9.57812 2.48437 8.39583 2 7 2C5.60417 2 4.42187 2.48437 3.45312 3.45312C2.48437 4.42187 2 5.60417 2 7C2 8.39583 2.48437 9.57812 3.45312 10.5469C4.42187 11.5156 5.60417 12 7 12Z"
                    fill="#699C01"
                  />
                </svg>
              </button>
            </div>
          </section>
        </>
      ),
    },
    {
      title: "step 3",
      content: (
        <>
          <section className="flex flex-col gap-[36px]">
            {/* job details */}
            <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full ">
              <div className="relative  w-fit">
                <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
                  Job Details Applying For
                </h2>
                <div className="bg-[#FFF4CC] h-2/4 w-3/4 absolute -bottom-0 -left-2 "></div>
              </div>
              {/* Two-column grid, responsive to one column on small screens */}
              <div className="border-l-2 border-[#FDC700] p-[30px] mx-[20px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
                  {/* Job Role Field */}
                  <div className="flex flex-col">
                    <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                      Job Role
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]"
                      placeholder="John Doe"
                    />
                  </div>
                  {/* Company Name Field */}
                  <div className="flex flex-col">
                    <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]"
                      placeholder="(+91) 12345 67890"
                    />
                  </div>
                  {/* Company Address Field */}
                  <div className="flex flex-col">
                    <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                      Company Address
                    </label>
                    <input
                      type="text"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]"
                      placeholder="Email address"
                    />
                  </div>
                  {/*Why this Company?  Field */}
                  <div className="flex flex-col">
                    <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                      Why this Company?{" "}
                      <span className="text-[#A59DAA] text-[14px]">
                        (Short paragraph input)
                      </span>
                    </label>
                    <input
                      type="text"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FDC700] placeholder-[#A59DAA]"
                      placeholder="--/--/----"
                    />
                  </div>
                </div>
              </div>
              <button className="border flex items-center gap-1 font-inter text-[#D08700] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#FEFCE8] rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#fdfada] ">
                Hr Name
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.375 10.125H7.625V7.625H10.125V6.375H7.625V3.875H6.375V6.375H3.875V7.625H6.375V10.125ZM7 13.25C6.13542 13.25 5.32292 13.0885 4.5625 12.7656C3.80208 12.4323 3.14062 11.9844 2.57812 11.4219C2.01562 10.8594 1.56771 10.1979 1.23438 9.4375C0.911458 8.67708 0.75 7.86458 0.75 7C0.75 6.13542 0.911458 5.32292 1.23438 4.5625C1.56771 3.80208 2.01562 3.14062 2.57812 2.57812C3.14062 2.01562 3.80208 1.57292 4.5625 1.25C5.32292 0.916666 6.13542 0.75 7 0.75C7.86458 0.75 8.67708 0.916666 9.4375 1.25C10.1979 1.57292 10.8594 2.01562 11.4219 2.57812C11.9844 3.14062 12.4271 3.80208 12.75 4.5625C13.0833 5.32292 13.25 6.13542 13.25 7C13.25 7.86458 13.0833 8.67708 12.75 9.4375C12.4271 10.1979 11.9844 10.8594 11.4219 11.4219C10.8594 11.9844 10.1979 12.4323 9.4375 12.7656C8.67708 13.0885 7.86458 13.25 7 13.25ZM7 12C8.39583 12 9.57812 11.5156 10.5469 10.5469C11.5156 9.57812 12 8.39583 12 7C12 5.60417 11.5156 4.42187 10.5469 3.45312C9.57812 2.48437 8.39583 2 7 2C5.60417 2 4.42187 2.48437 3.45312 3.45312C2.48437 4.42187 2 5.60417 2 7C2 8.39583 2.48437 9.57812 3.45312 10.5469C4.42187 11.5156 5.60417 12 7 12Z"
                    fill="#D08700"
                  />
                </svg>
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
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.375 10.125H7.625V7.625H10.125V6.375H7.625V3.875H6.375V6.375H3.875V7.625H6.375V10.125ZM7 13.25C6.13542 13.25 5.32292 13.0885 4.5625 12.7656C3.80208 12.4323 3.14062 11.9844 2.57812 11.4219C2.01562 10.8594 1.56771 10.1979 1.23438 9.4375C0.911458 8.67708 0.75 7.86458 0.75 7C0.75 6.13542 0.911458 5.32292 1.23438 4.5625C1.56771 3.80208 2.01562 3.14062 2.57812 2.57812C3.14062 2.01562 3.80208 1.57292 4.5625 1.25C5.32292 0.916666 6.13542 0.75 7 0.75C7.86458 0.75 8.67708 0.916666 9.4375 1.25C10.1979 1.57292 10.8594 2.01562 11.4219 2.57812C11.9844 3.14062 12.4271 3.80208 12.75 4.5625C13.0833 5.32292 13.25 6.13542 13.25 7C13.25 7.86458 13.0833 8.67708 12.75 9.4375C12.4271 10.1979 11.9844 10.8594 11.4219 11.4219C10.8594 11.9844 10.1979 12.4323 9.4375 12.7656C8.67708 13.0885 7.86458 13.25 7 13.25ZM7 12C8.39583 12 9.57812 11.5156 10.5469 10.5469C11.5156 9.57812 12 8.39583 12 7C12 5.60417 11.5156 4.42187 10.5469 3.45312C9.57812 2.48437 8.39583 2 7 2C5.60417 2 4.42187 2.48437 3.45312 3.45312C2.48437 4.42187 2 5.60417 2 7C2 8.39583 2.48437 9.57812 3.45312 10.5469C4.42187 11.5156 5.60417 12 7 12Z"
                          fill="#AD46FF"
                        />
                      </svg>
                    </button>
                    <button className="border flex items-center gap-1 font-inter text-[#AD46FF] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#FAF5FF] rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#e8d9f8] ">
                      Flask
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.375 10.125H7.625V7.625H10.125V6.375H7.625V3.875H6.375V6.375H3.875V7.625H6.375V10.125ZM7 13.25C6.13542 13.25 5.32292 13.0885 4.5625 12.7656C3.80208 12.4323 3.14062 11.9844 2.57812 11.4219C2.01562 10.8594 1.56771 10.1979 1.23438 9.4375C0.911458 8.67708 0.75 7.86458 0.75 7C0.75 6.13542 0.911458 5.32292 1.23438 4.5625C1.56771 3.80208 2.01562 3.14062 2.57812 2.57812C3.14062 2.01562 3.80208 1.57292 4.5625 1.25C5.32292 0.916666 6.13542 0.75 7 0.75C7.86458 0.75 8.67708 0.916666 9.4375 1.25C10.1979 1.57292 10.8594 2.01562 11.4219 2.57812C11.9844 3.14062 12.4271 3.80208 12.75 4.5625C13.0833 5.32292 13.25 6.13542 13.25 7C13.25 7.86458 13.0833 8.67708 12.75 9.4375C12.4271 10.1979 11.9844 10.8594 11.4219 11.4219C10.8594 11.9844 10.1979 12.4323 9.4375 12.7656C8.67708 13.0885 7.86458 13.25 7 13.25ZM7 12C8.39583 12 9.57812 11.5156 10.5469 10.5469C11.5156 9.57812 12 8.39583 12 7C12 5.60417 11.5156 4.42187 10.5469 3.45312C9.57812 2.48437 8.39583 2 7 2C5.60417 2 4.42187 2.48437 3.45312 3.45312C2.48437 4.42187 2 5.60417 2 7C2 8.39583 2.48437 9.57812 3.45312 10.5469C4.42187 11.5156 5.60417 12 7 12Z"
                          fill="#AD46FF"
                        />
                      </svg>
                    </button>
                    <button className="border flex items-center gap-1 font-inter text-[#AD46FF] font-medium text-[16px] px-[10px] py-[2px] w-fit bg-[#FAF5FF] rounded-full hover:scale-95 transition-all cursor-pointer  hover:bg-[#e8d9f8] ">
                      SQL
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.375 10.125H7.625V7.625H10.125V6.375H7.625V3.875H6.375V6.375H3.875V7.625H6.375V10.125ZM7 13.25C6.13542 13.25 5.32292 13.0885 4.5625 12.7656C3.80208 12.4323 3.14062 11.9844 2.57812 11.4219C2.01562 10.8594 1.56771 10.1979 1.23438 9.4375C0.911458 8.67708 0.75 7.86458 0.75 7C0.75 6.13542 0.911458 5.32292 1.23438 4.5625C1.56771 3.80208 2.01562 3.14062 2.57812 2.57812C3.14062 2.01562 3.80208 1.57292 4.5625 1.25C5.32292 0.916666 6.13542 0.75 7 0.75C7.86458 0.75 8.67708 0.916666 9.4375 1.25C10.1979 1.57292 10.8594 2.01562 11.4219 2.57812C11.9844 3.14062 12.4271 3.80208 12.75 4.5625C13.0833 5.32292 13.25 6.13542 13.25 7C13.25 7.86458 13.0833 8.67708 12.75 9.4375C12.4271 10.1979 11.9844 10.8594 11.4219 11.4219C10.8594 11.9844 10.1979 12.4323 9.4375 12.7656C8.67708 13.0885 7.86458 13.25 7 13.25ZM7 12C8.39583 12 9.57812 11.5156 10.5469 10.5469C11.5156 9.57812 12 8.39583 12 7C12 5.60417 11.5156 4.42187 10.5469 3.45312C9.57812 2.48437 8.39583 2 7 2C5.60417 2 4.42187 2.48437 3.45312 3.45312C2.48437 4.42187 2 5.60417 2 7C2 8.39583 2.48437 9.57812 3.45312 10.5469C4.42187 11.5156 5.60417 12 7 12Z"
                          fill="#AD46FF"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Achivement */}
                  <div className="flex flex-col">
                    <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                      Notable Achievements
                      <span className="ml-1 text-[#A59DAA] text-[14px]">
                        (Optional)
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

                  {/* Certifications */}
                  <div className="flex flex-col">
                    <label className="text-[#170F49] font-inter font-medium mb-1 text-[18px]">
                      Certifications
                      <span className="ml-1 text-[#A59DAA] text-[14px]">
                        (Optional)
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
                </div>
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      title: "Final Review",
      content: <h3 className="text-lg">Step 4: Final Review</h3>,
    },
  ];

  return (
    <section className=" w-fit mx-auto flex flex-col justify-center items-center gap-[50px] py-[50px] text-[#212529]">
      <p className="font-lexend font-semibold text-[30px] flex gap-3">
        Build
        <span className="purpleGradient"> Cover Letter </span>
        In Just simple 4 Steps
      </p>

      <div className="flex flex-col gap-[35px]  w-[981px] mx-auto p-[50px] bg-white rounded-[34px] border border-[#DCDCDC] [box-shadow:0px_5px_16px_rgba(8,15,52,0.06)]">
        {/* Progress Bar */}
        <div className="flex items-center gap-[18px] w-[539px] mx-auto">
          {steps.map((_, idx, arr) => (
            <React.Fragment key={idx}>
              {/* Step circle */}
              <div
                className={`
                  w-[34px] h-[34px] flex items-center justify-center
                  rounded-full text-[16px] font-medium
                  ${
                    currentStep >= idx + 1
                      ? "bg-[#4C95FB] text-white"
                      : "bg-[#DCDCDC] text-[#A59DAA]"
                  }
                `}
              >
                {idx + 1}
              </div>

              {/* Connector */}
              {idx < arr.length - 1 && (
                <div className="w-full relative flex-1 h-[6px] mx-2 bg-[#DCDCDC] rounded-4xl">
                  {currentStep > idx + 1 && (
                    <div className="absolute inset-0 bg-[#4C95FB] rounded-4xl" />
                  )}
                  {currentStep === idx + 1 && (
                    <div className="absolute top-0 left-0 h-[6px] bg-[#4C95FB] w-2/4 rounded-4xl" />
                  )}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <hr className="border-t border-[#DCDCDC]" />

        {/* Step Content */}
        <div>{steps[currentStep - 1].content}</div>
      </div>
      {/* Navigation Buttons */}
      <div
        className={`flex items-center font-black font-manrope ${
          currentStep > 1 ? "justify-between" : "justify-end"
        } w-full`}
      >
        {currentStep > 1 && (
          <button
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className="px-[30px] py-[15px]  border-2 border-[#4C95FB] hover:bg-[#4c95fb46] text-[#4C95FB]   rounded-full transition-all cursor-pointer hover:scale-95"
          >
            Previous
          </button>
        )}
        <button
          onClick={() => setCurrentStep((prev) => prev + 1)}
          disabled={currentStep === totalSteps}
          className={`px-[30px] py-[15px] -mt-5  rounded-full text-white transition-all cursor-pointer ${
            currentStep === totalSteps
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#4C95FB] hover:scale-95 "
          }`}
        >
          {currentStep === totalSteps ? "Create AI Cover Letter" : "Next Step"}
        </button>
      </div>
    </section>
  );
};

export default StepsCoverLetter3;
