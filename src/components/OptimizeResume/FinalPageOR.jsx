import React, { useState,useRef } from "react";
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import html2pdf from 'html2pdf.js'
import { jsPDF } from "jspdf";


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
const ProgressIndicator = ({ percentage }) => {
  const radius = 96;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center justify-center  bg-white ">
      <div className="relative w-[110px] h-[110px]">
        <svg
          className="transform -rotate-90 w-full h-full "
          viewBox="0 0 256 256"
        >
          <circle
            cx="128"
            cy="128"
            r={radius}
            fill="transparent"
            stroke="#DEF1CE" // Lighter green for unfilled portion
            strokeWidth="32"
          />
          <circle
            cx="128"
            cy="128"
            r={radius}
            fill="transparent"
            stroke="#58B90A" // Green for filled portion
            strokeWidth="32"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-[#58B90A] ">
          {percentage}%
        </div>
      </div>
    </div>
  );
};



const highlightHeadings = (text) => {
  const SECTION_HEADINGS = [
    "objective", "summary", "experience", "education", "projects",
    "skills", "languages", "certifications", "interests", "awards",
    "contact", "profile"
  ];

  const lines = text.split("\n");
  const highlighted = lines.map((line) => {
    const lower = line.toLowerCase().trim();

    const matched = SECTION_HEADINGS.find((heading) =>
      lower.startsWith(heading)
    );

    if (matched) {
      const regex = new RegExp(`^(${matched})(.*)`, "i");
      return `<br><span style="font-weight: bold; font-style: italic; text-decoration: underline; color: #00ffff;">${line.trim()}</span><br>`;
    }

    return line;
  });

  return highlighted.join("<br>");
};




const FinalPageOR = () => {
   const location = useLocation();
    const uploadedFile = location.state?.uploadedFile || null; 
    const jobRole = location.state?.jobRole || null;
    const sections = location.state?.sections||null;

    console.log(jobRole, sections)
     
   
     const [numPages, setNumPages] = useState(null);
      const [pageNumber, setPageNumber] = useState(1);
     



  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const [templatePopupOpen, setTemplatePopupOpen] = useState(false);
  // Array of suggestion data
  const suggestions = [
    {
      id: "profile",
      title: "Profile Summary:",
      content:
        "Aspiring software developer skilled in MERN stack and Java full-stack development, with a focus on building scalable web applications. Seeking a challenging role to enhance development skills and contribute to impactful projects",
    },
    {
      id: "wellsFargo",
      title: "Experience Section (Wells Fargo Advisors):",
      content:
        "Aspiring software developer skilled in MERN stack and Java full-stack development, with a focus on building scalable web applications. Seeking a challenging role to enhance development skills and contribute to impactful projects",
    },
    {
      id: "suntrust1",
      title: "Experience Section (Suntrust Investment Services):",
      content:
        "Aspiring software developer skilled in MERN stack and Java full-stack development, with a focus on building scalable web applications. Seeking a challenging role to enhance development skills and contribute to impactful projects",
    },
    {
      id: "suntrust2",
      title: "Experience Section (Suntrust Investment Services):",
      content:
        "Aspiring software developer skilled in MERN stack and Java full-stack development, with a focus on building scalable web applications. Seeking a challenging role to enhance development skills and contribute to impactful projects",
    },
  ];
  // State to track replaced status for each suggestion
  const [replaced, setReplaced] = useState({});

  const toggleReplace = (id) => {
    setReplaced((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // side resume popup
  const expResumes = [
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_1.png",
      url: "/resumes_templates/resume_expAndFresher_001",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_2.png",
      url: "/resumes_templates/resume_expAndFresher_002",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_3.png",
      url: "/resumes_templates/resume_expAndFresher_003",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_4.png",
      url: "/resumes_templates/resume_expAndFresher_004",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_5.png",
      url: "/resumes_templates/resume_expAndFresher_005",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_6.png",
      url: "/resumes_templates/resume_expAndFresher_006",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_7.png",
      url: "/resumes_templates/resume_expAndFresher_007",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_8.png",
      url: "/resumes_templates/resume_expAndFresher_008",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_9.png",
      url: "/resumes_templates/resume_expAndFresher_009",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_10.png",
      url: "/resumes_templates/resume_expAndFresher_010",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_11.png",
      url: "/resumes_templates/resume_expAndFresher_011",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_12.png",
      url: "/resumes_templates/resume_expAndFresher_012",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_13.png",
      url: "/resumes_templates/resume_expAndFresher_013",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_14.png",
      url: "/resumes_templates/resume_expAndFresher_014",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_15.png",
      url: "/resumes_templates/resume_expAndFresher_015",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_16.png",
      url: "/resumes_templates/resume_expAndFresher_016",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_17.png",
      url: "/resumes_templates/resume_expAndFresher_017",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_18.png",
      url: "/resumes_templates/resume_expAndFresher_018",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_19.png",
      url: "/resumes_templates/resume_expAndFresher_019",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_20.png",
      url: "/resumes_templates/resume_expAndFresher_020",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_21.png",
      url: "/resumes_templates/resume_expAndFresher_021",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_22.png",
      url: "/resumes_templates/resume_expAndFresher_022",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_23.png",
      url: "/resumes_templates/resume_expAndFresher_023",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_24.png",
      url: "/resumes_templates/resume_expAndFresher_024",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_25.png",
      url: "/resumes_templates/resume_expAndFresher_025",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_26.png",
      url: "/resumes_templates/resume_expAndFresher_026",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_27.png",
      url: "/resumes_templates/resume_expAndFresher_027",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_28.png",
      url: "/resumes_templates/resume_expAndFresher_028",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_29.png",
      url: "/resumes_templates/resume_expAndFresher_029",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_30.png",
      url: "/resumes_templates/resume_expAndFresher_030",
    },
  ];
  const handleOpenTemplates = () => setTemplatePopupOpen(true);
  const handleCloseTemplates = () => setTemplatePopupOpen(false);
  const [popupImage, setPopupImage] = useState(null);
  const [popupBtn, setPopupBtn] = useState(null);
  const openPopup = (img, url) => {
    setPopupImage(img);
    setPopupBtn(url);
  };
  const closePopup = () => {
    setPopupImage(null);
    setPopupBtn(null);
  };



  // test

const pdfRef = useRef();
const downloadPDF = () => {
    const element = pdfRef.current;

    html2pdf()
      .set({
        margin: 0.5,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
      })
      .from(element)
      .save();
  };

  // const generatePDF = (text) => {
  //   const doc = new jsPDF();
  //   // Split text into lines to handle long text
  //   const lines = doc.splitTextToSize(text, 180); // 180 = width in mm
  //   doc.text(lines, 10, 10); // (text, x, y)
  //   doc.save("output.pdf");
  // };
  
  

  return (

    
    <section className="w-full max-w-[1700px] mx-auto bg-[#F7F7FB] flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 p-4 sm:p-6 lg:p-12">
      {/* Left resume display */}
   <div className="w-full max-w-[496px] max-h-[45vw] overflow-y-scroll rounded-[20px] border border-[#DCDCDC] shadow-sm bg-white">

    {/* {To display pdf as is directly} */}
        {/* {uploadedFile && uploadedFile.type === "application/pdf" ? (
           <div
      style={{
        width: '450px',
        height: '600px',
        overflowY: 'auto',
        borderRadius: '20px',
        border: '1px solid #DCDCDC',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        background: '#fff',
      }}
      
    >
      <Document
        file={uploadedFile}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div>Loading PDF...</div>}
      >
        <Page
          pageNumber={pageNumber}
          width={430}
        />
      </Document>
      <div style={{ textAlign: 'center', margin: '10px 0', color: '#888' }}>
        Page {pageNumber} of {numPages}
      </div>
    </div>
        ) : (
          // Fallback to static image if no PDF uploaded
          <img
            src="/img/demoOR1.png"
            alt="demo"
            className="w-full max-w-[496px] rounded-[20px] border border-[#DCDCDC] shadow-sm"
          />
        )} */}

        <pre ref={pdfRef} className="max-w-[40vw] p-[25px] whitespace-pre-wrap break-words bg-[#121212] text-[#f1f1f1] rounded"   dangerouslySetInnerHTML={{ __html: highlightHeadings(sections) }}>
         
        </pre>
      </div>


<button
  onClick={downloadPDF}
  className="mt-4 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
>
  Download as PDF
</button>

      {/* Middle AI suggestions */}
      <div className="w-full max-w-[502px] h-[702px] rounded-[20px] border border-[#DCDCDC] bg-white p-4 sm:p-5 flex flex-col gap-5 font-inter font-normal overflow-y-auto custom-scrollbar">
        <p className="text-base sm:text-lg flex gap-1 items-center">
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
                strokeWidth="0.0512"
              />
            </svg>
          </span>
        </p>

        {suggestions.map(({ id, title, content }) => (
          <div
            key={id}
            className="w-full rounded-[20px] p-4 flex flex-col gap-3 bg-[#F5F5F5]"
          >
            <p className="font-medium text-sm sm:text-base">{title}</p>
            <p className="text-xs sm:text-sm">{content}</p>
            <div className="w-full flex gap-2 justify-end text-xs sm:text-sm font-medium">
              {replaced[id] ? (
                <>
                  <button
                    className="px-3 py-1 border rounded-full cursor-pointer hover:bg-gray-100"
                    onClick={() => toggleReplace(id)}
                  >
                    Undo
                  </button>
                  <div className="px-3 py-1 border rounded-full bg-[#C5F1DB] flex gap-1 items-center">
                    <img src="/Icons/Check.svg" alt="Check" /> Replaced
                  </div>
                </>
              ) : (
                <button
                  className="px-3 py-1 border rounded-full cursor-pointer hover:bg-gray-100"
                  onClick={() => toggleReplace(id)}
                >
                  Replace
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Right action buttons */}
      <div className="w-full max-w-[242px] h-auto flex flex-col gap-4 relative sticky top-[1vw]">
        {/* ATS Progress Card */}
        <div className="w-full h-[143px] px-2 py-6 bg-white border border-[#DCDCDC] text-xl sm:text-2xl font-manrope font-bold flex items-center justify-center gap-5 rounded-[30px] shadow-sm">
          <p>ATS</p>
          <ProgressIndicator percentage={85} />
        </div>

        {/* Recommend Templates */}
        <div className="w-full bg-[#FFD230] flex flex-col items-center justify-center rounded-[20px] overflow-hidden">
          <p className="text-xs sm:text-sm font-inter font-medium py-2">
            Recommend Templates
          </p>
          <div className="flex flex-col gap-3 items-center bg-white p-3 w-full rounded-[10px] border border-[#DCDCDC]">
            <img
              src="/img/demoCL.png"
              alt="img"
              className="w-full rounded-[10px] border border-[#DCDCDC]"
            />
            {/* Updated Show All Button */}
            <p
              className="flex items-center gap-2 px-3 py-1 border-2 border-[#3367E7] w-fit rounded-3xl font-manrope font-semibold text-xs sm:text-sm cursor-pointer transition hover:bg-[#3367E7] hover:text-white"
              onClick={handleOpenTemplates}
            >
              Show All
            </p>
          </div>
          {/* Template Popup */}
          {templatePopupOpen && (
            <div className="fixed inset-0 z-50 flex">
              {/* Left side blur */}
              <div
                className="relative w-[20%] bg-black/30 backdrop-blur-sm cursor-pointer"
                onClick={handleCloseTemplates}
              >
                <button
                  title="Left Button"
                  className="absolute top-1/2 -right-5   z-40 group flex justify-center items-center   w-11 h-11 transition-all duration-500 rounded-full  bg-gradient-to-t from-[#336EE7] to-[#4C95FB] hover:scale-90 cursor-pointer"
                >
                  <svg
                    className="h-6 w-6 text-white group-hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Right side white panel */}
              <div className=" w-[80%] bg-[#F7F7FB] h-full p-[50px] overflow-y-auto cursor-pointer">
                <h2 className="font-lexend text-[35px] font-bold mb-6">
                  Select Templates
                </h2>

                {/* Example templates */}
                <div className="w-full flex flex-wrap gap-[35px] items-center justify-center ">
                  {expResumes.map((resume, index) => (
                    <div
                      key={index}
                      className="group w-[221px] h-[288px] overflow-hidden relative hover:scale-110 transition duration-300 ease-in-out cursor-pointer border border-[#dcdcdc] "
                      onClick={() => openPopup(resume.img, resume.url)}
                    >
                      {/* Resume Image */}
                      <img
                        src={resume.img}
                        className="w-full"
                        alt={`Resume ${index + 1}`}
                      />

                      {/* Black Fade */}
                      <div className="w-full h-full transition duration-300 ease-in-out group-hover:bg-[rgba(0,0,0,0.27)] absolute top-0 rounded-[5px] "></div>

                      {/* Select Button with Router Link */}
                      <Link
                        to={resume.url}
                        className="absolute bottom-3 left-5 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-600 transition opacity-0 group-hover:opacity-100 z-10"
                        onClick={(e) => e.stopPropagation()} // Prevents popup trigger
                      >
                        Select This Template
                      </Link>

                      {/* Zoom Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                        <img
                          src="/Icons/zoom.svg"
                          className="w-10"
                          alt="Zoom Icon"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {popupImage && (
            <div
              className="fixed inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300"
              onClick={closePopup}
            >
              <div
                className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] transform transition-all duration-300 scale-100 hover:scale-[1.02]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-600 transition-transform duration-300 hover:rotate-90 shadow-lg cursor-pointer"
                  onClick={closePopup}
                >
                  ✕
                </button>

                {/* Image Container */}
                <div className="max-h-[80vh] overflow-y-auto custom-scrollbar p-4">
                  <img
                    src={popupImage}
                    alt="Expanded Resume"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Select Button */}
                <div className="p-6 text-center bg-gray-50">
                  <Link
                    to={popupBtn}
                    className="bg-blue-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Select This Template
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Download, Print, Mail, WhatsApp Actions */}
        <div className="w-full bg-[#FFFFFF] flex flex-col gap-3 items-center justify-center rounded-[16px] border border-[#DCDCDC] p-4">
          <div className="w-full font-lexend text-base border border-[#D3D9DE] text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-t from-[#336EE7] to-[#4C95FB] hover:from-[#2F61D3] hover:to-[#4387E5]">
            <img src="/Icons/download.svg" alt="download" />
            Download
          </div>

          <div className="flex justify-between w-full gap-2">
            <div className="w-full h-12 border-2 p-2 rounded-[9.6px] flex items-center justify-center cursor-pointer border-[#FE9A00] bg-[#FFFAF2] hover:bg-[#FFF5E6]">
              <img
                src="/Icons/print.svg"
                alt="printer"
                className="w-6 sm:w-8"
              />
            </div>
            <div className="w-full h-12 border-2 p-2 rounded-[9.6px] flex items-center justify-center cursor-pointer border-[#9810FA] bg-[#FAF3FF] hover:bg-[#F5E9FF]">
              <img src="/Icons/mail.svg" alt="mail" className="w-6 sm:w-8" />
            </div>
            <div className="w-full h-12 border-2 p-2 rounded-[9.6px] flex items-center justify-center cursor-pointer border-[#00A63E] bg-[#F2FBF5] hover:bg-[#E6F8EB]">
              <img
                src="/Icons/whatsapp.svg"
                alt="whatsapp"
                className="w-6 sm:w-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalPageOR;
