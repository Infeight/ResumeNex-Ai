import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";

const RESUME_ExpAndFresher_9 = () => {
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
    <div className="font-['Verdana',sans-serif] text-gray-800 w-[794px] min-h-[1122px] mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Personal Info & Job Role */}
        <div className="flex justify-between items-center border-b-4 border-blue-700 pb-4 mb-5">
          <h1 className="text-[26px] font-bold text-blue-700">
            {(formData.firstName || "John") +
              " " +
              (formData.middleName ? formData.middleName + " " : "") +
              (formData.lastName || "Doe")}
          </h1>
          <div className="text-right text-[12px]">
            <p>
              <i className="fas fa-envelope mr-1 text-blue-700"></i>{" "}
              <a
                href={
                  formData.email
                    ? `mailto:${formData.email}`
                    : "mailto:john.doe@email.com"
                }
                className="text-gray-800 hover:underline"
              >
                {formData.email || "john.doe@email.com"}
              </a>{" "}
              | <i className="fas fa-phone mr-1 text-blue-700"></i>{" "}
              {formData.phoneNumber || "+1 123-456-7890"}
            </p>
            <p>
              <i className="fab fa-linkedin mr-1 text-blue-700"></i>{" "}
              <a
                href={formData.linkedin || "https://linkedin.com/in/johndoe"}
                className="text-gray-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.linkedin || "linkedin.com/in/johndoe"}
              </a>{" "}
              | <i className="fab fa-github mr-1 text-blue-700"></i>{" "}
              <a
                href={formData.github || "https://github.com/johndoe"}
                className="text-gray-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.github || "github.com/johndoe"}
              </a>{" "}
              |{" "}
              <a
                href={formData.otherLink || "https://johndoe.dev"}
                className="text-gray-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.otherLink || "johndoe.dev"}
              </a>
            </p>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="mb-5">
          <h2 className="text-[20px] font-bold text-blue-700 border-b-2 border-gray-300 pb-1 mb-1">
            Profile Summary
          </h2>
          <div className="flex">
            <div className="w-[65%] text-[12px]">
              <p>
                {summary ||
                  "Motivated AI/ML Intern with hands-on experience in machine learning models, deep learning, and data analysis. Passionate about leveraging AI for solving real-world problems."}
              </p>
            </div>
            <div className="w-[30%] text-right text-[12px]">
              <p>Char Count: {(summary && summary.length) || "180"}</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-5">
          <h2 className="text-[20px] font-bold text-blue-700 border-b-2 border-gray-300 pb-1 mb-1">
            Skills
          </h2>
          <div className="flex">
            <div className="w-[65%] text-[12px] grid grid-cols-2 gap-2">
              <div>
                <p className="font-bold">Technical Skills:</p>
                <ul className="list-disc pl-5">
                  {(skills.technical && skills.technical.length > 0
                    ? skills.technical.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))
                    : [
                        <li key="prog">Programming: Python, R, C++</li>,
                        <li key="lib">
                          Libraries: TensorFlow, PyTorch, Scikit-Learn
                        </li>,
                        <li key="ds">
                          Data Science: Pandas, NumPy, Matplotlib
                        </li>,
                        <li key="cloud">Cloud: AWS, Google Cloud</li>,
                        <li key="db">Databases: SQL, MongoDB</li>,
                      ])}
                </ul>
              </div>
              <div>
                <p className="font-bold">Soft Skills:</p>
                <ul className="list-disc pl-5">
                  {(skills.soft && skills.soft.length > 0
                    ? skills.soft.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))
                    : [<li key="soft">Problem-Solving, Innovation</li>])}
                </ul>
              </div>
            </div>
            <div className="w-[30%] text-right text-[12px]">
              <p>Proficiency: {skills.related || "Intermediate"}</p>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-5">
          <h2 className="text-[20px] font-bold text-blue-700 border-b-2 border-gray-300 pb-1 mb-1">
            Work Experience
          </h2>
          {hasArrayData(workExperience, "companyName")
            ? workExperience.map((exp, idx) => (
                <div className="flex mb-3" key={idx}>
                  <div className="w-[65%]">
                    <h3 className="text-[14px] font-bold">
                      {exp.jobTitle || "AI Research Intern"}
                    </h3>
                    <p className="text-[12px] italic">
                      {exp.companyName || "TechCorp, Stanford, CA"}
                    </p>
                    <ul className="list-disc pl-5 text-[12px]">
                      {exp.responsibilities
                        ? exp.responsibilities.split("\n").map((line, i) => (
                            <li key={i}>{line}</li>
                          ))
                        : [
                            <li key="1">
                              Developed deep learning models for image recognition with
                              90%+ accuracy.
                            </li>,
                            <li key="2">
                              Optimized data pipelines reducing processing time by 30%.
                            </li>,
                          ]}
                    </ul>
                  </div>
                  <div className="w-[30%] text-right text-[12px]">
                    <p>
                      {(exp.startDate || "Jun 2023")} - {(exp.endDate || "Present")}
                    </p>
                  </div>
                </div>
              ))
            : (
              <div className="flex mb-3">
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold">AI Research Intern</h3>
                  <p className="text-[12px] italic">TechCorp, Stanford, CA</p>
                  <ul className="list-disc pl-5 text-[12px]">
                    <li>
                      Developed deep learning models for image recognition with 90%+
                      accuracy.
                    </li>
                    <li>
                      Optimized data pipelines reducing processing time by 30%.
                    </li>
                  </ul>
                </div>
                <div className="w-[30%] text-right text-[12px]">
                  <p>Jun 2023 - Present</p>
                </div>
              </div>
            )}
        </div>

        {/* Projects */}
        <div className="mb-5">
          <h2 className="text-[20px] font-bold text-blue-700 border-b-2 border-gray-300 pb-1 mb-1">
            Projects
          </h2>
          {hasArrayData(projects, "name")
            ? projects.map((proj, idx) => (
                <div className="flex mb-3" key={idx}>
                  <div className="w-[65%]">
                    <h3 className="text-[14px] font-bold">
                      {proj.name || "AI Chatbot for Customer Support"}
                    </h3>
                    <p className="text-[12px] italic">
                      {proj.organization || "Personal Project"}
                    </p>
                    <p className="text-[12px]">
                      <a
                        href={
                          proj.link ||
                          "https://github.com/johndoe/ai-chatbot"
                        }
                        className="text-gray-800 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </p>
                    <p className="text-[12px]">
                      Technologies: {proj.technologies || "Python, GPT, AWS"}
                    </p>
                    <p className="text-[12px]">
                      Summary:{" "}
                      {proj.summary ||
                        "Designed an NLP-based chatbot for efficient customer support."}
                    </p>
                    <ul className="list-disc pl-5 text-[12px]">
                      {proj.description
                        ? proj.description.split("\n").map((line, i) => (
                            <li key={i}>{line}</li>
                          ))
                        : [
                            <li key="1">
                              Designed and implemented an NLP-based chatbot using GPT
                              models.
                            </li>,
                            <li key="2">
                              Deployed chatbot on AWS improving response time by 40%.
                            </li>,
                          ]}
                    </ul>
                  </div>
                  <div className="w-[30%] text-right text-[12px]">
                    <p>
                      {(proj.startDate || "Jan 2024")} - {(proj.endDate || "Present")}
                    </p>
                  </div>
                </div>
              ))
            : (
              <div className="flex mb-3">
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold">
                    AI Chatbot for Customer Support
                  </h3>
                  <p className="text-[12px] italic">Personal Project</p>
                  <p className="text-[12px]">
                    <a
                      href="https://github.com/johndoe/ai-chatbot"
                      className="text-gray-800 hover:underline"
                    >
                      GitHub
                    </a>
                  </p>
                  <p className="text-[12px]">
                    Technologies: Python, GPT, AWS
                  </p>
                  <p className="text-[12px]">
                    Summary: Designed an NLP-based chatbot for efficient customer
                    support.
                  </p>
                  <ul className="list-disc pl-5 text-[12px]">
                    <li>
                      Designed and implemented an NLP-based chatbot using GPT
                      models.
                    </li>
                    <li>Deployed chatbot on AWS improving response time by 40%.</li>
                  </ul>
                </div>
                <div className="w-[30%] text-right text-[12px]">
                  <p>Jan 2024 - Present</p>
                </div>
              </div>
            )}
        </div>

        {/* Education */}
        <div className="mb-5">
          <h2 className="text-[20px] font-bold text-blue-700 border-b-2 border-gray-300 pb-1 mb-1">
            Education
          </h2>
          {hasArrayData(education, "collegeName")
            ? education.map((edu, idx) => (
                <div className="flex" key={idx}>
                  <div className="w-[65%]">
                    <h3 className="text-[14px] font-bold">
                      {edu.degree || "B.S. in Computer Science"}
                    </h3>
                    <p className="text-[12px] italic">
                      {edu.collegeName || "Stanford University, Stanford, CA"}
                    </p>
                    <p className="text-[12px]">
                      GPA: {edu.cgpa || "3.9/4.0"}
                    </p>
                  </div>
                  <div className="w-[30%] text-right text-[12px]">
                    <p>
                      {(edu.startDate || "Aug 2021")} -{" "}
                      {(edu.endDate || "Expected May 2025")}
                    </p>
                  </div>
                </div>
              ))
            : (
              <div className="flex">
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold">
                    B.S. in Computer Science
                  </h3>
                  <p className="text-[12px] italic">
                    Stanford University, Stanford, CA
                  </p>
                  <p className="text-[12px]">GPA: 3.9/4.0</p>
                </div>
                <div className="w-[30%] text-right text-[12px]">
                  <p>Aug 2021 - Expected May 2025</p>
                </div>
              </div>
            )}
        </div>

        {/* Certifications */}
        <div className="mb-5">
          <h2 className="text-[20px] font-bold text-blue-700 border-b-2 border-gray-300 pb-1 mb-1">
            Certifications
          </h2>
          <div className="flex">
            <div className="w-[65%] text-[12px]">
              {hasArrayData(certificates, "name")
                ? certificates.map((cert, idx) => (
                    <p key={idx}>
                      <span className="font-bold">
                        {cert.name || "TensorFlow Developer Certificate"}
                      </span>{" "}
                      - {cert.organization || "TensorFlow"}
                      <br />
                      <a
                        href={
                          cert.link ||
                          "https://tensorflow.org/verify/developer"
                        }
                        className="text-gray-800 hover:underline"
                      >
                        Verify
                      </a>
                    </p>
                  ))
                : (
                  <>
                    <p>
                      <span className="font-bold">
                        TensorFlow Developer Certificate
                      </span>{" "}
                      - TensorFlow
                      <br />
                      <a
                        href="https://tensorflow.org/verify/developer"
                        className="text-gray-800 hover:underline"
                      >
                        Verify
                      </a>
                    </p>
                    <p>
                      <span className="font-bold">
                        IBM AI Engineering Professional Certificate
                      </span>{" "}
                      - IBM
                      <br />
                      <a
                        href="https://ibm.com/verify/ai-engineering"
                        className="text-gray-800 hover:underline"
                      >
                        Verify
                      </a>
                    </p>
                  </>
                )}
            </div>
            <div className="w-[30%] text-right text-[12px]">
              {hasArrayData(certificates, "issueDate")
                ? certificates.map((cert, idx) => (
                    <p key={idx}>
                      Issued: {cert.issueDate || "Dec 2023"}
                      <br />
                      {cert.expiryDate ? `Expiry: ${cert.expiryDate}` : "No Expiry"}
                    </p>
                  ))
                : (
                  <>
                    <p>
                      Issued: Dec 2023
                      <br />
                      No Expiry
                    </p>
                    <p>
                      Issued: Nov 2023
                      <br />
                      No Expiry
                    </p>
                  </>
                )}
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mb-5">
          <h2 className="text-[20px] font-bold text-blue-700 border-b-2 border-gray-300 pb-1 mb-1">
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
                  : <li>English (Fluent)</li>}
              </ul>
              <p className="font-bold mt-2">Hobbies & Interests:</p>
              <ul className="list-disc pl-5">
                <li>{additional.hobbies || "AI Blogging & Research"}</li>
                <li>{additional.hobbies ? "" : "Hackathons & Coding Challenges"}</li>
                <li>{additional.hobbies ? "" : "Podcasting about Emerging AI Technologies"}</li>
              </ul>
              <p className="font-bold mt-2">Achievements & Awards:</p>
              <ul className="list-disc pl-5">
                {additional.achievements && additional.achievements.length > 0
                  ? additional.achievements.map((ach, idx) => (
                      <li key={idx}>
                        {ach.name || "AI Hackathon Winner, Stanford, 2024"}
                        {ach.organization && `, ${ach.organization}`}
                        <br />
                        {ach.description || ""}
                      </li>
                    ))
                  : <li>AI Hackathon Winner, Stanford, 2024</li>}
              </ul>
            </div>
            <div className="w-[30%] text-right text-[12px]">
              <p>
                Fluency:{" "}
                {additional.languages &&
                additional.languages[0] &&
                additional.languages[0].proficiency
                  ? additional.languages[0].proficiency
                  : "Native"}
              </p>
              <p>Years Active: 2+</p>
              <p>
                Award Date:{" "}
                {additional.achievements &&
                additional.achievements[0] &&
                additional.achievements[0].date
                  ? additional.achievements[0].date
                  : "Mar 2024"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_9;
