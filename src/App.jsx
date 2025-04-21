import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/commonComponents/Footer";
import Navbar from "./components/commonComponents/Navbar";
import UserDashboard from "./Pages/UserDashboard";
import ResumeTemplatedPage from "./Pages/ResumeTemplatedPage";
import StepsCoverLetter from "./components/CoverLetterFolder/StepsCoverLetter";
import CoverLetterTemplates from "./Pages/CoverLetterTemplates";
import FinalPageCL from "./components/CoverLetterFolder/FinalPageCL";
import ResumeOptimization from "./Pages/ResumeOptimization";
import FinalPageOR from "./components/OptimizeResume/FinalPageOR";

const App = () => {
  return (
    <Router>
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

        {/* =========== Dashboard =========== */}
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
