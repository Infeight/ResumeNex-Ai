import React from "react";

const Resume6 = () => {
  return (
    <div className="font-sans w-[210mm] max-w-[880px] mx-auto my-[35px] p-5 bg-white text-[#222]">
      {/* Header */}
      <div className="border-b-2 border-[#333] pb-[10px] text-center mb-[30px]">
        <h1 className="text-[28px] font-bold text-[#111] mb-[5px]">
          SOPHIA MARIE EVANS
        </h1>
        <p className="text-[16px] font-semibold text-[#333] mb-[5px]">
          Marketing Specialist
        </p>
        <p className="text-[16px] text-[#444]">
          (666) 777-8888 | sophia.evans@email.com
        </p>
        <p className="text-[16px] text-[#444]">
          linkedin.com/in/sophiaevans | sophiaevans.marketing
        </p>
        <p className="text-[16px] text-[#444]">
          987 Brand St, Chicago, IL 60614
        </p>
      </div>

      {/* Education */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#111] border-b-2 border-[#333] pb-[5px] mb-[15px]">
          EDUCATION
        </h2>
        <div className="flex justify-between">
          <div className="w-[65%]">
            <h3 className="text-[18px] font-bold text-[#222] mb-[5px]">
              B.A. in Marketing
            </h3>
            <p className="text-[16px] text-[#444]">
              University of Illinois, Marketing
            </p>
            <p className="text-[16px] text-[#444]">
              Focus: Digital Marketing Strategies
            </p>
          </div>
          <div className="w-[30%] text-right">
            <p className="text-[16px] font-semibold text-[#444]">
              Aug 2018 - May 2022
            </p>
            <p className="text-[16px] text-[#444]">CGPA: 3.9/4.0</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#111] border-b-2 border-[#333] pb-[5px] mb-[15px]">
          PROJECTS
        </h2>
        <div className="flex justify-between mb-[15px]">
          <div className="w-[65%]">
            <h3 className="text-[18px] font-bold text-[#222] mb-[5px]">
              Social Media Campaign
            </h3>
            <p className="text-[16px] text-[#444]">
              Technologies: Hootsuite, Canva, Google Analytics
            </p>
            <p className="text-[16px] text-[#444]">
              github.com/sophiaevans/social-campaign
            </p>
            <ul className="list-disc pl-[25px]">
              <li className="text-[16px] text-[#444]">
                Launched a campaign boosting engagement by 40%.
              </li>
              <li className="text-[16px] text-[#444]">
                Designed visuals in Canva for 10+ platforms.
              </li>
              <li className="text-[16px] text-[#444]">
                Tracked metrics with Google Analytics for ROI.
              </li>
            </ul>
          </div>
          <div className="w-[30%] text-right">
            <p className="text-[16px] font-semibold text-[#444]">
              Jan 2023 - Mar 2023
            </p>
            <p className="text-[16px] text-[#444]">Team Size: 3</p>
            <p className="text-[16px] text-[#444]">Impact: +40% Engagement</p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#111] border-b-2 border-[#333] pb-[5px] mb-[15px]">
          WORK EXPERIENCE
        </h2>
        <div className="flex justify-between mb-[15px]">
          <div className="w-[65%]">
            <h3 className="text-[18px] font-bold text-[#222] mb-[5px]">
              Marketing Intern
            </h3>
            <p className="text-[16px] text-[#444]">BrandBoost, Chicago, IL</p>
            <ul className="list-disc pl-[25px]">
              <li className="text-[16px] text-[#444]">
                Managed social media posts for 5 client accounts.
              </li>
              <li className="text-[16px] text-[#444]">
                Increased follower growth by 25% in 2 months.
              </li>
              <li className="text-[16px] text-[#444]">
                Analyzed campaign data to refine strategies.
              </li>
            </ul>
          </div>
          <div className="w-[30%] text-right">
            <p className="text-[16px] font-semibold text-[#444]">
              Jun 2021 - Aug 2021
            </p>
            <p className="text-[16px] text-[#444]">Clients: 5</p>
            <p className="text-[16px] text-[#444]">Supervisor: John Smith</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#111] border-b-2 border-[#333] pb-[5px] mb-[15px]">
          CERTIFICATIONS
        </h2>
        <div className="flex justify-between">
          <div className="w-[65%]">
            <ul className="list-disc pl-[25px]">
              <li className="text-[16px] text-[#444]">
                Inbound Marketing - HubSpot
              </li>
              <li className="text-[16px] text-[#444]">
                Google Analytics Individual Qualification - Google
              </li>
            </ul>
          </div>
          <div className="w-[30%] text-right">
            <p className="text-[16px] font-semibold text-[#444]">
              Issued: Oct 2023
            </p>
            <p className="text-[16px] text-[#444]">Issued: Jun 2022</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#111] border-b-2 border-[#333] pb-[5px] mb-[15px]">
          SKILLS
        </h2>
        <div className="flex justify-between">
          <div className="w-[65%]">
            <ul className="list-disc pl-[25px]">
              <li className="text-[16px] text-[#444]">
                Technical: Hootsuite, Canva, Google Analytics, SEO
              </li>
              <li className="text-[16px] text-[#444]">
                Soft: Communication, Creativity, Data Analysis
              </li>
            </ul>
          </div>
          <div className="w-[30%] text-right">
            <p className="text-[16px] font-semibold text-[#444]">
              Proficiency: Advanced
            </p>
            <p className="text-[16px] text-[#444]">Experience: 3+ Years</p>
          </div>
        </div>
      </section>

      {/* Profile Summary */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#111] border-b-2 border-[#333] pb-[5px] mb-[15px]">
          PROFILE SUMMARY
        </h2>
        <div className="flex justify-between">
          <div className="w-[65%]">
            <p className="text-[16px] text-[#444]">
              Marketing Specialist excelling in social media and analytics.
              Drove engagement and growth through data-driven strategies.
            </p>
          </div>
          <div className="w-[30%] text-right">
            <p className="text-[16px] text-[#444]">Char Count: 125</p>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="mb-[20px]">
        <h2 className="text-[20px] font-bold text-[#111] border-b-2 border-[#333] pb-[5px] mb-[15px]">
          ADDITIONAL INFORMATION
        </h2>
        <div className="flex justify-between">
          <div className="w-[65%]">
            <p className="text-[16px] text-[#444]">
              Languages: English (Fluent), Italian (Intermediate)
            </p>
            <p className="text-[16px] text-[#444]">
              Hobbies & Interests: Branding, Photography, Blogging
            </p>
            <p className="text-[16px] text-[#444]">Achievements:</p>
            <ul className="list-disc pl-[25px]">
              <li className="text-[16px] text-[#444]">
                Marketing Star Award - UIUC: Top campaign design
              </li>
            </ul>
          </div>
          <div className="w-[30%] text-right">
            <p className="text-[16px] font-semibold text-[#444]">
              Fluency: C2 Level
            </p>
            <p className="text-[16px] text-[#444]">Years Active: 4+</p>
            <p className="text-[16px] text-[#444]">Award Date: 2022</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume6;
