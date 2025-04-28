import React from "react";

const ExpResume24 = () => {
  return (
    <div className="font-sans text-black bg-gray-100 min-h-screen flex justify-center items-start py-[20px]">
      <div className="w-full max-w-[754px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b-2 border-black pb-[5px] mb-[10px]">
          <div className="text-left">
            <h1 className="text-[26px] font-bold m-0">Leah Camille</h1>
            <p className="text-[12px] m-[2px_0]">Registered Nurse, RN, BScN</p>
          </div>
          <div className="text-[24px]">
            <i className="fas fa-heartbeat"></i>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center text-[12px] mb-[10px]">
          <span className="mx-[5px]">
            <i className="fas fa-phone mr-[5px]"></i>123-321-5555
          </span>
          <span className="mx-[5px]">
            <i className="fas fa-envelope mr-[5px]"></i>
            <a
              href="mailto:leah.camille@gmail.com"
              className="text-[#0000EE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              leah.camille@gmail.com
            </a>
          </span>
          <span className="mx-[5px]">
            <i className="fas fa-map-marker-alt mr-[5px]"></i>Chicago, IL, 60601
          </span>
          <span className="mx-[5px]">
            <i className="fab fa-linkedin mr-[5px]"></i>
            <a
              href="https://linkedin.com/in/leahcamille"
              className="text-[#0000EE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/leahcamille
            </a>
          </span>
          <span className="mx-[5px]">
            <i className="fas fa-globe mr-[5px]"></i>
            <a
              href="https://portfolio.leahcamille.com"
              className="text-[#0000EE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              portfolio.leahcamille.com
            </a>
          </span>
        </div>

        {/* Professional Summary */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-center relative mb-[8px] before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[30%] before:h-[1px] before:bg-black after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[30%] after:h-[1px] after:bg-black">
            Professional Summary
          </h2>
          <p className="text-[12px] leading-[1.4]">
            Compassionate Registered Nurse with 8+ years of experience in
            emergency and maternity care, improving patient outcomes by 20%
            through effective triage and advocacy. Skilled in electronic medical
            records and interdisciplinary teamwork, with a proven record of
            leading initiatives that reduced ER wait times by 15%. Dedicated to
            delivering high-quality care in fast-paced healthcare environments.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-center relative mb-[8px] before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[30%] before:h-[1px] before:bg-black after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[30%] after:h-[1px] after:bg-black">
            Skills
          </h2>
          <div className="flex justify-between text-[12px]">
            <ul className="list-none p-0 m-0">
              <li className="mb-[5px]">
                <span className="font-bold">Technical Skills</span>
              </li>
              <li className="mb-[5px]">Emergency Room</li>
              <li className="mb-[5px]">IV Management</li>
              <li className="mb-[5px]">Patient Care</li>
              <li className="mb-[5px]">Electronic Medical Records</li>
              <li className="mb-[5px]">Patient Triage</li>
            </ul>
            <ul className="list-none p-0 m-0">
              <li className="mb-[5px]">
                <span className="font-bold">Soft Skills</span>
              </li>
              <li className="mb-[5px]">Maternity</li>
              <li className="mb-[5px]">Leadership</li>
              <li className="mb-[5px]">Communication</li>
              <li className="mb-[5px]">Teamwork</li>
              <li className="mb-[5px]">Problem Solving</li>
            </ul>
            <ul className="list-none p-0 m-0">
              <li className="mb-[5px]">
                <span className="font-bold">Other Skills</span>
              </li>
              <li className="mb-[5px]">Critical Thinking</li>
              <li className="mb-[5px]">Time Management</li>
              <li className="mb-[5px]">Decision Making</li>
              <li className="mb-[5px]">Patient Advocacy</li>
              <li className="mb-[5px]">Active Listening</li>
            </ul>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-center relative mb-[8px] before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[30%] before:h-[1px] before:bg-black after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[30%] after:h-[1px] after:bg-black">
            Work Experience
          </h2>
          <div className="mb-[10px]">
            <p className="text-[12px]">
              <span className="font-bold">Registered Nurse</span>
              <br />
              Northwestern Memorial Hospital, Chicago, IL
              <br />
              <span className="font-bold">June 2015 – Present</span>
            </p>
            <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] leading-[1.4]">
              <li>
                Led triage in a 60-bed ER, reducing patient wait times by 15%.
              </li>
              <li>
                Managed maternity care for 20+ patients weekly, improving
                satisfaction by 10%.
              </li>
              <li>Implemented EMR updates, ensuring 98% data accuracy.</li>
              <li>
                Trained 15 nurses on patient advocacy protocols, enhancing care
                quality.
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[12px]">
              <span className="font-bold">Nurse Practitioner (Contract)</span>
              <br />
              Rush University Medical Center, Chicago, IL
              <br />
              <span className="font-bold">June 2014 – May 2015</span>
            </p>
            <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] leading-[1.4]">
              <li>
                Provided care for 30+ patients daily, achieving 90% positive
                feedback.
              </li>
              <li>Optimized IV management, reducing complications by 12%.</li>
              <li>
                Collaborated on care plans, improving recovery rates by 8%.
              </li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-center relative mb-[8px] before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[30%] before:h-[1px] before:bg-black after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[30%] after:h-[1px] after:bg-black">
            Education
          </h2>
          <div className="flex justify-between text-[12px]">
            <div className="w-[48%]">
              <p>
                <span className="font-bold">B.Sc. in Nursing</span>
                <br />
                University of Illinois, Chicago, IL
                <br />
                Stream: Registered Nursing
                <br />
                <span className="font-bold">2011 – 2015</span>
              </p>
            </div>
            <div className="w-[48%]">
              <p>
                <span className="font-bold">CGPA</span>
                <br />
                3.8/4.0
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-center relative mb-[8px] before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[30%] before:h-[1px] before:bg-black after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[30%] after:h-[1px] after:bg-black">
            Certifications
          </h2>
          <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] leading-[1.4]">
            <li>
              <span className="font-bold">Registered Nurse (RN)</span>
              <br />
              Illinois Board of Nursing, License #654321
              <br />
              Issued: Jun 2015, Expires: Jun 2025
            </li>
            <li>
              Certified Critical Care Nurse – AACN
              <br />
              Issued: Sep 2022, Expires: Sep 2026
              <br />
              <a
                href="https://aacn.org/certifications"
                className="text-[#0000EE] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                aacn.org/certifications
              </a>
            </li>
          </ul>
        </div>

        {/* Projects */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-center relative mb-[8px] before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[30%] before:h-[1px] before:bg-black after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[30%] after:h-[1px] after:bg-black">
            Projects
          </h2>
          <div className="mb-[10px]">
            <p className="text-[12px]">
              <span className="font-bold">Patient Monitoring Dashboard</span>
              <br />
              Technologies: Tableau, Python
              <br />
              <span className="font-bold">Jan 2023 – Mar 2023</span>
            </p>
            <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] leading-[1.4]">
              <li>
                Developed a dashboard to track patient vitals, improving
                response time by 10%.
              </li>
              <li>Used Python for data integration from EMR systems.</li>
              <li>
                <a
                  href="https://github.com/leahcamille/monitoring"
                  className="text-[#0000EE] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/leahcamille/monitoring
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[12px]">
              <span className="font-bold">Health Education Portal</span>
              <br />
              Technologies: HTML, CSS
              <br />
              <span className="font-bold">Sep 2022 – Nov 2022</span>
            </p>
            <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] leading-[1.4]">
              <li>
                Built a portal for patient education, reaching 600+ users.
              </li>
              <li>Ensured accessibility compliance for diverse audiences.</li>
              <li>
                <a
                  href="https://github.com/leahcamille/health-portal"
                  className="text-[#0000EE] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/leahcamille/health-portal
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mb-[15px]">
          <h2 className="text-[20px] font-bold text-center relative mb-[8px] before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[30%] before:h-[1px] before:bg-black after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[30%] after:h-[1px] after:bg-black">
            Additional Information
          </h2>
          <div className="text-[12px] leading-[1.4]">
            <div className="font-bold">Languages</div>
            <ul className="list-disc pl-[20px] m-[5px_0]">
              <li>English (Fluent)</li>
              <li>French (Intermediate)</li>
            </ul>
            <div className="font-bold mt-[5px]">Hobbies & Interests</div>
            <ul className="list-disc pl-[20px] m-[5px_0]">
              <li>Volunteering, Yoga, Medical Research</li>
            </ul>
            <div className="font-bold mt-[5px]">Achievements & Awards</div>
            <ul className="list-disc pl-[20px] m-[5px_0]">
              <li>
                Nurse Leadership Award – Northwestern, 2021
                <br />
                Recognized for ER efficiency initiatives
              </li>
              <li>
                Community Health Award – Chicago Health Fair, 2020
                <br />
                Led patient education workshops
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpResume24;
