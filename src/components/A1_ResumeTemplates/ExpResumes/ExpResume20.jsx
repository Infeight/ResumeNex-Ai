import React from "react";

const ExpResume20 = () => {
  return (
    <div className="font-sans text-black bg-gray-100 min-h-screen flex justify-center items-center">
      <div
        className="bg-white shadow-md box-border overflow-hidden"
        style={{ width: "794px", padding: "20px" }}
      >
        <hr className="border-t border-gray-600 my-[10px]" />
        {/* Header */}
        <div className="flex justify-between items-start mb-[15px]">
          <h1 className="text-[26px] font-bold uppercase tracking-[2px] m-0">
            Blair Washington
          </h1>
          <div className="text-[12px] text-right">
            <div className="font-bold uppercase mb-[5px]">
              Application Developer
            </div>
            <div className="flex justify-end mb-[5px]">
              <span>666.888.9899</span>
              <span className="ml-[15px]">youremail@domain.com</span>
            </div>
            <div className="flex justify-end">
              <span>236 Street Name, City, ST, 12345</span>
              <span className="ml-[15px]">
                <a
                  href="https://linkedin.com/in/username"
                  className="text-black underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/username
                </a>
              </span>
            </div>
            <div className="flex justify-end mt-[5px]">
              <span>
                <a
                  href="https://github.com/blairwashington"
                  className="text-black underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/blairwashington
                </a>
              </span>
              <span className="ml-[15px]">
                <a
                  href="https://portfolio.blairwashington.com"
                  className="text-black underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  portfolio.blairwashington.com
                </a>
              </span>
            </div>
            <div className="flex justify-end mt-[5px]">
              <span>
                <a
                  href="https://figma.com/@blairwashington"
                  className="text-black underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  figma.com/@blairwashington
                </a>
              </span>
              <span className="ml-[15px]">
                <a
                  href="https://leetcode.com/blairwashington"
                  className="text-black underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  leetcode.com/blairwashington
                </a>
              </span>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-600 my-[10px]" />

        {/* Profile Summary */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase border-b border-gray-600 pb-[5px] mb-[8px]">
            Summary
          </h2>
          <p className="text-[12px] leading-[1.4] m-[5px_0]">
            Experienced Application Developer with expertise in building
            scalable web applications and leading cross-functional teams.
            Skilled in JavaScript, React.js, and project management, with a
            proven track record of enhancing system performance and delivering
            user-centric solutions. Adept at collaborating with stakeholders to
            drive innovation and achieve business goals.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase border-b border-gray-600 pb-[5px] mb-[8px]">
            Experience
          </h2>
          <div className="mb-[10px]">
            <div className="text-[12px] font-bold uppercase mb-[3px]">
              Application Developer
            </div>
            <div>
              <span className="text-[12px] italic">TechCorp, Seattle, WA</span>
              <span className="text-[12px] italic float-right">
                Jul 2018 – Present
              </span>
            </div>
            <ul className="list-disc pl-[20px] text-[12px] m-[5px_0]">
              <li>
                Led development of a SaaS platform using React.js, improving
                user retention by 15%.
              </li>
              <li>
                Optimized backend APIs, reducing response time by 20% for
                10,000+ users.
              </li>
              <li>
                Collaborated with UX team to implement responsive designs from
                Figma mockups.
              </li>
            </ul>
          </div>
          <div>
            <div className="text-[12px] font-bold uppercase mb-[3px]">
              Junior Developer
            </div>
            <div>
              <span className="text-[12px] italic">
                Innovate Solutions, Portland, OR
              </span>
              <span className="text-[12px] italic float-right">
                Nov 2016 – Jun 2018
              </span>
            </div>
            <ul className="list-disc pl-[20px] text-[12px] m-[5px_0]">
              <li>
                Developed front-end components with JavaScript and Bootstrap for
                client portals.
              </li>
              <li>
                Conducted performance testing, improving load times by 10%
                across applications.
              </li>
              <li>
                Assisted in integrating REST APIs for dynamic data rendering.
              </li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase border-b border-gray-600 pb-[5px] mb-[8px]">
            Education
          </h2>
          <div className="flex justify-between items-center text-[12px]">
            <div className="font-bold flex-1">
              B.S. in Computer Science, Stanford University, CA
              <br />
              Stream: Software Engineering
            </div>
            <div className="italic mr-[15px]">CGPA: 3.8/4.0</div>
            <div className="italic">2008 – 2012</div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase border-b border-gray-600 pb-[5px] mb-[8px]">
            Projects
          </h2>
          <div className="mb-[10px]">
            <div className="text-[12px] font-bold uppercase">
              Task Management App
            </div>
            <div>
              <span className="text-[12px] italic">
                Technologies: React.js, Node.js, MongoDB
              </span>
              <span className="text-[12px] italic float-right">
                Jan 2023 – Mar 2023
              </span>
            </div>
            <ul className="list-disc pl-[20px] text-[12px] m-[5px_0]">
              <li>
                Built a full-stack app with user authentication and task
                prioritization.
              </li>
              <li>
                Deployed on AWS, supporting 500+ active users with 99.9% uptime.
              </li>
              <li>
                <a
                  href="https://github.com/blairwashington/task-app"
                  className="text-black underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/blairwashington/task-app
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-[12px] font-bold uppercase">
              Portfolio Website
            </div>
            <div>
              <span className="text-[12px] italic">
                Technologies: HTML, CSS, JavaScript
              </span>
              <span className="text-[12px] italic float-right">
                Sep 2022 – Oct 2022
              </span>
            </div>
            <ul className="list-disc pl-[20px] text-[12px] m-[5px_0]">
              <li>
                Designed a responsive portfolio with interactive animations.
              </li>
              <li>Hosted on GitHub Pages with a custom domain.</li>
              <li>
                <a
                  href="https://github.com/blairwashington/portfolio"
                  className="text-black underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/blairwashington/portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase border-b border-gray-600 pb-[5px] mb-[8px]">
            Certifications
          </h2>
          <ul className="list-disc pl-[20px] text-[12px] m-[5px_0]">
            <li>
              AWS Certified Developer – Amazon Web Services
              <br />
              Issued: June 2023, No Expiry
              <br />
              <a
                href="https://aws.amazon.com/certification"
                className="text-black underline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "50px" }}
              >
                aws.amazon.com/certification
              </a>
            </li>
            <li>
              Front-End Development – FreeCodeCamp
              <br />
              Issued: December 2022, No Expiry
              <br />
              <a
                href="https://freecodecamp.org/certification/frontend"
                className="text-black underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                freecodecamp.org/certification/frontend
              </a>
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase border-b border-gray-600 pb-[5px] mb-[8px]">
            Skills
          </h2>
          <div className="text-[12px] m-[5px_0]">
            <div className="font-bold">Technical Skills</div>
            <p>
              JavaScript, React.js, Node.js, MongoDB, HTML, CSS, Git, AWS, REST
              APIs
            </p>
            <div className="font-bold mt-[5px]">Soft Skills</div>
            <p>
              Project Management, Team Leadership, Communication,
              Problem-Solving
            </p>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase border-b border-gray-600 pb-[5px] mb-[8px]">
            Additional Information
          </h2>
          <div className="text-[12px] m-[5px_0]">
            <div className="font-bold">Languages</div>
            <ul className="list-disc pl-[20px] m-0">
              <li>English (Fluent)</li>
              <li>Spanish (Intermediate)</li>
            </ul>
            <div className="font-bold mt-[5px]">Hobbies & Interests</div>
            <ul className="list-disc pl-[20px] m-0">
              <li>Coding, Blogging, Hiking</li>
            </ul>
            <div className="font-bold mt-[5px]">Achievements & Awards</div>
            <ul className="list-disc pl-[20px] m-0">
              <li>
                Best Developer Award – TechCorp, 2022
                <br />
                Recognized for innovative SaaS solutions
              </li>
              <li>
                Hackathon Winner – CodeFest 2021
                <br />
                Built a real-time collaboration tool
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpResume20;
