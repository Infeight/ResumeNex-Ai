import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const RESUME_ExpAndFresher_24 = () => {
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
          degree: "B.Sc. in Nursing",
          collegeName: "University of Illinois, Chicago, IL",
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
          name: "Patient Monitoring Dashboard",
          technologies: "Tableau, Python",
          startDate: "Jan 2023",
          endDate: "Mar 2023",
          description: [
            "Developed a dashboard to track patient vitals, improving response time by 10%.",
            "Used Python for data integration from EMR systems.",
          ],
          link: "https://github.com/leahcamille/monitoring",
        },
        {
          name: "Health Education Portal",
          technologies: "HTML, CSS",
          startDate: "Sep 2022",
          endDate: "Nov 2022",
          description: [
            "Built a portal for patient education, reaching 600+ users.",
            "Ensured accessibility compliance for diverse audiences.",
          ],
          link: "https://github.com/leahcamille/health-portal",
        },
      ];

  const certificationsToDisplay = hasNonEmptyItem(certificates)
    ? certificates
    : [
        {
          name: "Registered Nurse (RN)",
          organization: "Illinois Board of Nursing",
          license: "License #654321",
          issueDate: "Jun 2015",
          expiryDate: "Jun 2025",
          link: "",
        },
        {
          name: "Certified Critical Care Nurse",
          organization: "AACN",
          issueDate: "Sep 2022",
          expiryDate: "Sep 2026",
          link: "https://aacn.org/certifications",
        },
      ];

  const workExperienceToDisplay = hasNonEmptyItem(workExperience)
    ? workExperience
    : [
        {
          jobTitle: "Registered Nurse",
          companyName: "Northwestern Memorial Hospital, Chicago, IL",
          startDate: "June 2015",
          endDate: "Present",
          responsibilities: [
            "Led triage in a 60-bed ER, reducing patient wait times by 15%.",
            "Managed maternity care for 20+ patients weekly, improving satisfaction by 10%.",
            "Implemented EMR updates, ensuring 98% data accuracy.",
            "Trained 15 nurses on patient advocacy protocols, enhancing care quality.",
          ],
        },
        {
          jobTitle: "Nurse Practitioner (Contract)",
          companyName: "Rush University Medical Center, Chicago, IL",
          startDate: "June 2014",
          endDate: "May 2015",
          responsibilities: [
            "Provided care for 30+ patients daily, achieving 90% positive feedback.",
            "Optimized IV management, reducing complications by 12%.",
            "Collaborated on care plans, improving recovery rates by 8%.",
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
          "Patient Care",
          "Electronic Medical Records",
          "Patient Triage",
        ];

  const softSkills =
    skills.soft && skills.soft.length > 0
      ? skills.soft
      : [
          "Maternity",
          "Leadership",
          "Communication",
          "Teamwork",
          "Problem Solving",
        ];

  const otherSkills =
    skills.related && skills.related.trim()
      ? skills.related.split(",").map((s) => s.trim())
      : [
          "Critical Thinking",
          "Time Management",
          "Decision Making",
          "Patient Advocacy",
          "Active Listening",
        ];

  const languagesToDisplay =
    additional.languages && additional.languages.length > 0
      ? additional.languages
      : [
          { name: "English", proficiency: "Fluent" },
          { name: "French", proficiency: "Intermediate" },
        ];

  const hobbiesToDisplay = additional.hobbies
    ? additional.hobbies.map((h) => h.trim())
    : ["Volunteering", "Yoga", "Medical Research"];

  const achievementsToDisplay =
    additional.achievements && additional.achievements.length > 0
      ? additional.achievements
      : [
          {
            name: "Nurse Leadership Award – Northwestern, 2021",
            description: "Recognized for ER efficiency initiatives",
          },
          {
            name: "Community Health Award – Chicago Health Fair, 2020",
            description: "Led patient education workshops",
          },
        ];

  return (
    <div className="font-sans text-black bg-gray-100 min-h-screen flex justify-center items-start py-[20px]">
      <div className="w-full max-w-[754px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b-2 border-black pb-[5px] mb-[10px]">
          <div className="text-left">
            <h1 className="text-[26px] font-bold m-0">
              {formData.firstName || formData.middleName || formData.lastName
                ? `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim()
                : "Leah Camille"}
            </h1>
            <p className="text-[12px] m-[2px_0]">
              {formData.jobTitle ? formData.jobTitle : "Registered Nurse, RN, BScN"}
            </p>
          </div>
          <div className="text-[24px]">
            <i className="fas fa-heartbeat"></i>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center text-[12px] mb-[10px] flex flex-wrap justify-center gap-x-[10px]">
          <span>
            <i className="fas fa-phone mr-[5px]"></i>
            {formData.phoneNumber ? formData.phoneNumber : "123-321-5555"}
          </span>
          <span>
            <i className="fas fa-envelope mr-[5px]"></i>
            <a
              href={`mailto:${formData.email ? formData.email : "leah.camille@gmail.com"}`}
              className="text-[#0000EE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {formData.email ? formData.email : "leah.camille@gmail.com"}
            </a>
          </span>
          <span>
            <i className="fas fa-map-marker-alt mr-[5px]"></i>
            {formData.city || formData.state || formData.pincode
              ? `${formData.city}${formData.city ? ", " : ""}${formData.state}${formData.state ? ", " : ""}${formData.pincode}`
              : "Chicago, IL, 60601"}
          </span>
          <span>
            <i className="fab fa-linkedin mr-[5px]"></i>
            <a
              href={formData.linkedin ? formData.linkedin : "https://linkedin.com/in/leahcamille"}
              className="text-[#0000EE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {formData.linkedin
                ? formData.linkedin.replace(/^https?:\/\//, "")
                : "linkedin.com/in/leahcamille"}
            </a>
          </span>

            <span>
              <a
                href={formData.github ? formData.github : "https://github.com/in/spencernova"}
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.github
                  ? formData.github.replace(/^https?:\/\//, "")
                  : "github.com/in/spencernova"}
              </a>
            </span>

          <span>
            <i className="fas fa-globe mr-[5px]"></i>
            <a
              href={formData.otherLink ? formData.otherLink : "https://portfolio.leahcamille.com"}
              className="text-[#0000EE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {formData.otherLink
                ? formData.otherLink.replace(/^https?:\/\//, "")
                : "portfolio.leahcamille.com"}
            </a>
          </span>

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

        </div>

        {/* Professional Summary */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-center relative mb-[8px] before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[30%] before:h-[1px] before:bg-black after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[30%] after:h-[1px] after:bg-black">
            Professional Summary
          </h2>
          <p className="text-[12px] leading-[1.4]">
            {summary
              ? summary
              : `Compassionate Registered Nurse with 8+ years of experience in emergency and maternity care, improving patient outcomes by 20% through effective triage and advocacy. Skilled in electronic medical records and interdisciplinary teamwork, with a proven record of leading initiatives that reduced ER wait times by 15%. Dedicated to delivering high-quality care in fast-paced healthcare environments.`}
          </p>
        </div>

        {/* Skills */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-center relative mb-[8px] before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[30%] before:h-[1px] before:bg-black after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[30%] after:h-[1px] after:bg-black">
            Skills
          </h2>
          <div className="flex justify-between text-[12px]">
            <ul className="list-none p-0 m-0">
              <li className="mb-[5px]">
                <span className="font-bold">Technical Skills</span>
              </li>
              {technicalSkills.map((skill, i) => (
                <li className="mb-[5px]" key={i}>
                  {skill}
                </li>
              ))}
            </ul>
            <ul className="list-none p-0 m-0">
              <li className="mb-[5px]">
                <span className="font-bold">Soft Skills</span>
              </li>
              {softSkills.map((skill, i) => (
                <li className="mb-[5px]" key={i}>
                  {skill}
                </li>
              ))}
            </ul>
            <ul className="list-none p-0 m-0">
              <li className="mb-[5px]">
                <span className="font-bold">Other Skills</span>
              </li>
              {otherSkills.map((skill, i) => (
                <li className="mb-[5px]" key={i}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>


         {/* Projects */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-center relative mb-[8px] before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[30%] before:h-[1px] before:bg-black after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[30%] after:h-[1px] after:bg-black">
            Projects
          </h2>
          {projectsToDisplay.map((project, i) => (
            <div className="mb-[10px]" key={i}>
              <p className="text-[12px]">
                <span className="font-bold">{project.name}</span>
                <br />
                Technologies: {project.technologies}
                <br />
                <span className="font-bold">
                  {project.startDate} – {project.endDate}
                </span>
              </p>
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


        {/* Education */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-center relative mb-[8px] before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[30%] before:h-[1px] before:bg-black after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[30%] after:h-[1px] after:bg-black">
            Education
          </h2>
          <div className="flex justify-between text-[12px]">
            {educationToDisplay.map((edu, i) => (
              <div className="w-[48%]" key={i}>
                <p>
                  <span className="font-bold">{edu.degree}</span>
                  <br />
                  {edu.collegeName}
                  <br />
                  Stream: {edu.stream}
                  <br />
                  <span className="font-bold">
                    {edu.startDate} – {edu.endDate}
                  </span>
                </p>
                <p>
                  <span className="font-bold">CGPA</span>
                  <br />
                  {edu.cgpa}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-center relative mb-[8px] before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[30%] before:h-[1px] before:bg-black after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[30%] after:h-[1px] after:bg-black">
            Work Experience
          </h2>
          {workExperienceToDisplay.map((exp, i) => (
            <div className="mb-[10px]" key={i}>
              <p className="text-[12px]">
                <span className="font-bold">{exp.jobTitle}</span>
                <br />
                {exp.companyName}
                <br />
                <span className="font-bold">
                  {exp.startDate} – {exp.endDate}
                </span>
              </p>
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

        

        {/* Certifications */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-center relative mb-[8px] before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[30%] before:h-[1px] before:bg-black after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[30%] after:h-[1px] after:bg-black">
            Certifications
          </h2>
          <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] leading-[1.4]">
            {certificationsToDisplay.map((cert, i) => (
              <li key={i}>
                <span className="font-bold">{cert.name}</span>
                <br />
                {cert.organization && <>{cert.organization}, </>}
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

       

        {/* Additional Information */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-center relative mb-[8px] before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[30%] before:h-[1px] before:bg-black after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[30%] after:h-[1px] after:bg-black">
            Additional Information
          </h2>
          <div className="text-[12px] leading-[1.4]">
            <div className="font-bold">Languages</div>
            <ul className="list-disc pl-[20px] m-[5px_0]">
              {languagesToDisplay.map((lang, i) => (
                <li key={i}>
                  {lang.name} ({lang.proficiency})
                </li>
              ))}
            </ul>
            <div className="font-bold mt-[5px]">Hobbies & Interests</div>
            <ul className="list-disc pl-[20px] m-[5px_0]">
              {hobbiesToDisplay.map((hobby, i) => (
                <li key={i}>{hobby}</li>
              ))}
            </ul>
            <div className="font-bold mt-[5px]">Achievements & Awards</div>
            <ul className="list-disc pl-[20px] m-[5px_0]">
              {achievementsToDisplay.map((ach, i) => (
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

export default RESUME_ExpAndFresher_24;
