import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const Resume6 = () => {
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
    <div className="font-['Roboto_Slab',serif] w-[210mm] max-w-[880px] mx-auto my-[35px] p-5 bg-white text-[#2d2d2d] border-2 border-[#3c6e71]">
      {/* Header */}
      <div className="border-b-2 border-[#780000] pb-[10px] text-center mb-[30px]">
        <h1 className="text-[26px] font-bold text-[#780000]">
          {formData.firstName || formData.middleName || formData.lastName
            ? `${formData.firstName} ${formData.middleName ? formData.middleName + " " : ""}${formData.lastName}`
            : "Sophia Marie Evans"}
        </h1>
        <p className="text-[16px] text-[#3c6e71] mt-[5px]">
          {formData.jobTitle ? formData.jobTitle : "Marketing Specialist"}
        </p>
        <p className="text-[16px] text-[#3c6e71] mt-[5px]">
          {formData.phoneNumber ? formData.phoneNumber : "(666) 777-8888"} |{" "}
          <a
            href={`mailto:${formData.email ? formData.email : "sophia.evans@email.com"}`}
            className="text-[#3c6e71] hover:text-[#780000] underline"
          >
            {formData.email ? formData.email : "sophia.evans@email.com"}
          </a>
        </p>
        <p className="text-[16px] text-[#3c6e71] mt-[5px]">
          <a
            href={formData.linkedin ? formData.linkedin : "https://linkedin.com/in/sophiaevans"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3c6e71] hover:text-[#780000] underline"
          >
            {formData.linkedin
              ? formData.linkedin.replace(/^https?:\/\//, "")
              : "linkedin.com/in/sophiaevans"}
          </a>{" "}
          |{" "}
          <a
            href={formData.otherLink ? formData.otherLink : "https://sophiaevans.marketing"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3c6e71] hover:text-[#780000] underline"
          >
            {formData.otherLink
              ? formData.otherLink.replace(/^https?:\/\//, "")
              : "sophiaevans.marketing"}
          </a>
        </p>
        <p className="text-[16px] text-[#3c6e71] mt-[5px]">
          {formData.city && formData.state && formData.pincode
            ? `${formData.city}, ${formData.state} ${formData.pincode}`
            : "987 Brand St, Chicago, IL 60614"}
        </p>
      </div>


      {/* Profile Summary */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#3c6e71] border-b-2 border-[#780000] pb-[5px] mb-[15px]">
          Profile Summary
        </h2>
        <div className="flex justify-between">
          <div className="w-[65%]">
            <p className="text-[16px] text-[#555555]">
              {summary
                ? summary
                : "Marketing Specialist excelling in social media and analytics. Drove engagement and growth through data-driven strategies."}
            </p>
          </div>
          <div className="w-[30%] text-right">
            <p className="text-[16px] text-[#555555]">
              Char Count: {summary ? summary.length : 125}
            </p>
          </div>
        </div>
      </section>


      {/* Skills */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#3c6e71] border-b-2 border-[#780000] pb-[5px] mb-[15px]">
          Skills
        </h2>
        <div className="flex justify-between">
          <div className="w-[65%]">
            <ul className="list-disc pl-[25px]">
              <li className="text-[16px] text-[#444444]">
                Technical:{" "}
                {skills.technical && skills.technical.length > 0
                  ? skills.technical.join(", ")
                  : "Hootsuite, Canva, Google Analytics, SEO"}
              </li>
              <li className="text-[16px] text-[#444444]">
                Soft:{" "}
                {skills.soft && skills.soft.length > 0
                  ? skills.soft.join(", ")
                  : "Communication, Creativity, Data Analysis"}
              </li>
            </ul>
          </div>
          <div className="w-[30%] text-right">
            <p className="text-[16px] text-[#555555]">
              Proficiency: {skills.proficiency ? skills.proficiency : "Advanced"}
            </p>
            <p className="text-[16px] text-[#555555]">
              Experience: {skills.experience ? skills.experience : "3+ Years"}
            </p>
          </div>
        </div>
      </section>

      

       {/* Projects */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#3c6e71] border-b-2 border-[#780000] pb-[5px] mb-[15px]">
          Projects
        </h2>
        {projects && projects.length > 0 && projects[0].name ? (
          projects.map((project, idx) => (
            <div className="flex justify-between mb-[15px]" key={idx}>
              <div className="w-[65%]">
                <h3 className="text-[18px] font-bold text-[#2d2d2d] m-[5px_0]">
                  {project.name ? project.name : "Social Media Campaign"}
                </h3>
                <p className="text-[16px] text-[#555555]">
                  Technologies: {project.technologies ? project.technologies : "Hootsuite, Canva, Google Analytics"}
                </p>
                <p className="text-[16px] text-[#555555]">
                  <a
                    href={project.link ? project.link : "https://github.com/sophiaevans/social-campaign"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3c6e71] hover:text-[#780000] underline"
                  >
                    {project.link
                      ? project.link.replace(/^https?:\/\//, "")
                      : "github.com/sophiaevans/social-campaign"}
                  </a>
                </p>
                <ul className="list-disc pl-[25px]">
                  {project.description
                    ? project.description.split("\n").map((desc, i) => (
                        <li className="text-[16px] text-[#444444]" key={i}>{desc}</li>
                      ))
                    : (
                      <>
                        <li className="text-[16px] text-[#444444]">
                          Launched a campaign boosting engagement by 40%.
                        </li>
                        <li className="text-[16px] text-[#444444]">
                          Designed visuals in Canva for 10+ platforms.
                        </li>
                        <li className="text-[16px] text-[#444444]">
                          Tracked metrics with Google Analytics for ROI.
                        </li>
                      </>
                    )}
                </ul>
              </div>
              <div className="w-[30%] text-right">
                <p className="text-[16px] text-[#555555]">
                  {project.startDate && project.endDate
                    ? `${project.startDate} - ${project.endDate}`
                    : "Jan 2023 - Mar 2023"}
                </p>
                <p className="text-[16px] text-[#555555]">
                  {project.teamSize ? `Team Size: ${project.teamSize}` : "Team Size: 3"}
                </p>
                <p className="text-[16px] text-[#555555]">
                  {project.impact ? `Impact: ${project.impact}` : "Impact: +40% Engagement"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-between mb-[15px]">
            <div className="w-[65%]">
              <h3 className="text-[18px] font-bold text-[#2d2d2d] m-[5px_0]">
                Social Media Campaign
              </h3>
              <p className="text-[16px] text-[#555555]">
                Technologies: Hootsuite, Canva, Google Analytics
              </p>
              <p className="text-[16px] text-[#555555]">
                <a
                  href="https://github.com/sophiaevans/social-campaign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3c6e71] hover:text-[#780000] underline"
                >
                  github.com/sophiaevans/social-campaign
                </a>
              </p>
              <ul className="list-disc pl-[25px]">
                <li className="text-[16px] text-[#444444]">
                  Launched a campaign boosting engagement by 40%.
                </li>
                <li className="text-[16px] text-[#444444]">
                  Designed visuals in Canva for 10+ platforms.
                </li>
                <li className="text-[16px] text-[#444444]">
                  Tracked metrics with Google Analytics for ROI.
                </li>
              </ul>
            </div>
            <div className="w-[30%] text-right">
              <p className="text-[16px] text-[#555555]">Jan 2023 - Mar 2023</p>
              <p className="text-[16px] text-[#555555]">Team Size: 3</p>
              <p className="text-[16px] text-[#555555]">
                Impact: +40% Engagement
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Education */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#3c6e71] border-b-2 border-[#780000] pb-[5px] mb-[15px]">
          Education
        </h2>
        {education && education.length > 0 && education[0].collegeName ? (
          education.map((edu, idx) => (
            <div className="flex justify-between" key={idx}>
              <div className="w-[65%]">
                <h3 className="text-[18px] font-bold text-[#2d2d2d] m-[5px_0]">
                  {edu.degree ? edu.degree : "B.A. in Marketing"}
                </h3>
                <p className="text-[16px] text-[#555555]">
                  {edu.collegeName ? edu.collegeName : "University of Illinois, Marketing"}
                </p>
                <p className="text-[16px] text-[#555555]">
                  {edu.stream ? `Focus: ${edu.stream}` : "Focus: Digital Marketing Strategies"}
                </p>
              </div>
              <div className="w-[30%] text-right">
                <p className="text-[16px] text-[#555555]">
                  {edu.startDate && edu.endDate
                    ? `${edu.startDate} - ${edu.endDate}`
                    : "Aug 2018 - May 2022"}
                </p>
                <p className="text-[16px] text-[#555555]">
                  {edu.cgpa ? `CGPA: ${edu.cgpa}/4.0` : "CGPA: 3.9/4.0"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-between">
            <div className="w-[65%]">
              <h3 className="text-[18px] font-bold text-[#2d2d2d] m-[5px_0]">
                B.A. in Marketing
              </h3>
              <p className="text-[16px] text-[#555555]">
                University of Illinois, Marketing
              </p>
              <p className="text-[16px] text-[#555555]">
                Focus: Digital Marketing Strategies
              </p>
            </div>
            <div className="w-[30%] text-right">
              <p className="text-[16px] text-[#555555]">Aug 2018 - May 2022</p>
              <p className="text-[16px] text-[#555555]">CGPA: 3.9/4.0</p>
            </div>
          </div>
        )}
      </section>

     

      {/* Work Experience */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#3c6e71] border-b-2 border-[#780000] pb-[5px] mb-[15px]">
          Work Experience
        </h2>
        {workExperience && workExperience.length > 0 && workExperience[0].companyName ? (
          workExperience.map((work, idx) => (
            <div className="flex justify-between mb-[15px]" key={idx}>
              <div className="w-[65%]">
                <h3 className="text-[18px] font-bold text-[#2d2d2d] m-[5px_0]">
                  {work.jobTitle ? work.jobTitle : "Marketing Intern"}
                </h3>
                <p className="text-[16px] text-[#555555]">
                  {work.companyName ? work.companyName : "BrandBoost"}, {formData.city ? formData.city : "Chicago, IL"}
                </p>
                <ul className="list-disc pl-[25px]">
                  {work.responsibilities
                    ? work.responsibilities.split("\n").map((resp, i) => (
                        <li className="text-[16px] text-[#444444]" key={i}>{resp}</li>
                      ))
                    : (
                      <>
                        <li className="text-[16px] text-[#444444]">
                          Managed social media posts for 5 client accounts.
                        </li>
                        <li className="text-[16px] text-[#444444]">
                          Increased follower growth by 25% in 2 months.
                        </li>
                        <li className="text-[16px] text-[#444444]">
                          Analyzed campaign data to refine strategies.
                        </li>
                      </>
                    )}
                </ul>
              </div>
              <div className="w-[30%] text-right">
                <p className="text-[16px] text-[#555555]">
                  {work.startDate && work.endDate
                    ? `${work.startDate} - ${work.endDate}`
                    : "Jun 2021 - Aug 2021"}
                </p>
                <p className="text-[16px] text-[#555555]">
                  {work.clients ? `Clients: ${work.clients}` : "Clients: 5"}
                </p>
                <p className="text-[16px] text-[#555555]">
                  {work.supervisor ? `Supervisor: ${work.supervisor}` : "Supervisor: John Smith"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-between mb-[15px]">
            <div className="w-[65%]">
              <h3 className="text-[18px] font-bold text-[#2d2d2d] m-[5px_0]">
                Marketing Intern
              </h3>
              <p className="text-[16px] text-[#555555]">
                BrandBoost, Chicago, IL
              </p>
              <ul className="list-disc pl-[25px]">
                <li className="text-[16px] text-[#444444]">
                  Managed social media posts for 5 client accounts.
                </li>
                <li className="text-[16px] text-[#444444]">
                  Increased follower growth by 25% in 2 months.
                </li>
                <li className="text-[16px] text-[#444444]">
                  Analyzed campaign data to refine strategies.
                </li>
              </ul>
            </div>
            <div className="w-[30%] text-right">
              <p className="text-[16px] text-[#555555]">Jun 2021 - Aug 2021</p>
              <p className="text-[16px] text-[#555555]">Clients: 5</p>
              <p className="text-[16px] text-[#555555]">Supervisor: John Smith</p>
            </div>
          </div>
        )}
      </section>

      {/* Certifications */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#3c6e71] border-b-2 border-[#780000] pb-[5px] mb-[15px]">
          Certifications
        </h2>
        <div className="flex justify-between">
          <div className="w-[65%]">
            <ul className="list-disc pl-[25px]">
              {certificates && certificates.length > 0 && certificates[0].name ? (
                certificates.map((cert, idx) => (
                  <li className="text-[16px] text-[#444444]" key={idx}>
                    <a
                      href={cert.link ? cert.link : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3c6e71] hover:text-[#780000] underline"
                    >
                      {cert.name ? cert.name : "Inbound Marketing"}
                    </a>{" "}
                    - {cert.organization ? cert.organization : "HubSpot"}
                  </li>
                ))
              ) : (
                <>
                  <li className="text-[16px] text-[#444444]">
                    <a
                      href="https://hubspot.com/cert987"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3c6e71] hover:text-[#780000] underline"
                    >
                      Inbound Marketing
                    </a>{" "}
                    - HubSpot
                  </li>
                  <li className="text-[16px] text-[#444444]">
                    Google Analytics Individual Qualification - Google
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="w-[30%] text-right">
            {certificates && certificates.length > 0 && certificates[0].issueDate ? (
              certificates.map((cert, idx) => (
                <p className="text-[16px] text-[#555555]" key={idx}>
                  Issued: {cert.issueDate}
                </p>
              ))
            ) : (
              <>
                <p className="text-[16px] text-[#555555]">Issued: Oct 2023</p>
                <p className="text-[16px] text-[#555555]">Issued: Jun 2022</p>
              </>
            )}
          </div>
        </div>
      </section>

      

      {/* Additional Information */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#3c6e71] border-b-2 border-[#780000] pb-[5px] mb-[15px]">
          Additional Information
        </h2>
        <div className="flex justify-between">
          <div className="w-[65%]">
            <p className="text-[16px] text-[#555555]">
              Languages:{" "}
              {additional.languages && additional.languages.length > 0
                ? additional.languages.map(lang => `${lang.name} (${lang.proficiency})`).join(", ")
                : "English (Fluent), Italian (Intermediate)"}
            </p>
            <p className="text-[16px] text-[#555555]">
              Hobbies & Interests:{" "}
              {additional.hobbies
                ? additional.hobbies
                : "Branding, Photography, Blogging"}
            </p>
            <p className="text-[16px] text-[#555555]">Achievements:</p>
            <ul className="list-disc pl-[25px]">
              {additional.achievements && additional.achievements.length > 0 ? (
                additional.achievements.map((ach, idx) => (
                  <li className="text-[16px] text-[#444444]" key={idx}>
                    {ach.name}
                    {ach.organization ? ` - ${ach.organization}` : ""}
                    {ach.description ? `: ${ach.description}` : ""}
                  </li>
                ))
              ) : (
                <li className="text-[16px] text-[#444444]">
                  Marketing Star Award - UIUC: Top campaign design
                </li>
              )}
            </ul>
          </div>
          <div className="w-[30%] text-right">
            <p className="text-[16px] text-[#555555]">
              Fluency: {additional.fluency ? additional.fluency : "C2 Level"}
            </p>
            <p className="text-[16px] text-[#555555]">
              Years Active: {additional.yearsActive ? additional.yearsActive : "4+"}
            </p>
            <p className="text-[16px] text-[#555555]">
              Award Date: {additional.awardDate ? additional.awardDate : "2022"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume6;
