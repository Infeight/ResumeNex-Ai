import React, { useState } from "react";

const Step1OfLO = () => {
  const [fullName, setFullName] = useState("");
  const [currentRole, setCurrentRole] = useState("");
  const [isStudying, setIsStudying] = useState(false);
  const [stream, setStream] = useState("");
  const [institution, setInstitution] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [images, setImages] = useState([null, null, null, null]); // State for four image slots

  // Handle drag over
  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.currentTarget.classList.add("border-[#AD46FF]");
  };

  // Handle drag leave
  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove("border-[#AD46FF]");
  };

  // Handle drop
  const handleDrop = (e, index) => {
    e.preventDefault();
    e.currentTarget.classList.remove("border-[#AD46FF]");
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedImages = [...images];
        updatedImages[index] = reader.result;
        setImages(updatedImages);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle file input change
  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedImages = [...images];
        updatedImages[index] = reader.result;
        setImages(updatedImages);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="flex flex-col gap-[36px]">
      {/* Basic Profile Information Section */}
      <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full">
        <div className="relative w-fit">
          <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
            Basic Profile Information
          </h2>
          <div className="bg-[#F8F0FF] h-2/4 w-3/4 absolute -bottom-0 -left-2"></div>
        </div>

        <div className="border-l-2 border-[#DAB2FF] p-[30px] mx-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
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
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]"
                placeholder="Enter your full name"
              />
            </div>

            {/* Current Role */}
            <div className="flex flex-col">
              <label
                htmlFor="currentRole"
                className="text-[#170F49] font-inter font-medium mb-1 text-[18px]"
              >
                Current Role
              </label>
              <input
                id="currentRole"
                type="text"
                value={currentRole}
                onChange={(e) => setCurrentRole(e.target.value)}
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]"
                placeholder="e.g., Full Stack Developer, B.Tech Student"
              />
            </div>

            {/* Checkbox: Currently Studying */}
            <div className="flex items-center col-span-2 gap-3">
              <input
                id="isStudying"
                type="checkbox"
                checked={isStudying}
                onChange={(e) => setIsStudying(e.target.checked)}
                className="w-5 h-5 rounded border-[#DCDCDC] focus:ring-2 focus:ring-[#DAB2FF] text-[#AD46FF]"
              />
              <label
                htmlFor="isStudying"
                className="text-[#170F49] font-inter font-medium text-[18px]"
              >
                I am currently studying
              </label>
            </div>

            {/* Currently Studying Section */}
            {isStudying && (
              <div className="col-span-2 bg-[#FAF5FF] border border-dashed border-[#AD46FF] rounded-lg p-6 transition-all">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
                  {/* Stream */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="stream"
                      className="text-[#170F49] font-inter font-medium mb-1 text-[18px]"
                    >
                      Stream / Course Name
                    </label>
                    <input
                      id="stream"
                      type="text"
                      value={stream}
                      onChange={(e) => setStream(e.target.value)}
                      className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#AD46FF] placeholder-[#A59DAA]"
                      placeholder="e.g., B.Tech CSE, MBA Marketing"
                    />
                  </div>

                  {/* Institution */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="institution"
                      className="text-[#170F49] font-inter font-medium mb-1 text-[18px]"
                    >
                      Institution Name
                    </label>
                    <input
                      id="institution"
                      type="text"
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#AD46FF] placeholder-[#A59DAA]"
                      placeholder="Enter your college/university"
                    />
                  </div>

                  {/* Current Year */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="currentYear"
                      className="text-[#170F49] font-inter font-medium mb-1 text-[18px]"
                    >
                      Current Year of Study
                    </label>
                    <select
                      id="currentYear"
                      value={currentYear}
                      onChange={(e) => setCurrentYear(e.target.value)}
                      className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#AD46FF] text-[#170F49] placeholder-[#A59DAA]"
                    >
                      <option value="" disabled>
                        Select Year
                      </option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="Final Year">Final Year</option>
                    </select>
                  </div>

                  {/* Graduation Year */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="gradYear"
                      className="text-[#170F49] font-inter font-medium mb-1 text-[18px]"
                    >
                      Expected Graduation Year{" "}
                      <span className="text-[#A59DAA] text-[14px]">
                        (Optional)
                      </span>
                    </label>
                    <input
                      id="gradYear"
                      type="text"
                      value={gradYear}
                      onChange={(e) => setGradYear(e.target.value)}
                      className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#AD46FF] placeholder-[#A59DAA]"
                      placeholder="e.g., 2025"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Industry */}
            <div className="flex flex-col">
              <label
                htmlFor="industry"
                className="text-[#170F49] font-inter font-medium mb-1 text-[18px]"
              >
                Industry
              </label>
              <input
                id="industry"
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]"
                placeholder="e.g., IT, Marketing, Education"
              />
            </div>

            {/* Location */}
            <div className="flex flex-col">
              <label
                htmlFor="location"
                className="text-[#170F49] font-inter font-medium mb-1 text-[18px]"
              >
                Location
              </label>
              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] placeholder-[#A59DAA]"
                placeholder="e.g., New York, NY"
              />
            </div>

            {/* Experience */}
            <div className="flex flex-col">
              <label
                htmlFor="experience"
                className="text-[#170F49] font-inter font-medium mb-1 text-[18px]"
              >
                Years of Experience
              </label>
              <select
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="bg-white border border-[#DCDCDC] rounded-full px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB2FF] text-[#170F49] placeholder-[#A59DAA]"
              >
                <option value="" disabled>
                  Select Experience
                </option>
                <option value="Fresher">Fresher</option>
                <option value="0–2 years">0–2 years</option>
                <option value="2–5 years">2–5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Images Section */}
      <div className="flex flex-col gap-[20px] bg-white p-6 rounded-lg w-full">
        <div className="relative w-fit">
          <h2 className="text-[#170F49] font-manrope font-bold text-[24px] relative z-1">
            Profile Images (Min 2 images)
          </h2>
          <div className="bg-[#FFF4CC] h-2/4 w-3/4 absolute -bottom-0 -left-2"></div>
        </div>
        <div className="border-l-2 border-[#FDC700] p-[30px] mx-[20px]">
          <div className="grid grid-cols-2 gap-[20px] w-fit">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center h-52 w-52 aspect-square bg-[#FFF4CC] border-2 border-dashed border-[#FDC700] rounded-lg cursor-pointer transition-all"
                onDragOver={(e) => handleDragOver(e, index)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, index)}
              >
                {image ? (
                  <img
                    src={image}
                    alt={`Uploaded ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-center text-[#A59DAA] font-inter text-[14px] p-10">
                    Drag & Drop or Click to Upload
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => handleFileChange(e, index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step1OfLO;
