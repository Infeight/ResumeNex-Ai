import React from "react";

const ExpResume9 = () => {
  return (
    <div className="font-['Verdana',sans-serif] text-gray-800 w-[794px] min-h-[1122px] mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Personal Info & Job Role */}
        <div className="flex justify-between items-center border-b-4 border-blue-700 pb-4 mb-5">
          <h1 className="text-[26px] font-bold text-blue-700">John Doe</h1>
          <div className="text-right text-[12px]">
            <p>
              <i className="fas fa-envelope mr-1 text-blue-700"></i>{" "}
              <a
                href="mailto:john.doe@email.com"
                className="text-gray-800 hover:underline"
              >
                john.doe@email.com
              </a>{" "}
              | <i className="fas fa-phone mr-1 text-blue-700"></i> +1
              123-456-7890
            </p>
            <p>
              <i className="fab fa-linkedin mr-1 text-blue-700"></i>{" "}
              <a
                href="https://linkedin.com/in/johndoe"
                className="text-gray-800 hover:underline"
              >
                linkedin.com/in/johndoe
              </a>{" "}
              | <i className="fab fa-github mr-1 text-blue-700"></i>{" "}
              <a
                href="https://github.com/johndoe"
                className="text-gray-800 hover:underline"
              >
                github.com/johndoe
              </a>{" "}
              |{" "}
              <a
                href="https://johndoe.dev"
                className="text-gray-800 hover:underline"
              >
                johndoe.dev
              </a>
            </p>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="mb-5">
          <h2 className="text-[20px] font-bold text-blue-700 border-b-2 border-gray-300 pb-1 mb-1">
            Profile Summary
          </h2>
          <div className="flex">
            <div className="w-[65%] text-[12px]">
              <p>
                Motivated AI/ML Intern with hands-on experience in machine
                learning models, deep learning, and data analysis. Passionate
                about leveraging AI for solving real-world problems.
              </p>
            </div>
            <div className="w-[30%] text-right text-[12px]">
              <p>Char Count: 180</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-5">
          <h2 className="text-[20px] font-bold text-blue-700 border-b-2 border-gray-300 pb-1 mb-1">
            Skills
          </h2>
          <div className="flex">
            <div className="w-[65%] text-[12px] grid grid-cols-2 gap-2">
              <div>
                <p className="font-bold">Technical Skills:</p>
                <ul className="list-disc pl-5">
                  <li>Programming: Python, R, C++</li>
                  <li>Libraries: TensorFlow, PyTorch, Scikit-Learn</li>
                  <li>Data Science: Pandas, NumPy, Matplotlib</li>
                  <li>Cloud: AWS, Google Cloud</li>
                  <li>Databases: SQL, MongoDB</li>
                </ul>
              </div>
              <div>
                <p className="font-bold">Soft Skills:</p>
                <ul className="list-disc pl-5">
                  <li>Problem-Solving, Innovation</li>
                </ul>
              </div>
            </div>
            <div className="w-[30%] text-right text-[12px]">
              <p>Proficiency: Intermediate</p>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-5">
          <h2 className="text-[20px] font-bold text-blue-700 border-b-2 border-gray-300 pb-1 mb-1">
            Work Experience
          </h2>
          <div className="flex mb-3">
            <div className="w-[65%]">
              <h3 className="text-[14px] font-bold">AI Research Intern</h3>
              <p className="text-[12px] italic">TechCorp, Stanford, CA</p>
              <ul className="list-disc pl-5 text-[12px]">
                <li>
                  Developed deep learning models for image recognition with 90%+
                  accuracy.
                </li>
                <li>
                  Optimized data pipelines reducing processing time by 30%.
                </li>
              </ul>
            </div>
            <div className="w-[30%] text-right text-[12px]">
              <p>Jun 2023 - Present</p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-5">
          <h2 className="text-[20px] font-bold text-blue-700 border-b-2 border-gray-300 pb-1 mb-1">
            Projects
          </h2>
          <div className="flex mb-3">
            <div className="w-[65%]">
              <h3 className="text-[14px] font-bold">
                AI Chatbot for Customer Support
              </h3>
              <p className="text-[12px] italic">Personal Project</p>
              <p className="text-[12px]">
                <a
                  href="https://github.com/johndoe/ai-chatbot"
                  className="text-gray-800 hover:underline"
                >
                  GitHub
                </a>
              </p>
              <p className="text-[12px]">Technologies: Python, GPT, AWS</p>
              <p className="text-[12px]">
                Summary: Designed an NLP-based chatbot for efficient customer
                support.
              </p>
              <ul className="list-disc pl-5 text-[12px]">
                <li>
                  Designed and implemented an NLP-based chatbot using GPT
                  models.
                </li>
                <li>Deployed chatbot on AWS improving response time by 40%.</li>
              </ul>
            </div>
            <div className="w-[30%] text-right text-[12px]">
              <p>Jan 2024 - Present</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-5">
          <h2 className="text-[20px] font-bold text-blue-700 border-b-2 border-gray-300 pb-1 mb-1">
            Education
          </h2>
          <div className="flex">
            <div className="w-[65%]">
              <h3 className="text-[14px] font-bold">
                B.S. in Computer Science
              </h3>
              <p className="text-[12px] italic">
                Stanford University, Stanford, CA
              </p>
              <p className="text-[12px]">GPA: 3.9/4.0</p>
            </div>
            <div className="w-[30%] text-right text-[12px]">
              <p>Aug 2021 - Expected May 2025</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-5">
          <h2 className="text-[20px] font-bold text-blue-700 border-b-2 border-gray-300 pb-1 mb-1">
            Certifications
          </h2>
          <div className="flex">
            <div className="w-[65%] text-[12px]">
              <p>
                <span className="font-bold">
                  TensorFlow Developer Certificate
                </span>{" "}
                - TensorFlow
                <br />
                <a
                  href="https://tensorflow.org/verify/developer"
                  className="text-gray-800 hover:underline"
                >
                  Verify
                </a>
              </p>
              <p>
                <span className="font-bold">
                  IBM AI Engineering Professional Certificate
                </span>{" "}
                - IBM
                <br />
                <a
                  href="https://ibm.com/verify/ai-engineering"
                  className="text-gray-800 hover:underline"
                >
                  Verify
                </a>
              </p>
            </div>
            <div className="w-[30%] text-right text-[12px]">
              <p>
                Issued: Dec 2023
                <br />
                No Expiry
              </p>
              <p>
                Issued: Nov 2023
                <br />
                No Expiry
              </p>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mb-5">
          <h2 className="text-[20px] font-bold text-blue-700 border-b-2 border-gray-300 pb-1 mb-1">
            Additional Information
          </h2>
          <div className="flex">
            <div className="w-[65%] text-[12px]">
              <p className="font-bold">Languages:</p>
              <ul className="list-disc pl-5">
                <li>English (Fluent)</li>
              </ul>
              <p className="font-bold mt-2">Hobbies & Interests:</p>
              <ul className="list-disc pl-5">
                <li>AI Blogging & Research</li>
                <li>Hackathons & Coding Challenges</li>
                <li>Podcasting about Emerging AI Technologies</li>
              </ul>
              <p className="font-bold mt-2">Achievements & Awards:</p>
              <ul className="list-disc pl-5">
                <li>AI Hackathon Winner, Stanford, 2024</li>
              </ul>
            </div>
            <div className="w-[30%] text-right text-[12px]">
              <p>Fluency: Native</p>
              <p>Years Active: 2+</p>
              <p>Award Date: Mar 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpResume9;
