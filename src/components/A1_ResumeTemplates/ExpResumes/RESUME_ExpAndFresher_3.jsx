import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";

const RESUME_ExpAndFresher_3 = () => {
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

  // Helper for array fallback
  const hasArrayData = (arr, key) =>
    Array.isArray(arr) && arr.length > 0 && arr[0][key];

  return (
   <div className="max-w-3xl mx-auto p-6 font-sans text-gray-900 bg-white shadow-lg">
  {/* Header */}
  <div className="text-center mb-6">
    <h1 className="text-3xl font-bold">
      {(formData.firstName || '') +
        (formData.middleName ? ' ' + formData.middleName : '') +
        (formData.lastName ? ' ' + formData.lastName : '') || 'Your Name'}
    </h1>
    <p className="text-sm">
      Email: {formData.email || 'your.email@example.com'} | Phone: {formData.phoneNumber || '+91-XXXXXXXXXX'} | Location: {(formData.city || 'City') + ', ' + (formData.state || 'State')}
    </p>
    <p className="text-sm">
      LinkedIn: <a href={formData.linkedin || '#'} className="underline text-blue-700" target="_blank" rel="noopener noreferrer">{formData.linkedin || 'linkedin.com/in/yourprofile'}</a> | 
      GitHub: <a href={formData.github || '#'} className="underline text-blue-700" target="_blank" rel="noopener noreferrer">{formData.github || 'github.com/yourusername'}</a>
      {formData.figma  && (
        <p>
     Figma:<a href={formData.figma || '#'} className="underline text-blue-700" target="_blank" rel="noopener noreferrer">{formData.figma || 'figma.com/yourusername'}</a>
</p>
      )}
        
    </p>
  </div>

  <hr className="border-t-2 border-gray-300 my-4" />

  {/* Profile Summary / Career Objective */}
  <section className="mb-4">
    <h2 className="text-xl font-semibold mb-1">Profile Summary</h2>
    <p>
      {formData.summary || "Enthusiastic software developer with strong skills in React, Node.js, and modern web technologies. Adept at problem-solving, team collaboration, and building scalable applications. Seeking to contribute to innovative projects in a growth-focused environment."}
    </p>
  </section>

  <hr className="border-t border-gray-300 my-4" />

  {/* Skills */}
       <section>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "10px 0 5px 0" }}>
          Skills
        </h2>
        <div style={{ fontSize: 13 }}>
          <span style={{ fontWeight: 600 }}>Technical Skills:</span>
          <ul style={{ margin: "4px 0 0 16px", padding: 0 }}>
            {(skills.technical && skills.technical.length > 0
              ? skills.technical
              : ["React", "JavaScript", "HTML", "CSS"]
            ).map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
          <span style={{ fontWeight: 600, display: "block", marginTop: 8 }}>
            Soft Skills:
          </span>
          <ul style={{ margin: "4px 0 0 16px", padding: 0 }}>
            {(skills.soft && skills.soft.length > 0
              ? skills.soft
              : ["Communication", "Teamwork", "Problem-solving"]
            ).map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
          {skills.related && (
            <>
              <span style={{ fontWeight: 600, display: "block", marginTop: 8 }}>
                Other Skills:
              </span>
              <ul style={{ margin: "4px 0 0 16px", padding: 0 }}>
                <li>{skills.related}</li>
              </ul>
            </>
          )}
        </div>
        <hr style={{ borderTop: "1px solid #ccc", margin: "8px 0" }} />
      </section>

  <hr className="border-t border-gray-300 my-4" />

  {/* Projects */}
  <section>
  
 <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">
          Projects
        </h2>

     {projects.map((proj, idx) => (
  <div key={idx} className="mb-[10px] flex justify-between">
    <div>
      <span className="font-bold">{proj.name?proj.name:"Project Name"}</span>
      <br />
      Technologies: {proj.technologies?proj.technologies:"Technologies Used"}
      <br />
      {proj.link && proj.link?(
        <a href={proj.link} className="text-[#0000EE] underline" target="_blank" rel="noopener noreferrer">
          {proj.link}
        </a>
      ):"Provide project Link"}
      <ul className="list-disc pl-[20px] m-0 mt-[2px]">
        {proj.description && proj.description? <li>{proj.description}</li>: "Project Description"}  <br />
        {proj.summary && proj.summary? <li>{proj.summary}</li>: "Project Summary"}
      </ul>
    </div>
    <div className="text-right">
      {proj.startDate ?proj.startDate: "Project Start Date"} - {proj.endDate ? proj.endDate: "Project End Date"}
    </div>
  </div>
))}
</section>

  <hr className="border-t border-gray-300 my-4" />

  {/* Education */}
  <section>
  <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">Education</h2>
  {education && education.length > 0 && education[0].collegeName
    ? education.map((edu, idx) => (
        <div key={idx} className="text-[12px] m-0 flex justify-between">
          <div>
            <span className="font-bold">{edu.degree || "B.E. in Information Technology"}</span>
            <br />
            {edu.collegeName || "XYZ Institute of Technology"}, {edu.location || "Mumbai, MH"}
            <br />
            Stream: {edu.stream || "Web Development"}
          </div>
          <div className="text-right">
            {edu.startDate || "June 2020"} - {edu.endDate || "May 2024"}
            <br />
            CGPA: {edu.cgpa || "9.0/10.0"}
          </div>
        </div>
      ))
    : (
      <div className="text-[12px] m-0 flex justify-between">
        <div>
          <span className="font-bold">B.E. in Information Technology</span>
          <br />
          XYZ Institute of Technology, Mumbai, MH
          <br />
          Stream: Web Development
        </div>
        <div className="text-right">
          June 2020 - May 2024
          <br />
          CGPA: 9.0/10.0
        </div>
      </div>
    )
  }
  <hr className="border-t border-black my-[4px]" />
</section>


  <hr className="border-t border-gray-300 my-4" />

  {/* Internships / Trainings */}
  <section className="mb-4">
    <h2 className="text-xl font-semibold mb-1">Work Experience</h2>
    {workExperience && workExperience.length > 0 ? (
      workExperience.map((work, idx) => (
        <div key={idx}>
          <p><strong>{work.jobTitle || 'Software Developer Intern'}</strong> – {work.companyName||'ABC Technologies'} ({work.startDate||'May 2024'}) ({work.endDate&&work.endDate||'July 2024'})</p>
          <ul className="list-disc list-inside ml-4">
            {work.responsibilities &&  work.responsibilities
                        .split("\n").map((item, i) => (
              <li key={i}>{item||'Developed reusable components using React and integrated RESTful APIs.'}</li>
            ))}
          </ul>
        </div>
      ))
    ) : (
      <div>
        <p><strong>Software Developer Intern</strong> – ABC Technologies (May 2024 – July 2024)</p>
        <ul className="list-disc list-inside ml-4">
          <li>Developed reusable components using React and integrated RESTful APIs.</li>
          <li>Improved load time of web dashboard by 30% through code optimization.</li>
        </ul>
      </div>
    )}
  </section>

  <hr className="border-t border-gray-300 my-4" />

  {/* Certifications / Courses */}
  <section className="mb-4">
    <h2 className="text-xl font-semibold mb-1">Certifications / Courses</h2>
    <ul className="list-disc list-inside">
      {certificates && certificates.length > 0 ? (
        certificates.map((cert, idx) => (
          <li key={idx}>
            {cert.name || 'Full-Stack Web Development'} – {cert.organization ||'Coursera'} ({cert.issueDate || '2024'})
            {cert.expiryDate && ` | Expires: ${cert.expiryDate}`}
            {cert.link && <a href={cert.link} className="underline text-blue-700 ml-2" target="_blank" rel="noopener noreferrer">View Certificate</a>}
          </li>
        ))
      ) : (
        <>
          <li>Full-Stack Web Development – Coursera (2024)</li>
          <li>Introduction to AI – Udemy (2023)</li>
        </>
      )}
    </ul>
  </section>

  <hr className="border-t border-gray-300 my-4" />

  {/* Achievements / Extracurriculars */}
  <section>
    <h2 className="text-xl font-semibold mb-1">Achievements / Extracurriculars</h2>
    <ul className="list-disc list-inside">
      {additional.achievements && additional.achievements.length > 0 ? (
        additional.achievements.map((ach, idx) => 
         <li key={idx}>
                    {ach.name || "Winner - Hackathon"}
                    {ach.organization && <> - {ach.organization}</>}
                    <br />
                    {/* {ach.description || "Won first place in XYZ hackathon."} */}
                  </li>
        )
      ) : (
        <>
          <li>Winner – CodeFest 2024 Hackathon</li>
          <li>Lead Organizer – University Tech Club</li>
          <li>Volunteer – Local STEM Education Outreach</li>
        </>
      )}
    </ul>
  </section>
</div>

 
  );
};

export default RESUME_ExpAndFresher_3;
