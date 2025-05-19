import React from "react";

const RESUME_ExpAndFresher_5 = () => {
  return (
    <div className="font-arial bg-white text-gray-800 w-[794px] min-h-[1122px] mx-auto p-5">
      {/* Header */}
      <div className="text-center pb-2 border-b-2 border-blue-500 mb-4">
        <h1 className="text-[26px] font-bold text-blue-500 mb-1">Sai Patel</h1>
        <div className="text-[12px]">
          <p>
            Email:{" "}
            <a
              href="mailto:sai.patel@example.com"
              className="text-blue-500 hover:underline"
            >
              sai.patel@example.com
            </a>{" "}
            | Phone: +91-91234-56789 | LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/saipatel23"
              className="text-blue-500 hover:underline"
            >
              linkedin.com/in/saipatel23
            </a>{" "}
            | GitHub:{" "}
            <a
              href="https://github.com/saipatel23"
              className="text-blue-500 hover:underline"
            >
              github.com/saipatel23
            </a>
          </p>
          <p>
            Portfolio:{" "}
            <a
              href="https://saipatel.dev"
              className="text-blue-500 hover:underline"
            >
              saipatel.dev
            </a>{" "}
            | Mumbai, Maharashtra, 400001
          </p>
        </div>
      </div>

      {/* Profile Summary */}
      <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-dashed border-gray-300 pb-1">
        Profile Summary
      </h2>
      <div className="flex mb-4">
        <div className="w-[65%] text-[12px]">
          <p>
            Dedicated Front-End Developer fresher with expertise in creating
            responsive, user-friendly web interfaces using JavaScript, React.js,
            and modern CSS frameworks. Gained practical experience through
            internships, optimizing web performance and integrating APIs.
            Committed to delivering high-quality front-end solutions.
          </p>
        </div>
        <div className="w-[30%] text-right text-[12px]">
          <p>Char Count: 290</p>
        </div>
      </div>

      {/* Skills */}
      <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-dashed border-gray-300 pb-1">
        Skills
      </h2>
      <div className="flex mb-4">
        <div className="w-[65%] text-[12px]">
          <p className="font-bold">Technical Skills:</p>
          <ul className="list-disc pl-5">
            <li>Languages: HTML5, CSS3, JavaScript (ES6+), TypeScript</li>
            <li>
              Frameworks & Libraries: React.js, Redux, Bootstrap, Tailwind CSS
            </li>
            <li>Tools: Git, VS Code, Figma, npm, Webpack</li>
          </ul>
          <p className="font-bold mt-2">Soft Skills:</p>
          <ul className="list-disc pl-5">
            <li>Communication, Problem-Solving, Teamwork</li>
          </ul>
        </div>
        <div className="w-[30%] text-right text-[12px]">
          <p>Proficiency: Intermediate</p>
        </div>
      </div>

      {/* Work Experience */}
      <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-dashed border-gray-300 pb-1">
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
                Developed responsive web pages using React.js and Tailwind CSS
                for a SaaS platform.
              </li>
              <li>
                Improved website performance by 25% through CSS optimization and
                image compression.
              </li>
              <li>
                Integrated RESTful APIs to enable dynamic content on client
                dashboards.
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
                Built reusable UI components with JavaScript and Bootstrap for a
                corporate site.
              </li>
              <li>
                Ensured cross-browser compatibility across Chrome, Firefox, and
                Safari.
              </li>
              <li>Converted Figma designs into precise HTML/CSS layouts.</li>
            </ul>
          </div>
          <div className="w-[30%] text-right text-[12px] italic text-gray-600">
            <p>June 2023 - Aug 2023</p>
          </div>
        </div>
      </div>

      {/* Education */}
      <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-dashed border-gray-300 pb-1">
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

      {/* Projects */}
      <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-dashed border-gray-300 pb-1">
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
              Summary: Developed a responsive e-commerce platform with product
              listings, cart, and secure payments using Firebase authentication.
            </p>
            <ul className="list-disc pl-5 text-[12px]">
              <li>Optimized load time by 20% with lazy-loaded images.</li>
              <li>Implemented secure user authentication.</li>
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
              Summary: Built a real-time weather app with location-based
              forecasts and an intuitive UI.
            </p>
            <ul className="list-disc pl-5 text-[12px]">
              <li>
                Designed intuitive UI with CSS Grid and location-based features.
              </li>
              <li>Integrated API for accurate weather updates.</li>
            </ul>
          </div>
          <div className="w-[30%] text-right text-[12px] italic text-gray-600">
            <p>Oct 2023 - Dec 2023</p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-dashed border-gray-300 pb-1">
        Certifications
      </h2>
      <div className="flex mb-4">
        <div className="w-[65%] text-[12px]">
          <p>
            <span className="font-bold">Front-End Development with React</span>{" "}
            - Coursera
            <br />
            <a
              href="https://coursera.org/verify/react-cert"
              className="text-blue-500 hover:underline"
            >
              Verify
            </a>
          </p>
          <p>
            <span className="font-bold">Responsive Web Design</span> -
            FreeCodeCamp
            <br />
            <a
              href="https://freecodecamp.org/cert/responsive"
              className="text-blue-500 hover:underline"
            >
              Verify
            </a>
          </p>
        </div>
        <div className="w-[30%] text-right text-[12px] italic text-gray-600">
          <p>
            Issued: March 2024
            <br />
            No Expiry
          </p>
          <p>
            Issued: December 2023
            <br />
            No Expiry
          </p>
        </div>
      </div>

      {/* Additional Sections */}
      <h2 className="text-[20px] font-bold text-blue-500 mb-2 border-b border-dashed border-gray-300 pb-1">
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
            <li>Best Project Award, XYZ Institute, 2024: E-commerce Website</li>
          </ul>
        </div>
        <div className="w-[30%] text-right text-[12px] italic text-gray-600">
          <p>Fluency: C2</p>
          <p>Years Active: 2+</p>
          <p>Award Date: May 2024</p>
        </div>
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_5;
