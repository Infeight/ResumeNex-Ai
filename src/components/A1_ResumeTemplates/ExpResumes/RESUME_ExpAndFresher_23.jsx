import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const RESUME_ExpAndFresher_23 = () => {
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
          degree: "Master’s in Data Science",
          collegeName: "New York University, New York, NY",
          stream: "Data Analytics",
          cgpa: "3.8/4.0",
          startDate: "Jan 2015",
          endDate: "Dec 2016",
        },
        {
          degree: "Bachelor’s in Statistics",
          collegeName: "Columbia University, New York, NY",
          stream: "Applied Statistics",
          cgpa: "3.7/4.0",
          startDate: "Sep 2011",
          endDate: "May 2015",
        },
      ];

  const projectsToDisplay = hasNonEmptyItem(projects)
    ? projects
    : [
        {
          name: "Sales Forecasting Model",
          technologies: "Python, Scikit-learn, Tableau",
          startDate: "Jan 2023",
          endDate: "Mar 2023",
          description: [
            "Built a predictive model, improving sales forecasts by 18%.",
            "Visualized results in Tableau for executive reporting.",
          ],
          link: "https://github.com/alexismanchester/sales-forecast",
        },
        {
          name: "Healthcare Analytics Dashboard",
          technologies: "R, Power BI, SQL",
          startDate: "Sep 2022",
          endDate: "Nov 2022",
          description: [
            "Developed a dashboard to track hospital KPIs, reducing analysis time by 20%.",
            "Integrated SQL for real-time data updates.",
          ],
          link: "https://github.com/alexismanchester/health-dashboard",
        },
      ];

  const certificationsToDisplay = hasNonEmptyItem(certificates)
    ? certificates
    : [
        {
          name: "Microsoft Certified: Data Analyst Associate",
          organization: "Microsoft",
          issueDate: "Jun 2023",
          expiryDate: "No Expiry",
          link: "https://learn.microsoft.com/certifications/data-analyst-associate",
        },
        {
          name: "Data Science Professional Certificate",
          organization: "Coursera",
          issueDate: "Feb 2023",
          expiryDate: "No Expiry",
          link: "https://coursera.org/certificates/data-science",
        },
      ];

  const workExperienceToDisplay = hasNonEmptyItem(workExperience)
    ? workExperience
    : [
        {
          jobTitle: "Senior Data Analyst",
          companyName: "DataCorp Solutions, New York, NY",
          startDate: "Jan 2019",
          endDate: "Present",
          summary: "Analyzed data for a leading fintech firm, specializing in predictive modeling.",
          responsibilities: [
            "Developed machine learning models, increasing forecast accuracy by 15%.",
            "Created Tableau dashboards, reducing reporting time by 25%.",
            "Led a team of 5 analysts, delivering projects 10% under budget.",
          ],
        },
        {
          jobTitle: "Data Analyst",
          companyName: "Insight Analytics, Boston, MA",
          startDate: "Jan 2017",
          endDate: "Dec 2018",
          summary: "Provided data insights for a healthcare analytics provider.",
          responsibilities: [
            "Optimized SQL queries, improving data retrieval speed by 30%.",
            "Visualized patient trends, enhancing care strategies for 10,000+ patients.",
            "Collaborated with engineers to automate data pipelines.",
          ],
        },
        {
          jobTitle: "Junior Data Analyst",
          companyName: "StatWorks, New York, NY",
          startDate: "Jun 2015",
          endDate: "Dec 2016",
          summary: "Supported statistical analysis for a consulting firm.",
          responsibilities: [
            "Conducted A/B testing, improving client campaign ROI by 12%.",
            "Prepared R-based reports, streamlining client presentations.",
          ],
        },
      ];

  // Skills fallback
  const technicalSkills =
    skills.technical && skills.technical.length > 0
      ? skills.technical
      : [
          "Python (Advanced)",
          "R (Advanced)",
          "SQL (Proficient)",
          "Tableau (Proficient)",
          "Power BI (Intermediate)",
          "Machine Learning (Intermediate)",
        ];

  const softSkills =
    skills.soft && skills.soft.length > 0
      ? skills.soft
      : [
          "Problem-Solving",
          "Critical Thinking",
          "Collaboration",
          "Communication",
          "Teamwork",
        ];

  const languagesToDisplay =
    additional.languages && additional.languages.length > 0
      ? additional.languages
      : [
          { name: "English", proficiency: "Fluent" },
          { name: "Spanish", proficiency: "Intermediate" },
        ];

  return (
    <div className="font-sans text-black bg-gray-100 min-h-screen flex justify-center items-start">
      <div
        className="bg-[#F5F5F5] shadow-md box-border overflow-hidden"
        style={{ width: "794px", padding: "20px" }}
      >
        {/* Header */}
        <div className="bg-[#FFE4C4] py-[5px] mb-[10px]">
          <div className="flex justify-between items-center px-[10px]">
            <h1 className="font-serif text-[26px] font-bold m-0">
              {formData.firstName || formData.middleName || formData.lastName
                ? `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim()
                : "Alexis Manchester"}
            </h1>
          </div>
          <hr className="border-t-2 border-black my-[5px] mx-[10px]" />
          <div className="text-[12px] text-right px-[10px]">
            {formData.jobTitle ? formData.jobTitle : "Data Analyst"}
          </div>
        </div>

        {/* Content */}
        <div className="flex justify-between relative">
          {/* Left Column */}
          <div className="w-[30%]">
            {/* Contact */}
            <div className="mb-[10px]">
              <h2 className="text-[20px] font-bold uppercase text-center mb-[5px]">
                Contact
              </h2>
              <hr className="border-t border-black mb-[5px]" />
              <div className="text-[12px] leading-[1.2]">
                <p className="m-[2px_0]">
                  <span className="mr-[5px]">📞</span>
                  {formData.phoneNumber ? formData.phoneNumber : "732-314-2399"}
                </p>
                <p className="m-[2px_0]">
                  <span className="mr-[5px]">✉</span>
                  <a
                    href={`mailto:${formData.email ? formData.email : "alexis.manchester@gmail.com"}`}
                    className="text-[#0000EE] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {formData.email ? formData.email : "alexis.manchester@gmail.com"}
                  </a>
                </p>
                <p className="m-[2px_0]">
                  <span className="mr-[5px]">🔗</span>
                  <a
                    href={formData.linkedin ? formData.linkedin : "https://linkedin.com/in/alexismanchester"}
                    className="text-[#0000EE] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {formData.linkedin
                      ? formData.linkedin.replace(/^https?:\/\//, "")
                      : "linkedin.com/in/alexismanchester"}
                  </a>
                </p>
                <p className="m-[2px_0]">
                  <span className="mr-[5px]">🌐</span>
                  <a
                    href={formData.otherLink ? formData.otherLink : "https://portfolio.alexismanchester.com"}
                    className="text-[#0000EE] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {formData.otherLink
                      ? formData.otherLink.replace(/^https?:\/\//, "")
                      : "portfolio.alexismanchester.com"}
                  </a>
                </p>
                <p className="m-[2px_0]">
                  <span className="mr-[5px]">📍</span>
                  {formData.city || formData.state || formData.pincode
                    ? `${formData.city}${formData.city ? ", " : ""}${formData.state}${formData.state ? ", " : ""}${formData.pincode}`
                    : "New York, NY, 10001"}
                </p>
                <p className="m-[2px_0]">
                  <span className="mr-[5px]">💻</span>
                  <a
                    href={formData.github ? formData.github : "https://github.com/alexismanchester"}
                    className="text-[#0000EE] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {formData.github
                      ? formData.github.replace(/^https?:\/\//, "")
                      : "github.com/alexismanchester"}
                  </a>
                </p>
                <p className="m-[2px_0]">
                  <span className="mr-[5px]">🎨</span>
                  <a
                    href={formData.figma ? formData.figma : "https://figma.com/@alexismanchester"}
                    className="text-[#0000EE] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {formData.figma
                      ? formData.figma.replace(/^https?:\/\//, "")
                      : "figma.com/@alexismanchester"}
                  </a>
                </p>
                <p className="m-[2px_0]">
                  <span className="mr-[5px]">🧩</span>
                  <a
                    href={formData.leetcode ? formData.leetcode : "https://leetcode.com/alexismanchester"}
                    className="text-[#0000EE] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {formData.leetcode
                      ? formData.leetcode.replace(/^https?:\/\//, "")
                      : "leetcode.com/alexismanchester"}
                  </a>
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="mb-[10px]">

   {/* Skills */}
            <div className="mb-[10px]">
              <h2 className="text-[20px] font-bold uppercase text-center mb-[5px]">
                Skills
              </h2>
              <hr className="border-t border-black mb-[5px]" />
              <div className="text-[12px] leading-[1.2]">
                <p className="m-[2px_0]">
                  <span className="font-bold">Technical Skills</span>
                </p>
                {technicalSkills.map((skill, i) => (
                  <p className="m-[2px_0]" key={i}>
                    {skill}
                  </p>
                ))}
                <hr className="border-t border-black my-[5px]" />
                <p className="m-[2px_0]">
                  <span className="font-bold">Languages</span>
                </p>
                <p className="m-[2px_0]">
                  {languagesToDisplay
                    .map((l) => `${l.name} (${l.proficiency})`)
                    .join(", ")}
                </p>
                <hr className="border-t border-black my-[5px]" />
                <p className="m-[2px_0]">
                  <span className="font-bold">Soft Skills</span>
                </p>
                {softSkills.map((skill, i) => (
                  <p className="m-[2px_0]" key={i}>
                    {skill}
                  </p>
                ))}
              </div>
            </div>

              <h2 className="text-[20px] font-bold uppercase text-center mb-[5px]">
                Education
              </h2>
              <hr className="border-t border-black mb-[5px]" />
              {educationToDisplay.map((edu, i) => (
                <div className="mb-[8px]" key={i}>
                  <div className="font-bold text-[12px]">{edu.degree}</div>
                  <div className="flex justify-between text-[12px]">
                    <p className="m-[2px_0]">
                      {edu.collegeName}
                      <br />
                      Stream: {edu.stream}
                    </p>
                    <p className="m-[2px_0] font-bold">
                      {edu.startDate} – {edu.endDate}
                    </p>
                  </div>
                  <div className="flex justify-between text-[12px]">
                    <p></p>
                    <p className="m-[2px_0] font-normal">CGPA: {edu.cgpa}</p>
                  </div>
                </div>
              ))}
            </div>

         
          </div>

          {/* Vertical Line */}
          <div
            className="absolute left-[32%] top-0 bottom-0 border-l border-black"
            style={{ height: "100%" }}
          ></div>

          {/* Right Column */}
          <div className="w-[65%]">
            {/* Summary */}
            <div className="mb-[10px]">
              <h2 className="text-[20px] font-bold uppercase text-center mb-[5px]">
                Summary
              </h2>
              <hr className="border-t border-black mb-[5px]" />
              <div className="text-[12px] text-justify leading-[1.2]">
                {summary
                  ? summary
                  : `Data Analyst with 7+ years of experience in transforming complex datasets into actionable insights, driving 15% revenue growth for Fortune 500 clients. Expert in Python, R, and SQL, with a Master’s in Data Science from NYU. Proven ability to develop predictive models and visualize trends using Tableau, enhancing decision-making efficiency by 20%. Skilled in cross-functional collaboration, delivering data-driven solutions aligned with business objectives.`}
              </div>
            </div>


              {/* Projects */}
            <div className="mb-[10px]">
              <h2 className="text-[20px] font-bold uppercase text-center mb-[5px]">
                Projects
              </h2>
              <hr className="border-t border-black mb-[5px]" />
              {projectsToDisplay.map((project, i) => (
                <div className="mb-[8px]" key={i}>
                  <div className="font-bold text-[12px]">{project.name}</div>
                  <p className="text-[12px] m-[2px_0]">
                    Technologies: {project.technologies} |{" "}
                    <span className="font-bold">
                      {project.startDate} – {project.endDate}
                    </span>
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


            {/* Work Experience */}
            <div className="mb-[10px]">
              <h2 className="text-[20px] font-bold uppercase text-center mb-[5px]">
                Work Experience
              </h2>
              <hr className="border-t border-black mb-[5px]" />
              {workExperienceToDisplay.map((exp, i) => (
                <div className="mb-[8px]" key={i}>
                  <div className="font-bold text-[12px]">{exp.jobTitle}</div>
                  <p className="text-[12px] m-[2px_0]">
                    {exp.companyName} |{" "}
                    <span className="font-bold">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </p>
                  {exp.summary && (
                    <p className="text-[12px] m-[2px_0]">{exp.summary}</p>
                  )}
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

          
            {/* Certifications */}
            <div className="mb-[10px]">
              <h2 className="text-[20px] font-bold uppercase text-center mb-[5px]">
                Certifications
              </h2>
              <hr className="border-t border-black mb-[5px]" />
              <ul className="list-disc pl-[20px] text-[12px] m-[3px_0] leading-[1.2]">
                {certificationsToDisplay.map((cert, i) => (
                  <li key={i}>
                    {cert.name}
                    {cert.organization && <> – {cert.organization}</>}
                    <br />
                    Issued: {cert.issueDate}, {cert.expiryDate}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_23;
