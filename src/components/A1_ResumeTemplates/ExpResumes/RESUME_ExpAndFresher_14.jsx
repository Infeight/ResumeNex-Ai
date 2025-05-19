// src/components/ExpResume14.js
import React from "react";

const RESUME_ExpAndFresher_14 = () => {
  return (
    <div className="font-['Roboto',sans-serif] m-0 p-0 bg-white text-[#333] w-[794px] mx-auto my-[20px] p-[12mm_15mm] text-[10pt] leading-[1.4]">
      {/* Personal Info */}
      <h1 className="text-[14pt] font-bold mb-[4px] uppercase tracking-[0.5px] text-center">
        Adelaide Reeves
      </h1>
      <div className="text-[8.5pt] mb-[12px] uppercase text-center">
        Chicago, IL 60601 • 0123 000 0000 •{" "}
        <a
          href="mailto:adelaide.reeves@email.com"
          className="text-[#333] no-underline hover:underline"
        >
          adelaide.reeves@email.com
        </a>{" "}
        •{" "}
        <a
          href="linkedin.com/in/adelaidereeves"
          className="text-[#333] no-underline hover:underline"
        >
          linkedin.com/in/adelaidereeves
        </a>{" "}
        •{" "}
        <a
          href="github.com/adelaidereeves"
          className="text-[#333] no-underline hover:underline"
        >
          github.com/adelaidereeves
        </a>{" "}
        •{" "}
        <a
          href="adelaidereeves.dev"
          className="text-[#333] no-underline hover:underline"
        >
          adelaidereeves.dev
        </a>{" "}
        •{" "}
        <a
          href="figma.com/@adelaidereeves"
          className="text-[#333] no-underline hover:underline"
        >
          figma.com/@adelaidereeves
        </a>{" "}
        •{" "}
        <a
          href="leetcode.com/adelaidereeves"
          className="text-[#333] no-underline hover:underline"
        >
          leetcode.com/adelaidereeves
        </a>
      </div>

      {/* Profile Summary */}
      <h2 className="text-[10.5pt] font-bold mt-[12px] mb-[6px] uppercase border-b-[1.5px] border-[#333] pb-[2px] text-center">
        Professional Profile
      </h2>
      <p className="text-[9pt] text-center mb-[10px]">
        Passionate Frontend Developer with a Bachelor’s in Computer Science from
        University of Chicago. Proficient in crafting responsive web interfaces
        using React, JavaScript, and CSS, with a focus on user-centric design.
        Led a project that improved user engagement by 25% through optimized UI.
        Adept at collaborating with cross-functional teams to deliver scalable
        solutions.
      </p>

      {/* Work Experience */}
      <h2 className="text-[10.5pt] font-bold mt-[12px] mb-[6px] uppercase border-b-[1.5px] border-[#333] pb-[2px] text-center">
        Work Experience
      </h2>
      <div className="mb-[10px]">
        <div className="flex justify-between items-baseline mb-[2px]">
          <h3 className="text-[9.5pt] font-bold mt-[10px] mb-[2px]">
            Frontend Developer
          </h3>
          <div className="text-[9pt] font-bold">Jun 2022 - Present</div>
        </div>
        <div className="text-[9pt] font-bold mb-[4px]">
          WebFlow Inc., Chicago, IL
        </div>
        <ul className="mt-[4px] mb-[10px] pl-[16px] text-[9pt] space-y-[3px]">
          <li>
            Developing dynamic web applications using React and TypeScript.
          </li>
          <li>Improved site performance by 20% with optimized rendering.</li>
          <li>Collaborated with UX designers to enhance accessibility.</li>
        </ul>
      </div>
      <div className="mb-[10px]">
        <div className="flex justify-between items-baseline mb-[2px]">
          <h3 className="text-[9.5pt] font-bold mt-[10px] mb-[2px]">
            Web Development Intern
          </h3>
          <div className="text-[9pt] font-bold">Jan 2021 - May 2021</div>
        </div>
        <div className="text-[9pt] font-bold mb-[4px]">
          TechBit, Chicago, IL
        </div>
        <ul className="mt-[4px] mb-[10px] pl-[16px] text-[9pt] space-y-[3px]">
          <li>Built responsive landing pages with HTML and CSS.</li>
          <li>Reduced load times by 15% through image optimization.</li>
          <li>Assisted in integrating APIs for dynamic content.</li>
        </ul>
      </div>

      {/* Education */}
      <h2 className="text-[10.5pt] font-bold mt-[12px] mb-[6px] uppercase border-b-[1.5px] border-[#333] pb-[2px] text-center">
        Education
      </h2>
      <div className="mb-[6px]">
        <div className="flex justify-between items-baseline mb-[1px]">
          <div className="text-[9.5pt] font-medium">
            Bachelor’s, Computer Science
          </div>
          <div className="text-[9pt] font-bold">Sep 2018 - May 2022</div>
        </div>
        <div className="flex justify-between text-[9pt] mb-[6px]">
          <div className="italic">University of Chicago, Chicago, IL</div>
          <div className="font-medium">CGPA: 3.90</div>
        </div>
      </div>

      {/* Projects */}
      <h2 className="text-[10.5pt] font-bold mt-[12px] mb-[6px] uppercase border-b-[1.5px] border-[#333] pb-[2px] text-center">
        Projects
      </h2>
      <div className="mb-[10px]">
        <h3 className="text-[9.5pt] font-bold mt-[10px] mb-[2px]">
          Social Media Dashboard
        </h3>
        <div className="text-[9pt] mb-[4px]">
          Technologies: React, Tailwind CSS •{" "}
          <a
            href="github.com/adelaidereeves/dashboard"
            className="text-[#333] no-underline hover:underline"
          >
            github.com/adelaidereeves/dashboard
          </a>
        </div>
        <ul className="mt-[4px] mb-[10px] pl-[16px] text-[9pt] space-y-[3px]">
          <li>Developed a dashboard with real-time analytics.</li>
          <li>Improved user engagement by 25% with intuitive UI.</li>
          <li>Integrated REST APIs for dynamic data updates.</li>
        </ul>
      </div>
      <div className="mb-[10px]">
        <h3 className="text-[9.5pt] font-bold mt-[10px] mb-[2px]">
          Task Tracker App
        </h3>
        <div className="text-[9pt] mb-[4px]">
          Technologies: JavaScript, Firebase •{" "}
          <a
            href="github.com/adelaidereeves/task-tracker"
            className="text-[#333] no-underline hover:underline"
          >
            github.com/adelaidereeves/task-tracker
          </a>
        </div>
        <ul className="mt-[4px] mb-[10px] pl-[16px] text-[9pt] space-y-[3px]">
          <li>Built a task management app with cloud sync.</li>
          <li>Enhanced UX with drag-and-drop functionality.</li>
          <li>Deployed on Firebase for scalable hosting.</li>
        </ul>
      </div>

      {/* Certifications */}
      <h2 className="text-[10.5pt] font-bold mt-[12px] mb-[6px] uppercase border-b-[1.5px] border-[#333] pb-[2px] text-center">
        Certifications
      </h2>
      <div className="mb-[6px]">
        <div className="flex justify-between items-baseline">
          <div className="text-[9pt]">
            Frontend Developer Certification - Udemy
          </div>
          <div className="text-[9pt] font-bold">Issued: Nov 2022</div>
        </div>
        <div className="text-[9pt]">
          <a
            href="udemy.com/certificate/frontend"
            className="text-[#333] no-underline hover:underline"
          >
            udemy.com/certificate/frontend
          </a>
        </div>
      </div>
      <div className="mb-[6px]">
        <div className="flex justify-between items-baseline">
          <div className="text-[9pt]">Responsive Web Design - freeCodeCamp</div>
          <div className="text-[9pt] font-bold">Issued: Aug 2021</div>
        </div>
        <div className="text-[9pt]">
          <a
            href="freecodecamp.org/cert/responsive"
            className="text-[#333] no-underline hover:underline"
          >
            freecodecamp.org/cert/responsive
          </a>
        </div>
      </div>

      {/* Skills */}
      <h2 className="text-[10.5pt] font-bold mt-[12px] mb-[6px] uppercase border-b-[1.5px] border-[#333] pb-[2px] text-center">
        Skills
      </h2>
      <div className="text-[9pt] mt-[4px] mb-[10px]">
        <div>
          <span className="font-medium">Technical Skills:</span> HTML, CSS,
          JavaScript, React, Tailwind CSS, Firebase
        </div>
        <div>
          <span className="font-medium">Soft Skills:</span> Collaboration,
          Creativity, Time Management
        </div>
      </div>

      {/* Languages */}
      <h2 className="text-[10.5pt] font-bold mt-[12px] mb-[6px] uppercase border-b-[1.5px] border-[#333] pb-[2px] text-center">
        Languages
      </h2>
      <div className="text-[9pt] mb-[10px]">
        <div>English (Native)</div>
        <div>French (Basic)</div>
      </div>

      {/* Hobbies */}
      <h2 className="text-[10.5pt] font-bold mt-[12px] mb-[6px] uppercase border-b-[1.5px] border-[#333] pb-[2px] text-center">
        Hobbies & Interests
      </h2>
      <div className="text-[9pt] mb-[10px]">Web Design, Reading, Cycling</div>

      {/* Achievements */}
      <h2 className="text-[10.5pt] font-bold mt-[12px] mb-[6px] uppercase border-b-[1.5px] border-[#333] pb-[2px] text-center">
        Achievements & Awards
      </h2>
      <div className="mb-[6px]">
        <div className="text-[9pt] font-bold">Best UI Design Award</div>
        <div className="text-[9pt]">Chicago Tech Summit</div>
        <div className="text-[9pt]">
          Received for innovative dashboard design in 2022.
        </div>
      </div>
      <div className="mb-[6px]">
        <div className="text-[9pt] font-bold">Academic Excellence</div>
        <div className="text-[9pt]">University of Chicago</div>
        <div className="text-[9pt]">Honored for top 5% GPA in 2021-2022.</div>
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_14;
