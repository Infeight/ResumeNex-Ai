import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const Resume2 = () => {
  const {
    formData,
    summary,
    skills,
    projects,
    education,
    additional,
  } = useResume();

  return (
    <div className="font-sans w-[794px] mx-auto my-[35px] p-5 bg-[#f9fbfc] text-[#444] leading-[1.7] overflow-x-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#dfe9f3] to-[#b3cde0] p-[30px] text-center border-b-[3px] border-[#6497b1] shadow-md">
        <h1 className="text-[32px] font-bold text-[#003366]">
          {formData.firstName || formData.middleName || formData.lastName
            ? `${formData.firstName} ${formData.middleName ? formData.middleName + " " : ""}${formData.lastName}`
            : "Ava Patel"}
        </h1>
        <div className="text-[14px] mt-[10px] text-[#005b96]">
          <p>
            <a
              href={`mailto:${formData.email ? formData.email : "ava.patel@email.com"}`}
              className="hover:underline"
            >
              {formData.email ? formData.email : "ava.patel@email.com"}
            </a>{" "}
            | {formData.phoneNumber ? formData.phoneNumber : "+1 303 555-1234"} |{" "}
            {formData.city && formData.state
              ? `${formData.city}, ${formData.state}`
              : "Denver, CO"}{" "}
            |{" "}
            <a
              href={formData.linkedin ? formData.linkedin : "https://linkedin.com/in/avapatel"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {formData.linkedin
                ? formData.linkedin.replace(/^https?:\/\//, "")
                : "LinkedIn"}
            </a>{" "}
            |{" "}
            <a
              href={formData.github ? formData.github : "https://github.com/avapatel"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {formData.github
                ? formData.github.replace(/^https?:\/\//, "")
                : "GitHub"}
            </a>
          </p>
        </div>
      </header>

      {/* Summary */}
      <section className="bg-white p-[25px] my-[25px] rounded-lg shadow-sm">
        <h2 className="text-[20px] font-semibold text-[#005b96] border-b-2 border-dashed border-[#6497b1] pb-[5px]">
          Summary
        </h2>
        <p className="text-[14px] mt-[15px]">
          {summary
            ? summary
            : "Computer Science student proficient in Python, Java, and software development. Seeking a Software Engineer Intern role to apply coding, debugging, and innovative problem-solving skills."}
        </p>
      </section>

      {/* Skills */}
      <section className="bg-white p-[25px] my-[25px] rounded-lg shadow-sm">
        <h2 className="text-[20px] font-semibold text-[#005b96] border-b-2 border-dashed border-[#6497b1] pb-[5px]">
          Skills
        </h2>
        <ul className="list-disc list-inside text-[14px] mt-[15px] leading-[1.8]">
          <li>
            <strong>Languages:</strong>{" "}
            {skills.technical && skills.technical.length > 0
              ? skills.technical.join(", ")
              : "Python, Java, JavaScript"}
          </li>
          <li>
            <strong>Tools:</strong>{" "}
            {skills.related
              ? skills.related
              : "Git, GitHub, VS Code"}
          </li>
          <li>
            <strong>Soft skills:</strong>{" "}
            {skills.soft && skills.soft.length > 0
              ? skills.soft.join(", ")
              : "Communication, Team work"}
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section className="bg-white p-[25px] my-[25px] rounded-lg shadow-sm">
        <h2 className="text-[20px] font-semibold text-[#005b96] border-b-2 border-dashed border-[#6497b1] pb-[5px]">
          Projects
        </h2>
        {projects && projects.length > 0 && projects[0].name ? (
          projects.map((project, idx) => (
            <div className={idx > 0 ? "mt-[20px]" : "mt-[15px]"} key={idx}>
              <h3 className="text-[16px] font-bold">
                {project.name ? project.name : idx === 0 ? "Task Manager App" : "Portfolio Website"}
              </h3>
              <p className="text-[14px]">
                {project.summary
                  ? project.summary
                  : idx === 0
                  ? "Personal Project"
                  : "University Project"}{" "}
                |{" "}
                {project.startDate && project.endDate
                  ? `${project.startDate} – ${project.endDate}`
                  : idx === 0
                  ? "Jan 2024 – Mar 2024"
                  : "Sep 2023 – Dec 2023"}
              </p>
              <ul className="list-disc list-inside text-[14px] mt-[5px] leading-[1.8]">
                {project.description
                  ? project.description
                      .split("\n")
                      .map((desc, i) => <li key={i}>{desc}</li>)
                  : idx === 0
                  ? [
                      <li key="1">Developed a Python CLI app with file I/O for task management.</li>,
                      <li key="2">Debugged for seamless functionality.</li>,
                    ]
                  : [
                      <li key="1">Built a responsive site with HTML, CSS, JavaScript.</li>,
                      <li key="2">Hosted on GitHub Pages with optimization.</li>,
                    ]}
              </ul>
            </div>
          ))
        ) : (
          <>
            <div className="mt-[15px]">
              <h3 className="text-[16px] font-bold">Task Manager App</h3>
              <p className="text-[14px]">Personal Project | Jan 2024 – Mar 2024</p>
              <ul className="list-disc list-inside text-[14px] mt-[5px] leading-[1.8]">
                <li>
                  Developed a Python CLI app with file I/O for task management.
                </li>
                <li>Debugged for seamless functionality.</li>
              </ul>
            </div>
            <div className="mt-[20px]">
              <h3 className="text-[16px] font-bold">Portfolio Website</h3>
              <p className="text-[14px]">
                University Project | Sep 2023 – Dec 2023
              </p>
              <ul className="list-disc list-inside text-[14px] mt-[5px] leading-[1.8]">
                <li>Built a responsive site with HTML, CSS, JavaScript.</li>
                <li>Hosted on GitHub Pages with optimization.</li>
              </ul>
            </div>
          </>
        )}
      </section>

      {/* Education */}
      <section className="bg-white p-[25px] my-[25px] rounded-lg shadow-sm">
        <h2 className="text-[20px] font-semibold text-[#005b96] border-b-2 border-dashed border-[#6497b1] pb-[5px]">
          Education
        </h2>
        {education && education.length > 0 && education[0].collegeName ? (
          education.map((edu, idx) => (
            <p className="text-[14px] mt-[15px]" key={idx}>
              {edu.degree
                ? edu.degree
                : "B.S. in Computer Science"}{" "}
              {edu.endDate
                ? `(Expected ${edu.endDate})`
                : "(Expected May 2026)"}
              <br />
              {edu.collegeName
                ? edu.collegeName
                : "University of Colorado, Boulder, CO"}
            </p>
          ))
        ) : (
          <p className="text-[14px] mt-[15px]">
            B.S. in Computer Science (Expected May 2026)
            <br />
            University of Colorado, Boulder, CO
          </p>
        )}
      </section>

      {/* Hobbies */}
      <section className="bg-white p-[25px] my-[25px] rounded-lg shadow-sm">
        <h2 className="text-[20px] font-semibold text-[#005b96] border-b-2 border-dashed border-[#6497b1] pb-[5px]">
          Hobbies
        </h2>
        <ul className="list-disc list-inside text-[14px] mt-[15px] leading-[1.8]">
          {additional.hobbies
            ? additional.hobbies
                .map((hobby, idx) => <li key={idx}>{hobby.trim()}</li>)
            : (
              <>
                <li>Building open-source tools</li>
                <li>Hiking</li>
              </>
            )}
        </ul>
      </section>

      {/* Languages */}
      <section className="bg-white p-[25px] my-[25px] rounded-lg shadow-sm">
        <h2 className="text-[20px] font-semibold text-[#005b96] border-b-2 border-dashed border-[#6497b1] pb-[5px]">
          Languages
        </h2>
        <ul className="list-disc list-inside text-[14px] mt-[15px] leading-[1.8]">
          {additional.languages && additional.languages.length > 0
            ? additional.languages.map((lang, idx) => (
                <li key={idx}>
                  {lang.name} {lang.proficiency && `(${lang.proficiency})`}
                </li>
              ))
            : (
              <>
                <li>English (Fluent)</li>
                <li>Spanish (Intermediate)</li>
              </>
            )}
        </ul>
      </section>
    </div>
  );
};

export default Resume2;
