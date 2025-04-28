// src/components/Resume4.js
import React from "react";

const Resume4 = () => {
  return (
    <div className="font-['Arial',sans-serif] w-[794px] mx-auto my-[35px] p-5 box-border leading-[1.4] bg-[#f8fafc] text-[#3d3d3d] overflow-x-hidden">
      {/* Header */}
      <div className="bg-[#dbeafe] text-[#1e40af] p-[15px] text-left border-b-2 border-[#93c5fd]">
        <h1 className="text-[26px] m-0 tracking-[1px]">Sophia Nguyen</h1>
        <div className="text-[12px] mt-[5px] text-[#1e40af]">
          <p>
            <a
              href="mailto:sophia.nguyen@email.com"
              className="text-[#1e40af] no-underline hover:underline"
            >
              sophia.nguyen@email.com
            </a>{" "}
            | +1 312-555-0444 | Chicago, IL |{" "}
            <a
              href="https://linkedin.com/in/sophianguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e40af] no-underline hover:underline"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/sophianguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e40af] no-underline hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="m-[8px_0] p-[8px] bg-[#f9fafb]">
        <div className="text-[20px] font-bold text-[#1e40af] p-[3px_0] mb-[5px]">
          Summary
        </div>
        <p className="text-[12px] m-[3px_0] text-left">
          Frontend development enthusiast skilled in React, JavaScript, and
          UI/UX, seeking a Frontend Developer role to build visually stunning
          interfaces.
        </p>
      </div>

      {/* Skills */}
      <div className="m-[8px_0] p-[8px] bg-[#eff6ff]">
        <div className="text-[20px] font-bold text-[#1e40af] p-[3px_0] mb-[5px]">
          Skills
        </div>
        <ul className="text-[12px] m-[3px_0] pl-[15px] text-left">
          <li>Languages: JavaScript, HTML, CSS, React</li>
          <li>Tools: Git, Figma, Webpack</li>
          <li>
            Competencies: Frontend Development, UI/UX, Responsive Design, Agile
          </li>
        </ul>
      </div>

      {/* Work Experience */}
      <div className="m-[8px_0] p-[8px] bg-[#f9fafb]">
        <div className="text-[20px] font-bold text-[#1e40af] p-[3px_0] mb-[5px]">
          Work Experience
        </div>
        <p className="experience-line flex justify-between text-[14px] m-[3px_0] text-left">
          <strong>Frontend Intern, WebFlow Co.</strong>
          <span>Jan 2024 – Jun 2024</span>
        </p>
        <ul className="text-[12px] m-[3px_0] pl-[15px] text-left">
          <li>
            Developed responsive UIs with React and CSS for a SaaS platform.
          </li>
          <li>
            Collaborated with designers in Figma, improving load times by 15%.
          </li>
        </ul>
      </div>

      {/* Projects */}
      <div className="m-[8px_0] p-[8px] bg-[#eff6ff]">
        <div className="text-[20px] font-bold text-[#1e40af] p-[3px_0] mb-[5px]">
          Projects
        </div>
        <p className="project-line flex justify-between text-[14px] m-[3px_0] text-left">
          <strong>Portfolio Site, Personal Project</strong>
          <span>Mar 2024 – May 2024</span>
        </p>
        <ul className="text-[12px] m-[3px_0] pl-[15px] text-left">
          <li>Built a React-based portfolio with custom CSS animations.</li>
          <li>Optimized for mobile using responsive design principles.</li>
        </ul>
        <p className="project-line flex justify-between text-[14px] m-[3px_0] text-left">
          <strong>Weather App, Course Project</strong>
          <span>Oct 2023 – Dec 2023</span>
        </p>
        <ul className="text-[12px] m-[3px_0] pl-[15px] text-left">
          <li>Created a JavaScript app with API integration and dynamic UI.</li>
          <li>Styled with Tailwind CSS for a modern look.</li>
        </ul>
      </div>

      {/* Education */}
      <div className="m-[8px_0] p-[8px] bg-[#f9fafb]">
        <div className="text-[20px] font-bold text-[#1e40af] p-[3px_0] mb-[5px]">
          Education
        </div>
        <p className="education-line flex justify-between text-[14px] m-[3px_0] text-left">
          <strong>University of Illinois, Chicago, IL</strong>
          <span>Expected May 2026</span>
        </p>
        <div className="education-details flex justify-between text-[12px] text-left">
          <span>B.S. in Computer Science</span>
          <span>CGPA: 8.5/10</span>
        </div>
      </div>

      {/* Hobbies */}
      <div className="m-[8px_0] p-[8px] bg-[#eff6ff]">
        <div className="text-[20px] font-bold text-[#1e40af] p-[3px_0] mb-[5px]">
          Hobbies
        </div>
        <ul className="text-[12px] m-[3px_0] pl-[15px] text-left">
          <li>UI prototyping</li>
          <li>Sketching</li>
        </ul>
      </div>

      {/* Languages */}
      <div className="m-[8px_0] p-[8px] bg-[#f9fafb]">
        <div className="text-[20px] font-bold text-[#1e40af] p-[3px_0] mb-[5px]">
          Languages
        </div>
        <ul className="text-[12px] m-[3px_0] pl-[15px] text-left">
          <li>English (Fluent)</li>
          <li>Vietnamese (Native)</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume4;
