import React, { createContext, useContext, useState } from "react";

const LinkedInContext = createContext();


export function LinkedInProvider({ children }) {

 const [fullName, setFullName] = useState("");
   const [currentRole, setCurrentRole] = useState("");
   const [isStudying, setIsStudying] = useState(false);
   const [stream, setStream] = useState("");
   const [institution, setInstitution] = useState("");
   const [currentYear, setCurrentYear] = useState("");
   const [gradYear, setGradYear] = useState("");
   const [industry, setIndustry] = useState("");
   const [location, setLocation] = useState("");
   const [experience, setExperience] = useState("");
   const [images, setImages] = useState([null, null, null, null]); 

     const [educationList, setEducationList] = useState([
       {
         college: "",
         degree: "",
         stream: "",
         startYear: "",
         endYear: "",
       },
     ]);
  
     const [certifications, setCertifications] = useState([
       {
         name: "",
         provider: "",
         link: "",
       },
     ]);

      const [workExperiences, setWorkExperiences] = useState([
         { title: "", company: "", duration: "", description: "", tools: "" },
       ]);
     
      
       const [projects, setProjects] = useState([
         { title: "", description: "", tools: "", link: "" },
       ]);

       const [technicalSkills, setTechnicalSkills] = useState("");
       
        
         const [softSkills, setSoftSkills] = useState("");
       
        
         const [achievements, setAchievements] = useState([
           { name: "", description: "", year: "" },
         ]);
       
       
         const [selectedGoal, setSelectedGoal] = useState("");
  
 
  const value = {
    fullName, setFullName,
    currentRole, setCurrentRole,
    isStudying, setIsStudying,
    stream, setStream,
    institution, setInstitution,
    currentYear, setCurrentYear,
    gradYear, setGradYear,
    industry, setIndustry,
    location, setLocation,
    experience, setExperience,
    images, setImages,
    educationList, setEducationList,
    certifications, setCertifications,
    workExperiences, setWorkExperiences,
    projects, setProjects,
    technicalSkills, setTechnicalSkills,
    softSkills, setSoftSkills,
    achievements, setAchievements,
    selectedGoal, setSelectedGoal
  };

  return (
    <LinkedInContext.Provider value={value}>
      {children}
    </LinkedInContext.Provider>
  );
}


export function useLinkedIn() {
  return useContext(LinkedInContext);
}
