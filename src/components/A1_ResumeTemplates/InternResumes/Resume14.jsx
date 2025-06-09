import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const Resume14 = () => {
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
    <div className="font-[Georgia,serif] m-0 p-0 bg-white text-black">
      <div className="w-[794px] mx-auto my-[20px] p-5 overflow-x-hidden">
        {/* Header */}
        <div className="mb-[15px]">
          <div className="flex justify-between items-start">
            <div className="w-[65%]">
              <h1 className="text-[26px] font-bold text-left m-0 mb-[5px]">
                {formData.firstName || formData.middleName || formData.lastName
                  ? `${formData.firstName} ${formData.middleName ? formData.middleName + " " : ""}${formData.lastName}`
                  : "Sophia Marie Chen"}
              </h1>
              <p className="text-[15px] font-bold  m-[5px_0]">
                {formData.jobTitle ? formData.jobTitle : "UX Designer"}
              </p>
            </div>
          </div>
          <p className="text-[12px] m-[5px_0]">
            {formData.phoneNumber ? formData.phoneNumber : "(666) 987-6543"} |{" "}
            {formData.email ? formData.email : "sophia.chen@email.com"} |{" "}
            <a
              href={formData.linkedin ? formData.linkedin : "https://linkedin.com/in/sophiachen"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black no-underline hover:underline"
            >
              {formData.linkedin
                ? formData.linkedin.replace(/^https?:\/\//, "")
                : "linkedin.com/in/sophiachen"}
            </a>
            <br />
            <a
              href={formData.otherLink ? formData.otherLink : "https://sophiachen.design"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black no-underline hover:underline"
            >
              {formData.otherLink
                ? formData.otherLink.replace(/^https?:\/\//, "")
                : "sophiachen.design"}
            </a>
            {" | "}
            {formData.city && formData.state && formData.pincode
              ? `${formData.city}, ${formData.state} ${formData.pincode}`
              : "789 User Street, Portland, OR 97201"}
          </p>
        </div>


         {/* Profile Summary */}
        <section className="mb-[15px]">
          <h2 className="text-[20px] font-bold m-[15px_0_5px_0] border-b border-black">
            Profile Summary
          </h2>
          <div className="flex justify-between items-start">
            <div className="w-[65%]">
              <p className="text-[12px] m-[5px_0]">
                {summary
                  ? summary
                  : "Passionate UX Designer skilled in Figma, Adobe XD, and user testing. Proven track record of improving usability and user satisfaction through data-driven design solutions."}
              </p>
            </div>
            <div className="w-[30%] text-right">
              <p className="text-[12px] m-[5px_0]">
                Char Count: {summary ? summary.length : 145}
              </p>
            </div>
          </div>
        </section>


        
        {/* Skills */}
        <section className="mb-[15px]">
          <h2 className="text-[20px] font-bold m-[15px_0_5px_0] border-b border-black">
            Skills
          </h2>
          <div className="flex justify-between items-start">
            <div className="w-[65%]">
              <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
                <li>
                  Technical:{" "}
                  {skills.technical && skills.technical.length > 0
                    ? skills.technical.join(", ")
                    : "Figma, Adobe XD, UserTesting, Sketch"}
                </li>
                <li>
                  Soft:{" "}
                  {skills.soft && skills.soft.length > 0
                    ? skills.soft.join(", ")
                    : "Empathy, Creativity, Communication, Teamwork"}
                </li>
              </ul>
            </div>
            <div className="w-[30%] text-right">
              <p className="text-[12px] m-[5px_0]">
                Proficiency: {skills.proficiency ? skills.proficiency : "Expert"}
              </p>
              <p className="text-[12px] m-[5px_0]">
                Experience: {skills.experience ? skills.experience : "4+ Years"}
              </p>
            </div>
          </div>
        </section>


        {/* Projects */}
        <section className="mb-[15px]">
          <h2 className="text-[20px] font-bold m-[15px_0_5px_0] border-b border-black">
            Projects
          </h2>
          {projects && projects.length > 0 && projects[0].name ? (
            projects.map((project, idx) => (
              <div className={idx > 0 ? "mt-[10px]" : "mt-[5px]"} key={idx}>
                <div className="flex justify-between items-start">
                  <div className="w-[65%]">
                    <h3 className="text-[14px] font-bold m-[10px_0_5px_0]">
                      {project.name
                        ? project.name
                        : idx === 0
                        ? "Mobile Banking App Redesign"
                        : "E-Commerce Website Overhaul"}
                    </h3>
                    <p className="text-[12px] m-[5px_0]">
                      Technologies:{" "}
                      {project.technologies
                        ? project.technologies
                        : idx === 0
                        ? "Figma, Adobe XD, UserTesting"
                        : "Sketch, InVision, Google Analytics"}
                    </p>
                    <p className="text-[12px] m-[5px_0]">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black no-underline hover:underline"
                        >
                          {project.link.replace(/^https?:\/\//, "")}
                        </a>
                      ) : idx === 0 ? (
                        <a
                          href="https://github.com/sophiachen/banking-redesign"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black no-underline hover:underline"
                        >
                          github.com/sophiachen/banking-redesign
                        </a>
                      ) : (
                        <>
                          Portfolio:{" "}
                          <a
                            href="https://sophiachen.design/ecommerce"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black no-underline hover:underline"
                          >
                            sophiachen.design/ecommerce
                          </a>
                        </>
                      )}
                    </p>
                    <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
                      {project.description
                        ? project.description.split("\n").map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))
                        : idx === 0
                        ? [
                            <li key="1">Redesigned app UI in Figma, boosting usability 40%</li>,
                            <li key="2">Conducted 20+ user tests to refine navigation</li>,
                            <li key="3">Improved user satisfaction scores by 30%</li>,
                            <li key="4">Presented findings to a team of 15 stakeholders</li>,
                          ]
                        : [
                            <li key="1">Revamped checkout flow, reducing cart abandonment by 25%</li>,
                            <li key="2">Designed responsive layouts for mobile and desktop</li>,
                            <li key="3">Analyzed user data to optimize product placement</li>,
                          ]}
                    </ul>
                  </div>
                  <div className="w-[30%] text-right">
                    <p className="text-[12px] m-[5px_0]">
                      {project.startDate && project.endDate
                        ? `${project.startDate} - ${project.endDate}`
                        : idx === 0
                        ? "March 2022 - May 2022"
                        : "January 2023 - April 2023"}
                    </p>
                    <p className="text-[12px] m-[5px_0]">
                      {project.teamSize
                        ? `Team Size: ${project.teamSize}`
                        : idx === 0
                        ? "Team Size: 4"
                        : "Users Tested: 50+"}
                    </p>
                    <p className="text-[12px] m-[5px_0]">
                      {project.impact
                        ? `Outcome: ${project.impact}`
                        : idx === 0
                        ? "Outcome: Adopted by Client"
                        : "Impact: +15% Sales"}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="mt-[5px]">
                <div className="flex justify-between items-start">
                  <div className="w-[65%]">
                    <h3 className="text-[14px] font-bold m-[10px_0_5px_0]">
                      Mobile Banking App Redesign
                    </h3>
                    <p className="text-[12px] m-[5px_0]">
                      Technologies: Figma, Adobe XD, UserTesting
                    </p>
                    <p className="text-[12px] m-[5px_0]">
                      <a
                        href="https://github.com/sophiachen/banking-redesign"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black no-underline hover:underline"
                      >
                        github.com/sophiachen/banking-redesign
                      </a>
                    </p>
                    <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
                      <li>Redesigned app UI in Figma, boosting usability 40%</li>
                      <li>Conducted 20+ user tests to refine navigation</li>
                      <li>Improved user satisfaction scores by 30%</li>
                      <li>Presented findings to a team of 15 stakeholders</li>
                    </ul>
                  </div>
                  <div className="w-[30%] text-right">
                    <p className="text-[12px] m-[5px_0]">March 2022 - May 2022</p>
                    <p className="text-[12px] m-[5px_0]">Team Size: 4</p>
                    <p className="text-[12px] m-[5px_0]">
                      Outcome: Adopted by Client
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[10px]">
                <div className="flex justify-between items-start">
                  <div className="w-[65%]">
                    <h3 className="text-[14px] font-bold m-[10px_0_5px_0]">
                      E-Commerce Website Overhaul
                    </h3>
                    <p className="text-[12px] m-[5px_0]">
                      Technologies: Sketch, InVision, Google Analytics
                    </p>
                    <p className="text-[12px] m-[5px_0]">
                      Portfolio:{" "}
                      <a
                        href="https://sophiachen.design/ecommerce"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black no-underline hover:underline"
                      >
                        sophiachen.design/ecommerce
                      </a>
                    </p>
                    <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
                      <li>
                        Revamped checkout flow, reducing cart abandonment by 25%
                      </li>
                      <li>Designed responsive layouts for mobile and desktop</li>
                      <li>Analyzed user data to optimize product placement</li>
                    </ul>
                  </div>
                  <div className="w-[30%] text-right">
                    <p className="text-[12px] m-[5px_0]">
                      January 2023 - April 2023
                    </p>
                    <p className="text-[12px] m-[5px_0]">Users Tested: 50+</p>
                    <p className="text-[12px] m-[5px_0]">Impact: +15% Sales</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>


       


        {/* Education */}
        <section className="mb-[15px]">
          <h2 className="text-[20px] font-bold m-[15px_0_5px_0] border-b border-black">
            Education
          </h2>
          {education && education.length > 0 && education[0].collegeName ? (
            education.map((edu, idx) => (
              <div className="flex justify-between items-start" key={idx}>
                <div className="w-[65%]">
                  <h3 className="text-[14px] font-bold m-[10px_0_5px_0]">
                    {edu.degree ? edu.degree : "B.A. in Interaction Design"}
                  </h3>
                  <p className="text-[12px] m-[5px_0]">
                    {edu.collegeName
                      ? edu.collegeName
                      : "Portland State University, Portland, OR"}
                  </p>
                  <p className="text-[12px] m-[5px_0]">
                    {edu.stream
                      ? `Focus: ${edu.stream}`
                      : "Focus: User Experience and Interface Design"}
                  </p>
                </div>
                <div className="w-[30%] text-right">
                  <p className="text-[12px] m-[5px_0]">
                    {edu.startDate && edu.endDate
                      ? `${edu.startDate} - ${edu.endDate}`
                      : "September 2018 - May 2022"}
                  </p>
                  <p className="text-[12px] m-[5px_0]">
                    {edu.cgpa ? `CGPA: ${edu.cgpa}/4.0` : "CGPA: 3.95/4.0"}
                  </p>
                  <p className="text-[12px] m-[5px_0]">
                    {edu.honors ? edu.honors : "Dean’s List: 8 Semesters"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-between items-start">
              <div className="w-[65%]">
                <h3 className="text-[14px] font-bold m-[10px_0_5px_0]">
                  B.A. in Interaction Design
                </h3>
                <p className="text-[12px] m-[5px_0]">
                  Portland State University, Portland, OR
                </p>
                <p className="text-[12px] m-[5px_0]">
                  Focus: User Experience and Interface Design
                </p>
              </div>
              <div className="w-[30%] text-right">
                <p className="text-[12px] m-[5px_0]">
                  September 2018 - May 2022
                </p>
                <p className="text-[12px] m-[5px_0]">CGPA: 3.95/4.0</p>
                <p className="text-[12px] m-[5px_0]">Dean’s List: 8 Semesters</p>
              </div>
            </div>
          )}
        </section>

        
        {/* Work Experience */}
        <section className="mb-[15px]">
          <h2 className="text-[20px] font-bold m-[15px_0_5px_0] border-b border-black">
            Work Experience
          </h2>
          {workExperience && workExperience.length > 0 && workExperience[0].companyName ? (
            workExperience.map((work, idx) => (
              <div className={idx > 0 ? "mt-[10px]" : "mt-[5px]"} key={idx}>
                <div className="flex justify-between items-start">
                  <div className="w-[65%]">
                    <h3 className="text-[14px] font-bold m-[10px_0_5px_0]">
                      {work.jobTitle ? work.jobTitle : idx === 0 ? "UX Design Intern" : "Junior UX Designer"}
                    </h3>
                    <p className="text-[12px] m-[5px_0]">
                      {work.companyName
                        ? work.companyName
                        : idx === 0
                        ? "DesignFlow Studio, Portland, OR"
                        : "TechTrend Innovations, Remote"}
                    </p>
                    <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
                      {work.responsibilities
                        ? work.responsibilities.split("\n").map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))
                        : idx === 0
                        ? [
                            <li key="1">Created wireframes and prototypes in Adobe XD</li>,
                            <li key="2">Enhanced user flows, reducing clicks by 25%</li>,
                            <li key="3">Collaborated with devs to implement designs</li>,
                            <li key="4">Assisted in client presentations and feedback sessions</li>,
                          ]
                        : [
                            <li key="1">Led usability testing for a SaaS dashboard</li>,
                            <li key="2">Designed intuitive interfaces for enterprise clients</li>,
                            <li key="3">Reduced onboarding time by 20% through UI improvements</li>,
                          ]}
                    </ul>
                  </div>
                  <div className="w-[30%] text-right">
                    <p className="text-[12px] m-[5px_0]">
                      {work.startDate && work.endDate
                        ? `${work.startDate} - ${work.endDate}`
                        : idx === 0
                        ? "June 2021 - August 2021"
                        : "July 2022 - December 2023"}
                    </p>
                   
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="mt-[5px]">
                <div className="flex justify-between items-start">
                  <div className="w-[65%]">
                    <h3 className="text-[14px] font-bold m-[10px_0_5px_0]">
                      UX Design Intern
                    </h3>
                    <p className="text-[12px] m-[5px_0]">
                      DesignFlow Studio, Portland, OR
                    </p>
                    <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
                      <li>Created wireframes and prototypes in Adobe XD</li>
                      <li>Enhanced user flows, reducing clicks by 25%</li>
                      <li>Collaborated with devs to implement designs</li>
                      <li>Assisted in client presentations and feedback sessions</li>
                    </ul>
                  </div>
                  <div className="w-[30%] text-right">
                    <p className="text-[12px] m-[5px_0]">June 2021 - August 2021</p>
                 
                  </div>
                </div>
              </div>
              <div className="mt-[10px]">
                <div className="flex justify-between items-start">
                  <div className="w-[65%]">
                    <h3 className="text-[14px] font-bold m-[10px_0_5px_0]">
                      Junior UX Designer
                    </h3>
                    <p className="text-[12px] m-[5px_0]">
                      TechTrend Innovations, Remote
                    </p>
                    <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
                      <li>Led usability testing for a SaaS dashboard</li>
                      <li>Designed intuitive interfaces for enterprise clients</li>
                      <li>Reduced onboarding time by 20% through UI improvements</li>
                    </ul>
                  </div>
                  <div className="w-[30%] text-right">
                    <p className="text-[12px] m-[5px_0]">
                      July 2022 - December 2023
                    </p>
                  
                  </div>
                </div>
              </div>
            </>
          )}
        </section>

        {/* Certifications */}
        <section className="mb-[15px]">
          <h2 className="text-[20px] font-bold m-[15px_0_5px_0] border-b border-black">
            Certifications
          </h2>
          <div className="flex justify-between items-start">
            <div className="w-[65%]">
              <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
                {certificates && certificates.length > 0 && certificates[0].name ? (
                  certificates.map((cert, idx) => (
                    <li key={idx}>
                      {cert.name}
                      {cert.organization ? ` - ${cert.organization}` : ""}
                    </li>
                  ))
                ) : (
                  <>
                    <li>UX Design Professional - Coursera</li>
                    <li>Human-Centered Design - IDEO</li>
                    <li>Advanced Prototyping - Udemy</li>
                  </>
                )}
              </ul>
            </div>
            <div className="w-[30%] text-right">
              {certificates && certificates.length > 0 && certificates[0].issueDate ? (
                certificates.map((cert, idx) => (
                  <p className="text-[12px] m-[5px_0]" key={idx}>
                    Issued: {cert.issueDate}
                  </p>
                ))
              ) : (
                <>
                  <p className="text-[12px] m-[5px_0]">Issued: October 2022</p>
                  <p className="text-[12px] m-[5px_0]">Issued: July 2021</p>
                  <p className="text-[12px] m-[5px_0]">Issued: March 2023</p>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="mb-[15px]">
          <h2 className="text-[20px] font-bold m-[15px_0_5px_0] border-b border-black">
            Additional Information
          </h2>
          <div className="flex justify-between items-start">
            <div className="w-[65%]">
              <p className="text-[12px] m-[5px_0]">
                Languages:{" "}
                {additional.languages && additional.languages.length > 0
                  ? additional.languages.map(lang => `${lang.name} (${lang.proficiency})`).join(", ")
                  : "English (Native), Mandarin (Fluent)"}
              </p>
              <p className="text-[12px] m-[5px_0]">
                Hobbies & Interests:{" "}
                {additional.hobbies
                  ? additional.hobbies
                  : "UI Design, Drawing, Yoga, Photography"}
              </p>
              <p className="text-[12px] m-[5px_0]">Achievements:</p>
              <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
                {additional.achievements && additional.achievements.length > 0 ? (
                  additional.achievements.map((ach, idx) => (
                    <li key={idx}>
                      {ach.name}
                      {ach.organization ? ` - ${ach.organization}` : ""}
                      {ach.description ? `: ${ach.description}` : ""}
                    </li>
                  ))
                ) : (
                  <>
                    <li>Best UX Project - PSU, 2022: Top mobile app redesign</li>
                    <li>Design Award - TechTrend, 2023: Innovative Dashboard UI</li>
                  </>
                )}
              </ul>
            </div>
            <div className="w-[30%] text-right">
              <p className="text-[12px] m-[5px_0]">
                Fluency: {additional.fluency ? additional.fluency : "C2 Level"}
              </p>
              <p className="text-[12px] m-[5px_0]">
                Years Active: {additional.yearsActive ? additional.yearsActive : "5+"}
              </p>
              <p className="text-[12px] m-[5px_0]">
                Award Dates: {additional.awardDate ? additional.awardDate : "2022, 2023"}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume14;
