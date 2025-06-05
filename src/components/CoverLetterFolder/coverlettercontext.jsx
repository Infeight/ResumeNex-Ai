import React, { createContext, useContext, useState } from "react";

const CoverLetterContext = createContext();


export function CoverLetterProvider({ children }) {

  const [fullName, setFullName] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [emailAddress, setEmailAddress] = useState("");
   const [date, setDate] = useState("");

    const [educationList, setEducationList] = useState([
    {
      college: "",
      degree: "",
      stream: "",
      startYear: "",
      endYear: "",
    },
  ]);

  const [company, setCompany] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [showNoticePeriod, setShowNoticePeriod] = useState(false);
  const [noticePeriod, setNoticePeriod] = useState("");


//   const [jobRole, setJobRole] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [whyThisCompany, setWhyThisCompany] = useState("");
    const [skills, setSkills] = useState("");
    const [achievements, setAchievements] = useState("");
    const [certifications, setCertifications] = useState("");
  
    const [hrInputVisible, setHrInputVisible] = useState(false);
    const [hrName, setHrName] = useState("");

    //  const [date, setDate] = useState("");
      const [coverLetterMode, setCoverLetterMode] = useState("Professional");
  
 
  const value = {
    fullName, setFullName,
    phoneNumber, setPhoneNumber,
    emailAddress, setEmailAddress,
    date, setDate,
    educationList, setEducationList,
    company, setCompany,
    jobRole, setJobRole,
    startYear, setStartYear,
    endYear, setEndYear,
    showNoticePeriod, setShowNoticePeriod,
    noticePeriod, setNoticePeriod,
    companyName, setCompanyName,
    companyAddress, setCompanyAddress,
    whyThisCompany, setWhyThisCompany,
    skills, setSkills,
    achievements, setAchievements,
    certifications, setCertifications,
    hrInputVisible, setHrInputVisible,
    hrName, setHrName,
    coverLetterMode, setCoverLetterMode,
  };

  return (
    <CoverLetterContext.Provider value={value}>
      {children}
    </CoverLetterContext.Provider>
  );
}


export function useCoverLetter() {
  return useContext(CoverLetterContext);
}
