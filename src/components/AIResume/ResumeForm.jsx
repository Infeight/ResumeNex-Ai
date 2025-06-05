

import { useState, useMemo, lazy, Suspense,useRef } from "react";
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


// import ReactToPdf from 'react-to-pdf';


function ResumeForm() {

    // const resumeref = useRef();

  const { templateIdOfResume } = useParams();

   const [visible, setVisible] = useState(false);

   const [openDownload, setOpenDownload] = useState(false);

  // Function to toggle
  const toggleVisibility = () => setVisible((v) => !v);

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
<div className="w-full lg:w-2/6 bg-white p-4 sm:p-6 md:p-[30px] shadow-md overflow-y-auto flex flex-col gap-6 no-scrollbar-arrows">

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

          <button
       className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 w-full font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => setOpenDownload(true)}
      >
        Download
      </button>

        </form>
      </div>





 {visible && (
        <div
          className="
            fixed inset-0 z-[48] flex items-center justify-center bg-black bg-opacity-40
            lg:static lg:bg-transparent lg:z-50 lg:inset-auto lg:flex-none
            h-[100vh]
          "
        >
          {/* Close button for overlay (mobile/tablet only) */}
          {/* <button
            className="absolute top-4 right-4 z-[101] bg-white rounded-full p-2 shadow-lg text-xl lg:hidden"
            onClick={() => setVisible(false)}
            aria-label="Close Preview"
          >
            &times;
          </button> */}

          {/* Main Resume Preview */}
          <div
            className="
              w-full max-w-[794px] max-h-[1123px] bg-white rounded-xl shadow-lg border border-gray-200
              overflow-y-auto flex justify-center items-center scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
              h-[100vh] sm:h-[90vh] md:h-[95vh] lg:h-full
              relative
              scale-[1] sm:scale-[0.95] md:scale-[0.98] lg:scale-100
            "
          >
            <div className="w-[794px] h-auto sm:h-auto md:h-auto lg:h-[830px] scale-[0.5] sm:scale-[0.6] md:scale-[0.7] lg:scale-[0.85]">
              <Suspense fallback={<div>Loading Template...</div>}>
                {TemplateComponent ? (
                  <TemplateComponent
                    key={templateIdOfResume}
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
      )}


      {/* Right Resume Preview Section */}
  <div
  className={`
    hidden
    lg:flex
    justify-center items-center bg-gray-100 
    absolute top-[15vw] left-0 right-0 w-full h-auto
    lg:relative lg:w-3/5 lg:h-screen lg:p-6 lg:sticky lg:top-[1vw]
  `}
>


 <div className="w-full max-w-[794px] max-h-[1123px] bg-white rounded-xl shadow-lg border border-gray-200 overflow-y-auto flex justify-center items-center scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 h-[80vh] lg:h-full">

   <div  className="w-[794px] h-auto sm:h-auto md:h-auto lg:h-[830px] scale-[0.5] sm:scale-[0.6] md:scale-[0.7] lg:scale-[0.85]">

      <Suspense fallback={<div>Loading Template...</div>}>
        {TemplateComponent ? (
          <TemplateComponent 
             
            key={templateIdOfResume}
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

{/* show preview button */}

<button

  type="submit"
  className="
    fixed bottom-10 left-1/2 transform -translate-x-1/2 
    w-[35%] max-w-[600px] z-[58] shadow-[0_4px_10px_rgba(0,0,0,0.25)]
    bg-indigo-600 text-white px-6 py-3 rounded-lg 
    hover:bg-indigo-700 font-semibold transition-colors duration-200 
    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
    lg:hidden
  "
  onClick={toggleVisibility}
>
 {visible ? "Hide Preview" : "Show Preview"}
</button>




      {/* Slide-in panel (mobile/tablet only) */}
      <div
        className={`
          fixed top-0 left-0 h-full w-[100%] bg-white z-[100] shadow-2xl transition-transform duration-300 ease-in-out
          ${openDownload ? "translate-x-0" : "-translate-x-full"}
          lg:hidden
        `}
      >
        {/* Close button */}
        <button
          className="absolute z-20 top-3 right-3 text-2xl  rounded-full w-8 h-8 flex items-center justify-center"
          onClick={() => setOpenDownload(false)}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="p-6">
          <RightSectionAtsTempDownload />
        </div>
      </div>

       {/* <ReactToPdf targetRef={resumeref} filename="resume.pdf">
        {({ toPdf }) => (
          <button
            onClick={toPdf}
            className="z-100 mb-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Download as PDF
          </button>
        )}
      </ReactToPdf> */}

      {/* Overlay when panel is open (optional, for dimming background) */}
      {openDownload && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[90] lg:hidden"
          onClick={() => setOpenDownload(false)}
        />
      )}


      {/* Right Action Buttons */}
      <div className="hidden lg:block w-full lg:w-1/5">
  <RightSectionAtsTempDownload />
</div>
    </div>
  );
}

export default ResumeForm;


