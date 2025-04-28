// src/components/Resume3.js
import React from "react";

const Resume3 = () => {
  return (
    <div className="font-['Lora',serif] w-[794px] mx-auto my-[35px] bg-[#fffef7] p-[30px] border-2 border-[#2d6a4f] rounded-[8px] overflow-x-hidden text-[#3d3d3d]">
      {/* Header */}
      <div className="text-center pb-[15px] border-b-2 border-[#ff6f61]">
        <h1 className="text-[2.3em] font-bold text-[#ff6f61] m-0">
          Michael David Lee
        </h1>
        <p className="text-[1em] font-normal m-[6px_0] text-[#526a5f]">
          Cloud Engineer
        </p>
        <p className="text-[1em] font-normal m-[6px_0] text-[#526a5f]">
          (333) 555-7890 |{" "}
          <a
            href="mailto:michael.lee@email.com"
            className="text-[#2d6a4f] no-underline hover:underline"
          >
            michael.lee@email.com
          </a>
        </p>
        <p className="text-[1em] font-normal m-[6px_0] text-[#526a5f]">
          <a
            href="https://linkedin.com/in/michaellee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d6a4f] no-underline hover:underline"
          >
            linkedin.com/in/michaellee
          </a>{" "}
          |{" "}
          <a
            href="https://michaellee.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d6a4f] no-underline hover:underline"
          >
            michaellee.cloud
          </a>
        </p>
        <p className="text-[1em] font-normal m-[6px_0] text-[#526a5f]">
          789 Cloud Street, Seattle, WA 98101
        </p>
      </div>

      {/* Education */}
      <section className="mb-[25px]">
        <h2 className="text-[1.5em] font-bold text-[#2d6a4f] mt-[30px] pb-[5px] border-b border-[#2d6a4f]">
          Education
        </h2>
        <div className="m-[12px_0] p-[12px] border-l-3 border-[#ff6f61]">
          <h3 className="text-[1.15em] font-bold text-[#3f5d49] m-0">
            B.Tech in Information Technology
          </h3>
          <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
            University of Washington, IT | CGPA: 3.9/4.0
          </p>
          <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
            Sep 2019 - Jun 2023
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-[25px]">
        <h2 className="text-[1.5em] font-bold text-[#2d6a4f] mt-[30px] pb-[5px] border-b border-[#2d6a4f]">
          Projects
        </h2>
        <div className="m-[12px_0] p-[12px] border-l-3 border-[#ff6f61]">
          <h3 className="text-[1.15em] font-bold text-[#3f5d49] m-0">
            Cloud Backup System
          </h3>
          <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
            Technologies: AWS, Python, Docker | Mar 2023 - May 2023
          </p>
          <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
            <a
              href="https://github.com/michaellee/cloud-backup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2d6a4f] no-underline hover:underline"
            >
              github.com/michaellee/cloud-backup
            </a>
          </p>
          <ul className="list-square pl-[20px] m-[10px_0]">
            <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
              Designed an AWS-based backup system for 1TB data.
            </li>
            <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
              Automated backups with Python, saving 10 hrs/week.
            </li>
            <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
              Enhanced security with Docker containerization.
            </li>
          </ul>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-[25px]">
        <h2 className="text-[1.5em] font-bold text-[#2d6a4f] mt-[30px] pb-[5px] border-b border-[#2d6a4f]">
          Work Experience
        </h2>
        <div className="m-[12px_0] p-[12px] border-l-3 border-[#ff6f61]">
          <h3 className="text-[1.15em] font-bold text-[#3f5d49] m-0">
            Cloud Engineering Intern
          </h3>
          <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
            Microsoft | Jun 2022 - Aug 2022
          </p>
          <ul className="list-square pl-[20px] m-[10px_0]">
            <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
              Managed Azure deployments for 5+ internal apps.
            </li>
            <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
              Optimized cloud costs by 15% with resource tags.
            </li>
            <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
              Automated monitoring with scripts, reducing downtime.
            </li>
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-[25px]">
        <h2 className="text-[1.5em] font-bold text-[#2d6a4f] mt-[30px] pb-[5px] border-b border-[#2d6a4f]">
          Certifications
        </h2>
        <ul className="list-square pl-[20px] m-[10px_0]">
          <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
            <a
              href="https://aws.amazon.com/cert789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2d6a4f] no-underline hover:underline"
            >
              AWS Solutions Architect
            </a>{" "}
            - AWS, Issued: Oct 2023
          </li>
          <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
            Docker Certified Associate - Docker, Issued: Jul 2022, Expiry: Jul
            2025
          </li>
        </ul>
      </section>

      {/* Skills */}
      <section className="mb-[25px]">
        <h2 className="text-[1.5em] font-bold text-[#2d6a4f] mt-[30px] pb-[5px] border-b border-[#2d6a4f]">
          Skills
        </h2>
        <ul className="list-square pl-[20px] m-[10px_0]">
          <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
            Technical: AWS, Python, Docker, Kubernetes, Linux
          </li>
          <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
            Soft: Problem-Solving, Adaptability, Teamwork
          </li>
        </ul>
      </section>

      {/* Profile Summary */}
      <section className="mb-[25px]">
        <h2 className="text-[1.5em] font-bold text-[#2d6a4f] mt-[30px] pb-[5px] border-b border-[#2d6a4f]">
          Profile Summary
        </h2>
        <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
          Cloud Engineer adept in AWS and Docker. Streamlined processes and
          boosted efficiency in tech projects. (102 chars)
        </p>
      </section>

      {/* Additional Information */}
      <section className="mb-[25px]">
        <h2 className="text-[1.5em] font-bold text-[#2d6a4f] mt-[30px] pb-[5px] border-b border-[#2d6a4f]">
          Additional Information
        </h2>
        <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
          <strong>Languages:</strong> English (Native), Mandarin (Intermediate)
        </p>
        <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
          <strong>Hobbies & Interests:</strong> Cloud Computing, Cycling, Chess
        </p>
        <p className="text-[0.95em] font-normal m-[5px_0] text-[#5c6b66]">
          <strong>Achievements:</strong>
        </p>
        <ul className="list-square pl-[20px] m-[10px_0]">
          <li className="text-[0.95em] font-normal text-[#4a5852] m-[6px_0]">
            Innovator Award - Microsoft Internship, 2022: Best automation tool.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resume3;
