import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";

const RESUME_ExpAndFresher_13 = () => {
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

  const address =
    formData.city || formData.state || formData.pincode
      ? `${formData.city ? formData.city : ""}${formData.city && formData.state ? ", " : ""}${formData.state ? formData.state : ""}${formData.state && formData.pincode ? ", " : ""}${formData.pincode ? formData.pincode : ""}`
      : "City, State, Pincode";

  // Education
  const edu = education && education.length > 0 ? education[0] : {};
  // Work Experience
  const work = workExperience && workExperience.length > 0 ? workExperience : [];
  // Projects
  const proj = projects && projects.length > 0 ? projects : [];
  // Certificates
  const cert = certificates && certificates.length > 0 ? certificates : [];

  return (
    <div className="font-['Roboto',sans-serif] m-0 bg-white text-[#333] w-[794px] mx-auto my-[20px] p-5 text-[10pt] leading-[1.4]">
      {/* Personal Info */}
      <h1 className="text-[16pt] font-bold mb-[4px] uppercase tracking-[0.5px]">
        {fullName}
      </h1>
      <div className="text-[9pt] mb-[12px]">
        {address} • {formData.phoneNumber ? formData.phoneNumber : "Your Phone Number"} • {formData.email ? formData.email : "your.email@example.com"} •{" "}
        <a
          href={formData.linkedin ? formData.linkedin : "#"}
          className="text-[#333] no-underline hover:underline"
        >
          {formData.linkedin ? formData.linkedin : "linkedin.com/in/yourprofile"}
        </a>{" "}
        •{" "}
        <a
          href={formData.github ? formData.github : "#"}
          className="text-[#333] no-underline hover:underline"
        >
          {formData.github ? formData.github : "github.com/yourprofile"}
        </a>{" "}
        •{" "}
        <a
          href={formData.otherLink ? formData.otherLink : "#"}
          className="text-[#333] no-underline hover:underline"
        >
          {formData.otherLink ? formData.otherLink : "yourwebsite.com"}
        </a>{" "}
        •{" "}
        <a
          href={formData.figma ? formData.figma : "#"}
          className="text-[#333] no-underline hover:underline"
        >
          {formData.figma ? formData.figma : "figma.com/@yourprofile"}
        </a>{" "}
        •{" "}
        <a
          href={formData.leetcode ? formData.leetcode : "#"}
          className="text-[#333] no-underline hover:underline"
        >
          {formData.leetcode ? formData.leetcode : "leetcode.com/yourprofile"}
        </a>
      </div>

      {/* Profile Summary */}
      <h2 className="text-[12pt] font-bold mt-[14px] mb-[6px] uppercase border-b border-[#333] pb-[2px]">
        Professional Profile
      </h2>
      <p className="text-[9.5pt] mb-[10px]">
        {summary
          ? summary
          : "Dedicated Web Developer with a Bachelor’s in Computer Science from Boston University. Skilled in building responsive web applications using HTML, CSS, JavaScript, and React, with experience in full-stack development. Successfully optimized load times by 30% on a portfolio project, enhancing user experience. Passionate about creating intuitive interfaces and collaborating on innovative solutions."}
      </p>

      {/* Work Experience */}
      <h2 className="text-[12pt] font-bold mt-[14px] mb-[6px] uppercase border-b border-[#333] pb-[2px]">
        Work Experience
      </h2>
      {work && work.length > 0 && (work[0].jobTitle || work[0].companyName) ? (
        work.map((item, idx) => (
          <div className="mb-[10px]" key={idx}>
            <div className="flex justify-between mb-[4px]">
              <h3 className="text-[10.5pt] font-bold mt-[10px] mb-[4px]">
                {item.jobTitle ? item.jobTitle : "Job Title"}
              </h3>
              <div className="text-[9.5pt] italic">
                {(item.startDate || item.endDate)
                  ? `${item.startDate ? item.startDate : "Start"} - ${item.endDate ? item.endDate : "End"}`
                  : "Date"}
              </div>
            </div>
            <div className="text-[9.5pt] font-bold">
              {item.companyName ? item.companyName : "Company Name"}
            </div>
            <ul className="mt-[4px] mb-[10px] pl-[18px] text-[9.5pt] space-y-[3px]">
              {item.responsibilities
                ? item.responsibilities.split("\n").map((r, i) => <li key={i}>{r}</li>)
                : (
                  <>
                    <li>Developing responsive web interfaces using React.</li>
                    <li>Coordinating with designers to implement UI/UX improvements.</li>
                    <li>Reducing page load times by 20% through optimization.</li>
                  </>
                )}
            </ul>
          </div>
        ))
      ) : (
        <>
          <div className="mb-[10px]">
            <div className="flex justify-between mb-[4px]">
              <h3 className="text-[10.5pt] font-bold mt-[10px] mb-[4px]">
                Junior Web Developer
              </h3>
              <div className="text-[9.5pt] italic">Jun 2022 - Present</div>
            </div>
            <div className="text-[9.5pt] font-bold">TechCorp (Boston, MA)</div>
            <ul className="mt-[4px] mb-[10px] pl-[18px] text-[9.5pt] space-y-[3px]">
              <li>Developing responsive web interfaces using React.</li>
              <li>Coordinating with designers to implement UI/UX improvements.</li>
              <li>Reducing page load times by 20% through optimization.</li>
            </ul>
          </div>
          <div className="mb-[10px]">
            <div className="flex justify-between mb-[4px]">
              <h3 className="text-[10.5pt] font-bold mt-[10px] mb-[4px]">
                Web Development Intern
              </h3>
              <div className="text-[9.5pt] italic">Jan 2021 - May 2021</div>
            </div>
            <div className="text-[9.5pt] font-bold">
              Innovate Solutions (Boston, MA)
            </div>
            <ul className="mt-[4px] mb-[10px] pl-[18px] text-[9.5pt] space-y-[3px]">
              <li>Assisted in building static websites with HTML/CSS.</li>
              <li>Updated legacy code to improve accessibility.</li>
              <li>Collaborated on a team project to revamp client portal.</li>
            </ul>
          </div>
        </>
      )}

      {/* Education */}
      <h2 className="text-[12pt] font-bold mt-[14px] mb-[6px] uppercase border-b border-[#333] pb-[2px]">
        Education
      </h2>
      {edu && (edu.degree || edu.collegeName) ? (
        <div className="mb-[6px]">
          <div className="flex justify-between mb-[2px]">
            <div className="text-[9.5pt] font-medium">
              {edu.degree ? edu.degree : "Degree"}
              {edu.stream ? `, ${edu.stream}` : ""}
            </div>
            <div className="text-[9.5pt] italic">
              {(edu.startDate || edu.endDate)
                ? `${edu.startDate ? edu.startDate : "Start"} - ${edu.endDate ? edu.endDate : "End"}`
                : "Date"}
            </div>
          </div>
          <div className="flex justify-between text-[8.5pt] text-[#555]">
            <div>{edu.collegeName ? edu.collegeName : "College Name"}</div>
            <div className="italic">
              CGPA: {edu.cgpa ? edu.cgpa : "CGPA"}
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-[6px]">
          <div className="flex justify-between mb-[2px]">
            <div className="text-[9.5pt] font-medium">
              Bachelor’s, Computer Science
            </div>
            <div className="text-[9.5pt] italic">Sep 2018 - May 2022</div>
          </div>
          <div className="flex justify-between text-[8.5pt] text-[#555]">
            <div>Boston University, Boston, MA</div>
            <div className="italic">CGPA: 3.85</div>
          </div>
        </div>
      )}

      {/* Projects */}
      <h2 className="text-[12pt] font-bold mt-[14px] mb-[6px] uppercase border-b border-[#333] pb-[2px]">
        Projects
      </h2>
      {proj && proj.length > 0 && proj[0].name ? (
        proj.map((p, idx) => (
          <div className="mb-[10px]" key={idx}>
            <h3 className="text-[10.5pt] font-bold mt-[10px] mb-[4px]">
              {p.name ? p.name : "Project Name"}
            </h3>
            <div className="text-[9.5pt] mb-[4px]">
              Technologies: {p.technologies ? p.technologies : "Technologies"} •{" "}
              <a
                href={p.link ? p.link : "#"}
                className="text-[#333] no-underline hover:underline"
              >
                {p.link ? p.link : "Project Link"}
              </a>
            </div>
            <ul className="mt-[4px] mb-[10px] pl-[18px] text-[9.5pt] space-y-[3px]">
              {p.description
                ? p.description.split("\n").map((desc, i) => <li key={i}>{desc}</li>)
                : (
                  <>
                    <li>Designed a responsive portfolio site with clean UI.</li>
                    <li>Optimized load time by 30% using lazy loading.</li>
                    <li>Integrated contact form with backend API.</li>
                  </>
                )}
            </ul>
          </div>
        ))
      ) : (
        <>
          <div className="mb-[10px]">
            <h3 className="text-[10.5pt] font-bold mt-[10px] mb-[4px]">
              Portfolio Website
            </h3>
            <div className="text-[9.5pt] mb-[4px]">
              Technologies: HTML, CSS, JavaScript •{" "}
              <a
                href="github.com/grahammaddox/portfolio"
                className="text-[#333] no-underline hover:underline"
              >
                github.com/grahammaddox/portfolio
              </a>
            </div>
            <ul className="mt-[4px] mb-[10px] pl-[18px] text-[9.5pt] space-y-[3px]">
              <li>Designed a responsive portfolio site with clean UI.</li>
              <li>Optimized load time by 30% using lazy loading.</li>
              <li>Integrated contact form with backend API.</li>
            </ul>
          </div>
          <div className="mb-[10px]">
            <h3 className="text-[10.5pt] font-bold mt-[10px] mb-[4px]">
              E-Commerce Platform
            </h3>
            <div className="text-[9.5pt] mb-[4px]">
              Technologies: React, Node.js •{" "}
              <a
                href="github.com/grahammaddox/ecommerce"
                className="text-[#333] no-underline hover:underline"
              >
                github.com/grahammaddox/ecommerce
              </a>
            </div>
            <ul className="mt-[4px] mb-[10px] pl-[18px] text-[9.5pt] space-y-[3px]">
              <li>Built a full-stack e-commerce app with payment integration.</li>
              <li>Reduced checkout errors by 25% with form validation.</li>
              <li>Deployed on Heroku for public access.</li>
            </ul>
          </div>
        </>
      )}

      {/* Certifications */}
      <h2 className="text-[12pt] font-bold mt-[14px] mb-[6px] uppercase border-b border-[#333] pb-[2px]">
        Certifications
      </h2>
      {cert && cert.length > 0 && cert[0].name ? (
        cert.map((c, idx) => (
          <div className="mb-[6px]" key={idx}>
            <div className="flex justify-between">
              <div className="text-[9.5pt]">
                {c.name ? c.name : "Certificate Name"} - {c.organization ? c.organization : "Organization"}
              </div>
              <div className="text-[9.5pt] italic">
                Issued: {c.issueDate ? c.issueDate : "Date"}
              </div>
            </div>
            <div className="text-[9.5pt]">
              <a
                href={c.link ? c.link : "#"}
                className="text-[#333] no-underline hover:underline"
              >
                {c.link ? c.link : "Certificate Link"}
              </a>
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="mb-[6px]">
            <div className="flex justify-between">
              <div className="text-[9.5pt]">
                React Developer Certification - Coursera
              </div>
              <div className="text-[9.5pt] italic">Issued: Oct 2022</div>
            </div>
            <div className="text-[9.5pt]">
              <a
                href="coursera.org/verify/react-cert"
                className="text-[#333] no-underline hover:underline"
              >
                coursera.org/verify/react-cert
              </a>
            </div>
          </div>
          <div className="mb-[6px]">
            <div className="flex justify-between">
              <div className="text-[9.5pt]">
                JavaScript Algorithms - freeCodeCamp
              </div>
              <div className="text-[9.5pt] italic">Issued: Jul 2021</div>
            </div>
            <div className="text-[9.5pt]">
              <a
                href="freecodecamp.org/cert/javascript"
                className="text-[#333] no-underline hover:underline"
              >
                freecodecamp.org/cert/javascript
              </a>
            </div>
          </div>
        </>
      )}

      {/* Skills */}
      <h2 className="text-[12pt] font-bold mt-[14px] mb-[6px] uppercase border-b border-[#333] pb-[2px]">
        Skills
      </h2>
      <div className="text-[9.5pt] mt-[4px] mb-[10px]">
        <div>
          <span className="font-medium">Technical Skills:</span>{" "}
          {skills.technical && skills.technical.length > 0
            ? skills.technical.join(", ")
            : "HTML, CSS, JavaScript, React, Node.js, Git"}
        </div>
        <div>
          <span className="font-medium">Soft Skills:</span>{" "}
          {skills.soft && skills.soft.length > 0
            ? skills.soft.join(", ")
            : "Teamwork, Problem-Solving, Communication"}
        </div>
      </div>

      {/* Languages */}
      <h2 className="text-[12pt] font-bold mt-[14px] mb-[6px] uppercase border-b border-[#333] pb-[2px]">
        Languages
      </h2>
      <div className="text-[9.5pt] mb-[10px]">
        {additional.languages && additional.languages.length > 0 && additional.languages[0].name
          ? additional.languages
              .map(
                (lang, idx) =>
                  <div key={idx}>{lang.name} ({lang.proficiency})</div>
              )
          : (
            <>
              <div>English (Native)</div>
              <div>Spanish (Intermediate)</div>
            </>
          )}
      </div>

      {/* Hobbies */}
      <h2 className="text-[12pt] font-bold mt-[14px] mb-[6px] uppercase border-b border-[#333] pb-[2px]">
        Hobbies & Interests
      </h2>
      <div className="text-[9.5pt] mb-[10px]">
        {additional.hobbies ? additional.hobbies : "Coding, Hiking, Photography"}
      </div>

      {/* Achievements */}
      <h2 className="text-[12pt] font-bold mt-[14px] mb-[6px] uppercase border-b border-[#333] pb-[2px]">
        Achievements & Awards
      </h2>
      {additional.achievements && additional.achievements.length > 0 && additional.achievements[0].name
        ? additional.achievements.map((ach, idx) => (
            <div className="mb-[6px]" key={idx}>
              <div className="text-[9.5pt] font-bold">{ach.name}</div>
              <div className="text-[9.5pt]">{ach.organization}</div>
              <div className="text-[9.5pt]">{ach.description}</div>
            </div>
          ))
        : (
          <>
            <div className="mb-[6px]">
              <div className="text-[9.5pt] font-bold">Hackathon Winner</div>
              <div className="text-[9.5pt]">Boston CodeFest</div>
              <div className="text-[9.5pt]">
                Won 1st place for best web app in 2021.
              </div>
            </div>
            <div className="mb-[6px]">
              <div className="text-[9.5pt] font-bold">Dean’s List</div>
              <div className="text-[9.5pt]">Boston University</div>
              <div className="text-[9.5pt]">
                Recognized for academic excellence in 2020-2022.
              </div>
            </div>
          </>
        )}
    </div>
  );
};

export default RESUME_ExpAndFresher_13;
