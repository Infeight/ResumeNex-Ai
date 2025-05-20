import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";

const RESUME_ExpAndFresher_16 = () => {
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

  // Helpers
  const fullName =
    formData.firstName || formData.middleName || formData.lastName
      ? `${formData.firstName ? formData.firstName : ""}${formData.middleName ? " " + formData.middleName : ""}${formData.lastName ? " " + formData.lastName : ""}`.trim()
      : "Your Name";

  const jobTitle = formData.jobTitle ? formData.jobTitle : "Web Developer";

  const address =
    formData.city || formData.state || formData.pincode
      ? `${formData.city ? formData.city : ""}${formData.city && formData.state ? ", " : ""}${formData.state ? formData.state : ""}${formData.state && formData.pincode ? ", " : ""}${formData.pincode ? formData.pincode : ""}`
      : "Address, City, State, Pincode";

  const edu = education && education.length > 0 ? education[0] : {};
  const work = workExperience && workExperience.length > 0 ? workExperience : [];
  const proj = projects && projects.length > 0 ? projects : [];
  const cert = certificates && certificates.length > 0 ? certificates : [];
  const langs = additional.languages && additional.languages.length > 0 ? additional.languages : [];
  const ach = additional.achievements && additional.achievements.length > 0 ? additional.achievements : [];

  return (
    <div className="font-['Roboto',sans-serif] m-0 p-0 bg-white text-[#333] w-[794px] mx-auto my-[20px] p-[12mm_15mm] text-[11pt] leading-[1.4] relative">
      {/* Header */}
      <div className="flex justify-between mb-[12px]">
        <div className="w-[70%]">
          <div className="text-[14pt] font-bold mb-[4px] text-[#222]">
            {fullName}
          </div>
          <div className="text-[11pt] font-medium text-[#444]">
            {jobTitle}
          </div>
        </div>
        <div className="w-[30%] text-[9.5pt] leading-[1.4] text-right pt-[8px]">
          {address}
          <br />
          {formData.email ? formData.email : "your.email@example.com"}
          <br />
          {formData.phoneNumber ? formData.phoneNumber : "(123) 456-7890"}
          <br />
          <a
            href={formData.linkedin ? formData.linkedin : "#"}
            className="text-[#333] no-underline hover:underline"
          >
            {formData.linkedin ? formData.linkedin : "linkedin.com/in/yourprofile"}
          </a>
          <br />
          <a
            href={formData.github ? formData.github : "#"}
            className="text-[#333] no-underline hover:underline"
          >
            {formData.github ? formData.github : "github.com/yourprofile"}
          </a>
          <br />
          <a
            href={formData.otherLink ? formData.otherLink : "#"}
            className="text-[#333] no-underline hover:underline"
          >
            {formData.otherLink ? formData.otherLink : "yourwebsite.com"}
          </a>
          <br />
          <a
            href={formData.figma ? formData.figma : "#"}
            className="text-[#333] no-underline hover:underline"
          >
            {formData.figma ? formData.figma : "figma.com/@yourprofile"}
          </a>
          <br />
          <a
            href={formData.leetcode ? formData.leetcode : "#"}
            className="text-[#333] no-underline hover:underline"
          >
            {formData.leetcode ? formData.leetcode : "leetcode.com/yourprofile"}
          </a>
        </div>
      </div>

      {/* Profile Summary */}
      <div className="text-[10.5pt] mb-[16px] leading-[1.4]">
        {summary
          ? summary
          : "Dedicated Web Developer with over four years of experience in building responsive and scalable web applications. Proficient in JavaScript, React, and Node.js, with a focus on delivering user-centric solutions. Successfully led a project that reduced app load times by 35%, enhancing user satisfaction. Skilled in collaborating with cross-functional teams to meet project deadlines and quality standards."
        }
      </div>

      {/* Work Experience */}
      <h2 className="text-[11pt] font-bold mt-[14px] mb-[8px] uppercase text-[#222] border-b border-[#ddd] pb-[2px]">
        Professional Experience
      </h2>
      {work && work.length > 0 && (work[0].jobTitle || work[0].companyName) ? (
        work.map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-[2px]">
              <div className="text-[10.5pt] font-bold">
                {item.jobTitle ? item.jobTitle : "Job Title"}
              </div>
              <div className="text-[9.5pt] italic">
                {(item.startDate || item.endDate)
                  ? `${item.startDate ? item.startDate : "Start"} - ${item.endDate ? item.endDate : "End"}`
                  : "Date"}
              </div>
            </div>
            <div className="text-[10pt] font-bold mb-[4px]">
              {item.companyName ? item.companyName : "Company Name"}
              {item.location ? `, ${item.location}` : ""}
            </div>
            <ul className="mt-[4px] mb-[12px] pl-[18px] text-[10pt] space-y-[3px]">
              {item.responsibilities
                ? item.responsibilities.split("\n").map((line, i) => <li key={i}>{line}</li>)
                : (
                  <>
                    <li>
                      Developed full-stack web applications using React and Node.js, serving
                      10,000+ monthly users.
                    </li>
                    <li>Optimized backend APIs, reducing response times by 30%.</li>
                    <li>
                      Collaborated with designers to implement pixel-perfect UI designs.
                    </li>
                    <li>Mentored junior developers, improving team productivity by 15%.</li>
                  </>
                )}
            </ul>
          </div>
        ))
      ) : (
        <>
          <div>
            <div className="flex justify-between mb-[2px]">
              <div className="text-[10.5pt] font-bold">Full Stack Developer</div>
              <div className="text-[9.5pt] italic">Apr 2021 - Present</div>
            </div>
            <div className="text-[10pt] font-bold mb-[4px]">
              TechTrend Solutions, Dallas, TX
            </div>
            <ul className="mt-[4px] mb-[12px] pl-[18px] text-[10pt] space-y-[3px]">
              <li>
                Developed full-stack web applications using React and Node.js, serving
                10,000+ monthly users.
              </li>
              <li>Optimized backend APIs, reducing response times by 30%.</li>
              <li>
                Collaborated with designers to implement pixel-perfect UI designs.
              </li>
              <li>Mentored junior developers, improving team productivity by 15%.</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between mb-[2px]">
              <div className="text-[10.5pt] font-bold">Junior Web Developer</div>
              <div className="text-[9.5pt] italic">Jul 2019 - Mar 2021</div>
            </div>
            <div className="text-[10pt] font-bold mb-[4px]">
              CodeZap Innovations, Dallas, TX
            </div>
            <ul className="mt-[4px] mb-[12px] pl-[18px] text-[10pt] space-y-[3px]">
              <li>
                Built responsive front-end interfaces with HTML, CSS, and JavaScript.
              </li>
              <li>Assisted in integrating third-party APIs for real-time data.</li>
              <li>Contributed to code reviews, reducing bugs by 20%.</li>
              <li>Supported migration of legacy systems to modern frameworks.</li>
            </ul>
          </div>
        </>
      )}

      {/* Education */}
      <h2 className="text-[11pt] font-bold mt-[14px] mb-[8px] uppercase text-[#222] border-b border-[#ddd] pb-[2px]">
        Education
      </h2>
      {edu && (edu.degree || edu.collegeName) ? (
        <div>
          <div className="flex justify-between mb-[2px]">
            <div className="text-[10.5pt] font-medium">
              {edu.degree ? edu.degree : "Degree"}
              {edu.stream ? `, ${edu.stream}` : ""}
            </div>
            <div className="text-[9.5pt] italic">
              {(edu.startDate || edu.endDate)
                ? `${edu.startDate ? edu.startDate : "Start"} - ${edu.endDate ? edu.endDate : "End"}`
                : "Date"}
            </div>
          </div>
          <div className="text-[10pt] font-normal italic mb-[8px]">
            {edu.collegeName ? edu.collegeName : "University Name"}
            {edu.location ? `, ${edu.location}` : ""}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between mb-[2px]">
            <div className="text-[10.5pt] font-medium">
              Bachelor of Science, Computer Science
            </div>
            <div className="text-[9.5pt] italic">Aug 2015 - May 2019</div>
          </div>
          <div className="text-[10pt] font-normal italic mb-[8px]">
            University of Texas at Dallas, Richardson, TX
          </div>
        </div>
      )}

      {/* Projects */}
      <h2 className="text-[11pt] font-bold mt-[14px] mb-[8px] uppercase text-[#222] border-b border-[#ddd] pb-[2px]">
        Projects
      </h2>
      {proj && proj.length > 0 && proj[0].name ? (
        proj.map((p, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-[2px]">
              <div className="text-[10.5pt] font-medium">
                {p.name ? p.name : "Project Name"}
              </div>
              <div className="text-[9.5pt] italic">
                {(p.startDate || p.endDate)
                  ? `${p.startDate ? p.startDate : "Start"} - ${p.endDate ? p.endDate : "End"}`
                  : "Date"}
              </div>
            </div>
            <div className="text-[10pt] mb-[4px]">
              Technologies: {p.technologies ? p.technologies : "Technologies"} •{" "}
              <a
                href={p.link ? p.link : "#"}
                className="text-[#333] no-underline hover:underline"
              >
                {p.link ? p.link : "Project Link"}
              </a>
            </div>
            <ul className="mt-[4px] mb-[12px] pl-[18px] text-[10pt] space-y-[3px]">
              {p.description
                ? p.description.split("\n").map((line, i) => <li key={i}>{line}</li>)
                : (
                  <>
                    <li>
                      Developed a web app to streamline inventory tracking for small
                      businesses.
                    </li>
                    <li>Reduced processing errors by 25% with automated workflows.</li>
                    <li>Deployed on AWS, handling 1,000+ daily transactions.</li>
                  </>
                )}
            </ul>
          </div>
        ))
      ) : (
        <>
          <div>
            <div className="flex justify-between mb-[2px]">
              <div className="text-[10.5pt] font-medium">
                Inventory Management System
              </div>
              <div className="text-[9.5pt] italic">Feb 2022 - May 2022</div>
            </div>
            <div className="text-[10pt] mb-[4px]">
              Technologies: React, MongoDB •{" "}
              <a
                href="github.com/raymondortiz/inventory"
                className="text-[#333] no-underline hover:underline"
              >
                github.com/raymondortiz/inventory
              </a>
            </div>
            <ul className="mt-[4px] mb-[12px] pl-[18px] text-[10pt] space-y-[3px]">
              <li>
                Developed a web app to streamline inventory tracking for small
                businesses.
              </li>
              <li>Reduced processing errors by 25% with automated workflows.</li>
              <li>Deployed on AWS, handling 1,000+ daily transactions.</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between mb-[2px]">
              <div className="text-[10.5pt] font-medium">Blog Platform</div>
              <div className="text-[9.5pt] italic">Sep 2020 - Dec 2020</div>
            </div>
            <div className="text-[10pt] mb-[4px]">
              Technologies: JavaScript, Express •{" "}
              <a
                href="github.com/raymondortiz/blog"
                className="text-[#333] no-underline hover:underline"
              >
                github.com/raymondortiz/blog
              </a>
            </div>
            <ul className="mt-[4px] mb-[12px] pl-[18px] text-[10pt] space-y-[3px]">
              <li>Created a blogging platform with user authentication and CMS.</li>
              <li>Improved SEO, increasing traffic by 40% within 3 months.</li>
              <li>Integrated Markdown support for easy content creation.</li>
            </ul>
          </div>
        </>
      )}

      {/* Skills */}
      <h2 className="text-[11pt] font-bold mt-[14px] mb-[8px] uppercase text-[#222] border-b border-[#ddd] pb-[2px]">
        Key Skills
      </h2>
      <ul className="columns-2 gap-[15px] text-[10pt] mt-[4px] mb-[12px] pl-[18px] space-y-[3px]">
        {skills.technical && skills.technical.length > 0
          ? skills.technical.map((skill, idx) => <li key={idx}>{skill}</li>)
          : (
            <>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>AWS</li>
              <li>Git</li>
              <li>Team Collaboration</li>
              <li>Agile Methodologies</li>
            </>
          )}
      </ul>

      {/* Certifications */}
      <h2 className="text-[11pt] font-bold mt-[14px] mb-[8px] uppercase text-[#222] border-b border-[#ddd] pb-[2px]">
        Certifications
      </h2>
      {cert && cert.length > 0 && cert[0].name
        ? cert.map((c, idx) => (
            <div className="text-[10pt] mt-[4px] mb-[12px]" key={idx}>
              <span className="font-medium">{c.name ? c.name : "Certificate Name"}</span>
              <br />
              <span className="font-normal italic">{c.organization ? c.organization : "Organization"}</span>
              {c.issueDate && ` | ${c.issueDate}`}
              <br />
              <a
                href={c.link ? c.link : "#"}
                className="text-[#333] no-underline hover:underline"
              >
                {c.link ? c.link : "Certificate Link"}
              </a>
            </div>
          ))
        : (
          <>
            <div className="text-[10pt] mt-[4px] mb-[12px]">
              <span className="font-medium">AWS Certified Developer</span>
              <br />
              <span className="font-normal italic">Amazon Web Services</span> | Nov 2022
              <br />
              <a
                href="aws.amazon.com/verification/developer"
                className="text-[#333] no-underline hover:underline"
              >
                aws.amazon.com/verification/developer
              </a>
            </div>
            <div className="text-[10pt] mt-[4px] mb-[12px]">
              <span className="font-medium">Full-Stack Web Development</span>
              <br />
              <span className="font-normal italic">Coursera</span> | Jun 2020
              <br />
              <a
                href="coursera.org/verify/fullstack"
                className="text-[#333] no-underline hover:underline"
              >
                coursera.org/verify/fullstack
              </a>
            </div>
          </>
        )}

      {/* Languages */}
      <h2 className="text-[11pt] font-bold mt-[14px] mb-[8px] uppercase text-[#222] border-b border-[#ddd] pb-[2px]">
        Languages
      </h2>
      <ul className="mt-[4px] mb-[12px] pl-[18px] text-[10pt] space-y-[3px]">
        {langs && langs.length > 0 && langs[0].name
          ? langs.map((lang, idx) => (
              <li key={idx}>
                {lang.name} ({lang.proficiency})
              </li>
            ))
          : (
            <>
              <li>English (Native)</li>
              <li>Spanish (Fluent)</li>
            </>
          )}
      </ul>

      {/* Hobbies */}
      <h2 className="text-[11pt] font-bold mt-[14px] mb-[8px] uppercase text-[#222] border-b border-[#ddd] pb-[2px]">
        Hobbies & Interests
      </h2>
      <ul className="mt-[4px] mb-[12px] pl-[18px] text-[10pt] space-y-[3px]">
        {additional.hobbies
          ? additional.hobbies.map((hobby, idx) => <li key={idx}>{hobby.trim()}</li>)
          : (
            <>
              <li>Open-Source Contribution</li>
              <li>Hiking</li>
              <li>Photography</li>
            </>
          )}
      </ul>

      {/* Achievements */}
      <h2 className="text-[11pt] font-bold mt-[14px] mb-[8px] uppercase text-[#222] border-b border-[#ddd] pb-[2px]">
        Achievements & Awards
      </h2>
      <ul className="mt-[4px] mb-[12px] pl-[18px] text-[10pt] space-y-[3px]">
        {ach && ach.length > 0 && ach[0].name
          ? ach.map((a, idx) => (
              <li key={idx}>
                <span className="font-medium">{a.name}</span>
                {a.organization && ` - ${a.organization}`}
                {a.description && `, ${a.description}`}
              </li>
            ))
          : (
            <>
              <li>
                <span className="font-medium">Employee of the Year</span> - TechTrend Solutions, 2022
              </li>
              <li>
                <span className="font-medium">Hackathon Runner-Up</span> - Dallas TechFest, 2021
              </li>
            </>
          )}
      </ul>
    </div>
  );
};

export default RESUME_ExpAndFresher_16;
