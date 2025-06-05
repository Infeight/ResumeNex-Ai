import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const Resume9 = () => {
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
    <div className="font-sans w-[210mm] max-w-[880px] mx-auto my-[30px] p-[5mm] bg-[#f4f4f4] text-[#333]">
      {/* Header */}
      <div className="bg-[#0056b3] text-white p-[20px] rounded-t-[8px] mb-[20px]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="m-0 text-[24px] font-bold uppercase tracking-tight">
              {formData.firstName || formData.middleName || formData.lastName
                ? `${formData.firstName} ${formData.middleName ? formData.middleName + " " : ""}${formData.lastName}`.toUpperCase()
                : "JOHN DOE"}
            </h1>
            <p className="text-[16px] mt-[5px] mb-0">
              {formData.jobTitle ? formData.jobTitle : "Business Analyst"}
            </p>
          </div>
          <div className="text-right text-[14px]">
            <p className="m-[3px_0]">{formData.email ? formData.email : "john.doe@email.com"}</p>
            <p className="m-[3px_0]">{formData.phoneNumber ? formData.phoneNumber : "312-555-1234"}</p>
            <p className="m-[3px_0]">
              {formData.city && formData.state
                ? `${formData.city}, ${formData.state}`
                : "Chicago, IL"}
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-[20px] p-[15px] bg-white rounded-[6px]">
        <h2 className="text-[16px] font-bold text-[#0056b3] border-b border-[#0056b3] pb-[3px] mb-[10px] uppercase">
          Professional Summary
        </h2>
        <p className="text-[14px]">
          {summary
            ? summary
            : "Business Analytics student with internship experience in data analysis, financial modeling, and market research. Proven ability to translate complex data into actionable insights that drive business decisions."}
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mb-[20px] p-[15px] bg-white rounded-[6px]">
        <h2 className="text-[16px] font-bold text-[#0056b3] border-b border-[#0056b3] pb-[3px] mb-[10px] uppercase">
           Skills
        </h2>
        <div className="grid grid-cols-2 gap-[10px] text-[14px]">
          <div>
            <h3 className="font-semibold text-[#0056b3]">Technical Skills</h3>
            <ul className="list-disc pl-[18px]">
              {skills.technical && skills.technical.length > 0 ? (
                skills.technical.map((item, idx) => <li key={idx}>{item}</li>)
              ) : (
                <>
                  <li>SQL, Python (Pandas, NumPy)</li>
                  <li>Excel (VBA, Pivot Tables)</li>
                </>
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#0056b3]">
             Soft Skills
            </h3>
            <ul className="list-disc pl-[18px]">
              {skills.soft && skills.soft.length > 0 ? (
                skills.soft.map((item, idx) => <li key={idx}>{item}</li>)
              ) : (
                <>
                  <li>Communication</li>
                  <li>Task Management</li>
                </>
              )}
            </ul>
          </div>
         
        </div>
      </div>

      {/* Experience */}
      <div className="mb-[20px] p-[15px] bg-white rounded-[6px]">
        <h2 className="text-[16px] font-bold text-[#0056b3] border-b border-[#0056b3] pb-[3px] mb-[10px] uppercase">
          Professional Experience
        </h2>
        {workExperience && workExperience.length > 0 && workExperience[0].companyName ? (
          workExperience.map((work, idx) => (
            <div className="mb-[15px]" key={idx}>
              <div className="flex justify-between items-baseline mb-[5px]">
                <h3 className="text-[15px] font-bold">
                  {work.jobTitle ? work.jobTitle : idx === 0 ? "Business Analyst Intern" : "Data Analyst Intern"}
                </h3>
                <span className="text-[14px] font-semibold">
                  {work.startDate && work.endDate
                    ? `${work.startDate} - ${work.endDate}`
                    : idx === 0
                    ? "Jan 2024 - Present"
                    : "May 2023 - Dec 2023"}
                </span>
              </div>
              <p className="text-[14px] text-[#0056b3] mb-[5px]">
                {work.companyName ? work.companyName : idx === 0 ? "ABC Corp" : "XYZ Consulting"},{" "}
                {work.location ? work.location : idx === 0 ? "New York, NY" : "Chicago, IL"}
              </p>
              <ul className="list-disc pl-[18px] text-[14px] space-y-[3px]">
                {work.responsibilities
                  ? work.responsibilities.split("\n").map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))
                  : idx === 0
                  ? (
                    <>
                      <li>
                        Improved decision-making efficiency by 30% through Tableau dashboards analyzing 10K+ data points
                      </li>
                      <li>
                        Identified $2M revenue opportunity through comprehensive market analysis
                      </li>
                      <li>
                        Automated 5 weekly reports using Python, saving 15 hours/week
                      </li>
                    </>
                  )
                  : (
                    <>
                      <li>
                        Reduced financial reporting time by 40% through VBA automation
                      </li>
                      <li>
                        Presented data-driven insights to C-suite executives, influencing Q3 strategy
                      </li>
                    </>
                  )}
              </ul>
            </div>
          ))
        ) : (
          <>
            <div className="mb-[15px]">
              <div className="flex justify-between items-baseline mb-[5px]">
                <h3 className="text-[15px] font-bold">Business Analyst Intern</h3>
                <span className="text-[14px] font-semibold">
                  Jan 2024 - Present
                </span>
              </div>
              <p className="text-[14px] text-[#0056b3] mb-[5px]">
                ABC Corp, New York, NY
              </p>
              <ul className="list-disc pl-[18px] text-[14px] space-y-[3px]">
                <li>
                  Improved decision-making efficiency by 30% through Tableau
                  dashboards analyzing 10K+ data points
                </li>
                <li>
                  Identified $2M revenue opportunity through comprehensive market
                  analysis
                </li>
                <li>
                  Automated 5 weekly reports using Python, saving 15 hours/week
                </li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-baseline mb-[5px]">
                <h3 className="text-[15px] font-bold">Data Analyst Intern</h3>
                <span className="text-[14px] font-semibold">
                  May 2023 - Dec 2023
                </span>
              </div>
              <p className="text-[14px] text-[#0056b3] mb-[5px]">
                XYZ Consulting, Chicago, IL
              </p>
              <ul className="list-disc pl-[18px] text-[14px] space-y-[3px]">
                <li>
                  Reduced financial reporting time by 40% through VBA automation
                </li>
                <li>
                  Presented data-driven insights to C-suite executives, influencing
                  Q3 strategy
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      {/* Education */}
      <div className="mb-[20px] p-[15px] bg-white rounded-[6px]">
        <h2 className="text-[16px] font-bold text-[#0056b3] border-b border-[#0056b3] pb-[3px] mb-[10px] uppercase">
          Education
        </h2>
        {education && education.length > 0 && education[0].collegeName ? (
          education.map((edu, idx) => (
            <div className="flex justify-between items-baseline" key={idx}>
              <div>
                <h3 className="text-[15px] font-bold">
                  {edu.degree
                    ? edu.degree
                    : "B.S. Business Analytics"}
                </h3>
                <p className="text-[14px] text-[#0056b3]">
                  {edu.collegeName
                    ? edu.collegeName
                    : "New York University"}
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
                <h3 className="text-[15px] font-bold">B.S. Business Analytics</h3>
                <p className="text-[14px] text-[#0056b3]">New York University</p>
              </div>
              <span className="text-[14px] font-semibold">Expected May 2025</span>
            </div>
            <p className="text-[14px]">GPA: 3.8/4.0 | Dean's List 3 Semesters</p>
          </>
        )}
        {education && education.length > 0 && education[0].cgpa && (
          <p className="text-[14px]">
            GPA: {education[0].cgpa}
            {education[0].honors ? ` | ${education[0].honors}` : ""}
          </p>
        )}
      </div>

      {/* Certifications */}
      <div className="mb-[20px] p-[15px] bg-white rounded-[6px]">
        <h2 className="text-[16px] font-bold text-[#0056b3] border-b border-[#0056b3] pb-[3px] mb-[10px] uppercase">
          Certifications
        </h2>
        {certificates && certificates.length > 0 && certificates[0].name ? (
          certificates.map((cert, idx) => (
            <div className="flex justify-between mb-[5px]" key={idx}>
              <p className="text-[14px] font-semibold">
                {cert.name
                  ? cert.name
                  : idx === 0
                  ? "Google Data Analytics"
                  : "CBAP Certification"}
              </p>
              <span className="text-[14px]">
                {cert.organization
                  ? cert.organization
                  : idx === 0
                  ? "Google"
                  : "IIBA"}
                {cert.issueDate
                  ? `, ${cert.issueDate}`
                  : idx === 0
                  ? ", 2023"
                  : ", 2024"}
              </span>
            </div>
          ))
        ) : (
          <>
            <div className="flex justify-between mb-[5px]">
              <p className="text-[14px] font-semibold">Google Data Analytics</p>
              <span className="text-[14px]">Google, 2023</span>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] font-semibold">CBAP Certification</p>
              <span className="text-[14px]">IIBA, 2024</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Resume9;
