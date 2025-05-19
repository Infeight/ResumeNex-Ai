import React from "react";

const RESUME_ExpAndFresher_6 = () => {
  return (
    <div className="font-arial text-gray-800 w-[794px] min-h-[1122px] mx-auto p-5 leading-relaxed">
      {/* Personal Info */}
      <div className="mb-4">
        <h1 className="text-[26px] font-bold mb-1">Alex Turner</h1>
        <p className="text-[12px]">
          Denver, CO, 80201 | 303-555-0101 |{" "}
          <a
            href="mailto:alex.turner@email.com"
            className="text-gray-800 hover:underline"
          >
            alex.turner@email.com
          </a>{" "}
          |{" "}
          <a
            href="https://linkedin.com/in/alexturner"
            className="text-gray-800 hover:underline"
          >
            linkedin.com/in/alexturner
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/alexturner"
            className="text-gray-800 hover:underline"
          >
            github.com/alexturner
          </a>{" "}
          |{" "}
          <a
            href="https://alexturner.dev"
            className="text-gray-800 hover:underline"
          >
            alexturner.dev
          </a>
        </p>
      </div>

      {/* Profile Summary */}
      <h2 className="text-[20px] font-bold border-b-2 border-black pb-1 mb-2 mt-5">
        Profile Summary
      </h2>
      <div className="flex mb-4">
        <div className="w-[65%] text-[12px]">
          <p>
            Proactive software engineer with 6 years of experience in full-stack
            development, specializing in Java and Angular. Delivered scalable
            solutions for e-commerce platforms, boosting performance by 40%.
          </p>
        </div>
        <div className="w-[30%] text-right text-[12px]">
          <p>Char Count: 210</p>
        </div>
      </div>

      {/* Work Experience */}
      <h2 className="text-[20px] font-bold border-b-2 border-black pb-1 mb-2 mt-5">
        Work Experience
      </h2>
      <div className="mb-4">
        <div className="flex mb-3">
          <div className="w-[65%]">
            <h3 className="text-[14px] font-bold">Software Engineer</h3>
            <p className="text-[12px] italic">CodeZap, Denver, CO</p>
            <ul className="list-disc pl-5 text-[12px]">
              <li>
                Built RESTful APIs with Java Spring Boot, reducing server
                response time by 25%.
              </li>
              <li>
                Developed Angular-based front-end features for 50K+ users.
              </li>
            </ul>
          </div>
          <div className="w-[30%] text-right text-[12px] italic">
            <p>Aug 2019 - Present</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-[65%]">
            <h3 className="text-[14px] font-bold">Junior Developer</h3>
            <p className="text-[12px] italic">SoftPeak, Boulder, CO</p>
            <ul className="list-disc pl-5 text-[12px]">
              <li>
                Optimized database queries with MySQL, cutting load times 15%.
              </li>
              <li>Collaborated on agile teams to meet project deadlines.</li>
            </ul>
          </div>
          <div className="w-[30%] text-right text-[12px] italic">
            <p>Jun 2017 - Jul 2019</p>
          </div>
        </div>
      </div>

      {/* Education */}
      <h2 className="text-[20px] font-bold border-b-2 border-black pb-1 mb-2 mt-5">
        Education
      </h2>
      <div className="flex mb-4">
        <div className="w-[65%]">
          <h3 className="text-[14px] font-bold">B.S. in Computer Science</h3>
          <p className="text-[12px] italic">
            University of Colorado, Boulder, CO
          </p>
          <p className="text-[12px]">CGPA: 3.7/4.0</p>
        </div>
        <div className="w-[30%] text-right text-[12px] italic">
          <p>Aug 2013 - May 2017</p>
        </div>
      </div>

      {/* Projects */}
      <h2 className="text-[20px] font-bold border-b-2 border-black pb-1 mb-2 mt-5">
        Projects
      </h2>
      <div className="mb-4">
        <div className="flex mb-3">
          <div className="w-[65%]">
            <h3 className="text-[14px] font-bold">E-commerce Platform</h3>
            <p className="text-[12px]">
              <a
                href="https://github.com/alexturner/ecommerce"
                className="text-gray-800 hover:underline"
              >
                GitHub
              </a>
            </p>
            <p className="text-[12px]">
              Technologies: Java, Spring Boot, Angular
            </p>
            <p className="text-[12px]">
              Summary: Developed a scalable e-commerce platform with secure
              payment integration.
            </p>
            <ul className="list-disc pl-5 text-[12px]">
              <li>Reduced checkout latency by 20% with optimized APIs.</li>
            </ul>
          </div>
          <div className="w-[30%] text-right text-[12px] italic">
            <p>Jan 2023 - Jun 2023</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <h2 className="text-[20px] font-bold border-b-2 border-black pb-1 mb-2 mt-5">
        Skills
      </h2>
      <div className="flex mb-4">
        <div className="w-[65%] text-[12px]">
          <p className="font-bold">Technical Skills:</p>
          <ul className="list-disc pl-5">
            <li>Java, Angular, MySQL, Spring Boot</li>
          </ul>
          <p className="font-bold mt-2">Soft Skills:</p>
          <ul className="list-disc pl-5">
            <li>Teamwork, Problem-Solving</li>
          </ul>
        </div>
        <div className="w-[30%] text-right text-[12px]">
          <p>Proficiency: Advanced</p>
        </div>
      </div>

      {/* Certifications */}
      <h2 className="text-[20px] font-bold border-b-2 border-black pb-1 mb-2 mt-5">
        Certifications
      </h2>
      <div className="flex mb-4">
        <div className="w-[65%] text-[12px]">
          <p>
            <span className="font-bold">Java SE 11 Developer</span> - Oracle
            <br />
            <a
              href="https://oracle.com/verify/java"
              className="text-gray-800 hover:underline"
            >
              Verify
            </a>
          </p>
        </div>
        <div className="w-[30%] text-right text-[12px] italic">
          <p>
            Issued: Jul 2022
            <br />
            No Expiry
          </p>
        </div>
      </div>

      {/* Additional Sections */}
      <h2 className="text-[20px] font-bold border-b-2 border-black pb-1 mb-2 mt-5">
        Additional Information
      </h2>
      <div className="flex">
        <div className="w-[65%] text-[12px]">
          <p className="font-bold">Languages:</p>
          <ul className="list-disc pl-5">
            <li>English (Native)</li>
          </ul>
          <p className="font-bold mt-2">Hobbies & Interests:</p>
          <ul className="list-disc pl-5">
            <li>Hiking, Open-Source Contribution</li>
          </ul>
          <p className="font-bold mt-2">Achievements & Awards:</p>
          <ul className="list-disc pl-5">
            <li>Employee of the Year, CodeZap, 2023</li>
          </ul>
        </div>
        <div className="w-[30%] text-right text-[12px] italic">
          <p>Fluency: Native</p>
          <p>Years Active: 3+</p>
          <p>Award Date: Dec 2023</p>
        </div>
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_6;
