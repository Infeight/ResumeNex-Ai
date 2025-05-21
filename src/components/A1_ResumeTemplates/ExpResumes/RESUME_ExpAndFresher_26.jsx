import React from "react";

import { useResume } from "../../AIResume/FormSteps/resumecontext";

const RESUME_ExpAndFresher_26 = () => {
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
          technologies: "React, Tailwind CSS",
          companyName: "Personal Project",
          link: "https://github.com/jamiecarter/portfolio",
          startDate: "09/2024",
          endDate: "10/2024",
          description: [
            "Built a responsive portfolio with React and Tailwind CSS.",
            "Added smooth animations, increasing user dwell time by 25%.",
            "Deployed on Vercel, attracting 1,000+ visitors.",
          ],
        },
        {
          name: "E-Commerce UI",
          technologies: "HTML, CSS, JavaScript",
          companyName: "University Project",
          link: "https://github.com/jamiecarter/ecommerce-ui",
          startDate: "03/2024",
          endDate: "04/2024",
          description: [
            "Created a mock e-commerce interface using HTML, CSS, and JavaScript.",
            "Achieved WCAG 2.1 compliance with accessible navigation.",
            "Won best project award in university competition.",
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
            "Developed responsive web pages with React and CSS, increasing user retention by 20%.",
            "Converted Figma designs into pixel-perfect code, meeting 100% of client requirements.",
            "Optimized JavaScript performance, reducing load times by 15%.",
          ],
        },
        {
          jobTitle: "Web Development Intern",
          companyName: "Creative Solutions Ltd., Austin, TX",
          startDate: "01/2024",
          endDate: "05/2024",
          responsibilities: [
            "Coded interactive website features, completing tasks 10% ahead of schedule.",
            "Ensured WCAG 2.1 compliance, enhancing accessibility for 5,000+ users.",
            "Refactored CSS for mobile-first design, improving cross-device performance.",
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
      : "Team Collaboration";

  const languagesToDisplay =
    additional.languages && additional.languages.length > 0
      ? additional.languages
      : [
          { name: "English", proficiency: "Native" },
          { name: "Spanish", proficiency: "Intermediate" },
        ];

  const hobbiesToDisplay = additional.hobbies
    ? additional.hobbies.map((h) => h.trim())
    : ["Web Development", "Graphic Design", "Hiking"];

  const achievementsToDisplay =
    additional.achievements && additional.achievements.length > 0
      ? additional.achievements
      : [
          {
            name: "Dean’s List",
            organization: "University of Texas",
            description: "",
            date: "2022-2024",
          },
          {
            name: "Hackathon Winner",
            organization: "Austin CodeFest",
            description: "",
            date: "2023",
          },
        ];

  return (
    <div className="font-['Arial',sans-serif] text-[10pt] leading-[1.4] text-[#333] max-w-[595px] mx-auto my-[1in] p-[10px]">
      {/* Header */}
      <h1 className="text-[14pt] mb-[10px] text-[#37474F] text-center border-b-4 border-double-[#37474F]">
        {formData.firstName || formData.middleName || formData.lastName
          ? `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim()
          : "Jamie Carter"}
      </h1>
      <div className="text-center mb-[15px]">
        <p className="my-[2px]">
          <a
            href={`mailto:${formData.email ? formData.email : "jamie.carter@example.com"}`}
            className="text-[#333] no-underline hover:underline"
          >
            {formData.email ? formData.email : "jamie.carter@example.com"}
          </a>
        </p>
        <p className="my-[2px]">{formData.phoneNumber ? formData.phoneNumber : "(123) 456-7890"}</p>
        <p className="my-[2px]">
          <a
            href={formData.linkedin ? formData.linkedin : "https://linkedin.com/in/jamiecarter"}
            className="text-[#333] no-underline hover:underline"
          >
            {formData.linkedin
              ? formData.linkedin.replace(/^https?:\/\//, "")
              : "linkedin.com/in/jamiecarter"}
          </a>
        </p>
        <p className="my-[2px]">
          <a
            href={formData.github ? formData.github : "https://github.com/jamiecarter"}
            className="text-[#333] no-underline hover:underline"
          >
            {formData.github
              ? formData.github.replace(/^https?:\/\//, "")
              : "github.com/jamiecarter"}
          </a>
        </p>
        <p className="my-[2px]">
          <a
            href={formData.otherLink ? formData.otherLink : "https://jamiecarter.dev"}
            className="text-[#333] no-underline hover:underline"
          >
            {formData.otherLink
              ? formData.otherLink.replace(/^https?:\/\//, "")
              : "jamiecarter.dev"}
          </a>
        </p>
        <p className="my-[2px]">
          <a
            href={formData.figma ? formData.figma : "https://figma.com/@jamiecarter"}
            className="text-[#333] no-underline hover:underline"
          >
            {formData.figma
              ? formData.figma.replace(/^https?:\/\//, "")
              : "figma.com/@jamiecarter"}
          </a>
        </p>
        <p className="my-[2px]">
          <a
            href={formData.leetcode ? formData.leetcode : "https://leetcode.com/jamiecarter"}
            className="text-[#333] no-underline hover:underline"
          >
            {formData.leetcode
              ? formData.leetcode.replace(/^https?:\/\//, "")
              : "leetcode.com/jamiecarter"}
          </a>
        </p>
        <p className="my-[2px]">
          {formData.city || formData.state || formData.pincode
            ? `${formData.city}${formData.city ? ", " : ""}${formData.state}${formData.state ? ", " : ""}${formData.pincode}`
            : "Austin, TX"}
        </p>
      </div>

      {/* Professional Summary */}
      <div className="mb-[15px]">
        <h2 className="text-[12pt] m-[15px_0_5px] text-[#37474F] bg-[#ECEFF1] p-[3px_10px]">
          Professional Summary
        </h2>
        <p>
          {summary
            ? summary
            : "Proactive Front-End Developer with internship experience in HTML, CSS, JavaScript, and React. Skilled in creating responsive, accessible web interfaces, boosting user engagement by 20% at TechTrend Innovations. Passionate about collaborating with teams to deliver seamless, high-quality user experiences."}
        </p>
      </div>

      {/* Skills */}
      <div className="mb-[15px]">
        <h2 className="text-[12pt] m-[15px_0_5px] text-[#37474F] bg-[#ECEFF1] p-[3px_10px]">
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

      {/* Work Experience */}
      <div className="mb-[15px]">
        <h2 className="text-[12pt] m-[15px_0_5px] text-[#37474F] bg-[#ECEFF1] p-[3px_10px]">
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

      {/* Projects */}
      <div className="mb-[15px]">
        <h2 className="text-[12pt] m-[15px_0_5px] text-[#37474F] bg-[#ECEFF1] p-[3px_10px]">
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

      {/* Certificates */}
      <div className="mb-[15px]">
        <h2 className="text-[12pt] m-[15px_0_5px] text-[#37474F] bg-[#ECEFF1] p-[3px_10px]">
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

      {/* Education */}
      <div className="mb-[15px]">
        <h2 className="text-[12pt] m-[15px_0_5px] text-[#37474F] bg-[#ECEFF1] p-[3px_10px]">
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

      {/* Languages */}
      <div className="mb-[15px]">
        <h2 className="text-[12pt] m-[15px_0_5px] text-[#37474F] bg-[#ECEFF1] p-[3px_10px]">
          Languages
        </h2>
        <p className="my-[5px]">
          {languagesToDisplay
            .map((l) => `${l.name} (${l.proficiency})`)
            .join(", ")}
        </p>
      </div>

      {/* Hobbies */}
      <div className="mb-[15px]">
        <h2 className="text-[12pt] m-[15px_0_5px] text-[#37474F] bg-[#ECEFF1] p-[3px_10px]">
          Hobbies & Interests
        </h2>
        <p className="my-[5px]">{hobbiesToDisplay.join(", ")}</p>
      </div>

      {/* Achievements */}
      <div className="mb-[15px]">
        <h2 className="text-[12pt] m-[15px_0_5px] text-[#37474F] bg-[#ECEFF1] p-[3px_10px]">
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

export default RESUME_ExpAndFresher_26;
