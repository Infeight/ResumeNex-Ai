import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";

const RESUME_ExpAndFresher_7 = () => {
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
    <div className="font-['Calibri',sans-serif] text-gray-800 w-[794px] min-h-[1122px] mx-auto p-[15mm] leading-relaxed">
      {/* Personal Info & Job Role */}
      <h1 className="text-[26px] font-bold text-blue-800 mb-1">
        { formData.firstName || formData.middleName || formData.lastName
      ? `${formData.firstName ? formData.firstName : ""}${formData.middleName ? " " + formData.middleName : ""}${formData.lastName ? " " + formData.lastName : ""}`.trim()
      : "Sophia Ngyugen"}
      </h1>
      <h2 className="text-[20px] font-bold text-blue-800 mb-4">
        {formData.jobTitle || "Backend Developer"}
      </h2>
      <div className="text-[12px] mb-4">
        <p>
          <a
            href={
              formData.email
                ? `mailto:${formData.email}`
                : "mailto:sophia.nguyen@email.com"
            }
            className="text-blue-800 hover:underline"
          >
            {formData.email || "sophia.nguyen@email.com"}
          </a>{" "}
          | {formData.phoneNumber || "(312) 555-0444"} |{" "}
          {(formData.city || "Chicago")}, {(formData.state || "IL")},{" "}
          {(formData.pincode || "60601")} |{" "}
          <a
            href={formData.linkedin || "https://linkedin.com/in/sophianguyen"}
            className="text-blue-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formData.linkedin || "LinkedIn"}
          </a>{" "}
          |{" "}
          <a
            href={formData.github || "https://github.com/sophianguyen"}
            className="text-blue-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formData.github || "GitHub"}
          </a>{" "}
          |{" "}
          <a
            href={formData.otherLink || "https://sophianguyen.dev"}
            className="text-blue-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formData.otherLink || "sophianguyen.dev"}
          </a>
        </p>
      </div>

      {/* Profile Summary */}
      <h2 className="text-[20px] font-bold text-blue-800 border-b-2 border-blue-800 pb-1 mb-2 mt-5">
        Profile Summary
      </h2>
      <div className="flex mb-4">
        <div className="w-[65%] text-[12px]">
          <p>
            {summary ||
              "Backend Developer specializing in Python and Node.js with experience building scalable APIs and optimizing database performance. Passionate about efficient, maintainable code and cloud-native solutions."}
          </p>
        </div>
        <div className="w-[30%] text-right text-[12px]">
          <p>Char Count: {(summary && summary.length) || "220"}</p>
        </div>
      </div>

      {/* Skills */}
      <h2 className="text-[20px] font-bold text-blue-800 border-b-2 border-blue-800 pb-1 mb-2 mt-5">
        Skills
      </h2>
      <div className="flex mb-4">
        <div className="w-[65%] text-[12px] columns-2 gap-5">
          <ul className="list-disc pl-5">
            {(skills.technical && skills.technical.length > 0
              ? skills.technical.map((skill, idx) => <li key={idx}>{skill}</li>)
              : [
                  <li key="lang">
                    <strong>Languages:</strong> Python, JavaScript (Node.js), SQL
                  </li>,
                  <li key="fw">
                    <strong>Frameworks:</strong> Flask, Express.js, Django
                  </li>,
                  <li key="db">
                    <strong>Databases:</strong> PostgreSQL, MongoDB, Redis
                  </li>,
                  <li key="cloud">
                    <strong>Cloud:</strong> AWS (Lambda, ECS, RDS), Docker
                  </li>,
                  <li key="concepts">
                    <strong>Concepts:</strong> REST APIs, Microservices, CI/CD
                  </li>,
                ])}
            <li>
              <strong>Soft Skills:</strong>{" "}
              {(skills.soft && skills.soft.length > 0
                ? skills.soft.join(", ")
                : "Problem-Solving, Collaboration")}
            </li>
          </ul>
        </div>
        <div className="w-[30%] text-right text-[12px]">
          <p>Proficiency: {skills.related || "Intermediate"}</p>
        </div>
      </div>

      {/* Work Experience */}
      <h2 className="text-[20px] font-bold text-blue-800 border-b-2 border-blue-800 pb-1 mb-2 mt-5">
        Work Experience
      </h2>
      <div className="mb-4">
        {hasArrayData(workExperience, "companyName")
          ? workExperience.map((exp, idx) => (
              <div className="flex mb-3" key={idx}>
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold">
                    {exp.jobTitle || "Backend Developer Intern"}
                  </h3>
                  <p className="text-[12px] italic text-gray-600">
                    {exp.companyName || "DataSync Inc., Chicago, IL"}
                  </p>
                  <ul className="list-disc pl-5 text-[12px]">
                    {exp.responsibilities
                      ? exp.responsibilities.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))
                      : [
                          <li key="1">
                            Developed RESTful APIs using Node.js that reduced average
                            response time by 20% through query optimization
                          </li>,
                          <li key="2">
                            Implemented AWS Lambda functions reducing operational costs by
                            15%
                          </li>,
                          <li key="3">
                            Optimized PostgreSQL queries improving database performance by
                            30%
                          </li>,
                        ]}
                  </ul>
                </div>
                <div className="w-[30%] text-right text-[12px] text-gray-500">
                  <p>
                    {(exp.startDate || "Jan 2024")} - {(exp.endDate || "Jun 2024")}
                  </p>
                </div>
              </div>
            ))
          : (
            <div className="flex mb-3">
              <div className="w-[65%]">
                <h3 className="text-[14px] font-bold">Backend Developer Intern</h3>
                <p className="text-[12px] italic text-gray-600">
                  DataSync Inc., Chicago, IL
                </p>
                <ul className="list-disc pl-5 text-[12px]">
                  <li>
                    Developed RESTful APIs using Node.js that reduced average
                    response time by 20% through query optimization
                  </li>
                  <li>
                    Implemented AWS Lambda functions reducing operational costs by
                    15%
                  </li>
                  <li>
                    Optimized PostgreSQL queries improving database performance by
                    30%
                  </li>
                </ul>
              </div>
              <div className="w-[30%] text-right text-[12px] text-gray-500">
                <p>Jan 2024 - Jun 2024</p>
              </div>
            </div>
          )}
      </div>

      {/* Projects */}
      <h2 className="text-[20px] font-bold text-blue-800 border-b-2 border-blue-800 pb-1 mb-2 mt-5">
        Projects
      </h2>
      <div className="mb-4">
        {hasArrayData(projects, "name")
          ? projects.map((proj, idx) => (
              <div className="flex mb-3" key={idx}>
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold">
                    {proj.name || "API Gateway"}
                  </h3>
                  <p className="text-[12px] italic text-gray-600">
                    {proj.organization || "Personal Project"}
                  </p>
                  <p className="text-[12px]">
                    <a
                      href={proj.link || "https://github.com/sophianguyen/api-gateway"}
                      className="text-blue-800 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </p>
                  <p className="text-[12px]">
                    Technologies: {proj.technologies || "Python, Flask, AWS ECS, PostgreSQL"}
                  </p>
                  <p className="text-[12px]">
                    Summary:{" "}
                    {proj.summary ||
                      "Built a secure API gateway with JWT authentication and CI/CD deployment."}
                  </p>
                  <ul className="list-disc pl-5 text-[12px]">
                    {proj.description
                      ? proj.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))
                      : [
                          <li key="1">
                            Built Python Flask API with JWT authentication handling 1000+
                            RPM
                          </li>,
                          <li key="2">
                            Containerized with Docker and deployed on AWS ECS with CI/CD
                          </li>,
                          <li key="3">
                            Integrated PostgreSQL with optimized queries and caching
                          </li>,
                        ]}
                  </ul>
                </div>
                <div className="w-[30%] text-right text-[12px] text-gray-500">
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
                  <h3 className="text-[14px] font-bold">API Gateway</h3>
                  <p className="text-[12px] italic text-gray-600">
                    Personal Project
                  </p>
                  <p className="text-[12px]">
                    <a
                      href="https://github.com/sophianguyen/api-gateway"
                      className="text-blue-800 hover:underline"
                    >
                      GitHub
                    </a>
                  </p>
                  <p className="text-[12px]">
                    Technologies: Python, Flask, AWS ECS, PostgreSQL
                  </p>
                  <p className="text-[12px]">
                    Summary: Built a secure API gateway with JWT authentication and
                    CI/CD deployment.
                  </p>
                  <ul className="list-disc pl-5 text-[12px]">
                    <li>
                      Built Python Flask API with JWT authentication handling 1000+
                      RPM
                    </li>
                    <li>
                      Containerized with Docker and deployed on AWS ECS with CI/CD
                    </li>
                    <li>Integrated PostgreSQL with optimized queries and caching</li>
                  </ul>
                </div>
                <div className="w-[30%] text-right text-[12px] text-gray-500">
                  <p>Mar 2024 - May 2024</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold">Task Queue System</h3>
                  <p className="text-[12px] italic text-gray-600">Course Project</p>
                  <p className="text-[12px]">
                    <a
                      href="https://github.com/sophianguyen/task-queue"
                      className="text-blue-800 hover:underline"
                    >
                      GitHub
                    </a>
                  </p>
                  <p className="text-[12px]">Technologies: Node.js, Redis</p>
                  <p className="text-[12px]">
                    Summary: Developed a high-throughput task queue system with
                    monitoring dashboard.
                  </p>
                  <ul className="list-disc pl-5 text-[12px]">
                    <li>
                      Developed Node.js backend with Redis achieving 500+ tasks/sec
                      throughput
                    </li>
                    <li>Implemented worker processes with automatic scaling</li>
                    <li>Created monitoring dashboard for performance metrics</li>
                  </ul>
                </div>
                <div className="w-[30%] text-right text-[12px] text-gray-500">
                  <p>Oct 2023 - Dec 2023</p>
                </div>
              </div>
            </>
          )}
      </div>

      {/* Education */}
      <h2 className="text-[20px] font-bold text-blue-800 border-b-2 border-blue-800 pb-1 mb-2 mt-5">
        Education
      </h2>
      <div className="flex mb-4">
        {hasArrayData(education, "collegeName")
          ? education.map((edu, idx) => (
              <React.Fragment key={idx}>
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold">
                    {edu.degree || "Bachelor of Science in Computer Science"}
                  </h3>
                  <p className="text-[12px] italic text-gray-600">
                    {edu.collegeName ||
                      "University of Illinois at Chicago, Chicago, IL"}
                  </p>
                  <ul className="list-disc pl-5 text-[12px]">
                    <li>
                      CGPA: {edu.cgpa || "8.5/10 (Top 15%)"}
                    </li>
                    <li>
                      Relevant Coursework:{" "}
                      {edu.stream ||
                        "Database Systems, Distributed Systems"}
                    </li>
                  </ul>
                </div>
                <div className="w-[30%] text-right text-[12px] text-gray-500">
                  <p>
                    {(edu.startDate || "Aug 2022")} -{" "}
                    {(edu.endDate || "Expected May 2026")}
                  </p>
                </div>
              </React.Fragment>
            ))
          : (
            <>
              <div className="w-[65%]">
                <h3 className="text-[14px] font-bold">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-[12px] italic text-gray-600">
                  University of Illinois at Chicago, Chicago, IL
                </p>
                <ul className="list-disc pl-5 text-[12px]">
                  <li>CGPA: 8.5/10 (Top 15%)</li>
                  <li>
                    Relevant Coursework: Database Systems, Distributed Systems
                  </li>
                </ul>
              </div>
              <div className="w-[30%] text-right text-[12px] text-gray-500">
                <p>Aug 2022 - Expected May 2026</p>
              </div>
            </>
          )}
      </div>

      {/* Certifications */}
      <h2 className="text-[20px] font-bold text-blue-800 border-b-2 border-blue-800 pb-1 mb-2 mt-5">
        Certifications
      </h2>
      <div className="flex mb-4">
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
                    className="text-blue-800 hover:underline"
                  >
                    Verify
                  </a>
                </p>
              ))
            : (
              <>
                <p>
                  <span className="font-bold">
                    AWS Certified Cloud Practitioner
                  </span>{" "}
                  - Amazon Web Services
                  <br />
                  <a
                    href="https://aws.amazon.com/verify/cloud-practitioner"
                    className="text-blue-800 hover:underline"
                  >
                    Verify
                  </a>
                </p>
                <p>
                  <span className="font-bold">
                    Backend Development Certification
                  </span>{" "}
                  - freeCodeCamp
                  <br />
                  <a
                    href="https://freecodecamp.org/cert/backend"
                    className="text-blue-800 hover:underline"
                  >
                    Verify
                  </a>
                </p>
              </>
            )}
        </div>
        <div className="w-[30%] text-right text-[12px] text-gray-500">
          {hasArrayData(certificates, "issueDate")
            ? certificates.map((cert, idx) => (
                <p key={idx}>
                  Issued: {cert.issueDate || "Jan 2024"}
                  <br />
                  {cert.expiryDate ? `Expiry: ${cert.expiryDate}` : "No Expiry"}
                </p>
              ))
            : (
              <>
                <p>
                  Issued: Jan 2024
                  <br />
                  No Expiry
                </p>
                <p>
                  Issued: Dec 2023
                  <br />
                  No Expiry
                </p>
              </>
            )}
        </div>
      </div>

      {/* Additional Sections */}
      <h2 className="text-[20px] font-bold text-blue-800 border-b-2 border-blue-800 pb-1 mb-2 mt-5">
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
                  <li>Vietnamese (Native)</li>
                </>
              )}
          </ul>
          <p className="font-bold mt-2">Hobbies & Interests:</p>
          <ul className="list-disc pl-5">
            <li>
              {additional.hobbies || "Coding, Photography, Yoga"}
            </li>
          </ul>
          <p className="font-bold mt-2">Achievements & Awards:</p>
          <ul className="list-disc pl-5">
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
        <div className="w-[30%] text-right text-[12px] text-gray-500">
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
  );
};

export default RESUME_ExpAndFresher_7;
