import React from "react";

const Resume14 = () => {
  return (
    <div className="font-[Georgia,serif] m-0 p-0 bg-white text-black">
      <div className="w-[794px] mx-auto my-[20px] p-5 overflow-x-hidden">
        {/* Header */}
        <div className="mb-[15px]">
          <div className="flex justify-between items-start">
            <div className="w-[65%]">
              <h1 className="text-[26px] font-bold text-left m-0 mb-[5px]">
                Sophia Marie Chen
              </h1>
              <p className="text-[15px] font-bold  m-[5px_0]">UX Designer</p>
            </div>
          </div>
          <p className="text-[12px] m-[5px_0]">
            (666) 987-6543 | sophia.chen@email.com |{" "}
            <a
              href="https://linkedin.com/in/sophiachen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black no-underline hover:underline"
            >
              linkedin.com/in/sophiachen
            </a>
            <br />
            <a
              href="https://sophiachen.design"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black no-underline hover:underline"
            >
              sophiachen.design
            </a>{" "}
            | 789 User Street, Portland, OR 97201
          </p>
        </div>

        {/* Education */}
        <section className="mb-[15px]">
          <h2 className="text-[20px] font-bold m-[15px_0_5px_0] border-b border-black">
            Education
          </h2>
          <div className="flex justify-between items-start">
            <div className="w-[65%]">
              <h3 className="text-[14px] font-bold m-[10px_0_5px_0]">
                B.A. in Interaction Design
              </h3>
              <p className="text-[12px] m-[5px_0]">
                Portland State University, Portland, OR
              </p>
              <p className="text-[12px] m-[5px_0]">
                Focus: User Experience and Interface Design
              </p>
            </div>
            <div className="w-[30%] text-right">
              <p className="text-[12px] m-[5px_0]">September 2018 - May 2022</p>
              <p className="text-[12px] m-[5px_0]">CGPA: 3.95/4.0</p>
              <p className="text-[12px] m-[5px_0]">Dean’s List: 8 Semesters</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-[15px]">
          <h2 className="text-[20px] font-bold m-[15px_0_5px_0] border-b border-black">
            Projects
          </h2>
          <div className="mt-[5px]">
            <div className="flex justify-between items-start">
              <div className="w-[65%]">
                <h3 className="text-[14px] font-bold m-[10px_0_5px_0]">
                  Mobile Banking App Redesign
                </h3>
                <p className="text-[12px] m-[5px_0]">
                  Technologies: Figma, Adobe XD, UserTesting
                </p>
                <p className="text-[12px] m-[5px_0]">
                  <a
                    href="https://github.com/sophiachen/banking-redesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black no-underline hover:underline"
                  >
                    github.com/sophiachen/banking-redesign
                  </a>
                </p>
                <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
                  <li>Redesigned app UI in Figma, boosting usability 40%</li>
                  <li>Conducted 20+ user tests to refine navigation</li>
                  <li>Improved user satisfaction scores by 30%</li>
                  <li>Presented findings to a team of 15 stakeholders</li>
                </ul>
              </div>
              <div className="w-[30%] text-right">
                <p className="text-[12px] m-[5px_0]">March 2022 - May 2022</p>
                <p className="text-[12px] m-[5px_0]">Team Size: 4</p>
                <p className="text-[12px] m-[5px_0]">
                  Outcome: Adopted by Client
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[10px]">
            <div className="flex justify-between items-start">
              <div className="w-[65%]">
                <h3 className="text-[14px] font-bold m-[10px_0_5px_0]">
                  E-Commerce Website Overhaul
                </h3>
                <p className="text-[12px] m-[5px_0]">
                  Technologies: Sketch, InVision, Google Analytics
                </p>
                <p className="text-[12px] m-[5px_0]">
                  Portfolio:{" "}
                  <a
                    href="https://sophiachen.design/ecommerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black no-underline hover:underline"
                  >
                    sophiachen.design/ecommerce
                  </a>
                </p>
                <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
                  <li>
                    Revamped checkout flow, reducing cart abandonment by 25%
                  </li>
                  <li>Designed responsive layouts for mobile and desktop</li>
                  <li>Analyzed user data to optimize product placement</li>
                </ul>
              </div>
              <div className="w-[30%] text-right">
                <p className="text-[12px] m-[5px_0]">
                  January 2023 - April 2023
                </p>
                <p className="text-[12px] m-[5px_0]">Users Tested: 50+</p>
                <p className="text-[12px] m-[5px_0]">Impact: +15% Sales</p>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-[15px]">
          <h2 className="text-[20px] font-bold m-[15px_0_5px_0] border-b border-black">
            Work Experience
          </h2>
          <div className="mt-[5px]">
            <div className="flex justify-between items-start">
              <div className="w-[65%]">
                <h3 className="text-[14px] font-bold m-[10px_0_5px_0]">
                  UX Design Intern
                </h3>
                <p className="text-[12px] m-[5px_0]">
                  DesignFlow Studio, Portland, OR
                </p>
                <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
                  <li>Created wireframes and prototypes in Adobe XD</li>
                  <li>Enhanced user flows, reducing clicks by 25%</li>
                  <li>Collaborated with devs to implement designs</li>
                  <li>
                    Assisted in client presentations and feedback sessions
                  </li>
                </ul>
              </div>
              <div className="w-[30%] text-right">
                <p className="text-[12px] m-[5px_0]">June 2021 - August 2021</p>
                <p className="text-[12px] m-[5px_0]">Projects: 3</p>
                <p className="text-[12px] m-[5px_0]">Supervisor: Jane Doe</p>
              </div>
            </div>
          </div>
          <div className="mt-[10px]">
            <div className="flex justify-between items-start">
              <div className="w-[65%]">
                <h3 className="text-[14px] font-bold m-[10px_0_5px_0]">
                  Junior UX Designer
                </h3>
                <p className="text-[12px] m-[5px_0]">
                  TechTrend Innovations, Remote
                </p>
                <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
                  <li>Led usability testing for a SaaS dashboard</li>
                  <li>Designed intuitive interfaces for enterprise clients</li>
                  <li>
                    Reduced onboarding time by 20% through UI improvements
                  </li>
                </ul>
              </div>
              <div className="w-[30%] text-right">
                <p className="text-[12px] m-[5px_0]">
                  July 2022 - December 2023
                </p>
                <p className="text-[12px] m-[5px_0]">Clients: 5</p>
                <p className="text-[12px] m-[5px_0]">Rating: 4.8/5</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-[15px]">
          <h2 className="text-[20px] font-bold m-[15px_0_5px_0] border-b border-black">
            Certifications
          </h2>
          <div className="flex justify-between items-start">
            <div className="w-[65%]">
              <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
                <li>UX Design Professional - Coursera</li>
                <li>Human-Centered Design - IDEO</li>
                <li>Advanced Prototyping - Udemy</li>
              </ul>
            </div>
            <div className="w-[30%] text-right">
              <p className="text-[12px] m-[5px_0]">Issued: October 2022</p>
              <p className="text-[12px] m-[5px_0]">Issued: July 2021</p>
              <p className="text-[12px] m-[5px_0]">Issued: March 2023</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-[15px]">
          <h2 className="text-[20px] font-bold m-[15px_0_5px_0] border-b border-black">
            Skills
          </h2>
          <div className="flex justify-between items-start">
            <div className="w-[65%]">
              <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
                <li>Technical: Figma, Adobe XD, UserTesting, Sketch</li>
                <li>Soft: Empathy, Creativity, Communication, Teamwork</li>
              </ul>
            </div>
            <div className="w-[30%] text-right">
              <p className="text-[12px] m-[5px_0]">Proficiency: Expert</p>
              <p className="text-[12px] m-[5px_0]">Experience: 4+ Years</p>
            </div>
          </div>
        </section>

        {/* Profile Summary */}
        <section className="mb-[15px]">
          <h2 className="text-[20px] font-bold m-[15px_0_5px_0] border-b border-black">
            Profile Summary
          </h2>
          <div className="flex justify-between items-start">
            <div className="w-[65%]">
              <p className="text-[12px] m-[5px_0]">
                Passionate UX Designer skilled in Figma, Adobe XD, and user
                testing. Proven track record of improving usability and user
                satisfaction through data-driven design solutions.
              </p>
            </div>
            <div className="w-[30%] text-right">
              <p className="text-[12px] m-[5px_0]">Char Count: 145</p>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="mb-[15px]">
          <h2 className="text-[20px] font-bold m-[15px_0_5px_0] border-b border-black">
            Additional Information
          </h2>
          <div className="flex justify-between items-start">
            <div className="w-[65%]">
              <p className="text-[12px] m-[5px_0]">
                Languages: English (Native), Mandarin (Fluent)
              </p>
              <p className="text-[12px] m-[5px_0]">
                Hobbies & Interests: UI Design, Drawing, Yoga, Photography
              </p>
              <p className="text-[12px] m-[5px_0]">Achievements:</p>
              <ul className="list-disc pl-[20px] text-[12px] m-[5px_0] space-y-[3px]">
                <li>Best UX Project - PSU, 2022: Top mobile app redesign</li>
                <li>Design Award - TechTrend, 2023: Innovative Dashboard UI</li>
              </ul>
            </div>
            <div className="w-[30%] text-right">
              <p className="text-[12px] m-[5px_0]">Fluency: C2 Level</p>
              <p className="text-[12px] m-[5px_0]">Years Active: 5+</p>
              <p className="text-[12px] m-[5px_0]">Award Dates: 2022, 2023</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume14;
