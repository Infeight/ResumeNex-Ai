import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";
const RESUME_ExpAndFresher_14 = () => {




const data = {
  name: "Tarun Dandugula",
  title: "Full Stack Developer",
  contact: {
    email: "tarundandugula1@gmail.com",
    phone: "+91 9876543210",
    location: "Hyderabad, India",
    website: "tarundev.com",
  },
  summary: "Creative developer with a passion for building scalable web applications and elegant interfaces.",
  skills: ["React", "Node.js", "MongoDB", "Canvas API", "WebSockets"],
  experience: [
    {
      role: "Frontend Engineer",
      company: "TechNova",
      duration: "May 2023 - Present",
      description: "Developed and maintained a real-time virtual office platform using Canvas API and WebSockets.",
    },
  ],
  projects: [
    {
      name: "SPACE Virtual Office",
      description: "An interactive office simulation app for remote collaboration.",
      link: "https://space-app.dev",
    },
  ],
  education: [
    {
      institution: "NIT Warangal",
      degree: "B.Tech in ECE",
      year: "2024",
    },
  ],
};


  // const {
  //   name = "John Doe",
  //   title = "Software Developer",
  //   contact = {},
  //   summary = "An enthusiastic developer passionate about building impactful solutions.",
  //   skills = [],
  //   experience = [],
  //   education = [],
  //   projects = [],
  // } = data;
  // const { email = "john@example.com", phone = "123-456-7890", location = "New York, USA", website = "www.johndoe.dev" } = contact;

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

  return (
    <div className=" text-white p-8 font-sans min-h-screen print:bg-white print:text-black">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-purple-400">
           {formData.firstName || formData.middleName || formData.lastName
              ? `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim()
              : "Spencer Nova"}
        </h1>
        <h2 className="text-xl font-semibold text-black"> {formData.jobTitle ? formData.jobTitle : "Flutter Developer"}</h2>

        <div className="mt-2 text-sm text-gray-400">
          <p>
            <span>
              <a
                href={`mailto:${formData.email ? formData.email : "spencernova@gmail.com"}`}
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.email ? formData.email : "spencernova@gmail.com"}
              </a>
            </span> | <span>{formData.phoneNumber ? formData.phoneNumber : "100-555-5555"}</span>

            | 
            <span>
              {formData.city || formData.state || formData.pincode
                ? `${formData.city}${formData.city ? ", " : ""}${formData.state}${formData.state ? ", " : ""}${formData.pincode}`
                : "Portland, OR, 97201"}
            </span>
             |

              <span>
              <a
                href={formData.linkedin ? formData.linkedin : "https://linkedin.com/in/spencernova"}
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.linkedin
                  ? formData.linkedin.replace(/^https?:\/\//, "")
                  : "linkedin.com/in/spencernova"}
              </a>
            </span>
            
             <span>
              <a
                href={formData.github ? formData.github : "https://github.com/in/spencernova"}
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.github
                  ? formData.github.replace(/^https?:\/\//, "")
                  : "github.com/in/spencernova"}
              </a>
            </span>

            <span className="text-gray-600 mx-[2px]">|</span>
            <span>
              <a
                href={formData.otherLink ? formData.otherLink : "https://portfolio.spencernova.com"}
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.otherLink
                  ? formData.otherLink.replace(/^https?:\/\//, "")
                  : "portfolio.spencernova.com"}
              </a>
            </span>
            <span>
              {formData.figma  && (
        <p>
     Figma:<a href={formData.figma || '#'} className="underline text-white-700" target="_blank" rel="noopener noreferrer">{formData.figma || 'figma.com/yourusername'}</a>
</p>
      )}
            </span>
             
             </p>
        </div>

      </header>

 <h3 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-2 text-purple-400">Profile Summary</h3>
      <section className="mb-8">
        <p className="text-black">
            {summary
              ? summary
              : `Dedicated Registered Nurse with over 8 years of experience in
            emergency and maternity care, specializing in patient triage and
            critical care coordination. Proficient in electronic health records
            and interdisciplinary collaboration, enhancing patient outcomes by
            15% through streamlined processes. Committed to leveraging
            leadership and communication skills to deliver high-quality care in
            dynamic healthcare settings.`}
        </p>
      </section>

{/* Skills */}
   <h3 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-2 text-purple-400" >Skills</h3>
      {skills && (
        <section className="mb-4">
       
          <ul className="flex flex-wrap gap-3 text-sm text-gray-200 mb-2">
             <li className="bg-purple-700 px-3 py-1 rounded-full">Technical Skills</li>
            {skills.technical.map((skill, idx) => (
              <li key={idx} className="bg-purple-700 px-3 py-1 rounded-full">{skill ||"Technical Skills"}</li>
            ))}
            
          </ul>
          <ul className="flex flex-wrap gap-3 text-sm text-gray-200 mb-2">
             <li className="bg-purple-700 px-3 py-1 rounded-full">Soft Skills</li>
            {skills.soft.map((skill, idx) => (
              <li key={idx} className="bg-purple-700 px-3 py-1 rounded-full">{skill}</li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-3 text-sm text-gray-200">
            {skills.related && (
              <li className="bg-purple-700 px-3 py-1 rounded-full">{skills.related}</li>
            )}
          </ul>
        </section>
      )}

{/* Projects */}
 <h3 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-2 text-purple-400">Projects</h3>
       {projects && (
        <section className="mb-8">
         
          {projects.map((project, idx) => (
            <div key={idx} className="mb-4">
              <h4 className="text-lg font-bold text-blue-400">
                <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name || "Project Name"}</a>
              </h4>
              <p className="text-black">{project.description || "A short description of the project."}</p>
              <p className="text-black"> Technologies: {project.technologies?project.technologies:"Technologies Used"}</p>
            </div>
          ))}
        </section>
      )}

 {/* Education */}
       <h3 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-2 text-purple-400">Education</h3>
      {education.length > 0 && (
        <section className="mb-8">
         
          {education.map((edu, idx) => (
            <div key={idx} className="mb-3">
              <h4 className="text-lg font-bold text-black">{edu.collegeName || "University Name"}</h4>
              <p className="text-sm text-black italic">{edu.degree || "Degree"} | {edu.startDate || "2020"}- {edu.endDate || "2024"}</p>
            <p className="text-sm text-black italic">Stream: {edu.stream || 'Electronics'}</p>
            <p className="text-sm text-black italic">CGPA: {edu.cgpa || '7.85'}</p>
            </div>
          ))}
        </section>
      )}


{/* Work Experience */}
<h3 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-2 text-purple-400">Experience</h3>
      {workExperience.length > 0 && (
        <section className="mb-8">
          
          {workExperience.map((exp, idx) => (
            <div key={idx} className="mb-4">
              <h4 className="text-lg font-bold text-black">{exp.jobTitle || "Role Title"} — {exp.companyName || "Company"}</h4>
              <p className="text-sm text-black italic">{exp.startDate || "Jan 2020"}</p>
              <p className="text-sm text-black italic">{exp.endDate || " Present"}</p>
              <p className="text-black">{exp.responsibilities || "Worked on amazing projects."}</p>
            </div>
          ))}
        </section>
      )}

     



        {/* Certifications */}
        <h3 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-2 text-purple-400">Certifications</h3>
     <section>
       
     {certificates.map((cert, idx) => (
  <div key={idx} className="text-[12px] m-0 flex justify-between">
    <div>
      <ul className="list-disc pl-[20px] m-0">
        <li className="text-sm text-black italic">
          {cert.name?cert.name:"Certification Name"} - {cert.organization? cert.organization: "Organization"}
          <br />
          {cert.link && (
            <a href={cert.link} className="text-[#0000EE] underline" target="_blank" rel="noopener noreferrer">
              {cert.link}
            </a>
          )}
        </li>
      </ul>
    </div>
    <div className="text-right">
      Issued: {cert.issueDate? cert.issueDate: "Issued date"}
      <br />
      {cert.expiryDate ? `Expiry: ${cert.expiryDate}` : "No Expiry"}
    </div>
  </div>
))}

     </section>


{/* {Additional} */}
 <h3 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-2 text-purple-400">Additional Information</h3>
       <section>
       
      <div className="text-[12px] m-0 flex justify-between">
  <div>
    <span className="text-lg font-bold text-black">Languages</span>
    <ul className="list-disc pl-[20px] m-0 mt-[2px]">
      {additional.languages.map((lang, idx) => (
        <li className="text-sm text-black italic" key={idx}>
          {lang.name || 'English'} {lang.proficiency && `(${lang.proficiency})`}
        </li>
      ))}
    </ul>
    <span className="text-lg font-bold text-black">Hobbies & Interests</span>
    <ul className="list-disc pl-[20px] m-0 mt-[2px]">
      <li className="text-sm text-black italic">{additional.hobbies || 'Sports'}</li>
    </ul>
    <span className="text-lg font-bold text-black">Achievements & Awards</span>
    <ul className="list-disc pl-[20px] m-0 mt-[2px]">
      {additional.achievements.map((ach, idx) => (
        <li className="text-sm text-black italic" key={idx}>
          {ach.name}
          {ach.organization && <> - {ach.organization}</>}
          <br />
          {ach.description}
        </li>
      ))}
    </ul>
  </div>
</div>


      </section>
    </div>


  );
};

export default RESUME_ExpAndFresher_14;
