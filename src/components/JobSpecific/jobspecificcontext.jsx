import React, { createContext, useContext, useState } from "react";

const JobSpecificContext = createContext();


export function JobSpecificProvider({ children }) {

   const [fullName, setFullName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

   const [educations, setEducations] = useState([
      {
        collegeName: "",
        degree: "",
        stream: "",
        startYear: "",
        endYear: "",
      },
    ]);

    const [companyName, setCompanyName] = useState("");
      const [jobRole, setJobRole] = useState("");
      const [workStartYear, setWorkStartYear] = useState("");
      const [workEndYear, setWorkEndYear] = useState("");


        const [projects, setProjects] = useState([
          {
            projectName: "",
            startYear: "",
            endYear: "",
            techUsed: "",
            aboutProject: "",
          },
        ]);

         const [skills, setSkills] = useState("");
          const [achievements, setAchievements] = useState("");

           const [certifications, setCertifications] = useState([
              {
                certificationName: "",
                startYear: "",
                endYear: "",
                issuedBy: "",
              },
            ]);
          
            // Languages Known
            const [languages, setLanguages] = useState([
              {
                language: "",
                proficiency: "Fluent",
              },
            ]);

            const [hobbies, setHobbies] = useState([{ hobby: "" }]);
             const [achievements1, setAchievements1] = useState([{ achievement: "" }]);
             
              const [resumeMode, setResumeMode] = useState("Professional");

               
  const [jobDescription, setJobDescription] = useState("");


  const value = {
        fullName, setFullName,
        middleName, setMiddleName,
        lastName, setLastName,
        phoneNumber, setPhoneNumber,
        emailAddress, setEmailAddress,
        state, setState,
        city, setCity,
        pincode, setPincode,
      educations, setEducations,
      companyName, setCompanyName,
      jobRole, setJobRole,
      jobDescription, setJobDescription,
      workStartYear, setWorkStartYear,
      workEndYear, setWorkEndYear,
      projects, setProjects,
      skills, setSkills,
      achievements, setAchievements,
      certifications, setCertifications,
      languages, setLanguages,
      hobbies, setHobbies,
      achievements1, setAchievements1,
      resumeMode, setResumeMode,
        // date, setDate, // Uncomment if needed
      };

  return (
    <JobSpecificContext.Provider value={value}>
      {children}
    </JobSpecificContext.Provider>
  );
}


export function useJobSpecific() {
  return useContext(JobSpecificContext);
}
