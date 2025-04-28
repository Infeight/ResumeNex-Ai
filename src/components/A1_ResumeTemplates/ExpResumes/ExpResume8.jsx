import React from "react";

const ExpResume8 = () => {
  return (
    <div className="font-['Times New Roman',serif] text-gray-800 w-[794px] min-h-[1122px] mx-auto p-5 bg-white">
      {/* Personal Info & Job Role */}
      <h1 className="text-[26px] font-bold text-blue-700 text-center mb-2">
        Sophia Nguyen
      </h1>
      <div className="mb-2 p-2 text-[12px]">
        <p>
          Email:{" "}
          <a
            href="mailto:sophia.nguyen@email.com"
            className="text-blue-700 hover:underline"
          >
            sophia.nguyen@email.com
          </a>{" "}
          | Phone: +1 312-555-0444 | Location: Chicago, IL, 60601
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/sophianguyen"
            className="text-blue-700 hover:underline"
          >
            linkedin.com/in/sophianguyen
          </a>{" "}
          | GitHub:{" "}
          <a
            href="https://github.com/sophianguyen"
            className="text-blue-700 hover:underline"
          >
            github.com/sophianguyen
          </a>{" "}
          | Portfolio:{" "}
          <a
            href="https://sophianguyen.dev"
            className="text-blue-700 hover:underline"
          >
            sophianguyen.dev
          </a>
        </p>
      </div>

      {/* Profile Summary */}
      <div className="mb-2 p-2">
        <h2 className="text-[20px] font-bold text-blue-700 mb-1">
          Profile Summary
        </h2>
        <div className="flex">
          <div className="w-[65%] text-[12px]">
            <p>
              Backend Developer skilled in Python, Node.js, SQL, and cloud
              technologies. Passionate about optimizing database performance and
              building scalable RESTful APIs.
            </p>
          </div>
          <div className="w-[30%] text-right text-[12px]">
            <p>Char Count: 190</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-2 p-2">
        <h2 className="text-[20px] font-bold text-blue-700 mb-1">Skills</h2>
        <div className="flex">
          <div className="w-[65%] text-[12px]">
            <p className="font-bold">Technical Skills:</p>
            <ul className="list-disc pl-4">
              <li>Programming Languages: Python, Node.js, SQL</li>
              <li>Databases: PostgreSQL, MongoDB</li>
              <li>
                Tools & Technologies: Git, Docker, RESTful APIs, Cloud Computing
              </li>
            </ul>
            <p className="font-bold mt-2">Soft Skills:</p>
            <ul className="list-disc pl-4">
              <li>Problem-Solving, Collaboration</li>
            </ul>
          </div>
          <div className="w-[30%] text-right text-[12px]">
            <p>Proficiency: Intermediate</p>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mb-2 p-2">
        <h2 className="text-[20px] font-bold text-blue-700 mb-1">
          Work Experience
        </h2>
        <div className="flex mb-3">
          <div className="w-[65%]">
            <h3 className="text-[14px] font-bold">Backend Intern</h3>
            <p className="text-[12px] italic">DataSync Ltd., Chicago, IL</p>
            <ul className="list-disc pl-4 text-[12px]">
              <li>
                Developed and maintained RESTful APIs using Node.js and
                PostgreSQL.
              </li>
              <li>Optimized SQL queries, reducing API response time by 20%.</li>
              <li>
                Assisted in database schema design for better performance and
                scalability.
              </li>
            </ul>
          </div>
          <div className="w-[30%] text-right text-[12px]">
            <p>Jan 2024 - Jun 2024</p>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-2 p-2">
        <h2 className="text-[20px] font-bold text-blue-700 mb-1">Projects</h2>
        <div className="flex mb-3">
          <div className="w-[65%]">
            <h3 className="text-[14px] font-bold">API Server</h3>
            <p className="text-[12px] italic">Personal Project</p>
            <p className="text-[12px]">
              <a
                href="https://github.com/sophianguyen/api-server"
                className="text-blue-700 hover:underline"
              >
                GitHub
              </a>
            </p>
            <p className="text-[12px]">
              Technologies: Python, Flask, MongoDB, Docker
            </p>
            <p className="text-[12px]">
              Summary: Built a scalable API server for user data management with
              containerized deployment.
            </p>
            <ul className="list-disc pl-4 text-[12px]">
              <li>
                Built a Python Flask server integrated with MongoDB for user
                data management.
              </li>
              <li>
                Deployed the service using Docker for scalability and efficient
                containerized operations.
              </li>
            </ul>
          </div>
          <div className="w-[30%] text-right text-[12px]">
            <p>Mar 2024 - May 2024</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-[65%]">
            <h3 className="text-[14px] font-bold">Inventory Tracker</h3>
            <p className="text-[12px] italic">Course Project</p>
            <p className="text-[12px]">
              <a
                href="https://github.com/sophianguyen/inventory-tracker"
                className="text-blue-700 hover:underline"
              >
                GitHub
              </a>
            </p>
            <p className="text-[12px]">Technologies: Node.js, SQL</p>
            <p className="text-[12px]">
              Summary: Developed a backend system for inventory management with
              secure authentication.
            </p>
            <ul className="list-disc pl-4 text-[12px]">
              <li>
                Developed a Node.js backend with an SQL database to manage
                inventory CRUD operations.
              </li>
              <li>
                Implemented JWT-based authentication for secure access control.
              </li>
            </ul>
          </div>
          <div className="w-[30%] text-right text-[12px]">
            <p>Oct 2023 - Dec 2023</p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-2 p-2">
        <h2 className="text-[20px] font-bold text-blue-700 mb-1">Education</h2>
        <div className="flex">
          <div className="w-[65%]">
            <h3 className="text-[14px] font-bold">B.S. in Computer Science</h3>
            <p className="text-[12px] italic">
              University of Illinois, Chicago, IL
            </p>
            <p className="text-[12px]">CGPA: 8.5/10</p>
          </div>
          <div className="w-[30%] text-right text-[12px]">
            <p>Aug 2022 - Expected May 2026</p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-2 p-2">
        <h2 className="text-[20px] font-bold text-blue-700 mb-1">
          Certifications
        </h2>
        <div className="flex">
          <div className="w-[65%] text-[12px]">
            <p>
              <span className="font-bold">
                AWS Certified Cloud Practitioner
              </span>{" "}
              - Amazon Web Services
              <br />
              <a
                href="https://aws.amazon.com/verify/cloud-practitioner"
                className="text-blue-700 hover:underline"
              >
                Verify
              </a>
            </p>
          </div>
          <div className="w-[30%] text-right text-[12px]">
            <p>
              Issued: Jan 2024
              <br />
              No Expiry
            </p>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="mb-2 p-2">
        <h2 className="text-[20px] font-bold text-blue-700 mb-1">
          Additional Information
        </h2>
        <div className="flex">
          <div className="w-[65%] text-[12px]">
            <p className="font-bold">Languages:</p>
            <ul className="list-disc pl-4">
              <li>English (Fluent)</li>
              <li>Vietnamese (Native)</li>
            </ul>
            <p className="font-bold mt-2">Hobbies & Interests:</p>
            <ul className="list-disc pl-4">
              <li>Server scripting</li>
              <li>Solving complex puzzles</li>
            </ul>
            <p className="font-bold mt-2">Achievements & Awards:</p>
            <ul className="list-disc pl-4">
              <li>Dean’s List, UIC, 2023</li>
            </ul>
          </div>
          <div className="w-[30%] text-right text-[12px]">
            <p>Fluency: C2</p>
            <p>Years Active: 2+</p>
            <p>Award Date: Dec 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpResume8;
