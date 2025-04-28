// src/components/ExpResume15.js
import React from "react";

const ExpResume15 = () => {
  return (
    <div className="font-['Arial',sans-serif] m-0 p-0 bg-white text-[#333] w-[794px] mx-auto my-[20px] text-[10pt] leading-[1.4]">
      {/* Header */}
      <div className="bg-[#4A5E6A] text-white text-center py-[20px]">
        <h1 className="m-0 text-[36pt] font-bold tracking-[2px]">
          Veronica Hamilton
        </h1>
        <h2 className="mt-[5px] mb-0 text-[14pt] font-normal tracking-[1px]">
          Web Developer
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex p-[20px]">
        {/* Left Column */}
        <div className="w-[35%] pr-[20px] border-r border-[#ddd]">
          {/* Contact */}
          <div className="mb-[20px]">
            <div className="flex items-center mb-[10px]">
              <i className="fas fa-phone w-[20px] text-[#4A5E6A] mr-[10px]"></i>
              <span>0012 345 6789</span>
            </div>
            <div className="flex items-center mb-[10px]">
              <i className="fas fa-envelope w-[20px] text-[#4A5E6A] mr-[10px]"></i>
              <span>veronica.hamilton@email.com</span>
            </div>
            <div className="flex items-center mb-[10px]">
              <i className="fas fa-map-marker-alt w-[20px] text-[#4A5E6A] mr-[10px]"></i>
              <span>Seattle, WA 98101</span>
            </div>
            <div className="flex items-center mb-[10px]">
              <i className="fab fa-linkedin w-[20px] text-[#4A5E6A] mr-[10px]"></i>
              <span>
                <a
                  href="linkedin.com/in/veronicahamilton"
                  className="text-[#333] no-underline hover:underline"
                >
                  linkedin.com/in/veronicahamilton
                </a>
              </span>
            </div>
            <div className="flex items-center mb-[10px]">
              <i className="fab fa-github w-[20px] text-[#4A5E6A] mr-[10px]"></i>
              <span>
                <a
                  href="github.com/veronicahamilton"
                  className="text-[#333] no-underline hover:underline"
                >
                  github.com/veronicahamilton
                </a>
              </span>
            </div>
            <div className="flex items-center mb-[10px]">
              <i className="fas fa-globe w-[20px] text-[#4A5E6A] mr-[10px]"></i>
              <span>
                <a
                  href="veronicahamilton.dev"
                  className="text-[#333] no-underline hover:underline"
                >
                  veronicahamilton.dev
                </a>
              </span>
            </div>
            <div className="flex items-center mb-[10px]">
              <i className="fas fa-paint-brush w-[20px] text-[#4A5E6A] mr-[10px]"></i>
              <span>
                <a
                  href="figma.com/@veronicahamilton"
                  className="text-[#333] no-underline hover:underline"
                >
                  figma.com/@veronicahamilton
                </a>
              </span>
            </div>
            <div className="flex items-center mb-[10px]">
              <i className="fas fa-code w-[20px] text-[#4A5E6A] mr-[10px]"></i>
              <span>
                <a
                  href="leetcode.com/veronicahamilton"
                  className="text-[#333] no-underline hover:underline"
                >
                  leetcode.com/veronicahamilton
                </a>
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="mb-[20px]">
            <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#4A5E6A]">
              Education
            </h3>
            <div className="mb-[10px]">
              <h4 className="text-[10pt] font-bold m-0">
                Bachelor’s, Computer Science
              </h4>
              <p className="my-[2px] text-[9pt] text-[#666]">
                University of Washington{" "}
                <span className="text-[8pt] text-[#999] ml-[10px]">
                  CGPA: 3.92
                </span>
              </p>
              <p className="my-[2px] text-[9pt] text-[#666]">
                Seattle, WA, 2018 – 2022
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-[20px]">
            <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#4A5E6A]">
              Skills
            </h3>
            <ul className="list-none p-0">
              <li className="text-[9pt] mb-[5px] relative pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                HTML & CSS
              </li>
              <li className="text-[9pt] mb-[5px] relative pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                JavaScript
              </li>
              <li className="text-[9pt] mb-[5px] relative pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                React
              </li>
              <li className="text-[9pt] mb-[5px] relative pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                Node.js
              </li>
              <li className="text-[9pt] mb-[5px] relative pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                Git
              </li>
              <li className="text-[9pt] mb-[5px] relative pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                Team Collaboration
              </li>
              <li className="text-[9pt] mb-[5px] relative pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                Problem Solving
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div className="mb-[20px]">
            <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#4A5E6A]">
              Languages
            </h3>
            <ul className="list-none p-0">
              <li className="text-[9pt] mb-[5px] relative pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                English (Native)
              </li>
              <li className="text-[9pt] mb-[5px] relative pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                Mandarin (Intermediate)
              </li>
            </ul>
          </div>

          {/* Hobbies */}
          <div className="mb-[20px]">
            <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#4A5E6A]">
              Hobbies & Interests
            </h3>
            <p className="text-[9pt] text-[#666]">Coding, Traveling, Yoga</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[65%] pl-[20px]">
          {/* Profile */}
          <div className="mb-[20px]">
            <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#4A5E6A]">
              Profile
            </h3>
            <p className="text-[9pt] text-[#666]">
              Skilled Web Developer with a Bachelor’s in Computer Science from
              University of Washington. Experienced in building responsive,
              user-friendly web applications using React and JavaScript.
              Improved website performance by 30% for a client project,
              showcasing strong problem-solving skills. Committed to delivering
              high-quality code and collaborating effectively in team
              environments.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-[20px]">
            <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#4A5E6A]">
              Experience
            </h3>
            <div className="mb-[15px]">
              <h4 className="text-[10pt] font-bold m-0">Frontend Developer</h4>
              <p className="my-[2px] text-[9pt] text-[#666]">
                Nexlify Solutions / Seattle, WA / 2022 – Present
              </p>
              <p className="my-[2px] text-[9pt] text-[#666]">
                Leading development of client-facing web applications using
                React and Tailwind CSS. Optimized front-end performance,
                reducing load times by 30%. Collaborated with backend teams to
                integrate APIs seamlessly.
              </p>
              <ul className="list-none pl-[15px]">
                <li className="text-[9pt] mb-[5px] relative before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                  Developed 5+ responsive web apps with 98% client satisfaction.
                </li>
                <li className="text-[9pt] mb-[5px] relative before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                  Implemented accessibility standards, improving user reach by
                  15%.
                </li>
                <li className="text-[9pt] mb-[5px] relative before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                  Streamlined CI/CD pipelines, cutting deployment time by 20%.
                </li>
              </ul>
            </div>
            <div className="mb-[15px]">
              <h4 className="text-[10pt] font-bold m-0">
                Web Development Intern
              </h4>
              <p className="my-[2px] text-[9pt] text-[#666]">
                CodeZap / Seattle, WA / 2021 – 2022
              </p>
              <p className="my-[2px] text-[9pt] text-[#666]">
                Contributed to building and maintaining company websites using
                HTML, CSS, and JavaScript. Assisted in debugging and optimizing
                legacy codebases.
              </p>
              <ul className="list-none pl-[15px]">
                <li className="text-[9pt] mb-[5px] relative before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                  Revamped 3 client websites, boosting user engagement by 25%.
                </li>
                <li className="text-[9pt] mb-[5px] relative before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                  Supported team in migrating sites to modern frameworks.
                </li>
                <li className="text-[9pt] mb-[5px] relative before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                  Conducted code reviews, reducing bugs by 10%.
                </li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-[20px]">
            <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#4A5E6A]">
              Projects
            </h3>
            <div className="mb-[15px]">
              <h4 className="text-[10pt] font-bold m-0">E-Learning Platform</h4>
              <p className="my-[2px] text-[9pt] text-[#666]">
                Technologies: React, Firebase •{" "}
                <a
                  href="github.com/veronicahamilton/elearning"
                  className="text-[#333] no-underline hover:underline"
                >
                  github.com/veronicahamilton/elearning
                </a>
              </p>
              <p className="my-[2px] text-[9pt] text-[#666]">
                Jan 2022 – Mar 2022
              </p>
              <ul className="list-none pl-[15px]">
                <li className="text-[9pt] mb-[5px] relative before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                  Built a scalable e-learning platform with user authentication.
                </li>
                <li className="text-[9pt] mb-[5px] relative before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                  Increased course completion rates by 20% with interactive UI.
                </li>
                <li className="text-[9pt] mb-[5px] relative before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                  Deployed on Firebase for real-time updates.
                </li>
              </ul>
            </div>
            <div className="mb-[15px]">
              <h4 className="text-[10pt] font-bold m-0">Weather App</h4>
              <p className="my-[2px] text-[9pt] text-[#666]">
                Technologies: JavaScript, APIs •{" "}
                <a
                  href="github.com/veronicahamilton/weather"
                  className="text-[#333] no-underline hover:underline"
                >
                  github.com/veronicahamilton/weather
                </a>
              </p>
              <p className="my-[2px] text-[9pt] text-[#666]">
                Jun 2021 – Aug 2021
              </p>
              <ul className="list-none pl-[15px]">
                <li className="text-[9pt] mb-[5px] relative before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                  Developed a weather app with real-time data via APIs.
                </li>
                <li className="text-[9pt] mb-[5px] relative before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                  Enhanced UX with dynamic visuals, gaining 500+ users.
                </li>
                <li className="text-[9pt] mb-[5px] relative before:content-['•'] before:absolute before:left-0 before:text-[#4A5E6A]">
                  Optimized API calls, reducing latency by 40%.
                </li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-[20px]">
            <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#4A5E6A]">
              Certifications
            </h3>
            <div className="mb-[10px]">
              <h4 className="text-[10pt] font-bold m-0">
                React Developer Certification
              </h4>
              <p className="my-[2px] text-[9pt] text-[#666]">
                Coursera •{" "}
                <a
                  href="coursera.org/verify/react-cert"
                  className="text-[#333] no-underline hover:underline"
                >
                  coursera.org/verify/react-cert
                </a>
              </p>
              <p className="my-[2px] text-[9pt] text-[#666]">
                Issued: Dec 2022
              </p>
            </div>
            <div className="mb-[10px]">
              <h4 className="text-[10pt] font-bold m-0">
                JavaScript Essentials
              </h4>
              <p className="my-[2px] text-[9pt] text-[#666]">
                Udemy •{" "}
                <a
                  href="udemy.com/certificate/js-essentials"
                  className="text-[#333] no-underline hover:underline"
                >
                  udemy.com/certificate/js-essentials
                </a>
              </p>
              <p className="my-[2px] text-[9pt] text-[#666]">
                Issued: Sep 2021
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-[20px]">
            <h3 className="text-[12pt] font-bold uppercase mb-[10px] text-[#4A5E6A]">
              Achievements & Awards
            </h3>
            <div className="mb-[10px]">
              <h4 className="text-[10pt] font-bold m-0">
                Tech Innovator Award
              </h4>
              <p className="my-[2px] text-[9pt] text-[#666]">
                Seattle Hackathon
              </p>
              <p className="my-[2px] text-[9pt] text-[#666]">
                Awarded for best app UX in 2022.
              </p>
            </div>
            <div className="mb-[10px]">
              <h4 className="text-[10pt] font-bold m-0">Dean’s List</h4>
              <p className="my-[2px] text-[9pt] text-[#666]">
                University of Washington
              </p>
              <p className="my-[2px] text-[9pt] text-[#666]">
                Recognized for academic excellence in 2020-2022.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpResume15;
