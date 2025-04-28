import { useState } from "react";
import ResumePreview from "./FormSteps/ResumePreview";

import PersonalInfo from "./FormSteps/PersonalInfo";
import Education from "./FormSteps/Education";
import Projects from "./FormSteps/Projects";
import WorkExperience from "./FormSteps/WorkExperience";
import Certificates from "./FormSteps/Certificates";
import Skills from "./FormSteps/Skills";
import ProfileSummary from "./FormSteps/ProfileSummary";
import AdditionalSections from "./FormSteps/AdditionalSections";

function ResumeForm() {
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
    {
      collegeName: "",
      degree: "",
      stream: "",
      cgpa: "",
      location: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [projects, setProjects] = useState([
    {
      name: "",
      technologies: "",
      link: "",
      description: "",
      startDate: "",
      endDate: "",
      summary: "",
    },
  ]);

  const [workExperience, setWorkExperience] = useState([
    {
      companyName: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
    },
  ]);

  const [certificates, setCertificates] = useState([
    {
      name: "",
      organization: "",
      issueDate: "",
      expiryDate: "",
      link: "",
    },
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      formData,
      education,
      projects,
      workExperience,
      certificates,
      skills,
      summary,
      additional,
    });
  };

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Left Form Section - 40% */}
      <div className="w-[617px] h-full bg-white p-[30px] shadow-md overflow-y-auto flex flex-col gap-[30px] no-scrollbar-arrows">
        <form onSubmit={handleSubmit}>
          <PersonalInfo formData={formData} setFormData={setFormData} />
          <Education education={education} setEducation={setEducation} />
          <Projects projects={projects} setProjects={setProjects} />
          <WorkExperience
            workExperience={workExperience}
            setWorkExperience={setWorkExperience}
          />
          <Certificates
            certificates={certificates}
            setCertificates={setCertificates}
          />
          <Skills skills={skills} setSkills={setSkills} />
          <ProfileSummary summary={summary} setSummary={setSummary} />
          <AdditionalSections
            additional={additional}
            setAdditional={setAdditional}
          />
          <button
            type="submit"
            className="bg-indigo-500 text-white px-6 py-3 rounded-xl hover:bg-indigo-600 w-full"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Resume Preview Section - 60% */}
      <div className="flex-1 h-full overflow-y-auto">
        <ResumePreview />
      </div>
    </div>
  );
}

export default ResumeForm;
