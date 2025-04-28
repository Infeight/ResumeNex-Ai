import React from "react";

const Resume6 = () => {
  return (
    <div className="font-['Roboto_Slab',serif] w-[210mm] max-w-[880px] mx-auto my-[35px] p-5 bg-white text-[#2d2d2d] border-2 border-[#3c6e71]">
      {/* Header */}
      <div className="border-b-2 border-[#780000] pb-[10px] text-center mb-[30px]">
        <h1 className="text-[26px] font-bold text-[#780000]">
          Sophia Marie Evans
        </h1>
        <p className="text-[16px] text-[#3c6e71] mt-[5px]">
          Marketing Specialist
        </p>
        <p className="text-[16px] text-[#3c6e71] mt-[5px]">
          (666) 777-8888 |{" "}
          <a
            href="mailto:sophia.evans@email.com"
            className="text-[#3c6e71] hover:text-[#780000] underline"
          >
            sophia.evans@email.com
          </a>
        </p>
        <p className="text-[16px] text-[#3c6e71] mt-[5px]">
          <a
            href="https://linkedin.com/in/sophiaevans"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3c6e71] hover:text-[#780000] underline"
          >
            linkedin.com/in/sophiaevans
          </a>{" "}
          |{" "}
          <a
            href="https://sophiaevans.marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3c6e71] hover:text-[#780000] underline"
          >
            sophiaevans.marketing
          </a>
        </p>
        <p className="text-[16px] text-[#3c6e71] mt-[5px]">
          987 Brand St, Chicago, IL 60614
        </p>
      </div>

      {/* Education */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#3c6e71] border-b-2 border-[#780000] pb-[5px] mb-[15px]">
          Education
        </h2>
        <div className="flex justify-between">
          <div className="w-[65%]">
            <h3 className="text-[18px] font-bold text-[#2d2d2d] m-[5px_0]">
              B.A. in Marketing
            </h3>
            <p className="text-[16px] text-[#555555]">
              University of Illinois, Marketing
            </p>
            <p className="text-[16px] text-[#555555]">
              Focus: Digital Marketing Strategies
            </p>
          </div>
          <div className="w-[30%] text-right">
            <p className="text-[16px] text-[#555555]">Aug 2018 - May 2022</p>
            <p className="text-[16px] text-[#555555]">CGPA: 3.9/4.0</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#3c6e71] border-b-2 border-[#780000] pb-[5px] mb-[15px]">
          Projects
        </h2>
        <div className="flex justify-between mb-[15px]">
          <div className="w-[65%]">
            <h3 className="text-[18px] font-bold text-[#2d2d2d] m-[5px_0]">
              Social Media Campaign
            </h3>
            <p className="text-[16px] text-[#555555]">
              Technologies: Hootsuite, Canva, Google Analytics
            </p>
            <p className="text-[16px] text-[#555555]">
              <a
                href="https://github.com/sophiaevans/social-campaign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3c6e71] hover:text-[#780000] underline"
              >
                github.com/sophiaevans/social-campaign
              </a>
            </p>
            <ul className="list-disc pl-[25px]">
              <li className="text-[16px] text-[#444444]">
                Launched a campaign boosting engagement by 40%.
              </li>
              <li className="text-[16px] text-[#444444]">
                Designed visuals in Canva for 10+ platforms.
              </li>
              <li className="text-[16px] text-[#444444]">
                Tracked metrics with Google Analytics for ROI.
              </li>
            </ul>
          </div>
          <div className="w-[30%] text-right">
            <p className="text-[16px] text-[#555555]">Jan 2023 - Mar 2023</p>
            <p className="text-[16px] text-[#555555]">Team Size: 3</p>
            <p className="text-[16px] text-[#555555]">
              Impact: +40% Engagement
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#3c6e71] border-b-2 border-[#780000] pb-[5px] mb-[15px]">
          Work Experience
        </h2>
        <div className="flex justify-between mb-[15px]">
          <div className="w-[65%]">
            <h3 className="text-[18px] font-bold text-[#2d2d2d] m-[5px_0]">
              Marketing Intern
            </h3>
            <p className="text-[16px] text-[#555555]">
              BrandBoost, Chicago, IL
            </p>
            <ul className="list-disc pl-[25px]">
              <li className="text-[16px] text-[#444444]">
                Managed social media posts for 5 client accounts.
              </li>
              <li className="text-[16px] text-[#444444]">
                Increased follower growth by 25% in 2 months.
              </li>
              <li className="text-[16px] text-[#444444]">
                Analyzed campaign data to refine strategies.
              </li>
            </ul>
          </div>
          <div className="w-[30%] text-right">
            <p className="text-[16px] text-[#555555]">Jun 2021 - Aug 2021</p>
            <p className="text-[16px] text-[#555555]">Clients: 5</p>
            <p className="text-[16px] text-[#555555]">Supervisor: John Smith</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#3c6e71] border-b-2 border-[#780000] pb-[5px] mb-[15px]">
          Certifications
        </h2>
        <div className="flex justify-between">
          <div className="w-[65%]">
            <ul className="list-disc pl-[25px]">
              <li className="text-[16px] text-[#444444]">
                <a
                  href="https://hubspot.com/cert987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3c6e71] hover:text-[#780000] underline"
                >
                  Inbound Marketing
                </a>{" "}
                - HubSpot
              </li>
              <li className="text-[16px] text-[#444444]">
                Google Analytics Individual Qualification - Google
              </li>
            </ul>
          </div>
          <div className="w-[30%] text-right">
            <p className="text-[16px] text-[#555555]">Issued: Oct 2023</p>
            <p className="text-[16px] text-[#555555]">Issued: Jun 2022</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#3c6e71] border-b-2 border-[#780000] pb-[5px] mb-[15px]">
          Skills
        </h2>
        <div className="flex justify-between">
          <div className="w-[65%]">
            <ul className="list-disc pl-[25px]">
              <li className="text-[16px] text-[#444444]">
                Technical: Hootsuite, Canva, Google Analytics, SEO
              </li>
              <li className="text-[16px] text-[#444444]">
                Soft: Communication, Creativity, Data Analysis
              </li>
            </ul>
          </div>
          <div className="w-[30%] text-right">
            <p className="text-[16px] text-[#555555]">Proficiency: Advanced</p>
            <p className="text-[16px] text-[#555555]">Experience: 3+ Years</p>
          </div>
        </div>
      </section>

      {/* Profile Summary */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#3c6e71] border-b-2 border-[#780000] pb-[5px] mb-[15px]">
          Profile Summary
        </h2>
        <div className="flex justify-between">
          <div className="w-[65%]">
            <p className="text-[16px] text-[#555555]">
              Marketing Specialist excelling in social media and analytics.
              Drove engagement and growth through data-driven strategies.
            </p>
          </div>
          <div className="w-[30%] text-right">
            <p className="text-[16px] text-[#555555]">Char Count: 125</p>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#3c6e71] border-b-2 border-[#780000] pb-[5px] mb-[15px]">
          Additional Information
        </h2>
        <div className="flex justify-between">
          <div className="w-[65%]">
            <p className="text-[16px] text-[#555555]">
              Languages: English (Fluent), Italian (Intermediate)
            </p>
            <p className="text-[16px] text-[#555555]">
              Hobbies & Interests: Branding, Photography, Blogging
            </p>
            <p className="text-[16px] text-[#555555]">Achievements:</p>
            <ul className="list-disc pl-[25px]">
              <li className="text-[16px] text-[#444444]">
                Marketing Star Award - UIUC: Top campaign design
              </li>
            </ul>
          </div>
          <div className="w-[30%] text-right">
            <p className="text-[16px] text-[#555555]">Fluency: C2 Level</p>
            <p className="text-[16px] text-[#555555]">Years Active: 4+</p>
            <p className="text-[16px] text-[#555555]">Award Date: 2022</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume6;
