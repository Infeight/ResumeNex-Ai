import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";

const RESUME_ExpAndFresher_8 = () => {
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
    <div className="font-['Times New Roman',serif] text-gray-800 w-[794px] min-h-[1122px] mx-auto p-5 bg-white">
      {/* Personal Info & Job Role */}
      <h1 className="text-[26px] font-bold text-blue-700 text-center mb-2">
        { formData.firstName || formData.middleName || formData.lastName
      ? `${formData.firstName ? formData.firstName : ""}${formData.middleName ? " " + formData.middleName : ""}${formData.lastName ? " " + formData.lastName : ""}`.trim()
      : "Sophia Ngyugen"}
      </h1>
      <div className="mb-2 p-2 text-[12px]">
        <p>
          Email:{" "}
          <a
            href={
              formData.email
                ? `mailto:${formData.email}`
                : "mailto:sophia.nguyen@email.com"
            }
            className="text-blue-700 hover:underline"
          >
            {formData.email || "sophia.nguyen@email.com"}
          </a>{" "}
          | Phone: {formData.phoneNumber || "+1 312-555-0444"} | Location:{" "}
          {(formData.city || "Chicago")}, {(formData.state || "IL")},{" "}
          {(formData.pincode || "60601")}
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href={formData.linkedin || "https://linkedin.com/in/sophianguyen"}
            className="text-blue-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formData.linkedin || "linkedin.com/in/sophianguyen"}
          </a>{" "}
          | GitHub:{" "}
          <a
            href={formData.github || "https://github.com/sophianguyen"}
            className="text-blue-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formData.github || "github.com/sophianguyen"}
          </a>{" "}
          | Portfolio:{" "}
          <a
            href={formData.otherLink || "https://sophianguyen.dev"}
            className="text-blue-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formData.otherLink || "sophianguyen.dev"}
          </a>
          
          {formData.figma  && (
        <p>
     Figma:<a href={formData.figma || '#'} className="underline text-blue-700" target="_blank" rel="noopener noreferrer">{formData.figma || 'figma.com/yourusername'}</a>
</p>
      )}

        </p>
      </div>

      {/* Profile Summary */}
      <div className="mb-2 p-2">
        <h2 className="text-[20px] font-bold text-blue-700 mb-1">
          Profile Summary
        </h2>
        <div className="flex">
          <div className="w-[65%] text-[12px]">
            <p>
              {summary ||
                "Backend Developer skilled in Python, Node.js, SQL, and cloud technologies. Passionate about optimizing database performance and building scalable RESTful APIs."}
            </p>
          </div>
          <div className="w-[30%] text-right text-[12px]">
            <p>Char Count: {(summary && summary.length) || "190"}</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-2 p-2">
        <h2 className="text-[20px] font-bold text-blue-700 mb-1">Skills</h2>
        <div className="flex">
          <div className="w-[65%] text-[12px]">
            <p className="font-bold">Technical Skills:</p>
            <ul className="list-disc pl-4">
              {(skills.technical && skills.technical.length > 0
                ? skills.technical.map((skill, idx) => <li key={idx}>{skill}</li>)
                : [
                    <li key="lang">
                      Programming Languages: Python, Node.js, SQL
                    </li>,
                    <li key="db">Databases: PostgreSQL, MongoDB</li>,
                    <li key="tools">
                      Tools & Technologies: Git, Docker, RESTful APIs, Cloud Computing
                    </li>,
                  ])}
            </ul>
            <p className="font-bold mt-2">Soft Skills:</p>
            <ul className="list-disc pl-4">
              {(skills.soft && skills.soft.length > 0
                ? skills.soft.map((skill, idx) => <li key={idx}>{skill}</li>)
                : [<li key="soft">Problem-Solving, Collaboration</li>])}
            </ul>
          </div>
          <div className="w-[30%] text-right text-[12px]">
            <p>Proficiency: {skills.related || "Intermediate"}</p>
          </div>
        </div>
      </div>

      
      {/* Projects */}
      <div className="mb-2 p-2">
        <h2 className="text-[20px] font-bold text-blue-700 mb-1">Projects</h2>
        {hasArrayData(projects, "name")
          ? projects.map((proj, idx) => (
              <div className="flex mb-3" key={idx}>
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold">
                    {proj.name || "API Server"}
                  </h3>
                  <p className="text-[12px] italic">
                    {proj.organization || "Personal Project"}
                  </p>
                  <p className="text-[12px]">
                    <a
                      href={proj.link || "https://github.com/sophianguyen/api-server"}
                      className="text-blue-700 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </p>
                  <p className="text-[12px]">
                    Technologies: {proj.technologies || "Python, Flask, MongoDB, Docker"}
                  </p>
                  <p className="text-[12px]">
                    Summary:{" "}
                    {proj.summary ||
                      "Built a scalable API server for user data management with containerized deployment."}
                  </p>
                  <ul className="list-disc pl-4 text-[12px]">
                    {proj.description
                      ? proj.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))
                      : [
                          <li key="1">
                            Built a Python Flask server integrated with MongoDB for user
                            data management.
                          </li>,
                          <li key="2">
                            Deployed the service using Docker for scalability and efficient
                            containerized operations.
                          </li>,
                        ]}
                  </ul>
                </div>
                <div className="w-[30%] text-right text-[12px]">
                  <p>
                    {(proj.startDate || "Mar 2024")} - {(proj.endDate || "May 2024")}
                  </p>
                </div>
              </div>
            ))
          : (
            <>
              <div className="flex mb-3">
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold">API Server</h3>
                  <p className="text-[12px] italic">Personal Project</p>
                  <p className="text-[12px]">
                    <a
                      href="https://github.com/sophianguyen/api-server"
                      className="text-blue-700 hover:underline"
                    >
                      GitHub
                    </a>
                  </p>
                  <p className="text-[12px]">
                    Technologies: Python, Flask, MongoDB, Docker
                  </p>
                  <p className="text-[12px]">
                    Summary: Built a scalable API server for user data management with
                    containerized deployment.
                  </p>
                  <ul className="list-disc pl-4 text-[12px]">
                    <li>
                      Built a Python Flask server integrated with MongoDB for user
                      data management.
                    </li>
                    <li>
                      Deployed the service using Docker for scalability and efficient
                      containerized operations.
                    </li>
                  </ul>
                </div>
                <div className="w-[30%] text-right text-[12px]">
                  <p>Mar 2024 - May 2024</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold">Inventory Tracker</h3>
                  <p className="text-[12px] italic">Course Project</p>
                  <p className="text-[12px]">
                    <a
                      href="https://github.com/sophianguyen/inventory-tracker"
                      className="text-blue-700 hover:underline"
                    >
                      GitHub
                    </a>
                  </p>
                  <p className="text-[12px]">Technologies: Node.js, SQL</p>
                  <p className="text-[12px]">
                    Summary: Developed a backend system for inventory management with
                    secure authentication.
                  </p>
                  <ul className="list-disc pl-4 text-[12px]">
                    <li>
                      Developed a Node.js backend with an SQL database to manage
                      inventory CRUD operations.
                    </li>
                    <li>
                      Implemented JWT-based authentication for secure access control.
                    </li>
                  </ul>
                </div>
                <div className="w-[30%] text-right text-[12px]">
                  <p>Oct 2023 - Dec 2023</p>
                </div>
              </div>
            </>
          )}
      </div>

      {/* Education */}
      <div className="mb-2 p-2">
        <h2 className="text-[20px] font-bold text-blue-700 mb-1">Education</h2>
        {hasArrayData(education, "collegeName")
          ? education.map((edu, idx) => (
              <div className="flex" key={idx}>
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold">
                    {edu.degree || "B.S. in Computer Science"}
                  </h3>
                  <p className="text-[12px] italic">
                    {edu.collegeName || "University of Illinois, Chicago, IL"}
                  </p>
                  <p className="text-[12px]">CGPA: {edu.cgpa || "8.5/10"}</p>
                </div>
                <div className="w-[30%] text-right text-[12px]">
                  <p>
                    {(edu.startDate || "Aug 2022")} -{" "}
                    {(edu.endDate || "Expected May 2026")}
                  </p>
                </div>
              </div>
            ))
          : (
            <div className="flex">
              <div className="w-[65%]">
                <h3 className="text-[14px] font-bold">B.S. in Computer Science</h3>
                <p className="text-[12px] italic">
                  University of Illinois, Chicago, IL
                </p>
                <p className="text-[12px]">CGPA: 8.5/10</p>
              </div>
              <div className="w-[30%] text-right text-[12px]">
                <p>Aug 2022 - Expected May 2026</p>
              </div>
            </div>
          )}
      </div>


      {/* Work Experience */}
      <div className="mb-2 p-2">
        <h2 className="text-[20px] font-bold text-blue-700 mb-1">
          Work Experience
        </h2>
        {hasArrayData(workExperience, "companyName")
          ? workExperience.map((exp, idx) => (
              <div className="flex mb-3" key={idx}>
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold">
                    {exp.jobTitle || "Backend Intern"}
                  </h3>
                  <p className="text-[12px] italic">
                    {exp.companyName || "DataSync Ltd., Chicago, IL"}
                  </p>
                  <ul className="list-disc pl-4 text-[12px]">
                    {exp.responsibilities
                      ? exp.responsibilities.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))
                      : [
                          <li key="1">
                            Developed and maintained RESTful APIs using Node.js and
                            PostgreSQL.
                          </li>,
                          <li key="2">
                            Optimized SQL queries, reducing API response time by 20%.
                          </li>,
                          <li key="3">
                            Assisted in database schema design for better performance and
                            scalability.
                          </li>,
                        ]}
                  </ul>
                </div>
                <div className="w-[30%] text-right text-[12px]">
                  <p>
                    {(exp.startDate || "Jan 2024")} - {(exp.endDate || "Jun 2024")}
                  </p>
                </div>
              </div>
            ))
          : (
            <div className="flex mb-3">
              <div className="w-[65%]">
                <h3 className="text-[14px] font-bold">Backend Intern</h3>
                <p className="text-[12px] italic">DataSync Ltd., Chicago, IL</p>
                <ul className="list-disc pl-4 text-[12px]">
                  <li>
                    Developed and maintained RESTful APIs using Node.js and
                    PostgreSQL.
                  </li>
                  <li>Optimized SQL queries, reducing API response time by 20%.</li>
                  <li>
                    Assisted in database schema design for better performance and
                    scalability.
                  </li>
                </ul>
              </div>
              <div className="w-[30%] text-right text-[12px]">
                <p>Jan 2024 - Jun 2024</p>
              </div>
            </div>
          )}
      </div>

      {/* Certifications */}
      <div className="mb-2 p-2">
        <h2 className="text-[20px] font-bold text-blue-700 mb-1">
          Certifications
        </h2>
        <div className="flex">
          <div className="w-[65%] text-[12px]">
            {hasArrayData(certificates, "name")
              ? certificates.map((cert, idx) => (
                  <p key={idx}>
                    <span className="font-bold">
                      {cert.name || "AWS Certified Cloud Practitioner"}
                    </span>{" "}
                    - {cert.organization || "Amazon Web Services"}
                    <br />
                    <a
                      href={
                        cert.link ||
                        "https://aws.amazon.com/verify/cloud-practitioner"
                      }
                      className="text-blue-700 hover:underline"
                    >
                      Verify
                    </a>
                  </p>
                ))
              : (
                <p>
                  <span className="font-bold">
                    AWS Certified Cloud Practitioner
                  </span>{" "}
                  - Amazon Web Services
                  <br />
                  <a
                    href="https://aws.amazon.com/verify/cloud-practitioner"
                    className="text-blue-700 hover:underline"
                  >
                    Verify
                  </a>
                </p>
              )}
          </div>
          <div className="w-[30%] text-right text-[12px]">
            {hasArrayData(certificates, "issueDate")
              ? certificates.map((cert, idx) => (
                  <p key={idx}>
                    Issued: {cert.issueDate || "Jan 2024"}
                    <br />
                    {cert.expiryDate ? `Expiry: ${cert.expiryDate}` : "No Expiry"}
                  </p>
                ))
              : (
                <p>
                  Issued: Jan 2024
                  <br />
                  No Expiry
                </p>
              )}
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="mb-2 p-2">
        <h2 className="text-[20px] font-bold text-blue-700 mb-1">
          Additional Information
        </h2>
        <div className="flex">
          <div className="w-[65%] text-[12px]">
            <p className="font-bold">Languages:</p>
            <ul className="list-disc pl-4">
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
                    <li>Vietnamese (Native)</li>
                  </>
                )}
            </ul>
            <p className="font-bold mt-2">Hobbies & Interests:</p>
            <ul className="list-disc pl-4">
              <li>{additional.hobbies || "Server scripting"}</li>
              <li>{additional.hobbies ? "" : "Solving complex puzzles"}</li>
            </ul>
            <p className="font-bold mt-2">Achievements & Awards:</p>
            <ul className="list-disc pl-4">
              {additional.achievements && additional.achievements.length > 0
                ? additional.achievements.map((ach, idx) => (
                    <li key={idx}>
                      {ach.name || "Dean’s List, UIC, 2023"}
                      {ach.organization && `, ${ach.organization}`}
                      <br />
                      {ach.description || ""}
                    </li>
                  ))
                : <li>Dean’s List, UIC, 2023</li>}
            </ul>
          </div>
          <div className="w-[30%] text-right text-[12px]">
            <p>
              Fluency:{" "}
              {additional.languages &&
              additional.languages[0] &&
              additional.languages[0].proficiency
                ? additional.languages[0].proficiency
                : "C2"}
            </p>
            <p>Years Active: 2+</p>
            <p>
              Award Date:{" "}
              {additional.achievements &&
              additional.achievements[0] &&
              additional.achievements[0].date
                ? additional.achievements[0].date
                : "Dec 2023"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_8;
