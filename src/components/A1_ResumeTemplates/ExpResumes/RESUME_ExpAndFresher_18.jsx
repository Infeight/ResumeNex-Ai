// src/components/RESUME_ExpAndFresher_18.js
import React from "react";

const RESUME_ExpAndFresher_18 = () => {
  return (
    <div className="font-['Arial',sans-serif] m-0 p-0 bg-[#f4f4f4] flex justify-center items-start">
      <div className="w-[210mm] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] p-[15mm] box-border text-[11px] leading-[1.4]">
        {/* Header */}
        <div className="text-center pb-[8px] mb-[10px]">
          <h1 className="text-[22px] m-0 uppercase">Lindsay Watson</h1>
          <p className="text-[11px] my-[3px] text-[#555]">
            (212) 123-1234 |{" "}
            <a
              href="mailto:lindsay.watson@gmail.com"
              className="text-[#555] no-underline hover:underline"
            >
              lindsay.watson@gmail.com
            </a>{" "}
            |{" "}
            <a
              href="https://watsoncreative.com"
              className="text-[#555] no-underline hover:underline"
            >
              watsoncreative.com
            </a>{" "}
            | New York, NY, 10001
          </p>
          <p className="text-[11px] my-[3px] text-[#555]">
            Web Developer | Frontend Development | UI/UX Design
          </p>
          <p className="text-[11px] my-[3px] text-[#555]">
            <a
              href="https://linkedin.com/in/lindsaywatson"
              className="text-[#555] no-underline hover:underline"
            >
              linkedin.com/in/lindsaywatson
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/lindsaywatson"
              className="text-[#555] no-underline hover:underline"
            >
              github.com/lindsaywatson
            </a>{" "}
            |{" "}
            <a
              href="https://figma.com/@lindsaywatson"
              className="text-[#555] no-underline hover:underline"
            >
              figma.com/@lindsaywatson
            </a>{" "}
            |{" "}
            <a
              href="https://leetcode.com/lindsaywatson"
              className="text-[#555] no-underline hover:underline"
            >
              leetcode.com/lindsaywatson
            </a>
          </p>
        </div>

        {/* Profile Summary */}
        <div className="mb-[15px]">
          <p className="text-[11px] italic mb-[10px]">
            Dynamic Web Developer with 5+ years of experience in designing and
            building responsive web applications. Skilled in JavaScript, React,
            and UI/UX design, with a proven track record of boosting user
            engagement by 30% through intuitive interfaces. Adept at
            collaborating with cross-functional teams to deliver scalable
            solutions, seeking to innovate at a leading tech firm.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-[15px]">
          <h2 className="text-[14px] uppercase text-center bg-[#f5e8d3] py-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-[8px]">
            Professional Experience
          </h2>
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[13px]">
              Frontend Developer, PixelWave Studio{" "}
              <span className="font-normal italic">May 2020 – Present</span>
            </div>
            <p className="my-[3px]">
              Led development of 10+ client websites using React and TypeScript,
              achieving 95% client satisfaction. Optimized performance, reducing
              page load times by 25%. Collaborated with designers to implement
              Figma prototypes.
            </p>
            <ul className="my-[3px] pl-[15px]">
              <li>
                Developed reusable component libraries, cutting development time
                by 20%.
              </li>
              <li>Improved SEO rankings, increasing organic traffic by 35%.</li>
              <li>
                Integrated GraphQL APIs, enhancing data retrieval efficiency.
              </li>
            </ul>
          </div>
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[13px]">
              Junior Web Developer, CodeCraft Inc.{" "}
              <span className="font-normal italic">Jun 2018 – Apr 2020</span>
            </div>
            <p className="my-[3px]">
              Built and maintained responsive web interfaces using JavaScript
              and CSS. Supported backend integration with Node.js, streamlining
              data workflows. Contributed to agile sprints, meeting 90% of
              deadlines.
            </p>
            <ul className="my-[3px] pl-[15px]">
              <li>Revamped 5+ legacy sites, boosting user retention by 15%.</li>
              <li>Automated testing processes, reducing bugs by 30%.</li>
              <li>Assisted in launching a SaaS platform with 1,000+ users.</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mb-[15px]">
          <h2 className="text-[14px] uppercase text-center bg-[#f5e8d3] py-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-[8px]">
            Education
          </h2>
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[13px]">
              Bachelor of Science in Computer Science, New York University{" "}
              <span className="font-normal italic">CGPA: 3.7/4.0</span>
            </div>
            <p className="my-[3px]">Graduated Cum Laude, May 2018</p>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-[15px]">
          <h2 className="text-[14px] uppercase text-center bg-[#f5e8d3] py-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-[8px]">
            Projects
          </h2>
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[13px]">
              E-Commerce Platform{" "}
              <span className="font-normal italic">Jan 2022 – Jun 2022</span>
            </div>
            <p className="my-[3px]">
              Technologies: React, Redux •{" "}
              <a
                href="https://github.com/lindsaywatson/ecommerce"
                className="text-[#555] no-underline hover:underline"
              >
                github.com/lindsaywatson/ecommerce
              </a>
            </p>
            <ul className="my-[3px] pl-[15px]">
              <li>
                Built a full-stack e-commerce site with payment integration.
              </li>
              <li>Reduced cart abandonment by 20% with optimized checkout.</li>
              <li>Deployed on Vercel, handling 2,000+ monthly transactions.</li>
            </ul>
          </div>
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[13px]">
              Fitness Tracker{" "}
              <span className="font-normal italic">Aug 2019 – Dec 2019</span>
            </div>
            <p className="my-[3px]">
              Technologies: JavaScript, Firebase •{" "}
              <a
                href="https://github.com/lindsaywatson/fitness"
                className="text-[#555] no-underline hover:underline"
              >
                github.com/lindsaywatson/fitness
              </a>
            </p>
            <ul className="my-[3px] pl-[15px]">
              <li>Developed a web app for tracking workouts and goals.</li>
              <li>Enhanced UX with real-time data sync, gaining 500+ users.</li>
              <li>Integrated charts for progress visualization.</li>
            </ul>
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mb-[15px]">
          <h2 className="expertise-heading text-[14px] uppercase text-center bg-[#f5e8d3] py-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-[8px]">
            Areas of Expertise
          </h2>
          <div className="flex justify-between flex-wrap">
            <div className="w-[48%]">
              <ul className="my-[3px] pl-[15px]">
                <li>JavaScript</li>
                <li>React</li>
                <li>UI/UX Design</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
            <div className="w-[48%]">
              <ul className="my-[3px] pl-[15px]">
                <li>HTML & CSS</li>
                <li>API Integration</li>
                <li>Agile Development</li>
                <li>Team Collaboration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-[15px]">
          <h2 className="text-[14px] uppercase text-center bg-[#f5e8d3] py-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-[8px]">
            Certifications
          </h2>
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[13px]">
              Frontend Development, Coursera{" "}
              <span className="font-normal italic">Issued: Jun 2019</span>
            </div>
            <p className="my-[3px]">
              <a
                href="https://coursera.org/verify/frontend"
                className="text-[#555] no-underline hover:underline"
              >
                coursera.org/verify/frontend
              </a>
            </p>
          </div>
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[13px]">
              UI/UX Design Specialization, Udemy{" "}
              <span className="font-normal italic">Issued: Dec 2018</span>
            </div>
            <p className="my-[3px]">
              <a
                href="https://udemy.com/certificate/uiux"
                className="text-[#555] no-underline hover:underline"
              >
                udemy.com/certificate/uiux
              </a>
            </p>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-[15px]">
          <h2 className="text-[14px] uppercase text-center bg-[#f5e8d3] py-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-[8px]">
            Languages
          </h2>
          <p className="my-[3px]">English (Native), French (Intermediate)</p>
        </div>

        {/* Hobbies */}
        <div className="mb-[15px]">
          <h2 className="text-[14px] uppercase text-center bg-[#f5e8d3] py-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-[8px]">
            Hobbies & Interests
          </h2>
          <p className="my-[3px]">Web Design, Photography, Hiking</p>
        </div>

        {/* Achievements */}
        <div className="mb-[15px]">
          <h2 className="text-[14px] uppercase text-center bg-[#f5e8d3] py-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-[8px]">
            Achievements & Awards
          </h2>
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[13px]">
              Best Web App Design{" "}
              <span className="font-normal italic">NY Tech Awards, 2021</span>
            </div>
            <p className="my-[3px]">Recognized for innovative UI design.</p>
          </div>
          <div className="mb-[10px]">
            <div className="flex justify-between font-bold text-[13px]">
              Dean’s List{" "}
              <span className="font-normal italic">
                New York University, 2016-2018
              </span>
            </div>
            <p className="my-[3px]">Honored for academic excellence.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RESUME_ExpAndFresher_18;
