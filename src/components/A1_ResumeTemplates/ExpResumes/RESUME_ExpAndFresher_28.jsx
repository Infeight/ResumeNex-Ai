import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";

const RESUME_ExpAndFresher_28 = () => {
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
          degree: "B.Tech in Computer Science and Engineering",
          collegeName: "Indian Institute of Information Technology, Design Manufacturing, Kurnool",
          cgpa: "6.25",
          stream: "",
          startDate: "2020",
          endDate: "2024",
          percentage: "",
        },
        {
          degree: "Intermediate MPC",
          collegeName: "Sri Chaitanya Junior College",
          cgpa: "",
          stream: "",
          startDate: "2018",
          endDate: "2020",
          percentage: "94%",
        },
        {
          degree: "10th Class SSC",
          collegeName: "Gauthami Techno School",
          cgpa: "8.8",
          stream: "",
          startDate: "2018",
          endDate: "",
          percentage: "",
        },
      ];

  const workExperienceToDisplay = hasNonEmptyItem(workExperience)
    ? workExperience
    : [
        {
          jobTitle: "Front-End Developer Intern",
          companyName: "Esha Technology",
          startDate: "Nov 2024",
          endDate: "Jan 2025",
          responsibilities: [
            "Built front-end features for 3 projects using React, JavaScript, HTML, and CSS, improving responsiveness across browsers.",
            "Optimized UI components, cutting load times by 20%, and collaborated on API integration for seamless functionality.",
          ],
        },
        {
          jobTitle: "Front-End Developer",
          companyName: "Mehaa Finserv",
          startDate: "Jun 2024",
          endDate: "Oct 2024",
          responsibilities: [
            "Led development of loan services website components using React and Tailwind CSS, including loan cards and forms.",
            "Integrated real-time loan data APIs, enhancing UX, and ensured responsive design across devices with team collaboration.",
          ],
        },
      ];

  const skillsProgramming =
    skills.technical && skills.technical.length > 0
      ? skills.technical.join(", ")
      : "Python, HTML, CSS, JavaScript, ReactJS, NodeJS, Git";
  const skillsWeb =
    skills.related && skills.related.trim()
      ? skills.related
      : "Frontend Design, UI/UX Optimization, API Integration";
  const skillsDB = "SQL, MongoDB";
  const skillsDS = "Machine Learning, Pandas, NumPy, Matplotlib";
  const skillsCourse =
    skills.soft && skills.soft.length > 0
      ? skills.soft.join(", ")
      : "Operating Systems, Software Engineering, Data Structures & Algorithms, Probability & Statistics";

  const projectsToDisplay = hasNonEmptyItem(projects)
    ? projects
    : [
        {
          name: "Mehaa Finserv Website",
          link: "https://mehaafinserv.com",
          description: [
            "Developed a responsive lending services website using React and Tailwind CSS.",
            "Built scalable components like loan cards and forms, integrating real-time APIs for enhanced functionality.",
          ],
        },
        {
          name: "Esha Technology Project",
          link: "https://github.com/saicharan/esha-project",
          description: [
            "Created front-end features for multiple projects using React and JavaScript.",
            "Optimized UI for mobile responsiveness and performance, improving user experience by 15%.",
          ],
        },
      ];

  const certificatesToDisplay = hasNonEmptyItem(certificates)
    ? certificates
    : [
        {
          name: "Python for Beginners, SkillUp Simplilearn",
          link: "https://skillup.simplilearn.com/cert/python-for-beginners",
          issueDate: "2025",
        },
        {
          name: "React Basics, Coursera",
          link: "https://coursera.org/verify/react-basics",
          issueDate: "2024",
        },
      ];

  const volunteerToDisplay =
    additional.achievements && additional.achievements.length > 0
      ? additional.achievements
      : [
          {
            name: "Active member of Narthanashala (Drama Club) at IIITDM Kurnool, performing in 5+ events.",
          },
          {
            name: "Contributed to community outreach with Social Service Group at school.",
          },
          {
            name: "Served as Head Boy, leading student initiatives and organizing 10+ events.",
          },
        ];

  const languagesToDisplay =
    additional.languages && additional.languages.length > 0
      ? additional.languages
      : [
          { name: "English", proficiency: "Fluent" },
          { name: "Telugu", proficiency: "Native" },
          { name: "Hindi", proficiency: "Intermediate" },
        ];

  const hobbiesToDisplay = additional.hobbies
    ? additional.hobbies.map((h) => h.trim())
    : ["Web Development", "Data Science", "Theater"];

  const achievementsToDisplay =
    additional.achievements && additional.achievements.length > 0
      ? additional.achievements
      : [
          { name: "Best Project Award, IIITDM Kurnool Tech Fest, 2023" },
          { name: "Top Performer, School Leadership Award, 2018" },
        ];

  return (
    <div className="font-['Times_New_Roman',Times,serif] text-[#000000] text-[11pt] leading-[1.5] max-w-[800px] mx-auto my-[20px] p-[20px] bg-white">
      {/* Header */}
      <header className="text-center mb-[20px]">
        <h1 className="text-[20pt] font-normal text-[#000000] mb-[0px]">
          {formData.firstName || formData.middleName || formData.lastName
            ? `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim()
            : "Jarpula Sai Charan Nayak"}
        </h1>
        <p className="text-[11pt] mb-[10px]">
          <a
            href={`mailto:${formData.email ? formData.email : "jarupulacharannayak@gmail.com"}`}
            className="text-[#0000FF] no-underline hover:underline"
          >
            {formData.email ? formData.email : "jarupulacharannayak@gmail.com"}
          </a>{" "}
          |{" "}
          <a
            href={formData.linkedin ? formData.linkedin : "https://linkedin.com/in/saicharan"}
            className="text-[#0000FF] no-underline hover:underline"
          >
            {formData.linkedin
              ? formData.linkedin.replace(/^https?:\/\//, "")
              : "linkedin.com/in/saicharan"}
          </a>{" "}
          |{" "}
          <a
            href={`tel:${formData.phoneNumber ? formData.phoneNumber : "+919849544717"}`}
            className="text-[#0000FF] no-underline hover:underline"
          >
            {formData.phoneNumber ? formData.phoneNumber : "+91 9849544717"}
          </a>{" "}
          |{" "}
          <a
            href={formData.github ? formData.github : "https://github.com/saicharan"}
            className="text-[#0000FF] no-underline hover:underline"
          >
            {formData.github
              ? formData.github.replace(/^https?:\/\//, "")
              : "github.com/saicharan"}
          </a>{" "}
          |{" "}
          <a
            href={formData.otherLink ? formData.otherLink : "https://saicharan.dev"}
            className="text-[#0000FF] no-underline hover:underline"
          >
            {formData.otherLink
              ? formData.otherLink.replace(/^https?:\/\//, "")
              : "saicharan.dev"}
          </a>
        </p>
      </header>

      {/* Summary */}
      <section className="mb-[15px]">
        <h2 className="text-[12pt] font-bold uppercase text-[#000000] mb-[0px]">
          Summary
        </h2>
        <hr className="border-t border-[#808080] mb-[10px]" />
        <p>
          {summary
            ? summary
            : `Computer Science graduate with expertise in React, JavaScript, and problem-solving. Skilled in building scalable, responsive web applications, optimizing performance by 20% at Esha Technology. Passionate about frontend development and collaborative tech projects.`}
        </p>
      </section>

      {/* Education */}
      <section className="mb-[15px]">
        <h2 className="text-[12pt] font-bold uppercase text-[#000000] mb-[0px]">
          Education
        </h2>
        <hr className="border-t border-[#808080] mb-[10px]" />
        {educationToDisplay.map((edu, i) => (
          <div className="flex justify-between items-start mb-[5px]" key={i}>
            <div className="flex-grow">
              <h3 className="text-[12pt] font-bold mb-[2px]">{edu.degree}</h3>
              <p>{edu.collegeName}</p>
            </div>
            <div className="text-right text-[11pt]">
              {edu.cgpa && <p className="font-bold">CGPA: {edu.cgpa}</p>}
              {edu.percentage && <p className="font-bold">Percentage: {edu.percentage}</p>}
              <p>
                {edu.startDate}
                {edu.endDate && `-${edu.endDate}`}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section className="mb-[15px]">
        <h2 className="text-[12pt] font-bold uppercase text-[#000000] mb-[0px]">
          Experience
        </h2>
        <hr className="border-t border-[#808080] mb-[10px]" />
        {workExperienceToDisplay.map((exp, i) => (
          <div className="mb-[5px]" key={i}>
            <div className="flex justify-between items-start">
              <h3 className="text-[12pt] font-bold mb-[2px]">
                {exp.jobTitle}, {exp.companyName}
              </h3>
              <p className="text-[11pt] text-right">
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
            <ul className="list-disc ml-[20px] mb-[10px]">
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
      </section>

      {/* Skills */}
      <section className="mb-[15px]">
        <h2 className="text-[12pt] font-bold uppercase text-[#000000] mb-[0px]">
          Skills
        </h2>
        <hr className="border-t border-[#808080] mb-[10px]" />
        <ul className="list-disc ml-[20px] mb-[10px]">
          <li>
            <strong>Programming:</strong> {skillsProgramming}
          </li>
          <li>
            <strong>Web Development:</strong> {skillsWeb}
          </li>
          <li>
            <strong>Databases:</strong> {skillsDB}
          </li>
          <li>
            <strong>Data Science:</strong> {skillsDS}
          </li>
          <li>
            <strong>Coursework:</strong> {skillsCourse}
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-[15px]">
        <h2 className="text-[12pt] font-bold uppercase text-[#000000] mb-[0px]">
          Projects
        </h2>
        <hr className="border-t border-[#808080] mb-[10px]" />
        {projectsToDisplay.map((project, i) => (
          <div className="mb-[5px]" key={i}>
            <div className="flex items-center gap-[10px]">
              <h3 className="text-[12pt] font-bold mb-[2px]">{project.name}</h3>
              {project.link && (
                <p>
                  <a
                    href={project.link}
                    className="text-[#0000FF] no-underline hover:underline"
                  >
                    {project.link.replace(/^https?:\/\//, "")}
                  </a>
                </p>
              )}
            </div>
            <ul className="list-disc ml-[20px] mb-[10px]">
              {(Array.isArray(project.description)
                ? project.description
                : project.description
                ? project.description.split("\n")
                : []
              ).map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className="mb-[15px]">
        <h2 className="text-[12pt] font-bold uppercase text-[#000000] mb-[0px]">
          Certifications
        </h2>
        <hr className="border-t border-[#808080] mb-[10px]" />
        <ul className="list-disc ml-[20px] mb-[10px]">
          {certificatesToDisplay.map((cert, i) => (
            <li key={i}>
              <strong>
                <a
                  href={cert.link}
                  className="text-[#0000FF] no-underline hover:underline"
                >
                  {cert.name}
                </a>
              </strong>{" "}
              {cert.issueDate && `(${cert.issueDate})`}
            </li>
          ))}
        </ul>
      </section>

      {/* Volunteer Experience */}
      <section className="mb-[15px]">
        <h2 className="text-[12pt] font-bold uppercase text-[#000000] mb-[0px]">
          Volunteer Experience
        </h2>
        <hr className="border-t border-[#808080] mb-[10px]" />
       <ul className="list-disc ml-[20px] mb-[10px]">
  {volunteerToDisplay.map((vol, i) =>
    typeof vol === "string" ? (
      <li key={i}>{vol}</li>
    ) : (
      <li key={i}>
        {vol.name}
        {vol.organization && `, ${vol.organization}`}
        {vol.description && ` – ${vol.description}`}
      </li>
    )
  )}
</ul>
      </section>

      {/* Languages */}
      <section className="mb-[15px]">
        <h2 className="text-[12pt] font-bold uppercase text-[#000000] mb-[0px]">
          Languages
        </h2>
        <hr className="border-t border-[#808080] mb-[10px]" />
        <p>
          {languagesToDisplay
            .map((l) =>
              l.name && l.proficiency
                ? `${l.name} (${l.proficiency})`
                : l.name || l
            )
            .join(", ")}
        </p>
      </section>

      {/* Hobbies */}
      <section className="mb-[15px]">
        <h2 className="text-[12pt] font-bold uppercase text-[#000000] mb-[0px]">
          Hobbies & Interests
        </h2>
        <hr className="border-t border-[#808080] mb-[10px]" />
        <p>{hobbiesToDisplay.join(", ")}</p>
      </section>

      {/* Achievements */}
      <section className="mb-[15px]">
        <h2 className="text-[12pt] font-bold uppercase text-[#000000] mb-[0px]">
          Achievements & Awards
        </h2>
        <hr className="border-t border-[#808080] mb-[10px]" />
       <ul className="list-disc ml-[20px] mb-[10px]">
  {achievementsToDisplay.map((ach, i) =>
    typeof ach === "string" ? (
      <li key={i}>{ach}</li>
    ) : (
      <li key={i}>
        {ach.name}
        {ach.organization && `, ${ach.organization}`}
        {ach.description && ` – ${ach.description}`}
        {ach.date && ` (${ach.date})`}
      </li>
    )
  )}
</ul>
      </section>
    </div>
  );
};

export default RESUME_ExpAndFresher_28;
