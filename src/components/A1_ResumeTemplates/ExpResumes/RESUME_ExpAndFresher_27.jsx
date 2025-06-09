import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";

const RESUME_ExpAndFresher_27 = () => {
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
          collegeName: "University of Washington, Seattle, WA",
          cgpa: "3.8/4.0",
          stream: "Web Development",
          startDate: "08/2021",
          endDate: "05/2025",
        },
      ];

  const projectsToDisplay = hasNonEmptyItem(projects)
    ? projects
    : [
        {
          name: "Portfolio Website",
          technologies: "React, HTML, CSS",
          companyName: "Personal Project",
          link: "https://github.com/rileyparker/portfolio",
          startDate: "09/2024",
          endDate: "10/2024",
          description: [
            "Built a responsive portfolio using React, HTML, and CSS.",
            "Added CSS animations, increasing user engagement by 30%.",
            "Deployed on Vercel, gaining 1,000+ views.",
          ],
        },
        {
          name: "E-Commerce UI",
          technologies: "HTML, CSS, JavaScript",
          companyName: "University Project",
          link: "https://github.com/rileyparker/ecommerce-ui",
          startDate: "03/2024",
          endDate: "04/2024",
          description: [
            "Developed a mock e-commerce interface with HTML, CSS, and JavaScript.",
            "Ensured WCAG 2.1 compliance with accessible features.",
            "Earned top project award from university faculty.",
          ],
        },
      ];

  const certificatesToDisplay = hasNonEmptyItem(certificates)
    ? certificates
    : [
        {
          name: "Responsive Web Design",
          organization: "freeCodeCamp",
          link: "https://freecodecamp.org/cert/responsive-web",
          issueDate: "07/2024",
        },
        {
          name: "JavaScript Basics",
          organization: "Coursera",
          link: "https://coursera.org/verify/js-basics",
          issueDate: "05/2024",
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
            "Developed responsive web pages with React and CSS, boosting user retention by 20%.",
            "Converted Figma designs into pixel-perfect code, meeting all client specifications.",
            "Optimized JavaScript functions, reducing page load times by 18%.",
          ],
        },
        {
          jobTitle: "Web Development Intern",
          companyName: "Creative Solutions Ltd., Seattle, WA",
          startDate: "01/2024",
          endDate: "05/2024",
          responsibilities: [
            "Coded interactive features for client websites, delivering 15% ahead of schedule.",
            "Ensured WCAG 2.1 compliance, improving accessibility for 5,000+ users.",
            "Refactored CSS for mobile optimization, enhancing performance across devices.",
          ],
        },
      ];

  const technicalSkills =
    skills.technical && skills.technical.length > 0
      ? skills.technical.join(", ")
      : "HTML5, CSS3, JavaScript, React";
  const designSkills =
    skills.related && skills.related.trim()
      ? skills.related
      : "Responsive Web Design, Figma, Adobe XD";
  const toolsSkills = "Git, GitHub";
  const standardsSkills = "Accessibility (WCAG)";
  const softSkills =
    skills.soft && skills.soft.length > 0
      ? skills.soft.join(", ")
      : "Agile Collaboration";

  const languagesToDisplay =
    additional.languages && additional.languages.length > 0
      ? additional.languages
      : [
          { name: "English", proficiency: "Native" },
          { name: "French", proficiency: "Intermediate" },
        ];

  const hobbiesToDisplay = additional.hobbies
    ? additional.hobbies.map((h) => h.trim())
    : ["Web Development", "Photography", "Cycling"];

  const achievementsToDisplay =
    additional.achievements && additional.achievements.length > 0
      ? additional.achievements
      : [
          {
            name: "Dean’s List",
            organization: "University of Washington",
            description: "",
            date: "2022-2024",
          },
          {
            name: "Hackathon Finalist",
            organization: "Seattle TechFest",
            description: "",
            date: "2023",
          },
        ];

  return (
    <div className="font-['Arial',sans-serif] text-[10pt] leading-[1.4] text-[#333] max-w-[595px] mx-auto my-[1in] p-[10px]">
      {/* Header */}
      <h1 className="text-[14pt] text-[#D35400] text-center mb-[10px]">
        {formData.firstName || formData.middleName || formData.lastName
          ? `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim()
          : "Riley Parker"}
      </h1>
      <div className="text-center text-[9pt] mb-[15px] border-b border-[#D35400] pb-[5px] flex flex-wrap justify-center gap-x-[10px]">
        <span>
          <a
            href={`mailto:${formData.email ? formData.email : "riley.parker@example.com"}`}
            className="text-[#333] no-underline hover:underline"
          >
            {formData.email ? formData.email : "riley.parker@example.com"}
          </a>
        </span>
        <span>|</span>
        <span>
          {formData.phoneNumber ? formData.phoneNumber : "(123) 456-7890"}
        </span>
        <span>|</span>
        <span>
          <a
            href={formData.linkedin ? formData.linkedin : "https://linkedin.com/in/rileyparker"}
            className="text-[#333] no-underline hover:underline"
          >
            {formData.linkedin
              ? formData.linkedin.replace(/^https?:\/\//, "")
              : "linkedin.com/in/rileyparker"}
          </a>
        </span>
        <span>|</span>
        <span>
          <a
            href={formData.github ? formData.github : "https://github.com/rileyparker"}
            className="text-[#333] no-underline hover:underline"
          >
            {formData.github
              ? formData.github.replace(/^https?:\/\//, "")
              : "github.com/rileyparker"}
          </a>
        </span>
        <span>|</span>
        <span>
          <a
            href={formData.otherLink ? formData.otherLink : "https://rileyparker.dev"}
            className="text-[#333] no-underline hover:underline"
          >
            {formData.otherLink
              ? formData.otherLink.replace(/^https?:\/\//, "")
              : "rileyparker.dev"}
          </a>
        </span>
        <span>|</span>
        <span>
          <a
            href={formData.figma ? formData.figma : "https://figma.com/@rileyparker"}
            className="text-[#333] no-underline hover:underline"
          >
            {formData.figma
              ? formData.figma.replace(/^https?:\/\//, "")
              : "figma.com/@rileyparker"}
          </a>
        </span>
        <span>|</span>
        <span>
          <a
            href={formData.leetcode ? formData.leetcode : "https://leetcode.com/rileyparker"}
            className="text-[#333] no-underline hover:underline"
          >
            {formData.leetcode
              ? formData.leetcode.replace(/^https?:\/\//, "")
              : "leetcode.com/rileyparker"}
          </a>
        </span>
        <span>|</span>
        <span>
          {formData.city || formData.state || formData.pincode
            ? `${formData.city}${formData.city ? ", " : ""}${formData.state}${formData.state ? ", " : ""}${formData.pincode}`
            : "Seattle, WA"}
        </span>
      </div>

      {/* Professional Summary */}
      <div className="ml-[5px] mb-[15px]">
        <h2 className="text-[12pt] text-[#D35400] m-[15px_0_5px] border-b-2 border-dashed-[#D35400] pb-[3px]">
          Professional Summary
        </h2>
        <p>
          {summary
            ? summary
            : `Enthusiastic Front-End Developer with hands-on internship experience in HTML, CSS, JavaScript, and React. Skilled in building responsive, accessible web interfaces, improving user retention by 20% at TechTrend Innovations. Eager to collaborate on innovative projects and deliver exceptional user experiences.`}
        </p>
      </div>

      {/* Skills */}
      <div className="mr-[5px] mb-[15px]">
        <h2 className="text-[12pt] text-[#D35400] m-[15px_0_5px] border-b-2 border-dashed-[#D35400] pb-[3px]">
          Skills
        </h2>
        <ul className="my-[5px] pl-[20px]">
          <li className="mb-[3px]">{technicalSkills}</li>
          <li className="mb-[3px]">{designSkills}</li>
          <li className="mb-[3px]">{toolsSkills}</li>
          <li className="mb-[3px]">{standardsSkills}</li>
          <li className="mb-[3px]">{softSkills}</li>
        </ul>
      </div>

 {/* Projects */}
      <div className="mr-[5px] mb-[15px]">
        <h2 className="text-[12pt] text-[#D35400] m-[15px_0_5px] border-b-2 border-dashed-[#D35400] pb-[3px]">
          Projects
        </h2>
        {projectsToDisplay.map((project, i) => (
          <div className="flex justify-between mb-[10px]" key={i}>
            <div className="flex-1">
              <p className="font-bold my-[2px]">{project.name}</p>
              <p className="my-[2px]">
                {project.companyName} •{" "}
                <a
                  href={project.link}
                  className="text-[#333] no-underline hover:underline"
                >
                  {project.link.replace(/^https?:\/\//, "")}
                </a>
              </p>
              <ul className="my-[5px] pl-[20px]">
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
              </ul>
            </div>
            <div className="w-[120px] text-right text-[9pt] text-[#555]">
              <p className="my-[2px]">
                {project.startDate} - {project.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>


      {/* Education */}
      <div className="mr-[5px] mb-[15px]">
        <h2 className="text-[12pt] text-[#D35400] m-[15px_0_5px] border-b-2 border-dashed-[#D35400] pb-[3px]">
          Education
        </h2>
        {educationToDisplay.map((edu, i) => (
          <div className="flex justify-between" key={i}>
            <div className="flex-1">
              <p className="font-bold my-[2px]">{edu.degree}</p>
              <p className="my-[2px]">{edu.collegeName}</p>
            </div>
            <div className="w-[120px] text-right text-[9pt] text-[#555]">
              <p className="my-[2px]">
                {edu.startDate} - {edu.endDate}
              </p>
              <p className="my-[2px]">CGPA: {edu.cgpa}</p>
            </div>
          </div>
        ))}
      </div>


      {/* Work Experience */}
      <div className="ml-[5px] mb-[15px]">
        <h2 className="text-[12pt] text-[#D35400] m-[15px_0_5px] border-b-2 border-dashed-[#D35400] pb-[3px]">
          Work Experience
        </h2>
        {workExperienceToDisplay.map((exp, i) => (
          <div className="flex justify-between mb-[10px]" key={i}>
            <div className="flex-1">
              <p className="font-bold my-[2px]">{exp.jobTitle}</p>
              <p className="my-[2px]">{exp.companyName}</p>
              <ul className="my-[5px] pl-[20px]">
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
            <div className="w-[120px] text-right text-[9pt] text-[#555]">
              <p className="my-[2px]">
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>

     
      {/* Certificates */}
      <div className="ml-[5px] mb-[15px]">
        <h2 className="text-[12pt] text-[#D35400] m-[15px_0_5px] border-b-2 border-dashed-[#D35400] pb-[3px]">
          Certificates
        </h2>
        {certificatesToDisplay.map((cert, i) => (
          <div className="flex justify-between mb-[10px]" key={i}>
            <div className="flex-1">
              <p className="font-bold my-[2px]">{cert.name}</p>
              <p className="my-[2px]">
                {cert.organization} •{" "}
                {cert.link && (
                  <a
                    href={cert.link}
                    className="text-[#333] no-underline hover:underline"
                  >
                    {cert.link.replace(/^https?:\/\//, "")}
                  </a>
                )}
              </p>
            </div>
            <div className="w-[120px] text-right text-[9pt] text-[#555]">
              <p className="my-[2px]">{cert.issueDate}</p>
            </div>
          </div>
        ))}
      </div>

      

      {/* Languages */}
      <div className="ml-[5px] mb-[15px]">
        <h2 className="text-[12pt] text-[#D35400] m-[15px_0_5px] border-b-2 border-dashed-[#D35400] pb-[3px]">
          Languages
        </h2>
        <p className="my-[5px]">
          {languagesToDisplay
            .map((l) => `${l.name} (${l.proficiency})`)
            .join(", ")}
        </p>
      </div>

      {/* Hobbies */}
      <div className="mr-[5px] mb-[15px]">
        <h2 className="text-[12pt] text-[#D35400] m-[15px_0_5px] border-b-2 border-dashed-[#D35400] pb-[3px]">
          Hobbies & Interests
        </h2>
        <p className="my-[5px]">{hobbiesToDisplay.join(", ")}</p>
      </div>

      {/* Achievements */}
      <div className="ml-[5px] mb-[15px]">
        <h2 className="text-[12pt] text-[#D35400] m-[15px_0_5px] border-b-2 border-dashed-[#D35400] pb-[3px]">
          Achievements & Awards
        </h2>
        {achievementsToDisplay.map((ach, i) => (
          <div className="flex justify-between mb-[10px]" key={i}>
            <div className="flex-1">
              <p className="font-bold my-[2px]">{ach.name}</p>
              <p className="my-[2px]">
                {ach.organization ? ach.organization : ""}
                {ach.description ? <> – {ach.description}</> : ""}
              </p>
            </div>
            <div className="w-[120px] text-right text-[9pt] text-[#555]">
              <p className="my-[2px]">{ach.date ? ach.date : ""}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_27;
