// src/components/ExpResume26.js
import React from "react";

const ExpResume26 = () => {
  return (
    <div className="font-['Arial',sans-serif] text-[10pt] leading-[1.4] text-[#333] max-w-[595px] mx-auto my-[1in] p-[10px]">
      {/* Header */}
      <h1 className="text-[14pt] mb-[10px] text-[#37474F] text-center border-b-4 border-double-[#37474F]">
        Jamie Carter
      </h1>
      <div className="text-center mb-[15px]">
        <p className="my-[2px]">
          <a
            href="mailto:jamie.carter@example.com"
            className="text-[#333] no-underline hover:underline"
          >
            jamie.carter@example.com
          </a>
        </p>
        <p className="my-[2px]">(123) 456-7890</p>
        <p className="my-[2px]">
          <a
            href="https://linkedin.com/in/jamiecarter"
            className="text-[#333] no-underline hover:underline"
          >
            linkedin.com/in/jamiecarter
          </a>
        </p>
        <p className="my-[2px]">
          <a
            href="https://github.com/jamiecarter"
            className="text-[#333] no-underline hover:underline"
          >
            github.com/jamiecarter
          </a>
        </p>
        <p className="my-[2px]">
          <a
            href="https://jamiecarter.dev"
            className="text-[#333] no-underline hover:underline"
          >
            jamiecarter.dev
          </a>
        </p>
        <p className="my-[2px]">
          <a
            href="https://figma.com/@jamiecarter"
            className="text-[#333] no-underline hover:underline"
          >
            figma.com/@jamiecarter
          </a>
        </p>
        <p className="my-[2px]">
          <a
            href="https://leetcode.com/jamiecarter"
            className="text-[#333] no-underline hover:underline"
          >
            leetcode.com/jamiecarter
          </a>
        </p>
        <p className="my-[2px]">Austin, TX</p>
      </div>

      {/* Professional Summary */}
      <div className="mb-[15px]">
        <h2 className="text-[12pt] m-[15px_0_5px] text-[#37474F] bg-[#ECEFF1] p-[3px_10px]">
          Professional Summary
        </h2>
        <p>
          Proactive Front-End Developer with internship experience in HTML, CSS,
          JavaScript, and React. Skilled in creating responsive, accessible web
          interfaces, boosting user engagement by 20% at TechTrend Innovations.
          Passionate about collaborating with teams to deliver seamless,
          high-quality user experiences.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-[15px]">
        <h2 className="text-[12pt] m-[15px_0_5px] text-[#37474F] bg-[#ECEFF1] p-[3px_10px]">
          Skills
        </h2>
        <ul className="my-[5px] pl-[20px]">
          <li className="mb-[3px]">HTML5, CSS3, JavaScript, React</li>
          <li className="mb-[3px]">Responsive Web Design</li>
          <li className="mb-[3px]">Figma, Adobe XD</li>
          <li className="mb-[3px]">Git, GitHub</li>
          <li className="mb-[3px]">Accessibility (WCAG)</li>
          <li className="mb-[3px]">Team Collaboration</li>
        </ul>
      </div>

      {/* Work Experience */}
      <div className="mb-[15px]">
        <h2 className="text-[12pt] m-[15px_0_5px] text-[#37474F] bg-[#ECEFF1] p-[3px_10px]">
          Work Experience
        </h2>
        <div className="flex justify-between mb-[10px]">
          <div className="flex-1">
            <p className="font-bold my-[2px]">Front-End Developer Intern</p>
            <p className="my-[2px]">TechTrend Innovations, Remote</p>
            <ul className="my-[5px] pl-[20px]">
              <li className="mb-[3px]">
                Developed responsive web pages with React and CSS, increasing
                user retention by 20%.
              </li>
              <li className="mb-[3px]">
                Converted Figma designs into pixel-perfect code, meeting 100% of
                client requirements.
              </li>
              <li className="mb-[3px]">
                Optimized JavaScript performance, reducing load times by 15%.
              </li>
            </ul>
          </div>
          <div className="w-[120px] text-right text-[9pt] text-[#555]">
            <p className="my-[2px]">06/2024 - 08/2024</p>
          </div>
        </div>
        <div className="flex justify-between mb-[10px]">
          <div className="flex-1">
            <p className="font-bold my-[2px]">Web Development Intern</p>
            <p className="my-[2px]">Creative Solutions Ltd., Austin, TX</p>
            <ul className="my-[5px] pl-[20px]">
              <li className="mb-[3px]">
                Coded interactive website features, completing tasks 10% ahead
                of schedule.
              </li>
              <li className="mb-[3px]">
                Ensured WCAG 2.1 compliance, enhancing accessibility for 5,000+
                users.
              </li>
              <li className="mb-[3px]">
                Refactored CSS for mobile-first design, improving cross-device
                performance.
              </li>
            </ul>
          </div>
          <div className="w-[120px] text-right text-[9pt] text-[#555]">
            <p className="my-[2px]">01/2024 - 05/2024</p>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-[15px]">
        <h2 className="text-[12pt] m-[15px_0_5px] text-[#37474F] bg-[#ECEFF1] p-[3px_10px]">
          Projects
        </h2>
        <div className="flex justify-between mb-[10px]">
          <div className="flex-1">
            <p className="font-bold my-[2px]">Portfolio Website</p>
            <p className="my-[2px]">
              Personal Project •{" "}
              <a
                href="https://github.com/jamiecarter/portfolio"
                className="text-[#333] no-underline hover:underline"
              >
                github.com/jamiecarter/portfolio
              </a>
            </p>
            <ul className="my-[5px] pl-[20px]">
              <li className="mb-[3px]">
                Built a responsive portfolio with React and Tailwind CSS.
              </li>
              <li className="mb-[3px]">
                Added smooth animations, increasing user dwell time by 25%.
              </li>
              <li className="mb-[3px]">
                Deployed on Vercel, attracting 1,000+ visitors.
              </li>
            </ul>
          </div>
          <div className="w-[120px] text-right text-[9pt] text-[#555]">
            <p className="my-[2px]">09/2024 - 10/2024</p>
          </div>
        </div>
        <div className="flex justify-between mb-[10px]">
          <div className="flex-1">
            <p className="font-bold my-[2px]">E-Commerce UI</p>
            <p className="my-[2px]">
              University Project •{" "}
              <a
                href="https://github.com/jamiecarter/ecommerce-ui"
                className="text-[#333] no-underline hover:underline"
              >
                github.com/jamiecarter/ecommerce-ui
              </a>
            </p>
            <ul className="my-[5px] pl-[20px]">
              <li className="mb-[3px]">
                Created a mock e-commerce interface using HTML, CSS, and
                JavaScript.
              </li>
              <li className="mb-[3px]">
                Achieved WCAG 2.1 compliance with accessible navigation.
              </li>
              <li className="mb-[3px]">
                Won best project award in university competition.
              </li>
            </ul>
          </div>
          <div className="w-[120px] text-right text-[9pt] text-[#555]">
            <p className="my-[2px]">03/2024 - 04/2024</p>
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div className="mb-[15px]">
        <h2 className="text-[12pt] m-[15px_0_5px] text-[#37474F] bg-[#ECEFF1] p-[3px_10px]">
          Certificates
        </h2>
        <div className="flex justify-between mb-[10px]">
          <div className="flex-1">
            <p className="font-bold my-[2px]">Responsive Web Design</p>
            <p className="my-[2px]">
              freeCodeCamp •{" "}
              <a
                href="https://freecodecamp.org/cert/responsive-web"
                className="text-[#333] no-underline hover:underline"
              >
                freecodecamp.org/cert/responsive-web
              </a>
            </p>
          </div>
          <div className="w-[120px] text-right text-[9pt] text-[#555]">
            <p className="my-[2px]">07/2024</p>
          </div>
        </div>
        <div className="flex justify-between mb-[10px]">
          <div className="flex-1">
            <p className="font-bold my-[2px]">JavaScript Basics</p>
            <p className="my-[2px]">
              Coursera •{" "}
              <a
                href="https://coursera.org/verify/js-basics"
                className="text-[#333] no-underline hover:underline"
              >
                coursera.org/verify/js-basics
              </a>
            </p>
          </div>
          <div className="w-[120px] text-right text-[9pt] text-[#555]">
            <p className="my-[2px]">05/2024</p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-[15px]">
        <h2 className="text-[12pt] m-[15px_0_5px] text-[#37474F] bg-[#ECEFF1] p-[3px_10px]">
          Education
        </h2>
        <div className="flex justify-between">
          <div className="flex-1">
            <p className="font-bold my-[2px]">
              Bachelor of Science in Computer Science
            </p>
            <p className="my-[2px]">University of Texas, Austin, TX</p>
          </div>
          <div className="w-[120px] text-right text-[9  text-[#555]">
            <p className="my-[2px]">08/2021 - 05/2025</p>
            <p className="my-[2px]">CGPA: 3.8/4.0</p>
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="mb-[15px]">
        <h2 className="text-[12pt] m-[15px_0_5px] text-[#37474F] bg-[#ECEFF1] p-[3px_10px]">
          Languages
        </h2>
        <p className="my-[5px]">English (Native), Spanish (Intermediate)</p>
      </div>

      {/* Hobbies */}
      <div className="mb-[15px]">
        <h2 className="text-[12pt] m-[15px_0_5px] text-[#37474F] bg-[#ECEFF1] p-[3px_10px]">
          Hobbies & Interests
        </h2>
        <p className="my-[5px]">Web Development, Graphic Design, Hiking</p>
      </div>

      {/* Achievements */}
      <div className="mb-[15px]">
        <h2 className="text-[12pt] m-[15px_0_5px] text-[#37474F] bg-[#ECEFF1] p-[3px_10px]">
          Achievements & Awards
        </h2>
        <div className="flex justify-between mb-[10px]">
          <div className="flex-1">
            <p className="font-bold my-[2px]">Dean’s List</p>
            <p className="my-[2px]">University of Texas, 2022-2024</p>
          </div>
          <div className="w-[120px] text-right text-[9pt] text-[#555]">
            <p className="my-[2px]">2022-2024</p>
          </div>
        </div>
        <div className="flex justify-between mb-[10px]">
          <div className="flex-1">
            <p className="font-bold my-[2px]">Hackathon Winner</p>
            <p className="my-[2px]">Austin CodeFest, 2023</p>
          </div>
          <div className="w-[120px] text-right text-[9pt] text-[#555]">
            <p className="my-[2px]">2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpResume26;
