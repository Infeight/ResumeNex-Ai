// src/components/Resume5.js
import React from "react";

const Resume5 = () => {
  return (
    <div className="font-['Arial',sans-serif] w-[794px] mx-auto my-[35px] p-5 leading-[1.5] text-[#2d3748] overflow-x-hidden">
      {/* Header */}
      <h1 className="text-[30px] m-[0_0_5px_0] text-[#1e40af] font-bold">
        Sophia Nguyen
      </h1>
      <h2 className="text-[20px] border-b-2 border-[#1e40af] pb-[3px] m-[0px_0_15px_0] text-[#1e40af]">
        Backend Developer
      </h2>

      {/* Contact Info */}
      <div className="text-[12px] mb-[15px]">
        <a
          href="mailto:sophia.nguyen@email.com"
          className="text-[#1e40af] no-underline hover:underline"
        >
          sophia.nguyen@email.com
        </a>{" "}
        | (312) 555-0444 | Chicago, IL |{" "}
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
      </div>

      {/* Professional Summary */}
      <div className="mb-[15px]">
        <h2 className="text-[20px] border-b-2 border-[#1e40af] pb-[3px] m-[20px_0_15px_0] text-[#1e40af]">
          Professional Summary
        </h2>
        <p className="text-[12px]">
          Backend Developer specializing in Python and Node.js with experience
          building scalable APIs and optimizing database performance. Passionate
          about efficient, maintainable code and cloud-native solutions.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mb-[15px]">
        <h2 className="text-[20px] border-b-2 border-[#1e40af] pb-[3px] m-[20px_0_15px_0] text-[#1e40af]">
          Technical Skills
        </h2>
        <div className="columns-2 gap-[20px]">
          <ul className="m-[8px_0] pl-[20px] text-[12px]">
            <li className="mb-[5px]">
              <strong>Languages:</strong> Python, JavaScript (Node.js), SQL
            </li>
            <li className="mb-[5px]">
              <strong>Frameworks:</strong> Flask, Express.js, Django
            </li>
            <li className="mb-[5px]">
              <strong>Databases:</strong> PostgreSQL, MongoDB, Redis
            </li>
            <li className="mb-[5px]">
              <strong>Cloud:</strong> AWS (Lambda, ECS, RDS), Docker
            </li>
            <li className="mb-[5px]">
              <strong>Concepts:</strong> REST APIs, Microservices, CI/CD
            </li>
          </ul>
        </div>
      </div>

      {/* Professional Experience */}
      <div className="mb-[15px]">
        <h2 className="text-[20px] border-b-2 border-[#1e40af] pb-[3px] m-[20px_0_15px_0] text-[#1e40af]">
          Professional Experience
        </h2>
        <div className="mb-[12px]">
          <div className="flex justify-between">
            <div>
              <div className="font-bold text-[14px]">
                Backend Developer Intern
              </div>
              <div className="italic text-[12px] text-[#4a5568]">
                DataSync Inc., Chicago, IL
              </div>
            </div>
            <div className="text-[12px] text-[#6b7280]">01/2024 - 06/2024</div>
          </div>
          <ul className="m-[8px_0] pl-[20px] text-[12px]">
            <li className="mb-[5px]">
              Developed RESTful APIs using Node.js that reduced average response
              time by 20% through query optimization
            </li>
            <li className="mb-[5px]">
              Implemented AWS Lambda functions reducing operational costs by 15%
            </li>
            <li className="mb-[5px]">
              Optimized PostgreSQL queries improving database performance by 30%
            </li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-[15px]">
        <h2 className="text-[20px] border-b-2 border-[#1e40af] pb-[3px] m-[20px_0_15px_0] text-[#1e40af]">
          Projects
        </h2>
        <div className="mb-[12px]">
          <div className="flex justify-between">
            <div>
              <div className="font-bold text-[14px]">API Gateway</div>
              <div className="italic text-[12px] text-[#4a5568]">
                Personal Project
              </div>
            </div>
            <div className="text-[12px] text-[#6b7280]">03/2024 - 05/2024</div>
          </div>
          <ul className="m-[8px_0] pl-[20px] text-[12px]">
            <li className="mb-[5px]">
              Built Python Flask API with JWT authentication handling 1000+ RPM
            </li>
            <li className="mb-[5px]">
              Containerized with Docker and deployed on AWS ECS with CI/CD
            </li>
            <li className="mb-[5px]">
              Integrated PostgreSQL with optimized queries and caching
            </li>
          </ul>
        </div>
        <div className="mb-[12px]">
          <div className="flex justify-between">
            <div>
              <div className="font-bold text-[14px]">Task Queue System</div>
              <div className="italic text-[12px] text-[#4a5568]">
                Course Project
              </div>
            </div>
            <div className="text-[12px] text-[#6b7280]">10/2023 - 12/2023</div>
          </div>
          <ul className="m-[8px_0] pl-[20px] text-[12px]">
            <li className="mb-[5px]">
              Developed Node.js backend with Redis achieving 500+ tasks/sec
              throughput
            </li>
            <li className="mb-[5px]">
              Implemented worker processes with automatic scaling
            </li>
            <li className="mb-[5px]">
              Created monitoring dashboard for performance metrics
            </li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mb-[15px]">
        <h2 className="text-[20px] border-b-2 border-[#1e40af] pb-[3px] m-[20px_0_15px_0] text-[#1e40af]">
          Education
        </h2>
        <div className="mb-[12px]">
          <div className="flex justify-between">
            <div>
              <div className="font-bold text-[14px]">
                Bachelor of Science in Computer Science
              </div>
              <div className="italic text-[12px] text-[#4a5568]">
                University of Illinois at Chicago
              </div>
            </div>
            <div className="text-[12px] text-[#6b7280]">Expected 05/2026</div>
          </div>
          <ul className="m-[8px_0] pl-[20px] text-[12px]">
            <li className="mb-[5px]">CGPA: 8.5/10 (Top 15%)</li>
            <li className="mb-[5px]">
              Relevant Coursework: Database Systems, Distributed Systems
            </li>
          </ul>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-[15px]">
        <h2 className="text-[20px] border-b-2 border-[#1e40af] pb-[3px] m-[20px_0_15px_0] text-[#1e40af]">
          Certifications
        </h2>
        <ul className="m-[8px_0] pl-[20px] text-[12px]">
          <li className="mb-[5px]">AWS Certified Cloud Practitioner (2024)</li>
          <li className="mb-[5px]">
            Backend Development Certification - freeCodeCamp (2023)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume5;
