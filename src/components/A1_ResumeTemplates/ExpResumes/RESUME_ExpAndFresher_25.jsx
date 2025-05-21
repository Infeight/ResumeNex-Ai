import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";

const RESUME_ExpAndFresher_25 = () => {
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

  // Helper to check if any object in array has a non-empty value
  const hasNonEmptyItem = (arr) =>
    Array.isArray(arr) &&
    arr.some((item) =>
      Object.values(item).some(
        (val) =>
          (Array.isArray(val) && val.length > 0) ||
          (typeof val === "string" && val.trim() !== "")
      )
    );

  // Fallbacks
  const educationToDisplay = hasNonEmptyItem(education)
    ? education
    : [
        {
          degree: "Bachelor of Science in Computer Science",
          collegeName: "University of Texas, Austin, TX",
          stream: "Web Development",
          cgpa: "8.5/10",
          startDate: "08/2021",
          endDate: "05/2025",
        },
      ];

  const projectsToDisplay = hasNonEmptyItem(projects)
    ? projects
    : [
        {
          name: "Portfolio Website",
          technologies: "HTML, CSS, JavaScript",
          startDate: "03/2024",
          endDate: "04/2024",
          description: [
            "Designed a responsive portfolio, showcasing 5+ projects.",
            "Optimized for SEO, increasing traffic by 20%.",
          ],
          link: "https://github.com/rileyparker/portfolio",
        },
        {
          name: "Task Manager App",
          technologies: "React.js, CSS",
          startDate: "11/2023",
          endDate: "12/2023",
          description: [
            "Built a dynamic app with real-time task updates.",
            "Implemented responsive design for mobile users.",
          ],
          link: "https://github.com/rileyparker/task-manager",
        },
      ];

  const certificationsToDisplay = hasNonEmptyItem(certificates)
    ? certificates
    : [
        {
          name: "Responsive Web Design",
          organization: "freeCodeCamp",
          issueDate: "May 2024",
          expiryDate: "No Expiry",
          link: "https://freecodecamp.org/certification/responsive-web",
        },
        {
          name: "JavaScript Algorithms",
          organization: "freeCodeCamp",
          issueDate: "Feb 2024",
          expiryDate: "No Expiry",
          link: "https://freecodecamp.org/certification/javascript",
        },
      ];

  const workExperienceToDisplay = hasNonEmptyItem(workExperience)
    ? workExperience
    : [
        {
          jobTitle: "Front-End Developer Intern",
          companyName: "TechTrend Innovations, Remote",
          startDate: "06/2024",
          endDate: "08/2024",
          responsibilities: [
            "Built responsive web pages with HTML and CSS, boosting user retention by 15%.",
            "Translated Figma designs into pixel-perfect code, meeting client specifications.",
            "Optimized CSS for faster page loads, cutting render time by 18%.",
          ],
        },
        {
          jobTitle: "Web Development Intern",
          companyName: "Creative Solutions Ltd., Austin, TX",
          startDate: "01/2024",
          endDate: "05/2024",
          responsibilities: [
            "Coded client-facing website features, delivering ahead of schedule.",
            "Ensured WCAG 2.1 compliance, improving accessibility for 5,000+ users.",
            "Refactored CSS, enhancing mobile performance across devices.",
          ],
        },
      ];

  const technicalSkills =
    skills.technical && skills.technical.length > 0
      ? skills.technical.join(", ")
      : "HTML5, CSS3, JavaScript, React.js";

  const designSkills =
    skills.related && skills.related.trim()
      ? skills.related
      : "Responsive Web Design, Figma, Adobe XD";

  const toolsSkills = "Git, GitHub, VS Code";
  const standardsSkills = "Accessibility (WCAG), SEO";

  const softSkills =
    skills.soft && skills.soft.length > 0
      ? skills.soft.join(", ")
      : "Collaboration, Problem-Solving, Communication";

  const languagesToDisplay =
    additional.languages && additional.languages.length > 0
      ? additional.languages
      : [{ name: "English", proficiency: "Fluent" }, { name: "Spanish", proficiency: "Beginner" }];

  const hobbiesToDisplay = additional.hobbies
    ? additional.hobbies.map((h) => h.trim())
    : ["Open-Source Contribution", "UI/UX Design", "Hiking"];

  const achievementsToDisplay =
    additional.achievements && additional.achievements.length > 0
      ? additional.achievements
      : [
          {
            name: "Hackathon Finalist – CodeFest 2024",
            description: "Developed an accessible web app",
          },
          {
            name: "Dean’s List – University of Texas, 2023",
            description: "Recognized for academic excellence",
          },
        ];

  return (
    <div className="font-sans text-[#333] bg-gray-100 min-h-screen flex justify-center items-start">
      <div className="bg-white" style={{ width: "794px", padding: "20px" }}>
        {/* Header */}
        <h1 className="text-[26px] font-bold text-[#D32F2F] text-center mb-[10px]">
          {formData.firstName || formData.middleName || formData.lastName
            ? `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim()
            : "Riley Parker"}
        </h1>
        <div className="bg-[#FFEBEE] py-[8px] text-center mb-[15px]">
          <p className="text-[12px] m-[2px_0]">
            <a
              href={`mailto:${formData.email ? formData.email : "riley.parker@example.com"}`}
              className="text-[#0000EE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {formData.email ? formData.email : "riley.parker@example.com"}
            </a>
          </p>
          <p className="text-[12px] m-[2px_0]">
            {formData.phoneNumber ? formData.phoneNumber : "(123) 456-7890"}
          </p>
          <p className="text-[12px] m-[2px_0]">
            <a
              href={formData.linkedin ? formData.linkedin : "https://linkedin.com/in/rileyparker"}
              className="text-[#0000EE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {formData.linkedin
                ? formData.linkedin.replace(/^https?:\/\//, "")
                : "linkedin.com/in/rileyparker"}
            </a>
          </p>
          <p className="text-[12px] m-[2px_0]">
            <a
              href={formData.otherLink ? formData.otherLink : "https://portfolio.rileyparker.com"}
              className="text-[#0000EE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {formData.otherLink
                ? formData.otherLink.replace(/^https?:\/\//, "")
                : "portfolio.rileyparker.com"}
            </a>
          </p>
          <p className="text-[12px] m-[2px_0]">
            <a
              href={formData.github ? formData.github : "https://github.com/rileyparker"}
              className="text-[#0000EE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {formData.github
                ? formData.github.replace(/^https?:\/\//, "")
                : "github.com/rileyparker"}
            </a>
          </p>
          <p className="text-[12px] m-[2px_0]">
            <a
              href={formData.figma ? formData.figma : "https://figma.com/@rileyparker"}
              className="text-[#0000EE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {formData.figma
                ? formData.figma.replace(/^https?:\/\//, "")
                : "figma.com/@rileyparker"}
            </a>
          </p>
          <p className="text-[12px] m-[2px_0]">
            <a
              href={formData.leetcode ? formData.leetcode : "https://leetcode.com/rileyparker"}
              className="text-[#0000EE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {formData.leetcode
                ? formData.leetcode.replace(/^https?:\/\//, "")
                : "leetcode.com/rileyparker"}
            </a>
          </p>
          <p className="text-[12px] m-[2px_0]">
            {formData.city || formData.state || formData.pincode
              ? `${formData.city}${formData.city ? ", " : ""}${formData.state}${formData.state ? ", " : ""}${formData.pincode}`
              : "Austin, TX, 78701"}
          </p>
        </div>

        {/* Professional Summary */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-[#D32F2F] mb-[5px] relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-[#D32F2F] after:mt-[3px] after:rounded">
            Professional Summary
          </h2>
          <p className="text-[12px] leading-[1.4]">
            {summary
              ? summary
              : `Proactive Front-End Developer with internship experience in HTML, CSS, and JavaScript, delivering responsive and accessible web interfaces. Collaborated on cross-functional teams to enhance user retention by 15% at TechTrend Innovations. Passionate about optimizing performance and ensuring WCAG-compliant designs for seamless user experiences.`}
          </p>
        </div>

        {/* Skills */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-[#D32F2F] mb-[5px] relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-[#D32F2F] after:mt-[3px] after:rounded">
            Skills
          </h2>
          <ul className="list-disc pl-[20px] text-[12px] m-[5px_0]">
            <li className="mb-[3px]">Technical: {technicalSkills}</li>
            <li className="mb-[3px]">Design: {designSkills}</li>
            <li className="mb-[3px]">Tools: {toolsSkills}</li>
            <li className="mb-[3px]">Standards: {standardsSkills}</li>
            <li className="mb-[3px]">Soft: {softSkills}</li>
          </ul>
        </div>

        {/* Work Experience */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-[#D32F2F] mb-[5px] relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-[#D32F2F] after:mt-[3px] after:rounded">
            Work Experience
          </h2>
          {workExperienceToDisplay.map((exp, i) => (
            <div className="flex justify-between mb-[10px]" key={i}>
              <div className="flex-1">
                <p className="text-[12px] font-bold">{exp.jobTitle}</p>
                <p className="text-[12px]">{exp.companyName}</p>
                <ul className="list-disc pl-[20px] text-[12px] m-[5px_0]">
                  {(Array.isArray(exp.responsibilities)
                    ? exp.responsibilities
                    : exp.responsibilities
                    ? exp.responsibilities.split("\n")
                    : []
                  ).map((item, idx) => (
                    <li className="mb-[3px]" key={idx}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-[120px] text-right text-[12px] text-[#555]">
                <p>
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-[#D32F2F] mb-[5px] relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-[#D32F2F] after:mt-[3px] after:rounded">
            Education
          </h2>
          {educationToDisplay.map((edu, i) => (
            <div className="flex justify-between" key={i}>
              <div className="flex-1">
                <p className="text-[12px] font-bold">{edu.degree}</p>
                <p className="text-[12px]">
                  {edu.collegeName}
                  <br />
                  Stream: {edu.stream}
                </p>
              </div>
              <div className="w-[120px] text-right text-[12px] text-[#555]">
                <p>
                  {edu.startDate} - {edu.endDate}
                </p>
                <p>CGPA: {edu.cgpa}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-[#D32F2F] mb-[5px] relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-[#D32F2F] after:mt-[3px] after:rounded">
            Projects
          </h2>
          {projectsToDisplay.map((project, i) => (
            <div className="flex justify-between mb-[10px]" key={i}>
              <div className="flex-1">
                <p className="text-[12px] font-bold">{project.name}</p>
                <p className="text-[12px]">
                  Technologies: {project.technologies}
                </p>
                <ul className="list-disc pl-[20px] text-[12px] m-[5px_0]">
                  {(Array.isArray(project.description)
                    ? project.description
                    : project.description
                    ? project.description.split("\n")
                    : []
                  ).map((desc, idx) => (
                    <li className="mb-[3px]" key={idx}>
                      {desc}
                    </li>
                  ))}
                  {project.link && (
                    <li className="mb-[3px]">
                      <a
                        href={project.link}
                        className="text-[#0000EE] underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.link.replace(/^https?:\/\//, "")}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
              <div className="w-[120px] text-right text-[12px] text-[#555]">
                <p>
                  {project.startDate} - {project.endDate}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-[#D32F2F] mb-[5px] relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-[#D32F2F] after:mt-[3px] after:rounded">
            Certifications
          </h2>
          <ul className="list-disc pl-[20px] text-[12px] m-[5px_0]">
            {certificationsToDisplay.map((cert, i) => (
              <li className="mb-[3px]" key={i}>
                {cert.name} {cert.organization && <>– {cert.organization}</>}
                <br />
                Issued: {cert.issueDate}, {cert.expiryDate}
                <br />
                {cert.link && (
                  <a
                    href={cert.link}
                    className="text-[#0000EE] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cert.link.replace(/^https?:\/\//, "")}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Information */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-[#D32F2F] mb-[5px] relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-[#D32F2F] after:mt-[3px] after:rounded">
            Additional Information
          </h2>
          <div className="text-[12px]">
            <div className="font-bold">Languages</div>
            <ul className="list-disc pl-[20px] m-[5px_0]">
              <li className="mb-[3px]">
                {languagesToDisplay
                  .map((l) => `${l.name} (${l.proficiency})`)
                  .join(", ")}
              </li>
            </ul>
            <div className="font-bold mt-[5px]">Hobbies & Interests</div>
            <ul className="list-disc pl-[20px] m-[5px_0]">
              <li className="mb-[3px]">{hobbiesToDisplay.join(", ")}</li>
            </ul>
            <div className="font-bold mt-[5px]">Achievements & Awards</div>
            <ul className="list-disc pl-[20px] m-[5px_0]">
              {achievementsToDisplay.map((ach, i) => (
                <li className="mb-[3px]" key={i}>
                  {ach.name}
                  <br />
                  {ach.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_25;
