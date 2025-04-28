// src/components/Resume12.js
import React from "react";

const Resume12 = () => {
  return (
    <div className="font-['Arial',sans-serif] w-[794px] mx-auto my-[20px] p-5 bg-[#f5f7fa] text-[#333] leading-[1.5] overflow-x-hidden">
      {/* Header */}
      <h1 className="text-[26px] text-[#1b3a57] text-center mb-[5px] font-bold">
        John Doe
      </h1>
      <div className="text-[12px] text-center mb-[15px]">
        <p>
          Email:{" "}
          <a
            href="mailto:john.doe@email.com"
            className="text-[#1b3a57] no-underline hover:underline"
          >
            john.doe@email.com
          </a>{" "}
          | Phone: +1 312-555-9876
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1b3a57] no-underline hover:underline"
          >
            linkedin.com/in/johndoe
          </a>{" "}
          | GitHub:{" "}
          <a
            href="https://github.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1b3a57] no-underline hover:underline"
          >
            github.com/johndoe
          </a>
        </p>
      </div>

      {/* Summary */}
      <div className="mb-[15px] p-[10px] bg-white border-l-2 border-[#1b3a57]">
        <div className="text-[20px] font-bold text-[#1b3a57] mb-[5px]">
          Summary
        </div>
        <p className="text-[12px]">
          Passionate AI/ML Intern with hands-on experience in deep learning,
          model optimization, and data science. Adept at building and deploying
          scalable machine learning models.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mb-[15px] p-[10px] bg-white border-l-2 border-[#1b3a57]">
        <div className="text-[20px] font-bold text-[#1b3a57] mb-[5px]">
          Technical Skills
        </div>
        <ul className="pl-[20px] text-[12px] space-y-[3px] list-disc">
          <li>Machine Learning: TensorFlow, PyTorch, Scikit-learn</li>
          <li>Programming: Python, R, SQL</li>
          <li>Data Science: Pandas, NumPy, Matplotlib</li>
          <li>Cloud & Deployment: AWS, Google Cloud, Docker</li>
        </ul>
      </div>

      {/* Experience */}
      <div className="mb-[15px] p-[10px] bg-white border-l-2 border-[#1b3a57]">
        <div className="text-[20px] font-bold text-[#1b3a57] mb-[5px]">
          Experience
        </div>
        <div className="mt-[5px]">
          <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
            <span>AI Research Intern, ABC Labs</span>
            <span>May 2023 – Aug 2023</span>
          </p>
          <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
            <li>
              Developed and optimized NLP models, improving classification
              accuracy by 15%
            </li>
            <li>
              Conducted data preprocessing and feature engineering for deep
              learning projects
            </li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-[15px] p-[10px] bg-white border-l-2 border-[#1b3a57]">
        <div className="text-[20px] font-bold text-[#1b3a57] mb-[5px]">
          Projects
        </div>
        <div className="mt-[5px]">
          <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
            <span>Autonomous Image Classification</span>
            <span>Jan 2024 – Present</span>
          </p>
          <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
            <li>
              Implemented CNN models for real-time image classification with 92%
              accuracy
            </li>
            <li>Optimized model inference using TensorRT for deployment</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mb-[15px] p-[10px] bg-white border-l-2 border-[#1b3a57]">
        <div className="text-[20px] font-bold text-[#1b3a57] mb-[5px]">
          Education
        </div>
        <div className="mt-[5px]">
          <p className="flex justify-between text-[14px] font-bold text-[#333] m-0">
            <span>Stanford University</span>
            <span>Expected May 2025</span>
          </p>
          <p className="text-[12px] mt-[5px]">
            B.S. in Artificial Intelligence & Machine Learning | GPA: 3.9/4.0
          </p>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-[15px] p-[10px] bg-white border-l-2 border-[#1b3a57]">
        <div className="text-[20px] font-bold text-[#1b3a57] mb-[5px]">
          Certifications
        </div>
        <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
          <li>Deep Learning Specialization – Coursera</li>
          <li>Google Cloud Machine Learning Engineer</li>
        </ul>
      </div>

      {/* Hobbies */}
      <div className="mb-[15px] p-[10px] bg-white border-l-2 border-[#1b3a57]">
        <div className="text-[20px] font-bold text-[#1b3a57] mb-[5px]">
          Hobbies
        </div>
        <ul className="pl-[20px] text-[12px] space-y-[3px] mt-[5px] list-disc">
          <li>Competitive Programming & AI Challenges</li>
          <li>Open-Source AI Development</li>
          <li>Data Visualization & Storytelling</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume12;
