import React from "react";

const RESUME_ExpAndFresher_2 = () => {
  return (
    <div
      className="font-sans text-black bg-white"
      style={{ width: "794px", margin: "0 auto", padding: "20px" }}
    >
      {/* Header */}
      <h1 className="text-[26px] font-bold text-center m-0">Sai Patel</h1>
      <div className="text-[12px] text-center mb-[10px]">
        <p>
          Front-End Developer <br />
          Email:{" "}
          <a
            href="mailto:sai.patel@example.com"
            className="text-[#0000EE] underline"
          >
            sai.patel@example.com
          </a>{" "}
          | Phone: +91-91234-56789 <br />
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/saipatel23"
            className="text-[#0000EE] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/saipatel23
          </a>{" "}
          | GitHub:{" "}
          <a
            href="https://github.com/saipatel23"
            className="text-[#0000EE] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/saipatel23
          </a>{" "}
          <br />
          Portfolio:{" "}
          <a
            href="https://portfolio.saipatel.com"
            className="text-[#0000EE] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            portfolio.saipatel.com
          </a>{" "}
          | Figma:{" "}
          <a
            href="https://figma.com/@saipatel"
            className="text-[#0000EE] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            figma.com/@saipatel
          </a>{" "}
          | LeetCode:{" "}
          <a
            href="https://leetcode.com/saipatel"
            className="text-[#0000EE] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            leetcode.com/saipatel
          </a>{" "}
          <br />
          123 Tech Road, Mumbai, MH, 400001
        </p>
      </div>
      <hr className="border-t border-black my-[4px]" />

      {/* Profile Summary */}
      <section>
        <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">
          Profile Summary
        </h2>
        <p className="text-[12px] m-0">
          Motivated and detail-oriented Front-End Developer fresher with a
          strong foundation in creating responsive, user-friendly web
          interfaces. Skilled in modern JavaScript frameworks, HTML, and CSS,
          with hands-on internship experience in optimizing web applications.
          Eager to contribute to innovative projects and collaborate with
          dynamic teams.
        </p>
        <hr className="border-t border-black my-[4px]" />
      </section>

      {/* Education */}
      <section>
        <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">
          Education
        </h2>
        <div className="text-[12px] m-0 flex justify-between">
          <div>
            <span className="font-bold">B.E. in Information Technology</span>
            <br />
            XYZ Institute of Technology, Mumbai, MH
            <br />
            Stream: Web Development
          </div>
          <div className="text-right">
            June 2020 - May 2024
            <br />
            CGPA: 9.0/10.0
          </div>
        </div>
        <hr className="border-t border-black my-[4px]" />
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">
          Projects
        </h2>
        <div className="text-[12px] m-0">
          <div className="mb-[10px] flex justify-between">
            <div>
              <span className="font-bold">E-commerce Website</span>
              <br />
              Technologies: React.js, Tailwind CSS, Firebase
              <br />
              <a
                href="https://github.com/saipatel23/ecommerce"
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/saipatel23/ecommerce
              </a>
              <ul className="list-disc pl-[20px] m-0 mt-[3px]">
                <li>
                  Developed a responsive e-commerce platform with React.js.
                </li>
                <li>
                  Integrated Firebase for user authentication and payments.
                </li>
                <li>Optimized performance with lazy loading for images.</li>
              </ul>
            </div>
            <div className="text-right">
              January 2024 - March 2024
              <br />
              Team Size: 4
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="font-bold">Weather Dashboard</span>
              <br />
              Technologies: JavaScript, React, OpenWeatherMap API, CSS Grid
              <br />
              <a
                href="https://github.com/saipatel23/weather-dashboard"
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/saipatel23/weather-dashboard
              </a>
              <ul className="list-disc pl-[20px] m-0 mt-[3px]">
                <li>Built a real-time weather app with OpenWeatherMap API.</li>
                <li>Designed intuitive UI using CSS Grid and React.</li>
                <li>Added location-based updates and temperature toggles.</li>
              </ul>
            </div>
            <div className="text-right">
              September 2023 - November 2023
              <br />
              Users: 1000+
            </div>
          </div>
        </div>
        <hr className="border-t border-black my-[4px]" />
      </section>

      {/* Work Experience */}
      <section>
        <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">
          Work Experience
        </h2>
        <div className="text-[12px] m-0">
          <div className="mb-[10px] flex justify-between">
            <div>
              <span className="font-bold">Front-End Development Intern</span>
              <br />
              TechNova Solutions, Mumbai, MH
              <ul className="list-disc pl-[20px] m-0 mt-[3px]">
                <li>
                  Developed responsive web pages with React.js and Tailwind CSS.
                </li>
                <li>
                  Improved load time by 25% via CSS and image optimization.
                </li>
                <li>Integrated RESTful APIs for dynamic client dashboards.</li>
              </ul>
            </div>
            <div className="text-right">
              January 2024 - May 2024
              <br />
              Projects: 3
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="font-bold">Web Development Intern</span>
              <br />
              InnovateX, Pune, MH
              <ul className="list-disc pl-[20px] m-0 mt-[3px]">
                <li>
                  Built reusable UI components with JavaScript and Bootstrap.
                </li>
                <li>
                  Ensured cross-browser compatibility for Chrome, Firefox,
                  Safari.
                </li>
                <li>Implemented pixel-perfect designs from Figma mockups.</li>
              </ul>
            </div>
            <div className="text-right">
              June 2023 - August 2023
              <br />
              Clients: 2
            </div>
          </div>
        </div>
        <hr className="border-t border-black my-[4px]" />
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">
          Certifications
        </h2>
        <div className="text-[12px] m-0 flex justify-between">
          <div>
            <ul className="list-disc pl-[20px] m-0 mt-[3px]">
              <li>
                Front-End Development with React - Coursera
                <br />
                <a
                  href="https://coursera.org/certificates/frontend-react"
                  className="text-[#0000EE] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  coursera.org/certificates/frontend-react
                </a>
              </li>
              <li>
                Responsive Web Design - FreeCodeCamp
                <br />
                <a
                  href="https://freecodecamp.org/certification/responsive-web"
                  className="text-[#0000EE] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  freecodecamp.org/certification/responsive-web
                </a>
              </li>
            </ul>
          </div>
          <div className="text-right">
            Issued: March 2024
            <br />
            Issued: December 2023
            <br />
            No Expiry
          </div>
        </div>
        <hr className="border-t border-black my-[4px]" />
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">
          Skills
        </h2>
        <div className="text-[12px] m-0 flex justify-between">
          <div>
            <div className="font-bold mb-[2px]">Technical Skills</div>
            <ul className="list-disc pl-[20px] m-0 mt-[3px]">
              <li>Languages: HTML5, CSS3, JavaScript (ES6+), TypeScript</li>
              <li>
                Frameworks & Libraries: React.js, Redux, Bootstrap, Tailwind CSS
              </li>
              <li>Tools: Git, VS Code, Figma, npm, Webpack</li>
            </ul>
            <div className="font-bold mt-[5px] mb-[2-4">Soft Skills</div>
            <ul className="list-disc pl-[20px] m-0 mt-[3px]">
              <li>
                Collaboration, Problem-Solving, Attention to Detail, Time
                Management
              </li>
            </ul>
          </div>
          <div className="text-right">
            Proficiency: Advanced
            <br />
            Experience: 2+ Years
          </div>
        </div>
        <hr className="border-t border-black my-[4px]" />
      </section>

      {/* Additional Sections */}
      <section>
        <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">
          Additional Information
        </h2>
        <div className="text-[12px] m-0 flex justify-between">
          <div>
            <div className="font-bold mb-[2px]">Languages</div>
            <ul className="list-disc pl-[20px] m-0 mt-[3px]">
              <li>English (Fluent)</li>
              <li>Hindi (Native)</li>
              <li>Marathi (Intermediate)</li>
            </ul>
            <div className="font-bold mt-[5px] mb-[2px]">
              Hobbies & Interests
            </div>
            <ul className="list-disc pl-[20px] m-0 mt-[3px]">
              <li>UI/UX Design, Blogging, Cricket</li>
            </ul>
            <div className="font-bold mt-[5px] mb-[2px]">
              Achievements & Awards
            </div>
            <ul className="list-disc pl-[20px] m-0 mt-[3px]">
              <li>
                1st Prize, Hackathon 2023 - Task Management Web App
                <br />
                TechBit India
              </li>
              <li>
                Top 10%, National Coding Challenge 2022
                <br />
                CodeChef
              </li>
            </ul>
          </div>
          <div className="text-right">
            Fluency: Advanced
            <br />
            Years Active: 3+
            <br />
            Award Dates: 2022, 2023
          </div>
        </div>
      </section>
    </div>
  );
};

export default RESUME_ExpAndFresher_2;
