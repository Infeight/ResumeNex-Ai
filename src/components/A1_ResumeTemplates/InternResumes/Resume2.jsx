import React from "react";

const Resume2 = () => {
  return (
    <div className="font-sans w-[794px] mx-auto my-[35px] p-5 bg-[#f9fbfc] text-[#444] leading-[1.7] overflow-x-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#dfe9f3] to-[#b3cde0] p-[30px] text-center border-b-[3px] border-[#6497b1] shadow-md">
        <h1 className="text-[32px] font-bold text-[#003366]">Ava Patel</h1>
        <div className="text-[14px] mt-[10px] text-[#005b96]">
          <p>
            <a href="mailto:ava.patel@email.com" className="hover:underline">
              ava.patel@email.com
            </a>{" "}
            | +1 303 555-1234 | Denver, CO |{" "}
            <a
              href="https://linkedin.com/in/avapatel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/avapatel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </header>

      {/* Summary */}
      <section className="bg-white p-[25px] my-[25px] rounded-lg shadow-sm">
        <h2 className="text-[20px] font-semibold text-[#005b96] border-b-2 border-dashed border-[#6497b1] pb-[5px]">
          Summary
        </h2>
        <p className="text-[14px] mt-[15px]">
          Computer Science student proficient in Python, Java, and software
          development. Seeking a Software Engineer Intern role to apply coding,
          debugging, and innovative problem-solving skills.
        </p>
      </section>

      {/* Skills */}
      <section className="bg-white p-[25px] my-[25px] rounded-lg shadow-sm">
        <h2 className="text-[20px] font-semibold text-[#005b96] border-b-2 border-dashed border-[#6497b1] pb-[5px]">
          Skills
        </h2>
        <ul className="list-disc list-inside text-[14px] mt-[15px] leading-[1.8]">
          <li>
            <strong>Languages:</strong> Python, Java, JavaScript
          </li>
          <li>
            <strong>Tools:</strong> Git, GitHub, VS Code
          </li>
          <li>
            <strong>Competencies:</strong> Software Development, Debugging,
            Problem-Solving
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section className="bg-white p-[25px] my-[25px] rounded-lg shadow-sm">
        <h2 className="text-[20px] font-semibold text-[#005b96] border-b-2 border-dashed border-[#6497b1] pb-[5px]">
          Projects
        </h2>
        <div className="mt-[15px]">
          <h3 className="text-[16px] font-bold">Task Manager App</h3>
          <p className="text-[14px]">Personal Project | Jan 2024 – Mar 2024</p>
          <ul className="list-disc list-inside text-[14px] mt-[5px] leading-[1.8]">
            <li>
              Developed a Python CLI app with file I/O for task management.
            </li>
            <li>Debugged for seamless functionality.</li>
          </ul>
        </div>

        <div className="mt-[20px]">
          <h3 className="text-[16px] font-bold">Portfolio Website</h3>
          <p className="text-[14px]">
            University Project | Sep 2023 – Dec 2023
          </p>
          <ul className="list-disc list-inside text-[14px] mt-[5px] leading-[1.8]">
            <li>Built a responsive site with HTML, CSS, JavaScript.</li>
            <li>Hosted on GitHub Pages with optimization.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="bg-white p-[25px] my-[25px] rounded-lg shadow-sm">
        <h2 className="text-[20px] font-semibold text-[#005b96] border-b-2 border-dashed border-[#6497b1] pb-[5px]">
          Education
        </h2>
        <p className="text-[14px] mt-[15px]">
          B.S. in Computer Science (Expected May 2026)
          <br />
          University of Colorado, Boulder, CO
        </p>
      </section>

      {/* Hobbies */}
      <section className="bg-white p-[25px] my-[25px] rounded-lg shadow-sm">
        <h2 className="text-[20px] font-semibold text-[#005b96] border-b-2 border-dashed border-[#6497b1] pb-[5px]">
          Hobbies
        </h2>
        <ul className="list-disc list-inside text-[14px] mt-[15px] leading-[1.8]">
          <li>Building open-source tools</li>
          <li>Hiking</li>
        </ul>
      </section>

      {/* Languages */}
      <section className="bg-white p-[25px] my-[25px] rounded-lg shadow-sm">
        <h2 className="text-[20px] font-semibold text-[#005b96] border-b-2 border-dashed border-[#6497b1] pb-[5px]">
          Languages
        </h2>
        <ul className="list-disc list-inside text-[14px] mt-[15px] leading-[1.8]">
          <li>English (Fluent)</li>
          <li>Spanish (Intermediate)</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume2;
