import React from "react";

const Resume10 = () => {
  return (
    <div className="font-['Arial',sans-serif] w-[210mm] h-auto mx-auto p-[5mm] box-border leading-[1.4] bg-[#f8fafc] text-[#2d2d2d]">
      <div className="max-h-auto overflow-hidden">
        {/* Header - Gradient preserved with larger text */}
        <div className="bg-gradient-to-br from-[#e0e7ff] to-[#dbeafe] p-[20px] text-center rounded-[8px] mb-[15px]">
          <h1 className="text-[24px] m-0 text-[#1e3a8a] font-bold">
            SOPHIA NGUYEN
          </h1>
          <div className="text-[14px] mt-[8px] text-[#1e3a8a]">
            <span className="block m-[4px_0]">
              <a
                href="mailto:sophia.nguyen@email.com"
                className="text-[#1e3a8a] no-underline"
              >
                sophia.nguyen@email.com
              </a>
            </span>
            <span className="block m-[4px_0]">312-555-0444</span>
            <span className="block m-[4px_0]">Chicago, IL</span>
            <span className="block m-[4px_0]">
              <a
                href="https://linkedin.com/in/sophianguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e3a8a] no-underline"
              >
                linkedin.com/in/sophianguyen
              </a>
            </span>
          </div>
        </div>

        {/* Summary - Enhanced readability */}
        <div className="m-[12px_0] p-[12px] bg-white rounded-[6px]">
          <div className="text-[16px] font-bold text-[#1e3a8a] p-[4px_0] mb-[8px] bg-[#f1f5f9]">
            PROFESSIONAL SUMMARY
          </div>
          <p className="text-[14px] m-[4px_0] leading-[1.5]">
            Detail-oriented Business Analyst with expertise in SQL data analysis
            and process optimization. Proven ability to identify efficiency
            improvements and translate data insights into actionable business
            strategies. Seeking internship to apply analytical skills in a
            dynamic environment.
          </p>
        </div>

        {/* Skills - Better organized */}
        <div className="m-[12px_0] p-[12px] bg-white rounded-[6px]">
          <div className="text-[16px] font-bold text-[#1e3a8a] p-[4px_0] mb-[8px] bg-[#f1f5f9]">
            TECHNICAL SKILLS
          </div>
          <ul className="text-[14px] m-[4px_0] pl-[18px] space-y-[4px]">
            <li>
              <strong>Data Analysis:</strong> SQL, Tableau, Excel (Advanced
              Formulas, PivotTables)
            </li>
            <li>
              <strong>Business Tools:</strong> Jira, Confluence, Agile
              Methodologies
            </li>
            <li>
              <strong>Process Improvement:</strong> Requirements Gathering,
              Workflow Optimization
            </li>
            <li>
              <strong>Soft Skills:</strong> Stakeholder Communication, Critical
              Thinking, Presentation
            </li>
          </ul>
        </div>

        {/* Experience - Enhanced content */}
        <div className="m-[12px_0] p-[12px] bg-white rounded-[6px]">
          <div className="text-[16px] font-bold text-[#1e3a8a] p-[4px_0] mb-[8px] bg-[#f1f5f9]">
            PROFESSIONAL EXPERIENCE
          </div>
          <div className="mb-[12px]">
            <div className="experience-line flex justify-between items-center text-[14px] m-[4px_0]">
              <strong>Business Analyst Intern | DataCore Inc.</strong>
              <span className="bg-[#e0e7ff] text-[#1e3a8a] px-[8px] py-[2px] rounded-[4px]">
                Jan 2024 – Jun 2024
              </span>
            </div>
            <ul className="text-[14px] m-[4px_0] pl-[18px] space-y-[4px]">
              <li>
                Identified 15% operational efficiency gap through analysis of
                10,000+ sales records using SQL and Tableau
              </li>
              <li>
                Streamlined workflows for 3 cross-functional teams by
                documenting requirements in Jira
              </li>
              <li>
                Presented data-driven recommendations to management, influencing
                Q2 strategic planning
              </li>
            </ul>
          </div>
        </div>

        {/* Projects - More impactful */}
        <div className="m-[12px_0] p-[12px] bg-white rounded-[6px]">
          <div className="text-[16px] font-bold text-[#1e3a8a] p-[4px_0] mb-[8px] bg-[#f1f5f9]">
            KEY PROJECTS
          </div>
          <div className="mb-[10px]">
            <div className="project-line flex justify-between items-center text-[14px] m-[4px_0]">
              <strong>Customer Insights Dashboard</strong>
              <span className="bg-[#e0e7ff] text-[#1e3a8a] px-[8px] py-[2px] rounded-[4px]">
                Mar 2024 – May 2024
              </span>
            </div>
            <ul className="text-[14px] m-[4px_0] pl-[18px] space-y-[4px]">
              <li>
                Developed interactive Tableau dashboard analyzing customer
                behavior patterns from SQL database
              </li>
              <li>
                Recommended pricing adjustments projected to increase revenue by
                10% annually
              </li>
            </ul>
          </div>
          <div>
            <div className="project-line flex justify-between items-center text-[14px] m-[4px_0]">
              <strong>Supply Chain Process Optimization</strong>
              <span className="bg-[#e0e7ff] text-[#1e3a8a] px-[8px] py-[2px] rounded-[4px]">
                Oct 2023 – Dec 2023
              </span>
            </div>
            <ul className="text-[14px] m-[4px_0] pl-[18px] space-y-[4px]">
              <li>
                Modeled supply chain workflows in Excel, identifying bottlenecks
                causing 20% delivery delays
              </li>
              <li>
                Presented optimization plan to executives, approved for pilot
                implementation
              </li>
            </ul>
          </div>
        </div>

        {/* Education - Enhanced presentation */}
        <div className="m-[12px_0] p-[12px] bg-white rounded-[6px]">
          <div className="text-[16px] font-bold text-[#1e3a8a] p-[4px_0] mb-[8px] bg-[#f1f5f9]">
            EDUCATION
          </div>
          <div className="education-line flex justify-between items-center text-[14px] m-[4px_0]">
            <div>
              <strong>B.S. Business Administration</strong>
              <div className="text-[#1e3a8a]">
                University of Illinois at Chicago
              </div>
            </div>
            <div className="text-right">
              <span>Expected May 2026</span>
              <div>GPA: 3.7/4.0</div>
            </div>
          </div>
        </div>

        {/* Hobbies - More professional */}
        <div className="m-[12px_0] p-[12px] bg-white rounded-[6px]">
          <div className="text-[16px] font-bold text-[#1e3a8a] p-[4px_0] mb-[8px] bg-[#f1f5f9]">
            INTERESTS
          </div>
          <ul className="text-[14px] m-[4px_0] pl-[18px] space-y-[4px]">
            <li>Data visualization techniques</li>
            <li>Business case competitions</li>
            <li>Process optimization strategies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume10;
