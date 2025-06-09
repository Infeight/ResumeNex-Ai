import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";

const RESUME_ExpAndFresher_19 = () => {
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

  const jobTitle = formData.jobTitle ? formData.jobTitle : "Software Developer";

  const address =
    formData.city || formData.state || formData.pincode
      ? `${formData.city ? formData.city : ""}${formData.city && formData.state ? ", " : ""}${formData.state ? formData.state : ""}${formData.state && formData.pincode ? ", " : ""}${formData.pincode ? formData.pincode : ""}`
      : "San Francisco, CA, 94101";

  const edu = education && education.length > 0 ? education[0] : {};
  const work = workExperience && workExperience.length > 0 ? workExperience : [];
  const proj = projects && projects.length > 0 ? projects : [];
  const cert = certificates && certificates.length > 0 ? certificates : [];
  const langs = additional.languages && additional.languages.length > 0 ? additional.languages : [];
  const ach = additional.achievements && additional.achievements.length > 0 ? additional.achievements : [];

  return (
    <div className="font-['Arial',sans-serif] bg-[#f6f6f6] flex justify-center items-start min-h-screen">
      <div className="w-[210mm] bg-white shadow-[0_0_12px_rgba(0,0,0,0.09)] p-[15mm] box-border text-[11px] leading-[1.5]">
        {/* Header */}
        <div className="text-center pb-[8px] mb-[12px] border-b border-[#ddd]">
          <h1 className="text-[22px] m-0 uppercase">{fullName}</h1>
          <div className="text-[12px] my-[2px] text-[#444]">{jobTitle}</div>
          <div className="text-[11px] my-[2px] text-[#666]">
            {address} | {formData.phoneNumber ? formData.phoneNumber : "(415) 555-1234"} |{" "}
            <a
              href={formData.email ? `mailto:${formData.email}` : "#"}
              className="text-[#666] no-underline hover:underline"
            >
              {formData.email ? formData.email : "your.email@example.com"}
            </a>
          </div>
          <div className="text-[11px] my-[2px] text-[#666]">
            <a
              href={formData.linkedin ? formData.linkedin : "#"}
              className="text-[#666] no-underline hover:underline"
            >
              {formData.linkedin ? formData.linkedin : "linkedin.com/in/yourprofile"}
            </a>
            {" | "}
            <a
              href={formData.github ? formData.github : "#"}
              className="text-[#666] no-underline hover:underline"
            >
              {formData.github ? formData.github : "github.com/yourprofile"}
            </a>
            {" | "}
            <a
              href={formData.otherLink ? formData.otherLink : "#"}
              className="text-[#666] no-underline hover:underline"
            >
              {formData.otherLink ? formData.otherLink : "yourwebsite.com"}
            </a>
            {" | "}
            <a
              href={formData.figma ? formData.figma : "#"}
              className="text-[#666] no-underline hover:underline"
            >
              {formData.figma ? formData.figma : "figma.com/@yourprofile"}
            </a>
            {" | "}
            <a
              href={formData.leetcode ? formData.leetcode : "#"}
              className="text-[#666] no-underline hover:underline"
            >
              {formData.leetcode ? formData.leetcode : "leetcode.com/yourprofile"}
            </a>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-[18px]">
          <p className="text-[11px] italic mb-[10px] text-[#444]">
            {summary
              ? summary
              : "Results-driven Software Developer with a passion for building scalable web applications. Experienced in React, Node.js, and cloud deployment. Recognized for improving system performance by 35% and collaborating effectively in agile teams. Eager to contribute to innovative projects at a forward-thinking company."}
          </p>
        </div>

        {/* Skills */}
        <div className="mb-[18px]">
          <h2 className="text-[13px] uppercase bg-[#e7f0fa] text-center py-[4px] mb-[8px]">
            Skills
          </h2>
          <div className="flex flex-wrap">
            <ul className="w-[48%] my-[3px] pl-[18px]">
              {(skills.technical && skills.technical.length > 0
                ? skills.technical
                : ["JavaScript", "React", "Node.js", "REST APIs"]
              ).map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
            <ul className="w-[48%] my-[3px] pl-[18px]">
              {(skills.soft && skills.soft.length > 0
                ? skills.soft
                : ["Problem Solving", "Teamwork", "Communication"]
              ).map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

         {/* Projects */}
        <div className="mb-[18px]">
          <h2 className="text-[13px] uppercase bg-[#e7f0fa] text-center py-[4px] mb-[8px]">
            Projects
          </h2>
          {proj && proj.length > 0 && proj[0].name
            ? proj.map((p, idx) => (
                <div className="mb-[10px]" key={idx}>
                  <div className="flex justify-between font-bold text-[12px]">
                    <span>{p.name ? p.name : "Project Name"}</span>
                    <span className="font-normal italic">
                      {(p.startDate || p.endDate)
                        ? `${p.startDate ? p.startDate : "Start"} – ${p.endDate ? p.endDate : "End"}`
                        : ""}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#555]">
                    Technologies: {p.technologies ? p.technologies : "Technologies"} •{" "}
                    <a
                      href={p.link ? p.link : "#"}
                      className="text-[#666] no-underline hover:underline"
                    >
                      {p.link ? p.link : "Project Link"}
                    </a>
                  </div>
                  <ul className="my-[3px] pl-[18px]">
                    {p.description
                      ? p.description.split("\n").map((line, i) => <li key={i}>{line}</li>)
                      : (
                        <>
                          <li>Built a scalable SaaS dashboard for real-time analytics.</li>
                          <li>Integrated Stripe for secure payments.</li>
                          <li>Deployed on AWS with CI/CD pipelines.</li>
                        </>
                      )}
                  </ul>
                </div>
              ))
            : (
              <>
                <div className="mb-[10px]">
                  <div className="flex justify-between font-bold text-[12px]">
                    <span>Analytics Dashboard</span>
                    <span className="font-normal italic">Jan 2022 – May 2022</span>
                  </div>
                  <div className="text-[11px] text-[#555]">
                    Technologies: React, D3.js •{" "}
                    <a
                      href="https://github.com/evanmartin/analytics"
                      className="text-[#666] no-underline hover:underline"
                    >
                      github.com/evanmartin/analytics
                    </a>
                  </div>
                  <ul className="my-[3px] pl-[18px]">
                    <li>Built a scalable SaaS dashboard for real-time analytics.</li>
                    <li>Integrated Stripe for secure payments.</li>
                    <li>Deployed on AWS with CI/CD pipelines.</li>
                  </ul>
                </div>
                <div className="mb-[10px]">
                  <div className="flex justify-between font-bold text-[12px]">
                    <span>Portfolio Website</span>
                    <span className="font-normal italic">Sep 2021 – Dec 2021</span>
                  </div>
                  <div className="text-[11px] text-[#555]">
                    Technologies: HTML, CSS, JavaScript •{" "}
                    <a
                      href="https://github.com/evanmartin/portfolio"
                      className="text-[#666] no-underline hover:underline"
                    >
                      github.com/evanmartin/portfolio
                    </a>
                  </div>
                  <ul className="my-[3px] pl-[18px]">
                    <li>Designed and deployed a personal portfolio website.</li>
                    <li>Optimized for SEO, increasing traffic by 40%.</li>
                    <li>Added blog and contact form features.</li>
                  </ul>
                </div>
              </>
            )}
        </div>


         {/* Education */}
        <div className="mb-[18px]">
          <h2 className="text-[13px] uppercase bg-[#e7f0fa] text-center py-[4px] mb-[8px]">
            Education
          </h2>
          {edu && (edu.degree || edu.collegeName)
            ? (
              <div className="mb-[10px]">
                <div className="flex justify-between font-bold text-[12px]">
                  <span>
                    {edu.degree ? edu.degree : "Degree"}
                    {edu.stream ? `, ${edu.stream}` : ""}
                  </span>
                  <span className="font-normal italic">
                    {(edu.startDate || edu.endDate)
                      ? `${edu.startDate ? edu.startDate : "Start"} – ${edu.endDate ? edu.endDate : "End"}`
                      : ""}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-[#555]">
                  <span>{edu.collegeName ? edu.collegeName : "University Name"}</span>
                  <span>CGPA: {edu.cgpa ? edu.cgpa : "CGPA"}</span>
                </div>
              </div>
            )
            : (
              <div className="mb-[10px]">
                <div className="flex justify-between font-bold text-[12px]">
                  <span>B.Tech, Computer Science</span>
                  <span className="font-normal italic">2015 – 2019</span>
                </div>
                <div className="flex justify-between text-[11px] text-[#555]">
                  <span>UC Berkeley</span>
                  <span>CGPA: 3.7</span>
                </div>
              </div>
            )}
        </div>




        {/* Experience */}
        <div className="mb-[18px]">
          <h2 className="text-[13px] uppercase bg-[#e7f0fa] text-center py-[4px] mb-[8px]">
            Experience
          </h2>
          {work && work.length > 0 && (work[0].jobTitle || work[0].companyName)
            ? work.map((item, idx) => (
                <div className="mb-[10px]" key={idx}>
                  <div className="flex justify-between font-bold text-[12px]">
                    <span>
                      {item.jobTitle ? item.jobTitle : "Job Title"},{" "}
                      {item.companyName ? item.companyName : "Company Name"}
                    </span>
                    <span className="font-normal italic">
                      {(item.startDate || item.endDate)
                        ? `${item.startDate ? item.startDate : "Start"} – ${item.endDate ? item.endDate : "End"}`
                        : ""}
                    </span>
                  </div>
                  <ul className="my-[3px] pl-[18px]">
                    {item.responsibilities
                      ? item.responsibilities.split("\n").map((line, i) => <li key={i}>{line}</li>)
                      : (
                        <>
                          <li>Developed RESTful APIs and web services in Node.js.</li>
                          <li>Enhanced UI/UX of core product using React and SASS.</li>
                          <li>Reduced server response times by 30% via code optimization.</li>
                        </>
                      )}
                  </ul>
                </div>
              ))
            : (
              <>
                <div className="mb-[10px]">
                  <div className="flex justify-between font-bold text-[12px]">
                    <span>Software Developer, Cloudify Labs</span>
                    <span className="font-normal italic">Aug 2021 – Present</span>
                  </div>
                  <ul className="my-[3px] pl-[18px]">
                    <li>Developed RESTful APIs and web services in Node.js.</li>
                    <li>Enhanced UI/UX of core product using React and SASS.</li>
                    <li>Reduced server response times by 30% via code optimization.</li>
                  </ul>
                </div>
                <div className="mb-[10px]">
                  <div className="flex justify-between font-bold text-[12px]">
                    <span>Frontend Developer, BlueSky Apps</span>
                    <span className="font-normal italic">Jun 2019 – Jul 2021</span>
                  </div>
                  <ul className="my-[3px] pl-[18px]">
                    <li>Built responsive interfaces with React and Redux.</li>
                    <li>Integrated third-party APIs for real-time data.</li>
                    <li>Collaborated with QA to reduce bugs by 25%.</li>
                  </ul>
                </div>
              </>
            )}
        </div>

       
       
        
        {/* Certifications */}
        <div className="mb-[18px]">
          <h2 className="text-[13px] uppercase bg-[#e7f0fa] text-center py-[4px] mb-[8px]">
            Certifications
          </h2>
          {cert && cert.length > 0 && cert[0].name
            ? cert.map((c, idx) => (
                <div className="mb-[10px]" key={idx}>
                  <div className="flex justify-between font-bold text-[12px]">
                    <span>
                      {c.name ? c.name : "Certificate Name"},{" "}
                      {c.organization ? c.organization : "Organization"}
                    </span>
                    <span className="font-normal italic">
                      {c.issueDate ? c.issueDate : "Date"}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#555]">
                    <a
                      href={c.link ? c.link : "#"}
                      className="text-[#666] no-underline hover:underline"
                    >
                      {c.link ? c.link : "Certificate Link"}
                    </a>
                  </div>
                </div>
              ))
            : (
              <>
                <div className="mb-[10px]">
                  <div className="flex justify-between font-bold text-[12px]">
                    <span>Google Cloud Certified, Google</span>
                    <span className="font-normal italic">2022</span>
                  </div>
                  <div className="text-[11px] text-[#555]">
                    <a
                      href="https://cloud.google.com/certification"
                      className="text-[#666] no-underline hover:underline"
                    >
                      cloud.google.com/certification
                    </a>
                  </div>
                </div>
                <div className="mb-[10px]">
                  <div className="flex justify-between font-bold text-[12px]">
                    <span>Full Stack Web Development, Coursera</span>
                    <span className="font-normal italic">2021</span>
                  </div>
                  <div className="text-[11px] text-[#555]">
                    <a
                      href="https://coursera.org/verify/fullstack"
                      className="text-[#666] no-underline hover:underline"
                    >
                      coursera.org/verify/fullstack
                    </a>
                  </div>
                </div>
              </>
            )}
        </div>

        {/* Languages */}
        <div className="mb-[18px]">
          <h2 className="text-[13px] uppercase bg-[#e7f0fa] text-center py-[4px] mb-[8px]">
            Languages
          </h2>
          <p className="text-[11px] text-[#666]">
            {langs && langs.length > 0 && langs[0].name
              ? langs.map((lang, idx) => (
                  <span key={idx}>
                    {lang.name} ({lang.proficiency})
                    {idx < langs.length ? ", " : ""}
                  </span>
                ))
              : "English (Native), Hindi (Fluent)"}
          </p>
        </div>

        {/* Hobbies */}
        <div className="mb-[18px]">
          <h2 className="text-[13px] uppercase bg-[#e7f0fa] text-center py-[4px] mb-[8px]">
            Hobbies & Interests
          </h2>
          <p className="text-[11px] text-[#666]">
            {additional.hobbies ? additional.hobbies : "Coding, Cycling, Reading"}
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-[18px]">
          <h2 className="text-[13px] uppercase bg-[#e7f0fa] text-center py-[4px] mb-[8px]">
            Achievements & Awards
          </h2>
          {ach && ach.length > 0 && ach[0].name
            ? ach.map((a, idx) => (
                <div className="mb-[10px]" key={idx}>
                  <div className="flex justify-between font-bold text-[12px]">
                    <span>{a.name}</span>
                    <span className="font-normal italic">
                      {a.organization ? a.organization : ""}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#666]">{a.description ? a.description : ""}</p>
                </div>
              ))
            : (
              <>
                <div className="mb-[10px]">
                  <div className="flex justify-between font-bold text-[12px]">
                    <span>Winner, Hackathon SF</span>
                    <span className="font-normal italic">2021</span>
                  </div>
                  <p className="text-[11px] text-[#666]">
                    Won 1st place for building a real-time collaboration app.
                  </p>
                </div>
                <div className="mb-[10px]">
                  <div className="flex justify-between font-bold text-[12px]">
                    <span>Dean’s List, UC Berkeley</span>
                    <span className="font-normal italic">2017-2019</span>
                  </div>
                  <p className="text-[11px] text-[#666]">
                    Recognized for academic excellence.
                  </p>
                </div>
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_19;
