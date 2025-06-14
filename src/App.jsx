import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/commonComponents/Loading";
import ResumeForm from "./components/AIResume/ResumeForm";
import StepsLinkedIn from "./components/LinkedInOptimization/StepsLinkedIn";
import FinalPageOfLO from "./components/LinkedInOptimization/FinalPageOfLO";
import {ResumeProvider} from './components/AIResume/FormSteps/resumecontext'
import { CoverLetterProvider } from "./components/CoverLetterFolder/coverlettercontext";
import { JobSpecificProvider } from "./components/JobSpecific/jobspecificcontext";
import { LinkedInProvider } from "./components/LinkedInOptimization/linkedincontext";
import { UserProvider } from "./components/commonComponents/usercontext";
import SeeTemplates from "./Pages/SeeTemplates";
// Lazy-loaded components for pages
const Home = lazy(() => import("./Pages/Home"));
const ResumeTemplatedPage = lazy(() => import("./Pages/ResumeTemplatedPage"));
const CoverLetterTemplates = lazy(() => import("./Pages/CoverLetterTemplates"));
const StepsCoverLetter = lazy(() =>
  import("./components/CoverLetterFolder/StepsCoverLetter")
);
const FinalPageCL = lazy(() =>
  import("./components/CoverLetterFolder/FinalPageCL")
);
const ResumeOptimization = lazy(() => import("./Pages/ResumeOptimization"));
const FinalPageOR = lazy(() =>
  import("./components/OptimizeResume/FinalPageOR")
);
const JobSpecificResume = lazy(() => import("./Pages/JobSpecificResume"));
const JobSpecificTemplates = lazy(() =>
  import("./components/JobSpecific/JobSpecificTemplates")
);
const StepsOfJS = lazy(() => import("./components/JobSpecific/StepsOfJS"));
const LinkedInOptemization = lazy(() => import("./Pages/LinkedInOptemization"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));

// Shared layout components
const Footer = lazy(() => import("./components/commonComponents/Footer"));
const Navbar = lazy(() =>
  import("./components/commonComponents/Navbar/Navbar")
);

const App = () => {
  return (
    <Router>
      <UserProvider>
      <ResumeProvider>
        <CoverLetterProvider>
          <JobSpecificProvider>
            <LinkedInProvider>
      <Suspense fallback={<Loading />}>
        {/* Lazy-load Navbar */}
        <Navbar />

        <Routes>
          {/* =========== home =========== */}
          <Route path="/" element={<Home />} />
          <Route path="/resumes_templates/steps" element={<ResumeForm />} />

          {/* =========== tool 1 - Ai Resume =========== */}
          <Route path="/resumes_templates" element={<ResumeTemplatedPage />} />
          <Route
            path="/resumes_templates/steps/:templateIdOfResume"
            element={<ResumeForm />}
          />
          

          {/* =========== tool 2 - Cover Letter =========== */}
          <Route
            path="/cover_letter_templates"
            element={<CoverLetterTemplates />}
          />
          <Route
            path="/cover_letter_templates/steps"
            element={<StepsCoverLetter />}
          />
          <Route
            path="/cover_letter_templates/steps/final-download-page"
            element={<FinalPageCL />}
          />

          {/* =========== tool 3 - Resume Optimization =========== */}
          <Route path="/resume_optimization" element={<ResumeOptimization />} />
          <Route
            path="/resume_optimization/final-download-page"
            element={<FinalPageOR />}
          />

          {/* =========== tool 4 - Job Specific Resume =========== */}
          <Route path="/job_specific_resume" element={<JobSpecificResume />} />
          <Route
            path="/job_specific_resume/templates"
            element={<JobSpecificTemplates />}
          />
          <Route
            path="/job_specific_resume/templates/:templateIdOfJS/steps"
            element={<StepsOfJS />}
          />
          {/* =========== tool 5 - LinkedIn Optimization =========== */}
          <Route
            path="/linkedIn_optimization"
            element={<LinkedInOptemization />}
          />
          <Route
            path="/linkedIn_optimization/steps"
            element={<StepsLinkedIn />}
          />
          <Route
            path="/linkedIn_optimization/steps/final_page"
            element={<FinalPageOfLO />}
          />

          {/* =========== Dashboard =========== */}
          <Route path="/dashboard/*" element={<Dashboard />} />

          {/* 404 page */}
          <Route path="*" element={<h1>404 - Not Found</h1>} />
          {/* see templates */}
          <Route path="/seeTemplates" element={<SeeTemplates />} />
        </Routes>

        {/* Lazy-load Footer */}
        <Footer />
      </Suspense>
      </LinkedInProvider>
      </JobSpecificProvider>
      </CoverLetterProvider>
      </ResumeProvider>
      </UserProvider>
    </Router>
  );
};

export default App;
