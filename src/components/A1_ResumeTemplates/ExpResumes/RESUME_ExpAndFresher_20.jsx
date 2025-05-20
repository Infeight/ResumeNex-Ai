import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const RESUME_ExpAndFresher_20 = () => {
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

  // Helper to check if an array of objects contains at least one non-empty object
  const hasNonEmptyItem = (arr) =>
    Array.isArray(arr) &&
    arr.some((item) =>
      Object.values(item).some(
        (val) =>
          (Array.isArray(val) && val.length > 0) ||
          (typeof val === "string" && val.trim() !== "")
      )
    );

  // Fallbacks for Education, Projects, Certifications
  const educationToDisplay = hasNonEmptyItem(education)
    ? education
    : [
        {
          degree: "B.S. in Computer Science",
          collegeName: "Stanford University, CA",
          stream: "Software Engineering",
          cgpa: "3.8/4.0",
          startDate: "2008",
          endDate: "2012",
        },
      ];

  const projectsToDisplay = hasNonEmptyItem(projects)
    ? projects
    : [
        {
          name: "Task Management App",
          technologies: "React.js, Node.js, MongoDB",
          startDate: "Jan 2023",
          endDate: "Mar 2023",
          description: [
            "Built a full-stack app with user authentication and task prioritization.",
            "Deployed on AWS, supporting 500+ active users with 99.9% uptime.",
          ],
          link: "https://github.com/blairwashington/task-app",
        },
        {
          name: "Portfolio Website",
          technologies: "HTML, CSS, JavaScript",
          startDate: "Sep 2022",
          endDate: "Oct 2022",
          description: [
            "Designed a responsive portfolio with interactive animations.",
            "Hosted on GitHub Pages with a custom domain.",
          ],
          link: "https://github.com/blairwashington/portfolio",
        },
      ];

  const certificationsToDisplay = hasNonEmptyItem(certificates)
    ? certificates
    : [
        {
          name: "AWS Certified Developer – Amazon Web Services",
          issueDate: "June 2023",
          expiryDate: "No Expiry",
          link: "https://aws.amazon.com/certification",
        },
        {
          name: "Front-End Development – FreeCodeCamp",
          issueDate: "December 2022",
          expiryDate: "No Expiry",
          link: "https://freecodecamp.org/certification/frontend",
        },
      ];

  // Same fallback logic can be applied to workExperience if needed
  const workExperienceToDisplay = hasNonEmptyItem(workExperience)
    ? workExperience
    : [
        {
          jobTitle: "Application Developer",
          companyName: "TechCorp, Seattle, WA",
          startDate: "Jul 2018",
          endDate: "Present",
          responsibilities: [
            "Led development of a SaaS platform using React.js, improving user retention by 15%.",
            "Optimized backend APIs, reducing response time by 20% for 10,000+ users.",
            "Collaborated with UX team to implement responsive designs from Figma mockups.",
          ],
        },
        {
          jobTitle: "Junior Developer",
          companyName: "Innovate Solutions, Portland, OR",
          startDate: "Nov 2016",
          endDate: "Jun 2018",
          responsibilities: [
            "Developed front-end components with JavaScript and Bootstrap for client portals.",
            "Conducted performance testing, improving load times by 10% across applications.",
            "Assisted in integrating REST APIs for dynamic data rendering.",
          ],
        },
      ];

  return (
    <div className="font-sans text-black bg-gray-100 min-h-screen flex justify-center items-center">
      <div
        className="bg-white shadow-md box-border overflow-hidden"
        style={{ width: "794px", padding: "20px" }}
      >
        <hr className="border-t border-gray-600 my-[10px]" />
        {/* Header */}
        <div className="flex justify-between items-start mb-[15px]">
          <h1 className="text-[26px] font-bold uppercase tracking-[2px] m-0">
            {formData.firstName || formData.middleName || formData.lastName
              ? `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim()
              : "Blair Washington"}
          </h1>
          <div className="text-[12px] text-right">
            <div className="font-bold uppercase mb-[5px]">
              {formData.jobTitle ? formData.jobTitle : "Application Developer"}
            </div>
            <div className="flex justify-end mb-[5px]">
              <span>
                {formData.phoneNumber ? formData.phoneNumber : "666.888.9899"}
              </span>
              <span className="ml-[15px]">
                {formData.email ? formData.email : "youremail@domain.com"}
              </span>
            </div>
            <div className="flex justify-end">
              <span>
                {formData.city || formData.state || formData.pincode
                  ? `${formData.city}, ${formData.state}, ${formData.pincode}`
                  : "236 Street Name, City, ST, 12345"}
              </span>
              <span className="ml-[15px]">
                <a
                  href={
                    formData.linkedin
                      ? formData.linkedin
                      : "https://linkedin.com/in/username"
                  }
                  className="text-black underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {formData.linkedin
                    ? formData.linkedin.replace(/^https?:\/\//, "")
                    : "linkedin.com/in/username"}
                </a>
              </span>
            </div>
            <div className="flex justify-end mt-[5px]">
              <span>
                <a
                  href={
                    formData.github
                      ? formData.github
                      : "https://github.com/blairwashington"
                  }
                  className="text-black underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {formData.github
                    ? formData.github.replace(/^https?:\/\//, "")
                    : "github.com/blairwashington"}
                </a>
              </span>
              <span className="ml-[15px]">
                <a
                  href={
                    formData.otherLink
                      ? formData.otherLink
                      : "https://portfolio.blairwashington.com"
                  }
                  className="text-black underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {formData.otherLink
                    ? formData.otherLink.replace(/^https?:\/\//, "")
                    : "portfolio.blairwashington.com"}
                </a>
              </span>
            </div>
            <div className="flex justify-end mt-[5px]">
              <span>
                <a
                  href={
                    formData.figma
                      ? formData.figma
                      : "https://figma.com/@blairwashington"
                  }
                  className="text-black underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {formData.figma
                    ? formData.figma.replace(/^https?:\/\//, "")
                    : "figma.com/@blairwashington"}
                </a>
              </span>
              <span className="ml-[15px]">
                <a
                  href={
                    formData.leetcode
                      ? formData.leetcode
                      : "https://leetcode.com/blairwashington"
                  }
                  className="text-black underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {formData.leetcode
                    ? formData.leetcode.replace(/^https?:\/\//, "")
                    : "leetcode.com/blairwashington"}
                </a>
              </span>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-600 my-[10px]" />

        {/* Profile Summary */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase border-b border-gray-600 pb-[5px] mb-[8px]">
            Summary
          </h2>
          <p className="text-[12px] leading-[1.4] m-[5px_0]">
            {summary
              ? summary
              : "Experienced Application Developer with expertise in building scalable web applications and leading cross-functional teams. Skilled in JavaScript, React.js, and project management, with a proven track record of enhancing system performance and delivering user-centric solutions. Adept at collaborating with stakeholders to drive innovation and achieve business goals."}
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase border-b border-gray-600 pb-[5px] mb-[8px]">
            Experience
          </h2>
          {workExperienceToDisplay.map((exp, i) => (
            <div className="mb-[10px]" key={i}>
              <div className="text-[12px] font-bold uppercase mb-[3px]">
                {exp.jobTitle}
              </div>
              <div>
                <span className="text-[12px] italic">{exp.companyName}</span>
                <span className="text-[12px] italic float-right">
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>
              <ul className="list-disc pl-[20px] text-[12px] m-[5px_0]">
                {(Array.isArray(exp.responsibilities)
                  ? exp.responsibilities
                  : exp.responsibilities
                  ? exp.responsibilities.split("\n")
                  : []
                ).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase border-b border-gray-600 pb-[5px] mb-[8px]">
            Education
          </h2>
          {educationToDisplay.map((edu, i) => (
            <div
              className="flex justify-between items-center text-[12px]"
              key={i}
            >
              <div className="font-bold flex-1">
                {edu.degree}, {edu.collegeName}
                <br />
                Stream: {edu.stream}
              </div>
              <div className="italic mr-[15px]">CGPA: {edu.cgpa}</div>
              <div className="italic">
                {edu.startDate} – {edu.endDate}
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase border-b border-gray-600 pb-[5px] mb-[8px]">
            Projects
          </h2>
          {projectsToDisplay.map((project, i) => (
            <div className="mb-[10px]" key={i}>
              <div className="text-[12px] font-bold uppercase">
                {project.name}
              </div>
              <div>
                <span className="text-[12px] italic">
                  Technologies: {project.technologies}
                </span>
                <span className="text-[12px] italic float-right">
                  {project.startDate} – {project.endDate}
                </span>
              </div>
              <ul className="list-disc pl-[20px] text-[12px] m-[5px_0]">
                {(Array.isArray(project.description)
                  ? project.description
                  : project.description
                  ? project.description.split("\n")
                  : []
                ).map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
                {project.link && (
                  <li>
                    <a
                      href={project.link}
                      className="text-black underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.link.replace(/^https?:\/\//, "")}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase border-b border-gray-600 pb-[5px] mb-[8px]">
            Certifications
          </h2>
          <ul className="list-disc pl-[20px] text-[12px] m-[5px_0]">
            {certificationsToDisplay.map((cert, i) => (
              <li key={i}>
                {cert.name}
                <br />
                Issued: {cert.issueDate}, {cert.expiryDate}
                <br />
                <a
                  href={cert.link}
                  className="text-black underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cert.link && cert.link.replace(/^https?:\/\//, "")}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase border-b border-gray-600 pb-[5px] mb-[8px]">
            Skills
          </h2>
          <div className="text-[12px] m-[5px_0]">
            <div className="font-bold">Technical Skills</div>
            <p>
              {skills.technical && skills.technical.length > 0
                ? skills.technical.join(", ")
                : "JavaScript, React.js, Node.js, MongoDB, HTML, CSS, Git, AWS, REST APIs"}
            </p>
            <div className="font-bold mt-[5px]">Soft Skills</div>
            <p>
              {skills.soft && skills.soft.length > 0
                ? skills.soft.join(", ")
                : "Project Management, Team Leadership, Communication, Problem-Solving"}
            </p>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase border-b border-gray-600 pb-[5px] mb-[8px]">
            Additional Information
          </h2>
          <div className="text-[12px] m-[5px_0]">
            <div className="font-bold">Languages</div>
            <ul className="list-disc pl-[20px] m-0">
              {(additional.languages && additional.languages.length > 0
                ? additional.languages
                : [
                    { name: "English", proficiency: "Fluent" },
                    { name: "Spanish", proficiency: "Intermediate" },
                  ]
              ).map((lang, i) => (
                <li key={i}>
                  {lang.name} ({lang.proficiency})
                </li>
              ))}
            </ul>
            <div className="font-bold mt-[5px]">Hobbies & Interests</div>
            <ul className="list-disc pl-[20px] m-0">
              {additional.hobbies
                ? additional.hobbies
                    .map((hobby, i) => <li key={i}>{hobby.trim()}</li>)
                : ["Coding", "Blogging", "Hiking"].map((hobby, i) => (
                    <li key={i}>{hobby}</li>
                  ))}
            </ul>
            <div className="font-bold mt-[5px]">Achievements & Awards</div>
            <ul className="list-disc pl-[20px] m-0">
              {(additional.achievements && additional.achievements.length > 0
                ? additional.achievements
                : [
                    {
                      name: "Best Developer Award – TechCorp, 2022",
                      description: "Recognized for innovative SaaS solutions",
                    },
                    {
                      name: "Hackathon Winner – CodeFest 2021",
                      description: "Built a real-time collaboration tool",
                    },
                  ]
              ).map((ach, i) => (
                <li key={i}>
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

export default RESUME_ExpAndFresher_20;
