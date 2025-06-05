import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const RESUME_ExpAndFresher_30 = () => {
  const {
    formData,
    summary,
    workExperience,
    education,
    certificates,
    projects,
    skills,
    additional,
  } = useResume();

  return (
    <div className="font-['Times_New_Roman',Times,serif] text-[#000000] text-[11pt] leading-[1.5] max-w-[800px] mx-auto my-[20px] p-[20px] bg-white">
      {/* Header */}
      <header className="text-center mb-[20px]">
        <h1 className="text-[18pt] font-bold mb-[5px]">
          {formData.firstName || formData.middleName || formData.lastName
            ? `${formData.firstName} ${formData.middleName ? formData.middleName + " " : ""}${formData.lastName}`
            : "Jarupula Vinayak"}
        </h1>
        <h3 className="text-[14pt] font-normal mb-[5px]">
          {formData.jobTitle ? formData.jobTitle : "Product Manager"}
        </h3>
        <p className="text-[11pt]">
          <a
            href={`tel:${formData.phoneNumber ? formData.phoneNumber : "+917093941996"}`}
            className="text-[#0000FF] no-underline hover:underline"
          >
            {formData.phoneNumber ? formData.phoneNumber : "+91 7093941996"}
          </a>{" "}
          ○{" "}
          <a
            href={`mailto:${formData.email ? formData.email : "jarpulavinayak757@gmail.com"}`}
            className="text-[#0000FF] no-underline hover:underline"
          >
            {formData.email ? formData.email : "jarpulavinayak757@gmail.com"}
          </a>{" "}
          ○{" "}
          {formData.city && formData.state && formData.pincode
            ? `${formData.city}, ${formData.state}, ${formData.pincode}, India`
            : "Hyderabad, Telangana, 500037, India"}
          ○{" "}
          <a
            href={formData.linkedin ? formData.linkedin : "https://linkedin.com/in/jarupulavinayak"}
            className="text-[#0000FF] no-underline hover:underline"
          >
            {formData.linkedin
              ? formData.linkedin.replace(/^https?:\/\//, "")
              : "linkedin.com/in/jarupulavinayak"}
          </a>{" "}
          ○{" "}
          <a
            href={formData.github ? formData.github : "https://github.com/jarupulavinayak"}
            className="text-[#0000FF] no-underline hover:underline"
          >
            {formData.github
              ? formData.github.replace(/^https?:\/\//, "")
              : "github.com/jarupulavinayak"}
          </a>
        </p>
      </header>

      {/* Summary */}
      <section className="mb-[20px]">
        <h2 className="text-[14pt] font-bold uppercase border-b border-[#000000] pb-[5px] mb-[10px]">
          Summary
        </h2>
        <p>
          {summary
            ? summary
            : `Results-driven Senior Product Manager with over two years of
          experience in scaling digital products. Expert in product vision,
          roadmap planning, and cross-functional collaboration, driving 30% user
          growth at Esha Technology. Skilled in data-driven decisions, agile methodologies, and leveraging AI to enhance UX and business outcomes.`}
        </p>
      </section>

      {/* Professional Experience */}
      <section className="mb-[20px]">
        <h2 className="text-[14pt] font-bold uppercase border-b border-[#000000] pb-[5px] mb-[10px]">
          Professional Experience
        </h2>
        {workExperience && workExperience.length > 0 && workExperience[0].companyName ? (
          workExperience.map((work, idx) => (
            <div className="mb-[15px]" key={idx}>
              <div className="flex justify-between items-start mb-[5px]">
                <div className="flex-1">
                  <h3 className="text-[12pt] font-bold mb-[5px]">
                    {work.jobTitle ? work.jobTitle : "Product Manager"}
                  </h3>
                  <p className="italic mb-[5px]">
                    {work.companyName ? work.companyName : "Esha Technology"}
                  </p>
                </div>
                <div className="text-right min-w-[150px]">
                  {work.startDate && work.endDate
                    ? `${work.startDate} - ${work.endDate}`
                    : "Jan 2024 - Present"}
                </div>
              </div>
              <ul className="list-disc ml-[20px] mb-[10px]">
                {work.responsibilities
                  ? work.responsibilities.split("\n").map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))
                  : <>
                      <li>
                        Led product lifecycle from ideation to launch, increasing user
                        engagement by 25%.
                      </li>
                      <li>
                        Developed data-driven strategies using analytics, enhancing
                        feature adoption by 20%.
                      </li>
                      <li>
                        Collaborated with engineering and marketing teams to align product
                        vision with business goals.
                      </li>
                      <li>
                        Conducted market research, identifying 5+ innovation
                        opportunities.
                      </li>
                      <li>
                        Streamlined agile processes, reducing delivery timelines by 15%.
                      </li>
                    </>
                }
              </ul>
            </div>
          ))
        ) : (
          <div className="mb-[15px]">
            <div className="flex justify-between items-start mb-[5px]">
              <div className="flex-1">
                <h3 className="text-[12pt] font-bold mb-[5px]">
                  Product Manager
                </h3>
                <p className="italic mb-[5px]">Esha Technology</p>
              </div>
              <div className="text-right min-w-[150px]">Jan 2024 - Present</div>
            </div>
            <ul className="list-disc ml-[20px] mb-[10px]">
              <li>
                Led product lifecycle from ideation to launch, increasing user
                engagement by 25%.
              </li>
              <li>
                Developed data-driven strategies using analytics, enhancing
                feature adoption by 20%.
              </li>
              <li>
                Collaborated with engineering and marketing teams to align product
                vision with business goals.
              </li>
              <li>
                Conducted market research, identifying 5+ innovation
                opportunities.
              </li>
              <li>
                Streamlined agile processes, reducing delivery timelines by 15%.
              </li>
            </ul>
          </div>
        )}
      </section>

      {/* Education */}
      <section className="mb-[20px]">
        <h2 className="text-[14pt] font-bold uppercase border-b border-[#000000] pb-[5px] mb-[10px]">
          Education
        </h2>
        {education && education.length > 0 && education[0].collegeName ? (
          education.map((edu, idx) => (
            <div className="flex justify-between items-start mb-[5px]" key={idx}>
              <div className="flex-1">
                <p>
                  <strong>
                    {edu.collegeName
                      ? edu.collegeName
                      : "Indian Institute of Information Technology, Design and Manufacturing"}
                  </strong>
                  {edu.degree && ` (${edu.degree})`}
                  {edu.cgpa && ` (GPA: ${edu.cgpa})`}
                  {edu.stream && `, ${edu.stream}`}
                </p>
              </div>
              <div className="text-right min-w-[150px]">
                {edu.startDate && edu.endDate
                  ? `${edu.startDate} - ${edu.endDate}`
                  : "Jul 2018 - Mar 2022"}
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="flex justify-between items-start mb-[5px]">
              <div className="flex-1">
                <p>
                  <strong>
                    Indian Institute of Information Technology, Design and Manufacturing
                  </strong>
                </p>
              </div>
              <div className="text-right min-w-[150px]">Jul 2018 - Mar 2022</div>
            </div>
            <div className="flex justify-between items-start mb-[5px]">
              <div className="flex-1">
                <p>
                  <strong>Sri Chaitanya Junior (GPA: 6.0)</strong>
                </p>
              </div>
              <div className="text-right min-w-[150px]">Jun 2016 - May 2018</div>
            </div>
            <div className="flex justify-between items-start mb-[5px]">
              <div className="flex-1">
                <p>
                  <strong>MPC Group (Percentage: 86%)</strong>
                </p>
              </div>
              <div className="text-right min-w-[150px]"></div>
            </div>
          </>
        )}
      </section>

      {/* Certifications */}
      <section className="mb-[20px]">
        <h2 className="text-[14pt] font-bold uppercase border-b border-[#000000] pb-[5px] mb-[10px]">
          Certifications
        </h2>
        <ul className="list-disc ml-[20px] mb-[10px]">
          {certificates && certificates.length > 0 && certificates[0].name ? (
            certificates.map((cert, idx) => (
              <li className="flex justify-between items-start mb-[5px]" key={idx}>
                <div className="flex-1">
                  <a
                    href={cert.link ? cert.link : "#"}
                    className="text-[#0000FF] no-underline hover:underline"
                  >
                    {cert.name
                      ? `${cert.name}${cert.organization ? `, ${cert.organization}` : ""}`
                      : "Certification Name"}
                  </a>
                </div>
                <div className="text-right min-w-[150px]">
                  {cert.issueDate ? cert.issueDate : "Feb 2025"}
                </div>
              </li>
            ))
          ) : (
            <>
              <li className="flex justify-between items-start mb-[5px]">
                <div className="flex-1">
                  <a
                    href="https://pendo.io/cert/ai-for-pm"
                    className="text-[#0000FF] no-underline hover:underline"
                  >
                    AI for Product Management, Pendo.io
                  </a>
                </div>
                <div className="text-right min-w-[150px]">Feb 2025</div>
              </li>
              <li className="flex justify-between items-start mb-[5px]">
                <div className="flex-1">
                  <a
                    href="https://productled.com/cert/product-led-growth"
                    className="text-[#0000FF] no-underline hover:underline"
                  >
                    Product-Led Growth Fundamentals Certification, ProductLed
                  </a>
                </div>
                <div className="text-right min-w-[150px]">Feb 2025</div>
              </li>
              <li className="flex justify-between items-start mb-[5px]">
                <div className="flex-1">
                  <a
                    href="https://pendo.io/cert/product-analytics"
                    className="text-[#0000FF] no-underline hover:underline"
                  >
                    Product Analytics Certification, Pendo.io
                  </a>
                </div>
                <div className="text-right min-w-[150px]">Feb 2025</div>
              </li>
              <li className="flex justify-between items-start mb-[5px]">
                <div className="flex-1">
                  <a
                    href="https://simplilearn.com/cert/product-management-101"
                    className="text-[#0000FF] no-underline hover:underline"
                  >
                    Product Management 101, Simplilearn SkillUp
                  </a>
                </div>
                <div className="text-right min-w-[150px]">Feb 2025</div>
              </li>
              <li className="flex justify-between items-start mb-[5px]">
                <div className="flex-1">
                  <a
                    href="https://simplilearn.com/cert/agile-scrum-master"
                    className="text-[#0000FF] no-underline hover:underline"
                  >
                    Agile Scrum Master, Simplilearn
                  </a>
                </div>
                <div className="text-right min-w-[150px]">Feb 2025</div>
              </li>
            </>
          )}
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-[20px]">
        <h2 className="text-[14pt] font-bold uppercase border-b border-[#000000] pb-[5px] mb-[10px]">
          Projects
        </h2>
        {projects && projects.length > 0 && projects[0].name ? (
          projects.map((project, idx) => (
            <div className="mb-[15px]" key={idx}>
              <div className="flex justify-between items-start mb-[5px]">
                <div className="flex-1">
                  <p>
                    <strong>{project.name ? project.name : "Esha Technology"}</strong>,{" "}
                    <a
                      href={project.link ? project.link : "https://esha-technology.com"}
                      className="text-[#0000FF] no-underline hover:underline"
                    >
                      {project.link
                        ? project.link.replace(/^https?:\/\//, "")
                        : "esha-technology.com"}
                    </a>{" "}
                    | {project.location ? project.location : "Hyderabad, India"}
                  </p>
                </div>
                <div className="text-right min-w-[150px]">
                  {project.startDate && project.endDate
                    ? `${project.startDate} - ${project.endDate}`
                    : "Nov 2024 - Jan 2025"}
                </div>
              </div>
              <ul className="list-disc ml-[20px] mb-[10px]">
                {project.description
                  ? project.description.split("\n").map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))
                  : <>
                      <li>
                        Led product strategy and execution, driving 20% growth in user
                        adoption.
                      </li>
                      <li>
                        Defined AI-driven product roadmap through market research and
                        analytics.
                      </li>
                      <li>
                        Collaborated with teams to ensure seamless feature delivery.
                      </li>
                    </>
                }
              </ul>
            </div>
          ))
        ) : (
          <>
            <div className="mb-[15px]">
              <div className="flex justify-between items-start mb-[5px]">
                <div className="flex-1">
                  <p>
                    <strong>Esha Technology</strong>,{" "}
                    <a
                      href="https://esha-technology.com"
                      className="text-[#0000FF] no-underline hover:underline"
                    >
                      esha-technology.com
                    </a>{" "}
                    | Hyderabad, India
                  </p>
                </div>
                <div className="text-right min-w-[150px]">Nov 2024 - Jan 2025</div>
              </div>
              <ul className="list-disc ml-[20px] mb-[10px]">
                <li>
                  Led product strategy and execution, driving 20% growth in user
                  adoption.
                </li>
                <li>
                  Defined AI-driven product roadmap through market research and
                  analytics.
                </li>
                <li>
                  Collaborated with teams to ensure seamless feature delivery.
                </li>
              </ul>
            </div>
            <div className="mb-[15px]">
              <div className="flex justify-between items-start mb-[5px]">
                <div className="flex-1">
                  <p>
                    <strong>Megha Finserv</strong>,{" "}
                    <a
                      href="https://esha-technology.com/megha-finserv"
                      className="text-[#0000FF] no-underline hover:underline"
                    >
                      esha-technology.com/megha-finserv
                    </a>{" "}
                    | Hyderabad, India
                  </p>
                </div>
                <div className="text-right min-w-[150px]">Nov 2024 - Dec 2024</div>
              </div>
              <ul className="list-disc ml-[20px] mb-[10px]">
                <li>
                  Drove fintech product innovation, increasing customer retention by
                  15%.
                </li>
                <li>
                  Managed product roadmap with focus on scalable financial
                  solutions.
                </li>
                <li>Collaborated with teams to deliver user-centric features.</li>
              </ul>
            </div>
            <div className="mb-[15px]">
              <div className="flex justify-between items-start mb-[5px]">
                <div className="flex-1">
                  <p>
                    <strong>Solar</strong>,{" "}
                    <a
                      href="https://esha-technology.com/solar"
                      className="text-[#0000FF] no-underline hover:underline"
                    >
                      esha-technology.com/solar
                    </a>{" "}
                    | Hyderabad, India
                  </p>
                </div>
                <div className="text-right min-w-[150px]">Oct 2024 - Dec 2024</div>
              </div>
              <ul className="list-disc ml-[20px] mb-[10px]">
                <li>
                  Built a solar services platform, connecting 1,000+ users to
                  providers.
                </li>
                <li>Optimized UX for seamless navigation and engagement.</li>
              </ul>
            </div>
          </>
        )}
      </section>

      {/* Skills */}
      <section className="mb-[20px]">
        <h2 className="text-[14pt] font-bold uppercase border-b border-[#000000] pb-[5px] mb-[10px]">
          Skills
        </h2>
        <ul className="list-disc ml-[20px] mb-[10px]">
          <li>
            <strong>Technical Skills:</strong>{" "}
            {skills.technical && skills.technical.length > 0
              ? skills.technical.join(", ")
              : "Java, Maths, Designing"}
          </li>
         
          <li>
            <strong>Soft Skills:</strong>{" "}
            {skills.soft && skills.soft.length > 0
              ? skills.soft.join(", ")
              : "Communication, Team Work, startegy"}
          </li>

        </ul>
      </section>

      {/* Languages */}
      <section className="mb-[20px]">
        <h2 className="text-[14pt] font-bold uppercase border-b border-[#000000] pb-[5px] mb-[10px]">
          Languages
        </h2>
        <p>
          {additional.languages && additional.languages.length > 0
            ? additional.languages.map(lang => `${lang.name} (${lang.proficiency})`).join(", ")
            : "English (Fluent), Telugu (Native), Hindi (Intermediate)"}
        </p>
      </section>

      {/* Hobbies */}
      <section className="mb-[20px]">
        <h2 className="text-[14pt] font-bold uppercase border-b border-[#000000] pb-[5px] mb-[10px]">
          Hobbies & Interests
        </h2>
        <p>
          {additional.hobbies
            ? additional.hobbies
            : "Product Innovation, Technology Trends, Hiking"}
        </p>
      </section>

      {/* Achievements */}
      <section className="mb-[20px]">
        <h2 className="text-[14pt] font-bold uppercase border-b border-[#000000] pb-[5px] mb-[10px]">
          Achievements & Awards
        </h2>
        <ul className="list-disc ml-[20px] mb-[10px]">
          {additional.achievements && additional.achievements.length > 0
            ? additional.achievements.map((ach, idx) => (
                <li key={idx}>
                  {ach.name}
                  {ach.organization ? `, ${ach.organization}` : ""}
                  {ach.description ? ` - ${ach.description}` : ""}
                </li>
              ))
            : (
              <>
                <li>Product Innovation Award, Esha Technology, 2024</li>
                <li>Top Performer, IIITDM Kurnool, 2021</li>
              </>
            )}
        </ul>
      </section>
    </div>
  );
};

export default RESUME_ExpAndFresher_30;
