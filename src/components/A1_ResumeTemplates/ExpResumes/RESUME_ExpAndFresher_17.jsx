import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const RESUME_ExpAndFresher_17 = () => {
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

  const jobTitle = formData.jobTitle ? formData.jobTitle : "Junior Web Developer";

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
    <div className="font-['Arial',sans-serif] m-0 p-0 bg-white text-[#333] w-[794px] mx-auto my-[20px] p-[20px] box-border text-[10pt] leading-[1.4]">
      {/* Header */}
      <div className="text-left mb-[20px]">
        <h1 className="m-0 text-[24pt] font-bold text-[#333]">
          {fullName}
        </h1>
        <h2 className="my-[5px] text-[12pt] font-normal text-[#666]">
          {jobTitle}
        </h2>
        <div className="text-[9pt] text-[#666]">
          <p className="my-[2px]">{address}</p>
          <p className="my-[2px]">{formData.phoneNumber ? formData.phoneNumber : "(706) 278-2730"}</p>
          <p className="my-[2px]">
            <a
              href={formData.email ? `mailto:${formData.email}` : "#"}
              className="text-[#666] no-underline hover:underline"
            >
              {formData.email ? formData.email : "your.email@example.com"}
            </a>
          </p>
          <p className="my-[2px]">
            <a
              href={formData.linkedin ? formData.linkedin : "#"}
              className="text-[#666] no-underline hover:underline"
            >
              {formData.linkedin ? formData.linkedin : "linkedin.com/in/yourprofile"}
            </a>
          </p>
          <p className="my-[2px]">
            <a
              href={formData.github ? formData.github : "#"}
              className="text-[#666] no-underline hover:underline"
            >
              {formData.github ? formData.github : "github.com/yourprofile"}
            </a>
          </p>
          <p className="my-[2px]">
            <a
              href={formData.otherLink ? formData.otherLink : "#"}
              className="text-[#666] no-underline hover:underline"
            >
              {formData.otherLink ? formData.otherLink : "yourwebsite.com"}
            </a>
          </p>
          <p className="my-[2px]">
            <a
              href={formData.figma ? formData.figma : "#"}
              className="text-[#666] no-underline hover:underline"
            >
              {formData.figma ? formData.figma : "figma.com/@yourprofile"}
            </a>
          </p>
          <p className="my-[2px]">
            <a
              href={formData.leetcode ? formData.leetcode : "#"}
              className="text-[#666] no-underline hover:underline"
            >
              {formData.leetcode ? formData.leetcode : "leetcode.com/yourprofile"}
            </a>
          </p>
        </div>
      </div>
      <hr className="border-0 border-t border-[#ddd] my-[15px]" />

      {/* Goal/Profile Summary */}
      <div className="mb-[20px]">
        <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#333]">
          Profile
        </h3>
        <p className="text-[9pt] text-[#666]">
          {summary
            ? summary
            : "Goal-oriented Junior Web Developer with 2+ years of experience in creating responsive web applications. Contributed to the development and optimization of a SaaS platform, improving user retention by 20%. Skilled in JavaScript, React, and UI design, with a passion for delivering seamless user experiences. Seeking to leverage technical expertise and creativity to build innovative solutions at a forward-thinking tech company."
          }
        </p>
      </div>
      <hr className="border-0 border-t border-[#ddd] my-[15px]" />

{/* Skills */}
      <div className="mb-[20px]">
        <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#333]">
          Skills
        </h3>
        <div className="flex justify-between">
          <ul className="list-none p-0 text-[9pt] text-[#666]">
            {(skills.technical && skills.technical.length > 0
              ? skills.technical
              : ["JavaScript", "React", "CSS", "Problem-solving"]
            ).map((skill, idx) => (
              <li key={idx} className="mb-[5px] relative pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-[#333]">
                {skill}
              </li>
            ))}
          </ul>
          <ul className="list-none p-0 text-[9pt] text-[#666]">
            {(skills.soft && skills.soft.length > 0
              ? skills.soft
              : ["Creativity", "Critical Thinking", "Team Collaboration"]
            ).map((skill, idx) => (
              <li key={idx} className="mb-[5px] relative pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-[#333]">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="border-0 border-t border-[#ddd] my-[15px]" />


       {/* Projects */}
      <div className="mb-[20px]">
        <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#333]">
          Projects
        </h3>
        {proj && proj.length > 0 && proj[0].name
          ? proj.map((p, idx) => (
              <div className="mb-[15px]" key={idx}>
                <h4 className="text-[10pt] font-bold m-0">{p.name ? p.name : "Project Name"}</h4>
                <p className="my-[2px] text-[9pt] text-[#666]">
                  Technologies: {p.technologies ? p.technologies : "Technologies"} •{" "}
                  <a
                    href={p.link ? p.link : "#"}
                    className="text-[#666] no-underline hover:underline"
                  >
                    {p.link ? p.link : "Project Link"}
                  </a>
                </p>
                <p className="my-[2px] text-[9pt] text-[#666]">
                  {p.description
                    ? p.description
                    : "Describe your project and its impact here."}
                </p>
              </div>
            ))
          : (
            <>
              <div className="mb-[15px]">
                <h4 className="text-[10pt] font-bold m-0">Portfolio Website</h4>
                <p className="my-[2px] text-[9pt] text-[#666]">
                  Technologies: React, Tailwind CSS •{" "}
                  <a
                    href="https://github.com/alyceschneider/portfolio"
                    className="text-[#666] no-underline hover:underline"
                  >
                    github.com/alyceschneider/portfolio
                  </a>
                </p>
                <p className="my-[2px] text-[9pt] text-[#666]">
                  Designed and developed a responsive portfolio showcasing 5+ projects, achieving 1,000+ views in 3 months. Optimized for SEO, improving search ranking by 30%.
                </p>
              </div>
              <div className="mb-[15px]">
                <h4 className="text-[10pt] font-bold m-0">Task Management App</h4>
                <p className="my-[2px] text-[9pt] text-[#666]">
                  Technologies: JavaScript, Firebase •{" "}
                  <a
                    href="https://github.com/alyceschneider/task-app"
                    className="text-[#666] no-underline hover:underline"
                  >
                    github.com/alyceschneider/task-app
                  </a>
                </p>
                <p className="my-[2px] text-[9pt] text-[#666]">
                  Built a real-time task manager with user authentication, supporting 500+ active users. Enhanced UX with drag-and-drop features, reducing task completion time by 15%.
                </p>
              </div>
            </>
          )}
      </div>
      <hr className="border-0 border-t border-[#ddd] my-[15px]" />


 {/* Education */}
      <div className="mb-[20px]">
        <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#333]">
          Education
        </h3>
        {edu && (edu.degree || edu.collegeName)
          ? (
            <div className="flex justify-between items-baseline mb-[10px]">
              <div>
                <h4 className="text-[10pt] font-bold m-0">
                  {edu.degree ? edu.degree : "Degree"}
                  {edu.stream ? `, ${edu.stream}` : ""}
                </h4>
                <p className="my-[2px] text-[9pt] text-[#666]">
                  {edu.collegeName ? edu.collegeName : "University Name"}
                </p>
              </div>
              <div className="text-right">
                <span className="text-[9pt] text-[#666] block">
                  {(edu.startDate || edu.endDate)
                    ? `${edu.startDate ? edu.startDate : "Start"}-${edu.endDate ? edu.endDate : "End"}`
                    : "2014-2017"}
                </span>
                <span className="text-[9pt] text-[#666] block">
                  CGPA: {edu.cgpa ? edu.cgpa : "CGPA"}
                </span>
              </div>
            </div>
          )
          : (
            <div className="flex justify-between items-baseline mb-[10px]">
              <div>
                <h4 className="text-[10pt] font-bold m-0">
                  BSc in Computer Science
                </h4>
                <p className="my-[2px] text-[9pt] text-[#666]">
                  University of Texas at Austin
                </p>
              </div>
              <div className="text-right">
                <span className="text-[9pt] text-[#666] block">2014-2017</span>
                <span className="text-[9pt] text-[#666] block">CGPA: 3.8</span>
              </div>
            </div>
          )}
      </div>
      <hr className="border-0 border-t border-[#ddd] my-[15px]" />
      


      {/* Experience */}
      <div className="mb-[20px]">
        <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#333]">
          Experience
        </h3>
        {work && work.length > 0 && (work[0].jobTitle || work[0].companyName)
          ? work.map((item, idx) => (
              <div className="mb-[15px]" key={idx}>
                <h4 className="text-[10pt] font-bold m-0 inline">
                  {item.jobTitle ? item.jobTitle : "Job Title"}
                </h4>
                <span className="text-[9pt] text-[#666] float-right">
                  {(item.startDate || item.endDate)
                    ? `${item.startDate ? item.startDate : "Start"} - ${item.endDate ? item.endDate : "End"}`
                    : "Date"}
                </span>
                <p className="my-[5px] text-[9pt] text-[#666]">
                  {item.companyName ? item.companyName : "Company Name"}
                  {item.location ? `, ${item.location}` : ""}
                </p>
                <p className="my-[5px] text-[9pt] text-[#666]">
                  {item.responsibilities
                    ? item.responsibilities
                    : "Describe your main responsibilities here."}
                </p>
              </div>
            ))
          : (
            <>
              <div className="mb-[15px]">
                <h4 className="text-[10pt] font-bold m-0 inline">
                  Junior Web Developer
                </h4>
                <span className="text-[9pt] text-[#666] float-right">
                  Feb 2019 - Present
                </span>
                <p className="my-[5px] text-[9pt] text-[#666]">
                  TechGenix, Austin, TX
                </p>
                <p className="my-[5px] text-[9pt] text-[#666]">
                  Developed and maintained responsive web applications using React and JavaScript, supporting 5,000+ active users. Optimized front-end performance, reducing load times by 25%. Collaborated with UX designers to implement intuitive interfaces, enhancing user satisfaction.
                </p>
              </div>
              <div className="mb-[15px]">
                <h4 className="text-[10pt] font-bold m-0 inline">
                  Frontend Developer Intern
                </h4>
                <span className="text-[9pt] text-[#666] float-right">
                  Jan 2018 - Jan 2019
                </span>
                <p className="my-[5px] text-[9pt] text-[#666]">
                  PixelCraft Studios, Austin, TX
                </p>
                <p className="my-[5px] text-[9pt] text-[#666]">
                  Built 10+ responsive landing pages using HTML, CSS, and JavaScript. Configured interactive UI components, improving user engagement by 15%. Assisted in integrating APIs for dynamic content delivery.
                </p>
              </div>
            </>
          )}
      </div>
      <hr className="border-0 border-t border-[#ddd] my-[15px]" />

     

      {/* Certifications */}
      <div className="mb-[20px]">
        <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#333]">
          Certifications
        </h3>
        {cert && cert.length > 0 && cert[0].name
          ? cert.map((c, idx) => (
              <div className="flex justify-between items-baseline mb-[10px]" key={idx}>
                <div>
                  <h4 className="text-[10pt] font-bold m-0">
                    {c.name ? c.name : "Certificate Name"}
                  </h4>
                  <p className="my-[2px] text-[9pt] text-[#666]">
                    {c.organization ? c.organization : "Organization"} •{" "}
                    <a
                      href={c.link ? c.link : "#"}
                      className="text-[#666] no-underline hover:underline"
                    >
                      {c.link ? c.link : "Certificate Link"}
                    </a>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[9pt] text-[#666] block">
                    {c.issueDate ? c.issueDate : "Year"}
                  </span>
                </div>
              </div>
            ))
          : (
            <>
              <div className="flex justify-between items-baseline mb-[10px]">
                <div>
                  <h4 className="text-[10pt] font-bold m-0">
                    React Developer Certification
                  </h4>
                  <p className="my-[2px] text-[9pt] text-[#666]">
                    Udemy •{" "}
                    <a
                      href="https://udemy.com/certificate/react-dev"
                      className="text-[#666] no-underline hover:underline"
                    >
                      udemy.com/certificate/react-dev
                    </a>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[9pt] text-[#666] block">2018</span>
                </div>
              </div>
              <div className="flex justify-between items-baseline mb-[10px]">
                <div>
                  <h4 className="text-[10pt] font-bold m-0">
                    JavaScript Algorithms and Data Structures
                  </h4>
                  <p className="my-[2px] text-[9pt] text-[#666]">
                    freeCodeCamp •{" "}
                    <a
                      href="https://freecodecamp.org/cert/javascript"
                      className="text-[#666] no-underline hover:underline"
                    >
                      freecodecamp.org/cert/javascript
                    </a>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[9pt] text-[#666] block">2017</span>
                </div>
              </div>
            </>
          )}
      </div>
      <hr className="border-0 border-t border-[#ddd] my-[15px]" />

     
      

      {/* Languages */}
      <div className="mb-[20px]">
        <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#333]">
          Languages
        </h3>
        <p className="text-[9pt] text-[#666] m-0">
          {langs && langs.length > 0 && langs[0].name
            ? langs.map((lang, idx) => (
                <span key={idx}>
                  {lang.name} ({lang.proficiency})
                  {idx < langs.length - 1 ? ", " : ""}
                </span>
              ))
            : "Spanish (Fluent), Polish (Intermediate)"}
        </p>
      </div>
      <hr className="border-0 border-t border-[#ddd] my-[15px]" />

      {/* Hobbies */}
      <div className="mb-[20px]">
        <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#333]">
          Hobbies & Interests
        </h3>
        <p className="text-[9pt] text-[#666] m-0">
          {additional.hobbies ? additional.hobbies : "Web Development, Gaming, Traveling"}
        </p>
      </div>
      <hr className="border-0 border-t border-[#ddd] my-[15px]" />

      {/* Achievements */}
      <div className="mb-[20px]">
        <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#333]">
          Achievements & Awards
        </h3>
        {ach && ach.length > 0 && ach[0].name
          ? ach.map((a, idx) => (
              <div className="mb-[10px]" key={idx}>
                <h4 className="text-[10pt] font-bold m-0">{a.name}</h4>
                <p className="my-[2px] text-[9pt] text-[#666]">
                  {a.organization}
                  {a.description ? `, ${a.description}` : ""}
                </p>
              </div>
            ))
          : (
            <>
              <div className="mb-[10px]">
                <h4 className="text-[10pt] font-bold m-0">Hackathon Winner</h4>
                <p className="my-[2px] text-[9pt] text-[#666]">
                  Austin CodeFest, 2020
                </p>
                <p className="my-[2px] text-[9pt] text-[#666]">
                  Led team to 1st place for innovative web app design.
                </p>
              </div>
              <div className="mb-[10px]">
                <h4 className="text-[10pt] font-bold m-0">Dean’s List</h4>
                <p className="my-[2px] text-[9pt] text-[#666]">
                  University of Texas at Austin, 2015-2017
                </p>
                <p className="my-[2px] text-[9pt] text-[#666]">
                  Recognized for academic excellence.
                </p>
              </div>
            </>
          )}
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_17;
