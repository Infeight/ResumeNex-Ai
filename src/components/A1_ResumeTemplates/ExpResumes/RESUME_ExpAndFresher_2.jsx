import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";

const RESUME_ExpAndFresher_2 = () => {

     const { formData, education, projects, workExperience, certificates, skills, summary, additional } = useResume();
  

       const hasArrayData = (arr, key) =>
    Array.isArray(arr) && arr.length > 0 && arr[0][key];

  return (
    <div
      className="font-sans text-black bg-white"
      style={{ width: "794px", margin: "0 auto", padding: "20px" }}
    >
      {/* Header */}

     <h1 className="text-[26px] font-bold text-center m-0">
  {formData.firstName || "Sai"} {formData.lastName || "Patel"}
</h1>
<div className="text-[12px] text-center mb-[10px]">
  <p>
    {formData.jobTitle || "Front-End Developer"} <br />
    Email:{" "}
    <a
      href={formData.email ? `mailto:${formData.email}` : "mailto:sai.patel@example.com"}
      className="text-[#0000EE] underline"
    >
      {formData.email || "sai.patel@example.com"}
    </a>
    {" | "}Phone: {formData.phoneNumber || "+91-91234-56789"} <br />
    LinkedIn:{" "}
    <a
      href={formData.linkedin || "https://linkedin.com/in/saipatel23"}
      className="text-[#0000EE] underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {formData.linkedin || "linkedin.com/in/saipatel23"}
    </a>
    {" | "}
    GitHub:{" "}
    <a
      href={formData.github || "https://github.com/saipatel23"}
      className="text-[#0000EE] underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {formData.github || "github.com/saipatel23"}
    </a>
    <br />
    Portfolio:{" "}
    <a
      href={formData.otherLink || "https://portfolio.saipatel.com"}
      className="text-[#0000EE] underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {formData.otherLink || "portfolio.saipatel.com"}
    </a>
    {" | "}
    Figma:{" "}
    <a
      href={formData.figma || "https://figma.com/@saipatel"}
      className="text-[#0000EE] underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {formData.figma || "figma.com/@saipatel"}
    </a>
    <br />
    {formData.city || "123 Tech Road"}, {formData.state || "Mumbai"}, {formData.pincode || "400001"}
  </p>
</div>

      <hr className="border-t border-black my-[4px]" />

      {/* Profile Summary */}
      <section>
        <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">
          Profile Summary
        </h2>
       <p className="text-[12px] m-0">
  {summary ||
    "Motivated and detail-oriented Front-End Developer fresher with a strong foundation in creating responsive, user-friendly web interfaces. Skilled in modern JavaScript frameworks, HTML, and CSS, with hands-on internship experience in optimizing web applications. Eager to contribute to innovative projects and collaborate with dynamic teams."}
</p>

        <hr className="border-t border-black my-[4px]" />
      </section>

      {/* Education */}
    <section>
  <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">Education</h2>
  {education && education.length > 0 && education[0].collegeName
    ? education.map((edu, idx) => (
        <div key={idx} className="text-[12px] m-0 flex justify-between">
          <div>
            <span className="font-bold">{edu.degree || "B.E. in Information Technology"}</span>
            <br />
            {edu.collegeName || "XYZ Institute of Technology"}, {edu.location || "Mumbai, MH"}
            <br />
            Stream: {edu.stream || "Web Development"}
          </div>
          <div className="text-right">
            {edu.startDate || "June 2020"} - {edu.endDate || "May 2024"}
            <br />
            CGPA: {edu.cgpa || "9.0/10.0"}
          </div>
        </div>
      ))
    : (
      <div className="text-[12px] m-0 flex justify-between">
        <div>
          <span className="font-bold">B.E. in Information Technology</span>
          <br />
          XYZ Institute of Technology, Mumbai, MH
          <br />
          Stream: Web Development
        </div>
        <div className="text-right">
          June 2020 - May 2024
          <br />
          CGPA: 9.0/10.0
        </div>
      </div>
    )
  }
  <hr className="border-t border-black my-[4px]" />
</section>


      {/* Projects */}
      <section>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "10px 0 5px 0" }}>
          Work Experience
        </h2>
        {hasArrayData(workExperience, "companyName")
          ? workExperience.map((exp, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 13,
                  marginBottom: 4,
                }}
              >
                <div>
                  <span style={{ fontWeight: 600 }}>
                    {exp.jobTitle || "Front-End Intern"}
                  </span>
                  <br />
                  {exp.companyName || "ABC Tech Solutions"}
                  <ul style={{ margin: "4px 0 0 16px", padding: 0 }}>
                    {exp.responsibilities &&
                      exp.responsibilities
                        .split("\n")
                        .map((line, i) => <li key={i}>{line}</li>)}
                  </ul>
                </div>
                <div style={{ textAlign: "right" }}>
                  {exp.startDate || "May 2023"} - {exp.endDate || "Aug 2023"}
                </div>
              </div>
            ))
          : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 13,
                marginBottom: 4,
              }}
            >
              <div>
                <span style={{ fontWeight: 600 }}>Front-End Intern</span>
                <br />
                ABC Tech Solutions
                <ul style={{ margin: "4px 0 0 16px", padding: 0 }}>
                  <li>
                    Developed responsive UI components using React and
                    TailwindCSS.
                  </li>
                  <li>
                    Collaborated with backend team to integrate RESTful APIs.
                  </li>
                </ul>
              </div>
              <div style={{ textAlign: "right" }}>
                May 2023 - Aug 2023
              </div>
            </div>
          )}
        <hr style={{ borderTop: "1px solid #ccc", margin: "8px 0" }} />
      </section>


      {/* Work Experience */}
      <section>
        <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">
          Work Experience
        </h2>
        <div className="text-[12px] m-0">
          <div className="mb-[10px] flex justify-between">
            <div>
              <span className="font-bold">Front-End Development Intern</span>
              <br />
              TechNova Solutions, Mumbai, MH
              <ul className="list-disc pl-[20px] m-0 mt-[3px]">
                <li>
                  Developed responsive web pages with React.js and Tailwind CSS.
                </li>
                <li>
                  Improved load time by 25% via CSS and image optimization.
                </li>
                <li>Integrated RESTful APIs for dynamic client dashboards.</li>
              </ul>
            </div>
            <div className="text-right">
              January 2024 - May 2024
              <br />
              Projects: 3
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="font-bold">Web Development Intern</span>
              <br />
              InnovateX, Pune, MH
              <ul className="list-disc pl-[20px] m-0 mt-[3px]">
                <li>
                  Built reusable UI components with JavaScript and Bootstrap.
                </li>
                <li>
                  Ensured cross-browser compatibility for Chrome, Firefox,
                  Safari.
                </li>
                <li>Implemented pixel-perfect designs from Figma mockups.</li>
              </ul>
            </div>
            <div className="text-right">
              June 2023 - August 2023
              <br />
              Clients: 2
            </div>
          </div>
        </div>
        <hr className="border-t border-black my-[4px]" />
      </section>

      {/* Certifications */}
     <section>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "10px 0 5px 0" }}>
          Certifications
        </h2>
        {hasArrayData(certificates, "name")
          ? certificates.map((cert, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 13,
                  marginBottom: 4,
                }}
              >
                <div>
                  <ul style={{ margin: "0 0 0 16px", padding: 0 }}>
                    <li>
                      {cert.name || "React Developer Certificate"} -{" "}
                      {cert.organization || "Coursera"}
                      <br />
                      {cert.link && (
                        <a
                          href={cert.link}
                          style={{ color: "#0056b3" }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {cert.link}
                        </a>
                      )}
                    </li>
                  </ul>
                </div>
                <div style={{ textAlign: "right" }}>
                  Issued: {cert.issueDate || "Apr 2023"}
                  <br />
                  {cert.expiryDate
                    ? `Expiry: ${cert.expiryDate}`
                    : "No Expiry"}
                </div>
              </div>
            ))
          : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 13,
                marginBottom: 4,
              }}
            >
              <div>
                <ul style={{ margin: "0 0 0 16px", padding: 0 }}>
                  <li>
                    React Developer Certificate - Coursera
                    <br />
                    <a
                      href="https://coursera.org/certificate/123"
                      style={{ color: "#0056b3" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      coursera.org/certificate/123
                    </a>
                  </li>
                </ul>
              </div>
              <div style={{ textAlign: "right" }}>
                Issued: Apr 2023
                <br />
                No Expiry
              </div>
            </div>
          )}
        <hr style={{ borderTop: "1px solid #ccc", margin: "8px 0" }} />
      </section>

      {/* Skills */}
     <section>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "10px 0 5px 0" }}>
          Skills
        </h2>
        <div style={{ fontSize: 13 }}>
          <span style={{ fontWeight: 600 }}>Technical Skills:</span>
          <ul style={{ margin: "4px 0 0 16px", padding: 0 }}>
            {(skills.technical && skills.technical.length > 0
              ? skills.technical
              : ["React", "JavaScript", "HTML", "CSS"]
            ).map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
          <span style={{ fontWeight: 600, display: "block", marginTop: 8 }}>
            Soft Skills:
          </span>
          <ul style={{ margin: "4px 0 0 16px", padding: 0 }}>
            {(skills.soft && skills.soft.length > 0
              ? skills.soft
              : ["Communication", "Teamwork", "Problem-solving"]
            ).map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
          {skills.related && (
            <>
              <span style={{ fontWeight: 600, display: "block", marginTop: 8 }}>
                Other Skills:
              </span>
              <ul style={{ margin: "4px 0 0 16px", padding: 0 }}>
                <li>{skills.related}</li>
              </ul>
            </>
          )}
        </div>
        <hr style={{ borderTop: "1px solid #ccc", margin: "8px 0" }} />
      </section>

      {/* Additional Sections */}
       <section>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "10px 0 5px 0" }}>
          Additional
        </h2>
        <div style={{ fontSize: 13 }}>
          <span style={{ fontWeight: 600 }}>Languages:</span>
          <ul style={{ margin: "4px 0 0 16px", padding: 0 }}>
            {additional.languages && additional.languages.length > 0
              ? additional.languages.map((lang, idx) => (
                  <li key={idx}>
                    {lang.name || "English"}{" "}
                    {lang.proficiency && `(${lang.proficiency})`}
                  </li>
                ))
              : (
                <li>English (Fluent)</li>
              )}
          </ul>
          <span style={{ fontWeight: 600, display: "block", marginTop: 8 }}>
            Hobbies & Interests:
          </span>
          <ul style={{ margin: "4px 0 0 16px", padding: 0 }}>
            <li>{additional.hobbies || "Reading, Coding, Travel"}</li>
          </ul>
          <span style={{ fontWeight: 600, display: "block", marginTop: 8 }}>
            Achievements & Awards:
          </span>
          <ul style={{ margin: "4px 0 0 16px", padding: 0 }}>
            {additional.achievements && additional.achievements.length > 0
              ? additional.achievements.map((ach, idx) => (
                  <li key={idx}>
                    {ach.name || "Winner - Hackathon"}
                    {ach.organization && <> - {ach.organization}</>}
                    <br />
                    {/* {ach.description || "Won first place in XYZ hackathon."} */}
                  </li>
                ))
              : (
                <li>
                  Winner - Hackathon<br />
                  {/* Won first place in XYZ hackathon. */}
                </li>
              )}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RESUME_ExpAndFresher_2;
