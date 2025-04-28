import React from "react";

const ExpResume10 = () => {
  return (
    <div className="font-['Arial',sans-serif] text-gray-800 w-[794px] min-h-[1122px] mx-auto p-[20mm] box-border">
      {/* Personal Info */}
      <div className="text-center mb-2">
        <h1 className="text-[26px] font-bold mb-0">Adelaide Reeves</h1>
        <p className="text-[12px] my-0.5">
          New York, NY, 10001 | 012 000 0000 |{" "}
          <a
            href="mailto:adelaide.reeves@email.com"
            className="text-gray-800 no-underline hover:underline"
          >
            adelaide.reeves@email.com
          </a>
        </p>
        <p className="text-[12px] my-0.5">
          <a
            href="https://linkedin.com/in/adelaidereeves"
            className="text-gray-800 no-underline hover:underline"
          >
            linkedin.com/in/adelaidereeves
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/adelaidereeves"
            className="text-gray-800 no-underline hover:underline"
          >
            github.com/adelaidereeves
          </a>{" "}
          |{" "}
          <a
            href="https://adelaidereeves.dev"
            className="text-gray-800 no-underline hover:underline"
          >
            adelaidereeves.dev
          </a>
        </p>
      </div>

      {/* Profile Summary */}
      <div className="mb-5 text-center">
        <h2 className="text-[20px] font-bold uppercase border-b border-black pb-1 mb-1">
          Professional Profile
        </h2>
        <div className="text-[12px] text-justify">
          <p>
            Dedicated professional with a strong educational background in
            computer science and extensive experience in software development.
            Skilled in designing and implementing innovative solutions using
            modern programming languages and frameworks. Achieved a <b>25%</b>{" "}
            increase in project efficiency through optimized workflows.
            Proficient in project management and data analysis, with a passion
            for leveraging technology to solve complex challenges.
          </p>
        </div>
      </div>

      {/* Work Experience */}
      <h2 className="text-[20px] font-bold uppercase border-b border-black pb-1 mb-2 mt-5 text-center">
        Work Experience
      </h2>
      <div className="mb-4">
        <div className="mb-3">
          <div className="flex justify-between text-[14px] font-bold">
            <span>Software Developer</span>
            <span className="italic">Jan 2023 - Present</span>
          </div>
          <div className="text-[14px] font-bold">TechCorp, New York, NY</div>
          <ul className="list-disc pl-5 text-[12px] mt-1">
            <li>
              <i>Developed</i> scalable web applications using Python and
              Django, enhancing user experience for <b>10,000+</b> monthly
              users.
            </li>
            <li>
              <i>Implemented</i> CI/CD pipelines with Jenkins, reducing
              deployment time by <b>30%</b>.
            </li>
            <li>
              <i>Designed</i> RESTful APIs, improving system interoperability by{" "}
              <b>20%</b>.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <div className="flex justify-between text-[14px] font-bold">
            <span>Junior Developer</span>
            <span className="italic">Jun 2021 - Dec 2022</span>
          </div>
          <div className="text-[14px] font-bold">
            Innovate Solutions, New York, NY
          </div>
          <ul className="list-disc pl-5 text-[12px] mt-1">
            <li>
              <i>Developed</i> front-end components with React, increasing user
              engagement by <b>15%</b>.
            </li>
            <li>
              <i>Optimized</i> database queries, reducing load times by{" "}
              <b>25%</b>.
            </li>
            <li>
              <i>Collaborated</i> with cross-functional teams to deliver
              projects <b>10%</b> ahead of schedule.
            </li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <h2 className="text-[20px] font-bold uppercase border-b border-black pb-1 mb-2 mt-5 text-center">
        Education
      </h2>
      <div className="mb-4">
        <div className="mb-2">
          <div className="flex justify-between text-[14px]">
            <span className="font-bold">
              Master’s Degree in Computer Science
            </span>
            <span className="italic font-bold">Aug 2022 - May 2024</span>
          </div>
          <div className="flex justify-between text-[12px]">
            <span>New York University, New York, NY</span>
            <span className="italic">CGPA: 8.5/10</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[14px]">
            <span className="font-bold">
              Bachelor’s Degree in Computer Science
            </span>
            <span className="italic font-bold">Aug 2018 - May 2022</span>
          </div>
          <div className="flex justify-between text-[12px]">
            <span>New York University, New York, NY</span>
            <span className="italic">CGPA: 8.0/10</span>
          </div>
        </div>
      </div>

      {/* Projects */}
      <h2 className="text-[20px] font-bold uppercase border-b border-black pb-1 mb-2 mt-5 text-center">
        Projects
      </h2>
      <div className="mb-4">
        <div className="mb-3">
          <div className="flex justify-between text-[14px] font-bold">
            <span>Task Management App</span>
            <span className="italic">Jan 2024 - Mar 2024</span>
          </div>
          <div className="text-[14px] font-bold">
            Personal Project, New York, NY
          </div>
          <p className="text-[12px]">
            <a
              href="https://github.com/adelaidereeves/task-app"
              className="text-gray-800 no-underline hover:underline"
            >
              GitHub
            </a>
          </p>
          <p className="text-[12px]">
            Technologies: Python, Django, PostgreSQL
          </p>
          <p className="text-[12px]">
            Summary: Developed a task management app with user authentication
            and real-time updates.
          </p>
          <ul className="list-disc pl-5 text-[12px] mt-1">
            <li>
              <i>Designed</i> backend APIs, handling <b>1,000+</b> daily
              requests.
            </li>
            <li>
              <i>Implemented</i> responsive UI, improving user retention by{" "}
              <b>20%</b>.
            </li>
          </ul>
        </div>
      </div>

      {/* Skills */}
      <h2 className="text-[20px] font-bold uppercase border-b border-black pb-1 mb-2 mt-5 text-center">
        Skills
      </h2>
      <div className="mb-4 text-[12px]">
        <div className="flex">
          <div className="w-[65%]">
            <p>
              <span className="font-bold">Languages:</span> English (Fluent),
              Spanish (Intermediate)
            </p>
            <p>
              <span className="font-bold">Computer Skills:</span> Python
              (Advanced), JavaScript (Intermediate), SQL (Intermediate)
            </p>
            <p>
              <span className="font-bold">Other:</span> Project Management, Data
              Analysis, Agile Methodologies
            </p>
          </div>
          <div className="w-[30%] text-right text-[12px]">
            <p>Proficiency: Advanced</p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <h2 className="text-[20px] font-bold uppercase border-b border-black pb-1 mb-2 mt-5 text-center">
        Certifications
      </h2>
      <div className="mb-4">
        <div className="flex">
          <div className="w-[65%] text-[12px]">
            <p>
              <span className="font-bold">Certified ScrumMaster</span> - Scrum
              Alliance
              <br />
              <a
                href="https://scrumalliance.org/verify/csm"
                className="text-gray-800 no-underline hover:underline"
              >
                Verify
              </a>
            </p>
          </div>
          <div className="w-[30%] text-right text-[12px] italic">
            <p>
              Issued: Dec 2023
              <br />
              No Expiry
            </p>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <h2 className="text-[20px] font-bold uppercase border-b border-black pb-1 mb-2 mt-5 text-center">
        Additional Information
      </h2>
      <div className="flex">
        <div className="w-[65%] text-[12px]">
          <p className="font-bold">Languages:</p>
          <ul className="list-disc pl-5">
            <li>English (Fluent)</li>
            <li>Spanish (Intermediate)</li>
          </ul>
          <p className="font-bold mt-2">Hobbies & Interests:</p>
          <ul className="list-disc pl-5">
            <li>Coding, Hiking, Reading Tech Journals</li>
          </ul>
          <p className="font-bold mt-2">Achievements & Awards:</p>
          <ul className="list-disc pl-5">
            <li>Dean’s List, NYU, 2022</li>
          </ul>
        </div>
        <div className="w-[30%] text-right text-[12px] italic">
          <p>Fluency: C1</p>
          <p>Years Active: 2+</p>
          <p>Award Date: May 2022</p>
        </div>
      </div>
    </div>
  );
};

export default ExpResume10;
