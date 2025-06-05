import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";

const RESUME_ExpAndFresher_3 = () => {
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
    <div
      className="font-sans text-black bg-white text-left"
      style={{ width: "794px", margin: "0 auto", padding: "20px" }}
    >
      {/* Header */}
      <h1 className="text-[26px] font-bold text-center m-0 mb-[10px]">
        { formData.firstName || formData.middleName || formData.lastName
      ? `${formData.firstName ? formData.firstName : ""}${formData.middleName ? " " + formData.middleName : ""}${formData.lastName ? " " + formData.lastName : ""}`.trim()
      : "Sai Patel"}
      </h1>
      <div className="text-[12px] text-center mb-[10px]">
        <p>
          {formData.phoneNumber || "+91-91234-56789"} |{" "}
          <a
            href={
              formData.email
                ? `mailto:${formData.email}`
                : "mailto:sai.patel@example.com"
            }
            className="text-[#00008B] underline"
          >
            {formData.email || "sai.patel@example.com"}
          </a>{" "}
          |{" "}
          <a
            href={formData.otherLink || "https://saipatel.com"}
            className="text-[#00008B] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formData.otherLink || "saipatel.com"}
          </a>{" "}
          |{" "}
          <a
            href={formData.figma || "https://figma.com/@saipatel"}
            className="text-[#00008B] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formData.figma || "figma.com/@saipatel"}
          </a>{" "}
          |{" "}
          <a
            href={formData.leetcode || "https://leetcode.com/saipatel"}
            className="text-[#00008B] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formData.leetcode || "leetcode.com/saipatel"}
          </a>
          <br />
          <a
            href={formData.linkedin || "https://linkedin.com/in/saipatel23"}
            className="text-[#00008B] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formData.linkedin || "linkedin.com/in/saipatel23"}
          </a>{" "}
          |{" "}
          <a
            href={formData.github || "https://github.com/saipatel23"}
            className="text-[#00008B] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formData.github || "github.com/saipatel23"}
          </a>
          <br />
          {(formData.city || "456 Tech Lane") +
            ", " +
            (formData.state || "Mumbai") +
            ", " +
            (formData.pincode || "400002")}
        </p>
      </div>
      <hr className="border-t border-black my-[5px]" />

      {/* Profile Summary */}
      <section>
        <h2 className="text-[20px] font-bold m-[10px_0_5px_0]">Objective</h2>
        <div className="text-[12px] m-0">
          {summary ||
            "Seeking a Front-End Developer position to apply skills in JavaScript, React.js, and responsive design to build user-friendly web applications."}
        </div>
        <hr className="border-t border-black my-[5px]" />
      </section>

      {/* Education */}
      <section>
        <h2 className="text-[20px] font-bold m-[10px_0_5px_0]">Education</h2>
        <div className="text-[12px] m-0">
          {hasArrayData(education, "collegeName")
            ? education.map((edu, idx) => (
                <div className="flex justify-between mb-[2px]" key={idx}>
                  <div>
                    <span className="font-bold">
                      {edu.degree || "B.E. in Information Technology"}
                    </span>
                    , {edu.collegeName || "XYZ Institute of Technology – Mumbai, MH"}
                    <br />
                    Stream: {edu.stream || "Web Development"}
                  </div>
                  <div className="text-right italic">
                    {(edu.startDate || "June 2020") +
                      " - " +
                      (edu.endDate || "May 2024")}
                  </div>
                </div>
              ))
            : (
              <div className="flex justify-between mb-[2px]">
                <div>
                  <span className="font-bold">B.E. in Information Technology</span>, XYZ Institute of Technology – Mumbai, MH
                  <br />
                  Stream: Web Development
                </div>
                <div className="text-right italic">June 2020 - May 2024</div>
              </div>
            )}
          CGPA: {(education[0] && education[0].cgpa) || "8.8/10.0"}
        </div>
        <hr className="border-t border-black my-[5px]" />
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-[20px] font-bold m-[10px_0_5px_0]">Projects</h2>
        <div className="text-[12px] m-0">
          {hasArrayData(projects, "name")
            ? projects.map((proj, idx) => (
                <div className="mb-[5px]" key={idx}>
                  <div className="flex justify-between mb-[2px]">
                    <div>
                      <span className="font-bold">{proj.name || "E-commerce Website"}</span>
                      {" – Technologies: "}
                      {proj.technologies || "React.js, Tailwind CSS, Firebase"}
                    </div>
                    <div className="text-right italic">
                      {(proj.startDate || "Jan 2024") +
                        (proj.endDate ? " - " + proj.endDate : " - Mar 2024")}
                      {proj.link && (
                        <>
                          {" ["}
                          <a
                            href={proj.link}
                            className="text-[#00008B] underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </a>
                          {"]"}
                        </>
                      )}
                    </div>
                  </div>
                  <ul className="list-disc pl-[15px] m-0">
                    {proj.description && <li>{proj.description}</li>}
                    {proj.summary && <li>{proj.summary}</li>}
                  </ul>
                </div>
              ))
            : (
              <>
                <div className="mb-[5px]">
                  <div className="flex justify-between mb-[2px]">
                    <div>
                      <span className="font-bold">E-commerce Website</span> – Technologies: React.js, Tailwind CSS, Firebase
                    </div>
                    <div className="text-right italic">
                      Jan 2024 - Mar 2024 [
                      <a
                        href="https://github.com/saipatel23/ecommerce"
                        className="text-[#00008B] underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                      ]
                    </div>
                  </div>
                  <ul className="list-disc pl-[15px] m-0">
                    <li>
                      Developed a responsive e-commerce site with user authentication
                      and payment features.
                    </li>
                    <li>Optimized image loading, improving page speed by 20%.</li>
                    <li>Integrated Firebase for secure user data management.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between mb-[2px]">
                    <div>
                      <span className="font-bold">Portfolio Website</span> – Technologies: HTML, CSS, JavaScript
                    </div>
                    <div className="text-right italic">
                      Nov 2023 [
                      <a
                        href="https://github.com/saipatel23/portfolio"
                        className="text-[#00008B] underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                      ]
                    </div>
                  </div>
                  <ul className="list-disc pl-[15px] m-0">
                    <li>
                      Created a personal portfolio with interactive CSS animations.
                    </li>
                    <li>Deployed on GitHub Pages with a custom domain.</li>
                    <li>Designed responsive layouts for mobile and desktop.</li>
                  </ul>
                </div>
              </>
            )}
        </div>
        <hr className="border-t border-black my-[5px]" />
      </section>

      {/* Work Experience */}
      <section>
        <h2 className="text-[20px] font-bold m-[10px_0_5px_0]">Experience</h2>
        <div className="text-[12px] m-0">
          {hasArrayData(workExperience, "companyName")
            ? workExperience.map((exp, idx) => (
                <div className="mb-[5px]" key={idx}>
                  <div className="flex justify-between mb-[2px]">
                    <div>
                      <span className="font-bold">
                        {exp.jobTitle || "Front-End Development Intern"}
                      </span>
                      , {exp.companyName || "TechNova Solutions – Mumbai, MH"}
                    </div>
                    <div className="text-right italic">
                      {(exp.startDate || "Jan 2024") +
                        " - " +
                        (exp.endDate || "May 2024")}
                    </div>
                  </div>
                  <ul className="list-disc pl-[15px] m-0">
                    {exp.responsibilities
                      ? exp.responsibilities.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))
                      : (
                        <>
                          <li>
                            Developed responsive landing pages using React.js and Tailwind
                            CSS for a SaaS platform.
                          </li>
                          <li>
                            Optimized website performance, reducing load time by 25% with
                            CSS minification.
                          </li>
                          <li>
                            Integrated REST APIs to enable dynamic content updates on user
                            dashboards.
                          </li>
                        </>
                      )}
                  </ul>
                </div>
              ))
            : (
              <>
                <div className="mb-[5px]">
                  <div className="flex justify-between mb-[2px]">
                    <div>
                      <span className="font-bold">Front-End Development Intern</span>, TechNova Solutions – Mumbai, MH
                    </div>
                    <div className="text-right italic">Jan 2024 - May 2024</div>
                  </div>
                  <ul className="list-disc pl-[15px] m-0">
                    <li>
                      Developed responsive landing pages using React.js and Tailwind
                      CSS for a SaaS platform.
                    </li>
                    <li>
                      Optimized website performance, reducing load time by 25% with
                      CSS minification.
                    </li>
                    <li>
                      Integrated REST APIs to enable dynamic content updates on user
                      dashboards.
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between mb-[2px]">
                    <div>
                      <span className="font-bold">Web Development Intern</span>, InnovateX – Pune, MH
                    </div>
                    <div className="text-right italic">June 2023 - Aug 2023</div>
                  </div>
                  <ul className="list-disc pl-[15px] m-0">
                    <li>
                      Built reusable UI components with JavaScript and Bootstrap for a
                      corporate site.
                    </li>
                    <li>
                      Performed cross-browser testing across Chrome, Firefox, and
                      Safari.
                    </li>
                    <li>
                      Translated Figma designs into pixel-perfect HTML/CSS layouts.
                    </li>
                  </ul>
                </div>
              </>
            )}
        </div>
        <hr className="border-t border-black my-[5px]" />
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-[20px] font-bold m-[10px_0_5px_0]">
          Certifications
        </h2>
        <div className="text-[12px] m-0">
          {hasArrayData(certificates, "name")
            ? certificates.map((cert, idx) => (
                <div className="flex justify-between mb-[2px]" key={idx}>
                  <div>
                    <a
                      href={cert.link || "https://coursera.org/verify/react"}
                      className="text-[#00008B] underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cert.name || "Front-End Development with React"}
                    </a>{" "}
                    – {cert.organization || "Coursera"}
                  </div>
                  <div className="text-right italic">
                    {cert.issueDate || "March 2024"}
                  </div>
                </div>
              ))
            : (
              <>
                <div className="flex justify-between mb-[2px]">
                  <div>
                    <a
                      href="https://coursera.org/verify/react"
                      className="text-[#00008B] underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Front-End Development with React
                    </a>{" "}
                    – Coursera
                  </div>
                  <div className="text-right italic">March 2024</div>
                </div>
                <ul className="list-disc pl-[15px] m-0">
                  <li>No Expiry</li>
                </ul>
                <div className="flex justify-between mb-[2px]">
                  <div>
                    <a
                      href="https://freecodecamp.org/certification/responsive"
                      className="text-[#00008B] underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Responsive Web Design
                    </a>{" "}
                    – FreeCodeCamp
                  </div>
                  <div className="text-right italic">December 2023</div>
                </div>
                <ul className="list-disc pl-[15px] m-0">
                  <li>No Expiry</li>
                </ul>
              </>
            )}
        </div>
        <hr className="border-t border-black my-[5px]" />
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-[20px] font-bold m-[10px_0_5px_0]">Skills</h2>
        <div className="text-[12px] m-0">
          <ul className="list-disc pl-[15px] m-0">
            <li>
              <span className="font-bold">Technical Skills:</span>{" "}
              {(skills.technical && skills.technical.length > 0
                ? skills.technical.join(", ")
                : "HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Redux, Bootstrap, Tailwind CSS, Git, VS Code, Figma, npm, Webpack")}
            </li>
            <li>
              <span className="font-bold">Soft Skills:</span>{" "}
              {(skills.soft && skills.soft.length > 0
                ? skills.soft.join(", ")
                : "Collaboration, Problem-Solving, Attention to Detail, Time Management")}
            </li>
          </ul>
        </div>
        <hr className="border-t border-black my-[5px]" />
      </section>

      {/* Additional Sections */}
      <section>
        <h2 className="text-[20px] font-bold m-[10px_0_5px_0]">
          Additional Information
        </h2>
        <div className="text-[12px] m-0">
          <div className="mb-[5px]">
            <div className="font-bold">Languages</div>
            <ul className="list-disc pl-[15px] m-0">
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
                    <li>Hindi (Native)</li>
                    <li>Marathi (Intermediate)</li>
                  </>
                )}
            </ul>
          </div>
          <div className="mb-[5px]">
            <div className="font-bold">Hobbies & Interests</div>
            <ul className="list-disc pl-[15px] m-0">
              <li>{additional.hobbies || "UI/UX Design, Blogging, Cricket"}</li>
            </ul>
          </div>
          <div className="mb-[5px]">
            <div className="font-bold">Achievements & Awards</div>
            <ul className="list-disc pl-[15px] m-0">
              {additional.achievements && additional.achievements.length > 0
                ? additional.achievements.map((ach, idx) => (
                    <li key={idx}>
                      {ach.name || "1st Prize, Hackathon 2023 – Task Management Web App, TechBit India"}
                      {ach.organization && ` – ${ach.organization}`}
                      <br />
                      {ach.description || ""}
                    </li>
                  ))
                : (
                  <>
                    <li>
                      1st Prize, Hackathon 2023 – Task Management Web App, TechBit India
                    </li>
                    <li>Top 10%, National Coding Challenge 2022 – CodeChef</li>
                  </>
                )}
            </ul>
          </div>
          <div>
            <div className="font-bold">Professional Memberships</div>
            <ul className="list-disc pl-[15px] m-0">
              <li>
                <div className="flex justify-between">
                  <div>
                    IEEE Computer Society, Membership ID: 98765432
                  </div>
                  <div className="text-right italic">
                    Jan 2023 - Present
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <div>
                    ACM Student Chapter, Membership ID: 12345678
                  </div>
                  <div className="text-right italic">
                    June 2022 - Present
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RESUME_ExpAndFresher_3;
