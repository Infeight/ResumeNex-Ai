import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const Resume16 = () => {
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
    <div className="font-sans w-[210mm] max-w-[880px] mx-auto my-[35px] p-5 bg-white text-[#222]">
      {/* Header */}
      <div className="border-b-2 border-[#333] pb-[10px] text-center mb-[30px]">
        <h1 className="text-[28px] font-bold text-[#111] mb-[5px]">
          {formData.firstName
            ? `${formData.firstName} ${formData.middleName ? formData.middleName + " " : ""}${formData.lastName}`.toUpperCase()
            : "SOPHIA MARIE EVANS"}
        </h1>
        <p className="text-[16px] font-semibold text-[#333] mb-[5px]">
          {formData.jobTitle ? formData.jobTitle : "Marketing Specialist"}
        </p>
        <p className="text-[16px] text-[#444]">
          {formData.phoneNumber ? formData.phoneNumber : "(666) 777-8888"} | {formData.email ? formData.email : "sophia.evans@email.com"}
        </p>
        <p className="text-[16px] text-[#444]">
          {formData.linkedin
            ? formData.linkedin.replace(/^https?:\/\//, "")
            : "linkedin.com/in/sophiaevans"}{" "}
          |{" "}
          {formData.otherLink
            ? formData.otherLink.replace(/^https?:\/\//, "")
            : "sophiaevans.marketing"}
        </p>
        <p className="text-[16px] text-[#444]">
          {formData.city && formData.state && formData.pincode
            ? `${formData.city}, ${formData.state} ${formData.pincode}`
            : "987 Brand St, Chicago, IL 60614"}
        </p>
      </div>

      {/* Education */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#111] border-b-2 border-[#333] pb-[5px] mb-[15px]">
          EDUCATION
        </h2>
        {education && education.length > 0 && education[0].collegeName ? (
          education.map((edu, idx) => (
            <div className="flex justify-between" key={idx}>
              <div className="w-[65%]">
                <h3 className="text-[18px] font-bold text-[#222] mb-[5px]">
                  {edu.degree ? edu.degree : "B.A. in Marketing"}
                </h3>
                <p className="text-[16px] text-[#444]">
                  {edu.collegeName ? edu.collegeName : "University of Illinois, Marketing"}
                </p>
                <p className="text-[16px] text-[#444]">
                  {edu.stream ? `Focus: ${edu.stream}` : "Focus: Digital Marketing Strategies"}
                </p>
              </div>
              <div className="w-[30%] text-right">
                <p className="text-[16px] font-semibold text-[#444]">
                  {edu.startDate && edu.endDate
                    ? `${edu.startDate} - ${edu.endDate}`
                    : "Aug 2018 - May 2022"}
                </p>
                <p className="text-[16px] text-[#444]">
                  {edu.cgpa ? `CGPA: ${edu.cgpa}` : "CGPA: 3.9/4.0"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-between">
            <div className="w-[65%]">
              <h3 className="text-[18px] font-bold text-[#222] mb-[5px]">
                B.A. in Marketing
              </h3>
              <p className="text-[16px] text-[#444]">
                University of Illinois, Marketing
              </p>
              <p className="text-[16px] text-[#444]">
                Focus: Digital Marketing Strategies
              </p>
            </div>
            <div className="w-[30%] text-right">
              <p className="text-[16px] font-semibold text-[#444]">
                Aug 2018 - May 2022
              </p>
              <p className="text-[16px] text-[#444]">CGPA: 3.9/4.0</p>
            </div>
          </div>
        )}
      </section>

      {/* Projects */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#111] border-b-2 border-[#333] pb-[5px] mb-[15px]">
          PROJECTS
        </h2>
        {projects && projects.length > 0 && projects[0].name ? (
          projects.map((project, idx) => (
            <div className="flex justify-between mb-[15px]" key={idx}>
              <div className="w-[65%]">
                <h3 className="text-[18px] font-bold text-[#222] mb-[5px]">
                  {project.name ? project.name : "Social Media Campaign"}
                </h3>
                <p className="text-[16px] text-[#444]">
                  Technologies: {project.technologies ? project.technologies : "Hootsuite, Canva, Google Analytics"}
                </p>
                <p className="text-[16px] text-[#444]">
                  {project.link
                    ? project.link.replace(/^https?:\/\//, "")
                    : "github.com/sophiaevans/social-campaign"}
                </p>
                <ul className="list-disc pl-[25px]">
                  {project.description
                    ? project.description.split("\n").map((desc, i) => (
                        <li className="text-[16px] text-[#444]" key={i}>{desc}</li>
                      ))
                    : (
                      <>
                        <li className="text-[16px] text-[#444]">
                          Launched a campaign boosting engagement by 40%.
                        </li>
                        <li className="text-[16px] text-[#444]">
                          Designed visuals in Canva for 10+ platforms.
                        </li>
                        <li className="text-[16px] text-[#444]">
                          Tracked metrics with Google Analytics for ROI.
                        </li>
                      </>
                    )}
                </ul>
              </div>
              <div className="w-[30%] text-right">
                <p className="text-[16px] font-semibold text-[#444]">
                  {project.startDate && project.endDate
                    ? `${project.startDate} - ${project.endDate}`
                    : "Jan 2023 - Mar 2023"}
                </p>
                <p className="text-[16px] text-[#444]">
                  {project.teamSize ? `Team Size: ${project.teamSize}` : "Team Size: 3"}
                </p>
                <p className="text-[16px] text-[#444]">
                  {project.impact ? `Impact: ${project.impact}` : "Impact: +40% Engagement"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-between mb-[15px]">
            <div className="w-[65%]">
              <h3 className="text-[18px] font-bold text-[#222] mb-[5px]">
                Social Media Campaign
              </h3>
              <p className="text-[16px] text-[#444]">
                Technologies: Hootsuite, Canva, Google Analytics
              </p>
              <p className="text-[16px] text-[#444]">
                github.com/sophiaevans/social-campaign
              </p>
              <ul className="list-disc pl-[25px]">
                <li className="text-[16px] text-[#444]">
                  Launched a campaign boosting engagement by 40%.
                </li>
                <li className="text-[16px] text-[#444]">
                  Designed visuals in Canva for 10+ platforms.
                </li>
                <li className="text-[16px] text-[#444]">
                  Tracked metrics with Google Analytics for ROI.
                </li>
              </ul>
            </div>
            <div className="w-[30%] text-right">
              <p className="text-[16px] font-semibold text-[#444]">
                Jan 2023 - Mar 2023
              </p>
              <p className="text-[16px] text-[#444]">Team Size: 3</p>
              <p className="text-[16px] text-[#444]">Impact: +40% Engagement</p>
            </div>
          </div>
        )}
      </section>

      {/* Work Experience */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#111] border-b-2 border-[#333] pb-[5px] mb-[15px]">
          WORK EXPERIENCE
        </h2>
        {workExperience && workExperience.length > 0 && workExperience[0].companyName ? (
          workExperience.map((work, idx) => (
            <div className="flex justify-between mb-[15px]" key={idx}>
              <div className="w-[65%]">
                <h3 className="text-[18px] font-bold text-[#222] mb-[5px]">
                  {work.jobTitle ? work.jobTitle : "Marketing Intern"}
                </h3>
                <p className="text-[16px] text-[#444]">
                  {work.companyName
                    ? work.companyName
                    : "BrandBoost, Chicago, IL"}
                </p>
                <ul className="list-disc pl-[25px]">
                  {work.responsibilities
                    ? work.responsibilities.split("\n").map((resp, i) => (
                        <li className="text-[16px] text-[#444]" key={i}>{resp}</li>
                      ))
                    : (
                      <>
                        <li className="text-[16px] text-[#444]">
                          Managed social media posts for 5 client accounts.
                        </li>
                        <li className="text-[16px] text-[#444]">
                          Increased follower growth by 25% in 2 months.
                        </li>
                        <li className="text-[16px] text-[#444]">
                          Analyzed campaign data to refine strategies.
                        </li>
                      </>
                    )}
                </ul>
              </div>
              <div className="w-[30%] text-right">
                <p className="text-[16px] font-semibold text-[#444]">
                  {work.startDate && work.endDate
                    ? `${work.startDate} - ${work.endDate}`
                    : "Jun 2021 - Aug 2021"}
                </p>
                <p className="text-[16px] text-[#444]">
                  {work.clients ? `Clients: ${work.clients}` : "Clients: 5"}
                </p>
                <p className="text-[16px] text-[#444]">
                  {work.supervisor ? `Supervisor: ${work.supervisor}` : "Supervisor: John Smith"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-between mb-[15px]">
            <div className="w-[65%]">
              <h3 className="text-[18px] font-bold text-[#222] mb-[5px]">
                Marketing Intern
              </h3>
              <p className="text-[16px] text-[#444]">BrandBoost, Chicago, IL</p>
              <ul className="list-disc pl-[25px]">
                <li className="text-[16px] text-[#444]">
                  Managed social media posts for 5 client accounts.
                </li>
                <li className="text-[16px] text-[#444]">
                  Increased follower growth by 25% in 2 months.
                </li>
                <li className="text-[16px] text-[#444]">
                  Analyzed campaign data to refine strategies.
                </li>
              </ul>
            </div>
            <div className="w-[30%] text-right">
              <p className="text-[16px] font-semibold text-[#444]">
                Jun 2021 - Aug 2021
              </p>
              <p className="text-[16px] text-[#444]">Clients: 5</p>
              <p className="text-[16px] text-[#444]">Supervisor: John Smith</p>
            </div>
          </div>
        )}
      </section>

      {/* Certifications */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#111] border-b-2 border-[#333] pb-[5px] mb-[15px]">
          CERTIFICATIONS
        </h2>
        <div className="flex justify-between">
          <div className="w-[65%]">
            <ul className="list-disc pl-[25px]">
              {certificates && certificates.length > 0 && certificates[0].name ? (
                certificates.map((cert, idx) => (
                  <li className="text-[16px] text-[#444]" key={idx}>
                    {cert.name}
                    {cert.organization ? ` - ${cert.organization}` : ""}
                  </li>
                ))
              ) : (
                <>
                  <li className="text-[16px] text-[#444]">
                    Inbound Marketing - HubSpot
                  </li>
                  <li className="text-[16px] text-[#444]">
                    Google Analytics Individual Qualification - Google
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="w-[30%] text-right">
            {certificates && certificates.length > 0 && certificates[0].issueDate ? (
              certificates.map((cert, idx) => (
                <p className="text-[16px] font-semibold text-[#444]" key={idx}>
                  Issued: {cert.issueDate}
                </p>
              ))
            ) : (
              <>
                <p className="text-[16px] font-semibold text-[#444]">
                  Issued: Oct 2023
                </p>
                <p className="text-[16px] text-[#444]">Issued: Jun 2022</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#111] border-b-2 border-[#333] pb-[5px] mb-[15px]">
          SKILLS
        </h2>
        <div className="flex justify-between">
          <div className="w-[65%]">
            <ul className="list-disc pl-[25px]">
              <li className="text-[16px] text-[#444]">
                Technical:{" "}
                {skills.technical && skills.technical.length > 0
                  ? skills.technical.join(", ")
                  : "Hootsuite, Canva, Google Analytics, SEO"}
              </li>
              <li className="text-[16px] text-[#444]">
                Soft:{" "}
                {skills.soft && skills.soft.length > 0
                  ? skills.soft.join(", ")
                  : "Communication, Creativity, Data Analysis"}
              </li>
            </ul>
          </div>
         
        </div>
      </section>

      {/* Profile Summary */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#111] border-b-2 border-[#333] pb-[5px] mb-[15px]">
          PROFILE SUMMARY
        </h2>
        <div className="flex justify-between">
          <div className="w-[65%]">
            <p className="text-[16px] text-[#444]">
              {summary
                ? summary
                : "Marketing Specialist excelling in social media and analytics. Drove engagement and growth through data-driven strategies."}
            </p>
          </div>
          <div className="w-[30%] text-right">
            <p className="text-[16px] text-[#444]">
              Char Count: {summary ? summary.length : 125}
            </p>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#111] border-b-2 border-[#333] pb-[5px] mb-[15px]">
          ADDITIONAL INFORMATION
        </h2>
        <div className="flex justify-between">
          <div className="w-[65%]">
            <p className="text-[16px] text-[#444]">
              Languages:{" "}
              {additional.languages && additional.languages.length > 0
                ? additional.languages.map(lang => `${lang.name} (${lang.proficiency})`).join(", ")
                : "English (Fluent), Italian (Intermediate)"}
            </p>
            <p className="text-[16px] text-[#444]">
              Hobbies & Interests:{" "}
              {additional.hobbies
                ? additional.hobbies
                : "Branding, Photography, Blogging"}
            </p>
            <p className="text-[16px] text-[#444]">Achievements:</p>
            <ul className="list-disc pl-[25px]">
              {additional.achievements && additional.achievements.length > 0 ? (
                additional.achievements.map((ach, idx) => (
                  <li className="text-[16px] text-[#444]" key={idx}>
                    {ach.name}
                    {ach.organization ? ` - ${ach.organization}` : ""}
                    {ach.description ? `: ${ach.description}` : ""}
                  </li>
                ))
              ) : (
                <li className="text-[16px] text-[#444]">
                  Marketing Star Award - UIUC: Top campaign design
                </li>
              )}
            </ul>
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default Resume16;
