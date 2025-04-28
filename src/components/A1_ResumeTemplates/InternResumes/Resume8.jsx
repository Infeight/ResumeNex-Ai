import React from "react";

const Resume8 = () => {
  return (
    <div className="font-sans w-[210mm] max-w-[880px] mx-auto p-[5mm] text-[#333]">
      <div className="bg-white p-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] rounded-[4px]">
        {/* Header */}
        <h1 className="text-[26px] font-bold text-[#004085] text-center mb-[5px] uppercase tracking-tight">
          Jane Doe
        </h1>

        {/* Contact - Simplified for ATS */}
        <div className="flex flex-wrap justify-center gap-x-[15px] text-[14px] text-[#004085] mb-[15px] text-center">
          <span>jane.doe@email.com</span>
          <span>|</span>
          <span>123-456-7890</span>
          <span>|</span>
          <span>New York, NY</span>
          <span>|</span>
          <span>linkedin.com/in/janedoe</span>
        </div>

        {/* Summary */}
        <div className="mb-[20px]">
          <h2 className="text-[16px] font-bold text-[#004085] border-b-2 border-[#004085] pb-[3px] mb-[10px] uppercase">
            Professional Summary
          </h2>
          <p className="text-[14px]">
            Product Management student with experience in agile methodologies,
            market research, and data-driven product development. Proven ability
            to translate user needs into product requirements and measurable
            business outcomes.
          </p>
        </div>

        {/* Skills - Organized into categories */}
        <div className="mb-[20px]">
          <h2 className="text-[16px] font-bold text-[#004085] border-b-2 border-[#004085] pb-[3px] mb-[10px] uppercase">
            Core Competencies
          </h2>
          <div className="grid grid-cols-2 gap-[10px] text-[14px]">
            <div>
              <h3 className="font-semibold text-[#004085]">
                Product Management
              </h3>
              <ul className="list-disc pl-[18px]">
                <li>Agile & Scrum Methodologies</li>
                <li>Product Roadmapping</li>
                <li>MVP Development</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#004085]">Technical Skills</h3>
              <ul className="list-disc pl-[18px]">
                <li>Figma, Adobe XD</li>
                <li>SQL, Google Analytics</li>
                <li>JIRA, Trello</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience - Quantifiable achievements */}
        <div className="mb-[20px]">
          <h2 className="text-[16px] font-bold text-[#004085] border-b-2 border-[#004085] pb-[3px] mb-[10px] uppercase">
            Professional Experience
          </h2>
          <div className="mb-[15px]">
            <div className="flex justify-between items-baseline mb-[5px]">
              <h3 className="text-[15px] font-bold">
                Product Management Intern
              </h3>
              <span className="text-[14px] font-semibold bg-[#004085] text-white px-[8px] py-[2px] rounded-[3px]">
                Jan 2024 - Present
              </span>
            </div>
            <p className="text-[14px] text-[#004085] mb-[5px]">
              XYZ Corp, New York, NY
            </p>
            <ul className="list-disc pl-[18px] text-[14px] space-y-[3px]">
              <li>
                Conducted market research that identified 3 new product
                opportunities with $500K+ potential
              </li>
              <li>
                Reduced MVP development time by 20% through improved requirement
                documentation
              </li>
              <li>
                Analyzed user behavior data to increase feature adoption by 35%
              </li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mb-[20px]">
          <h2 className="text-[16px] font-bold text-[#004085] border-b-2 border-[#004085] pb-[3px] mb-[10px] uppercase">
            Education
          </h2>
          <div className="flex justify-between items-baseline">
            <div>
              <h3 className="text-[15px] font-bold">
                B.S. Business & Product Management
              </h3>
              <p className="text-[14px] text-[#004085]">
                New York University, NY
              </p>
            </div>
            <span className="text-[14px] font-semibold">Expected May 2025</span>
          </div>
          <p className="text-[14px] mt-[3px]">
            GPA: 3.8/4.0 | Dean's List 4 Semesters
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-[20px]">
          <h2 className="text-[16px] font-bold text-[#004085] border-b-2 border-[#004085] pb-[3px] mb-[10px] uppercase">
            Certifications
          </h2>
          <div className="flex justify-between mb-[5px]">
            <p className="text-[14px] font-semibold">
              Certified Scrum Master (CSM)
            </p>
            <span className="text-[14px]">Scrum Alliance, 2023</span>
          </div>
          <div className="flex justify-between">
            <p className="text-[14px] font-semibold">Google Data Analytics</p>
            <span className="text-[14px]">Google, 2022</span>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-[20px]">
          <h2 className="text-[16px] font-bold text-[#004085] border-b-2 border-[#004085] pb-[3px] mb-[10px] uppercase">
            Key Achievements
          </h2>
          <ul className="list-disc pl-[18px] text-[14px] space-y-[3px]">
            <li>
              Winner: XYZ Hackathon 2023 (Team of 4 built product prototype in
              48 hours)
            </li>
            <li>
              Finalist: Product Strategy Case Competition (Top 5 out of 120
              teams)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume8;
