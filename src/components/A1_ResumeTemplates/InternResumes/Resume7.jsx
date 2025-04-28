import React from "react";

const Resume7 = () => {
  return (
    <div className="font-sans w-[210mm] h-[297mm] mx-auto p-[5mm] bg-[#f8fafc] text-[#2d2d2d]">
      {/* Header */}
      <div className="bg-[#dbeafe] p-[12px] text-center border-b-2 border-[#93c5fd] mb-[15px]">
        <h1 className="text-[24px] font-bold text-[#1e3a8a] mb-[5px]">
          SOPHIA NGUYEN
        </h1>
        <div className="flex flex-wrap justify-center gap-[15px] text-[14px] text-[#1e3a8a]">
          <span>sophia.nguyen@email.com</span>
          <span>•</span>
          <span>312-555-0444</span>
          <span>•</span>
          <span>Chicago, IL</span>
          <span>•</span>
          <span>linkedin.com/in/sophianguyen</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-[15px] bg-white p-[12px] border border-[#e2e8f0]">
        <h2 className="text-[16px] font-bold text-[#1e3a8a] mb-[8px] border-b border-[#93c5fd] pb-[3px]">
          SUMMARY
        </h2>
        <p className="text-[14px]">
          Mechanical engineering student skilled in CAD, simulation, and
          prototyping with hands-on experience in FEA and thermal analysis.
          Seeking internship to apply technical skills in product development.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-[15px] bg-white p-[12px] border border-[#e2e8f0]">
        <h2 className="text-[16px] font-bold text-[#1e3a8a] mb-[8px] border-b border-[#93c5fd] pb-[3px]">
          TECHNICAL SKILLS
        </h2>
        <div className="grid grid-cols-2 gap-[10px] text-[14px]">
          <div>
            <h3 className="font-semibold text-[#1e3a8a]">Design Tools</h3>
            <p>SolidWorks, AutoCAD, ANSYS</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#1e3a8a]">Analysis</h3>
            <p>FEA, CFD, Thermal Analysis</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#1e3a8a]">Programming</h3>
            <p>MATLAB, Python</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#1e3a8a]">Prototyping</h3>
            <p>3D Printing, CNC Machining</p>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mb-[15px] bg-white p-[12px] border border-[#e2e8f0]">
        <h2 className="text-[16px] font-bold text-[#1e3a8a] mb-[8px] border-b border-[#93c5fd] pb-[3px]">
          EXPERIENCE
        </h2>
        <div className="mb-[12px]">
          <div className="flex justify-between mb-[5px]">
            <h3 className="text-[15px] font-bold">
              Mechanical Engineering Intern
            </h3>
            <span className="text-[14px] font-semibold">
              Jan 2024 - Jun 2024
            </span>
          </div>
          <p className="text-[14px] text-[#1e3a8a] mb-[5px]">
            EngiTech Corp., Chicago, IL
          </p>
          <ul className="list-disc pl-[20px] text-[14px] space-y-[5px]">
            <li>
              Designed gear assembly in SolidWorks, reducing weight by 10% while
              maintaining structural integrity
            </li>
            <li>
              Performed FEA simulations in ANSYS to optimize component
              durability
            </li>
            <li>Created technical documentation for manufacturing processes</li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-[15px] bg-white p-[12px] border border-[#e2e8f0]">
        <h2 className="text-[16px] font-bold text-[#1e3a8a] mb-[8px] border-b border-[#93c5fd] pb-[3px]">
          PROJECTS
        </h2>
        <div className="mb-[12px]">
          <div className="flex justify-between mb-[5px]">
            <h3 className="text-[15px] font-bold">Solar Car Model</h3>
            <span className="text-[14px] font-semibold">
              Mar 2024 - May 2024
            </span>
          </div>
          <ul className="list-disc pl-[20px] text-[14px] space-y-[5px]">
            <li>
              Designed aerodynamic chassis in AutoCAD with 15% drag reduction
            </li>
            <li>
              Prototyped using 3D printing and tested efficiency with MATLAB
              simulations
            </li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between mb-[5px]">
            <h3 className="text-[15px] font-bold">Heat Exchanger Design</h3>
            <span className="text-[14px] font-semibold">
              Oct 2023 - Dec 2023
            </span>
          </div>
          <ul className="list-disc pl-[20px] text-[14px] space-y-[5px]">
            <li>
              Modeled heat exchanger in SolidWorks with thermal analysis in
              ANSYS
            </li>
            <li>
              Achieved 15% improvement in heat transfer rate through design
              optimization
            </li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mb-[15px] bg-white p-[12px] border border-[#e2e8f0]">
        <h2 className="text-[16px] font-bold text-[#1e3a8a] mb-[8px] border-b border-[#93c5fd] pb-[3px]">
          EDUCATION
        </h2>
        <div className="flex justify-between mb-[5px]">
          <h3 className="text-[15px] font-bold">
            B.S. in Mechanical Engineering
          </h3>
          <span className="text-[14px] font-semibold">Expected May 2026</span>
        </div>
        <p className="text-[14px] text-[#1e3a8a]">
          University of Illinois at Chicago
        </p>
        <p className="text-[14px]">GPA: 3.7/4.0 (8.5/10 scale)</p>
      </div>
    </div>
  );
};

export default Resume7;
