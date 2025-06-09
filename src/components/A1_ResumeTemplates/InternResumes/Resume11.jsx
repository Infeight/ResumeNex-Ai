import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const Resume11 = () => {
  const {
    formData,
    summary,
    skills,
    projects,
    education,
    certificates,
    workExperience,
    additional,
  } = useResume();

  return (
    <div className="font-['Arial',sans-serif] w-[794px] mx-auto my-[20px] p-5 bg-[#f4f4f4] text-[#333] leading-[1.5] overflow-x-hidden">
      {/* Header */}
      <div className="text-center pb-[10px] border-b-2 border-[#0a66c2] mb-[15px]">
        <h1 className="text-[26px] text-[#0a66c2] font-bold mb-[5px]">
          {formData.firstName || formData.middleName || formData.lastName
            ? `${formData.firstName} ${formData.middleName ? formData.middleName + " " : ""}${formData.lastName}`.toUpperCase()
            : "JOHN DOE"}
        </h1>
        <div className="text-[12px]">
          <p className="mb-[5px]">
            <a
              href={`mailto:${formData.email ? formData.email : "johndoe@email.com"}`}
              className="text-[#0a66c2] no-underline hover:underline"
            >
              {formData.email ? formData.email : "johndoe@email.com"}
            </a>
            <span className="mx-[8px]">|</span>
            {formData.phoneNumber ? formData.phoneNumber : "+1 555-123-4567"}
            <span className="mx-[8px]">|</span>
            {formData.city && formData.state
              ? `${formData.city}, ${formData.state}`
              : "San Francisco, CA"}
          </p>
          <p>
            <a
              href={formData.linkedin ? formData.linkedin : "https://linkedin.com/in/johndoe"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a66c2] no-underline hover:underline"
            >
              {formData.linkedin
                ? formData.linkedin.replace(/^https?:\/\//, "")
                : "linkedin.com/in/johndoe"}
            </a>
            <span className="mx-[8px]">|</span>
            <a
              href={formData.github ? formData.github : "https://github.com/johndoe"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a66c2] no-underline hover:underline"
            >
              {formData.github
                ? formData.github.replace(/^https?:\/\//, "")
                : "github.com/johndoe"}
            </a>
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-[15px] p-[10px] bg-white">
        <div className="text-[20px] font-bold text-[#0a66c2] mb-[5px] border-b border-[#ddd]">
          {formData.jobTitle ? formData.jobTitle.toUpperCase() : "BLOCKCHAIN DEVELOPER"}
        </div>
        <p className="text-[12px]">
          {summary
            ? summary
            : "Computer Science student specializing in blockchain technology with hands-on experience in Ethereum smart contracts and decentralized applications. Skilled in Solidity development, cryptographic security, and building transparent distributed systems."}
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mb-[15px] p-[10px] bg-white">
        <div className="text-[20px] font-bold text-[#0a66c2] mb-[5px] border-b border-[#ddd]">
         SKILLS
        </div>
        <ul className="pl-[20px] text-[12px] space-y-[3px] list-disc">
          <li>
            <strong>Soft:</strong>{" "}
            {skills.soft && skills.soft.length > 0
              ? skills.soft.join(", ")
              : "Communication, Team Work"}
          </li>
         
          <li>
            <strong>Languages:</strong>{" "}
            {skills.technical && skills.technical.length > 0
              ? skills.technical.join(", ")
              : "JavaScript, Python, Rust, Go"}
          </li>
          <li>
            <strong>Tools:</strong>{" "}
            {skills.tools && skills.tools.length > 0
              ? skills.tools.join(", ")
              : "Truffle, Ganache, Metamask, IPFS"}
          </li>
        </ul>
      </div>


       {/* Projects */}
      <div className="mb-[15px] p-[10px] bg-white">
        <div className="text-[20px] font-bold text-[#0a66c2] mb-[5px] border-b border-[#ddd]">
          PROJECTS
        </div>
        {projects && projects.length > 0 && projects[0].name ? (
          projects.map((project, idx) => (
            <div className="mt-[10px]" key={idx}>
              <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
                <span>
                  {project.name
                    ? project.name
                    : idx === 0
                    ? "Supply Chain Transparency dApp"
                    : "Other Project"}
                </span>
                <span>
                  {project.startDate && project.endDate
                    ? `${project.startDate} – ${project.endDate}`
                    : idx === 0
                    ? "Jan 2024 – Present"
                    : ""}
                </span>
              </p>
              <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
                {project.description
                  ? project.description.split("\n").map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))
                  : idx === 0
                  ? (
                    <>
                      <li>
                        Built on Hyperledger Fabric with Node.js backend for supply chain
                        verification
                      </li>
                      <li>
                        Implemented cryptographic product authentication reducing
                        counterfeit incidents
                      </li>
                      <li>
                        Designed immutable audit trail for complete supply chain
                        visibility
                      </li>
                    </>
                  )
                  : null}
              </ul>
            </div>
          ))
        ) : (
          <div className="mt-[10px]">
            <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
              <span>Supply Chain Transparency dApp</span>
              <span>Jan 2024 – Present</span>
            </p>
            <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
              <li>
                Built on Hyperledger Fabric with Node.js backend for supply chain
                verification
              </li>
              <li>
                Implemented cryptographic product authentication reducing
                counterfeit incidents
              </li>
              <li>
                Designed immutable audit trail for complete supply chain
                visibility
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Education */}
      <div className="mb-[15px] p-[10px] bg-white">
        <div className="text-[20px] font-bold text-[#0a66c2] mb-[5px] border-b border-[#ddd]">
          EDUCATION
        </div>
        {education && education.length > 0 && education[0].collegeName ? (
          education.map((edu, idx) => (
            <div className="mt-[10px]" key={idx}>
              <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
                <span>
                  {edu.collegeName
                    ? edu.collegeName
                    : "Stanford University"}
                </span>
                <span>
                  {edu.endDate
                    ? `Expected ${edu.endDate}`
                    : "Expected May 2025"}
                </span>
              </p>
              <p className="text-[12px] mt-[5px]">
                {edu.degree
                  ? edu.degree
                  : "B.S. Computer Science | Specialization: Blockchain Technology"}{" "}
                | GPA: {edu.cgpa ? edu.cgpa : "3.9/4.0"}
              </p>
            </div>
          ))
        ) : (
          <div className="mt-[10px]">
            <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
              <span>Stanford University</span>
              <span>Expected May 2025</span>
            </p>
            <p className="text-[12px] mt-[5px]">
              B.S. Computer Science | Specialization: Blockchain Technology | GPA:
              3.9/4.0
            </p>
          </div>
        )}
      </div>


      {/* Experience */}
      <div className="mb-[15px] p-[10px] bg-white">
        <div className="text-[20px] font-bold text-[#0a66c2] mb-[5px] border-b border-[#ddd]">
          EXPERIENCE
        </div>
        {workExperience && workExperience.length > 0 && workExperience[0].companyName ? (
          workExperience.map((work, idx) => (
            <div className="mt-[10px]" key={idx}>
              <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
                <span>
                  {work.jobTitle
                    ? work.jobTitle
                    : "Blockchain Developer Intern"}{" "}
                  | {work.companyName ? work.companyName : "XYZ Tech"}
                </span>
                <span>
                  {work.startDate && work.endDate
                    ? `${work.startDate} – ${work.endDate}`
                    : "May 2023 – Aug 2023"}
                </span>
              </p>
              <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
                {work.responsibilities
                  ? work.responsibilities.split("\n").map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))
                  : (
                    <>
                      <li>
                        Developed and deployed 5+ Solidity smart contracts on Ethereum
                        testnet with 100% test coverage
                      </li>
                      <li>
                        Optimized gas costs by 25% through efficient contract design
                        patterns
                      </li>
                      <li>
                        Identified 3 critical security vulnerabilities during smart
                        contract audits
                      </li>
                    </>
                  )}
              </ul>
            </div>
          ))
        ) : (
          <div className="mt-[10px]">
            <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
              <span>Blockchain Developer Intern | XYZ Tech</span>
              <span>May 2023 – Aug 2023</span>
            </p>
            <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
              <li>
                Developed and deployed 5+ Solidity smart contracts on Ethereum
                testnet with 100% test coverage
              </li>
              <li>
                Optimized gas costs by 25% through efficient contract design
                patterns
              </li>
              <li>
                Identified 3 critical security vulnerabilities during smart
                contract audits
              </li>
            </ul>
          </div>
        )}
      </div>

     
      {/* Certifications */}
      <div className="mb-[15px] p-[10px] bg-white">
        <div className="text-[20px] font-bold text-[#0a66c2] mb-[5px] border-b border-[#ddd]">
          CERTIFICATIONS
        </div>
        <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
          {certificates && certificates.length > 0 && certificates[0].name ? (
            certificates.map((cert, idx) => (
              <li key={idx}>
                <strong>{cert.name}</strong>
                {cert.organization ? ` - ${cert.organization}` : ""}
                {cert.issueDate ? ` (${cert.issueDate})` : ""}
              </li>
            ))
          ) : (
            <>
              <li>
                <strong>Certified Blockchain Developer</strong> - Blockchain Council
                (2023)
              </li>
              <li>
                <strong>Ethereum Smart Contract Security</strong> - ConsenSys
                Academy (2022)
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Technical Interests */}
      <div className="mb-[15px] p-[10px] bg-white">
        <div className="text-[20px] font-bold text-[#0a66c2] mb-[5px] border-b border-[#ddd]">
           INTERESTS
        </div>
        <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
          {additional.hobbies
            ? additional.hobbies
                .map((hobby, idx) => <li key={idx}>{hobby.trim()}</li>)
            : (
              <>
                <li>cryptographic research</li>
                <li>Contributing to open-source blockchain projects</li>
                <li>Writing technical articles on decentralized systems</li>
              </>
            )}
        </ul>
      </div>
    </div>
  );
};

export default Resume11;
