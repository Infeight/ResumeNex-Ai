import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const Resume8 = () => {
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
    <div className="font-sans w-[210mm] max-w-[880px] mx-auto p-[5mm] text-[#333]">
      <div className="bg-white p-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] rounded-[4px]">
        {/* Header */}
        <h1 className="text-[26px] font-bold text-[#004085] text-center mb-[5px] uppercase tracking-tight">
          {formData.firstName || formData.middleName || formData.lastName
            ? `${formData.firstName} ${formData.middleName ? formData.middleName + " " : ""}${formData.lastName}`.toUpperCase()
            : "JANE DOE"}
        </h1>

        {/* Contact */}
        <div className="flex flex-wrap justify-center gap-x-[15px] text-[14px] text-[#004085] mb-[15px] text-center">
          <span>{formData.email ? formData.email : "jane.doe@email.com"}</span>
          <span>|</span>
          <span>{formData.phoneNumber ? formData.phoneNumber : "123-456-7890"}</span>
          <span>|</span>
          <span>
            {formData.city && formData.state
              ? `${formData.city}, ${formData.state}`
              : "New York, NY"}
          </span>
          <span>|</span>
          <span>
            {formData.linkedin
              ? formData.linkedin.replace(/^https?:\/\//, "")
              : "linkedin.com/in/janedoe"}
          </span>
        </div>

        {/* Summary */}
        <div className="mb-[20px]">
          <h2 className="text-[16px] font-bold text-[#004085] border-b-2 border-[#004085] pb-[3px] mb-[10px] uppercase">
            Professional Summary
          </h2>
          <p className="text-[14px]">
            {summary
              ? summary
              : "Product Management student with experience in agile methodologies, market research, and data-driven product development. Proven ability to translate user needs into product requirements and measurable business outcomes."}
          </p>
        </div>

        {/* Skills */}
        <div className="mb-[20px]">
          <h2 className="text-[16px] font-bold text-[#004085] border-b-2 border-[#004085] pb-[3px] mb-[10px] uppercase">
            Core Competencies
          </h2>
          <div className="grid grid-cols-2 gap-[10px] text-[14px]">
            <div>
              <h3 className="font-semibold text-[#004085]">
               Soft Skills
              </h3>
              <ul className="list-disc pl-[18px]">
                {skills.soft && skills.soft.length > 0 ? (
                  skills.soft.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))
                ) : (
                  <>
                    <li>Team Management</li>
                    <li>Product Roadmapping</li>
                    <li>Leadership</li>
                  </>
                )}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#004085]">Technical Skills</h3>
              <ul className="list-disc pl-[18px]">
                {skills.technical && skills.technical.length > 0 ? (
                  skills.technical.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))
                ) : (
                  <>
                    <li>Figma, Adobe XD</li>
                    <li>SQL, Google Analytics</li>
                    <li>JIRA, Trello</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-[20px]">
          <h2 className="text-[16px] font-bold text-[#004085] border-b-2 border-[#004085] pb-[3px] mb-[10px] uppercase">
            Professional Experience
          </h2>
          {workExperience && workExperience.length > 0 && workExperience[0].companyName ? (
            workExperience.map((work, idx) => (
              <div className="mb-[15px]" key={idx}>
                <div className="flex justify-between items-baseline mb-[5px]">
                  <h3 className="text-[15px] font-bold">
                    {work.jobTitle ? work.jobTitle : "Product Management Intern"}
                  </h3>
                  <span className="text-[14px] font-semibold bg-[#004085] text-white px-[8px] py-[2px] rounded-[3px]">
                    {work.startDate && work.endDate
                      ? `${work.startDate} - ${work.endDate}`
                      : "Jan 2024 - Present"}
                  </span>
                </div>
                <p className="text-[14px] text-[#004085] mb-[5px]">
                  {work.companyName ? work.companyName : "XYZ Corp"},{" "}
                  {formData.city ? formData.city : "New York, NY"}
                </p>
                <ul className="list-disc pl-[18px] text-[14px] space-y-[3px]">
                  {work.responsibilities
                    ? work.responsibilities.split("\n").map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))
                    : (
                      <>
                        <li>
                          Conducted market research that identified 3 new product
                          opportunities with $500K+ potential
                        </li>
                        <li>
                          Reduced MVP development time by 20% through improved requirement
                          documentation
                        </li>
                        <li>
                          Analyzed user behavior data to increase feature adoption by 35%
                        </li>
                      </>
                    )}
                </ul>
              </div>
            ))
          ) : (
            <div className="mb-[15px]">
              <div className="flex justify-between items-baseline mb-[5px]">
                <h3 className="text-[15px] font-bold">
                  Product Management Intern
                </h3>
                <span className="text-[14px] font-semibold bg-[#004085] text-white px-[8px] py-[2px] rounded-[3px]">
                  Jan 2024 - Present
                </span>
              </div>
              <p className="text-[14px] text-[#004085] mb-[5px]">
                XYZ Corp, New York, NY
              </p>
              <ul className="list-disc pl-[18px] text-[14px] space-y-[3px]">
                <li>
                  Conducted market research that identified 3 new product
                  opportunities with $500K+ potential
                </li>
                <li>
                  Reduced MVP development time by 20% through improved requirement
                  documentation
                </li>
                <li>
                  Analyzed user behavior data to increase feature adoption by 35%
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Education */}
        <div className="mb-[20px]">
          <h2 className="text-[16px] font-bold text-[#004085] border-b-2 border-[#004085] pb-[3px] mb-[10px] uppercase">
            Education
          </h2>
          {education && education.length > 0 && education[0].collegeName ? (
            education.map((edu, idx) => (
              <div className="flex justify-between items-baseline" key={idx}>
                <div>
                  <h3 className="text-[15px] font-bold">
                    {edu.degree
                      ? edu.degree
                      : "B.S. Business & Product Management"}
                  </h3>
                  <p className="text-[14px] text-[#004085]">
                    {edu.collegeName
                      ? edu.collegeName
                      : "New York University, NY"}
                  </p>
                </div>
                <span className="text-[14px] font-semibold">
                  {edu.endDate
                    ? `Expected ${edu.endDate}`
                    : "Expected May 2025"}
                </span>
              </div>
            ))
          ) : (
            <>
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-[15px] font-bold">
                    B.S. Business & Product Management
                  </h3>
                  <p className="text-[14px] text-[#004085]">
                    New York University, NY
                  </p>
                </div>
                <span className="text-[14px] font-semibold">
                  Expected May 2025
                </span>
              </div>
              <p className="text-[14px] mt-[3px]">
                GPA: 3.8/4.0 | Dean's List 4 Semesters
              </p>
            </>
          )}
          {education && education.length > 0 && education[0].cgpa && (
            <p className="text-[14px] mt-[3px]">
              GPA: {education[0].cgpa}
              {education[0].honors ? ` | ${education[0].honors}` : ""}
            </p>
          )}
        </div>

        {/* Certifications */}
        <div className="mb-[20px]">
          <h2 className="text-[16px] font-bold text-[#004085] border-b-2 border-[#004085] pb-[3px] mb-[10px] uppercase">
            Certifications
          </h2>
          {certificates && certificates.length > 0 && certificates[0].name ? (
            certificates.map((cert, idx) => (
              <div className="flex justify-between mb-[5px]" key={idx}>
                <p className="text-[14px] font-semibold">
                  {cert.name
                    ? cert.name
                    : idx === 0
                    ? "Certified Scrum Master (CSM)"
                    : "Google Data Analytics"}
                </p>
                <span className="text-[14px]">
                  {cert.organization
                    ? cert.organization
                    : idx === 0
                    ? "Scrum Alliance"
                    : "Google"}
                  {cert.issueDate
                    ? `, ${cert.issueDate}`
                    : idx === 0
                    ? ", 2023"
                    : ", 2022"}
                </span>
              </div>
            ))
          ) : (
            <>
              <div className="flex justify-between mb-[5px]">
                <p className="text-[14px] font-semibold">
                  Certified Scrum Master (CSM)
                </p>
                <span className="text-[14px]">Scrum Alliance, 2023</span>
              </div>
              <div className="flex justify-between">
                <p className="text-[14px] font-semibold">
                  Google Data Analytics
                </p>
                <span className="text-[14px]">Google, 2022</span>
              </div>
            </>
          )}
        </div>

        {/* Achievements */}
        <div className="mb-[20px]">
          <h2 className="text-[16px] font-bold text-[#004085] border-b-2 border-[#004085] pb-[3px] mb-[10px] uppercase">
            Key Achievements
          </h2>
          <ul className="list-disc pl-[18px] text-[14px] space-y-[3px]">
            {additional.achievements && additional.achievements.length > 0 ? (
              additional.achievements.map((ach, idx) => (
                <li key={idx}>
                  {ach.name}
                  {ach.organization ? `: ${ach.organization}` : ""}
                  {ach.description ? ` (${ach.description})` : ""}
                </li>
              ))
            ) : (
              <>
                <li>
                  Winner: XYZ Hackathon 2023 (Team of 4 built product prototype in
                  48 hours)
                </li>
                <li>
                  Finalist: Product Strategy Case Competition (Top 5 out of 120
                  teams)
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume8;
