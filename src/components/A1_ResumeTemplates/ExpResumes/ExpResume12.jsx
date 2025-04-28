import React from "react";

const ExpResume12 = () => {
  return (
    <div className="font-['Arial',sans-serif] text-gray-800 w-[794px] min-h-[1122px] mx-auto p-[20mm] box-border flex">
      {/* Sidebar */}
      <div className="w-[30%] bg-[#f3e5f5] p-5 text-[#333] relative">
        <div className="absolute top-5 bottom-5 right-0 w-1 bg-gradient-to-b from-[#ab47bc] to-[#7b1fa2]"></div>
        <h1 className="text-[26px] font-bold mb-4 text-[#7b1fa2] text-center leading-tight break-words">
          Arjun Mehta
        </h1>
        <div className="text-[12px] text-center font-normal">
          <p className="my-2">Mumbai, India, 400001</p>
          <p className="my-2">8765 432 109</p>
          <p className="my-2">
            <a
              href="mailto:arjun.mehta@email.com"
              className="text-[#333] no-underline hover:underline"
            >
              arjun.mehta@email.com
            </a>
          </p>
          <p className="my-2">
            <a
              href="https://linkedin.com/in/arjunmehta"
              className="text-[#333] no-underline hover:underline"
            >
              linkedin.com/in/arjunmehta
            </a>
          </p>
          <p className="my-2">
            <a
              href="https://github.com/arjunmehta"
              className="text-[#333] no-underline hover:underline"
            >
              github.com/arjunmehta
            </a>
          </p>
          <p className="my-2">
            <a
              href="https://arjunmehta.dev"
              className="text-[#333] no-underline hover:underline"
            >
              arjunmehta.dev
            </a>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-[70%] p-4 bg-white">
        {/* Objective */}
        <h2 className="text-[20px] font-bold uppercase mb-2 mt-0 text-[#7b1fa2] border-l-[3px] border-[#7b1fa2] pl-2">
          Objective
        </h2>
        <p className="text-[12px] text-justify">
          Motivated Mechanical Engineering graduate with expertise in product
          design, manufacturing processes, and 3D modeling, seeking an
          entry-level role to apply my skills in AutoCAD and SolidWorks. Eager
          to contribute to prototyping, automation, and team collaboration in a
          dynamic engineering environment.
        </p>

        {/* Education */}
        <h2 className="text-[20px] font-bold uppercase mb-2 mt-5 text-[#7b1fa2] border-l-[3px] border-[#7b1fa2] pl-2">
          Education
        </h2>
        <div className="mb-3">
          <div className="flex justify-between text-[14px] flex-wrap items-start">
            <span className="font-bold max-w-[70%] flex-1">
              B.E. in Mechanical Engineering (Robotics & Automation)
            </span>
            <span className="italic font-bold min-w-[100px] text-right flex-shrink-0">
              Jun 2020 - May 2024
            </span>
          </div>
          <div className="text-[14px] flex justify-between">
            <span className="font-normal">
              National Institute of Technology, Mumbai, India
            </span>
            <span className="text-[12px] italic font-normal">CGPA: 8.3/10</span>
          </div>
          <p className="text-[12px]">
            <span className="font-bold">Relevant Coursework:</span> Robotics,
            CAD/CAM, Manufacturing Processes, Finite Element Analysis
          </p>
        </div>

        {/* Internships */}
        <h2 className="text-[20px] font-bold uppercase mb-2 mt-5 text-[#7b1fa2] border-l-[3px] border-[#7b1fa2] pl-2">
          Internships
        </h2>
        <div className="mb-3">
          <div className="flex justify-between text-[14px] font-bold">
            <span>Design Intern</span>
            <span className="italic">Jun 2023 - Aug 2023</span>
          </div>
          <div className="text-[14px] font-bold text-[#555]">
            AutoTech Industries, Mumbai, India
          </div>
          <ul className="list-disc pl-5 text-[12px] mt-1 font-normal">
            <li>
              <i>Designed</i> 3D models of automotive parts using SolidWorks,
              enhancing product design accuracy.
            </li>
            <li>
              <i>Performed</i> stress analysis on components, improving
              durability by <b>10%</b> through finite element analysis.
            </li>
            <li>
              <i>Prepared</i> technical drawings and documentation for
              manufacturing processes, ensuring production readiness.
            </li>
          </ul>
        </div>

        {/* Projects */}
        <h2 className="text-[20px] font-bold uppercase mb-2 mt-5 text-[#7b1fa2] border-l-[3px] border-[#7b1fa2] pl-2">
          Projects
        </h2>
        <div className="mb-3">
          <div className="flex justify-between text-[14px] font-bold">
            <span>Automated Conveyor System</span>
            <span className="italic">Jan 2024 - Apr 2024</span>
          </div>
          <div className="text-[14px] font-bold text-[#555]">
            Final Year Project, NIT Mumbai, Mumbai, India
          </div>
          <p className="text-[12px]">
            <a
              href="https://github.com/arjunmehta/conveyor"
              className="text-[#333] no-underline hover:underline"
            >
              GitHub
            </a>
          </p>
          <p className="text-[12px] font-normal">
            Technologies: Arduino, Sensors, SolidWorks
          </p>
          <p className="text-[12px] font-normal">
            Summary: Developed a prototype for an automated conveyor system with
            real-time control.
          </p>
          <ul className="list-disc pl-5 text-[12px] mt-1 font-normal">
            <li>
              <i>Developed</i> a prototype using Arduino, sensors, and
              automation techniques.
            </li>
            <li>
              <i>Reduced</i> manual intervention by <b>30%</b>, optimizing
              manufacturing efficiency.
            </li>
            <li>
              <i>Presented</i> the project at a tech expo, winning{" "}
              <b>2nd place</b> for innovation.
            </li>
          </ul>
        </div>

        {/* Skills */}
        <h2 className="text-[20px] font-bold uppercase mb-2 mt-5 text-[#7b1fa2] border-l-[3px] border-[#7b1fa2] pl-2">
          Skills
        </h2>
        <div className="text-[12px] mb-4 font-normal">
          <div className="flex">
            <div className="w-[65%]">
              <p>
                <span className="font-bold">Technical Skills:</span> Product
                Design, 3D Modeling, Stress Analysis, Prototyping, Automation
              </p>
              <p>
                <span className="font-bold">Technical Proficiencies:</span>{" "}
                AutoCAD, SolidWorks, MATLAB, Arduino, MS Office
              </p>
              <p>
                <span className="font-bold">Soft Skills:</span> Problem-Solving,
                Team Collaboration, Communication, Time Management
              </p>
            </div>
            <div className="w-[30%] text-right">
              <p>Proficiency: Intermediate</p>
            </div>
          </div>
        </div>

        {/* Achievements & Certifications */}
        <h2 className="text-[20px] font-bold uppercase mb-2 mt-5 text-[#7b1fa2] border-l-[3px] border-[#7b1fa2] pl-2">
          Achievements & Certifications
        </h2>
        <div className="text-[12px] font-normal">
          <div className="flex">
            <div className="w-[65%]">
              <ul className="list-disc pl-5">
                <li>
                  Certified in AutoCAD - Udemy
                  <br />
                  <a
                    href="https://udemy.com/verify/autocad"
                    className="text-[#333] no-underline hover:underline"
                  >
                    Verify
                  </a>
                </li>
                <li>
                  Won <b>2nd place</b> in Tech Expo 2024 for Automated Conveyor
                  System project.
                </li>
                <li>
                  Finite Element Analysis - Coursera
                  <br />
                  <a
                    href="https://coursera.org/verify/fea"
                    className="text-[#333] no-underline hover:underline"
                  >
                    Verify
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-[30%] text-right italic">
              <p>
                Issued: Jul 2023
                <br />
                No Expiry
              </p>
              <p>Apr 2024</p>
              <p>
                Issued: Jun 2023
                <br />
                No Expiry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpResume12;
