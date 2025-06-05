import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const Resume4 = () => {
  const {
    formData,
    summary,
    skills,
    workExperience,
    projects,
    education,
    additional,
  } = useResume();

  return (
    <div className="font-['Arial',sans-serif] w-[794px] mx-auto my-[35px] p-5 box-border leading-[1.4] bg-[#f8fafc] text-[#3d3d3d] overflow-x-hidden">
      {/* Header */}
      <div className="bg-[#dbeafe] text-[#1e40af] p-[15px] text-left border-b-2 border-[#93c5fd]">
        <h1 className="text-[26px] m-0 tracking-[1px]">
          {formData.firstName || formData.middleName || formData.lastName
            ? `${formData.firstName} ${formData.middleName ? formData.middleName + " " : ""}${formData.lastName}`
            : "Sophia Nguyen"}
        </h1>
        <div className="text-[12px] mt-[5px] text-[#1e40af]">
          <p>
            <a
              href={`mailto:${formData.email ? formData.email : "sophia.nguyen@email.com"}`}
              className="text-[#1e40af] no-underline hover:underline"
            >
              {formData.email ? formData.email : "sophia.nguyen@email.com"}
            </a>{" "}
            | {formData.phoneNumber ? formData.phoneNumber : "+1 312-555-0444"} |{" "}
            {formData.city && formData.state
              ? `${formData.city}, ${formData.state}`
              : "Chicago, IL"}{" "}
            |{" "}
            <a
              href={formData.linkedin ? formData.linkedin : "https://linkedin.com/in/sophianguyen"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e40af] no-underline hover:underline"
            >
              {formData.linkedin
                ? formData.linkedin.replace(/^https?:\/\//, "")
                : "LinkedIn"}
            </a>{" "}
            |{" "}
            <a
              href={formData.github ? formData.github : "https://github.com/sophianguyen"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e40af] no-underline hover:underline"
            >
              {formData.github
                ? formData.github.replace(/^https?:\/\//, "")
                : "GitHub"}
            </a>
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="m-[8px_0] p-[8px] bg-[#f9fafb]">
        <div className="text-[20px] font-bold text-[#1e40af] p-[3px_0] mb-[5px]">
          Summary
        </div>
        <p className="text-[12px] m-[3px_0] text-left">
          {summary
            ? summary
            : "Frontend development enthusiast skilled in React, JavaScript, and UI/UX, seeking a Frontend Developer role to build visually stunning interfaces."}
        </p>
      </div>

      {/* Skills */}
      <div className="m-[8px_0] p-[8px] bg-[#eff6ff]">
        <div className="text-[20px] font-bold text-[#1e40af] p-[3px_0] mb-[5px]">
          Skills
        </div>
        <ul className="text-[12px] m-[3px_0] pl-[15px] text-left">
          <li>
            Languages:{" "}
            {skills.technical && skills.technical.length > 0
              ? skills.technical.join(", ")
              : "JavaScript, HTML, CSS, React"}
          </li>
          <li>
            Tools:{" "}
            {skills.related
              ? skills.related
              : "Git, Figma, Webpack"}
          </li>
          <li>
            Soft Skills:{" "}
            {skills.soft && skills.soft.length > 0
              ? skills.soft.join(", ")
              : "Frontend Development, UI/UX, Responsive Design, Agile"}
          </li>
        </ul>
      </div>

      {/* Work Experience */}
      <div className="m-[8px_0] p-[8px] bg-[#f9fafb]">
        <div className="text-[20px] font-bold text-[#1e40af] p-[3px_0] mb-[5px]">
          Work Experience
        </div>
        {workExperience && workExperience.length > 0 && workExperience[0].companyName ? (
          workExperience.map((work, idx) => (
            <div key={idx}>
              <p className="experience-line flex justify-between text-[14px] m-[3px_0] text-left">
                <strong>
                  {work.jobTitle
                    ? work.jobTitle
                    : "Frontend Intern"}
                  {work.companyName ? `, ${work.companyName}` : ", WebFlow Co."}
                </strong>
                <span>
                  {work.startDate && work.endDate
                    ? `${work.startDate} – ${work.endDate}`
                    : "Jan 2024 – Jun 2024"}
                </span>
              </p>
              <ul className="text-[12px] m-[3px_0] pl-[15px] text-left">
                {work.responsibilities
                  ? work.responsibilities
                      .split("\n")
                      .map((resp, i) => <li key={i}>{resp}</li>)
                  : [
                      <li key="1">
                        Developed responsive UIs with React and CSS for a SaaS platform.
                      </li>,
                      <li key="2">
                        Collaborated with designers in Figma, improving load times by 15%.
                      </li>,
                    ]}
              </ul>
            </div>
          ))
        ) : (
          <>
            <p className="experience-line flex justify-between text-[14px] m-[3px_0] text-left">
              <strong>Frontend Intern, WebFlow Co.</strong>
              <span>Jan 2024 – Jun 2024</span>
            </p>
            <ul className="text-[12px] m-[3px_0] pl-[15px] text-left">
              <li>
                Developed responsive UIs with React and CSS for a SaaS platform.
              </li>
              <li>
                Collaborated with designers in Figma, improving load times by 15%.
              </li>
            </ul>
          </>
        )}
      </div>

      {/* Projects */}
      <div className="m-[8px_0] p-[8px] bg-[#eff6ff]">
        <div className="text-[20px] font-bold text-[#1e40af] p-[3px_0] mb-[5px]">
          Projects
        </div>
        {projects && projects.length > 0 && projects[0].name ? (
          projects.map((project, idx) => (
            <div key={idx}>
              <p className="project-line flex justify-between text-[14px] m-[3px_0] text-left">
                <strong>
                  {project.name
                    ? project.name
                    : idx === 0
                    ? "Portfolio Site"
                    : "Weather App"}
                  {project.summary
                    ? `, ${project.summary}`
                    : idx === 0
                    ? ", Personal Project"
                    : ", Course Project"}
                </strong>
                <span>
                  {project.startDate && project.endDate
                    ? `${project.startDate} – ${project.endDate}`
                    : idx === 0
                    ? "Mar 2024 – May 2024"
                    : "Oct 2023 – Dec 2023"}
                </span>
              </p>
              <ul className="text-[12px] m-[3px_0] pl-[15px] text-left">
                {project.description
                  ? project.description
                      .split("\n")
                      .map((desc, i) => <li key={i}>{desc}</li>)
                  : idx === 0
                  ? [
                      <li key="1">Built a React-based portfolio with custom CSS animations.</li>,
                      <li key="2">Optimized for mobile using responsive design principles.</li>,
                    ]
                  : [
                      <li key="1">Created a JavaScript app with API integration and dynamic UI.</li>,
                      <li key="2">Styled with Tailwind CSS for a modern look.</li>,
                    ]}
              </ul>
            </div>
          ))
        ) : (
          <>
            <p className="project-line flex justify-between text-[14px] m-[3px_0] text-left">
              <strong>Portfolio Site, Personal Project</strong>
              <span>Mar 2024 – May 2024</span>
            </p>
            <ul className="text-[12px] m-[3px_0] pl-[15px] text-left">
              <li>Built a React-based portfolio with custom CSS animations.</li>
              <li>Optimized for mobile using responsive design principles.</li>
            </ul>
            <p className="project-line flex justify-between text-[14px] m-[3px_0] text-left">
              <strong>Weather App, Course Project</strong>
              <span>Oct 2023 – Dec 2023</span>
            </p>
            <ul className="text-[12px] m-[3px_0] pl-[15px] text-left">
              <li>Created a JavaScript app with API integration and dynamic UI.</li>
              <li>Styled with Tailwind CSS for a modern look.</li>
            </ul>
          </>
        )}
      </div>

      {/* Education */}
      <div className="m-[8px_0] p-[8px] bg-[#f9fafb]">
        <div className="text-[20px] font-bold text-[#1e40af] p-[3px_0] mb-[5px]">
          Education
        </div>
        {education && education.length > 0 && education[0].collegeName ? (
          education.map((edu, idx) => (
            <React.Fragment key={idx}>
              <p className="education-line flex justify-between text-[14px] m-[3px_0] text-left">
                <strong>
                  {edu.collegeName
                    ? edu.collegeName
                    : "University of Illinois, Chicago, IL"}
                </strong>
                <span>
                  {edu.endDate
                    ? `Expected ${edu.endDate}`
                    : "Expected May 2026"}
                </span>
              </p>
              <div className="education-details flex justify-between text-[12px] text-left">
                <span>
                  {edu.degree
                    ? edu.degree
                    : "B.S. in Computer Science"}
                </span>
                <span>
                  {edu.cgpa
                    ? `CGPA: ${edu.cgpa}/10`
                    : "CGPA: 8.5/10"}
                </span>
              </div>
            </React.Fragment>
          ))
        ) : (
          <>
            <p className="education-line flex justify-between text-[14px] m-[3px_0] text-left">
              <strong>University of Illinois, Chicago, IL</strong>
              <span>Expected May 2026</span>
            </p>
            <div className="education-details flex justify-between text-[12px] text-left">
              <span>B.S. in Computer Science</span>
              <span>CGPA: 8.5/10</span>
            </div>
          </>
        )}
      </div>

      {/* Hobbies */}
      <div className="m-[8px_0] p-[8px] bg-[#eff6ff]">
        <div className="text-[20px] font-bold text-[#1e40af] p-[3px_0] mb-[5px]">
          Hobbies
        </div>
        <ul className="text-[12px] m-[3px_0] pl-[15px] text-left">
          {additional.hobbies
            ? additional.hobbies
                .map((hobby, idx) => <li key={idx}>{hobby.trim()}</li>)
            : (
              <>
                <li>UI prototyping</li>
                <li>Sketching</li>
              </>
            )}
        </ul>
      </div>

      {/* Languages */}
      <div className="m-[8px_0] p-[8px] bg-[#f9fafb]">
        <div className="text-[20px] font-bold text-[#1e40af] p-[3px_0] mb-[5px]">
          Languages
        </div>
        <ul className="text-[12px] m-[3px_0] pl-[15px] text-left">
          {additional.languages && additional.languages.length > 0
            ? additional.languages.map((lang, idx) => (
                <li key={idx}>
                  {lang.name} {lang.proficiency && `(${lang.proficiency})`}
                </li>
              ))
            : (
              <>
                <li>English (Fluent)</li>
                <li>Vietnamese (Native)</li>
              </>
            )}
        </ul>
      </div>
    </div>
  );
};

export default Resume4;
