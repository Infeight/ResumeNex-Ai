import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/commonComponents/Footer";
import Navbar from "./components/commonComponents/Navbar";
import SignIn from "./Pages/SignIn";
import UserDashboard from "./Pages/UserDashboard";
import TemplatesPage from "./Pages/TemplatesPage";
import CoverLetterTemplates from "./components/CoverLetterFolder/CoverLetterTemplates";
import StepsCoverLetter from "./components/CoverLetterFolder/StepsCoverLetter";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resumes_templates" element={<TemplatesPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route
          path="/cover_letter_templates"
          element={<CoverLetterTemplates />}
        />
        <Route
          path="/cover_letter_templates/steps/:templateId"
          element={<StepsCoverLetter />}
        />
        <Route path="*" element={<h1>404 - Not Found</h1>} />{" "}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
