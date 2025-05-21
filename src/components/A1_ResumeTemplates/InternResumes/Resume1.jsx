import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";
 // Adjust the path as needed

// Header Component
const Header = ({ formData }) => (
  <div className="bg-[#dfe6e9] p-4 text-center shadow-md">
    <h1 className="text-[26px] text-[#3498db] uppercase font-bold">
      {formData.firstName
        ? `${formData.firstName} ${formData.middleName ? formData.middleName + " " : ""}${formData.lastName}`
        : "Ethan Lee"}
    </h1>
    <div className="text-[12px] text-[#636e72] mt-2">
      <p>
        <a
          href={`mailto:${formData.email ? formData.email : "ethan.lee@email.com"}`}
          className="text-blue-500 hover:underline"
        >
          {formData.email ? formData.email : "ethan.lee@email.com"}
        </a>{" "}
        | {formData.phoneNumber ? formData.phoneNumber : "+1 503 555-9876"} |{" "}
        {formData.city && formData.state
          ? `${formData.city}, ${formData.state}`
          : "Portland, OR"}{" "}
        |{" "}
        <a
          href={formData.linkedin ? formData.linkedin : "https://linkedin.com/in/ethanlee"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {formData.linkedin
            ? formData.linkedin.replace(/^https?:\/\//, "")
            : "LinkedIn"}
        </a>{" "}
        |{" "}
        <a
          href={formData.github ? formData.github : "https://github.com/ethanlee"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {formData.github
            ? formData.github.replace(/^https?:\/\//, "")
            : "GitHub"}
        </a>
      </p>
    </div>
  </div>
);

// Section Component
const Section = ({ title, children }) => (
  <div className="my-4 p-4 bg-white border-l-4 border-blue-400 rounded-md">
    <div className="text-[20px] font-bold text-blue-500">{title}</div>
    <div className="text-[12px] mt-2">{children}</div>
  </div>
);

const Resume1 = () => {
  const {
    formData,
    summary,
    skills,
    projects,
    education,
    certificates,
    additional,
  } = useResume();

  return (
    <div className="font-sans w-[794px] mx-auto my-[35px] p-5 bg-[#f5f6fa] text-[#333] overflow-x-hidden">
      {/* Header */}
      <Header formData={formData} />

      {/* Summary */}
      <Section title="Summary">
        <p>
          {summary
            ? summary
            : "Aspiring Software Engineer Intern with proficiency in Python, C++, and software development. Eager to learn coding, debugging, and teamwork in a tech environment."}
        </p>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <ul className="list-disc pl-5">
          <li>
            Technical Skills:{" "}
            {skills.technical && skills.technical.length > 0
              ? skills.technical.join(", ")
              : "Python, C++, HTML/CSS"}
          </li>

          <li>
            Soft Skills:{" "}
            {skills.soft && skills.soft.length > 0
              ? skills.soft.join(", ")
              : "Communication, Team Work"}
          </li>
        </ul>
      </Section>

      {/* Projects */}
      <Section title="Projects">
        {projects && projects.length > 0 && projects[0].name ? (
          projects.map((project, idx) => (
            <div key={idx} className={idx > 0 ? "mt-4" : ""}>
              <p>
                <strong className="text-[14px]">
                  {project.name ? project.name : "Chatbot Prototype"}
                </strong>{" "}
                -{" "}
                {project.summary
                  ? project.summary
                  : idx === 0
                  ? "Personal Project"
                  : "Course Project"}{" "}
                -{" "}
                {project.startDate && project.endDate
                  ? `${project.startDate} – ${project.endDate}`
                  : idx === 0
                  ? "Feb 2024 – Apr 2024"
                  : "Oct 2023 – Dec 2023"}
              </p>
              <ul className="list-disc pl-5">
                {project.description
                  ? project.description
                      .split("\n")
                      .map((desc, i) => <li key={i}>{desc}</li>)
                  : idx === 0
                  ? [
                      <li key="1">Developed a Python chatbot with NLP for high accuracy.</li>,
                      <li key="2">Deployed using Docker containers.</li>,
                    ]
                  : [
                      <li key="1">Built a C++ grade calculator with optimization techniques.</li>,
                      <li key="2">Added input validation for reliability.</li>,
                    ]}
              </ul>
            </div>
          ))
        ) : (
          <>
            <div>
              <p>
                <strong className="text-[14px]">Chatbot Prototype</strong> -
                Personal Project - Feb 2024 – Apr 2024
              </p>
              <ul className="list-disc pl-5">
                <li>Developed a Python chatbot with NLP for high accuracy.</li>
                <li>Deployed using Docker containers.</li>
              </ul>
            </div>
            <div className="mt-4">
              <p>
                <strong className="text-[14px]">Grade Tracker</strong> - Course
                Project - Oct 2023 – Dec 2023
              </p>
              <ul className="list-disc pl-5">
                <li>Built a C++ grade calculator with optimization techniques.</li>
                <li>Added input validation for reliability.</li>
              </ul>
            </div>
          </>
        )}
      </Section>

      {/* Education */}
      <Section title="Education">
        {education && education.length > 0 && education[0].collegeName ? (
          education.map((edu, idx) => (
            <div key={idx}>
              <p className="text-[14px]">
                {edu.degree
                  ? edu.degree
                  : "B.S. in Computer Science"}{" "}
                {edu.endDate
                  ? `(Expected ${edu.endDate})`
                  : "(Expected June 2026)"}
              </p>
              <p>
                {edu.collegeName
                  ? edu.collegeName
                  : "Oregon State University, Corvallis, OR"}
              </p>
            </div>
          ))
        ) : (
          <>
            <p className="text-[14px]">
              B.S. in Computer Science (Expected June 2026)
            </p>
            <p>Oregon State University, Corvallis, OR</p>
          </>
        )}
      </Section>

      {/* Certifications */}
      <Section title="Certifications">
        {certificates && certificates.length > 0 && certificates[0].name ? (
          certificates.map((cert, idx) => (
            <p key={idx}>
              <strong className="text-[14px]">
                {cert.name ? cert.name : "Machine Learning Fundamentals"}
              </strong>{" "}
              - {cert.organization ? cert.organization : "Coursera"} -{" "}
              {cert.issueDate ? cert.issueDate : "Jan 2024"}
            </p>
          ))
        ) : (
          <>
            <p>
              <strong className="text-[14px]">Machine Learning Fundamentals</strong>{" "}
              - Coursera - Jan 2024
            </p>
            <p>
              <strong className="text-[14px]">Python for Data Science</strong> - IBM
              - Dec 2023
            </p>
          </>
        )}
      </Section>

      {/* Hobbies */}
      <Section title="Hobbies">
        <ul className="list-disc pl-5">
          {additional.hobbies
            ? additional.hobbies
                .map((hobby, idx) => <li key={idx}>{hobby.trim()}</li>)
            : (
              <>
                <li>Coding side projects</li>
                <li>Playing strategy games</li>
              </>
            )}
        </ul>
      </Section>

      {/* Languages */}
      <Section title="Languages">
        <ul className="list-disc pl-5">
          {additional.languages && additional.languages.length > 0
            ? additional.languages.map((lang, idx) => (
                <li key={idx}>
                  {lang.name} {lang.proficiency && `(${lang.proficiency})`}
                </li>
              ))
            : (
              <>
                <li>English (Fluent)</li>
                <li>Mandarin (Intermediate)</li>
              </>
            )}
        </ul>
      </Section>
    </div>
  );
};

export default Resume1;
