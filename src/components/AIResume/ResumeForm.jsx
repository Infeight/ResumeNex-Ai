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
    <div className="flex flex-col md:flex-row w-full min-h-screen ">
      {/* Left Form Section */}
      <div className="w-full md:w-2/5 bg-white p-4 sm:p-6 md:p-[30px] shadow-md overflow-y-auto flex flex-col gap-6 no-scrollbar-arrows">
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
            className="bg-indigo-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl hover:bg-indigo-600 w-full font-semibold transition-colors"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Resume Preview Section */}

      {/* work in progress */}
      <div
        className="w-full md:w-3/5 bg-gray-50 sticky top-[66px] overflow-y-hidden "
        style={{ height: "calc(100vh - 66px)" }}
      >
        <ResumePreview />
      </div>
    </div>
  );
}

export default ResumeForm;
