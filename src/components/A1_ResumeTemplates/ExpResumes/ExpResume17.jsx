// src/components/ExpResume17.js
import React from "react";

const ExpResume17 = () => {
  return (
    <div className="font-['Arial',sans-serif] m-0 p-0 bg-white text-[#333] w-[794px] mx-auto my-[20px] p-[20px] box-border text-[10pt] leading-[1.4]">
      {/* Header */}
      <div className="text-left mb-[20px]">
        <h1 className="m-0 text-[24pt] font-bold text-[#333]">
          Alyce Schneider
        </h1>
        <h2 className="my-[5px] text-[12pt] font-normal text-[#666]">
          Junior Web Developer
        </h2>
        <div className="text-[9pt] text-[#666]">
          <p className="my-[2px]">2008 Designer Lane, Austin, TX 78701</p>
          <p className="my-[2px]">(706) 278-2730</p>
          <p className="my-[2px]">
            <a
              href="mailto:aschneider@email.com"
              className="text-[#666] no-underline hover:underline"
            >
              aschneider@email.com
            </a>
          </p>
          <p className="my-[2px]">
            <a
              href="https://linkedin.com/in/aschneider"
              className="text-[#666] no-underline hover:underline"
            >
              linkedin.com/in/aschneider
            </a>
          </p>
          <p className="my-[2px]">
            <a
              href="https://github.com/alyceschneider"
              className="text-[#666] no-underline hover:underline"
            >
              github.com/alyceschneider
            </a>
          </p>
          <p className="my-[2px]">
            <a
              href="https://alyceschneider.dev"
              className="text-[#666] no-underline hover:underline"
            >
              alyceschneider.dev
            </a>
          </p>
          <p className="my-[2px]">
            <a
              href="https://figma.com/@alyceschneider"
              className="text-[#666] no-underline hover:underline"
            >
              figma.com/@alyceschneider
            </a>
          </p>
          <p className="my-[2px]">
            <a
              href="https://leetcode.com/alyceschneider"
              className="text-[#666] no-underline hover:underline"
            >
              leetcode.com/alyceschneider
            </a>
          </p>
        </div>
      </div>
      <hr className="border-0 border-t border-[#ddd] my-[15px]" />

      {/* Goal/Profile Summary */}
      <div className="mb-[20px]">
        <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#333]">
          Profile
        </h3>
        <p className="text-[9pt] text-[#666]">
          Goal-oriented Junior Web Developer with 2+ years of experience in
          creating responsive web applications. Contributed to the development
          and optimization of a SaaS platform, improving user retention by 20%.
          Skilled in JavaScript, React, and UI design, with a passion for
          delivering seamless user experiences. Seeking to leverage technical
          expertise and creativity to build innovative solutions at a
          forward-thinking tech company.
        </p>
      </div>
      <hr className="border-0 border-t border-[#ddd] my-[15px]" />

      {/* Experience */}
      <div className="mb-[20px]">
        <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#333]">
          Experience
        </h3>
        <div className="mb-[15px]">
          <h4 className="text-[10pt] font-bold m-0 inline">
            Junior Web Developer
          </h4>
          <span className="text-[9pt] text-[#666] float-right">
            Feb 2019 - Present
          </span>
          <p className="my-[5px] text-[9pt] text-[#666]">
            TechGenix, Austin, TX
          </p>
          <p className="my-[5px] text-[9pt] text-[#666]">
            Developed and maintained responsive web applications using React and
            JavaScript, supporting 5,000+ active users. Optimized front-end
            performance, reducing load times by 25%. Collaborated with UX
            designers to implement intuitive interfaces, enhancing user
            satisfaction.
          </p>
        </div>
        <div className="mb-[15px]">
          <h4 className="text-[10pt] font-bold m-0 inline">
            Frontend Developer Intern
          </h4>
          <span className="text-[9pt] text-[#666] float-right">
            Jan 2018 - Jan 2019
          </span>
          <p className="my-[5px] text-[9pt] text-[#666]">
            PixelCraft Studios, Austin, TX
          </p>
          <p className="my-[5px] text-[9pt] text-[#666]">
            Built 10+ responsive landing pages using HTML, CSS, and JavaScript.
            Configured interactive UI components, improving user engagement by
            15%. Assisted in integrating APIs for dynamic content delivery.
          </p>
        </div>
      </div>
      <hr className="border-0 border-t border-[#ddd] my-[15px]" />

      {/* Education */}
      <div className="mb-[20px]">
        <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#333]">
          Education
        </h3>
        <div className="flex justify-between items-baseline mb-[10px]">
          <div>
            <h4 className="text-[10pt] font-bold m-0">
              BSc in Computer Science
            </h4>
            <p className="my-[2px] text-[9pt] text-[#666]">
              University of Texas at Austin
            </p>
          </div>
          <div className="text-right">
            <span className="text-[9pt] text-[#666] block">2014-2017</span>
            <span className="text-[9pt] text-[#666] block">CGPA: 3.8</span>
          </div>
        </div>
      </div>
      <hr className="border-0 border-t border-[#ddd] my-[15px]" />

      {/* Certifications */}
      <div className="mb-[20px]">
        <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#333]">
          Certifications
        </h3>
        <div className="flex justify-between items-baseline mb-[10px]">
          <div>
            <h4 className="text-[10pt] font-bold m-0">
              React Developer Certification
            </h4>
            <p className="my-[2px] text-[9pt] text-[#666]">
              Udemy •{" "}
              <a
                href="https://udemy.com/certificate/react-dev"
                className="text-[#666] no-underline hover:underline"
              >
                udemy.com/certificate/react-dev
              </a>
            </p>
          </div>
          <div className="text-right">
            <span className="text-[9pt] text-[#666] block">2018</span>
          </div>
        </div>
        <div className="flex justify-between items-baseline mb-[10px]">
          <div>
            <h4 className="text-[10pt] font-bold m-0">
              JavaScript Algorithms and Data Structures
            </h4>
            <p className="my-[2px] text-[9pt] text-[#666]">
              freeCodeCamp •{" "}
              <a
                href="https://freecodecamp.org/cert/javascript"
                className="text-[#666] no-underline hover:underline"
              >
                freecodecamp.org/cert/javascript
              </a>
            </p>
          </div>
          <div className="text-right">
            <span className="text-[9pt] text-[#666] block">2017</span>
          </div>
        </div>
      </div>
      <hr className="border-0 border-t border-[#ddd] my-[15px]" />

      {/* Projects */}
      <div className="mb-[20px]">
        <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#333]">
          Projects
        </h3>
        <div className="mb-[15px]">
          <h4 className="text-[10pt] font-bold m-0">Portfolio Website</h4>
          <p className="my-[2px] text-[9pt] text-[#666]">
            Technologies: React, Tailwind CSS •{" "}
            <a
              href="https://github.com/alyceschneider/portfolio"
              className="text-[#666] no-underline hover:underline"
            >
              github.com/alyceschneider/portfolio
            </a>
          </p>
          <p className="my-[2px] text-[9pt] text-[#666]">
            Designed and developed a responsive portfolio showcasing 5+
            projects, achieving 1,000+ views in 3 months. Optimized for SEO,
            improving search ranking by 30%.
          </p>
        </div>
        <div className="mb-[15px]">
          <h4 className="text-[10pt] font-bold m-0">Task Management App</h4>
          <p className="my-[2px] text-[9pt] text-[#666]">
            Technologies: JavaScript, Firebase •{" "}
            <a
              href="https://github.com/alyceschneider/task-app"
              className="text-[#666] no-underline hover:underline"
            >
              github.com/alyceschneider/task-app
            </a>
          </p>
          <p className="my-[2px] text-[9pt] text-[#666]">
            Built a real-time task manager with user authentication, supporting
            500+ active users. Enhanced UX with drag-and-drop features, reducing
            task completion time by 15%.
          </p>
        </div>
      </div>
      <hr className="border-0 border-t border-[#ddd] my-[15px]" />

      {/* Skills */}
      <div className="mb-[20px]">
        <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#333]">
          Skills
        </h3>
        <div className="flex justify-between">
          <ul className="list-none p-0 text-[9pt] text-[#666]">
            <li className="mb-[5px] relative pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-[#333]">
              JavaScript
            </li>
            <li className="mb-[5px] relative pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-[#333]">
              React
            </li>
            <li className="mb-[5px] relative pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-[#333]">
              CSS
            </li>
            <li className="mb-[5px] relative pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-[#333]">
              Problem-solving
            </li>
          </ul>
          <ul className="list-none p-0 text-[9pt] text-[#666]">
            <li className="mb-[5px] relative pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-[#333]">
              Creativity
            </li>
            <li className="mb-[5px] relative pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-[#333]">
              Critical Thinking
            </li>
            <li className="mb-[5px] relative pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-[#333]">
              Team Collaboration
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-0 border-t border-[#ddd] my-[15px]" />

      {/* Languages */}
      <div className="mb-[20px]">
        <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#333]">
          Languages
        </h3>
        <p className="text-[9pt] text-[#666] m-0">
          Spanish (Fluent), Polish (Intermediate)
        </p>
      </div>
      <hr className="border-0 border-t border-[#ddd] my-[15px]" />

      {/* Hobbies */}
      <div className="mb-[20px]">
        <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#333]">
          Hobbies & Interests
        </h3>
        <p className="text-[9pt] text-[#666] m-0">
          Web Development, Gaming, Traveling
        </p>
      </div>
      <hr className="border-0 border-t border-[#ddd] my-[15px]" />

      {/* Achievements */}
      <div className="mb-[20px]">
        <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#333]">
          Achievements & Awards
        </h3>
        <div className="mb-[10px]">
          <h4 className="text-[10pt] font-bold m-0">Hackathon Winner</h4>
          <p className="my-[2px] text-[9pt] text-[#666]">
            Austin CodeFest, 2020
          </p>
          <p className="my-[2px] text-[9pt] text-[#666]">
            Led team to 1st place for innovative web app design.
          </p>
        </div>
        <div className="mb-[10px]">
          <h4 className="text-[10pt] font-bold m-0">Dean’s List</h4>
          <p className="my-[2px] text-[9pt] text-[#666]">
            University of Texas at Austin, 2015-2017
          </p>
          <p className="my-[2px] text-[9pt] text-[#666]">
            Recognized for academic excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpResume17;
