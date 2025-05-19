import React from "react";

// Resume component imports
import RESUME_1 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_1";
import RESUME_2 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_2";
import RESUME_3 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_3";
import RESUME_4 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_4";
import RESUME_5 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_5";
import RESUME_6 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_6";
import RESUME_7 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_7";
import RESUME_8 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_8";
import RESUME_9 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_9";
import RESUME_10 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_10";
import RESUME_11 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_11";
import RESUME_12 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_12";
import RESUME_13 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_13";
import RESUME_14 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_14";
import RESUME_15 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_15";
import RESUME_16 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_16";
import RESUME_17 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_17";
import RESUME_18 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_18";
import RESUME_19 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_19";
import RESUME_20 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_20";
import RESUME_21 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_21";
import RESUME_22 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_22";
import RESUME_23 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_23";
import RESUME_24 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_24";
import RESUME_25 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_25";
import RESUME_26 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_26";
import RESUME_27 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_27";
import RESUME_28 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_28";
import RESUME_29 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_29";
import RESUME_30 from "../components/A1_ResumeTemplates/ExpResumes/RESUME_ExpAndFresher_30";

// Divider Component
const Divider = ({ number }) => (
  <div className="w-full flex items-center justify-center p-5 gap-5">
    <span className="border-t w-full"></span>
    <span>{number}</span>
    <span className="border-t w-full"></span>
  </div>
);

// Array of all resume components (outside the component for clarity)
const resumeComponents = [
  RESUME_1,
  RESUME_2,
  RESUME_3,
  RESUME_4,
  RESUME_5,
  RESUME_6,
  RESUME_7,
  RESUME_8,
  RESUME_9,
  RESUME_10,
  RESUME_11,
  RESUME_12,
  RESUME_13,
  RESUME_14,
  RESUME_15,
  RESUME_16,
  RESUME_17,
  RESUME_18,
  RESUME_19,
  RESUME_20,
  RESUME_21,
  RESUME_22,
  RESUME_23,
  RESUME_24,
  RESUME_25,
  RESUME_26,
  RESUME_27,
  RESUME_28,
  RESUME_29,
  RESUME_30,
];

// Main Component
const SeeTemplates = () => (
  <>
    {resumeComponents.map((Resume, idx) => (
      <>
        <Divider number={idx + 1} />
        <Resume />
      </>
    ))}
  </>
);

export default SeeTemplates;
