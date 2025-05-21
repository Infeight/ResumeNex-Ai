import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const Resume3 = () => {
  const {
    formData,
    summary,
    skills,
    projects,
    education,
    certificates,
    workExperience,
    additional,
  } = useResume();

  return (
    <div className="font-['Lora',serif] w-[794px] mx-auto my-[35px] bg-[#fffef7] p-[30px] border-2 border-[#2d6a4f] rounded-[8px] overflow-x-hidden text-[#3d3d3d]">
      {/* Header */}
      <div className="text-center pb-[15px] border-b-2 border-[#ff6f61]">
        <h1 className="text-[2.3em] font-bold text-[#ff6f61] m-0">
          {formData.firstName
            ? `${formData.firstName} ${formData.middleName ? formData.middleName + " " : ""}${formData.lastName}`
            : "Michael David Lee"}
        </h1>
        <p className="text-[1em] font-normal m-[6px_0] text-[#526a5f]">
          {formData.jobTitle ? formData.jobTitle : "Cloud Engineer"}
        </p>
        <p className="text-[1em] font-normal m-[6px_0] text-[#526a5f]">
          {formData.phoneNumber ? formData.phoneNumber : "(333) 555-7890"} |{" "}
          <a
            href={`mailto:${formData.email ? formData.email : "michael.lee@email.com"}`}
            className="text-[#2d6a4f] no-underline hover:underline"
          >
            {formData.email ? formData.email : "michael.lee@email.com"}
          </a>
        </p>
        <p className="text-[1em] font-normal m-[6px_0] text-[#526a5f]">
          <a
            href={formData.linkedin ? formData.linkedin : "https://linkedin.com/in/michaellee"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d6a4f] no-underline hover:underline"
          >
            {formData.linkedin
              ? formData.linkedin.replace(/^https?:\/\//, "")
              : "linkedin.com/in/michaellee"}
          </a>{" "}
          |{" "}
          <a
            href={formData.otherLink ? formData.otherLink : "https://michaellee.cloud"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d6a4f] no-underline hover:underline"
          >
            {formData.otherLink
              ? formData.otherLink.replace(/^https?:\/\//, "")
              : "michaellee.cloud"}
          </a>
        </p>
        <p className="text-[1em] font-normal m-[6px_0] text-[#526a5f]">
          {formData.city && formData.state && formData.pincode
            ? `${formData.city}, ${formData.state} ${formData.pincode}`
            : "789 Cloud Street, Seattle, WA 98101"}
        </p>
      </div>

      {/* Education */}
      <section className="mb-[25px]">
        <h2 className="text-[1.5em] font-bold text-[#2d6a4f] mt-[30px] pb-[5px] border-b border-[#2d6a4f]">
          Education
        </h2>
        {education && education.length > 0 && education[0].collegeName ? (
          education.map((edu, idx) => (
            <div className="m-[12px_0] p-[12px] border-l-3 border-[#ff6f61]" key={idx}>
              <h3 className="text-[1.15em] font-bold text-[#3f5d49] m-0">
                {edu.degree ? edu.degree : "B.Tech in Information Technology"}
              </h3>
              <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
                {edu.collegeName ? edu.collegeName : "University of Washington, IT"}{" "}
                | {edu.cgpa ? `CGPA: ${edu.cgpa}/4.0` : "CGPA: 3.9/4.0"}
              </p>
              <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
                {edu.startDate && edu.endDate
                  ? `${edu.startDate} - ${edu.endDate}`
                  : "Sep 2019 - Jun 2023"}
              </p>
            </div>
          ))
        ) : (
          <div className="m-[12px_0] p-[12px] border-l-3 border-[#ff6f61]">
            <h3 className="text-[1.15em] font-bold text-[#3f5d49] m-0">
              B.Tech in Information Technology
            </h3>
            <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
              University of Washington, IT | CGPA: 3.9/4.0
            </p>
            <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
              Sep 2019 - Jun 2023
            </p>
          </div>
        )}
      </section>

      {/* Projects */}
      <section className="mb-[25px]">
        <h2 className="text-[1.5em] font-bold text-[#2d6a4f] mt-[30px] pb-[5px] border-b border-[#2d6a4f]">
          Projects
        </h2>
        {projects && projects.length > 0 && projects[0].name ? (
          projects.map((project, idx) => (
            <div className="m-[12px_0] p-[12px] border-l-3 border-[#ff6f61]" key={idx}>
              <h3 className="text-[1.15em] font-bold text-[#3f5d49] m-0">
                {project.name ? project.name : "Cloud Backup System"}
              </h3>
              <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
                Technologies: {project.technologies ? project.technologies : "AWS, Python, Docker"} |{" "}
                {project.startDate && project.endDate
                  ? `${project.startDate} - ${project.endDate}`
                  : "Mar 2023 - May 2023"}
              </p>
              <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
                <a
                  href={project.link ? project.link : "https://github.com/michaellee/cloud-backup"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2d6a4f] no-underline hover:underline"
                >
                  {project.link
                    ? project.link.replace(/^https?:\/\//, "")
                    : "github.com/michaellee/cloud-backup"}
                </a>
              </p>
              <ul className="list-square pl-[20px] m-[10px_0]">
                {project.description
                  ? project.description
                      .split("\n")
                      .map((desc, i) => (
                        <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]" key={i}>
                          {desc}
                        </li>
                      ))
                  : [
                      <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]" key="1">
                        Designed an AWS-based backup system for 1TB data.
                      </li>,
                      <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]" key="2">
                        Automated backups with Python, saving 10 hrs/week.
                      </li>,
                      <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]" key="3">
                        Enhanced security with Docker containerization.
                      </li>,
                    ]}
              </ul>
            </div>
          ))
        ) : (
          <div className="m-[12px_0] p-[12px] border-l-3 border-[#ff6f61]">
            <h3 className="text-[1.15em] font-bold text-[#3f5d49] m-0">
              Cloud Backup System
            </h3>
            <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
              Technologies: AWS, Python, Docker | Mar 2023 - May 2023
            </p>
            <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
              <a
                href="https://github.com/michaellee/cloud-backup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2d6a4f] no-underline hover:underline"
              >
                github.com/michaellee/cloud-backup
              </a>
            </p>
            <ul className="list-square pl-[20px] m-[10px_0]">
              <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
                Designed an AWS-based backup system for 1TB data.
              </li>
              <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
                Automated backups with Python, saving 10 hrs/week.
              </li>
              <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
                Enhanced security with Docker containerization.
              </li>
            </ul>
          </div>
        )}
      </section>

      {/* Work Experience */}
      <section className="mb-[25px]">
        <h2 className="text-[1.5em] font-bold text-[#2d6a4f] mt-[30px] pb-[5px] border-b border-[#2d6a4f]">
          Work Experience
        </h2>
        {workExperience && workExperience.length > 0 && workExperience[0].companyName ? (
          workExperience.map((work, idx) => (
            <div className="m-[12px_0] p-[12px] border-l-3 border-[#ff6f61]" key={idx}>
              <h3 className="text-[1.15em] font-bold text-[#3f5d49] m-0">
                {work.jobTitle ? work.jobTitle : "Cloud Engineering Intern"}
              </h3>
              <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
                {work.companyName ? work.companyName : "Microsoft"} |{" "}
                {work.startDate && work.endDate
                  ? `${work.startDate} - ${work.endDate}`
                  : "Jun 2022 - Aug 2022"}
              </p>
              <ul className="list-square pl-[20px] m-[10px_0]">
                {work.responsibilities
                  ? work.responsibilities
                      .split("\n")
                      .map((resp, i) => (
                        <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]" key={i}>
                          {resp}
                        </li>
                      ))
                  : [
                      <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]" key="1">
                        Managed Azure deployments for 5+ internal apps.
                      </li>,
                      <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]" key="2">
                        Optimized cloud costs by 15% with resource tags.
                      </li>,
                      <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]" key="3">
                        Automated monitoring with scripts, reducing downtime.
                      </li>,
                    ]}
              </ul>
            </div>
          ))
        ) : (
          <div className="m-[12px_0] p-[12px] border-l-3 border-[#ff6f61]">
            <h3 className="text-[1.15em] font-bold text-[#3f5d49] m-0">
              Cloud Engineering Intern
            </h3>
            <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
              Microsoft | Jun 2022 - Aug 2022
            </p>
            <ul className="list-square pl-[20px] m-[10px_0]">
              <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
                Managed Azure deployments for 5+ internal apps.
              </li>
              <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
                Optimized cloud costs by 15% with resource tags.
              </li>
              <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
                Automated monitoring with scripts, reducing downtime.
              </li>
            </ul>
          </div>
        )}
      </section>

      {/* Certifications */}
      <section className="mb-[25px]">
        <h2 className="text-[1.5em] font-bold text-[#2d6a4f] mt-[30px] pb-[5px] border-b border-[#2d6a4f]">
          Certifications
        </h2>
        <ul className="list-square pl-[20px] m-[10px_0]">
          {certificates && certificates.length > 0 && certificates[0].name ? (
            certificates.map((cert, idx) => (
              <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]" key={idx}>
                <a
                  href={cert.link ? cert.link : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2d6a4f] no-underline hover:underline"
                >
                  {cert.name ? cert.name : "AWS Solutions Architect"}
                </a>{" "}
                - {cert.organization ? cert.organization : "AWS"}, Issued:{" "}
                {cert.issueDate ? cert.issueDate : "Oct 2023"}
              </li>
            ))
          ) : (
            <>
              <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
                <a
                  href="https://aws.amazon.com/cert789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2d6a4f] no-underline hover:underline"
                >
                  AWS Solutions Architect
                </a>{" "}
                - AWS, Issued: Oct 2023
              </li>
              <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
                Docker Certified Associate - Docker, Issued: Jul 2022, Expiry: Jul
                2025
              </li>
            </>
          )}
        </ul>
      </section>

      {/* Skills */}
      <section className="mb-[25px]">
        <h2 className="text-[1.5em] font-bold text-[#2d6a4f] mt-[30px] pb-[5px] border-b border-[#2d6a4f]">
          Skills
        </h2>
        <ul className="list-square pl-[20px] m-[10px_0]">
          <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
            Technical:{" "}
            {skills.technical && skills.technical.length > 0
              ? skills.technical.join(", ")
              : "AWS, Python, Docker, Kubernetes, Linux"}
          </li>
          <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
            Soft:{" "}
            {skills.soft && skills.soft.length > 0
              ? skills.soft.join(", ")
              : "Problem-Solving, Adaptability, Teamwork"}
          </li>
        </ul>
      </section>

      {/* Profile Summary */}
      <section className="mb-[25px]">
        <h2 className="text-[1.5em] font-bold text-[#2d6a4f] mt-[30px] pb-[5px] border-b border-[#2d6a4f]">
          Profile Summary
        </h2>
        <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
          {summary
            ? summary
            : "Cloud Engineer adept in AWS and Docker. Streamlined processes and boosted efficiency in tech projects. (102 chars)"}
        </p>
      </section>

      {/* Additional Information */}
      <section className="mb-[25px]">
        <h2 className="text-[1.5em] font-bold text-[#2d6a4f] mt-[30px] pb-[5px] border-b border-[#2d6a4f]">
          Additional Information
        </h2>
        <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
          <strong>Languages:</strong>{" "}
          {additional.languages && additional.languages.length > 0
            ? additional.languages.map(lang => `${lang.name} (${lang.proficiency})`).join(", ")
            : "English (Native), Mandarin (Intermediate)"}
        </p>
        <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
          <strong>Hobbies & Interests:</strong>{" "}
          {additional.hobbies ? additional.hobbies : "Cloud Computing, Cycling, Chess"}
        </p>
        <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
          <strong>Achievements:</strong>
        </p>
        <ul className="list-square pl-[20px] m-[10px_0]">
          {additional.achievements && additional.achievements.length > 0 ? (
            additional.achievements.map((ach, idx) => (
              <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]" key={idx}>
                {ach.name} - {ach.organization}, {ach.description}
              </li>
            ))
          ) : (
            <>
              <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
                Certified Cloud Expert - Global Tech, 2023: Achieved top scores.
              </li>
              <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
                Innovator Award - Microsoft Internship, 2022: Best automation tool.
              </li>
            </>
          )}
        </ul>
      </section>
    </div>
  );
};

export default Resume3;
