import { useState } from "react";
import { useResume } from "./resumecontext";
import { useUser } from "../../commonComponents/usercontext";
import { RiDeleteBin5Fill } from "react-icons/ri";



const Certificates = () => {
  const add_circle = "/AIResumeAssets/add_circle.png";
  const deleteicon = "/AIResumeAssets/delete.png";

  // const [certificates, setCertificates] = useState([
  //   {
  //     name: "",
  //     organization: "",
  //     issueDate: "",
  //     expiryDate: "",
  //     link: "",
  //   },
  // ]);

  const {certificates,setCertificates} = useResume();
       const {darkMode} =useUser();
  

  const addCertificate = () => {
    setCertificates([
      ...certificates,
      {
        name: "",
        organization: "",
        issueDate: "",
        expiryDate: "",
        link: "",
      },
    ]);
  };

  const handleChange = (index, e) => {
    const newCertificates = [...certificates];
    newCertificates[index][e.target.name] = e.target.value;
    setCertificates(newCertificates);
  };

  const removeCertificate = (index) => {
    const newCertificates = certificates.filter((_, i) => i !== index);
    setCertificates(newCertificates);
  };

  return (
    <div className="mb-8">
      <div className="mb-3">
        <div className="flex gap-2 items-center">
          <h2 className={`text-[25px] leading-[40px] tracking-[0px] ${darkMode?'text-[white]':'text-[#212529]'} font-manrope font-bold mb-4`}>
            Certificates
          </h2>
        </div>
        <div className={`w-24 h-5 ${darkMode?'bg-[#DAB2FF33]':'bg-[#F3E8FF]'}  -mt-8`}></div>
      </div>
      
      <div className="flex flex-col w-full max-w-[527px] pb-[40px] gap-[20px] font-inter 
                ml-0 pl-0 border-l-0 
                lg:ml-3 lg:pl-[30px] lg:border-l-[2px] lg:border-[#DAB2FF]">

        {certificates.map((cert, index) => (
          <div key={index} className="flex flex-col gap-[10px]">
            <h2 className={`flex items-center justify-between gap-[20px] w-full max-w-[497px] h-auto px-[20px] py-[5px] mt-10 border border-[#DAB2FF]  ${darkMode?'bg-[#DAB2FF33]':'bg-[#FAF5FF]'}  rounded-[10px] ${darkMode?'text-[white]':'text-[#212529]'} text-[16px] leading-[24px] font-['Inter'] font-medium`}>
              <span>{index + 1}. Certificate Name</span>
              {darkMode?<RiDeleteBin5Fill style={{color:'white',fontSize:'1.7vw'}} />:
              <img
                src={deleteicon}
                alt="delete"
                className="w-5 h-5 cursor-pointer"
                onClick={() => removeCertificate(index)}
              />}
            </h2>

            <div className={`flex font-inter flex-col gap-4 px-4 py-4 border rounded-xl border-[#DAB2FF] ${darkMode?'bg-[#DAB2FF33]':'bg-[#FAF5FF]'} `}>
              <input
                type="text"
                name="name"
                placeholder="Certificate Name"
                value={cert.name}
                onChange={(e) => handleChange(index, e)}
                className={`${darkMode?'text-[white]':'text-gray-600'} w-full h-[56px] ${darkMode?'bg-[#1A1D23]':'bg-[white]'} border ${darkMode?'border-[#1A1D23]':'border-[#D3D9DE]'} rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#DAB2FF] placeholder:text-[#A59DAA]`}
              />
              <input
                type="text"
                name="organization"
                placeholder="Issuing Organization"
                value={cert.organization}
                onChange={(e) => handleChange(index, e)}
                className={`${darkMode?'text-[white]':'text-gray-600'} w-full h-[56px] ${darkMode?'bg-[#1A1D23]':'bg-[white]'} ${darkMode?'border-[#1A1D23]':'border-[#D3D9DE]'} rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#DAB2FF] placeholder:text-[#A59DAA]`}
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="date"
                  name="issueDate"
                  placeholder="Issue Date"
                  value={cert.issueDate}
                  onChange={(e) => handleChange(index, e)}
                  className={`${darkMode?'text-[white]':'text-gray-600'} w-full sm:w-[47%] h-[56px] ${darkMode?'bg-[#1A1D23]':'bg-[white]'} border ${darkMode?'border-[#1A1D23]':'border-[#D3D9DE]'} rounded-[8px] px-[8px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#DAB2FF] placeholder:text-[#A59DAA]`}
                />
                <input
                  type="date"
                  name="expiryDate"
                  placeholder="Expiry Date (Optional)"
                  value={cert.expiryDate}
                  onChange={(e) => handleChange(index, e)}
                  className={`${darkMode?'text-[white]':'text-gray-600'} w-full sm:w-[47%] h-[56px] ${darkMode?'bg-[#1A1D23]':'bg-[white]'} border ${darkMode?'border-[#1A1D23]':'border-[#D3D9DE]'} rounded-[8px] px-[8px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#DAB2FF] placeholder:text-[#A59DAA]`}
                />
              </div>
              <input
                type="url"
                name="link"
                placeholder="Certificate Link (Optional)"
                value={cert.link}
                onChange={(e) => handleChange(index, e)}
                className={`${darkMode?'text-[white]':'text-gray-600'} w-full h-[56px] ${darkMode?'bg-[#1A1D23]':'bg-[white]'} border ${darkMode?'border-[#1A1D23]':'border-[#D3D9DE]'} rounded-[8px] px-[15px] py-[16px] focus:outline-none focus:ring-1 focus:ring-[#DAB2FF] placeholder:text-[#A59DAA]`}
              />
            </div>
          </div>
        ))}
        <div className="flex justify-start">
          <button
            onClick={addCertificate}
            className={`flex items-center gap-[5px] px-[10px] py-[2px] ${darkMode?'bg-[#DAB2FF33]':'bg-[#F3E8FF]'} border border-[#DAB2FF] rounded-full text-[#AD46FF] font-['Inter'] text-[15px] leading-[24px]`}
          >
            <span>Add More Certificate</span>
            <img src={add_circle} className="w-4 h-4" alt="add" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
