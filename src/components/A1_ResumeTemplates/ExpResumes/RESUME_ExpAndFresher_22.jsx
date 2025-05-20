import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const RESUME_ExpAndFresher_22 = () => {
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
          degree: "B.S. in Nursing",
          collegeName: "University of Portland, Portland, OR",
          stream: "Registered Nursing",
          cgpa: "3.8/4.0",
          startDate: "2011",
          endDate: "2015",
        },
      ];

  const projectsToDisplay = hasNonEmptyItem(projects)
    ? projects
    : [
        {
          name: "Patient Care Dashboard",
          technologies: "Tableau, Python",
          startDate: "Jan 2023",
          endDate: "Mar 2023",
          description: [
            "Developed a dashboard to visualize patient metrics, improving care coordination by 10%.",
            "Integrated Python scripts for real-time data processing.",
          ],
          link: "https://github.com/spencernova/dashboard",
        },
        {
          name: "Health Education Portal",
          technologies: "HTML, CSS, JavaScript",
          startDate: "Sep 2022",
          endDate: "Nov 2022",
          description: [
            "Built a web portal for patient education, reaching 500+ users.",
            "Designed responsive layouts for accessibility compliance.",
          ],
          link: "https://github.com/spencernova/health-portal",
        },
      ];

  const certificationsToDisplay = hasNonEmptyItem(certificates)
    ? certificates
    : [
        {
          name: "Registered Nurse (RN)",
          organization: "Oregon State Board of Nursing",
          issueDate: "Jun 2015",
          expiryDate: "Jun 2025",
          link: "",
          license: "License #123456",
        },
        {
          name: "Certified Emergency Nurse",
          organization: "Board of Certification for Emergency Nursing",
          issueDate: "Aug 2022",
          expiryDate: "Aug 2026",
          link: "https://bcen.org/certifications",
        },
      ];

  const workExperienceToDisplay = hasNonEmptyItem(workExperience)
    ? workExperience
    : [
        {
          jobTitle: "Registered Nurse",
          companyName: "Mercy General Hospital, Portland, OR",
          startDate: "June 2015",
          endDate: "Present",
          responsibilities: [
            "Managed patient triage in a 50-bed ER, reducing wait times by 20%.",
            "Coordinated maternity care for 30+ patients weekly, improving satisfaction scores by 15%.",
            "Trained 10 new nurses on electronic health record systems, ensuring 100% compliance.",
          ],
        },
        {
          jobTitle: "Nurse Practitioner (Contract)",
          companyName: "ABC Hospital, Seattle, WA",
          startDate: "June 2014",
          endDate: "May 2015",
          responsibilities: [
            "Provided urgent care for 25+ patients daily, achieving 95% positive feedback.",
            "Implemented IV management protocols, reducing complications by 10%.",
            "Collaborated with physicians to update patient care plans, enhancing recovery rates.",
          ],
        },
      ];

  // Skills fallback
  const technicalSkills =
    skills.technical && skills.technical.length > 0
      ? skills.technical
      : [
          "Emergency Room",
          "IV Management",
          "Urgent Care",
          "Electronic Records",
          "Patient Triage",
          "Maternity",
          "Communication",
          "Leadership",
          "Teamwork",
          "Problem Solving",
          "Critical Thinking",
          "Time Management",
          "Conflict Resolution",
          "Adaptability",
          "Collaboration",
          "Attention to Detail",
        ];

  // Split into four columns for display
  const skillColumns = [[], [], [], []];
  technicalSkills.forEach((skill, idx) => {
    skillColumns[idx % 4].push(skill);
  });

  return (
    <div className="font-sans text-black bg-gray-100 min-h-screen flex justify-center items-center">
      <div
        className="bg-white shadow-md box-border overflow-hidden"
        style={{ width: "794px", padding: "20px" }}
      >
        {/* Header */}
        <div className="text-center mb-[15px]">
          <h1 className="text-[26px] font-bold uppercase tracking-[2px] m-0">
            {formData.firstName || formData.middleName || formData.lastName
              ? `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim()
              : "Spencer Nova"}
          </h1>
          <div className="text-[20px] font-bold uppercase mt-[5px] mb-[5px]">
            {formData.jobTitle ? formData.jobTitle : "Registered Nurse, RN, BSN"}
          </div>
          <div className="text-[12px] flex justify-center items-center flex-wrap">
            <span>{formData.phoneNumber ? formData.phoneNumber : "100-555-5555"}</span>
            <span className="text-gray-600 mx-[2px]">|</span>
            <span>
              <a
                href={`mailto:${formData.email ? formData.email : "spencernova@gmail.com"}`}
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.email ? formData.email : "spencernova@gmail.com"}
              </a>
            </span>
            <span className="text-gray-600 mx-[2px]">|</span>
            <span>
              {formData.city || formData.state || formData.pincode
                ? `${formData.city}${formData.city ? ", " : ""}${formData.state}${formData.state ? ", " : ""}${formData.pincode}`
                : "Portland, OR, 97201"}
            </span>
            <span className="text-gray-600 mx-[2px]">|</span>
            <span>
              <a
                href={formData.linkedin ? formData.linkedin : "https://linkedin.com/in/spencernova"}
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.linkedin
                  ? formData.linkedin.replace(/^https?:\/\//, "")
                  : "linkedin.com/in/spencernova"}
              </a>
            </span>
            <span className="text-gray-600 mx-[2px]">|</span>
            <span>
              <a
                href={formData.otherLink ? formData.otherLink : "https://portfolio.spencernova.com"}
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.otherLink
                  ? formData.otherLink.replace(/^https?:\/\//, "")
                  : "portfolio.spencernova.com"}
              </a>
            </span>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase bg-[#e6f0fa] text-center py-[5px] border-b border-[#b3d4fc] mb-[8px]">
            Professional Summary
          </h2>
          <p className="text-[12px] leading-[1.4] m-[5px_0]">
            {summary
              ? summary
              : `Dedicated Registered Nurse with over 8 years of experience in
            emergency and maternity care, specializing in patient triage and
            critical care coordination. Proficient in electronic health records
            and interdisciplinary collaboration, enhancing patient outcomes by
            15% through streamlined processes. Committed to leveraging
            leadership and communication skills to deliver high-quality care in
            dynamic healthcare settings.`}
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase bg-[#e6f0fa] text-center py-[5px] border-b border-[#b3d4fc] mb-[8px]">
            Work Experience
          </h2>
          {workExperienceToDisplay.map((exp, i) => (
            <div className="mb-[10px]" key={i}>
              <div className="text-[12px] font-bold mb-[3px]">
                {exp.jobTitle}
              </div>
              <div>
                <span className="text-[12px] italic">{exp.companyName}</span>
                <span className="text-[12px] italic float-right">
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>
              <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] leading-[1.4]">
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
          <h2 className="text-[20px] font-bold uppercase bg-[#e6f0fa] text-center py-[5px] border-b border-[#b3d4fc] mb-[8px]">
            Education
          </h2>
          {educationToDisplay.map((edu, i) => (
            <div className="flex justify-between items-center text-[12px]" key={i}>
              <div className="font-bold">
                {edu.degree}
                <br />
                {edu.collegeName}
                <br />
                Stream: {edu.stream}
              </div>
              <div className="italic">CGPA: {edu.cgpa}</div>
              <div className="italic">
                {edu.startDate} – {edu.endDate}
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase bg-[#e6f0fa] text-center py-[5px] border-b border-[#b3d4fc] mb-[8px]">
            Projects
          </h2>
          {projectsToDisplay.map((project, i) => (
            <div className="mb-[10px]" key={i}>
              <div className="text-[12px] font-bold">{project.name}</div>
              <div>
                <span className="text-[12px] italic">
                  Technologies: {project.technologies}
                </span>
                <span className="text-[12px] italic float-right">
                  {project.startDate} – {project.endDate}
                </span>
              </div>
              <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] leading-[1.4]">
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
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase bg-[#e6f0fa] text-center py-[5px] border-b border-[#b3d4fc] mb-[8px]">
            Certifications
          </h2>
          <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] leading-[1.4]">
            {certificationsToDisplay.map((cert, i) => (
              <li key={i}>
                <span className="font-bold">{cert.name}</span>
                <br />
                {cert.organization && <>{cert.organization}<br /></>}
                {cert.license && <>{cert.license}<br /></>}
                Issued: {cert.issueDate}, Expires: {cert.expiryDate}
                {cert.link && (
                  <>
                    <br />
                    <a
                      href={cert.link}
                      className="text-[#0000EE] underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cert.link.replace(/^https?:\/\//, "")}
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase bg-[#e6f0fa] text-center py-[5px] border-b border-[#b3d4fc] mb-[8px]">
            Skills
          </h2>
          <div className="flex justify-between text-[12px]">
            {skillColumns.map((col, i) => (
              <div className="w-[22%]" key={i}>
                {col.map((skill, idx) => (
                  <p key={idx}>{skill}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase bg-[#e6f0fa] text-center py-[5px] border-b border-[#b3d4fc] mb-[8px]">
            Additional Information
          </h2>
          <div className="text-[12px] leading-[1.4]">
            <div className="font-bold">Languages</div>
            <ul className="list-disc pl-[20px] m-[5px_0]">
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
            <ul className="list-disc pl-[20px] m-[5px_0]">
              {additional.hobbies
                ? additional.hobbies
                    .map((hobby, i) => <li key={i}>{hobby.trim()}</li>)
                : ["Volunteering", "Fitness", "Medical Research"].map(
                    (hobby, i) => <li key={i}>{hobby}</li>
                  )}
            </ul>
            <div className="font-bold mt-[5px]">Achievements & Awards</div>
            <ul className="list-disc pl-[20px] m-[5px_0]">
              {(additional.achievements && additional.achievements.length > 0
                ? additional.achievements
                : [
                    {
                      name: "Nurse Excellence Award – Mercy General, 2021",
                      description: "Recognized for patient care innovation",
                    },
                    {
                      name: "Community Service Award – Portland Health Fair, 2020",
                      description: "Led health education workshops",
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

export default RESUME_ExpAndFresher_22;
