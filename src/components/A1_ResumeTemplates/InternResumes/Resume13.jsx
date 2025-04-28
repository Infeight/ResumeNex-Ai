// src/components/Resume13.js
import React from "react";

const Resume13 = () => {
  return (
    <div className="font-['Arial',sans-serif] w-[794px] mx-auto my-[20px] p-5  text-[#333] leading-[1.6] overflow-x-hidden">
      <div className="bg-white p-[10px]">
        {/* Header */}
        <div className="flex justify-between items-center border-b-2 border-[#0056b3] pb-[10px] mb-[15px]">
          <h1 className="m-0 text-[26px] text-[#0056b3] font-bold">John Doe</h1>
          <div className="text-right text-[12px]">
            <p>Email: john.doe@email.com | Phone: +1 123-456-7890</p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0056b3] no-underline hover:underline"
              >
                linkedin.com/in/johndoe
              </a>{" "}
              | GitHub:{" "}
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0056b3] no-underline hover:underline"
              >
                github.com/johndoe
              </a>
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-[15px]">
          <div className="text-[20px] font-bold text-[#0056b3] mb-[5px] border-b-2 border-[#ddd]">
            Summary
          </div>
          <p className="text-[12px]">
            Motivated AI/ML Intern with hands-on experience in machine learning
            models, deep learning, and data analysis. Passionate about
            leveraging AI for solving real-world problems.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-[15px]">
          <div className="text-[20px] font-bold text-[#0056b3] mb-[5px] border-b-2 border-[#ddd]">
            Technical Skills
          </div>
          <ul className="pl-[20px] text-[12px] space-y-[3px] list-disc">
            <li>
              <strong>Programming:</strong> Python, R, C++
            </li>
            <li>
              <strong>Libraries:</strong> TensorFlow, PyTorch, Scikit-Learn
            </li>
            <li>
              <strong>Data Science:</strong> Pandas, NumPy, Matplotlib
            </li>
            <li>
              <strong>Cloud:</strong> AWS, Google Cloud
            </li>
            <li>
              <strong>Databases:</strong> SQL, MongoDB
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className="mb-[15px]">
          <div className="text-[20px] font-bold text-[#0056b3] mb-[5px] border-b-2 border-[#ddd]">
            Experience
          </div>
          <div className="mt-[5px]">
            <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
              <span>AI Research Intern, TechCorp</span>
              <span>June 2023 – Present</span>
            </p>
            <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
              <li>
                Developed deep learning models for image recognition with 90%+
                accuracy
              </li>
              <li>Optimized data pipelines reducing processing time by 30%</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-[15px]">
          <div className="text-[20px] font-bold text-[#0056b3] mb-[5px] border-b-2 border-[#ddd]">
            Projects
          </div>
          <div className="mt-[5px]">
            <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
              <span>AI Chatbot for Customer Support</span>
              <span>Jan 2024 – Present</span>
            </p>
            <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
              <li>
                Designed and implemented an NLP-based chatbot using GPT models
              </li>
              <li>Deployed chatbot on AWS improving response time by 40%</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mb-[15px]">
          <div className="text-[20px] font-bold text-[#0056b3] mb-[5px] border-b-2 border-[#ddd]">
            Education
          </div>
          <div className="mt-[5px]">
            <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
              <span>Stanford University</span>
              <span>Expected May 2025</span>
            </p>
            <p className="text-[12px] mt-[5px]">
              B.S. in Computer Science | GPA: 3.9/4.0
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-[15px]">
          <div className="text-[20px] font-bold text-[#0056b3] mb-[5px] border-b-2 border-[#ddd]">
            Certifications
          </div>
          <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
            <li>TensorFlow Developer Certificate</li>
            <li>IBM AI Engineering Professional Certificate</li>
          </ul>
        </div>

        {/* Hobbies */}
        <div className="mb-[15px]">
          <div className="text-[20px] font-bold text-[#0056b3] mb-[5px] border-b-2 border-[#ddd]">
            Hobbies
          </div>
          <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
            <li>AI Blogging & Research</li>
            <li>Hackathons & Coding Challenges</li>
            <li>Podcasting about Emerging AI Technologies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume13;
