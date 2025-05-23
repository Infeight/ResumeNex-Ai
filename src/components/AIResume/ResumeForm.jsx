import { useState, useMemo, lazy, Suspense } from "react";
import PersonalInfo from "./FormSteps/PersonalInfo";
import Education from "./FormSteps/Education";
import Projects from "./FormSteps/Projects";
import WorkExperience from "./FormSteps/WorkExperience";
import Certificates from "./FormSteps/Certificates";
import Skills from "./FormSteps/Skills";
import ProfileSummary from "./FormSteps/ProfileSummary";
import AdditionalSections from "./FormSteps/AdditionalSections";
import RightSectionAtsTempDownload from "./RightSectionAtsTempDownload";
import { useParams } from "react-router-dom";
import { useResume } from "./FormSteps/resumecontext";


function ResumeForm() {
  const { templateIdOfResume } = useParams();

  // Dynamically import the template based on the URL param
  const TemplateComponent = useMemo(() => {
    if (!templateIdOfResume) return null;
    const searchFolder = templateIdOfResume.includes("ExpAndFresher")
      ? "ExpResumes"
      : "InternResumes";
    return lazy(() =>
      import(
        `../A1_ResumeTemplates/${searchFolder}/${templateIdOfResume}.jsx`
      )
    );
    // eslint-disable-next-line
  }, [templateIdOfResume]);

  const {
    formData,
    setFormData,
    education,
    setEducation,
    projects,
    setProjects,
    workExperience,
    setWorkExperience,
    certificates,
    setCertificates,
    skills,
    setSkills,
    summary,
    setSummary,
    additional,
    setAdditional,
  } = useResume();

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
      <div className="w-full md:w-2/6 bg-white p-4 sm:p-6 md:p-[30px] shadow-md overflow-y-auto flex flex-col gap-6 no-scrollbar-arrows">
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

      {/* Right Resume Preview Section */}
      <div className="w-full lg:w-3/5 h-screen p-4 lg:p-6 flex justify-center items-center bg-gray-100 sticky top-[1vw]">
        <div className="w-full h-full max-w-[794px] max-h-[1123px] bg-white rounded-xl shadow-lg border border-gray-200 overflow-y-auto flex justify-center items-center scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="w-[794px] h-[830px] scale-[0.65] lg:scale-[0.85] ">
            <Suspense fallback={<div>Loading Template...</div>}>
              {TemplateComponent ? (
                <TemplateComponent
                  key={templateIdOfResume} // Ensures remount on template change
                  formData={formData}
                  education={education}
                  projects={projects}
                  workExperience={workExperience}
                  certificates={certificates}
                  skills={skills}
                  summary={summary}
                  additional={additional}
                />
              ) : (
                "No component"
              )}
            </Suspense>
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
