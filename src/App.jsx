import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/commonComponents/Loading";
import JobSpecificResume from "./Pages/JobSpecificResume";
import JobSpecificTemplates from "./components/JobSpecific/JobSpecificTemplates";
import StepsOfJS from "./components/JobSpecific/StepsOfJS";
import LinkedInOptemization from "./Pages/LinkedInOptemization";
import Dashboard from "./Pages/Dashboard";

// Lazy-loaded components
const Navbar = lazy(() => import("./components/commonComponents/Navbar"));
const Footer = lazy(() => import("./components/commonComponents/Footer"));
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
const UserDashboard = lazy(() => import("./Pages/UserDashboard"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          {/* =========== home =========== */}
          <Route path="/" element={<Home />} />

          {/* =========== tool 1 - Ai Resume =========== */}
          <Route path="/resumes_templates" element={<ResumeTemplatedPage />} />

          {/* =========== tool 2 - Cover Letter =========== */}
          <Route
            path="/cover_letter_templates"
            element={<CoverLetterTemplates />}
          />
          <Route
            path="/cover_letter_templates/steps/:templateId"
            element={<StepsCoverLetter />}
          />
          <Route
            path="/cover_letter_templates/steps/:templateId/final-download-page"
            element={<FinalPageCL />}
          />

          {/* =========== tool 3 - Resume Optimization =========== */}
          <Route path="/resume_optimization" element={<ResumeOptimization />} />
          <Route
            path="/resume_optimization/final-download-page"
            element={<FinalPageOR />}
          />

          {/* =========== tool 4 - Resume Optimization =========== */}
          <Route path="/job_specific_resume" element={<JobSpecificResume />} />

          <Route
            path="/job_specific_resume/templates"
            element={<JobSpecificTemplates />}
          />

          <Route
            path="/job_specific_resume/templates/:templateIdOfJS/steps"
            element={<StepsOfJS />}
          />

          {/* =========== tool 4 - Resume Optimization =========== */}
          <Route
            path="/linkedIn_optimization"
            element={<LinkedInOptemization />}
          />

          {/* =========== Dashboard =========== */}
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
