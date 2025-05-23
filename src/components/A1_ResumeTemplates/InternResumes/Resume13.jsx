import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const Resume13 = () => {
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
    <div className="font-['Arial',sans-serif] w-[794px] mx-auto my-[20px] p-5  text-[#333] leading-[1.6] overflow-x-hidden">
      <div className="bg-white p-[10px]">
        {/* Header */}
        <div className="flex justify-between items-center border-b-2 border-[#0056b3] pb-[10px] mb-[15px]">
          <h1 className="m-0 text-[26px] text-[#0056b3] font-bold">
            {formData.firstName || formData.middleName || formData.lastName
              ? `${formData.firstName} ${formData.middleName ? formData.middleName + " " : ""}${formData.lastName}`
              : "John Doe"}
          </h1>
          <div className="text-right text-[12px]">
            <p>
              Email: {formData.email ? formData.email : "john.doe@email.com"} | Phone: {formData.phoneNumber ? formData.phoneNumber : "+1 123-456-7890"}
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href={formData.linkedin ? formData.linkedin : "https://linkedin.com/in/johndoe"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0056b3] no-underline hover:underline"
              >
                {formData.linkedin
                  ? formData.linkedin.replace(/^https?:\/\//, "")
                  : "linkedin.com/in/johndoe"}
              </a>{" "}
              | GitHub:{" "}
              <a
                href={formData.github ? formData.github : "https://github.com/johndoe"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0056b3] no-underline hover:underline"
              >
                {formData.github
                  ? formData.github.replace(/^https?:\/\//, "")
                  : "github.com/johndoe"}
              </a>
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-[15px]">
          <div className="text-[20px] font-bold text-[#0056b3] mb-[5px] border-b-2 border-[#ddd]">
            Summary
          </div>
          <p className="text-[12px]">
            {summary
              ? summary
              : "Motivated AI/ML Intern with hands-on experience in machine learning models, deep learning, and data analysis. Passionate about leveraging AI for solving real-world problems."}
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-[15px]">
          <div className="text-[20px] font-bold text-[#0056b3] mb-[5px] border-b-2 border-[#ddd]">
             Skills
          </div>
          <ul className="pl-[20px] text-[12px] space-y-[3px] list-disc">
            <li>
              <strong>Programming:</strong>{" "}
              {skills.technical && skills.technical.length > 0
                ? skills.technical.join(", ")
                : "Python, R, C++"}
            </li>
          
            <li>
              <strong>Data Science:</strong>{" "}
              {skills.dataScience && skills.dataScience.length > 0
                ? skills.dataScience.join(", ")
                : "Pandas, NumPy, Matplotlib"}
            </li>
            <li>
              <strong>Cloud:</strong>{" "}
              {skills.cloud && skills.cloud.length > 0
                ? skills.cloud.join(", ")
                : "AWS, Google Cloud"}
            </li>
            <li>
              <strong>Soft Skills:</strong>{" "}
              {skills.soft && skills.soft.length > 0
                ? skills.soft.join(", ")
                : "SQL, MongoDB"}
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className="mb-[15px]">
          <div className="text-[20px] font-bold text-[#0056b3] mb-[5px] border-b-2 border-[#ddd]">
            Experience
          </div>
          {workExperience && workExperience.length > 0 && workExperience[0].companyName ? (
            workExperience.map((work, idx) => (
              <div className="mt-[5px]" key={idx}>
                <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
                  <span>
                    {work.jobTitle ? work.jobTitle : "AI Research Intern"},{" "}
                    {work.companyName ? work.companyName : "TechCorp"}
                  </span>
                  <span>
                    {work.startDate && work.endDate
                      ? `${work.startDate} – ${work.endDate}`
                      : "June 2023 – Present"}
                  </span>
                </p>
                <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
                  {work.responsibilities
                    ? work.responsibilities.split("\n").map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))
                    : (
                      <>
                        <li>
                          Developed deep learning models for image recognition with 90%+
                          accuracy
                        </li>
                        <li>
                          Optimized data pipelines reducing processing time by 30%
                        </li>
                      </>
                    )}
                </ul>
              </div>
            ))
          ) : (
            <div className="mt-[5px]">
              <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
                <span>AI Research Intern, TechCorp</span>
                <span>June 2023 – Present</span>
              </p>
              <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
                <li>
                  Developed deep learning models for image recognition with 90%+
                  accuracy
                </li>
                <li>Optimized data pipelines reducing processing time by 30%</li>
              </ul>
            </div>
          )}
        </div>

        {/* Projects */}
        <div className="mb-[15px]">
          <div className="text-[20px] font-bold text-[#0056b3] mb-[5px] border-b-2 border-[#ddd]">
            Projects
          </div>
          {projects && projects.length > 0 && projects[0].name ? (
            projects.map((project, idx) => (
              <div className="mt-[5px]" key={idx}>
                <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
                  <span>
                    {project.name
                      ? project.name
                      : "AI Chatbot for Customer Support"}
                  </span>
                  <span>
                    {project.startDate && project.endDate
                      ? `${project.startDate} – ${project.endDate}`
                      : "Jan 2024 – Present"}
                  </span>
                </p>
                <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
                  {project.description
                    ? project.description.split("\n").map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))
                    : (
                      <>
                        <li>
                          Designed and implemented an NLP-based chatbot using GPT models
                        </li>
                        <li>Deployed chatbot on AWS improving response time by 40%</li>
                      </>
                    )}
                </ul>
              </div>
            ))
          ) : (
            <div className="mt-[5px]">
              <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
                <span>AI Chatbot for Customer Support</span>
                <span>Jan 2024 – Present</span>
              </p>
              <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
                <li>
                  Designed and implemented an NLP-based chatbot using GPT models
                </li>
                <li>Deployed chatbot on AWS improving response time by 40%</li>
              </ul>
            </div>
          )}
        </div>

        {/* Education */}
        <div className="mb-[15px]">
          <div className="text-[20px] font-bold text-[#0056b3] mb-[5px] border-b-2 border-[#ddd]">
            Education
          </div>
          {education && education.length > 0 && education[0].collegeName ? (
            education.map((edu, idx) => (
              <div className="mt-[5px]" key={idx}>
                <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
                  <span>
                    {edu.collegeName ? edu.collegeName : "Stanford University"}
                  </span>
                  <span>
                    {edu.endDate
                      ? `Expected ${edu.endDate}`
                      : "Expected May 2025"}
                  </span>
                </p>
                <p className="text-[12px] mt-[5px]">
                  {edu.degree
                    ? edu.degree
                    : "B.S. in Computer Science"}{" "}
                  | GPA: {edu.cgpa ? edu.cgpa : "3.9/4.0"}
                </p>
              </div>
            ))
          ) : (
            <div className="mt-[5px]">
              <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
                <span>Stanford University</span>
                <span>Expected May 2025</span>
              </p>
              <p className="text-[12px] mt-[5px]">
                B.S. in Computer Science | GPA: 3.9/4.0
              </p>
            </div>
          )}
        </div>

        {/* Certifications */}
        <div className="mb-[15px]">
          <div className="text-[20px] font-bold text-[#0056b3] mb-[5px] border-b-2 border-[#ddd]">
            Certifications
          </div>
          <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
            {certificates && certificates.length > 0 && certificates[0].name ? (
              certificates.map((cert, idx) => (
                <li key={idx}>
                  {cert.name}
                  {cert.organization ? ` – ${cert.organization}` : ""}
                  {cert.issueDate ? ` (${cert.issueDate})` : ""}
                </li>
              ))
            ) : (
              <>
                <li>TensorFlow Developer Certificate</li>
                <li>IBM AI Engineering Professional Certificate</li>
              </>
            )}
          </ul>
        </div>

        {/* Hobbies */}
        <div className="mb-[15px]">
          <div className="text-[20px] font-bold text-[#0056b3] mb-[5px] border-b-2 border-[#ddd]">
            Hobbies
          </div>
          <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
            {additional.hobbies
              ? additional.hobbies
                  .map((hobby, idx) => <li key={idx}>{hobby.trim()}</li>)
              : (
                <>
                  <li>AI Blogging & Research</li>
                  <li>Hackathons & Coding Challenges</li>
                  <li>Podcasting about Emerging AI Technologies</li>
                </>
              )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume13;
