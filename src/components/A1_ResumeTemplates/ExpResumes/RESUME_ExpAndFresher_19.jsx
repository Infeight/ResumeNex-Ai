// src/components/RESUME_ExpAndFresher_19.js
import React from "react";

const RESUME_ExpAndFresher_19 = () => {
  return (
    <div className="font-['Calibri','Arial',sans-serif] m-0 p-0 bg-[#f4f4f4] flex justify-center items-start">
      <div className="w-[210mm] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] p-[15mm] box-border text-[12px] leading-[1.4]">
        {/* Header */}
        <div className="text-center mb-[15px]">
          <h1 className="text-[24px] font-bold uppercase m-0">
            Ellie Thompson
          </h1>
          <div className="text-[14px] my-[5px]">Full Stack Developer</div>
          <div className="text-[12px] mt-[5px]">
            <p>
              +1-555-555-5555 |{" "}
              <a
                href="mailto:ellie.thompson@gmail.com"
                className="text-[#0000EE] underline"
              >
                ellie.thompson@gmail.com
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/elliethompson"
                className="text-[#0000EE] underline"
              >
                github.com/elliethompson
              </a>{" "}
              | San Francisco, CA
              <br />
              <a
                href="https://linkedin.com/in/elliethompson"
                className="text-[#0000EE] underline"
              >
                linkedin.com/in/elliethompson
              </a>{" "}
              |{" "}
              <a
                href="https://elliethompson.dev"
                className="text-[#0000EE] underline"
              >
                elliethompson.dev
              </a>{" "}
              |{" "}
              <a
                href="https://figma.com/@elliethompson"
                className="text-[#0000EE] underline"
              >
                figma.com/@elliethompson
              </a>{" "}
              |{" "}
              <a
                href="https://leetcode.com/elliethompson"
                className="text-[#0000EE] underline"
              >
                leetcode.com/elliethompson
              </a>
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-[15px]">
          <h2 className="text-[16px] font-bold uppercase text-center mb-[5px]">
            Summary
          </h2>
          <hr className="border-0 border-t border-black mb-[10px]" />
          <p className="text-justify">
            Full Stack Developer with 10+ years of experience in JavaScript,
            React, Node.js, and Python. Led a $500K SaaS project, achieving a
            40% performance improvement through optimized algorithms. Increased
            client revenue by 50% by implementing scalable web solutions.
            Proficient in Agile methodologies and cross-functional team
            leadership.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-[15px]">
          <h2 className="text-[16px] font-bold uppercase text-center mb-[5px]">
            Experience
          </h2>
          <hr className="border-0 border-t border-black mb-[10px]" />
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[14px]">
              CodeZap Technologies <span>2018 - Present</span>
            </div>
            <p className="my-[3px] font-bold">Senior Full Stack Developer</p>
            <ul className="my-[5px] pl-[20px]">
              <li>
                Leading a team of 8 developers to build and maintain 12+
                enterprise web applications using React and Node.js.
              </li>
              <li>
                Designed a microservices architecture, reducing latency by 30%
                for 5 high-traffic platforms.
              </li>
              <li>
                Developed automated CI/CD pipelines with Azure DevOps, cutting
                deployment time by 40%.
              </li>
              <li>
                Enhanced UI/UX for 10+ clients, achieving 90+ Lighthouse scores.
              </li>
            </ul>
          </div>
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[14px]">
              WebFlow Solutions <span>2013 - 2018</span>
            </div>
            <p className="my-[3px] font-bold">Full Stack Developer</p>
            <ul className="my-[5px] pl-[20px]">
              <li>
                Managed end-to-end development of 15+ client websites using Vue,
                React, and MongoDB.
              </li>
              <li>
                Boosted revenue by 35% by optimizing backend logic for 25+
                features.
              </li>
              <li>
                Implemented SQL Server maintenance jobs, ensuring 99.9% uptime
                for 10 clients.
              </li>
              <li>
                Trained 5 junior developers, improving team delivery speed by
                20%.
              </li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mb-[15px]">
          <h2 className="text-[16px] font-bold uppercase text-center mb-[5px]">
            Education
          </h2>
          <hr className="border-0 border-t border-black mb-[10px]" />
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[14px]">
              Stanford University <span>2008 - 2009</span>
            </div>
            <div className="flex justify-between text-[14px]">
              M.S. in Computer Science{" "}
              <span className="font-normal">CGPA: 3.8/4.0</span>
            </div>
          </div>
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[14px]">
              University of California, Berkeley <span>2004 - 2008</span>
            </div>
            <div className="flex justify-between text-[14px]">
              B.S. in Computer Science{" "}
              <span className="font-normal">CGPA: 3.7/4.0</span>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-[15px]">
          <h2 className="text-[16px] font-bold uppercase text-center mb-[5px]">
            Projects
          </h2>
          <hr className="border-0 border-t border-black mb-[10px]" />
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[14px]">
              <span className="text-[#808080] no-underline">
                AI-Powered Analytics Dashboard
              </span>{" "}
              <span>Jan 2022 - Jun 2023</span>
            </div>
            <ul className="my-[5px] pl-[20px]">
              <li>
                Developed a real-time analytics platform using React, Python,
                and AWS.
              </li>
              <li>
                Integrated machine learning models with Scikit-learn, improving
                data accuracy by 25%.
              </li>
              <li>Deployed on AWS Lambda, handling 10,000+ daily requests.</li>
            </ul>
          </div>
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[14px]">
              <span className="text-[#808080] no-underline">
                E-Commerce Backend
              </span>{" "}
              <span>Mar 2020 - Dec 2020</span>
            </div>
            <ul className="my-[5px] pl-[20px]">
              <li>
                Built a scalable Node.js backend with MongoDB for a retail
                platform.
              </li>
              <li>Optimized APIs, reducing response times by 35%.</li>
              <li>
                Implemented secure payment gateways, supporting 5,000+
                transactions daily.
              </li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-[15px]">
          <h2 className="text-[16px] font-bold uppercase text-center mb-[5px]">
            Skills
          </h2>
          <hr className="border-0 border-t border-black mb-[10px]" />
          <div className="my-[5px]">
            <p>
              <span className="font-bold">Client-Side:</span> HTML, CSS,
              JavaScript, React, Vue, Angular, TypeScript, Redux, Bootstrap
            </p>
            <p>
              <span className="font-bold">Server-Side:</span> Node.js, Python,
              MongoDB, MySQL, AWS, Redis, TensorFlow, Scikit-learn
            </p>
            <p>
              <span className="font-bold">Development & Operations:</span> Git,
              Azure DevOps, Jest, Mocha, Agile, Scrum
            </p>
          </div>
        </div>

        {/* Open Source Work */}
        <div className="mb-[15px]">
          <h2 className="text-[16px] font-bold uppercase text-center mb-[5px]">
            Open Source Work
          </h2>
          <hr className="border-0 border-t border-black mb-[10px]" />
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[14px]">
              <span className="text-[#808080] no-underline">
                OpenFlow-Based Firewall
              </span>{" "}
              <span>Aug 2012 - Dec 2013</span>
            </div>
            <ul className="my-[5px] pl-[20px]">
              <li>
                Developed a proactive firewall using Python and Node.js with
                OpenFlow protocol.
              </li>
              <li>
                Configured static rules using MD-SAL for enhanced security.
              </li>
              <li>
                Engineered a rule evaluation system at OSI layer 7 with POX
                controller.
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-[15px]">
          <h2 className="text-[16px] font-bold uppercase text-center mb-[5px]">
            Certifications
          </h2>
          <hr className="border-0 border-t border-black mb-[10px]" />
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[14px]">
              AWS Certified Solutions Architect <span>Issued: Mar 2021</span>
            </div>
            <p className="my-[3px]">
              <a
                href="https://aws.amazon.com/verification/architect"
                className="text-[#0000EE] underline"
              >
                aws.amazon.com/verification/architect
              </a>
            </p>
          </div>
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[14px]">
              Professional Scrum Master <span>Issued: Sep 2019</span>
            </div>
            <p className="my-[3px]">
              <a
                href="https://scrum.org/cert/psm"
                className="text-[#0000EE] underline"
              >
                scrum.org/cert/psm
              </a>
            </p>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-[15px]">
          <h2 className="text-[16px] font-bold uppercase text-center mb-[5px]">
            Languages
          </h2>
          <hr className="border-0 border-t border-black mb-[10px]" />
          <p className="my-[5px]">English (Native), German (Intermediate)</p>
        </div>

        {/* Hobbies */}
        <div className="mb-[15px]">
          <h2 className="text-[16px] font-bold uppercase text-center mb-[5px]">
            Hobbies & Interests
          </h2>
          <hr className="border-0 border-t border-black mb-[10px]" />
          <p className="my-[5px]">
            Open-Source Contribution, Cycling, Data Science
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-[15px]">
          <h2 className="text-[16px] font-bold uppercase text-center mb-[5px]">
            Achievements & Awards
          </h2>
          <hr className="border-0 border-t border-black mb-[10px]" />
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[14px]">
              Tech Excellence Award <span>SF Tech Summit, 2022</span>
            </div>
            <p className="my-[3px]">
              Recognized for leading innovative web solutions.
            </p>
          </div>
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[14px]">
              Dean’s List <span>Stanford University, 2008-2009</span>
            </div>
            <p className="my-[3px]">Honored for academic excellence.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_19;
