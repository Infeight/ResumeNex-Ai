import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const RESUME_ExpAndFresher_12 = () => {
  const {
    formData,
    education,
    projects,
    workExperience,
    certificates,
    skills,
    summary,
    additional,
  } = useResume();

  // Helper for name and address
  const fullName =
    formData.firstName || formData.middleName || formData.lastName
      ? `${formData.firstName ? formData.firstName : ""}${formData.middleName ? " " + formData.middleName : ""}${formData.lastName ? " " + formData.lastName : ""}`.trim()
      : "Your Name";

  const address =
    formData.city || formData.state || formData.pincode
      ? `${formData.city ? formData.city : ""}${formData.city && formData.state ? ", " : ""}${formData.state ? formData.state : ""}${formData.state && formData.pincode ? ", " : ""}${formData.pincode ? formData.pincode : ""}`
      : "City, State, Pincode";

  // Education
  const edu = education && education.length > 0 ? education[0] : {};
  // Project
  const proj = projects && projects.length > 0 ? projects[0] : {};
  // Work Experience
  const exp = workExperience && workExperience.length > 0 ? workExperience[0] : {};
  // Certificate
  const cert = certificates && certificates.length > 0 ? certificates[0] : {};

  return (
    <div className="font-['Arial',sans-serif] text-gray-800 w-[794px] min-h-[1122px] mx-auto p-[20mm] box-border flex">
      {/* Sidebar */}
      <div className="w-[30%] bg-[#f3e5f5] p-5 text-[#333] relative">
        <div className="absolute top-5 bottom-5 right-0 w-1 bg-gradient-to-b from-[#ab47bc] to-[#7b1fa2]"></div>
        <h1 className="text-[26px] font-bold mb-4 text-[#7b1fa2] text-center leading-tight break-words">
          {fullName}
        </h1>
        <div className="text-[12px] text-center font-normal">
          <p className="my-2">
            {address}
          </p>
          <p className="my-2">
            {formData.phoneNumber ? formData.phoneNumber : "Your Phone Number"}
          </p>
          <p className="my-2">
            <a
              href={formData.email ? `mailto:${formData.email}` : "#"}
              className="text-[#333] no-underline hover:underline"
            >
              {formData.email ? formData.email : "your.email@example.com"}
            </a>
          </p>
          <p className="my-2">
            <a
              href={formData.linkedin ? formData.linkedin : "#"}
              className="text-[#333] no-underline hover:underline"
            >
              {formData.linkedin ? formData.linkedin : "linkedin.com/in/yourprofile"}
            </a>
          </p>
          <p className="my-2">
            <a
              href={formData.github ? formData.github : "#"}
              className="text-[#333] no-underline hover:underline"
            >
              {formData.github ? formData.github : "github.com/yourprofile"}
            </a>
          </p>
          <p className="my-2">
            <a
              href={formData.otherLink ? formData.otherLink : "#"}
              className="text-[#333] no-underline hover:underline"
            >
              {formData.otherLink ? formData.otherLink : "yourwebsite.com"}
            </a>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-[70%] p-4 bg-white">
        {/* Objective */}
        <h2 className="text-[20px] font-bold uppercase mb-2 mt-0 text-[#7b1fa2] border-l-[3px] border-[#7b1fa2] pl-2">
          Objective
        </h2>
        <p className="text-[12px] text-justify">
          {summary
            ? summary
            : "Motivated Mechanical Engineering graduate with expertise in product design, manufacturing processes, and 3D modeling, seeking an entry-level role to apply my skills in AutoCAD and SolidWorks. Eager to contribute to prototyping, automation, and team collaboration in a dynamic engineering environment."}
        </p>

        {/* Education */}
        <h2 className="text-[20px] font-bold uppercase mb-2 mt-5 text-[#7b1fa2] border-l-[3px] border-[#7b1fa2] pl-2">
          Education
        </h2>
        <div className="mb-3">
          <div className="flex justify-between text-[14px] flex-wrap items-start">
            <span className="font-bold max-w-[70%] flex-1">
              {edu.degree || edu.stream
                ? `${edu.degree ? edu.degree : "Degree"}${edu.stream ? " (" + edu.stream + ")" : ""}`
                : "B.E. in Mechanical Engineering (Robotics & Automation)"}
            </span>
            <span className="italic font-bold min-w-[100px] text-right flex-shrink-0">
              {(edu.startDate || edu.endDate)
                ? `${edu.startDate ? edu.startDate : "Start"} - ${edu.endDate ? edu.endDate : "End"}`
                : "Jun 2020 - May 2024"}
            </span>
          </div>
          <div className="text-[14px] flex justify-between">
            <span className="font-normal">
              {edu.collegeName
                ? edu.collegeName
                : "National Institute of Technology, Mumbai, India"}
            </span>
            <span className="text-[12px] italic font-normal">
              CGPA: {edu.cgpa ? edu.cgpa : "8.3/10"}
            </span>
          </div>
          <p className="text-[12px]">
            <span className="font-bold">Relevant Coursework:</span>{" "}
            {edu.relevantCoursework
              ? edu.relevantCoursework
              : "Robotics, CAD/CAM, Manufacturing Processes, Finite Element Analysis"}
          </p>
        </div>

        {/* Internships */}
        <h2 className="text-[20px] font-bold uppercase mb-2 mt-5 text-[#7b1fa2] border-l-[3px] border-[#7b1fa2] pl-2">
          Internships
        </h2>
        <div className="mb-3">
          <div className="flex justify-between text-[14px] font-bold">
            <span>
              {exp.jobTitle ? exp.jobTitle : "Design Intern"}
            </span>
            <span className="italic">
              {(exp.startDate || exp.endDate)
                ? `${exp.startDate ? exp.startDate : "Start"} - ${exp.endDate ? exp.endDate : "End"}`
                : "Jun 2023 - Aug 2023"}
            </span>
          </div>
          <div className="text-[14px] font-bold text-[#555]">
            {exp.companyName
              ? exp.companyName
              : "AutoTech Industries, Mumbai, India"}
          </div>
          <ul className="list-disc pl-5 text-[12px] mt-1 font-normal">
            {exp.responsibilities
              ? exp.responsibilities
              .split("\n")
              .map((item, idx) => (
                <li key={idx}>{item}</li>
              ))
              : (
                <>
                  <li>
                    <i>Designed</i> 3D models of automotive parts using SolidWorks,
                    enhancing product design accuracy.
                  </li>
                  <li>
                    <i>Performed</i> stress analysis on components, improving
                    durability by <b>10%</b> through finite element analysis.
                  </li>
                  <li>
                    <i>Prepared</i> technical drawings and documentation for
                    manufacturing processes, ensuring production readiness.
                  </li>
                </>
              )}
          </ul>
        </div>

        {/* Projects */}
        <h2 className="text-[20px] font-bold uppercase mb-2 mt-5 text-[#7b1fa2] border-l-[3px] border-[#7b1fa2] pl-2">
          Projects
        </h2>
        <div className="mb-3">
          <div className="flex justify-between text-[14px] font-bold">
            <span>
              {proj.name ? proj.name : "Automated Conveyor System"}
            </span>
            <span className="italic">
              {(proj.startDate || proj.endDate)
                ? `${proj.startDate ? proj.startDate : "Start"} - ${proj.endDate ? proj.endDate : "End"}`
                : "Jan 2024 - Apr 2024"}
            </span>
          </div>
          <div className="text-[14px] font-bold text-[#555]">
            {proj.organization
              ? proj.organization
              : "Final Year Project, NIT Mumbai, Mumbai, India"}
          </div>
          <p className="text-[12px]">
            <a
              href={proj.link ? proj.link : "#"}
              className="text-[#333] no-underline hover:underline"
            >
              {proj.link ? proj.link : "GitHub"}
            </a>
          </p>
          <p className="text-[12px] font-normal">
            Technologies: {proj.technologies ? proj.technologies : "Arduino, Sensors, SolidWorks"}
          </p>
          <p className="text-[12px] font-normal">
            Summary: {proj.summary ? proj.summary : "Developed a prototype for an automated conveyor system with real-time control."}
          </p>
          <ul className="list-disc pl-5 text-[12px] mt-1 font-normal">
            {proj.description
              ? proj.description
                .split("\n")
                .map((desc, idx) => <li key={idx}>{desc}</li>)
              : (
                <>
                  <li>
                    <i>Developed</i> a prototype using Arduino, sensors, and automation techniques.
                  </li>
                  <li>
                    <i>Reduced</i> manual intervention by <b>30%</b>, optimizing manufacturing efficiency.
                  </li>
                  <li>
                    <i>Presented</i> the project at a tech expo, winning <b>2nd place</b> for innovation.
                  </li>
                </>
              )}
          </ul>
        </div>

        {/* Skills */}
        <h2 className="text-[20px] font-bold uppercase mb-2 mt-5 text-[#7b1fa2] border-l-[3px] border-[#7b1fa2] pl-2">
          Skills
        </h2>
        <div className="text-[12px] mb-4 font-normal">
          <div className="flex">
            <div className="w-[65%]">
              <p>
                <span className="font-bold">Technical Skills:</span>{" "}
                {skills.technical && skills.technical.length > 0
                  ? skills.technical.join(", ")
                  : "Product Design, 3D Modeling, Stress Analysis, Prototyping, Automation"}
              </p>
              <p>
                <span className="font-bold">Technical Proficiencies:</span>{" "}
                {skills.related
                  ? skills.related
                  : "AutoCAD, SolidWorks, MATLAB, Arduino, MS Office"}
              </p>
              <p>
                <span className="font-bold">Soft Skills:</span>{" "}
                {skills.soft && skills.soft.length > 0
                  ? skills.soft.join(", ")
                  : "Problem-Solving, Team Collaboration, Communication, Time Management"}
              </p>
            </div>
            <div className="w-[30%] text-right">
              <p>
                Proficiency:{" "}
                {skills.proficiency ? skills.proficiency : "Intermediate"}
              </p>
            </div>
          </div>
        </div>

        {/* Achievements & Certifications */}
        <h2 className="text-[20px] font-bold uppercase mb-2 mt-5 text-[#7b1fa2] border-l-[3px] border-[#7b1fa2] pl-2">
          Achievements & Certifications
        </h2>
        <div className="text-[12px] font-normal">
          <div className="flex">
            <div className="w-[65%]">
              <ul className="list-disc pl-5">
                {certificates && certificates.length > 0 && certificates[0].name
                  ? certificates.map((cert, idx) => (
                      <li key={idx}>
                        {cert.name ? cert.name : "Certificate Name"} - {cert.organization ? cert.organization : "Organization"}
                        <br />
                        <a
                          href={cert.link ? cert.link : "#"}
                          className="text-[#333] no-underline hover:underline"
                        >
                          {cert.link ? "Verify" : "Certificate Link"}
                        </a>
                      </li>
                    ))
                  : (
                    <>
                      <li>
                        Certified in AutoCAD - Udemy
                        <br />
                        <a
                          href="https://udemy.com/verify/autocad"
                          className="text-[#333] no-underline hover:underline"
                        >
                          Verify
                        </a>
                      </li>
                      <li>
                        Won <b>2nd place</b> in Tech Expo 2024 for Automated Conveyor System project.
                      </li>
                      <li>
                        Finite Element Analysis - Coursera
                        <br />
                        <a
                          href="https://coursera.org/verify/fea"
                          className="text-[#333] no-underline hover:underline"
                        >
                          Verify
                        </a>
                      </li>
                    </>
                  )}
              </ul>
            </div>
            <div className="w-[30%] text-right italic">
              {certificates && certificates.length > 0 && certificates[0].issueDate
                ? certificates.map((cert, idx) => (
                    <p key={idx}>
                      Issued: {cert.issueDate ? cert.issueDate : "Date"}
                      <br />
                      {cert.expiryDate ? `Expiry: ${cert.expiryDate}` : "No Expiry"}
                    </p>
                  ))
                : (
                  <>
                    <p>
                      Issued: Jul 2023
                      <br />
                      No Expiry
                    </p>
                    <p>Apr 2024</p>
                    <p>
                      Issued: Jun 2023
                      <br />
                      No Expiry
                    </p>
                  </>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_12;
