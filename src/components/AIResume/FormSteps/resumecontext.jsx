import React, { createContext, useContext, useState } from "react";

const ResumeContext = createContext();


export function ResumeProvider({ children }) {

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    jobTitle: "",
    phoneNumber: "",
    city: "",
    state: "",
    pincode: "",
    email: "",
    linkedin: "",
    github: "",
    figma: "",
    otherLink: "",
  });

  const [education, setEducation] = useState([
    { collegeName: "", degree: "", stream: "", cgpa: "", location: "", startDate: "", endDate: "" },
  ]);
  const [projects, setProjects] = useState([
    { name: "", technologies: "", link: "", description: "", startDate: "", endDate: "", summary: "" },
  ]);
  const [workExperience, setWorkExperience] = useState([
    { companyName: "", jobTitle: "", startDate: "", endDate: "", responsibilities: "" },
  ]);
  const [certificates, setCertificates] = useState([
    { name: "", organization: "", issueDate: "", expiryDate: "", link: "" },
  ]);
  const [skills, setSkills] = useState({
    technical: [],
    soft: [],
    related: "",
  });
  const [summary, setSummary] = useState("");
  const [additional, setAdditional] = useState({
    languages: [{ name: "", proficiency: "" }],
    hobbies: "",
    achievements: [{ name: "", organization: "", description: "" }],
  });

 
  const value = {
    formData, setFormData,
    education, setEducation,
    projects, setProjects,
    workExperience, setWorkExperience,
    certificates, setCertificates,
    skills, setSkills,
    summary, setSummary,
    additional, setAdditional
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
}


export function useResume() {
  return useContext(ResumeContext);
}
