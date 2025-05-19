import React from "react";

const RESUME_ExpAndFresher_4 = () => {
  return (
    <div className="font-arial bg-gray-100 text-gray-800 min-h-[1122px] w-[794px] mx-auto flex">
      {/* Sidebar */}
      <div className="w-[220px] bg-blue-500 text-white p-4">
        <h1 className="text-[26px] font-bold text-center mb-4">Sai Patel</h1>
        <h2 className="text-[20px] font-bold text-blue-100 mb-2">Contact</h2>
        <div className="text-[12px]">
          <p>
            Email:{" "}
            <a
              href="mailto:sai.patel@example.com"
              className="text-white hover:underline"
            >
              sai.patel@example.com
            </a>
          </p>
          <p>Phone: +91-91234-56789</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/saipatel23"
              className="text-white hover:underline"
            >
              linkedin.com/in/saipatel23
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/saipatel23"
              className="text-white hover:underline"
            >
              github.com/saipatel23
            </a>
          </p>
          <p>
            Portfolio:{" "}
            <a
              href="https://saipatel.dev"
              className="text-white hover:underline"
            >
              saipatel.dev
            </a>
          </p>
          <p>City: Mumbai, Maharashtra, 400001</p>
        </div>
        <hr className="border-t border-dashed border-gray-300 my-3" />
        <h2 className="text-[20px] font-bold text-blue-100 mb-2">Skills</h2>
        <div className="text-[12px]">
          <p className="font-bold">Technical Skills:</p>
          <ul className="list-disc pl-4">
            <li>Languages: HTML5, CSS3, JavaScript (ES6+), TypeScript</li>
            <li>
              Frameworks & Libraries: React.js, Redux, Bootstrap, Tailwind CSS
            </li>
            <li>Tools: Git, VS Code, Figma, npm, Webpack</li>
          </ul>
          <p className="font-bold mt-2">Soft Skills:</p>
          <ul className="list-disc pl-4">
            <li>Communication, Problem-Solving, Teamwork</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[574px] bg-white p-5 border-l border-gray-300">
        {/* Profile Summary */}
        <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-blue-500">
          Profile Summary
        </h2>
        <div className="flex mb-4">
          <div className="w-[65%] text-[12px]">
            <p>
              Passionate Front-End Developer fresher skilled in crafting
              responsive, user-friendly web interfaces. Experienced in
              JavaScript, React.js, and CSS frameworks through internships, with
              a focus on optimizing web performance and integrating APIs. Eager
              to deliver impactful front-end solutions.
            </p>
          </div>
          <div className="w-[30%] text-right text-[12px]">
            <p>Char Count: 280</p>
          </div>
        </div>
        <hr className="border-t border-dashed border-gray-300 my-3" />

        {/* Work Experience */}
        <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-blue-500">
          Work Experience
        </h2>
        <div className="mb-4">
          <div className="flex mb-3">
            <div className="w-[65%]">
              <h3 className="text-[14px] font-bold">
                Front-End Development Intern
              </h3>
              <p className="text-[12px] italic text-gray-600">
                TechNova Solutions, Mumbai, India
              </p>
              <ul className="list-disc pl-5 text-[12px]">
                <li>
                  Built responsive web pages with React.js and Tailwind CSS for
                  a SaaS product.
                </li>
                <li>
                  Boosted site speed by 25% using CSS optimization and image
                  compression.
                </li>
                <li>
                  Integrated RESTful APIs for real-time dashboard content.
                </li>
              </ul>
            </div>
            <div className="w-[30%] text-right text-[12px] italic text-gray-600">
              <p>Jan 2024 - May 2024</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-[65%]">
              <h3 className="text-[14px] font-bold">Web Development Intern</h3>
              <p className="text-[12px] italic text-gray-600">
                InnovateX, Pune, India
              </p>
              <ul className="list-disc pl-5 text-[12px]">
                <li>
                  Developed reusable UI components using JavaScript and
                  Bootstrap.
                </li>
                <li>
                  Tested compatibility across Chrome, Firefox, and Safari
                  browsers.
                </li>
                <li>Converted Figma designs into precise HTML/CSS layouts.</li>
              </ul>
            </div>
            <div className="w-[30%] text-right text-[12px] italic text-gray-600">
              <p>June 2023 - Aug 2023</p>
            </div>
          </div>
        </div>
        <hr className="border-t border-dashed border-gray-300 my-3" />

        {/* Education */}
        <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-blue-500">
          Education
        </h2>
        <div className="flex mb-4">
          <div className="w-[65%]">
            <h3 className="text-[14px] font-bold">
              B.E. in Information Technology
            </h3>
            <p className="text-[12px] italic text-gray-600">
              XYZ Institute of Technology, Mumbai, India
            </p>
            <p className="text-[12px]">CGPA: 8.5/10</p>
          </div>
          <div className="w-[30%] text-right text-[12px] italic text-gray-600">
            <p>June 2020 - May 2024</p>
          </div>
        </div>
        <hr className="border-t border-dashed border-gray-300 my-3" />

        {/* Projects */}
        <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-blue-500">
          Projects
        </h2>
        <div className="mb-4">
          <div className="flex mb-3">
            <div className="w-[65%]">
              <h3 className="text-[14px] font-bold">E-commerce Website</h3>
              <p className="text-[12px]">
                <a
                  href="https://github.com/saipatel23/ecommerce"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
              </p>
              <p className="text-[12px]">
                Technologies: React.js, Tailwind CSS, Firebase
              </p>
              <p className="text-[12px]">
                Summary: Built a responsive e-commerce platform with product
                listings, cart functionality, and secure authentication.
              </p>
              <ul className="list-disc pl-5 text-[12px]">
                <li>Enhanced load time by 20% with lazy-loaded images.</li>
                <li>Implemented user authentication with Firebase.</li>
              </ul>
            </div>
            <div className="w-[30%] text-right text-[12px] italic text-gray-600">
              <p>Jan 2024 - Mar 2024</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-[65%]">
              <h3 className="text-[14px] font-bold">Weather Dashboard</h3>
              <p className="text-[12px]">
                <a
                  href="https://github.com/saipatel23/weather-dashboard"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
              </p>
              <p className="text-[12px]">
                Technologies: JavaScript, React, OpenWeatherMap API
              </p>
              <p className="text-[12px]">
                Summary: Created a real-time weather app with location-based
                forecasts and a clean UI.
              </p>
              <ul className="list-disc pl-5 text-[12px]">
                <li>
                  Designed intuitive UI with CSS Grid and location features.
                </li>
                <li>Integrated API for accurate weather updates.</li>
              </ul>
            </div>
            <div className="w-[30%] text-right text-[12px] italic text-gray-600">
              <p>Oct 2023 - Dec 2023</p>
            </div>
          </div>
        </div>
        <hr className="border-t border-dashed border-gray-300 my-3" />

        {/* Certifications */}
        <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-blue-500">
          Certifications
        </h2>
        <div className="flex mb-4">
          <div className="w-[65%]">
            <p className="text-[12px]">
              <span className="font-bold">
                Front-End Development with React
              </span>{" "}
              - Coursera
            </p>
            <p className="text-[12px]">
              <span className="font-bold">Responsive Web Design</span> -
              FreeCodeCamp
            </p>
          </div>
          <div className="w-[30%] text-right text-[12px] italic text-gray-600">
            <p>March 2024</p>
            <p>December 2023</p>
          </div>
        </div>
        <hr className="border-t border-dashed border-gray-300 my-3" />

        {/* Additional Sections */}
        <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-blue-500">
          Additional Information
        </h2>
        <div className="flex">
          <div className="w-[65%] text-[12px]">
            <p className="font-bold">Languages:</p>
            <ul className="list-disc pl-5">
              <li>English (Fluent)</li>
              <li>Hindi (Native)</li>
            </ul>
            <p className="font-bold mt-2">Hobbies & Interests:</p>
            <ul className="list-disc pl-5">
              <li>Coding, Reading Tech Blogs, Cricket</li>
            </ul>
            <p className="font-bold mt-2">Achievements & Awards:</p>
            <ul className="list-disc pl-5">
              <li>
                Best Project Award, XYZ Institute, 2024: E-commerce Website
              </li>
            </ul>
          </div>
          <div className="w-[30%] text-right text-[12px] italic text-gray-600">
            <p>Fluency: C2</p>
            <p>Years Active: 2+</p>
            <p>Award Date: May 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_4;
