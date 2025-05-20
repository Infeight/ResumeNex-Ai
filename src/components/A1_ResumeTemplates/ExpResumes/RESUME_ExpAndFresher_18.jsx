import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";

const RESUME_ExpAndFresher_18 = () => {
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

  const jobTitle = formData.jobTitle ? formData.jobTitle : "Web Developer | Frontend Development | UI/UX Design";

  const address =
    formData.city || formData.state || formData.pincode
      ? `${formData.city ? formData.city : ""}${formData.city && formData.state ? ", " : ""}${formData.state ? formData.state : ""}${formData.state && formData.pincode ? ", " : ""}${formData.pincode ? formData.pincode : ""}`
      : "New York, NY, 10001";

  const edu = education && education.length > 0 ? education[0] : {};
  const work = workExperience && workExperience.length > 0 ? workExperience : [];
  const proj = projects && projects.length > 0 ? projects : [];
  const cert = certificates && certificates.length > 0 ? certificates : [];
  const langs = additional.languages && additional.languages.length > 0 ? additional.languages : [];
  const ach = additional.achievements && additional.achievements.length > 0 ? additional.achievements : [];

  return (
    <div className="font-['Arial',sans-serif] m-0 p-0 bg-[#f4f4f4] flex justify-center items-start">
      <div className="w-[210mm] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] p-[15mm] box-border text-[11px] leading-[1.4]">
        {/* Header */}
        <div className="text-center pb-[8px] mb-[10px]">
          <h1 className="text-[22px] m-0 uppercase">{fullName}</h1>
          <p className="text-[11px] my-[3px] text-[#555]">
            {formData.phoneNumber ? formData.phoneNumber : "(212) 123-1234"} |{" "}
            <a
              href={formData.email ? `mailto:${formData.email}` : "#"}
              className="text-[#555] no-underline hover:underline"
            >
              {formData.email ? formData.email : "your.email@example.com"}
            </a>{" "}
            |{" "}
            <a
              href={formData.otherLink ? formData.otherLink : "#"}
              className="text-[#555] no-underline hover:underline"
            >
              {formData.otherLink ? formData.otherLink : "yourwebsite.com"}
            </a>{" "}
            | {address}
          </p>
          <p className="text-[11px] my-[3px] text-[#555]">
            {jobTitle}
          </p>
          <p className="text-[11px] my-[3px] text-[#555]">
            <a
              href={formData.linkedin ? formData.linkedin : "#"}
              className="text-[#555] no-underline hover:underline"
            >
              {formData.linkedin ? formData.linkedin : "linkedin.com/in/yourprofile"}
            </a>{" "}
            |{" "}
            <a
              href={formData.github ? formData.github : "#"}
              className="text-[#555] no-underline hover:underline"
            >
              {formData.github ? formData.github : "github.com/yourprofile"}
            </a>{" "}
            |{" "}
            <a
              href={formData.figma ? formData.figma : "#"}
              className="text-[#555] no-underline hover:underline"
            >
              {formData.figma ? formData.figma : "figma.com/@yourprofile"}
            </a>{" "}
            |{" "}
            <a
              href={formData.leetcode ? formData.leetcode : "#"}
              className="text-[#555] no-underline hover:underline"
            >
              {formData.leetcode ? formData.leetcode : "leetcode.com/yourprofile"}
            </a>
          </p>
        </div>

        {/* Profile Summary */}
        <div className="mb-[15px]">
          <p className="text-[11px] italic mb-[10px]">
            {summary
              ? summary
              : "Dynamic Web Developer with 5+ years of experience in designing and building responsive web applications. Skilled in JavaScript, React, and UI/UX design, with a proven track record of boosting user engagement by 30% through intuitive interfaces. Adept at collaborating with cross-functional teams to deliver scalable solutions, seeking to innovate at a leading tech firm."
            }
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-[15px]">
          <h2 className="text-[14px] uppercase text-center bg-[#f5e8d3] py-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-[8px]">
            Professional Experience
          </h2>
          {work && work.length > 0 && (work[0].jobTitle || work[0].companyName)
            ? work.map((item, idx) => (
                <div className="mb-[10px]" key={idx}>
                  <div className="flex justify-between font-bold text-[13px]">
                    {item.jobTitle ? item.jobTitle : "Job Title"},{" "}
                    {item.companyName ? item.companyName : "Company Name"}
                    <span className="font-normal italic">
                      {(item.startDate || item.endDate)
                        ? `${item.startDate ? item.startDate : "Start"} – ${item.endDate ? item.endDate : "End"}`
                        : ""}
                    </span>
                  </div>
                  <p className="my-[3px]">
                    {item.responsibilities
                      ? item.responsibilities.split("\n")[0]
                      : "Describe your main responsibilities here."}
                  </p>
                  <ul className="my-[3px] pl-[15px]">
                    {item.responsibilities
                      ? item.responsibilities
                          .split("\n")
                          .slice(1)
                          .map((line, i) => <li key={i}>{line}</li>)
                      : (
                        <>
                          <li>Developed reusable component libraries, cutting development time by 20%.</li>
                          <li>Improved SEO rankings, increasing organic traffic by 35%.</li>
                          <li>Integrated GraphQL APIs, enhancing data retrieval efficiency.</li>
                        </>
                      )}
                  </ul>
                </div>
              ))
            : (
              <>
                <div className="mb-[10px]">
                  <div className="flex justify-between font-bold text-[13px]">
                    Frontend Developer, PixelWave Studio{" "}
                    <span className="font-normal italic">May 2020 – Present</span>
                  </div>
                  <p className="my-[3px]">
                    Led development of 10+ client websites using React and TypeScript, achieving 95% client satisfaction. Optimized performance, reducing page load times by 25%. Collaborated with designers to implement Figma prototypes.
                  </p>
                  <ul className="my-[3px] pl-[15px]">
                    <li>Developed reusable component libraries, cutting development time by 20%.</li>
                    <li>Improved SEO rankings, increasing organic traffic by 35%.</li>
                    <li>Integrated GraphQL APIs, enhancing data retrieval efficiency.</li>
                  </ul>
                </div>
                <div className="mb-[10px]">
                  <div className="flex justify-between font-bold text-[13px]">
                    Junior Web Developer, CodeCraft Inc.{" "}
                    <span className="font-normal italic">Jun 2018 – Apr 2020</span>
                  </div>
                  <p className="my-[3px]">
                    Built and maintained responsive web interfaces using JavaScript and CSS. Supported backend integration with Node.js, streamlining data workflows. Contributed to agile sprints, meeting 90% of deadlines.
                  </p>
                  <ul className="my-[3px] pl-[15px]">
                    <li>Revamped 5+ legacy sites, boosting user retention by 15%.</li>
                    <li>Automated testing processes, reducing bugs by 30%.</li>
                    <li>Assisted in launching a SaaS platform with 1,000+ users.</li>
                  </ul>
                </div>
              </>
            )}
        </div>

        {/* Education */}
        <div className="mb-[15px]">
          <h2 className="text-[14px] uppercase text-center bg-[#f5e8d3] py-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-[8px]">
            Education
          </h2>
          {edu && (edu.degree || edu.collegeName)
            ? (
              <div className="mb-[10px]">
                <div className="flex justify-between font-bold text-[13px]">
                  {edu.degree ? edu.degree : "Degree"}
                  {edu.stream ? `, ${edu.stream}` : ""}
                  , {edu.collegeName ? edu.collegeName : "University Name"}
                  <span className="font-normal italic">
                    CGPA: {edu.cgpa ? edu.cgpa : "CGPA"}
                  </span>
                </div>
                <p className="my-[3px]">
                  {(edu.endDate || edu.startDate)
                    ? `Graduated ${edu.endDate ? edu.endDate : edu.startDate}`
                    : "Graduated May 2018"}
                </p>
              </div>
            )
            : (
              <div className="mb-[10px]">
                <div className="flex justify-between font-bold text-[13px]">
                  Bachelor of Science in Computer Science, New York University{" "}
                  <span className="font-normal italic">CGPA: 3.7/4.0</span>
                </div>
                <p className="my-[3px]">Graduated Cum Laude, May 2018</p>
              </div>
            )}
        </div>

        {/* Projects */}
        <div className="mb-[15px]">
          <h2 className="text-[14px] uppercase text-center bg-[#f5e8d3] py-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-[8px]">
            Projects
          </h2>
          {proj && proj.length > 0 && proj[0].name
            ? proj.map((p, idx) => (
                <div className="mb-[10px]" key={idx}>
                  <div className="flex justify-between font-bold text-[13px]">
                    {p.name ? p.name : "Project Name"}
                    <span className="font-normal italic">
                      {(p.startDate || p.endDate)
                        ? `${p.startDate ? p.startDate : "Start"} – ${p.endDate ? p.endDate : "End"}`
                        : ""}
                    </span>
                  </div>
                  <p className="my-[3px]">
                    Technologies: {p.technologies ? p.technologies : "Technologies"} •{" "}
                    <a
                      href={p.link ? p.link : "#"}
                      className="text-[#555] no-underline hover:underline"
                    >
                      {p.link ? p.link : "Project Link"}
                    </a>
                  </p>
                  <ul className="my-[3px] pl-[15px]">
                    {p.description
                      ? p.description.split("\n").map((line, i) => <li key={i}>{line}</li>)
                      : (
                        <>
                          <li>Built a full-stack e-commerce site with payment integration.</li>
                          <li>Reduced cart abandonment by 20% with optimized checkout.</li>
                          <li>Deployed on Vercel, handling 2,000+ monthly transactions.</li>
                        </>
                      )}
                  </ul>
                </div>
              ))
            : (
              <>
                <div className="mb-[10px]">
                  <div className="flex justify-between font-bold text-[13px]">
                    E-Commerce Platform{" "}
                    <span className="font-normal italic">Jan 2022 – Jun 2022</span>
                  </div>
                  <p className="my-[3px]">
                    Technologies: React, Redux •{" "}
                    <a
                      href="https://github.com/lindsaywatson/ecommerce"
                      className="text-[#555] no-underline hover:underline"
                    >
                      github.com/lindsaywatson/ecommerce
                    </a>
                  </p>
                  <ul className="my-[3px] pl-[15px]">
                    <li>Built a full-stack e-commerce site with payment integration.</li>
                    <li>Reduced cart abandonment by 20% with optimized checkout.</li>
                    <li>Deployed on Vercel, handling 2,000+ monthly transactions.</li>
                  </ul>
                </div>
                <div className="mb-[10px]">
                  <div className="flex justify-between font-bold text-[13px]">
                    Fitness Tracker{" "}
                    <span className="font-normal italic">Aug 2019 – Dec 2019</span>
                  </div>
                  <p className="my-[3px]">
                    Technologies: JavaScript, Firebase •{" "}
                    <a
                      href="https://github.com/lindsaywatson/fitness"
                      className="text-[#555] no-underline hover:underline"
                    >
                      github.com/lindsaywatson/fitness
                    </a>
                  </p>
                  <ul className="my-[3px] pl-[15px]">
                    <li>Developed a web app for tracking workouts and goals.</li>
                    <li>Enhanced UX with real-time data sync, gaining 500+ users.</li>
                    <li>Integrated charts for progress visualization.</li>
                  </ul>
                </div>
              </>
            )}
        </div>

        {/* Areas of Expertise */}
        <div className="mb-[15px]">
          <h2 className="expertise-heading text-[14px] uppercase text-center bg-[#f5e8d3] py-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-[8px]">
            Areas of Expertise
          </h2>
          <div className="flex justify-between flex-wrap">
            <div className="w-[48%]">
              <ul className="my-[3px] pl-[15px]">
                {(skills.technical && skills.technical.length > 0
                  ? skills.technical
                  : ["JavaScript", "React", "UI/UX Design", "Performance Optimization"]
                ).map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="w-[48%]">
              <ul className="my-[3px] pl-[15px]">
                {(skills.soft && skills.soft.length > 0
                  ? skills.soft
                  : ["HTML & CSS", "API Integration", "Agile Development", "Team Collaboration"]
                ).map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-[15px]">
          <h2 className="text-[14px] uppercase text-center bg-[#f5e8d3] py-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-[8px]">
            Certifications
          </h2>
          {cert && cert.length > 0 && cert[0].name
            ? cert.map((c, idx) => (
                <div className="mb-[10px]" key={idx}>
                  <div className="flex justify-between font-bold text-[13px]">
                    {c.name ? c.name : "Certificate Name"},{" "}
                    {c.organization ? c.organization : "Organization"}
                    <span className="font-normal italic">
                      Issued: {c.issueDate ? c.issueDate : "Date"}
                    </span>
                  </div>
                  <p className="my-[3px]">
                    <a
                      href={c.link ? c.link : "#"}
                      className="text-[#555] no-underline hover:underline"
                    >
                      {c.link ? c.link : "Certificate Link"}
                    </a>
                  </p>
                </div>
              ))
            : (
              <>
                <div className="mb-[10px]">
                  <div className="flex justify-between font-bold text-[13px]">
                    Frontend Development, Coursera{" "}
                    <span className="font-normal italic">Issued: Jun 2019</span>
                  </div>
                  <p className="my-[3px]">
                    <a
                      href="https://coursera.org/verify/frontend"
                      className="text-[#555] no-underline hover:underline"
                    >
                      coursera.org/verify/frontend
                    </a>
                  </p>
                </div>
                <div className="mb-[10px]">
                  <div className="flex justify-between font-bold text-[13px]">
                    UI/UX Design Specialization, Udemy{" "}
                    <span className="font-normal italic">Issued: Dec 2018</span>
                  </div>
                  <p className="my-[3px]">
                    <a
                      href="https://udemy.com/certificate/uiux"
                      className="text-[#555] no-underline hover:underline"
                    >
                      udemy.com/certificate/uiux
                    </a>
                  </p>
                </div>
              </>
            )}
        </div>

        {/* Languages */}
        <div className="mb-[15px]">
          <h2 className="text-[14px] uppercase text-center bg-[#f5e8d3] py-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-[8px]">
            Languages
          </h2>
          <p className="my-[3px]">
            {langs && langs.length > 0 && langs[0].name
              ? langs.map((lang, idx) => (
                  <span key={idx}>
                    {lang.name} ({lang.proficiency})
                    {idx < langs.length - 1 ? ", " : ""}
                  </span>
                ))
              : "English (Native), French (Intermediate)"}
          </p>
        </div>

        {/* Hobbies */}
        <div className="mb-[15px]">
          <h2 className="text-[14px] uppercase text-center bg-[#f5e8d3] py-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-[8px]">
            Hobbies & Interests
          </h2>
          <p className="my-[3px]">
            {additional.hobbies ? additional.hobbies : "Web Design, Photography, Hiking"}
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-[15px]">
          <h2 className="text-[14px] uppercase text-center bg-[#f5e8d3] py-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-[8px]">
            Achievements & Awards
          </h2>
          {ach && ach.length > 0 && ach[0].name
            ? ach.map((a, idx) => (
                <div className="mb-[10px]" key={idx}>
                  <div className="flex justify-between font-bold text-[13px]">
                    {a.name}
                    <span className="font-normal italic">
                      {a.organization ? a.organization : ""}
                    </span>
                  </div>
                  <p className="my-[3px]">{a.description ? a.description : ""}</p>
                </div>
              ))
            : (
              <>
                <div className="mb-[10px]">
                  <div className="flex justify-between font-bold text-[13px]">
                    Best Web App Design{" "}
                    <span className="font-normal italic">NY Tech Awards, 2021</span>
                  </div>
                  <p className="my-[3px]">Recognized for innovative UI design.</p>
                </div>
                <div className="mb-[10px]">
                  <div className="flex justify-between font-bold text-[13px]">
                    Dean’s List{" "}
                    <span className="font-normal italic">
                      New York University, 2016-2018
                    </span>
                  </div>
                  <p className="my-[3px]">Honored for academic excellence.</p>
                </div>
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_18;
