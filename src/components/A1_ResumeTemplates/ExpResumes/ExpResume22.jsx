import React from "react";

const ExpResume22 = () => {
  return (
    <div className="font-sans text-black bg-gray-100 min-h-screen flex justify-center items-center">
      <div
        className="bg-white shadow-md box-border overflow-hidden"
        style={{ width: "794px", padding: "20px" }}
      >
        {/* Header */}
        <div className="text-center mb-[15px]">
          <h1 className="text-[26px] font-bold uppercase tracking-[2px] m-0">
            Spencer Nova
          </h1>
          <div className="text-[20px] font-bold uppercase mt-[5px] mb-[5px]">
            Registered Nurse, RN, BSN
          </div>
          <div className="text-[12px] flex justify-center items-center">
            <span>100-555-5555</span>
            <span className="text-gray-600 mx-[2px]">|</span>
            <span>
              <a
                href="mailto:spencernova@gmail.com"
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                spencernova@gmail.com
              </a>
            </span>
            <span className="text-gray-600 mx-[2px]">|</span>
            <span>Portland, OR, 97201</span>
            <span className="text-gray-600 mx-[2px]">|</span>
            <span>
              <a
                href="https://linkedin.com/in/spencernova"
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/spencernova
              </a>
            </span>
            <span className="text-gray-600 mx-[2px]">|</span>
            <span>
              <a
                href="https://portfolio.spencernova.com"
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                portfolio.spencernova.com
              </a>
            </span>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase bg-[#e6f0fa] text-center py-[5px] border-b border-[#b3d4fc] mb-[8px]">
            Professional Summary
          </h2>
          <p className="text-[12px] leading-[1.4] m-[5px_0]">
            Dedicated Registered Nurse with over 8 years of experience in
            emergency and maternity care, specializing in patient triage and
            critical care coordination. Proficient in electronic health records
            and interdisciplinary collaboration, enhancing patient outcomes by
            15% through streamlined processes. Committed to leveraging
            leadership and communication skills to deliver high-quality care in
            dynamic healthcare settings.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase bg-[#e6f0fa] text-center py-[5px] border-b border-[#b3d4fc] mb-[8px]">
            Work Experience
          </h2>
          <div className="mb-[10px]">
            <div className="text-[12px] font-bold mb-[3px]">
              Registered Nurse
            </div>
            <div>
              <span className="text-[12px] italic">
                Mercy General Hospital, Portland, OR
              </span>
              <span className="text-[12px] italic float-right">
                June 2015 – Present
              </span>
            </div>
            <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] leading-[1.4]">
              <li>
                Managed patient triage in a 50-bed ER, reducing wait times by
                20%.
              </li>
              <li>
                Coordinated maternity care for 30+ patients weekly, improving
                satisfaction scores by 15%.
              </li>
              <li>
                Trained 10 new nurses on electronic health record systems,
                ensuring 100% compliance.
              </li>
            </ul>
          </div>
          <div>
            <div className="text-[12px] font-bold mb-[3px]">
              Nurse Practitioner (Contract)
            </div>
            <div>
              <span className="text-[12px] italic">
                ABC Hospital, Seattle, WA
              </span>
              <span className="text-[12px] italic float-right">
                June 2014 – May 2015
              </span>
            </div>
            <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] leading-[1.4]">
              <li>
                Provided urgent care for 25+ patients daily, achieving 95%
                positive feedback.
              </li>
              <li>
                Implemented IV management protocols, reducing complications by
                10%.
              </li>
              <li>
                Collaborated with physicians to update patient care plans,
                enhancing recovery rates.
              </li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase bg-[#e6f0fa] text-center py-[5px] border-b border-[#b3d4fc] mb-[8px]">
            Education
          </h2>
          <div className="flex justify-between items-center text-[12px]">
            <div className="font-bold">
              B.S. in Nursing
              <br />
              University of Portland, Portland, OR
              <br />
              Stream: Registered Nursing
            </div>
            <div className="italic">CGPA: 3.8/4.0</div>
            <div className="italic">2011 – 2015</div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase bg-[#e6f0fa] text-center py-[5px] border-b border-[#b3d4fc] mb-[8px]">
            Projects
          </h2>
          <div className="mb-[10px]">
            <div className="text-[12px] font-bold">Patient Care Dashboard</div>
            <div>
              <span className="text-[12px] italic">
                Technologies: Tableau, Python
              </span>
              <span className="text-[12px] italic float-right">
                Jan 2023 – Mar 2023
              </span>
            </div>
            <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] leading-[1.4]">
              <li>
                Developed a dashboard to visualize patient metrics, improving
                care coordination by 10%.
              </li>
              <li>Integrated Python scripts for real-time data processing.</li>
              <li>
                <a
                  href="https://github.com/spencernova/dashboard"
                  className="text-[#0000EE] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/spencernova/dashboard
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-[12px] font-bold">Health Education Portal</div>
            <div>
              <span className="text-[12px] italic">
                Technologies: HTML, CSS, JavaScript
              </span>
              <span className="text-[12px] italic float-right">
                Sep 2022 – Nov 2022
              </span>
            </div>
            <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] leading-[1.4]">
              <li>
                Built a web portal for patient education, reaching 500+ users.
              </li>
              <li>Designed responsive layouts for accessibility compliance.</li>
              <li>
                <a
                  href="https://github.com/spencernova/health-portal"
                  className="text-[#0000EE] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/spencernova/health-portal
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase bg-[#e6f0fa] text-center py-[5px] border-b border-[#b3d4fc] mb-[8px]">
            Certifications
          </h2>
          <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] leading-[1.4]">
            <li>
              <span className="font-bold">Registered Nurse (RN)</span>
              <br />
              Oregon State Board of Nursing, License #123456
              <br />
              Issued: Jun 2015, Expires: Jun 2025
            </li>
            <li>
              Certified Emergency Nurse – Board of Certification for Emergency
              Nursing
              <br />
              Issued: Aug 2022, Expires: Aug 2026
              <br />
              <a
                href="https://bcen.org/certifications"
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                bcen.org/certifications
              </a>
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase bg-[#e6f0fa] text-center py-[5px] border-b border-[#b3d4fc] mb-[8px]">
            Skills
          </h2>
          <div className="flex justify-between text-[12px]">
            <div className="w-[22%]">
              <p>Emergency Room</p>
              <p>IV Management</p>
              <p>Urgent Care</p>
              <p>Electronic Records</p>
            </div>
            <div className="w-[22%]">
              <p>Patient Triage</p>
              <p>Maternity</p>
              <p>Communication</p>
              <p>Leadership</p>
            </div>
            <div className="w-[22%]">
              <p>Teamwork</p>
              <p>Problem Solving</p>
              <p>Critical Thinking</p>
              <p>Time Management</p>
            </div>
            <div className="w-[22%]">
              <p>Conflict Resolution</p>
              <p>Adaptability</p>
              <p>Collaboration</p>
              <p>Attention to Detail</p>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold uppercase bg-[#e6f0fa] text-center py-[5px] border-b border-[#b3d4fc] mb-[8px]">
            Additional Information
          </h2>
          <div className="text-[12px] leading-[1.4]">
            <div className="font-bold">Languages</div>
            <ul className="list-disc pl-[20px] m-[5px_0]">
              <li>English (Fluent)</li>
              <li>Spanish (Intermediate)</li>
            </ul>
            <div className="font-bold mt-[5px]">Hobbies & Interests</div>
            <ul className="list-disc pl-[20px] m-[5px_0]">
              <li>Volunteering, Fitness, Medical Research</li>
            </ul>
            <div className="font-bold mt-[5px]">Achievements & Awards</div>
            <ul className="list-disc pl-[20px] m-[5px_0]">
              <li>
                Nurse Excellence Award – Mercy General, 2021
                <br />
                Recognized for patient care innovation
              </li>
              <li>
                Community Service Award – Portland Health Fair, 2020
                <br />
                Led health education workshops
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpResume22;
