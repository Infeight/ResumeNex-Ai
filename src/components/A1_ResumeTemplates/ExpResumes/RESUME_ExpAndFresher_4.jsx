import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";

const RESUME_ExpAndFresher_4 = () => {
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
    <div className="font-arial bg-gray-100 text-gray-800 min-h-[1122px] w-[794px] mx-auto flex">
      {/* Sidebar */}
      <div className="w-[220px] bg-blue-500 text-white p-4">
        <h1 className="text-[26px] font-bold text-center mb-4">
          { formData.firstName || formData.middleName || formData.lastName
      ? `${formData.firstName ? formData.firstName : ""}${formData.middleName ? " " + formData.middleName : ""}${formData.lastName ? " " + formData.lastName : ""}`.trim()
      : "Sai Patel"}
        </h1>
        <h2 className="text-[20px] font-bold text-blue-100 mb-2">Contact</h2>
        <div className="text-[12px]">
          <p>
            Email:{" "}
            <a
              href={
                formData.email
                  ? `mailto:${formData.email}`
                  : "mailto:sai.patel@example.com"
              }
              className="text-white hover:underline"
            >
              {formData.email || "sai.patel@example.com"}
            </a>
          </p>
          <p>Phone: {formData.phoneNumber || "+91-91234-56789"}</p>
          <p>
            LinkedIn:{" "}
            <a
              href={formData.linkedin || "https://linkedin.com/in/saipatel23"}
              className="text-white hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {formData.linkedin || "linkedin.com/in/saipatel23"}
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href={formData.github || "https://github.com/saipatel23"}
              className="text-white hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {formData.github || "github.com/saipatel23"}
            </a>
          </p>
          <p>
            Portfolio:{" "}
            <a
              href={formData.otherLink || "https://saipatel.dev"}
              className="text-white hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {formData.otherLink || "saipatel.dev"}
            </a>
          </p>
          <p>
            City:{" "}
            {formData.city || "Mumbai"}, {formData.state || "Maharashtra"},{" "}
            {formData.pincode || "400001"}
          </p>
        </div>
        <hr className="border-t border-dashed border-gray-300 my-3" />
        <h2 className="text-[20px] font-bold text-blue-100 mb-2">Skills</h2>
        <div className="text-[12px]">
          <p className="font-bold">Technical Skills:</p>
          <ul className="list-disc pl-4">
            {(skills.technical && skills.technical.length > 0
              ? skills.technical
              : [
                  "Languages: HTML5, CSS3, JavaScript (ES6+), TypeScript",
                  "Frameworks & Libraries: React.js, Redux, Bootstrap, Tailwind CSS",
                  "Tools: Git, VS Code, Figma, npm, Webpack",
                ]
            ).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="font-bold mt-2">Soft Skills:</p>
          <ul className="list-disc pl-4">
            {(skills.soft && skills.soft.length > 0
              ? skills.soft
              : ["Communication", "Problem-Solving", "Teamwork"]
            ).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[574px] bg-white p-5 border-l border-gray-300">
        {/* Profile Summary */}
        <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-blue-500">
          Profile Summary
        </h2>
        <div className="flex mb-4">
          <div className="w-[65%] text-[12px]">
            <p>
              {summary ||
                "Passionate Front-End Developer fresher skilled in crafting responsive, user-friendly web interfaces. Experienced in JavaScript, React.js, and CSS frameworks through internships, with a focus on optimizing web performance and integrating APIs. Eager to deliver impactful front-end solutions."}
            </p>
          </div>
          <div className="w-[30%] text-right text-[12px]">
            <p>Char Count: {(summary && summary.length) || "280"}</p>
          </div>
        </div>
        <hr className="border-t border-dashed border-gray-300 my-3" />

        {/* Work Experience */}
        <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-blue-500">
          Work Experience
        </h2>
        <div className="mb-4">
          {hasArrayData(workExperience, "companyName")
            ? workExperience.map((exp, idx) => (
                <div className="flex mb-3" key={idx}>
                  <div className="w-[65%]">
                    <h3 className="text-[14px] font-bold">
                      {exp.jobTitle || "Front-End Development Intern"}
                    </h3>
                    <p className="text-[12px] italic text-gray-600">
                      {exp.companyName || "TechNova Solutions, Mumbai, India"}
                    </p>
                    <ul className="list-disc pl-5 text-[12px]">
                      {exp.responsibilities
                        ? exp.responsibilities.split("\n").map((line, i) => (
                            <li key={i}>{line}</li>
                          ))
                        : [
                            <li key="1">
                              Built responsive web pages with React.js and Tailwind CSS for a SaaS product.
                            </li>,
                            <li key="2">
                              Boosted site speed by 25% using CSS optimization and image compression.
                            </li>,
                            <li key="3">
                              Integrated RESTful APIs for real-time dashboard content.
                            </li>,
                          ]}
                    </ul>
                  </div>
                  <div className="w-[30%] text-right text-[12px] italic text-gray-600">
                    <p>
                      {(exp.startDate || "Jan 2024")} - {(exp.endDate || "May 2024")}
                    </p>
                  </div>
                </div>
              ))
            : (
              <>
                <div className="flex mb-3">
                  <div className="w-[65%]">
                    <h3 className="text-[14px] font-bold">
                      Front-End Development Intern
                    </h3>
                    <p className="text-[12px] italic text-gray-600">
                      TechNova Solutions, Mumbai, India
                    </p>
                    <ul className="list-disc pl-5 text-[12px]">
                      <li>
                        Built responsive web pages with React.js and Tailwind CSS for a SaaS product.
                      </li>
                      <li>
                        Boosted site speed by 25% using CSS optimization and image compression.
                      </li>
                      <li>
                        Integrated RESTful APIs for real-time dashboard content.
                      </li>
                    </ul>
                  </div>
                  <div className="w-[30%] text-right text-[12px] italic text-gray-600">
                    <p>Jan 2024 - May 2024</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[65%]">
                    <h3 className="text-[14px] font-bold">Web Development Intern</h3>
                    <p className="text-[12px] italic text-gray-600">
                      InnovateX, Pune, India
                    </p>
                    <ul className="list-disc pl-5 text-[12px]">
                      <li>
                        Developed reusable UI components using JavaScript and Bootstrap.
                      </li>
                      <li>
                        Tested compatibility across Chrome, Firefox, and Safari browsers.
                      </li>
                      <li>Converted Figma designs into precise HTML/CSS layouts.</li>
                    </ul>
                  </div>
                  <div className="w-[30%] text-right text-[12px] italic text-gray-600">
                    <p>June 2023 - Aug 2023</p>
                  </div>
                </div>
              </>
            )}
        </div>
        <hr className="border-t border-dashed border-gray-300 my-3" />

        {/* Education */}
        <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-blue-500">
          Education
        </h2>
        <div className="flex mb-4">
          {hasArrayData(education, "collegeName")
            ? education.map((edu, idx) => (
                <React.Fragment key={idx}>
                  <div className="w-[65%]">
                    <h3 className="text-[14px] font-bold">
                      {edu.degree || "B.E. in Information Technology"}
                    </h3>
                    <p className="text-[12px] italic text-gray-600">
                      {edu.collegeName || "XYZ Institute of Technology, Mumbai, India"}
                    </p>
                    <p className="text-[12px]">CGPA: {edu.cgpa || "8.5/10"}</p>
                  </div>
                  <div className="w-[30%] text-right text-[12px] italic text-gray-600">
                    <p>
                      {(edu.startDate || "June 2020")} - {(edu.endDate || "May 2024")}
                    </p>
                  </div>
                </React.Fragment>
              ))
            : (
              <>
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold">
                    B.E. in Information Technology
                  </h3>
                  <p className="text-[12px] italic text-gray-600">
                    XYZ Institute of Technology, Mumbai, India
                  </p>
                  <p className="text-[12px]">CGPA: 8.5/10</p>
                </div>
                <div className="w-[30%] text-right text-[12px] italic text-gray-600">
                  <p>June 2020 - May 2024</p>
                </div>
              </>
            )}
        </div>
        <hr className="border-t border-dashed border-gray-300 my-3" />

        {/* Projects */}
        <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-blue-500">
          Projects
        </h2>
        <div className="mb-4">
          {hasArrayData(projects, "name")
            ? projects.map((proj, idx) => (
                <div className="flex mb-3" key={idx}>
                  <div className="w-[65%]">
                    <h3 className="text-[14px] font-bold">
                      {proj.name || "E-commerce Website"}
                    </h3>
                    <p className="text-[12px]">
                      <a
                        href={proj.link || "https://github.com/saipatel23/ecommerce"}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </p>
                    <p className="text-[12px]">
                      Technologies: {proj.technologies || "React.js, Tailwind CSS, Firebase"}
                    </p>
                    <p className="text-[12px]">
                      Summary: {proj.summary || "Built a responsive e-commerce platform with product listings, cart functionality, and secure authentication."}
                    </p>
                    <ul className="list-disc pl-5 text-[12px]">
                      {proj.description
                        ? proj.description.split("\n").map((line, i) => (
                            <li key={i}>{line}</li>
                          ))
                        : [
                            <li key="1">Enhanced load time by 20% with lazy-loaded images.</li>,
                            <li key="2">Implemented user authentication with Firebase.</li>,
                          ]}
                    </ul>
                  </div>
                  <div className="w-[30%] text-right text-[12px] italic text-gray-600">
                    <p>
                      {(proj.startDate || "Jan 2024")} - {(proj.endDate || "Mar 2024")}
                    </p>
                  </div>
                </div>
              ))
            : (
              <>
                <div className="flex mb-3">
                  <div className="w-[65%]">
                    <h3 className="text-[14px] font-bold">E-commerce Website</h3>
                    <p className="text-[12px]">
                      <a
                        href="https://github.com/saipatel23/ecommerce"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </p>
                    <p className="text-[12px]">
                      Technologies: React.js, Tailwind CSS, Firebase
                    </p>
                    <p className="text-[12px]">
                      Summary: Built a responsive e-commerce platform with product listings, cart functionality, and secure authentication.
                    </p>
                    <ul className="list-disc pl-5 text-[12px]">
                      <li>Enhanced load time by 20% with lazy-loaded images.</li>
                      <li>Implemented user authentication with Firebase.</li>
                    </ul>
                  </div>
                  <div className="w-[30%] text-right text-[12px] italic text-gray-600">
                    <p>Jan 2024 - Mar 2024</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[65%]">
                    <h3 className="text-[14px] font-bold">Weather Dashboard</h3>
                    <p className="text-[12px]">
                      <a
                        href="https://github.com/saipatel23/weather-dashboard"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </p>
                    <p className="text-[12px]">
                      Technologies: JavaScript, React, OpenWeatherMap API
                    </p>
                    <p className="text-[12px]">
                      Summary: Created a real-time weather app with location-based forecasts and a clean UI.
                    </p>
                    <ul className="list-disc pl-5 text-[12px]">
                      <li>Designed intuitive UI with CSS Grid and location features.</li>
                      <li>Integrated API for accurate weather updates.</li>
                    </ul>
                  </div>
                  <div className="w-[30%] text-right text-[12px] italic text-gray-600">
                    <p>Oct 2023 - Dec 2023</p>
                  </div>
                </div>
              </>
            )}
        </div>
        <hr className="border-t border-dashed border-gray-300 my-3" />

        {/* Certifications */}
        <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-blue-500">
          Certifications
        </h2>
        <div className="flex mb-4">
          <div className="w-[65%]">
            {hasArrayData(certificates, "name")
              ? certificates.map((cert, idx) => (
                  <p className="text-[12px]" key={idx}>
                    <span className="font-bold">
                      {cert.name || "Front-End Development with React"}
                    </span>{" "}
                    - {cert.organization || "Coursera"}
                  </p>
                ))
              : (
                <>
                  <p className="text-[12px]">
                    <span className="font-bold">
                      Front-End Development with React
                    </span>{" "}
                    - Coursera
                  </p>
                  <p className="text-[12px]">
                    <span className="font-bold">Responsive Web Design</span> -
                    FreeCodeCamp
                  </p>
                </>
              )}
          </div>
          <div className="w-[30%] text-right text-[12px] italic text-gray-600">
            {hasArrayData(certificates, "issueDate")
              ? certificates.map((cert, idx) => (
                  <p key={idx}>
                    {cert.issueDate || "March 2024"}
                  </p>
                ))
              : (
                <>
                  <p>March 2024</p>
                  <p>December 2023</p>
                </>
              )}
          </div>
        </div>
        <hr className="border-t border-dashed border-gray-300 my-3" />

        {/* Additional Sections */}
        <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-blue-500">
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
                    <li>Hindi (Native)</li>
                  </>
                )}
            </ul>
            <p className="font-bold mt-2">Hobbies & Interests:</p>
            <ul className="list-disc pl-5">
              <li>{additional.hobbies || "Coding, Reading Tech Blogs, Cricket"}</li>
            </ul>
            <p className="font-bold mt-2">Achievements & Awards:</p>
            <ul className="list-disc pl-5">
              {additional.achievements && additional.achievements.length > 0
                ? additional.achievements.map((ach, idx) => (
                    <li key={idx}>
                      {ach.name ||
                        "Best Project Award, XYZ Institute, 2024: E-commerce Website"}
                      {ach.organization && `, ${ach.organization}`}
                      <br />
                      {ach.description || ""}
                    </li>
                  ))
                : (
                  <li>
                    Best Project Award, XYZ Institute, 2024: E-commerce Website
                  </li>
                )}
            </ul>
          </div>
          <div className="w-[30%] text-right text-[12px] italic text-gray-600">
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
                : "May 2024"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_4;
