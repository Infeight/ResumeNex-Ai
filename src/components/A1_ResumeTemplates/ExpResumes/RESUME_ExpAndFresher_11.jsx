import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const RESUME_ExpAndFresher_11 = () => {

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

//Name help
     const fullName =
    formData.firstName || formData.middleName || formData.lastName
      ? `${formData.firstName ? formData.firstName : ""}${formData.middleName ? " " + formData.middleName : ""}${formData.lastName ? " " + formData.lastName : ""}`.trim()
      : "Your Name";

  //address help
  const address =
    formData.city || formData.state || formData.pincode
      ? `${formData.city ? formData.city : ""}${formData.city && formData.state ? ", " : ""}${formData.state ? formData.state : ""}${formData.state && formData.pincode ? ", " : ""}${formData.pincode ? formData.pincode : ""}`
      : "City, State, Pincode";

  return (
    <div className="font-['Arial',sans-serif] text-gray-800 w-[794px] min-h-[1122px] mx-auto p-[20mm] box-border flex">
      {/* Sidebar */}
      <div className="w-[30%] bg-gray-100 p-4 text-gray-800">
        <h1 className="text-[24px] font-bold mb-2">{formData?formData.firstName+" "+formData.middleName+" "+formData.lastName :"Priya Sharma" }</h1>
        <div className="text-[12px]">
          <p className="my-1">{formData.city?formData.city:"Bangalore"}, {formData.state?formData.state:"Karnataka"}, {formData.pincode?formData.pincode:"112255"}</p>
          <p className="my-1">{formData.phoneNumber?formData.phoneNumber:"9987558965"}</p>
          <p className="my-1">
            <a
              href={`mailto:${formData.email}`}
              className="text-gray-800 no-underline hover:underline"
            >
              {formData.email?formData.email:"priya@gmail.com"}
            </a>
          </p>
          <p className="my-1">
            <a
              href={formData.linkedin}
              className="text-gray-800 no-underline hover:underline"
            >
              {formData.linkedin?formData.linkedin:"linkedin.com/in/priyasharma"}
            </a>
          </p>
          <p className="my-1">
            <a
              href={formData.github}
              className="text-gray-800 no-underline hover:underline"
            >
              {formData.github?formData.github:"github.com/priyasharma"}
            </a>
          </p>

           <a
            href={formData.otherLink || "https://priya.dev"}
            className="text-gray-800 no-underline hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {formData.otherLink || "priya.dev"}
          </a>
    
        </div>
      </div>

      {/* Content */}
      <div className="w-[70%] p-4 bg-white border-l border-gray-300">
        {/* Objective */}
        <h2 className="text-[16px] font-bold uppercase border-b border-black pb-1 mb-2 mt-0 text-left">
          Objective
        </h2>
         <div className="mb-4">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p>{summary ? summary :  <>
                Dedicated professional with a strong educational background in
                computer science and extensive experience in software development.
                Skilled in designing and implementing innovative solutions using
                modern programming languages and frameworks. Achieved a <b>25%</b> increase in project efficiency through optimized workflows.
                Proficient in project management and data analysis, with a passion
                for leveraging technology to solve complex challenges.
              </>}</p>
      </div>

        {/* Education */}
         <div className="mb-4">
        <h2 className="text-xl font-semibold">Education</h2>
        {education && education.length > 0 && (education[0].collegeName || education[0].degree) ? (
          education.map((edu, idx) => (
            <div key={idx} className="mb-2">
              <strong>{edu.degree ? edu.degree : "Degree"}</strong>
              {edu.stream && ` in ${edu.stream}`}
              <div>{edu.collegeName ? edu.collegeName : "College Name"}</div>
              <div>
                {edu.location ? edu.location : "Location"} |{" "}
                {edu.startDate ? edu.startDate : "Start"} - {edu.endDate ? edu.endDate : "End"}
              </div>
              <div>CGPA: {edu.cgpa ? edu.cgpa : "N/A"}</div>
            </div>
          ))
        ) : (
          <p>No education details provided.</p>
        )}
      </div>

        {/* Internships */}
       <div className="mb-4">
        <h2 className="text-xl font-semibold">Work Experience</h2>
        {workExperience && workExperience.length > 0 && workExperience[0].companyName ? (
          workExperience.map((exp, idx) => (
            <div key={idx} className="mb-2">
              <strong>{exp.jobTitle ? exp.jobTitle : "Job Title"}</strong>
              <div>{exp.companyName ? exp.companyName : "Company Name"}</div>
              <div>
                {exp.startDate ? exp.startDate : "Start"} - {exp.endDate ? exp.endDate : "End"}
              </div>
              <div>
                {exp.responsibilities
                  ? exp.responsibilities
                  : "Describe your responsibilities here."}
              </div>
            </div>
          ))
        ) : (
          <p>No work experience provided.</p>
        )}
      </div>

        {/* Projects */}
  
         <div className="mb-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        {projects && projects.length > 0 && projects[0].name ? (
          projects.map((proj, idx) => (
            <div key={idx} className="mb-2">
              <strong>{proj.name ? proj.name : "Project Name"}</strong>
              <div>
                <span>
                  {proj.technologies ? proj.technologies : "Technologies Used"}
                </span>
                {" | "}
                <a
                  href={proj.link ? proj.link : "#"}
                  className="text-blue-700 underline"
                >
                  {proj.link ? proj.link : "Project Link"}
                </a>
              </div>
              <div>
                {proj.startDate ? proj.startDate : "Start"} - {proj.endDate ? proj.endDate : "End"}
              </div>
              <div>{proj.description ? proj.description : "Project Description"}</div>
              <div>
                <em>{proj.summary ? proj.summary : "Project Summary"}</em>
              </div>
            </div>
          ))
        ) : (
          <div className="mb-3">
          <div className="flex justify-between text-[14px] font-bold">
            <span>E-Commerce Website</span>
            <span className="italic">Jan 2024 - Apr 2024</span>
          </div>
          <div className="text-[14px] font-bold">
            Final Year Project, IIT Bangalore, Bangalore, India
          </div>
          <p className="text-[12px]">
            <a
              href="https://github.com/priyasharma/ecommerce"
              className="text-gray-800 no-underline hover:underline"
            >
              GitHub
            </a>
          </p>
          <p className="text-[12px]">Technologies: React, Node.js, MongoDB</p>
          <p className="text-[12px]">
            Summary: Built a full-stack e-commerce platform with advanced
            features.
          </p>
          <ul className="list-disc pl-5 text-[12px] mt-1">
            <li>
              <i>Built</i> a full-stack e-commerce platform using React,
              Node.js, and MongoDB.
            </li>
            <li>
              <i>Implemented</i> features like product search, cart management,
              and payment integration.
            </li>
            <li>
              <i>Presented</i> the project to a panel of professors, receiving a
              score of <b>92/100</b>.
            </li>
          </ul>
        </div> 
        )}
      </div>

        {/* Skills */}
        <div className="mb-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div>
          <strong>Technical:</strong>{" "}
          {skills.technical && skills.technical.length > 0
            ? skills.technical.join(", ")
            : "List your technical skills"}
        </div>
        <div>
          <strong>Soft:</strong>{" "}
          {skills.soft && skills.soft.length > 0
            ? skills.soft.join(", ")
            : "List your soft skills"}
        </div>
        <div>
          <strong>Related:</strong>{" "}
          {skills.related ? skills.related : "Related skills"}
        </div>
      </div>

        {/* Certifications */}
       <div className="mb-4">
        <h2 className="text-xl font-semibold">Certificates</h2>
        {certificates && certificates.length > 0 && certificates[0].name ? (
          certificates.map((cert, idx) => (
            <div key={idx} className="mb-2">
              <strong>{cert.name ? cert.name : "Certificate Name"}</strong>
              <div>{cert.organization ? cert.organization : "Organization"}</div>
              <div>
                {cert.issueDate ? cert.issueDate : "Issue Date"}{" "}
                {cert.expiryDate ? `- ${cert.expiryDate}` : ""}
              </div>
              <div>
                <a
                  href={cert.link ? cert.link : "#"}
                  className="text-blue-700 underline"
                >
                  {cert.link ? cert.link : "Certificate Link"}
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No certificates provided.</p>
        )}
      </div>
        {/* Extracurricular Activities */}
         <div className="mb-4">
        <h2 className="text-xl font-semibold">Additional Information</h2>
        <div>
          <strong>Languages:</strong>{" "}
          {additional.languages && additional.languages.length > 0 && additional.languages[0].name
            ? additional.languages
                .map(
                  (lang) =>
                    `${lang.name ? lang.name : "Language"} (${lang.proficiency ? lang.proficiency : "Proficiency"})`
                )
                .join(", ")
            : "Languages you know"}
        </div>
        <div>
          <strong>Hobbies:</strong>{" "}
          {additional.hobbies ? additional.hobbies : "Your hobbies"}
        </div>
        <div>
          <strong>Achievements:</strong>{" "}
          {additional.achievements && additional.achievements.length > 0 && additional.achievements[0].name
            ? additional.achievements
                .map(
                  (ach) =>
                    `${ach.name ? ach.name : "Achievement"} at ${ach.organization ? ach.organization : "Organization"} (${ach.description ? ach.description : "Description"})`
                )
                .join("; ")
            : "Your achievements"}
        </div>
      </div>
    </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_11;
