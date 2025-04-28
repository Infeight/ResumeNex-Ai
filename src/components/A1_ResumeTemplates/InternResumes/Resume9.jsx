import React from "react";

const Resume9 = () => {
  return (
    <div className="font-sans w-[210mm] max-w-[880px] mx-auto my-[30px] p-[5mm] bg-[#f4f4f4] text-[#333]">
      {/* Header - Compact with strong visual hierarchy */}
      <div className="bg-[#0056b3] text-white p-[20px] rounded-t-[8px] mb-[20px]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="m-0 text-[24px] font-bold uppercase tracking-tight">
              JOHN DOE
            </h1>
            <p className="text-[16px] mt-[5px] mb-0">Business Analyst</p>
          </div>
          <div className="text-right text-[14px]">
            <p className="m-[3px_0]">john.doe@email.com</p>
            <p className="m-[3px_0]">312-555-1234</p>
            <p className="m-[3px_0]">Chicago, IL</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-[20px] p-[15px] bg-white rounded-[6px]">
        <h2 className="text-[16px] font-bold text-[#0056b3] border-b border-[#0056b3] pb-[3px] mb-[10px] uppercase">
          Professional Summary
        </h2>
        <p className="text-[14px]">
          Business Analytics student with internship experience in data
          analysis, financial modeling, and market research. Proven ability to
          translate complex data into actionable insights that drive business
          decisions.
        </p>
      </div>

      {/* Technical Skills - Organized for ATS */}
      <div className="mb-[20px] p-[15px] bg-white rounded-[6px]">
        <h2 className="text-[16px] font-bold text-[#0056b3] border-b border-[#0056b3] pb-[3px] mb-[10px] uppercase">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 gap-[10px] text-[14px]">
          <div>
            <h3 className="font-semibold text-[#0056b3]">Data Analysis</h3>
            <ul className="list-disc pl-[18px]">
              <li>SQL, Python (Pandas, NumPy)</li>
              <li>Excel (VBA, Pivot Tables)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#0056b3]">
              Business Intelligence
            </h3>
            <ul className="list-disc pl-[18px]">
              <li>Tableau, Power BI</li>
              <li>Data Visualization</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#0056b3]">Business Analysis</h3>
            <ul className="list-disc pl-[18px]">
              <li>Financial Modeling</li>
              <li>Market Research</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Experience - Quantifiable achievements */}
      <div className="mb-[20px] p-[15px] bg-white rounded-[6px]">
        <h2 className="text-[16px] font-bold text-[#0056b3] border-b border-[#0056b3] pb-[3px] mb-[10px] uppercase">
          Professional Experience
        </h2>
        <div className="mb-[15px]">
          <div className="flex justify-between items-baseline mb-[5px]">
            <h3 className="text-[15px] font-bold">Business Analyst Intern</h3>
            <span className="text-[14px] font-semibold">
              Jan 2024 - Present
            </span>
          </div>
          <p className="text-[14px] text-[#0056b3] mb-[5px]">
            ABC Corp, New York, NY
          </p>
          <ul className="list-disc pl-[18px] text-[14px] space-y-[3px]">
            <li>
              Improved decision-making efficiency by 30% through Tableau
              dashboards analyzing 10K+ data points
            </li>
            <li>
              Identified $2M revenue opportunity through comprehensive market
              analysis
            </li>
            <li>
              Automated 5 weekly reports using Python, saving 15 hours/week
            </li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between items-baseline mb-[5px]">
            <h3 className="text-[15px] font-bold">Data Analyst Intern</h3>
            <span className="text-[14px] font-semibold">
              May 2023 - Dec 2023
            </span>
          </div>
          <p className="text-[14px] text-[#0056b3] mb-[5px]">
            XYZ Consulting, Chicago, IL
          </p>
          <ul className="list-disc pl-[18px] text-[14px] space-y-[3px]">
            <li>
              Reduced financial reporting time by 40% through VBA automation
            </li>
            <li>
              Presented data-driven insights to C-suite executives, influencing
              Q3 strategy
            </li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mb-[20px] p-[15px] bg-white rounded-[6px]">
        <h2 className="text-[16px] font-bold text-[#0056b3] border-b border-[#0056b3] pb-[3px] mb-[10px] uppercase">
          Education
        </h2>
        <div className="flex justify-between items-baseline">
          <div>
            <h3 className="text-[15px] font-bold">B.S. Business Analytics</h3>
            <p className="text-[14px] text-[#0056b3]">New York University</p>
          </div>
          <span className="text-[14px] font-semibold">Expected May 2025</span>
        </div>
        <p className="text-[14px]">GPA: 3.8/4.0 | Dean's List 3 Semesters</p>
      </div>

      {/* Certifications */}
      <div className="mb-[20px] p-[15px] bg-white rounded-[6px]">
        <h2 className="text-[16px] font-bold text-[#0056b3] border-b border-[#0056b3] pb-[3px] mb-[10px] uppercase">
          Certifications
        </h2>
        <div className="flex justify-between mb-[5px]">
          <p className="text-[14px] font-semibold">Google Data Analytics</p>
          <span className="text-[14px]">Google, 2023</span>
        </div>
        <div className="flex justify-between">
          <p className="text-[14px] font-semibold">CBAP Certification</p>
          <span className="text-[14px]">IIBA, 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Resume9;
