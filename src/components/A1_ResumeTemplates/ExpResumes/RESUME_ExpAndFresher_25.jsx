import React from "react";

const RESUME_ExpAndFresher_25 = () => {
  return (
    <div className="font-sans text-[#333] bg-gray-100 min-h-screen flex justify-center items-start">
      <div className="bg-white" style={{ width: "794px", padding: "20px" }}>
        {/* Header */}
        <h1 className="text-[26px] font-bold text-[#D32F2F] text-center mb-[10px]">
          Riley Parker
        </h1>
        <div className="bg-[#FFEBEE] py-[8px] text-center mb-[15px]">
          <p className="text-[12px] m-[2px_0]">
            <a
              href="mailto:riley.parker@example.com"
              className="text-[#0000EE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              riley.parker@example.com
            </a>
          </p>
          <p className="text-[12px] m-[2px_0]">(123) 456-7890</p>
          <p className="text-[12px] m-[2px_0]">
            <a
              href="https://linkedin.com/in/rileyparker"
              className="text-[#0000EE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/rileyparker
            </a>
          </p>
          <p className="text-[12px] m-[2px_0]">
            <a
              href="https://portfolio.rileyparker.com"
              className="text-[#0000EE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              portfolio.rileyparker.com
            </a>
          </p>
          <p className="text-[12px] m-[2px_0]">
            <a
              href="https://github.com/rileyparker"
              className="text-[#0000EE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/rileyparker
            </a>
          </p>
          <p className="text-[12px] m-[2px_0]">
            <a
              href="https://figma.com/@rileyparker"
              className="text-[#0000EE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              figma.com/@rileyparker
            </a>
          </p>
          <p className="text-[12px] m-[2px_0]">
            <a
              href="https://leetcode.com/rileyparker"
              className="text-[#0000EE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              leetcode.com/rileyparker
            </a>
          </p>
          <p className="text-[12px] m-[2px_0]">Austin, TX, 78701</p>
        </div>

        {/* Professional Summary */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-[#D32F2F] mb-[5px] relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-[#D32F2F] after:mt-[3px] after:rounded">
            Professional Summary
          </h2>
          <p className="text-[12px] leading-[1.4]">
            Proactive Front-End Developer with internship experience in HTML,
            CSS, and JavaScript, delivering responsive and accessible web
            interfaces. Collaborated on cross-functional teams to enhance user
            retention by 15% at TechTrend Innovations. Passionate about
            optimizing performance and ensuring WCAG-compliant designs for
            seamless user experiences.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-[#D32F2F] mb-[5px] relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-[#D32F2F] after:mt-[3px] after:rounded">
            Skills
          </h2>
          <ul className="list-disc pl-[20px] text-[12px] m-[5px_0]">
            <li className="mb-[3px]">
              Technical: HTML5, CSS3, JavaScript, React.js
            </li>
            <li className="mb-[3px]">
              Design: Responsive Web Design, Figma, Adobe XD
            </li>
            <li className="mb-[3px]">Tools: Git, GitHub, VS Code</li>
            <li className="mb-[3px]">Standards: Accessibility (WCAG), SEO</li>
            <li className="mb-[3px]">
              Soft: Collaboration, Problem-Solving, Communication
            </li>
          </ul>
        </div>

        {/* Work Experience */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-[#D32F2F] mb-[5px] relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-[#D32F2F] after:mt-[3px] after:rounded">
            Work Experience
          </h2>
          <div className="flex justify-between mb-[10px]">
            <div className="flex-1">
              <p className="text-[12px] font-bold">
                Front-End Developer Intern
              </p>
              <p className="text-[12px]">TechTrend Innovations, Remote</p>
              <ul className="list-disc pl-[20px] text-[12px] m-[5px_0]">
                <li className="mb-[3px]">
                  Built responsive web pages with HTML and CSS, boosting user
                  retention by 15%.
                </li>
                <li className="mb-[3px]">
                  Translated Figma designs into pixel-perfect code, meeting
                  client specifications.
                </li>
                <li className="mb-[3px]">
                  Optimized CSS for faster page loads, cutting render time by
                  18%.
                </li>
              </ul>
            </div>
            <div className="w-[120px] text-right text-[12px] text-[#555]">
              <p>06/2024 - 08/2024</p>
            </div>
          </div>
          <div className="flex justify-between mb-[10px]">
            <div className="flex-1">
              <p className="text-[12px] font-bold">Web Development Intern</p>
              <p className="text-[12px]">Creative Solutions Ltd., Austin, TX</p>
              <ul className="list-disc pl-[20px] text-[12px] m-[5px_0]">
                <li className="mb-[3px]">
                  Coded client-facing website features, delivering ahead of
                  schedule.
                </li>
                <li className="mb-[3px]">
                  Ensured WCAG 2.1 compliance, improving accessibility for
                  5,000+ users.
                </li>
                <li className="mb-[3px]">
                  Refactored CSS, enhancing mobile performance across devices.
                </li>
              </ul>
            </div>
            <div className="w-[120px] text-right text-[12px] text-[#555]">
              <p>01/2024 - 05/2024</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-[#D32F2F] mb-[5px] relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-[#D32F2F] after:mt-[3px] after:rounded">
            Education
          </h2>
          <div className="flex justify-between">
            <div className="flex-1">
              <p className="text-[12px] font-bold">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-[12px]">
                University of Texas, Austin, TX
                <br />
                Stream: Web Development
              </p>
            </div>
            <div className="w-[120px] text-right text-[12px] text-[#555]">
              <p>08/2021 - 05/2025</p>
              <p>CGPA: 8.5/10</p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-[#D32F2F] mb-[5px] relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-[#D32F2F] after:mt-[3px] after:rounded">
            Projects
          </h2>
          <div className="flex justify-between mb-[10px]">
            <div className="flex-1">
              <p className="text-[12px] font-bold">Portfolio Website</p>
              <p className="text-[12px]">Technologies: HTML, CSS, JavaScript</p>
              <ul className="list-disc pl-[20px] text-[12px] m-[5px_0]">
                <li className="mb-[3px]">
                  Designed a responsive portfolio, showcasing 5+ projects.
                </li>
                <li className="mb-[3px]">
                  Optimized for SEO, increasing traffic by 20%.
                </li>
                <li className="mb-[3px]">
                  <a
                    href="https://github.com/rileyparker/portfolio"
                    className="text-[#0000EE] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/rileyparker/portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-[120px] text-right text-[12px] text-[#555]">
              <p>03/2024 - 04/2024</p>
            </div>
          </div>
          <div className="flex justify-between mb-[10px]">
            <div className="flex-1">
              <p className="text-[12px] font-bold">Task Manager App</p>
              <p className="text-[12px]">Technologies: React.js, CSS</p>
              <ul className="list-disc pl-[20px] text-[12px] m-[5px_0]">
                <li className="mb-[3px]">
                  Built a dynamic app with real-time task updates.
                </li>
                <li className="mb-[3px]">
                  Implemented responsive design for mobile users.
                </li>
                <li className="mb-[3px]">
                  <a
                    href="https://github.com/rileyparker/task-manager"
                    className="text-[#0000EE] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/rileyparker/task-manager
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-[120px] text-right text-[12px] text-[#555]">
              <p>11/2023 - 12/2023</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-[#D32F2F] mb-[5px] relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-[#D32F2F] after:mt-[3px] after:rounded">
            Certifications
          </h2>
          <ul className="list-disc pl-[20px] text-[12px] m-[5px_0]">
            <li className="mb-[3px]">
              Responsive Web Design – freeCodeCamp
              <br />
              Issued: May 2024, No Expiry
              <br />
              <a
                href="https://freecodecamp.org/certification/responsive-web"
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                freecodecamp.org/certification
              </a>
            </li>
            <li className="mb-[3px]">
              JavaScript Algorithms – freeCodeCamp
              <br />
              Issued: Feb 2024, No Expiry
              <br />
              <a
                href="https://freecodecamp.org/certification/javascript"
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                freecodecamp.org/certification
              </a>
            </li>
          </ul>
        </div>

        {/* Additional Information */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-[#D32F2F] mb-[5px] relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-[#D32F2F] after:mt-[3px] after:rounded">
            Additional Information
          </h2>
          <div className="text-[12px]">
            <div className="font-bold">Languages</div>
            <ul className="list-disc pl-[20px] m-[5px_0]">
              <li className="mb-[3px]">English (Fluent), Spanish (Beginner)</li>
            </ul>
            <div className="font-bold mt-[5px]">Hobbies & Interests</div>
            <ul className="list-disc pl-[20px] m-[5px_0]">
              <li className="mb-[3px]">
                Open-Source Contribution, UI/UX Design, Hiking
              </li>
            </ul>
            <div className="font-bold mt-[5px]">Achievements & Awards</div>
            <ul className="list-disc pl-[20px] m-[5px_0]">
              <li className="mb-[3px]">
                Hackathon Finalist – CodeFest 2024
                <br />
                Developed an accessible web app
              </li>
              <li className="mb-[3px]">
                Dean’s List – University of Texas, 2023
                <br />
                Recognized for academic excellence
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_25;
