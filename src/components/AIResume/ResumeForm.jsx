import { useState } from "react";
import PersonalInfo from "./FormSteps/PersonalInfo";
import Education from "./FormSteps/Education";
import Projects from "./FormSteps/Projects";
import WorkExperience from "./FormSteps/WorkExperience";
import Certificates from "./FormSteps/Certificates";
import Skills from "./FormSteps/Skills";
import ProfileSummary from "./FormSteps/ProfileSummary";
import AdditionalSections from "./FormSteps/AdditionalSections";
import RightSectionAtsTempDownload from "./RightSectionAtsTempDownload";
import RESUME_ExpAndFresher_1 from "../A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_1";

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
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gray-50">
      {/* Left Form Section */}
      <div className="w-full lg:w-2/5 bg-white p-6 lg:p-8 shadow-lg overflow-y-auto max-h-screen flex flex-col gap-6 no-scrollbar">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 w-full font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save Resume
          </button>
        </form>
      </div>

      {/* Resume Preview */}
      <div className="w-full lg:w-2/5 h-screen p-4 lg:p-6 flex justify-center items-center bg-gray-100">
        <div className="w-full h-full max-w-[794px] max-h-[1123px] bg-white rounded-xl shadow-lg border border-gray-200 overflow-y-auto flex justify-center items-center scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="w-[794px] h-[1123px] scale-[0.65] lg:scale-[0.85] transform origin-top">
            <RESUME_ExpAndFresher_1
              formData={formData}
              education={education}
              projects={projects}
              workExperience={workExperience}
              certificates={certificates}
              skills={skills}
              summary={summary}
              additional={additional}
            />
          </div>
        </div>
      </div>

      {/* Right Action Buttons */}
      <div className="w-full lg:w-1/5">
        <RightSectionAtsTempDownload />
      </div>
    </div>
  );
}

export default ResumeForm;
