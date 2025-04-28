import React from "react";

const ExpResume7 = () => {
  return (
    <div className="font-['Calibri',sans-serif] text-gray-800 w-[794px] min-h-[1122px] mx-auto p-[15mm] leading-relaxed">
      {/* Personal Info & Job Role */}
      <h1 className="text-[26px] font-bold text-blue-800 mb-1">
        Sophia Nguyen
      </h1>
      <h2 className="text-[20px] font-bold text-blue-800 mb-4">
        Backend Developer
      </h2>
      <div className="text-[12px] mb-4">
        <p>
          <a
            href="mailto:sophia.nguyen@email.com"
            className="text-blue-800 hover:underline"
          >
            sophia.nguyen@email.com
          </a>{" "}
          | (312) 555-0444 | Chicago, IL, 60601 |{" "}
          <a
            href="https://linkedin.com/in/sophianguyen"
            className="text-blue-800 hover:underline"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com bitterness/sophianguyen"
            className="text-blue-800 hover:underline"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://sophianguyen.dev"
            className="text-blue-800 hover:underline"
          >
            sophianguyen.dev
          </a>
        </p>
      </div>

      {/* Profile Summary */}
      <h2 className="text-[20px] font-bold text-blue-800 border-b-2 border-blue-800 pb-1 mb-2 mt-5">
        Profile Summary
      </h2>
      <div className="flex mb-4">
        <div className="w-[65%] text-[12px]">
          <p>
            Backend Developer specializing in Python and Node.js with experience
            building scalable APIs and optimizing database performance.
            Passionate about efficient, maintainable code and cloud-native
            solutions.
          </p>
        </div>
        <div className="w-[30%] text-right text-[12px]">
          <p>Char Count: 220</p>
        </div>
      </div>

      {/* Skills */}
      <h2 className="text-[20px] font-bold text-blue-800 border-b-2 border-blue-800 pb-1 mb-2 mt-5">
        Skills
      </h2>
      <div className="flex mb-4">
        <div className="w-[65%] text-[12px] columns-2 gap-5">
          <ul className="list-disc pl-5">
            <li>
              <strong>Languages:</strong> Python, JavaScript (Node.js), SQL
            </li>
            <li>
              <strong>Frameworks:</strong> Flask, Express.js, Django
            </li>
            <li>
              <strong>Databases:</strong> PostgreSQL, MongoDB, Redis
            </li>
            <li>
              <strong>Cloud:</strong> AWS (Lambda, ECS, RDS), Docker
            </li>
            <li>
              <strong>Concepts:</strong> REST APIs, Microservices, CI/CD
            </li>
            <li>
              <li>
                <strong>Soft Skills:</strong> Problem-Solving, Collaboration
              </li>
            </li>
          </ul>
        </div>
        <div className="w-[30%] text-right text-[12px]">
          <p>Proficiency: Intermediate</p>
        </div>
      </div>

      {/* Work Experience */}
      <h2 className="text-[20px] font-bold text-blue-800 border-b-2 border-blue-800 pb-1 mb-2 mt-5">
        Work Experience
      </h2>
      <div className="mb-4">
        <div className="flex mb-3">
          <div className="w-[65%]">
            <h3 className="text-[14px] font-bold">Backend Developer Intern</h3>
            <p className="text-[12px] italic text-gray-600">
              DataSync Inc., Chicago, IL
            </p>
            <ul className="list-disc pl-5 text-[12px]">
              <li>
                Developed RESTful APIs using Node.js that reduced average
                response time by 20% through query optimization
              </li>
              <li>
                Implemented AWS Lambda functions reducing operational costs by
                15%
              </li>
              <li>
                Optimized PostgreSQL queries improving database performance by
                30%
              </li>
            </ul>
          </div>
          <div className="w-[30%] text-right text-[12px] text-gray-500">
            <p>Jan 2024 - Jun 2024</p>
          </div>
        </div>
      </div>

      {/* Projects */}
      <h2 className="text-[20px] font-bold text-blue-800 border-b-2 border-blue-800 pb-1 mb-2 mt-5">
        Projects
      </h2>
      <div className="mb-4">
        <div className="flex mb-3">
          <div className="w-[65%]">
            <h3 className="text-[14px] font-bold">API Gateway</h3>
            <p className="text-[12px] italic text-gray-600">Personal Project</p>
            <p className="text-[12px]">
              <a
                href="https://github.com/sophianguyen/api-gateway"
                className="text-blue-800 hover:underline"
              >
                GitHub
              </a>
            </p>
            <p className="text-[12px]">
              Technologies: Python, Flask, AWS ECS, PostgreSQL
            </p>
            <p className="text-[12px]">
              Summary: Built a secure API gateway with JWT authentication and
              CI/CD deployment.
            </p>
            <ul className="list-disc pl-5 text-[12px]">
              <li>
                Built Python Flask API with JWT authentication handling 1000+
                RPM
              </li>
              <li>
                Containerized with Docker and deployed on AWS ECS with CI/CD
              </li>
              <li>Integrated PostgreSQL with optimized queries and caching</li>
            </ul>
          </div>
          <div className="w-[30%] text-right text-[12px] text-gray-500">
            <p>Mar 2024 - May 2024</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-[65%]">
            <h3 className="text-[14px] font-bold">Task Queue System</h3>
            <p className="text-[12px] italic text-gray-600">Course Project</p>
            <p className="text-[12px]">
              <a
                href="https://github.com/sophianguyen/task-queue"
                className="text-blue-800 hover:underline"
              >
                GitHub
              </a>
            </p>
            <p className="text-[12px]">Technologies: Node.js, Redis</p>
            <p className="text-[12px]">
              Summary: Developed a high-throughput task queue system with
              monitoring dashboard.
            </p>
            <ul className="list-disc pl-5 text-[12px]">
              <li>
                Developed Node.js backend with Redis achieving 500+ tasks/sec
                throughput
              </li>
              <li>Implemented worker processes with automatic scaling</li>
              <li>Created monitoring dashboard for performance metrics</li>
            </ul>
          </div>
          <div className="w-[30%] text-right text-[12px] text-gray-500">
            <p>Oct 2023 - Dec 2023</p>
          </div>
        </div>
      </div>

      {/* Education */}
      <h2 className="text-[20px] font-bold text-blue-800 border-b-2 border-blue-800 pb-1 mb-2 mt-5">
        Education
      </h2>
      <div className="flex mb-4">
        <div className="w-[65%]">
          <h3 className="text-[14px] font-bold">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-[12px] italic text-gray-600">
            University of Illinois at Chicago, Chicago, IL
          </p>
          <ul className="list-disc pl-5 text-[12px]">
            <li>CGPA: 8.5/10 (Top 15%)</li>
            <li>Relevant Coursework: Database Systems, Distributed Systems</li>
          </ul>
        </div>
        <div className="w-[30%] text-right text-[12px] text-gray-500">
          <p>Aug 2022 - Expected May 2026</p>
        </div>
      </div>

      {/* Certifications */}
      <h2 className="text-[20px] font-bold text-blue-800 border-b-2 border-blue-800 pb-1 mb-2 mt-5">
        Certifications
      </h2>
      <div className="flex mb-4">
        <div className="w-[65%] text-[12px]">
          <p>
            <span className="font-bold">AWS Certified Cloud Practitioner</span>{" "}
            - Amazon Web Services
            <br />
            <a
              href="https://aws.amazon.com/verify/cloud-practitioner"
              className="text-blue-800 hover:underline"
            >
              Verify
            </a>
          </p>
          <p>
            <span className="font-bold">Backend Development Certification</span>{" "}
            - freeCodeCamp
            <br />
            <a
              href="https://freecodecamp.org/cert/backend"
              className="text-blue-800 hover:underline"
            >
              Verify
            </a>
          </p>
        </div>
        <div className="w-[30%] text-right text-[12px] text-gray-500">
          <p>
            Issued: Jan 2024
            <br />
            No Expiry
          </p>
          <p>
            Issued: Dec 2023
            <br />
            No Expiry
          </p>
        </div>
      </div>

      {/* Additional Sections */}
      <h2 className="text-[20px] font-bold text-blue-800 border-b-2 border-blue-800 pb-1 mb-2 mt-5">
        Additional Information
      </h2>
      <div className="flex">
        <div className="w-[65%] text-[12px]">
          <p className="font-bold">Languages:</p>
          <ul className="list-disc pl-5">
            <li>English (Fluent)</li>
            <li>Vietnamese (Native)</li>
          </ul>
          <p className="font-bold mt-2">Hobbies & Interests:</p>
          <ul className="list-disc pl-5">
            <li>Coding, Photography, Yoga</li>
          </ul>
          <p className="font-bold mt-2">Achievements & Awards:</p>
          <ul className="list-disc pl-5">
            <li>Dean’s List, UIC, 2023</li>
          </ul>
        </div>
        <div className="w-[30%] text-right text-[12px] text-gray-500">
          <p>Fluency: C2</p>
          <p>Years Active: 2+</p>
          <p>Award Date: Dec 2023</p>
        </div>
      </div>
    </div>
  );
};

export default ExpResume7;
