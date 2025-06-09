import React from "react";
import { useResume } from "../../AIResume/FormSteps/resumecontext";


const RESUME_ExpAndFresher_1 = () => {

   const { formData, education, projects, workExperience, certificates, skills, summary, additional } = useResume();

  return (
    <div
      className="font-sans text-black bg-white"
      style={{ width: "794px", margin: "0 auto", padding: "20px" }}
    >
      {/* Header */}
    <h1 className="text-[26px] font-bold text-center m-0">
  { formData.firstName || formData.middleName || formData.lastName
      ? `${formData.firstName ? formData.firstName : ""}${formData.middleName ? " " + formData.middleName : ""}${formData.lastName ? " " + formData.lastName : ""}`.trim()
      : "Your Name"}
</h1>
      <div className="text-[12px] text-center mb-[10px]">
       <p>
  {formData.city? formData.city: "City"}, {formData.state ? formData.state: "State"}, {formData.pincode? formData.pincode: "Pincode"} <br />
  Email: {formData.email? formData.email: "Email"} | Phone: {formData.phoneNumber? formData.phoneNumber: "phone Number"} <br />
  {formData.linkedin && (
    <>
      <a href={formData.linkedin} className="text-[#0000EE] underline" target="_blank" rel="noopener noreferrer">
        {formData.linkedin? formData.linkedin: "Linked In"}
      </a>{" | "}
    </>
  )}
  {formData.github && (
    <>
      <a href={formData.github} className="text-[#0000EE] underline" target="_blank" rel="noopener noreferrer">
        {formData.github? formData.github:"Git hub"}
      </a>{" | "}
    </>
  )}
  {formData.figma && (
    <>
      <a href={formData.figma} className="text-[#0000EE] underline" target="_blank" rel="noopener noreferrer">
        {formData.figma? formData.figma: "Figma"}
      </a>{" | "}
    </>
  )}
  {formData.otherLink && (
    <a href={formData.otherLink} className="text-[#0000EE] underline" target="_blank" rel="noopener noreferrer">
      {formData.otherLink}
    </a>
  )}
</p>
      </div>
      <hr className="border-t border-black my-[4px]" />

      {/* Profile Summary */}
      <section>
        <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">
          Profile Summary
        </h2>
       <p className="text-[12px] m-0">{summary?summary:"Summary"}</p>
        <hr className="border-t border-black my-[4px]" />
      </section>


        {/* Skills */}
      <section>
        <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">
          Skills
        </h2>
        <div className="text-[12px] m-0 flex justify-between">
  <div>
    <span className="font-bold">Technical Skills</span>
    <ul className="list-disc pl-[20px] m-0 mt-[2px]">
      {skills.technical.map((skill, idx) => <li key={idx}>{skill}</li>)}
    </ul>
    <span className="font-bold block mt-[5px]">Soft Skills</span>
    <ul className="list-disc pl-[20px] m-0 mt-[2px]">
      {skills.soft.map((skill, idx) => <li key={idx}>{skill}</li>)}
    </ul>
    {skills.related && (
      <>
        <span className="font-bold block mt-[5px]">Other Skills</span>
        <ul className="list-disc pl-[20px] m-0 mt-[2px]">
          <li>{skills.related}</li>
        </ul>
      </>
    )}
  </div>
</div>

      </section>


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




      {/* Education */}

 <section>
   <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">
          Education
        </h2>

     {education.map((edu, idx) => (
  <div key={idx} className="text-[12px] m-0 flex justify-between">
    <div>
      <span className="font-bold">{edu.collegeName? edu.collegeName:"College Name"}</span>
      <br />
      {edu.degree? edu.degree: "Degree"}, Stream: {edu.stream ? edu.stream :"Stream"}
      <br />
      Location: {edu.location? edu.location:"Location"}
    </div>
    <div className="text-right">
      {edu.startDate ?edu.startDate: "Start date"} - {edu.endDate ? edu.endDate:"End date"}
      <br />
      CGPA: {edu.cgpa? edu.cgpa:"cgpa"}
    </div>
  </div>
))}
 </section>


    
      {/* Work Experience */}
    <section>
         <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">
          Work Experience
        </h2>
      {workExperience.map((exp, idx) => (
  <div key={idx} className="mb-[10px] flex justify-between">
    <div>
      <span className="font-bold">{exp.jobTitle ? exp.jobTitle:"Job Title"}</span>
      <br />
      {exp.companyName? exp.companyName: "Company Name"}
      <ul className="list-disc pl-[20px] m-0 mt-[2px]">
        {exp.responsibilities && exp.responsibilities? exp.responsibilities.split('\n').map((line, i) => (
          <li key={i}>{line}</li>
        )):"Responsibilities"}
      </ul>
    </div>
    <div className="text-right">
      {exp.startDate? exp.startDate:"Start date"} - {exp.endDate? exp.endDate: "End date"}
    </div>
  </div>
))}
    </section>


      {/* Certifications */}
     <section>
        <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">
          Certifications
        </h2>
     {certificates.map((cert, idx) => (
  <div key={idx} className="text-[12px] m-0 flex justify-between">
    <div>
      <ul className="list-disc pl-[20px] m-0">
        <li>
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

    
      {/* Additional Sections */}
      <section>
        <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">
          Additional Information
        </h2>
      <div className="text-[12px] m-0 flex justify-between">
  <div>
    <span className="font-bold">Languages</span>
    <ul className="list-disc pl-[20px] m-0 mt-[2px]">
      {additional.languages.map((lang, idx) => (
        <li key={idx}>
          {lang.name} {lang.proficiency && `(${lang.proficiency})`}
        </li>
      ))}
    </ul>
    <span className="font-bold block mt-[5px]">Hobbies & Interests</span>
    <ul className="list-disc pl-[20px] m-0 mt-[2px]">
      <li>{additional.hobbies}</li>
    </ul>
    <span className="font-bold block mt-[5px]">Achievements & Awards</span>
    <ul className="list-disc pl-[20px] m-0 mt-[2px]">
      {additional.achievements.map((ach, idx) => (
        <li key={idx}>
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

export default RESUME_ExpAndFresher_1;
