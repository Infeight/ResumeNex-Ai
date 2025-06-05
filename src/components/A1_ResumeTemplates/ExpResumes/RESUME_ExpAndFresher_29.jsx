import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const RESUME_ExpAndFresher_29 = () => {
  const {
    formData,
    summary,
    skills,
    workExperience,
    projects,
    education,
    certificates,
    additional,
  } = useResume();

  return (
    <div className="font-['Times_New_Roman',Times,serif] text-[#000000] text-[11pt] leading-[1.5] max-w-[800px] mx-auto my-[20px] p-[20px] bg-white">
      {/* Header */}
      <header className="text-left mb-[20px]">
        <h1 className="text-[24pt] font-bold text-[#8A2BE2] mb-[5px]">
          {formData.firstName || formData.middleName || formData.lastName
            ? `${formData.firstName} ${formData.middleName ? formData.middleName + " " : ""}${formData.lastName}`
            : "Syed Talha Ahmed"}
        </h1>
        <p className="text-[11pt] mb-[10px]">
          <span>
            <span className="font-bold">Email:</span>{" "}
            <a
              href={`mailto:${formData.email ? formData.email : "syedtalhaahmed123786@gmail.com"}`}
              className="text-[#0000FF] no-underline hover:underline"
            >
              {formData.email ? formData.email : "syedtalhaahmed123786@gmail.com"}
            </a>
          </span>{" "}
          |{" "}
          <span>
            <span className="font-bold">Mobile:</span>{" "}
            <a
              href={`tel:${formData.phoneNumber ? formData.phoneNumber : "+918143923984"}`}
              className="text-[#0000FF] no-underline hover:underline"
            >
              {formData.phoneNumber ? formData.phoneNumber : "+91 8143923984"}
            </a>
          </span>{" "}
          |{" "}
          <span>
            <span className="font-bold">Location:</span>{" "}
            {formData.city && formData.state
              ? `${formData.city}, ${formData.state}`
              : "Hyderabad"}
          </span>{" "}
          |<br />
          <span>
            <span className="font-bold">LinkedIn:</span>{" "}
            <a
              href={formData.linkedin ? formData.linkedin : "https://www.linkedin.com/in/talha2004/"}
              className="text-[#0000FF] no-underline hover:underline"
            >
              {formData.linkedin
                ? formData.linkedin.replace(/^https?:\/\//, "")
                : "linkedin.com/in/talha2004"}
            </a>
          </span>{" "}
          |{" "}
          <span>
            <span className="font-bold">GitHub:</span>{" "}
            <a
              href={formData.github ? formData.github : "https://github.com/Talha-2023"}
              className="text-[#0000FF] no-underline hover:underline"
            >
              {formData.github
                ? formData.github.replace(/^https?:\/\//, "")
                : "github.com/Talha-2023"}
            </a>
          </span>{" "}
          |{" "}
          <span>
            <span className="font-bold">Portfolio:</span>{" "}
            <a
              href={formData.otherLink ? formData.otherLink : "https://talha2004.dev"}
              className="text-[#0000FF] no-underline hover:underline"
            >
              {formData.otherLink
                ? formData.otherLink.replace(/^https?:\/\//, "")
                : "talha2004.dev"}
            </a>
          </span>{" "}
          |{" "}
          <span>
            <span className="font-bold">Figma:</span>{" "}
            <a
              href={formData.figma ? formData.figma : "https://figma.com/@talha123"}
              className="text-[#0000FF] no-underline hover:underline"
            >
              {formData.figma
                ? formData.figma.replace(/^https?:\/\//, "")
                : "figma.com/@talha123"}
            </a>
          </span>
        </p>
      </header>
      <hr className="border-t border-[#808080] mb-[10px]" />

      {/* Profile Summary */}
      <section className="mb-[10px]">
        <h2 className="text-[14pt] font-bold uppercase text-[#8A2BE2] text-center mb-[5px]">
          Profile Summary
        </h2>
        <p>
          {summary
            ? summary
            : "Frontend Developer and UI/UX Designer with expertise in ReactJS, Tailwind CSS, and modern web technologies. Delivered 10+ responsive websites, boosting user engagement by 25% at Esha Technology. Skilled in collaboration, problem-solving, and optimizing UX for seamless, high-quality results."}
        </p>
      </section>
      <hr className="border-t border-[#808080] mb-[10px]" />

      {/* Skills Summary */}
      <section className="mb-[10px]">
        <h2 className="text-[14pt] font-bold uppercase text-[#8A2BE2] text-center mb-[5px]">
          Skills Summary
        </h2>
        <ul className="list-disc ml-[20px] mb-[10px]">
          <li>
            <strong>Frontend Technologies:</strong>{" "}
            {skills.technical && skills.technical.length > 0
              ? skills.technical.join(", ")
              : "HTML5, CSS3, JavaScript (ES6+), TypeScript, Responsive Web Design"}
          </li>
          <li>
            <strong>Frameworks & Libraries:</strong>{" "}
            {/* You can add a separate field or use related skills if available */}
            {skills.related
              ? skills.related
              : "ReactJS, Redux Toolkit, Tailwind CSS, Framer Motion"}
          </li>
          <li>
            <strong>UI/UX Design:</strong>{" "}
            {/* Assuming UI/UX skills might be in technical or soft skills */}
            {skills.soft && skills.soft.length > 0
              ? skills.soft.join(", ")
              : "Figma, Wireframing, Prototyping"}
          </li>
          <li>
            <strong>Tools:</strong> Git, GitHub, Bitbucket, Postman, Chrome DevTools
          </li>
          <li>
            <strong>Soft Skills:</strong>{" "}
            {skills.soft && skills.soft.length > 0
              ? skills.soft.join(", ")
              : "Problem-Solving, Team Collaboration, Time Management, Adaptability"}
          </li>
        </ul>
      </section>
      <hr className="border-t border-[#808080] mb-[10px]" />

      {/* Work Experience */}
      <section className="mb-[10px]">
        <h2 className="text-[14pt] font-bold uppercase text-[#8A2BE2] text-center mb-[5px]">
          Work Experience
        </h2>
        {workExperience && workExperience.length > 0 ? (
          workExperience.map((work, idx) => (
            <div key={idx} className="mb-[10px]">
              <h3 className="text-[12pt] font-bold mb-[2px]">
                {work.companyName ? work.companyName : "Jala Academy, Hyderabad"}
              </h3>
              <p className="text-[11pt]">
                {work.startDate && work.endDate
                  ? `${work.startDate} - ${work.endDate}`
                  : idx === 0
                  ? "Oct 2024 - Jan 2025"
                  : "Nov 2024 - Present"}
              </p>
              <ul className="list-disc ml-[20px] mb-[10px]">
                {work.responsibilities ? (
                  work.responsibilities.split("\n").map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))
                ) : idx === 0 ? (
                  <>
                    <li>
                      Mentored 50+ students in frontend development and UI/UX design,
                      achieving a 95% satisfaction rate.
                    </li>
                    <li>Developed 10+ projects showcasing responsive design best practices.</li>
                    <li>Fixed 20+ frontend bugs, improving website performance by 30%.</li>
                  </>
                ) : (
                  <>
                    <li>
                      Led development of 5+ responsive websites, ensuring 100% on-time delivery.
                    </li>
                    <li>Designed 15+ marketing posters, boosting client engagement by 25%.</li>
                    <li>Collaborated with 5 developers to streamline workflows, enhancing project efficiency.</li>
                  </>
                )}
              </ul>
            </div>
          ))
        ) : (
          <>
            {/* Fallback hardcoded work experience */}
            <div className="mb-[10px]">
              <h3 className="text-[12pt] font-bold mb-[2px]">Jala Academy, Hyderabad</h3>
              <p className="text-[11pt]">Oct 2024 - Jan 2025</p>
              <ul className="list-disc ml-[20px] mb-[10px]">
                <li>
                  Mentored 50+ students in frontend development and UI/UX design,
                  achieving a 95% satisfaction rate.
                </li>
                <li>Developed 10+ projects showcasing responsive design best practices.</li>
                <li>Fixed 20+ frontend bugs, improving website performance by 30%.</li>
              </ul>
            </div>
            <div className="mb-[10px]">
              <h3 className="text-[12pt] font-bold mb-[2px]">Esha Technology, Hyderabad</h3>
              <p className="text-[11pt]">Nov 2024 - Present</p>
              <ul className="list-disc ml-[20px] mb-[10px]">
                <li>Led development of 5+ responsive websites, ensuring 100% on-time delivery.</li>
                <li>Designed 15+ marketing posters, boosting client engagement by 25%.</li>
                <li>Collaborated with 5 developers to streamline workflows, enhancing project efficiency.</li>
              </ul>
            </div>
          </>
        )}
      </section>
      <hr className="border-t border-[#808080] mb-[10px]" />

      {/* Projects */}
      <section className="mb-[10px]">
        <h2 className="text-[14pt] font-bold uppercase text-[#8A2BE2] text-center mb-[5px]">
          Projects
        </h2>
        {projects && projects.length > 0 ? (
          projects.map((project, idx) => (
            <div key={idx} className="mb-[10px]">
              <h3 className="text-[12pt] font-bold mb-[2px]">
                {project.name ? project.name : "Esha Technology Landing Page"}
              </h3>
              <p>
                GitHub:{" "}
                <a
                  href={project.link ? project.link : "https://github.com/Talha-2023/landing-page"}
                  className="text-[#0000FF] no-underline hover:underline"
                >
                  {project.link
                    ? project.link.replace(/^https?:\/\//, "")
                    : "github.com/Talha-2023/landing-page"}
                </a>{" "}
                | Live Demo:{" "}
                <a
                  href={project.link ? project.link : "https://esha-technology-update.vercel.app/"}
                  className="text-[#0000FF] no-underline hover:underline"
                >
                  {project.link
                    ? project.link.replace(/^https?:\/\//, "")
                    : "esha-technology-update.vercel.app"}
                </a>
              </p>
              <ul className="list-disc ml-[20px] mb-[10px]">
                <li>
                  {project.description
                    ? project.description
                    : "Built a responsive multi-page landing website using ReactJS and Framer Motion."}
                </li>
                {/* Add more project details if available */}
              </ul>
            </div>
          ))
        ) : (
          <>
            {/* Fallback hardcoded projects */}
            <div className="mb-[10px]">
              <h3 className="text-[12pt] font-bold mb-[2px]">Esha Technology Landing Page</h3>
              <p>
                GitHub:{" "}
                <a
                  href="https://github.com/Talha-2023/landing-page"
                  className="text-[#0000FF] no-underline hover:underline"
                >
                  github.com/Talha-2023/landing-page
                </a>{" "}
                | Live Demo:{" "}
                <a
                  href="https://esha-technology-update.vercel.app/"
                  className="text-[#0000FF] no-underline hover:underline"
                >
                  esha-technology-update.vercel.app
                </a>
              </p>
              <ul className="list-disc ml-[20px] mb-[10px]">
                <li>
                  Built a responsive multi-page landing website using ReactJS and Framer Motion.
                </li>
                <li>
                  Integrated email-enabled contact form, increasing lead generation by 20%.
                </li>
                <li>Optimized for cross-browser compatibility and performance.</li>
              </ul>
            </div>
            {/* Add other hardcoded projects similarly */}
          </>
        )}
      </section>
      <hr className="border-t border-[#808080] mb-[10px]" />

      {/* Education and Certifications */}
      <div className="flex justify-between">
        <div className="flex-1 pr-[10px]">
          <section>
            <h2 className="text-[14pt] font-bold uppercase text-[#8A2BE2] text-left mb-[5px]">
              Education
            </h2>
            <hr className="border-t border-[#808080] mb-[10px]" />
            {education && education.length > 0 ? (
              education.map((edu, idx) => (
                <div key={idx}>
                  <h3 className="text-[12pt] font-bold mb-[2px]">
                    {edu.degree ? edu.degree : "Bachelor of Commerce in Computer Applications"}
                  </h3>
                  <p>
                    <strong>{edu.collegeName ? edu.collegeName : "Osmania University, Hyderabad"}</strong>
                  </p>
                  <p>
                    <strong>{edu.cgpa ? `GPA: ${edu.cgpa}` : "GPA: 8.16"}</strong>
                  </p>
                  <p className="text-[11pt]">
                    {edu.startDate && edu.endDate
                      ? `${edu.startDate} - ${edu.endDate}`
                      : "Oct 2021 - Aug 2024"}
                  </p>
                </div>
              ))
            ) : (
              <>
                {/* Fallback hardcoded education */}
                <div>
                  <h3 className="text-[12pt] font-bold mb-[2px]">
                    Bachelor of Commerce in Computer Applications
                  </h3>
                  <p>
                    <strong>Osmania University, Hyderabad</strong>
                  </p>
                  <p>
                    <strong>GPA: 8.16</strong>
                  </p>
                  <p className="text-[11pt]">Oct 2021 - Aug 2024</p>
                </div>
              </>
            )}
          </section>
        </div>
        <span className="border-l-2 border-[#808080] h-[100px] mx-[10px]"></span>
        <div className="flex-1 pl-[10px]">
          <section>
            <h2 className="text-[14pt] font-bold uppercase text-[#8A2BE2] text-left mb-[5px]">
              Certifications
            </h2>
            <hr className="border-t border-[#808080] mb-[10px]" />
            {certificates && certificates.length > 0 ? (
              <ul className="list-disc ml-[20px] mb-[10px]">
                {certificates.map((cert, idx) => (
                  <li key={idx}>
                    <strong>
                      <a
                        href={cert.link ? cert.link : "#"}
                        className="text-[#0000FF] no-underline hover:underline"
                      >
                        {cert.name ? cert.name : "Certification Name"}, {cert.organization ? cert.organization : "Organization"}
                      </a>
                    </strong>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="list-disc ml-[20px] mb-[10px]">
                <li>
                  <strong>
                    <a
                      href="https://kgcoding.com/cert/react-redux"
                      className="text-[#0000FF] no-underline hover:underline"
                    >
                      React and Redux Certification, KG Coding
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://siasat.com/cert/full-stack-developer"
                      className="text-[#0000FF] no-underline hover:underline"
                    >
                      Full Stack Developer Certification, The Siasat
                    </a>
                  </strong>
                </li>
              </ul>
            )}
          </section>
        </div>
      </div>

      {/* Languages */}
      <section className="mt-[10px]">
        <h2 className="text-[14pt] font-bold uppercase text-[#8A2BE2] text-center mb-[5px]">
          Languages
        </h2>
        <hr className="border-t border-[#808080] mb-[10px]" />
        <p>
          {additional.languages && additional.languages.length > 0
            ? additional.languages.map(lang => `${lang.name} (${lang.proficiency})`).join(", ")
            : "English (Fluent), Urdu (Native), Hindi (Intermediate)"}
        </p>
      </section>

      {/* Hobbies */}
      <section className="mt-[10px]">
        <h2 className="text-[14pt] font-bold uppercase text-[#8A2BE2] text-center mb-[5px]">
          Hobbies & Interests
        </h2>
        <hr className="border-t border-[#808080] mb-[10px]" />
        <p>{additional.hobbies ? additional.hobbies : "UI/UX Design, Open-Source Contribution, Photography"}</p>
      </section>

      {/* Achievements */}
      <section className="mt-[10px]">
        <h2 className="text-[14pt] font-bold uppercase text-[#8A2BE2] text-center mb-[5px]">
          Achievements & Awards
        </h2>
        <hr className="border-t border-[#808080] mb-[10px]" />
        {additional.achievements && additional.achievements.length > 0 ? (
          <ul className="list-disc ml-[20px] mb-[10px]">
            {additional.achievements.map((ach, idx) => (
              <li key={idx}>
                {ach.name} {ach.organization ? `, ${ach.organization}` : ""} {ach.description ? `- ${ach.description}` : ""}
              </li>
            ))}
          </ul>
        ) : (
          <ul className="list-disc ml-[20px] mb-[10px]">
            <li>Best UI/UX Design Award, Hyderabad Tech Fest, 2024</li>
            <li>Top Mentor Recognition, Jala Academy, 2024</li>
          </ul>
        )}
      </section>
    </div>
  );
};

export default RESUME_ExpAndFresher_29;
