import { useState } from "react";

const Certificates = () => {
  const add_circle = "/AIResumeAssets/add_circle.png";
  const deleteicon = "/AIResumeAssets/delete.png";

  const [certificates, setCertificates] = useState([
    {
      name: "",
      organization: "",
      issueDate: "",
      expiryDate: "",
      link: "",
    },
  ]);

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
          <h2 className="text-[25px] leading-[40px] tracking-[0px] text-[#212529] font-manrope font-bold mb-4">
            Certificates
          </h2>
        </div>
        <div className="w-24 h-5 bg-[#F3E8FF] -mt-8"></div>
      </div>
      <div className="flex flex-col w-[527px] ml-3 border-l-[2px] border-[#DAB2FF] pb-[40px] pl-[30px] gap-[20px] font-inter">
        {certificates.map((cert, index) => (
          <div key={index} className="flex flex-col gap-[10px]">
            <h2 className="flex items-center justify-between gap-[20px] w-[497px] h-auto px-[20px] py-[5px] mt-10 border border-[#DAB2FF] bg-[#FAF5FF] rounded-[10px] text-[#212529] text-[16px] leading-[24px] font-['Inter'] font-medium">
              <span>{index + 1}. Certificate Name</span>
              <img
                src={deleteicon}
                alt="delete"
                className="w-5 h-5 cursor-pointer"
                onClick={() => removeCertificate(index)}
              />
            </h2>

            <div className="flex font-inter flex-col gap-4 px-4 py-4 border rounded-xl border-[#DAB2FF] bg-[#FAF5FF]">
              <input
                type="text"
                name="name"
                placeholder="Certificate Name"
                value={cert.name}
                onChange={(e) => handleChange(index, e)}
                className="h-[56px] border rounded-[8px] pt-[16px] pr-[15px] pb-[16px] pl-[15px] w-full focus:outline-none focus:ring-1 focus:ring-[#DAB2FF]"
              />
              <input
                type="text"
                name="organization"
                placeholder="Issuing Organization"
                value={cert.organization}
                onChange={(e) => handleChange(index, e)}
                className="h-[56px] border rounded-[8px] pt-[16px] pr-[15px] pb-[16px] pl-[15px] w-full focus:outline-none focus:ring-1 focus:ring-[#DAB2FF]"
              />
              <div className="flex gap-4 font-inter text-gray-400">
                <input
                  type="date"
                  name="issueDate"
                  placeholder="Issue Date"
                  value={cert.issueDate}
                  onChange={(e) => handleChange(index, e)}
                  className="w-1/2 h-[56px] border rounded-md px-4 focus:outline-none focus:ring-1 focus:ring-[#DAB2FF]"
                />
                <input
                  type="date"
                  name="expiryDate"
                  placeholder="Expiry Date (Optional)"
                  value={cert.expiryDate}
                  onChange={(e) => handleChange(index, e)}
                  className="w-1/2 h-[56px] border rounded-md px-4 focus:outline-none focus:ring-1 focus:ring-[#DAB2FF]"
                />
              </div>
              <input
                type="url"
                name="link"
                placeholder="Certificate Link (Optional)"
                value={cert.link}
                onChange={(e) => handleChange(index, e)}
                className="h-[56px] border rounded-[8px] pt-[16px] pr-[15px] pb-[16px] pl-[15px] w-full focus:outline-none focus:ring-1 focus:ring-[#DAB2FF]"
              />
            </div>
          </div>
        ))}
        <div className="flex justify-start">
          <button
            onClick={addCertificate}
            className="flex items-center gap-[5px] px-[10px] py-[2px] bg-[#FAF5FF] border border-[#DAB2FF] rounded-full text-[#AD46FF] font-['Inter'] text-[15px] leading-[24px]"
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
