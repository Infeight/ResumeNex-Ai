import React from "react";

const ExpResume1 = () => {
  return (
    <div
      className="font-sans text-black bg-white"
      style={{ width: "794px", margin: "0 auto", padding: "20px" }}
    >
      {/* Header */}
      <h1 className="text-[26px] font-bold text-center m-0">Your Name</h1>
      <div className="text-[12px] text-center mb-[10px]">
        <p>
          Your Street, City, State, ZIP <br />
          Email: your.email@example.com | Phone: +91-1234567890 <br />
          <a
            href="https://linkedin.com/in/yourname"
            className="text-[#0000EE] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/yourname
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/yourgithub"
            className="text-[#0000EE] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/yourgithub
          </a>{" "}
          |{" "}
          <a
            href="https://portfolio.yourname.com"
            className="text-[#0000EE] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            portfolio.yourname.com
          </a>{" "}
          |{" "}
          <a
            href="https://figma.com/@yourname"
            className="text-[#0000EE] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            figma.com/@yourname
          </a>{" "}
          |{" "}
          <a
            href="https://leetcode.com/yourname"
            className="text-[#0000EE] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            leetcode.com/yourname
          </a>
        </p>
      </div>
      <hr className="border-t border-black my-[4px]" />

      {/* Profile Summary */}
      <section>
        <h2 className="text-[20px] font-bold uppercase m-[10px_0_5px_0]">
          Profile Summary
        </h2>
        <p className="text-[12px] m-0">
          Experienced and detail-oriented Software Developer with a strong
          foundation in full-stack development, cloud computing, and AI-driven
          solutions. Passionate about designing scalable applications and
          optimizing system performance to deliver seamless user experiences.
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
            <span className="font-bold">Your University Name</span>
            <br />
            B.Tech in Computer Science, Stream: Software Engineering
            <br />
            Location: City, State
          </div>
          <div className="text-right">
            August 2019 - May 2023
            <br />
            CGPA: X.XX/10.0
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
              <span className="font-bold">AI Resume Optimizer</span>
              <br />
              Technologies: Python, Flask, NLP, HTML, CSS
              <br />
              <a
                href="https://github.com/yourrepo"
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/yourrepo
              </a>
              <ul className="list-disc pl-[20px] m-0 mt-[2px]">
                <li>
                  Built an AI-powered resume scanner using Python and Flask.
                </li>
                <li>
                  Integrated NLP for keyword analysis to improve ATS ranking.
                </li>
                <li>Deployed with a user-friendly web interface.</li>
              </ul>
            </div>
            <div className="text-right">
              January 2023 - March 2023
              <br />
              Team Size: 3
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="font-bold">E-commerce Website</span>
              <br />
              Technologies: MongoDB, Express.js, React, Node.js
              <br />
              <a
                href="https://github.com/yourrepo"
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/yourrepo
              </a>
              <ul className="list-disc pl-[20px] m-0 mt-[2px]">
                <li>
                  Developed a full-stack e-commerce platform using MERN stack.
                </li>
                <li>Implemented secure authentication and payment gateway.</li>
                <li>Designed responsive UI for cross-device compatibility.</li>
              </ul>
            </div>
            <div className="text-right">
              June 2022 - August 2022
              <br />
              Users: 500+
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
              <span className="font-bold">Software Development Intern</span>
              <br />
              XYZ Company, City, State
              <ul className="list-disc pl-[20px] m-0 mt-[2px]">
                <li>Developed REST APIs, improving efficiency by 30%.</li>
                <li>Assisted in debugging and fixing production issues.</li>
                <li>Optimized MySQL queries, reducing query time by 20%.</li>
              </ul>
            </div>
            <div className="text-right">
              June 2023 - Present
              <br />
              Projects: 2
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="font-bold">Front-End Development Intern</span>
              <br />
              ABC Company, City, State
              <ul className="list-disc pl-[20px] m-0 mt-[2px]">
                <li>Designed and implemented UI components using React.js.</li>
                <li>
                  Optimized website performance by reducing asset load time.
                </li>
                <li>Integrated REST APIs for dynamic data display.</li>
              </ul>
            </div>
            <div className="text-right">
              January 2022 - May 2022
              <br />
              Clients: 3
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
            <ul className="list-disc pl-[20px] m-0">
              <li>
                AWS Certified Cloud Practitioner - Amazon Web Services
                <br />
                <a
                  href="https://aws.amazon.com/certification"
                  className="text-[#0000EE] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  aws.amazon.com/certification
                </a>
              </li>
            </ul>
          </div>
          <div className="text-right">
            Issued: July 2023
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
            <span className="font-bold">Technical Skills</span>
            <ul className="list-disc pl-[20px] m-0 mt-[2px]">
              <li>Programming: Python, Java, C++, JavaScript</li>
              <li>Web Development: HTML, CSS, React, Node.js</li>
              <li>Databases: MySQL, MongoDB</li>
              <li>Tools & Platforms: Git, Docker, AWS, REST APIs</li>
            </ul>
            <span className="font-bold block mt-[5px]">Soft Skills</span>
            <ul className="list-disc pl-[20px] m-0 mt-[2px]">
              <li>Problem-Solving, Teamwork, Communication, Time Management</li>
            </ul>
          </div>
          <div className="text-right">
            Proficiency: Advanced
            <br />
            Experience: 3+ Years
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
            <span className="font-bold">Languages</span>
            <ul className="list-disc pl-[20px] m-0 mt-[2px]">
              <li>English (Fluent)</li>
              <li>Hindi (Native)</li>
              <li>Spanish (Intermediate)</li>
            </ul>
            <span className="font-bold block mt-[5px]">
              Hobbies & Interests
            </span>
            <ul className="list-disc pl-[20px] m-0 mt-[2px]">
              <li>Blogging on AI, Competitive Coding, Chess</li>
            </ul>
            <span className="font-bold block mt-[5px]">
              Achievements & Awards
            </span>
            <ul className="list-disc pl-[20px] m-0 mt-[2px]">
              <li>
                Winner, National Hackathon 2023 - Built AI-based chatbot
                <br />
                TechFest India
              </li>
              <li>
                Published Paper - AI-driven Resume Optimization
                <br />
                IEEE International Conference
              </li>
            </ul>
          </div>
          <div className="text-right">
            Fluency: Advanced
            <br />
            Years Active: 4+
            <br />
            Award Dates: 2023
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpResume1;
