import React from "react";

// Header Component
const Header = () => (
  <div className="bg-[#dfe6e9] p-4 text-center shadow-md">
    <h1 className="text-[26px] text-[#3498db] uppercase font-bold">
      Ethan Lee
    </h1>
    <div className="text-[12px] text-[#636e72] mt-2">
      <p>
        <a
          href="mailto:ethan.lee@email.com"
          className="text-blue-500 hover:underline"
        >
          ethan.lee@email.com
        </a>{" "}
        | +1 503 555-9876 | Portland, OR |{" "}
        <a
          href="https://linkedin.com/in/ethanlee"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/ethanlee"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
      </p>
    </div>
  </div>
);

// Section Component
const Section = ({ title, children }) => (
  <div className="my-4 p-4 bg-white border-l-4 border-blue-400 rounded-md">
    <div className="text-[20px] font-bold text-blue-500">{title}</div>
    <div className="text-[12px] mt-2">{children}</div>
  </div>
);

const Resume1 = () => {
  return (
    <div className="font-sans w-[794px] mx-auto my-[35px] p-5 bg-[#f5f6fa] text-[#333] overflow-x-hidden">
      {/* Header */}
      <Header />
      {/* Summary */}
      <Section title="Summary">
        <p>
          Aspiring Software Engineer Intern with proficiency in Python, C++, and
          software development. Eager to learn coding, debugging, and teamwork
          in a tech environment.
        </p>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <ul className="list-disc pl-5">
          <li>Languages: Python, C++, HTML/CSS</li>
          <li>Tools: Git, Docker, Linux</li>
          <li>
            Competencies: Software Development, Algorithms, Problem-Solving
          </li>
        </ul>
      </Section>

      {/* Projects */}
      <Section title="Projects">
        <div>
          <p>
            <strong className="text-[14px]">Chatbot Prototype</strong> -
            Personal Project - Feb 2024 – Apr 2024
          </p>
          <ul className="list-disc pl-5">
            <li>Developed a Python chatbot with NLP for high accuracy.</li>
            <li>Deployed using Docker containers.</li>
          </ul>
        </div>
        <div className="mt-4">
          <p>
            <strong className="text-[14px]">Grade Tracker</strong> - Course
            Project - Oct 2023 – Dec 2023
          </p>
          <ul className="list-disc pl-5">
            <li>Built a C++ grade calculator with optimization techniques.</li>
            <li>Added input validation for reliability.</li>
          </ul>
        </div>
      </Section>

      {/* Education */}
      <Section title="Education">
        <p className="text-[14px]">
          B.S. in Computer Science (Expected June 2026)
        </p>
        <p>Oregon State University, Corvallis, OR</p>
      </Section>

      {/* Certifications */}
      <Section title="Certifications">
        <p>
          <strong className="text-[14px]">Machine Learning Fundamentals</strong>{" "}
          - Coursera - Jan 2024
        </p>
        <p>
          <strong className="text-[14px]">Python for Data Science</strong> - IBM
          - Dec 2023
        </p>
      </Section>

      {/* Hobbies */}
      <Section title="Hobbies">
        <ul className="list-disc pl-5">
          <li>Coding side projects</li>
          <li>Playing strategy games</li>
        </ul>
      </Section>

      {/* Languages */}
      <Section title="Languages">
        <ul className="list-disc pl-5">
          <li>English (Fluent)</li>
          <li>Mandarin (Intermediate)</li>
        </ul>
      </Section>
    </div>
  );
};

export default Resume1;
