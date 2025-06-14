import React, { useState } from "react";
import { useUser } from "../commonComponents/usercontext";

const FinalPageOfLO = () => {
  const{darkMode} = useUser();
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
  const [showPreviewModal, setShowPreviewModal] = useState(false); // State for mobile modal

  const copyToClipboard = (text, section) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStates((prev) => ({ ...prev, [section]: true }));
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [section]: false }));
      }, 3000);
    });
  };

  // JSX for AI Suggestion Content (Left Panel)
  const AISuggestionContentJSX = (
    <div className={`${darkMode?'bg-[#1A1D23]':'bg-[#ffffff]'} w-full h-full p-5 flex flex-col gap-5 font-normal overflow-y-auto custom-scrollbar`}>
      <p className={` ${darkMode?'text-[white]':'text-[#1E1B39]'} text-lg flex gap-1 items-center`}>
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
              strokeWidth="0.0512" // Changed stroke-width to strokeWidth for React
            />
          </svg>
        </span>
      </p>

      {/* Profile Title */}
      <div className={`w-full rounded-[20px] p-4 flex flex-col gap-3 ${darkMode?'bg-[#363B45]':'bg-[#dcdcdc]'}`}>
        <p className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-medium text-base`}>Profile Summary:</p>
        <p className={`${darkMode?'text-[white]':'text-[#1E1B39]'} text-sm`}>{profileData.headline}</p>
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
      <div className={`w-full rounded-[20px] p-4 flex flex-col gap-3 ${darkMode?'bg-[#363B45]':'bg-[#dcdcdc]'}`}>
        <p className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-medium text-base`}>About</p>
        <p className={`${darkMode?'text-[white]':'text-[#1E1B39]'} text-sm whitespace-pre-line`}>
          {profileData.about.join("\n\n")}
        </p>
        <div className="w-full flex gap-2 justify-end text-sm font-medium">
          <div
            onClick={
              () => copyToClipboard(profileData.about.join("\n\n"), "about-all") // Consistent with display
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
          className={`w-full rounded-[20px] p-4 flex flex-col gap-3 ${darkMode?'bg-[#363B45]':'bg-[#dcdcdc]'}`}
        >
          <p className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-medium text-base`}>
            Experience Section ({exp.company}):
          </p>
          <p className={`${darkMode?'text-[white]':'text-[#1E1B39]'} text-sm"`}>
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
      <div className={`w-full rounded-[20px] p-4 flex flex-col gap-3 ${darkMode?'bg-[#363B45]':'bg-[#dcdcdc]'}`}>
        <p className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-medium text-base`}>Education Section:</p>
        <p className={`${darkMode?'text-[white]':'text-[#1E1B39]'} text-sm`}>
          {profileData.education.university} | {profileData.education.degree} |{" "}
          {profileData.education.duration}
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
          className={`w-full rounded-[20px] p-4 flex flex-col gap-3 ${darkMode?'bg-[#363B45]':'bg-[#dcdcdc]'}`}
        >
          <p className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-medium text-base`}>
            Certification Section ({cert.title}):
          </p>
          <p className={`${darkMode?'text-[white]':'text-[#1E1B39]'} text-sm`}>
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
          className={`w-full rounded-[20px] p-4 flex flex-col gap-3 ${darkMode?'bg-[#363B45]':'bg-[#dcdcdc]'}`}
        >
          <p className={`${darkMode?'text-[white]':'text-[#1E1B39]'} font-medium text-base`}>
            Project Section ({project.title}):
          </p>
          <p className={`${darkMode?'text-[white]':'text-[#1E1B39]'} text-sm`}>
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
  );

  // JSX for LinkedIn Profile Content (Right Panel / Mobile Modal)
  const LinkedInPreviewContentJSX = (
    <div className={`${darkMode?'bg-[#1A1D23]':'bg-[#ffffff]'} w-full h-full overflow-y-auto custom-scrollbar`}>
      {/* Header Section */}
      <div className="relative">
        <div className={`h-32 ${darkMode?'bg-[#363B45]':'bg-[#dcdcdc]'}  md:rounded-t-xl flex items-center justify-center`}></div>
        <div className="absolute bottom-0 left-10 transform translate-y-1/2">
          <div className="w-36 h-36 rounded-full border-5 border-[#70b5f9] overflow-hidden">
            <img
              src="/Linkedin/user.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-20 px-10 pb-8">
        <h2 className={`${darkMode?'text-[white]':'text-[#1E1B39]'} text-2xl font-bold font-['Manrope'] `}>
          {profileData.name}
        </h2>
        <p className={`${darkMode?'text-[white]':' text-gray-600'} text-sm leading-relaxed mt-2`}>
          {profileData.headline}
        </p>
        <p className={`${darkMode?'text-[white]':' text-gray-600'} text-sm mt-2`}>{profileData.company}</p>
        <div className="mt-2 flex items-center gap-3">
          <p className={`${darkMode?'text-[white]':' text-gray-600'} text-sm`}>{profileData.connections}</p>
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
            <p className={`${darkMode?'text-[white]':' text-gray-700'} text-sm leading-relaxed`}>{paragraph}</p>
            {index === profileData.about.length - 1 && (
              <div className="w-20 h-5 bg-gray-200 rounded hover:bg-gray-300 transition-colors"></div>
            )}
          </div>
        ))}
      </div>

      <hr className="border-t border-gray-200" />

      {/* Experience Section */}
      <div className="px-10 py-8">
        <h3 className={`text-xl font-semibold font-['Manrope'] ${darkMode?'text-[white]':' text-gray-900'}`}>
          Experience
        </h3>
        {profileData.experience.map((exp, index) => (
          <div key={index} className="flex items-start gap-4 mt-5">
            <div className="w-12 h-12 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"></div>
            <div className="flex-1">
              <h4 className={`font-semibold text-sm ${darkMode?'text-[white]':' text-gray-900'}`}>
                {exp.company}
              </h4>
              <p className={`${darkMode?'text-[white]':' text-gray-600'} text-sm mt-1`}>{exp.duration}</p>
              {exp.location && (
                <p className={`${darkMode?'text-[white]':' text-gray-600'} text-sm mt-1`}>{exp.location}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <hr className="border-t border-gray-200" />

      {/* Education Section */}
      <div className="px-10 py-8">
        <h3 className={`text-xl font-semibold font-['Manrope'] ${darkMode?'text-[white]':' text-gray-900'}`}>
          Education
        </h3>
        <div className="flex items-start gap-4 mt-5">
          <div className="w-12 h-12 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"></div>
          <div className="flex-1">
            <h4 className={`font-semibold text-sm ${darkMode?'text-[white]':' text-gray-600'}`}>
              {profileData.education.university}
            </h4>
            <p className={`${darkMode?'text-[white]':' text-gray-600'} text-sm mt-1`}>
              {profileData.education.degree}
            </p>
            <p className={`${darkMode?'text-[white]':' text-gray-600'} text-sm mt-1`}>
              {profileData.education.duration}
            </p>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-200" />

      {/* Licenses & Certifications Section */}
      <div className="px-10 py-8">
        <h3 className={`text-xl font-semibold font-['Manrope'] ${darkMode?'text-[white]':' text-gray-900'}`}>
          Licenses & Certifications
        </h3>
        {profileData.certifications.map((cert, index) => (
          <div key={index} className="flex items-start gap-4 mt-5">
            <div className="w-12 h-12 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"></div>
            <div className="flex-1">
              <h4 className={`font-semibold text-sm ${darkMode?'text-[white]':' text-gray-900'}`}>
                {cert.title}
              </h4>
              <p className={`${darkMode?'text-[white]':' text-gray-600'} text-sm mt-1`}>{cert.provider}</p>
              <div className="mt-1 flex items-center gap-3">
                <p className={`${darkMode?'text-[white]':' text-gray-600'} text-sm`}>{cert.details}</p>
                <div className="w-16 h-5 bg-gray-200 rounded hover:bg-gray-300 transition-colors"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-t border-gray-200" />

      {/* Projects Section */}
      <div className="px-10 py-8">
        <h3 className={`text-xl font-semibold font-['Manrope'] ${darkMode?'text-[white]':' text-gray-600'}`}>
          Front End Projects
        </h3>
        {profileData.projects.map((project, index) => (
          <div key={index} className="mt-5">
            <h4 className={`font-semibold text-sm ${darkMode?'text-[white]':' text-gray-600'}`}>
              {project.title}
            </h4>
            <p className={`${darkMode?'text-[white]':' text-gray-700'} text-sm leading-relaxed mt-2`}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`font-['Inter'] min-h-screen ${darkMode?'bg-[#1A1D23]':'bg-[#ffffff]'} flex flex-col md:flex-row md:gap-6 p-[10px]`}>
      {/* --- Mobile Viewport --- */}
      <div className="md:hidden w-full h-[calc(100vh-20px)] flex flex-col">
        {!showPreviewModal ? (
          <div className="flex-grow overflow-hidden relative rounded-[20px] border border-[#DCDCDC] bg-white">
            {AISuggestionContentJSX}
            <button
              onClick={() => setShowPreviewModal(true)}
              className="fixed bottom-7 right-7  border-3 border-[#006aff] hover:bg-[#bfdaff] text-[#1074ff] rounded-full bg-[#d7e7ff] px-4 py-2 x shadow-lg z-20 font-bold"
            >
              See Preview Of Linkedin
            </button>
          </div>
        ) : (
          <div className="fixed inset-0 bg-[#00000085] z-50 flex flex-col">
            {" "}
            {/* Modal takes full screen */}
            <div className="p-4 flex justify-between items-center ">
              <button
                onClick={() => setShowPreviewModal(false)}
                className="bg-white font-bold text-black px-5 py-1 border-2 border-black rounded-full text-sm"
              >
                back
              </button>
            </div>
            <div className="flex-grow overflow-y-auto bg-white overflow-hidden rounded-2xl">
              {/* Scrollable content area for LinkedIn Preview */}
              {LinkedInPreviewContentJSX}
            </div>
          </div>
        )}
      </div>

      {/* --- Desktop Viewport --- */}
      <div className={`hidden md:block md:w-[600px] md:max-w-[600px] h-[calc(100vh-20px)] rounded-[20px] border ${darkMode?'border-[#1A1D23]':'border-[#DCDCDC]'} ${darkMode?'bg-[#1A1D23]':'bg-[#ffffff]'}`}>
        {AISuggestionContentJSX}
      </div>

      {/* LinkedIn Preview Panel (Desktop - Right) */}
      <div className={`hidden md:block flex-1 h-[calc(100vh-20px)] ${darkMode?'bg-[#1A1D23]':'bg-[#ffffff]'} shadow-lg rounded-xl`}>
        {LinkedInPreviewContentJSX}
      </div>
    </div>
  );
};
export default FinalPageOfLO;
