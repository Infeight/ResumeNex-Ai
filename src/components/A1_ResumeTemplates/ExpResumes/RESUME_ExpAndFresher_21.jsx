import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";

const RESUME_ExpAndFresher_21 = () => {
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

  // Helper: true if any object in arr has a non-empty value
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
          degree: "Master’s in Computer Science",
          collegeName: "University of Washington, Seattle, WA",
          stream: "Software Engineering",
          cgpa: "3.8/4.0",
          startDate: "Sep 2019",
          endDate: "May 2021",
        },
        {
          degree: "Bachelor’s in Computer Science",
          collegeName: "Oregon State University, Corvallis, OR",
          stream: "Web Development",
          cgpa: "3.7/4.0",
          startDate: "Sep 2015",
          endDate: "May 2019",
        },
      ];

  const projectsToDisplay = hasNonEmptyItem(projects)
    ? projects
    : [
        {
          name: "E-commerce Platform",
          technologies: "React.js, Node.js, MongoDB",
          startDate: "Jan 2023",
          endDate: "Mar 2023",
          description: [
            "Developed a full-stack platform with secure user authentication.",
            "Optimized database queries, reducing load time by 20%.",
          ],
          link: "https://github.com/taylorquinn/ecommerce",
        },
        {
          name: "Task Management App",
          technologies: "Python, Django, PostgreSQL",
          startDate: "Sep 2022",
          endDate: "Nov 2022",
          description: [
            "Built a task app with real-time collaboration features.",
            "Deployed on Heroku, supporting 1000+ users.",
          ],
          link: "https://github.com/taylorquinn/task-app",
        },
      ];

  const certificationsToDisplay = hasNonEmptyItem(certificates)
    ? certificates
    : [
        {
          name: "AWS Certified Solutions Architect – Amazon Web Services",
          issueDate: "Jul 2023",
          expiryDate: "No Expiry",
          link: "https://aws.amazon.com/certification",
        },
        {
          name: "Python for Data Science – Coursera",
          issueDate: "Mar 2023",
          expiryDate: "No Expiry",
          link: "https://coursera.org/certificates/python-data",
        },
      ];

  const workExperienceToDisplay = hasNonEmptyItem(workExperience)
    ? workExperience
    : [
        {
          jobTitle: "Full-Stack Developer",
          companyName: "TechTrend Innovations, Seattle, WA",
          startDate: "Jun 2023",
          endDate: "Present",
          responsibilities: [
            "Develop full-stack applications using React.js and Node.js, enhancing performance by 15%.",
            "Manage cloud deployments on AWS, reducing downtime by 10%.",
            "Collaborate with cross-functional teams, delivering projects 20% ahead of schedule.",
          ],
        },
        {
          jobTitle: "Junior Developer",
          companyName: "CodeWave Solutions, Portland, OR",
          startDate: "Jan 2021",
          endDate: "May 2023",
          responsibilities: [
            "Designed responsive front-end interfaces, reducing user complaints by 25%.",
            "Implemented REST APIs, improving data retrieval speed by 30%.",
            "Conducted code reviews, ensuring 95% adherence to best practices.",
          ],
        },
      ];

  return (
    <div className="font-sans text-black bg-gray-100 min-h-screen flex justify-center items-start">
      <div
        className="bg-white shadow-md box-border overflow-hidden"
        style={{ width: "794px", padding: "20px" }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-[10px]">
          <h1 className="text-[26px] font-bold uppercase m-0">
            {formData.firstName || formData.middleName || formData.lastName
              ? `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim()
              : "Taylor Quinn"}
          </h1>
          <div className="text-[12px] text-right">
            <p>
              {(formData.city || formData.state || formData.pincode
                ? `${formData.city}${formData.city ? ", " : ""}${formData.state}${
                    formData.state ? ", " : ""
                  }${formData.pincode}`
                : "Seattle, WA, USA") +
                " | " +
                (formData.phoneNumber ? formData.phoneNumber : "+123 0000 0000")}
            </p>
            <p>
              <a
                href={
                  formData.email
                    ? `mailto:${formData.email}`
                    : "mailto:taylor.quinn@email.com"
                }
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.email ? formData.email : "taylor.quinn@email.com"}
              </a>
            </p>
            <p>
              <a
                href={
                  formData.linkedin
                    ? formData.linkedin
                    : "https://linkedin.com/in/taylorquinn"
                }
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.linkedin
                  ? formData.linkedin.replace(/^https?:\/\//, "")
                  : "linkedin.com/in/taylorquinn"}
              </a>
            </p>
            <p>
              <a
                href={
                  formData.github
                    ? formData.github
                    : "https://github.com/taylorquinn"
                }
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.github
                  ? formData.github.replace(/^https?:\/\//, "")
                  : "github.com/taylorquinn"}
              </a>
            </p>
            <p>
              <a
                href={
                  formData.otherLink
                    ? formData.otherLink
                    : "https://portfolio.taylorquinn.com"
                }
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.otherLink
                  ? formData.otherLink.replace(/^https?:\/\//, "")
                  : "portfolio.taylorquinn.com"}
              </a>
            </p>
            <p>
              <a
                href={
                  formData.figma
                    ? formData.figma
                    : "https://figma.com/@taylorquinn"
                }
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.figma
                  ? formData.figma.replace(/^https?:\/\//, "")
                  : "figma.com/@taylorquinn"}
              </a>
            </p>
            <p>
              <a
                href={
                  formData.leetcode
                    ? formData.leetcode
                    : "https://leetcode.com/taylorquinn"
                }
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.leetcode
                  ? formData.leetcode.replace(/^https?:\/\//, "")
                  : "leetcode.com/taylorquinn"}
              </a>
            </p>
          </div>
        </div>
        <hr className="border-t border-black mb-[10px]" />

        {/* Profile Summary */}
        <div className="mb-[10px]">
          <h2 className="text-[20px] font-bold uppercase mb-[5px]">
            Professional Profile
          </h2>
          <hr className="border-t border-black mb-[10px]" />
          <div className="text-[12px] text-justify leading-[1.2]">
            {summary
              ? summary
              : `Full-Stack Developer with a Master’s in Computer Science, skilled in JavaScript, Python, and cloud technologies. Experienced in developing scalable web applications at TechTrend Innovations, increasing user engagement by 20% through optimized UI/UX. Proficient in Agile methodologies, with strong collaboration and problem-solving skills. Adept at leveraging AWS and Docker to deploy robust solutions, meeting all job-specific technical requirements.`}
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-[10px]">
          <h2 className="text-[20px] font-bold uppercase mb-[5px]">
            Work Experience
          </h2>
          <hr className="border-t border-black mb-[10px]" />
          {workExperienceToDisplay.map((exp, i) => (
            <div className="mb-[8px]" key={i}>
              <div className="flex justify-between font-bold text-[12px]">
                {exp.jobTitle}
                <span className="font-normal text-[12px]">
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>
              <p className="text-[12px] m-[2px_0]">{exp.companyName}</p>
              <ul className="list-disc pl-[20px] text-[12px] m-[3px_0] leading-[1.2]">
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
        <div className="mb-[10px]">
          <h2 className="text-[20px] font-bold uppercase mb-[5px]">
            Education
          </h2>
          <hr className="border-t border-black mb-[10px]" />
          {educationToDisplay.map((edu, i) => (
            <div className="mb-[8px]" key={i}>
              <div className="flex justify-between font-bold text-[12px]">
                {edu.degree}
                <span className="font-normal text-[12px]">
                  {edu.startDate} – {edu.endDate}
                </span>
              </div>
              <div className="flex justify-between text-[12px]">
                <p className="m-[2px_0]">
                  {edu.collegeName}
                  <br />
                  Stream: {edu.stream}
                </p>
                <p className="m-[2px_0] font-normal">CGPA: {edu.cgpa}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="mb-[10px]">
          <h2 className="text-[20px] font-bold uppercase mb-[5px]">Projects</h2>
          <hr className="border-t border-black mb-[10px]" />
          {projectsToDisplay.map((project, i) => (
            <div className="mb-[8px]" key={i}>
              <div className="flex justify-between font-bold text-[12px]">
                {project.name}
                <span className="font-normal text-[12px]">
                  {project.startDate} – {project.endDate}
                </span>
              </div>
              <p className="text-[12px] m-[2px_0]">
                Technologies: {project.technologies}
              </p>
              <ul className="list-disc pl-[20px] text-[12px] m-[3px_0] leading-[1.2]">
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
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-[10px]">
          <h2 className="text-[20px] font-bold uppercase mb-[5px]">
            Certifications
          </h2>
          <hr className="border-t border-black mb-[10px]" />
          <ul className="list-disc pl-[20px] text-[12px] m-[3px_0] leading-[1.2]">
            {certificationsToDisplay.map((cert, i) => (
              <li key={i}>
                {cert.name}
                <br />
                Issued: {cert.issueDate}, {cert.expiryDate}
                <br />
                <a
                  href={cert.link}
                  className="text-[#0000EE] underline"
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
        <div className="mb-[10px]">
          <h2 className="text-[20px] font-bold uppercase mb-[5px]">Skills</h2>
          <hr className="border-t border-black mb-[10px]" />
          <ul className="list-none pl-0 text-[12px] leading-[1.2]">
            <li>
              Technical Skills:{" "}
              {skills.technical && skills.technical.length > 0
                ? skills.technical.join(", ")
                : "JavaScript, Python, React.js, Node.js, MongoDB, PostgreSQL, AWS, Docker"}
            </li>
            <li>
              Soft Skills:{" "}
              {skills.soft && skills.soft.length > 0
                ? skills.soft.join(", ")
                : "Collaboration, Problem-Solving, Time Management, Communication"}
            </li>
            <li>
              Languages:{" "}
              {additional.languages && additional.languages.length > 0
                ? additional.languages
                    .map((l) => `${l.name} (${l.proficiency})`)
                    .join(", ")
                : "English (Fluent), Spanish (Intermediate)"}
            </li>
          </ul>
        </div>

        {/* Additional Sections */}
        <div className="mb-[10px]">
          <h2 className="text-[20px] font-bold uppercase mb-[5px]">
            Additional Information
          </h2>
          <hr className="border-t border-black mb-[10px]" />
          <div className="text-[12px] leading-[1.2]">
            <div className="font-bold">Hobbies & Interests</div>
            <ul className="list-disc pl-[20px] m-[3px_0]">
              {additional.hobbies
                ? additional.hobbies
                    .map((hobby, i) => <li key={i}>{hobby.trim()}</li>)
                : ["Open-Source Contribution", "Blogging", "Cycling"].map(
                    (hobby, i) => <li key={i}>{hobby}</li>
                  )}
            </ul>
            <div className="font-bold mt-[3px]">Achievements & Awards</div>
            <ul className="list-disc pl-[20px] m-[3px_0]">
              {(additional.achievements && additional.achievements.length > 0
                ? additional.achievements
                : [
                    {
                      name: "Hackathon Winner – TechFest 2022",
                      description: "Built a real-time analytics dashboard",
                    },
                    {
                      name: "Outstanding Developer Award – CodeWave, 2022",
                      description: "Recognized for API optimization",
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

export default RESUME_ExpAndFresher_21;
