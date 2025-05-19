import React from "react";

const RESUME_ExpAndFresher_11 = () => {
  return (
    <div className="font-['Arial',sans-serif] text-gray-800 w-[794px] min-h-[1122px] mx-auto p-[20mm] box-border flex">
      {/* Sidebar */}
      <div className="w-[30%] bg-gray-100 p-4 text-gray-800">
        <h1 className="text-[24px] font-bold mb-2">Priya Sharma</h1>
        <div className="text-[12px]">
          <p className="my-1">Bangalore, India, 560001</p>
          <p className="my-1">9876 543 210</p>
          <p className="my-1">
            <a
              href="mailto:priya.sharma@email.com"
              className="text-gray-800 no-underline hover:underline"
            >
              priya.sharma@email.com
            </a>
          </p>
          <p className="my-1">
            <a
              href="https://linkedin.com/in/priyasharma"
              className="text-gray-800 no-underline hover:underline"
            >
              linkedin.com/in/priyasharma
            </a>
          </p>
          <p className="my-1">
            <a
              href="https://github.com/priyasharma"
              className="text-gray-800 no-underline hover:underline"
            >
              github.com/priyasharma
            </a>
          </p>
          <p className="my-1">
            <a
              href="https://priyasharma.dev"
              className="text-gray-800 no-underline hover:underline"
            >
              priyasharma.dev
            </a>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-[70%] p-4 bg-white border-l border-gray-300">
        {/* Objective */}
        <h2 className="text-[16px] font-bold uppercase border-b border-black pb-1 mb-2 mt-0 text-left">
          Objective
        </h2>
        <p className="text-[12px] text-justify">
          Motivated Computer Science graduate seeking an entry-level software
          development role to apply my programming skills in Python and Java,
          honed through academic projects and internships. Eager to contribute
          to innovative projects while growing my expertise in a dynamic team
          environment.
        </p>

        {/* Education */}
        <h2 className="text-[16px] font-bold uppercase border-b border-black pb-1 mb-2 mt-5 text-left">
          Education
        </h2>
        <div className="mb-3">
          <div className="flex justify-between text-[14px]">
            <span className="font-bold">B.Tech in Computer Science</span>
            <span className="italic font-bold">Jun 2020 - May 2024</span>
          </div>
          <div className="text-[12px]">
            <p>Indian Institute of Technology, Bangalore, India</p>
            <p className="italic">CGPA: 8.7/10 (Top 10%)</p>
            <p>
              <span className="font-bold">Relevant Coursework:</span> Data
              Structures, Algorithms, Database Systems, Web Development
            </p>
          </div>
        </div>

        {/* Internships */}
        <h2 className="text-[16px] font-bold uppercase border-b border-black pb-1 mb-2 mt-5 text-left">
          Internships
        </h2>
        <div className="mb-3">
          <div className="flex justify-between text-[14px] font-bold">
            <span>Software Development Intern</span>
            <span className="italic">Jun 2023 - Aug 2023</span>
          </div>
          <div className="text-[14px] font-bold">
            TechSolutions Pvt. Ltd., Bangalore, India
          </div>
          <ul className="list-disc pl-5 text-[12px] mt-1">
            <li>
              <i>Developed</i> a user authentication module using Python and
              Django, improving login security by <b>15%</b>.
            </li>
            <li>
              <i>Collaborated</i> with a team of 5 to design and test REST APIs
              for a web application.
            </li>
            <li>
              <i>Assisted</i> in debugging and optimizing database queries,
              reducing response time by <b>20%</b>.
            </li>
          </ul>
        </div>

        {/* Projects */}
        <h2 className="text-[16px] font-bold uppercase border-b border-black pb-1 mb-2 mt-5 text-left">
          Projects
        </h2>
        <div className="mb-3">
          <div className="flex justify-between text-[14px] font-bold">
            <span>E-Commerce Website</span>
            <span className="italic">Jan 2024 - Apr 2024</span>
          </div>
          <div className="text-[14px] font-bold">
            Final Year Project, IIT Bangalore, Bangalore, India
          </div>
          <p className="text-[12px]">
            <a
              href="https://github.com/priyasharma/ecommerce"
              className="text-gray-800 no-underline hover:underline"
            >
              GitHub
            </a>
          </p>
          <p className="text-[12px]">Technologies: React, Node.js, MongoDB</p>
          <p className="text-[12px]">
            Summary: Built a full-stack e-commerce platform with advanced
            features.
          </p>
          <ul className="list-disc pl-5 text-[12px] mt-1">
            <li>
              <i>Built</i> a full-stack e-commerce platform using React,
              Node.js, and MongoDB.
            </li>
            <li>
              <i>Implemented</i> features like product search, cart management,
              and payment integration.
            </li>
            <li>
              <i>Presented</i> the project to a panel of professors, receiving a
              score of <b>92/100</b>.
            </li>
          </ul>
        </div>

        {/* Skills */}
        <h2 className="text-[16px] font-bold uppercase border-b border-black pb-1 mb-2 mt-5 text-left">
          Skills
        </h2>
        <div className="text-[12px] mb-4">
          <div className="flex">
            <div className="w-[65%]">
              <p>
                <span className="font-bold">Programming Languages:</span>{" "}
                Python, Java, JavaScript
              </p>
              <p>
                <span className="font-bold">Frameworks:</span> Django, React,
                Node.js
              </p>
              <p>
                <span className="font-bold">Other:</span> Data Structures,
                Algorithms, Git, SQL
              </p>
            </div>
            <div className="w-[30%] text-right">
              <p>Proficiency: Intermediate</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <h2 className="text-[16px] font-bold uppercase border-b border-black pb-1 mb-2 mt-5 text-left">
          Certifications
        </h2>
        <div className="mb-4">
          <div className="flex">
            <div className="w-[65%] text-[12px]">
              <p>
                <span className="font-bold">Python Programming</span> - Coursera
                <br />
                <a
                  href="https://coursera.org/verify/python"
                  className="text-gray-800 no-underline hover:underline"
                >
                  Verify
                </a>
              </p>
            </div>
            <div className="w-[30%] text-right text-[12px] italic">
              <p>
                Issued: Aug 2023
                <br />
                No Expiry
              </p>
            </div>
          </div>
        </div>

        {/* Extracurricular Activities */}
        <h2 className="text-[16px] font-bold uppercase border-b border-black pb-1 mb-2 mt-5 text-left">
          Extracurricular Activities
        </h2>
        <div className="text-[12px]">
          <div className="flex">
            <div className="w-[65%]">
              <ul className="list-disc pl-5">
                <li>
                  President, Coding Club, IIT Bangalore (2022–2023): Organized{" "}
                  <b>5</b> coding competitions with <b>100+</b> participants.
                </li>
                <li>
                  Volunteer, TechFest 2023: Managed logistics for a tech
                  symposium attended by <b>500+</b> students.
                </li>
              </ul>
            </div>
            <div className="w-[30%] text-right italic">
              <p>2022-2023</p>
              <p>2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_11;
