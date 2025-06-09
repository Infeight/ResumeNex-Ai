import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const Resume12 = () => {
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
    <div className="font-['Arial',sans-serif] w-[794px] mx-auto my-[20px] p-5 bg-[#f5f7fa] text-[#333] leading-[1.5] overflow-x-hidden">
      {/* Header */}
      <h1 className="text-[26px] text-[#1b3a57] text-center mb-[5px] font-bold">
        {formData.firstName || formData.middleName || formData.lastName
          ? `${formData.firstName} ${formData.middleName ? formData.middleName + " " : ""}${formData.lastName}`
          : "John Doe"}
      </h1>
      <div className="text-[12px] text-center mb-[15px]">
        <p>
          Email:{" "}
          <a
            href={`mailto:${formData.email ? formData.email : "john.doe@email.com"}`}
            className="text-[#1b3a57] no-underline hover:underline"
          >
            {formData.email ? formData.email : "john.doe@email.com"}
          </a>{" "}
          | Phone: {formData.phoneNumber ? formData.phoneNumber : "+1 312-555-9876"}
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href={formData.linkedin ? formData.linkedin : "https://linkedin.com/in/johndoe"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1b3a57] no-underline hover:underline"
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
            className="text-[#1b3a57] no-underline hover:underline"
          >
            {formData.github
              ? formData.github.replace(/^https?:\/\//, "")
              : "github.com/johndoe"}
          </a>
        </p>
      </div>

      {/* Summary */}
      <div className="mb-[15px] p-[10px] bg-white border-l-2 border-[#1b3a57]">
        <div className="text-[20px] font-bold text-[#1b3a57] mb-[5px]">
          {formData.jobTitle ? formData.jobTitle : "Summary"}
        </div>
        <p className="text-[12px]">
          {summary
            ? summary
            : "Passionate AI/ML Intern with hands-on experience in deep learning, model optimization, and data science. Adept at building and deploying scalable machine learning models."}
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mb-[15px] p-[10px] bg-white border-l-2 border-[#1b3a57]">
        <div className="text-[20px] font-bold text-[#1b3a57] mb-[5px]">
           Skills
        </div>
        <ul className="pl-[20px] text-[12px] space-y-[3px] list-disc">
          
          <li>
            Programming:{" "}
            {skills.technical && skills.technical.length > 0
              ? skills.technical.join(", ")
              : "Python, R, SQL"}
          </li>
          <li>
            Soft:{" "}
            {skills.soft && skills.soft.length > 0
              ? skills.soft.join(", ")
              : "Pandas, NumPy, Matplotlib"}
          </li>
         
        </ul>
      </div>


       {/* Projects */}
      <div className="mb-[15px] p-[10px] bg-white border-l-2 border-[#1b3a57]">
        <div className="text-[20px] font-bold text-[#1b3a57] mb-[5px]">
          Projects
        </div>
        {projects && projects.length > 0 && projects[0].name ? (
          projects.map((project, idx) => (
            <div className="mt-[5px]" key={idx}>
              <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
                <span>
                  {project.name
                    ? project.name
                    : "Autonomous Image Classification"}
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
                        Implemented CNN models for real-time image classification with 92%
                        accuracy
                      </li>
                      <li>Optimized model inference using TensorRT for deployment</li>
                    </>
                  )}
              </ul>
            </div>
          ))
        ) : (
          <div className="mt-[5px]">
            <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
              <span>Autonomous Image Classification</span>
              <span>Jan 2024 – Present</span>
            </p>
            <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
              <li>
                Implemented CNN models for real-time image classification with 92%
                accuracy
              </li>
              <li>Optimized model inference using TensorRT for deployment</li>
            </ul>
          </div>
        )}
      </div>

      {/* Education */}
      <div className="mb-[15px] p-[10px] bg-white border-l-2 border-[#1b3a57]">
        <div className="text-[20px] font-bold text-[#1b3a57] mb-[5px]">
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
                  : "B.S. in Artificial Intelligence & Machine Learning"}{" "}
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
              B.S. in Artificial Intelligence & Machine Learning | GPA: 3.9/4.0
            </p>
          </div>
        )}
      </div>

      {/* Experience */}
      <div className="mb-[15px] p-[10px] bg-white border-l-2 border-[#1b3a57]">
        <div className="text-[20px] font-bold text-[#1b3a57] mb-[5px]">
          Experience
        </div>
        {workExperience && workExperience.length > 0 && workExperience[0].companyName ? (
          workExperience.map((work, idx) => (
            <div className="mt-[5px]" key={idx}>
              <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
                <span>
                  {work.jobTitle ? work.jobTitle : "AI Research Intern"},{" "}
                  {work.companyName ? work.companyName : "ABC Labs"}
                </span>
                <span>
                  {work.startDate && work.endDate
                    ? `${work.startDate} – ${work.endDate}`
                    : "May 2023 – Aug 2023"}
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
                        Developed and optimized NLP models, improving classification
                        accuracy by 15%
                      </li>
                      <li>
                        Conducted data preprocessing and feature engineering for deep
                        learning projects
                      </li>
                    </>
                  )}
              </ul>
            </div>
          ))
        ) : (
          <div className="mt-[5px]">
            <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
              <span>AI Research Intern, ABC Labs</span>
              <span>May 2023 – Aug 2023</span>
            </p>
            <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
              <li>
                Developed and optimized NLP models, improving classification
                accuracy by 15%
              </li>
              <li>
                Conducted data preprocessing and feature engineering for deep
                learning projects
              </li>
            </ul>
          </div>
        )}
      </div>

     

      {/* Certifications */}
      <div className="mb-[15px] p-[10px] bg-white border-l-2 border-[#1b3a57]">
        <div className="text-[20px] font-bold text-[#1b3a57] mb-[5px]">
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
              <li>Deep Learning Specialization – Coursera</li>
              <li>Google Cloud Machine Learning Engineer</li>
            </>
          )}
        </ul>
      </div>

      {/* Hobbies */}
      <div className="mb-[15px] p-[10px] bg-white border-l-2 border-[#1b3a57]">
        <div className="text-[20px] font-bold text-[#1b3a57] mb-[5px]">
          Hobbies
        </div>
        <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
          {additional.hobbies
            ? additional.hobbies
                .map((hobby, idx) => <li key={idx}>{hobby.trim()}</li>)
            : (
              <>
                <li>Competitive Programming & AI Challenges</li>
                <li>Open-Source AI Development</li>
                <li>Data Visualization & Storytelling</li>
              </>
            )}
        </ul>
      </div>
    </div>
  );
};

export default Resume12;
