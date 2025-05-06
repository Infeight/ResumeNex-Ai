import React, { useState } from "react";

const FinalPageOfLO = () => {
  const [profileData] = useState({
    name: "Syed Talha Ahmed",
    headline:
      "Front-End Developer | ReactJS, Redux, JavaScript, HTML, CSS | Building Responsive, High-Performance Web Apps",
    company:
      "Jala Technologies • India | Osmania University | Hyderabad, Telangana, India",
    connections: "1K followers • 500+ connections",
    about: [
      "Hi👋, I'm Syed Talha Ahmed, a B.Com (Computers) graduate (2024) with a strong passion for coding. Although my academic background is in commerce, my real interest lies in technology and web development.",
      "💡 My journey began during a coding workshop by The Siasat Daily, where one simple code sparked a lasting curiosity.",
      "Since then, I’ve focused on front-end development and built a solid foundation in HTML, CSS, JavaScript, ReactJS, Redux, and Redux Toolkit. I'm also proficient in Git and GitHub for version control. Recently, I've expanded my skill set to the full MERN stack (MongoDB, ExpressJS, React, Node.js), allowing me to take on complete web application projects from start to finish.",
      "In addition to coding, I create content for YouTube, where I share knowledge and projects. Outside of work and content creation, I enjoy gaming and movies to recharge my creativity.",
    ],
    experience: [
      {
        company: "Jala Technologies • India",
        duration: "Oct 2024 - Present • 8 mos",
      },
      {
        company: "Esha Technology",
        duration: "Nov 2024 - Apr 2025 • 6 mos",
        location: "Hyderabad, Telangana, India",
      },
    ],
    education: {
      university: "Osmania University",
      degree: "Bachelor of Commerce, Computers",
      duration: "2021 - 2024",
    },
    certifications: [
      {
        title: "React and Redux Certification Test - YouTube Course",
        provider: "Complete Coding by Prashant Sir",
        details: "Issued May 2024 • Credential ID OVSMRUHM",
      },
      {
        title: "React JS Certification",
        provider: "KGCODING by Prashant Sir",
        details: "Issued Feb 2024 • Expires May 2024 • Credential ID OVSMRUHM",
      },
      {
        title: "Web Development",
        provider: "The Siasat Daily",
        details: "Issued Jan 2023 • Expires Mar 2023",
      },
    ],
    projects: [
      {
        title: "Esha Technology",
        description:
          "Developed a responsive multi-page landing website with ReactJS, incorporating a contact form with email integration. Used Framer Motion for smooth transitions and ensured a modern, user-friendly UI across all devices.",
      },
      {
        title: "Himalaya BOOKWORLD",
        description:
          "Built a custom RESTful API with Node.js, Express, and MongoDB for book data management, ensuring scalability and future integration. Developed a responsive frontend using HTML, Tailwind CSS, and ReactJS, focusing on UI/UX design.",
      },
      {
        title: "Sai Gatyri Greentech",
        description:
          "Created a responsive solar website using ReactJS and Tailwind CSS, with a clean, modern UI for improved user engagement. Ensured cross-device compatibility and implemented scalable, modular components.",
      },
    ],
  });

  const [copiedStates, setCopiedStates] = React.useState({});

  const copyToClipboard = (text, section) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStates((prev) => ({ ...prev, [section]: true }));
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [section]: false }));
      }, 3000);
    });
  };

  return (
    <div className="font-['Inter'] min-h-screen bg-gray-50 flex flex-col md:flex-row gap-6 p-6">
      {/* Custom Scrollbar Styles */}

      {/* Left Section: Copy Content (Suggestions) */}
      <div className="w-full md:w-[500px] max-w-[500px] h-[calc(100vh-66px)] rounded-[20px] border border-[#DCDCDC] bg-white p-5 flex flex-col gap-5 font-normal overflow-y-auto custom-scrollbar">
        <p className="text-lg flex gap-1 items-center">
          Suggested By
          <span className="text-[#336EE7] font-bold flex gap-0.5 items-center">
            AI
            <svg
              width="19"
              height="19"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1523 0.171875C15.3992 4.09924 17.0706 7.80203 19.8535 10.585C22.6363 13.3676 26.3386 15.0382 30.2656 15.2852V15.2979C26.3385 15.5448 22.6363 17.2172 19.8535 20C17.0707 22.7828 15.3993 26.485 15.1523 30.4121H15.1387C14.8998 26.608 13.3251 23.0145 10.6973 20.2637L10.4385 19.999C7.73221 17.2929 4.15616 15.638 0.349609 15.3223C4.03394 15.0134 7.50224 13.4004 10.1748 10.8438L10.4385 10.585C13.2215 7.80196 14.8922 4.09936 15.1387 0.171875H15.1523Z"
                fill="#336EE7"
                stroke="black"
                stroke-width="0.0512"
              />
            </svg>
          </span>
        </p>

        {/* Profile Title */}
        <div className="w-full rounded-[20px] p-4 flex flex-col gap-3 bg-[#F5F5F5]">
          <p className="font-medium text-base">Profile Summary:</p>
          <p className="text-sm">{profileData.headline}</p>
          <div className="w-full flex gap-2 justify-end text-sm font-medium">
            <div
              onClick={() => copyToClipboard(profileData.headline, "headline")}
              className={`px-3 py-1 border rounded-full cursor-pointer flex gap-1 items-center ${
                copiedStates.headline
                  ? "border-[#064E3B] bg-[#D1FAE5] text-[#064E3B]"
                  : "bg-white"
              }`}
            >
              {copiedStates.headline ? "Copied" : "Copy"}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="w-full rounded-[20px] p-4 flex flex-col gap-3 bg-[#F5F5F5]">
          <p className="font-medium text-base">About</p>
          <p className="text-sm whitespace-pre-line">
            {profileData.about.join("\n\n")}
          </p>
          <div className="w-full flex gap-2 justify-end text-sm font-medium">
            <div
              onClick={() =>
                copyToClipboard(profileData.about.join(" "), "about-all")
              }
              className={`px-3 py-1 border rounded-full cursor-pointer flex gap-1 items-center ${
                copiedStates["about-all"]
                  ? "border-[#064E3B] bg-[#D1FAE5] text-[#064E3B]"
                  : "bg-white"
              }`}
            >
              {copiedStates["about-all"] ? "Copied" : "Copy"}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        {profileData.experience.map((exp, index) => (
          <div
            key={index}
            className="w-full rounded-[20px] p-4 flex flex-col gap-3 bg-[#F5F5F5]"
          >
            <p className="font-medium text-base">
              Experience Section ({exp.company}):
            </p>
            <p className="text-sm">
              {exp.company} | {exp.duration}
              {exp.location ? ` | ${exp.location}` : ""}
            </p>
            <div className="w-full flex gap-2 justify-end text-sm font-medium">
              <div
                onClick={() =>
                  copyToClipboard(
                    `${exp.company} | ${exp.duration}${
                      exp.location ? ` | ${exp.location}` : ""
                    }`,
                    `exp-${index}`
                  )
                }
                className={`px-3 py-1 border rounded-full cursor-pointer flex gap-1 items-center ${
                  copiedStates[`exp-${index}`]
                    ? "border-[#064E3B] bg-[#D1FAE5] text-[#064E3B]"
                    : "bg-white"
                }`}
              >
                {copiedStates[`exp-${index}`] ? "Copied" : "Copy"}
              </div>
            </div>
          </div>
        ))}

        {/* Education Section */}
        <div className="w-full rounded-[20px] p-4 flex flex-col gap-3 bg-[#F5F5F5]">
          <p className="font-medium text-base">Education Section:</p>
          <p className="text-sm">
            {profileData.education.university} | {profileData.education.degree}{" "}
            | {profileData.education.duration}
          </p>
          <div className="w-full flex gap-2 justify-end text-sm font-medium">
            <div
              onClick={() =>
                copyToClipboard(
                  `${profileData.education.university} | ${profileData.education.degree} | ${profileData.education.duration}`,
                  "education"
                )
              }
              className={`px-3 py-1 border rounded-full cursor-pointer flex gap-1 items-center ${
                copiedStates.education
                  ? "border-[#064E3B] bg-[#D1FAE5] text-[#064E3B]"
                  : "bg-white"
              }`}
            >
              {copiedStates.education ? "Copied" : "Copy"}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        {profileData.certifications.map((cert, index) => (
          <div
            key={index}
            className="w-full rounded-[20px] p-4 flex flex-col gap-3 bg-[#F5F5F5]"
          >
            <p className="font-medium text-base">
              Certification Section ({cert.title}):
            </p>
            <p className="text-sm">
              {cert.title} | {cert.provider} | {cert.details}
            </p>
            <div className="w-full flex gap-2 justify-end text-sm font-medium">
              <div
                onClick={() =>
                  copyToClipboard(
                    `${cert.title} | ${cert.provider} | ${cert.details}`,
                    `cert-${index}`
                  )
                }
                className={`px-3 py-1 border rounded-full cursor-pointer flex gap-1 items-center ${
                  copiedStates[`cert-${index}`]
                    ? "border-[#064E3B] bg-[#D1FAE5] text-[#064E3B]"
                    : "bg-white"
                }`}
              >
                {copiedStates[`cert-${index}`] ? "Copied" : "Copy"}
              </div>
            </div>
          </div>
        ))}

        {/* Projects Section */}
        {profileData.projects.map((project, index) => (
          <div
            key={index}
            className="w-full rounded-[20px] p-4 flex flex-col gap-3 bg-[#F5F5F5]"
          >
            <p className="font-medium text-base">
              Project Section ({project.title}):
            </p>
            <p className="text-sm">
              {project.title} | {project.description}
            </p>
            <div className="w-full flex gap-2 justify-end text-sm font-medium">
              <div
                onClick={() =>
                  copyToClipboard(
                    `${project.title} | ${project.description}`,
                    `project-${index}`
                  )
                }
                className={`px-3 py-1 border rounded-full cursor-pointer flex gap-1 items-center ${
                  copiedStates[`project-${index}`]
                    ? "border-[#064E3B] bg-[#D1FAE5] text-[#064E3B]"
                    : "bg-white"
                }`}
              >
                {copiedStates[`project-${index}`] ? "Copied" : "Copy"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section: LinkedIn Profile Content */}
      <div className="flex-1 h-[calc(100vh-66px)] bg-white shadow-lg rounded-xl overflow-y-auto custom-scrollbar">
        {/* Header Section */}
        <div className="relative">
          <div className="h-48 bg-[#70b5f9] rounded-t-xl flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white font-['Manrope'] tracking-tight">
              {profileData.name}
            </h1>
          </div>
          <div className="absolute bottom-0 left-10 transform translate-y-1/2">
            <div className="w-36 h-36 bg-gray-300 rounded-full border-4 border-white shadow-md"></div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-20 px-10 pb-8">
          <h2 className="text-2xl font-bold font-['Manrope'] text-gray-900">
            {profileData.name}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mt-2">
            {profileData.headline}
          </p>
          <p className="text-gray-500 text-sm mt-2">{profileData.company}</p>
          <div className="mt-2 flex items-center gap-3">
            <p className="text-gray-500 text-sm">{profileData.connections}</p>
            <div className="w-16 h-5 bg-gray-200 rounded hover:bg-gray-300 transition-colors"></div>
          </div>
          <div className="flex gap-3 mt-5">
            <div className="w-28 h-9 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"></div>
            <div className="w-28 h-9 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"></div>
          </div>
        </div>

        <hr className="border-t border-gray-200" />

        {/* About Section */}
        <div className="px-10 py-8">
          <h3 className="text-xl font-semibold font-['Manrope'] text-gray-900">
            About
          </h3>
          {profileData.about.map((paragraph, index) => (
            <div
              key={index}
              className={`mt-3 ${
                index === profileData.about.length - 1
                  ? "flex items-center gap-3"
                  : ""
              }`}
            >
              <p className="text-gray-700 text-sm leading-relaxed">
                {paragraph}
              </p>
              {index === profileData.about.length - 1 && (
                <div className="w-20 h-5 bg-gray-200 rounded hover:bg-gray-300 transition-colors"></div>
              )}
            </div>
          ))}
        </div>

        <hr className="border-t border-gray-200" />

        {/* Experience Section */}
        <div className="px-10 py-8">
          <h3 className="text-xl font-semibold font-['Manrope'] text-gray-900">
            Experience
          </h3>
          {profileData.experience.map((exp, index) => (
            <div key={index} className="flex items-start gap-4 mt-5">
              <div className="w-12 h-12 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"></div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-gray-900">
                  {exp.company}
                </h4>
                <p className="text-gray-600 text-sm mt-1">{exp.duration}</p>
                {exp.location && (
                  <p className="text-gray-500 text-sm mt-1">{exp.location}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <hr className="border-t border-gray-200" />

        {/* Education Section */}
        <div className="px-10 py-8">
          <h3 className="text-xl font-semibold font-['Manrope'] text-gray-900">
            Education
          </h3>
          <div className="flex items-start gap-4 mt-5">
            <div className="w-12 h-12 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"></div>
            <div className="flex-1">
              <h4 className="font-semibold text-sm text-gray-900">
                {profileData.education.university}
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                {profileData.education.degree}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                {profileData.education.duration}
              </p>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-200" />

        {/* Licenses & Certifications Section */}
        <div className="px-10 py-8">
          <h3 className="text-xl font-semibold font-['Manrope'] text-gray-900">
            Licenses & Certifications
          </h3>
          {profileData.certifications.map((cert, index) => (
            <div key={index} className="flex items-start gap-4 mt-5">
              <div className="w-12 h-12 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"></div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-gray-900">
                  {cert.title}
                </h4>
                <p className="text-gray-600 text-sm mt-1">{cert.provider}</p>
                <div className="mt-1 flex items-center gap-3">
                  <p className="text-gray-500 text-sm">{cert.details}</p>
                  <div className="w-16 h-5 bg-gray-200 rounded hover:bg-gray-300 transition-colors"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-t border-gray-200" />

        {/* Projects Section */}
        <div className="px-10 py-8">
          <h3 className="text-xl font-semibold font-['Manrope'] text-gray-900">
            Front End Projects
          </h3>
          {profileData.projects.map((project, index) => (
            <div key={index} className="mt-5">
              <h4 className="font-semibold text-sm text-gray-900">
                {project.title}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed mt-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FinalPageOfLO;
