// src/components/Resume15.js
import React from "react";

const Resume15 = () => {
  return (
    <div className=" font-['Montserrat',sans-serif] w-[794px] mx-auto my-[20px] p-5 bg-white overflow-x-hidden">
      {/* Header */}
      <div className="bg-[#f4a261] text-white p-5 -mx-5 -mt-5 mb-[15px] text-center">
        <h1 className="text-[26px] font-bold m-0">Olivia Grace Taylor</h1>
        <p className="text-[16px] m-[0px_0px_10px_0px] font-bold ">
          UX Designer
        </p>
        <p className="text-[12px] m-[5px_0]">
          Phone: (222) 333-4444 | Email:{" "}
          <a
            href="mailto:olivia.taylor@email.com"
            className="text-white no-underline hover:underline"
          >
            olivia.taylor@email.com
          </a>
        </p>
        <p className="text-[12px] m-[5px_0]">
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/oliviataylor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline hover:underline"
          >
            linkedin.com/in/oliviataylor
          </a>{" "}
          | Portfolio:{" "}
          <a
            href="https://oliviataylor.design"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline hover:underline"
          >
            oliviataylor.design
          </a>
        </p>
        <p className="text-[12px] m-[5px_0]">
          321 Design Ave, Portland, OR 97209
        </p>
      </div>

      {/* Education */}
      <section className="mb-[15px]">
        <h2 className="text-[20px] font-bold text-[#264653] m-[15px_0_5px_0] border-b border-[#264653]">
          Education
        </h2>
        <div className="mt-[5px]">
          <div className="flex justify-between items-start">
            <div className="w-[65%]">
              <h3 className="text-[14px] font-bold text-[#264653] m-[10px_0_5px_0]">
                B.F.A. in Interaction Design
              </h3>
              <p className="text-[12px] m-[5px_0]">
                Portland State University, Interaction Design
              </p>
            </div>
            <div className="w-[30%] text-right">
              <p className="text-[12px] m-[5px_0]">Aug 2018 - May 2022</p>
              <p className="text-[12px] m-[5px_0]">CGPA: 3.7/4.0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-[15px]">
        <h2 className="text-[20px] font-bold text-[#264653] m-[15px_0_5px_0] border-b border-[#264653]">
          Projects
        </h2>
        <div className="mt-[5px]">
          <div className="flex justify-between items-start">
            <div className="w-[65%]">
              <h3 className="text-[14px] font-bold text-[#264653] m-[10px_0_5px_0]">
                Mobile Banking App Redesign
              </h3>
              <p className="text-[12px] m-[5px_0]">
                Technologies: Figma, Adobe XD
              </p>
              <p className="text-[12px] m-[5px_0]">
                GitHub:{" "}
                <a
                  href="https://github.com/oliviataylor/banking-redesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f4a261] no-underline hover:underline"
                >
                  github.com/oliviataylor/banking-redesign
                </a>
              </p>
              <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
                <li>Redesigned UI for a banking app, improving usability</li>
                <li>Conducted user testing with 50+ participants</li>
                <li>Increased user satisfaction by 35% per feedback</li>
              </ul>
            </div>
            <div className="w-[30%] text-right">
              <p className="text-[12px] m-[5px_0]">Jan 2023 - Mar 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-[15px]">
        <h2 className="text-[20px] font-bold text-[#264653] m-[15px_0_5px_0] border-b border-[#264653]">
          Work Experience
        </h2>
        <div className="mt-[5px]">
          <div className="flex justify-between items-start">
            <div className="w-[65%]">
              <h3 className="text-[14px] font-bold text-[#264653] m-[10px_0_5px_0]">
                UX Design Intern
              </h3>
              <p className="text-[12px] m-[5px_0]">DesignWorks</p>
              <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
                <li>Created wireframes and prototypes in Figma</li>
                <li>Collaborated on 3 client projects with design team</li>
                <li>Reduced design iteration time by 20%</li>
              </ul>
            </div>
            <div className="w-[30%] text-right">
              <p className="text-[12px] m-[5px_0]">Jun 2021 - Aug 2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-[15px]">
        <h2 className="text-[20px] font-bold text-[#264653] m-[15px_0_5px_0] border-b border-[#264653]">
          Certifications
        </h2>
        <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
          <li>
            UX Design Professional - UXCert, Issued: Nov 2023 (
            <a
              href="https://uxcert.org/cert321"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f4a261] no-underline hover:underline"
            >
              uxcert.org/cert321
            </a>
            )
          </li>
          <li>Google UX Design Certificate - Google, Issued: Apr 2022</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="mb-[15px]">
        <h2 className="text-[20px] font-bold text-[#264653] m-[15px_0_5px_0] border-b border-[#264653]">
          Skills
        </h2>
        <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
          <li>Technical: Figma, Adobe XD, Sketch, Prototyping</li>
          <li>Soft: Creativity, User Empathy, Collaboration</li>
        </ul>
      </section>

      {/* Profile Summary */}
      <section className="mb-[15px]">
        <h2 className="text-[20px] font-bold text-[#264653] m-[15px_0_5px_0] border-b border-[#264653]">
          Profile Summary
        </h2>
        <p className="text-[12px] m-[5px_0]">
          UX Designer with a knack for user-centered design in Figma. Enhanced
          app usability and team efficiency.
        </p>
      </section>

      {/* Additional Information */}
      <section className="mb-[15px]">
        <h2 className="text-[20px] font-bold text-[#264653] m-[15px_0_5px_0] border-b border-[#264653]">
          Additional Information
        </h2>
        <p className="text-[12px] m-[5px_0]">
          <strong>Languages:</strong> English (Fluent), German (Beginner)
        </p>
        <p className="text-[12px] m-[5px_0]">
          <strong>Hobbies & Interests:</strong> Sketching, Travel, UI Trends
        </p>
        <p className="text-[12px] m-[5px_0]">
          <strong>Achievements:</strong>
        </p>
        <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
          <li>Best Design Award - PSU Showcase, 2022: Top UX project</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume15;
