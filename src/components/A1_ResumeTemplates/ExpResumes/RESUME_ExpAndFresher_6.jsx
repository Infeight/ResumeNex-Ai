import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";

const RESUME_ExpAndFresher_6 = () => {
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
    <div className="font-arial text-gray-800 w-[794px] min-h-[1122px] mx-auto p-5 leading-relaxed">
      {/* Personal Info */}
      <div className="mb-4">
        <h1 className="text-[26px] font-bold mb-1">
          {(formData.firstName || "Alex") +
            " " +
            (formData.middleName ? formData.middleName + " " : "") +
            (formData.lastName || "Turner")}
        </h1>
        <p className="text-[12px]">
          {(formData.city || "Denver")}, {(formData.state || "CO")},{" "}
          {(formData.pincode || "80201")} | {formData.phoneNumber || "303-555-0101"} |{" "}
          <a
            href={
              formData.email
                ? `mailto:${formData.email}`
                : "mailto:alex.turner@email.com"
            }
            className="text-gray-800 hover:underline"
          >
            {formData.email || "alex.turner@email.com"}
          </a>{" "}
          |{" "}
          <a
            href={formData.linkedin || "https://linkedin.com/in/alexturner"}
            className="text-gray-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formData.linkedin || "linkedin.com/in/alexturner"}
          </a>{" "}
          |{" "}
          <a
            href={formData.github || "https://github.com/alexturner"}
            className="text-gray-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formData.github || "github.com/alexturner"}
          </a>{" "}
          |{" "}
          <a
            href={formData.otherLink || "https://alexturner.dev"}
            className="text-gray-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formData.otherLink || "alexturner.dev"}
          </a>
        </p>
      </div>

      {/* Profile Summary */}
      <h2 className="text-[20px] font-bold border-b-2 border-black pb-1 mb-2 mt-5">
        Profile Summary
      </h2>
      <div className="flex mb-4">
        <div className="w-[65%] text-[12px]">
          <p>
            {summary ||
              "Proactive software engineer with 6 years of experience in full-stack development, specializing in Java and Angular. Delivered scalable solutions for e-commerce platforms, boosting performance by 40%."}
          </p>
        </div>
        <div className="w-[30%] text-right text-[12px]">
          <p>Char Count: {(summary && summary.length) || "210"}</p>
        </div>
      </div>

      {/* Work Experience */}
      <h2 className="text-[20px] font-bold border-b-2 border-black pb-1 mb-2 mt-5">
        Work Experience
      </h2>
      <div className="mb-4">
        {hasArrayData(workExperience, "companyName")
          ? workExperience.map((exp, idx) => (
              <div className="flex mb-3" key={idx}>
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold">
                    {exp.jobTitle || "Software Engineer"}
                  </h3>
                  <p className="text-[12px] italic">
                    {exp.companyName || "CodeZap, Denver, CO"}
                  </p>
                  <ul className="list-disc pl-5 text-[12px]">
                    {exp.responsibilities
                      ? exp.responsibilities.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))
                      : [
                          <li key="1">
                            Built RESTful APIs with Java Spring Boot, reducing server
                            response time by 25%.
                          </li>,
                          <li key="2">
                            Developed Angular-based front-end features for 50K+ users.
                          </li>,
                        ]}
                  </ul>
                </div>
                <div className="w-[30%] text-right text-[12px] italic">
                  <p>
                    {(exp.startDate || "Aug 2019")} - {(exp.endDate || "Present")}
                  </p>
                </div>
              </div>
            ))
          : (
            <>
              <div className="flex mb-3">
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold">Software Engineer</h3>
                  <p className="text-[12px] italic">CodeZap, Denver, CO</p>
                  <ul className="list-disc pl-5 text-[12px]">
                    <li>
                      Built RESTful APIs with Java Spring Boot, reducing server
                      response time by 25%.
                    </li>
                    <li>
                      Developed Angular-based front-end features for 50K+ users.
                    </li>
                  </ul>
                </div>
                <div className="w-[30%] text-right text-[12px] italic">
                  <p>Aug 2019 - Present</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold">Junior Developer</h3>
                  <p className="text-[12px] italic">SoftPeak, Boulder, CO</p>
                  <ul className="list-disc pl-5 text-[12px]">
                    <li>
                      Optimized database queries with MySQL, cutting load times 15%.
                    </li>
                    <li>Collaborated on agile teams to meet project deadlines.</li>
                  </ul>
                </div>
                <div className="w-[30%] text-right text-[12px] italic">
                  <p>Jun 2017 - Jul 2019</p>
                </div>
              </div>
            </>
          )}
      </div>

      {/* Education */}
      <h2 className="text-[20px] font-bold border-b-2 border-black pb-1 mb-2 mt-5">
        Education
      </h2>
      <div className="flex mb-4">
        {hasArrayData(education, "collegeName")
          ? education.map((edu, idx) => (
              <React.Fragment key={idx}>
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold">
                    {edu.degree || "B.S. in Computer Science"}
                  </h3>
                  <p className="text-[12px] italic">
                    {edu.collegeName || "University of Colorado, Boulder, CO"}
                  </p>
                  <p className="text-[12px]">CGPA: {edu.cgpa || "3.7/4.0"}</p>
                </div>
                <div className="w-[30%] text-right text-[12px] italic">
                  <p>
                    {(edu.startDate || "Aug 2013")} - {(edu.endDate || "May 2017")}
                  </p>
                </div>
              </React.Fragment>
            ))
          : (
            <>
              <div className="w-[65%]">
                <h3 className="text-[14px] font-bold">
                  B.S. in Computer Science
                </h3>
                <p className="text-[12px] italic">
                  University of Colorado, Boulder, CO
                </p>
                <p className="text-[12px]">CGPA: 3.7/4.0</p>
              </div>
              <div className="w-[30%] text-right text-[12px] italic">
                <p>Aug 2013 - May 2017</p>
              </div>
            </>
          )}
      </div>

      {/* Projects */}
      <h2 className="text-[20px] font-bold border-b-2 border-black pb-1 mb-2 mt-5">
        Projects
      </h2>
      <div className="mb-4">
        {hasArrayData(projects, "name")
          ? projects.map((proj, idx) => (
              <div className="flex mb-3" key={idx}>
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold">
                    {proj.name || "E-commerce Platform"}
                  </h3>
                  <p className="text-[12px]">
                    <a
                      href={proj.link || "https://github.com/alexturner/ecommerce"}
                      className="text-gray-800 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </p>
                  <p className="text-[12px]">
                    Technologies: {proj.technologies || "Java, Spring Boot, Angular"}
                  </p>
                  <p className="text-[12px]">
                    Summary:{" "}
                    {proj.summary ||
                      "Developed a scalable e-commerce platform with secure payment integration."}
                  </p>
                  <ul className="list-disc pl-5 text-[12px]">
                    {proj.description
                      ? proj.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))
                      : [
                          <li key="1">
                            Reduced checkout latency by 20% with optimized APIs.
                          </li>,
                        ]}
                  </ul>
                </div>
                <div className="w-[30%] text-right text-[12px] italic">
                  <p>
                    {(proj.startDate || "Jan 2023")} - {(proj.endDate || "Jun 2023")}
                  </p>
                </div>
              </div>
            ))
          : (
            <div className="flex mb-3">
              <div className="w-[65%]">
                <h3 className="text-[14px] font-bold">E-commerce Platform</h3>
                <p className="text-[12px]">
                  <a
                    href="https://github.com/alexturner/ecommerce"
                    className="text-gray-800 hover:underline"
                  >
                    GitHub
                  </a>
                </p>
                <p className="text-[12px]">
                  Technologies: Java, Spring Boot, Angular
                </p>
                <p className="text-[12px]">
                  Summary: Developed a scalable e-commerce platform with secure
                  payment integration.
                </p>
                <ul className="list-disc pl-5 text-[12px]">
                  <li>Reduced checkout latency by 20% with optimized APIs.</li>
                </ul>
              </div>
              <div className="w-[30%] text-right text-[12px] italic">
                <p>Jan 2023 - Jun 2023</p>
              </div>
            </div>
          )}
      </div>

      {/* Skills */}
      <h2 className="text-[20px] font-bold border-b-2 border-black pb-1 mb-2 mt-5">
        Skills
      </h2>
      <div className="flex mb-4">
        <div className="w-[65%] text-[12px]">
          <p className="font-bold">Technical Skills:</p>
          <ul className="list-disc pl-5">
            {(skills.technical && skills.technical.length > 0
              ? skills.technical
              : ["Java", "Angular", "MySQL", "Spring Boot"]
            ).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="font-bold mt-2">Soft Skills:</p>
          <ul className="list-disc pl-5">
            {(skills.soft && skills.soft.length > 0
              ? skills.soft
              : ["Teamwork", "Problem-Solving"]
            ).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="w-[30%] text-right text-[12px]">
          <p>Proficiency: {skills.related || "Advanced"}</p>
        </div>
      </div>

      {/* Certifications */}
      <h2 className="text-[20px] font-bold border-b-2 border-black pb-1 mb-2 mt-5">
        Certifications
      </h2>
      <div className="flex mb-4">
        <div className="w-[65%] text-[12px]">
          {hasArrayData(certificates, "name")
            ? certificates.map((cert, idx) => (
                <p key={idx}>
                  <span className="font-bold">
                    {cert.name || "Java SE 11 Developer"}
                  </span>{" "}
                  - {cert.organization || "Oracle"}
                  <br />
                  <a
                    href={cert.link || "https://oracle.com/verify/java"}
                    className="text-gray-800 hover:underline"
                  >
                    Verify
                  </a>
                </p>
              ))
            : (
              <p>
                <span className="font-bold">Java SE 11 Developer</span> - Oracle
                <br />
                <a
                  href="https://oracle.com/verify/java"
                  className="text-gray-800 hover:underline"
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
                  Issued: {cert.issueDate || "Jul 2022"}
                  <br />
                  {cert.expiryDate ? `Expiry: ${cert.expiryDate}` : "No Expiry"}
                </p>
              ))
            : (
              <p>
                Issued: Jul 2022
                <br />
                No Expiry
              </p>
            )}
        </div>
      </div>

      {/* Additional Sections */}
      <h2 className="text-[20px] font-bold border-b-2 border-black pb-1 mb-2 mt-5">
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
              : <li>English (Native)</li>}
          </ul>
          <p className="font-bold mt-2">Hobbies & Interests:</p>
          <ul className="list-disc pl-5">
            <li>{additional.hobbies || "Hiking, Open-Source Contribution"}</li>
          </ul>
          <p className="font-bold mt-2">Achievements & Awards:</p>
          <ul className="list-disc pl-5">
            {additional.achievements && additional.achievements.length > 0
              ? additional.achievements.map((ach, idx) => (
                  <li key={idx}>
                    {ach.name ||
                      "Employee of the Year, CodeZap, 2023"}
                    {ach.organization && `, ${ach.organization}`}
                    <br />
                    {ach.description || ""}
                  </li>
                ))
              : <li>Employee of the Year, CodeZap, 2023</li>}
          </ul>
        </div>
        <div className="w-[30%] text-right text-[12px] italic">
          <p>
            Fluency:{" "}
            {additional.languages &&
            additional.languages[0] &&
            additional.languages[0].proficiency
              ? additional.languages[0].proficiency
              : "Native"}
          </p>
          <p>Years Active: 3+</p>
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

export default RESUME_ExpAndFresher_6;
