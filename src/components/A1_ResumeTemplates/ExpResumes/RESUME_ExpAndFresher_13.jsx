// src/components/RESUME_ExpAndFresher_13.js
import React from "react";

const RESUME_ExpAndFresher_13 = () => {
  return (
    <div className="font-['Roboto',sans-serif] m-0  bg-white text-[#333] w-[794px] mx-auto my-[20px] p-5 text-[10pt] leading-[1.4]">
      {/* Personal Info */}
      <h1 className="text-[16pt] font-bold mb-[4px] uppercase tracking-[0.5px]">
        Graham Maddox
      </h1>
      <div className="text-[9pt] mb-[12px]">
        Boston, MA 02108 • 0123 000 0000 • graham.maddox@email.com •{" "}
        <a
          href="linkedin.com/in/grahammaddox"
          className="text-[#333] no-underline hover:underline"
        >
          linkedin.com/in/grahammaddox
        </a>{" "}
        •{" "}
        <a
          href="github.com/grahammaddox"
          className="text-[#333] no-underline hover:underline"
        >
          github.com/grahammaddox
        </a>{" "}
        •{" "}
        <a
          href="grahammaddox.dev"
          className="text-[#333] no-underline hover:underline"
        >
          grahammaddox.dev
        </a>{" "}
        •{" "}
        <a
          href="figma.com/@grahammaddox"
          className="text-[#333] no-underline hover:underline"
        >
          figma.com/@grahammaddox
        </a>{" "}
        •{" "}
        <a
          href="leetcode.com/grahammaddox"
          className="text-[#333] no-underline hover:underline"
        >
          leetcode.com/grahammaddox
        </a>
      </div>

      {/* Profile Summary */}
      <h2 className="text-[12pt] font-bold mt-[14px] mb-[6px] uppercase border-b border-[#333] pb-[2px]">
        Professional Profile
      </h2>
      <p className="text-[9.5pt] mb-[10px]">
        Dedicated Web Developer with a Bachelor’s in Computer Science from
        Boston University. Skilled in building responsive web applications using
        HTML, CSS, JavaScript, and React, with experience in full-stack
        development. Successfully optimized load times by 30% on a portfolio
        project, enhancing user experience. Passionate about creating intuitive
        interfaces and collaborating on innovative solutions.
      </p>

      {/* Work Experience */}
      <h2 className="text-[12pt] font-bold mt-[14px] mb-[6px] uppercase border-b border-[#333] pb-[2px]">
        Work Experience
      </h2>
      <div className="mb-[10px]">
        <div className="flex justify-between mb-[4px]">
          <h3 className="text-[10.5pt] font-bold mt-[10px] mb-[4px]">
            Junior Web Developer
          </h3>
          <div className="text-[9.5pt] italic">Jun 2022 - Present</div>
        </div>
        <div className="text-[9.5pt] font-bold">TechCorp (Boston, MA)</div>
        <ul className="mt-[4px] mb-[10px] pl-[18px] text-[9.5pt] space-y-[3px]">
          <li>Developing responsive web interfaces using React.</li>
          <li>Coordinating with designers to implement UI/UX improvements.</li>
          <li>Reducing page load times by 20% through optimization.</li>
        </ul>
      </div>
      <div className="mb-[10px]">
        <div className="flex justify-between mb-[4px]">
          <h3 className="text-[10.5pt] font-bold mt-[10px] mb-[4px]">
            Web Development Intern
          </h3>
          <div className="text-[9.5pt] italic">Jan 2021 - May 2021</div>
        </div>
        <div className="text-[9.5pt] font-bold">
          Innovate Solutions (Boston, MA)
        </div>
        <ul className="mt-[4px] mb-[10px] pl-[18px] text-[9.5pt] space-y-[3px]">
          <li>Assisted in building static websites with HTML/CSS.</li>
          <li>Updated legacy code to improve accessibility.</li>
          <li>Collaborated on a team project to revamp client portal.</li>
        </ul>
      </div>

      {/* Education */}
      <h2 className="text-[12pt] font-bold mt-[14px] mb-[6px] uppercase border-b border-[#333] pb-[2px]">
        Education
      </h2>
      <div className="mb-[6px]">
        <div className="flex justify-between mb-[2px]">
          <div className="text-[9.5pt] font-medium">
            Bachelor’s, Computer Science
          </div>
          <div className="text-[9.5pt] italic">Sep 2018 - May 2022</div>
        </div>
        <div className="flex justify-between text-[8.5pt] text-[#555]">
          <div>Boston University, Boston, MA</div>
          <div className="italic">CGPA: 3.85</div>
        </div>
      </div>

      {/* Projects */}
      <h2 className="text-[12pt] font-bold mt-[14px] mb-[6px] uppercase border-b border-[#333] pb-[2px]">
        Projects
      </h2>
      <div className="mb-[10px]">
        <h3 className="text-[10.5pt] font-bold mt-[10px] mb-[4px]">
          Portfolio Website
        </h3>
        <div className="text-[9.5pt] mb-[4px]">
          Technologies: HTML, CSS, JavaScript •{" "}
          <a
            href="github.com/grahammaddox/portfolio"
            className="text-[#333] no-underline hover:underline"
          >
            github.com/grahammaddox/portfolio
          </a>
        </div>
        <ul className="mt-[4px] mb-[10px] pl-[18px] text-[9.5pt] space-y-[3px]">
          <li>Designed a responsive portfolio site with clean UI.</li>
          <li>Optimized load time by 30% using lazy loading.</li>
          <li>Integrated contact form with backend API.</li>
        </ul>
      </div>
      <div className="mb-[10px]">
        <h3 className="text-[10.5pt] font-bold mt-[10px] mb-[4px]">
          E-Commerce Platform
        </h3>
        <div className="text-[9.5pt] mb-[4px]">
          Technologies: React, Node.js •{" "}
          <a
            href="github.com/grahammaddox/ecommerce"
            className="text-[#333] no-underline hover:underline"
          >
            github.com/grahammaddox/ecommerce
          </a>
        </div>
        <ul className="mt-[4px] mb-[10px] pl-[18px] text-[9.5pt] space-y-[3px]">
          <li>Built a full-stack e-commerce app with payment integration.</li>
          <li>Reduced checkout errors by 25% with form validation.</li>
          <li>Deployed on Heroku for public access.</li>
        </ul>
      </div>

      {/* Certifications */}
      <h2 className="text-[12pt] font-bold mt-[14px] mb-[6px] uppercase border-b border-[#333] pb-[2px]">
        Certifications
      </h2>
      <div className="mb-[6px]">
        <div className="flex justify-between">
          <div className="text-[9.5pt]">
            React Developer Certification - Coursera
          </div>
          <div className="text-[9.5pt] italic">Issued: Oct 2022</div>
        </div>
        <div className="text-[9.5pt]">
          <a
            href="coursera.org/verify/react-cert"
            className="text-[#333] no-underline hover:underline"
          >
            coursera.org/verify/react-cert
          </a>
        </div>
      </div>
      <div className="mb-[6px]">
        <div className="flex justify-between">
          <div className="text-[9.5pt]">
            JavaScript Algorithms - freeCodeCamp
          </div>
          <div className="text-[9.5pt] italic">Issued: Jul 2021</div>
        </div>
        <div className="text-[9.5pt]">
          <a
            href="freecodecamp.org/cert/javascript"
            className="text-[#333] no-underline hover:underline"
          >
            freecodecamp.org/cert/javascript
          </a>
        </div>
      </div>

      {/* Skills */}
      <h2 className="text-[12pt] font-bold mt-[14px] mb-[6px] uppercase border-b border-[#333] pb-[2px]">
        Skills
      </h2>
      <div className="text-[9.5pt] mt-[4px] mb-[10px]">
        <div>
          <span className="font-medium">Technical Skills:</span> HTML, CSS,
          JavaScript, React, Node.js, Git
        </div>
        <div>
          <span className="font-medium">Soft Skills:</span> Teamwork,
          Problem-Solving, Communication
        </div>
      </div>

      {/* Languages */}
      <h2 className="text-[12pt] font-bold mt-[14px] mb-[6px] uppercase border-b border-[#333] pb-[2px]">
        Languages
      </h2>
      <div className="text-[9.5pt] mb-[10px]">
        <div>English (Native)</div>
        <div>Spanish (Intermediate)</div>
      </div>

      {/* Hobbies */}
      <h2 className="text-[12pt] font-bold mt-[14px] mb-[6px] uppercase border-b border-[#333] pb-[2px]">
        Hobbies & Interests
      </h2>
      <div className="text-[9.5pt] mb-[10px]">Coding, Hiking, Photography</div>

      {/* Achievements */}
      <h2 className="text-[12pt] font-bold mt-[14px] mb-[6px] uppercase border-b border-[#333] pb-[2px]">
        Achievements & Awards
      </h2>
      <div className="mb-[6px]">
        <div className="text-[9.5pt] font-bold">Hackathon Winner</div>
        <div className="text-[9.5pt]">Boston CodeFest</div>
        <div className="text-[9.5pt]">
          Won 1st place for best web app in 2021.
        </div>
      </div>
      <div className="mb-[6px]">
        <div className="text-[9.5pt] font-bold">Dean’s List</div>
        <div className="text-[9.5pt]">Boston University</div>
        <div className="text-[9.5pt]">
          Recognized for academic excellence in 2020-2022.
        </div>
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_13;
