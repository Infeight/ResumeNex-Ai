import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";

const RESUME_ExpAndFresher_10 = () => {
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

  // Helper for array fallback
  const hasArrayData = (arr, key) =>
    Array.isArray(arr) && arr.length > 0 && arr[0][key];

  return (
    <div className="font-['Arial',sans-serif] text-gray-800 w-[794px] min-h-[1122px] mx-auto p-[20mm] box-border">
      {/* Personal Info */}
      <div className="text-center mb-2">
        <h1 className="text-[26px] font-bold mb-0">
          { formData.firstName || formData.middleName || formData.lastName
      ? `${formData.firstName ? formData.firstName : ""}${formData.middleName ? " " + formData.middleName : ""}${formData.lastName ? " " + formData.lastName : ""}`.trim()
      : "Adelide Reeves"}
        </h1>
        <p className="text-[12px] my-0.5">
          {(formData.city || "New York")}, {(formData.state || "NY")},{" "}
          {(formData.pincode || "10001")} | {formData.phoneNumber || "012 000 0000"} |{" "}
          <a
            href={
              formData.email
                ? `mailto:${formData.email}`
                : "mailto:adelaide.reeves@email.com"
            }
            className="text-gray-800 no-underline hover:underline"
          >
            {formData.email || "adelaide.reeves@email.com"}
          </a>
        </p>
        <p className="text-[12px] my-0.5">
          <a
            href={formData.linkedin || "https://linkedin.com/in/adelaidereeves"}
            className="text-gray-800 no-underline hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formData.linkedin || "linkedin.com/in/adelaidereeves"}
          </a>{" "}
          |{" "}
          <a
            href={formData.github || "https://github.com/adelaidereeves"}
            className="text-gray-800 no-underline hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formData.github || "github.com/adelaidereeves"}
          </a>{" "}
          |{" "}
          <a
            href={formData.otherLink || "https://adelaidereeves.dev"}
            className="text-gray-800 no-underline hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formData.otherLink || "adelaidereeves.dev"}
          </a>

{formData.figma  && (
        <p>
     Figma:<a href={formData.figma || '#'} className="underline text-blue-700" target="_blank" rel="noopener noreferrer">{formData.figma || 'figma.com/yourusername'}</a>
</p>
      )}

        </p>
      </div>

      {/* Profile Summary */}
      <div className="mb-5 text-center">
        <h2 className="text-[20px] font-bold uppercase border-b border-black pb-1 mb-1">
          Professional Profile
        </h2>
        <div className="text-[12px] text-justify">
          <p>
            {summary ||
              <>
                Dedicated professional with a strong educational background in
                computer science and extensive experience in software development.
                Skilled in designing and implementing innovative solutions using
                modern programming languages and frameworks. Achieved a <b>25%</b> increase in project efficiency through optimized workflows.
                Proficient in project management and data analysis, with a passion
                for leveraging technology to solve complex challenges.
              </>
            }
          </p>
        </div>
      </div>


        {/* Skills */}
      <h2 className="text-[20px] font-bold uppercase border-b border-black pb-1 mb-2 mt-5 text-center">
        Skills
      </h2>
      <div className="mb-4 text-[12px]">
        <div className="flex">
          <div className="w-[65%]">
            <p>
              <span className="font-bold">Languages:</span>{" "}
              {(additional.languages && additional.languages.length > 0)
                ? additional.languages.map((lang, idx) =>
                    lang.name
                      ? `${lang.name}${lang.proficiency ? ` (${lang.proficiency})` : ""}`
                      : null
                  ).filter(Boolean).join(", ")
                : "English (Fluent), Spanish (Intermediate)"
              }
            </p>
            <p>
              <span className="font-bold">Computer Skills:</span>{" "}
              {(skills.technical && skills.technical.length > 0)
                ? skills.technical.join(", ")
                : "Python (Advanced), JavaScript (Intermediate), SQL (Intermediate)"
              }
            </p>
            <p>
              <span className="font-bold">Other:</span>{" "}
              {(skills.soft && skills.soft.length > 0)
                ? skills.soft.join(", ")
                : "Project Management, Data Analysis, Agile Methodologies"
              }
            </p>
          </div>
          <div className="w-[30%] text-right text-[12px]">
            <p>Proficiency: {skills.related || "Advanced"}</p>
          </div>
        </div>
      </div>

       {/* Projects */}
      <h2 className="text-[20px] font-bold uppercase border-b border-black pb-1 mb-2 mt-5 text-center">
        Projects
      </h2>
      <div className="mb-4">
        {hasArrayData(projects, "name")
          ? projects.map((proj, idx) => (
              <div className="mb-3" key={idx}>
                <div className="flex justify-between text-[14px] font-bold">
                  <span>{proj.name || "Task Management App"}</span>
                  <span className="italic">
                    {(proj.startDate || "Jan 2024")} - {(proj.endDate || "Mar 2024")}
                  </span>
                </div>
                <div className="text-[14px] font-bold">
                  {proj.organization || "Personal Project, New York, NY"}
                </div>
                <p className="text-[12px]">
                  <a
                    href={proj.link || "https://github.com/adelaidereeves/task-app"}
                    className="text-gray-800 no-underline hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
                <p className="text-[12px]">
                  Technologies: {proj.technologies || "Python, Django, PostgreSQL"}
                </p>
                <p className="text-[12px]">
                  Summary:{" "}
                  {proj.summary ||
                    "Developed a task management app with user authentication and real-time updates."}
                </p>
                <ul className="list-disc pl-5 text-[12px] mt-1">
                  {proj.description
                    ? proj.description.split("\n").map((line, i) => (
                        <li key={i}>{line}</li>
                      ))
                    : [
                        <li key="1">
                          <i>Designed</i> backend APIs, handling <b>1,000+</b> daily
                          requests.
                        </li>,
                        <li key="2">
                          <i>Implemented</i> responsive UI, improving user retention by{" "}
                          <b>20%</b>.
                        </li>,
                      ]}
                </ul>
              </div>
            ))
          : (
            <div className="mb-3">
              <div className="flex justify-between text-[14px] font-bold">
                <span>Task Management App</span>
                <span className="italic">Jan 2024 - Mar 2024</span>
              </div>
              <div className="text-[14px] font-bold">
                Personal Project, New York, NY
              </div>
              <p className="text-[12px]">
                <a
                  href="https://github.com/adelaidereeves/task-app"
                  className="text-gray-800 no-underline hover:underline"
                >
                  GitHub
                </a>
              </p>
              <p className="text-[12px]">
                Technologies: Python, Django, PostgreSQL
              </p>
              <p className="text-[12px]">
                Summary: Developed a task management app with user authentication
                and real-time updates.
              </p>
              <ul className="list-disc pl-5 text-[12px] mt-1">
                <li>
                  <i>Designed</i> backend APIs, handling <b>1,000+</b> daily
                  requests.
                </li>
                <li>
                  <i>Implemented</i> responsive UI, improving user retention by{" "}
                  <b>20%</b>.
                </li>
              </ul>
            </div>
          )}
      </div>

       {/* Education */}
      <h2 className="text-[20px] font-bold uppercase border-b border-black pb-1 mb-2 mt-5 text-center">
        Education
      </h2>
      <div className="mb-4">
        {hasArrayData(education, "collegeName")
          ? education.map((edu, idx) => (
              <div className="mb-2" key={idx}>
                <div className="flex justify-between text-[14px]">
                  <span className="font-bold">
                    {edu.degree || "Master’s Degree in Computer Science"}
                  </span>
                  <span className="italic font-bold">
                    {(edu.startDate || "Aug 2022")} - {(edu.endDate || "May 2024")}
                  </span>
                </div>
                <div className="flex justify-between text-[12px]">
                  <span>{edu.collegeName || "New York University, New York, NY"}</span>
                  <span className="italic">
                    CGPA: {edu.cgpa || "8.5/10"}
                  </span>
                </div>
              </div>
            ))
          : (
            <>
              <div className="mb-2">
                <div className="flex justify-between text-[14px]">
                  <span className="font-bold">
                    Master’s Degree in Computer Science
                  </span>
                  <span className="italic font-bold">Aug 2022 - May 2024</span>
                </div>
                <div className="flex justify-between text-[12px]">
                  <span>New York University, New York, NY</span>
                  <span className="italic">CGPA: 8.5/10</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[14px]">
                  <span className="font-bold">
                    Bachelor’s Degree in Computer Science
                  </span>
                  <span className="italic font-bold">Aug 2018 - May 2022</span>
                </div>
                <div className="flex justify-between text-[12px]">
                  <span>New York University, New York, NY</span>
                  <span className="italic">CGPA: 8.0/10</span>
                </div>
              </div>
            </>
          )}
      </div>



      {/* Work Experience */}
      <h2 className="text-[20px] font-bold uppercase border-b border-black pb-1 mb-2 mt-5 text-center">
        Work Experience
      </h2>
      <div className="mb-4">
        {hasArrayData(workExperience, "companyName")
          ? workExperience.map((exp, idx) => (
              <div className="mb-3" key={idx}>
                <div className="flex justify-between text-[14px] font-bold">
                  <span>{exp.jobTitle || "Software Developer"}</span>
                  <span className="italic">
                    {(exp.startDate || "Jan 2023")} - {(exp.endDate || "Present")}
                  </span>
                </div>
                <div className="text-[14px] font-bold">
                  {exp.companyName || "TechCorp, New York, NY"}
                </div>
                <ul className="list-disc pl-5 text-[12px] mt-1">
                  {exp.responsibilities
                    ? exp.responsibilities.split("\n").map((line, i) => (
                        <li key={i}>{line}</li>
                      ))
                    : [
                        <li key="1">
                          <i>Developed</i> scalable web applications using Python and
                          Django, enhancing user experience for <b>10,000+</b> monthly users.
                        </li>,
                        <li key="2">
                          <i>Implemented</i> CI/CD pipelines with Jenkins, reducing
                          deployment time by <b>30%</b>.
                        </li>,
                        <li key="3">
                          <i>Designed</i> RESTful APIs, improving system interoperability by{" "}
                          <b>20%</b>.
                        </li>,
                      ]}
                </ul>
              </div>
            ))
          : (
            <>
              <div className="mb-3">
                <div className="flex justify-between text-[14px] font-bold">
                  <span>Software Developer</span>
                  <span className="italic">Jan 2023 - Present</span>
                </div>
                <div className="text-[14px] font-bold">TechCorp, New York, NY</div>
                <ul className="list-disc pl-5 text-[12px] mt-1">
                  <li>
                    <i>Developed</i> scalable web applications using Python and
                    Django, enhancing user experience for <b>10,000+</b> monthly users.
                  </li>
                  <li>
                    <i>Implemented</i> CI/CD pipelines with Jenkins, reducing
                    deployment time by <b>30%</b>.
                  </li>
                  <li>
                    <i>Designed</i> RESTful APIs, improving system interoperability by{" "}
                    <b>20%</b>.
                  </li>
                </ul>
              </div>
              <div className="mb-3">
                <div className="flex justify-between text-[14px] font-bold">
                  <span>Junior Developer</span>
                  <span className="italic">Jun 2021 - Dec 2022</span>
                </div>
                <div className="text-[14px] font-bold">
                  Innovate Solutions, New York, NY
                </div>
                <ul className="list-disc pl-5 text-[12px] mt-1">
                  <li>
                    <i>Developed</i> front-end components with React, increasing user
                    engagement by <b>15%</b>.
                  </li>
                  <li>
                    <i>Optimized</i> database queries, reducing load times by{" "}
                    <b>25%</b>.
                  </li>
                  <li>
                    <i>Collaborated</i> with cross-functional teams to deliver
                    projects <b>10%</b> ahead of schedule.
                  </li>
                </ul>
              </div>
            </>
          )}
      </div>

     
     
    

      {/* Certifications */}
      <h2 className="text-[20px] font-bold uppercase border-b border-black pb-1 mb-2 mt-5 text-center">
        Certifications
      </h2>
      <div className="mb-4">
        <div className="flex">
          <div className="w-[65%] text-[12px]">
            {hasArrayData(certificates, "name")
              ? certificates.map((cert, idx) => (
                  <p key={idx}>
                    <span className="font-bold">
                      {cert.name || "Certified ScrumMaster"}
                    </span>{" "}
                    - {cert.organization || "Scrum Alliance"}
                    <br />
                    <a
                      href={
                        cert.link || "https://scrumalliance.org/verify/csm"
                      }
                      className="text-gray-800 no-underline hover:underline"
                    >
                      Verify
                    </a>
                  </p>
                ))
              : (
                <p>
                  <span className="font-bold">Certified ScrumMaster</span> - Scrum
                  Alliance
                  <br />
                  <a
                    href="https://scrumalliance.org/verify/csm"
                    className="text-gray-800 no-underline hover:underline"
                  >
                    Verify
                  </a>
                </p>
              )}
          </div>
          <div className="w-[30%] text-right text-[12px] italic">
            {hasArrayData(certificates, "issueDate")
              ? certificates.map((cert, idx) => (
                  <p key={idx}>
                    Issued: {cert.issueDate || "Dec 2023"}
                    <br />
                    {cert.expiryDate ? `Expiry: ${cert.expiryDate}` : "No Expiry"}
                  </p>
                ))
              : (
                <p>
                  Issued: Dec 2023
                  <br />
                  No Expiry
                </p>
              )}
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <h2 className="text-[20px] font-bold uppercase border-b border-black pb-1 mb-2 mt-5 text-center">
        Additional Information
      </h2>
      <div className="flex">
        <div className="w-[65%] text-[12px]">
          <p className="font-bold">Languages:</p>
          <ul className="list-disc pl-5">
            {additional.languages && additional.languages.length > 0
              ? additional.languages.map((lang, idx) => (
                  <li key={idx}>
                    {lang.name || "English"}
                    {lang.proficiency && ` (${lang.proficiency})`}
                  </li>
                ))
              : (
                <>
                  <li>English (Fluent)</li>
                  <li>Spanish (Intermediate)</li>
                </>
              )}
          </ul>
          <p className="font-bold mt-2">Hobbies & Interests:</p>
          <ul className="list-disc pl-5">
            <li>{additional.hobbies || "Coding, Hiking, Reading Tech Journals"}</li>
          </ul>
          <p className="font-bold mt-2">Achievements & Awards:</p>
          <ul className="list-disc pl-5">
            {additional.achievements && additional.achievements.length > 0
              ? additional.achievements.map((ach, idx) => (
                  <li key={idx}>
                    {ach.name || "Dean’s List, NYU, 2022"}
                    {ach.organization && `, ${ach.organization}`}
                    <br />
                    {ach.description || ""}
                  </li>
                ))
              : <li>Dean’s List, NYU, 2022</li>}
          </ul>
        </div>
        <div className="w-[30%] text-right text-[12px] italic">
          <p>
            Fluency:{" "}
            {additional.languages &&
            additional.languages[0] &&
            additional.languages[0].proficiency
              ? additional.languages[0].proficiency
              : "C1"}
          </p>
          <p>Years Active: 2+</p>
          <p>
            Award Date:{" "}
            {additional.achievements &&
            additional.achievements[0] &&
            additional.achievements[0].date
              ? additional.achievements[0].date
              : "May 2022"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_10;
