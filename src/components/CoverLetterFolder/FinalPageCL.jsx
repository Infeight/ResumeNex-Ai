import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const FinalPageCL = () => {
  const swiperRef = useRef(null);

  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (img, url) => {
    setPopupImage(img);
    setPopupBtn(url);
  };

  const closePopup = () => {
    setPopupImage(null);
    setPopupBtn(null);
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const coverLetter = [
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_1.avif",
      url: "/cover_letter_templates/steps/cover_letter_001",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_2.avif",
      url: "/cover_letter_templates/steps/cover_letter_002",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_3.avif",
      url: "/cover_letter_templates/steps/cover_letter_003",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_4.avif",
      url: "/cover_letter_templates/steps/cover_letter_004",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_5.avif",
      url: "/cover_letter_templates/steps/cover_letter_005",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_6.avif",
      url: "/cover_letter_templates/steps/cover_letter_006",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_7.avif",
      url: "/cover_letter_templates/steps/cover_letter_007",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_8.avif",
      url: "/cover_letter_templates/steps/cover_letter_008",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_9.avif",
      url: "/cover_letter_templates/steps/cover_letter_009",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_10.avif",
      url: "/cover_letter_templates/steps/cover_letter_010",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_11.avif",
      url: "/cover_letter_templates/steps/cover_letter_011",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_12.avif",
      url: "/cover_letter_templates/steps/cover_letter_012",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_13.avif",
      url: "/cover_letter_templates/steps/cover_letter_013",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_14.avif",
      url: "/cover_letter_templates/steps/cover_letter_014",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_15.avif",
      url: "/cover_letter_templates/steps/cover_letter_015",
    },
  ];

  return (
    <>
      <section className="w-full max-w-[1700px] mx-auto bg-amber-400 flex flex-col md:flex-row">
        {/* Left Section - Cover Letter Display */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 bg-[#E8ECF5] border border-[#D3D9DE]">
          <img
            src="/img/demoCL.png"
            alt="Cover Letter"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Section - Actions Buttons */}
        <div className="w-full md:w-1/2 flex flex-col gap-10 bg-white p-4 sm:p-6">
          {/* Select Templates */}
          <div className="flex flex-col gap-5 border border-[#D3D9DE] bg-[#FDFDFE] p-4 sm:p-5 rounded-[30px]">
            {/* Header */}
            <div className="flex items-center justify-between gap-4">
              <h1 className="font-lexend font-semibold text-xl sm:text-2xl md:text-3xl text-[#212529]">
                Change Templates
              </h1>
              <div className="flex gap-4">
                <button className="cursor-pointer" onClick={handlePrev}>
                  <img
                    src="/Icons/LeftArrow.svg"
                    alt="Left Arrow"
                    className="w-6 h-6"
                  />
                </button>
                <button className="cursor-pointer" onClick={handleNext}>
                  <img
                    src="/Icons/RightArrow.svg"
                    alt="Right Arrow"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>

            {/* Carousel */}
            <div className="w-full">
              <Swiper
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  840: { slidesPerView: 2, spaceBetween: 15 },
                  1024: { slidesPerView: 3, spaceBetween: 20 },
                }}
                modules={[Navigation]}
                className="w-full"
              >
                {coverLetter.map((resume, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="group h-64 sm:h-72 overflow-hidden relative hover:scale-95 transition duration-300 ease-in-out cursor-pointer border border-[#dcdcdc] rounded-[10px]"
                      onClick={() => openPopup(resume.img, resume.url)}
                    >
                      <img
                        src={resume.img}
                        className="w-full  object-cover"
                        alt={`Resume ${index + 1}`}
                      />
                      <div className="absolute inset-0 transition duration-300 ease-in-out group-hover:bg-[rgba(0,0,0,0.27)] rounded-[5px]"></div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUrlForBtn(resume.url);
                        }}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-bold hover:bg-blue-600 transition opacity-0 group-hover:opacity-100 z-10 text-nowrap"
                        aria-label={`Select Cover Letter Template ${index + 1}`}
                      >
                        Select This Template
                      </button>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                        <img
                          src="/Icons/zoom.svg"
                          className="w-8 sm:w-10"
                          alt="Zoom Icon"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* btns */}
          <div className="flex flex-col gap-4 md:gap-5 ">
            <div className="w-full px-4 py-4 md:px-6 md:py-5 bg-[#E3F6FF] border border-[#74D4FF] flex flex-col md:flex-row justify-between rounded-2xl gap-4">
              <div className="flex flex-wrap gap-3">
                <div className="font-lexend text-base md:text-lg border border-[#D3D9DE] text-[#212529] px-3 py-2 rounded-xl bg-white flex items-center gap-2 cursor-pointer">
                  <img
                    src="/Icons/unSelect.svg"
                    alt="unSelect"
                    className="w-4 md:w-5"
                  />
                  <img src="/Icons/PDF.svg" alt="PDF" className="w-5 md:w-6" />
                  PDF
                </div>
                <div className="font-lexend text-base md:text-lg border border-[#D3D9DE] text-[#212529] px-3 py-2 rounded-xl bg-white flex items-center gap-2 cursor-pointer">
                  <img
                    src="/Icons/unSelect.svg"
                    alt="unSelect"
                    className="w-4 md:w-5"
                  />
                  <img
                    src="/Icons/DOCX.svg"
                    alt="Docx"
                    className="w-5 md:w-6"
                  />
                  Docx
                </div>
              </div>
              <div className="font-lexend text-base md:text-lg border border-[#D3D9DE] text-white px-4 py-2 rounded-xl flex items-center gap-2 cursor-pointer bg-gradient-to-t from-[#336EE7] to-[#4C95FB]">
                <img
                  src="/Icons/download.svg"
                  alt="download"
                  className="w-5 md:w-6"
                />
                Download
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
              <div className="w-full  font-lexend font-semibold text-base md:text-lg border-2 px-6 py-2 rounded-xl flex items-center justify-center gap-3 cursor-pointer text-[#FE9A00] border-[#FE9A00] bg-[#FFFAF2]">
                <img
                  src="/Icons/print.svg"
                  alt="printer"
                  className="w-5 md:w-6"
                />
                Print
              </div>
              <div className="w-full font-lexend font-semibold text-base md:text-lg border-2 px-6 py-2 rounded-xl flex items-center justify-center gap-3 cursor-pointer text-[#9810FA] border-[#9810FA] bg-[#FAF3FF]">
                <img src="/Icons/mail.svg" alt="mail" className="w-5 md:w-6" />
                Email
              </div>
              <div className="w-full font-lexend font-semibold text-base md:text-lg border-2 px-6 py-2 rounded-xl flex items-center justify-center gap-3 cursor-pointer text-[#00A63E] border-[#00A63E] bg-[#F2FBF5]">
                <img
                  src="/Icons/whatsapp.svg"
                  alt="whatsapp"
                  className="w-5 md:w-6"
                />
                Whatsapp
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={closePopup}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-red-500 text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-red-600 transition-transform duration-300 hover:rotate-90 shadow-lg cursor-pointer"
              onClick={closePopup}
            >
              ✕
            </button>

            {/* Image Container */}
            <div className="max-h-[75vh] overflow-y-auto custom-scrollbar p-4">
              <img
                src={popupImage}
                alt="Expanded Resume"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Select Button */}
            <div className="p-4 sm:p-6 text-center bg-gray-50">
              <button
                className="bg-blue-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl text-base sm:text-lg font-semibold shadow-md hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  handleUrlForBtn(popupBtn);
                }}
              >
                Select This Template
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FinalPageCL;
