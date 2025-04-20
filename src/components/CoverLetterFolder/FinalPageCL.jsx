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
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_1.png",
      url: "/cover_letter_templates/steps/cover_letter_001",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_2.png",
      url: "/cover_letter_templates/steps/cover_letter_002",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_3.png",
      url: "/cover_letter_templates/steps/cover_letter_003",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_4.png",
      url: "/cover_letter_templates/steps/cover_letter_004",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_5.png",
      url: "/cover_letter_templates/steps/cover_letter_005",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_6.png",
      url: "/cover_letter_templates/steps/cover_letter_006",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_7.png",
      url: "/cover_letter_templates/steps/cover_letter_007",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_8.png",
      url: "/cover_letter_templates/steps/cover_letter_008",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_9.png",
      url: "/cover_letter_templates/steps/cover_letter_009",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_10.png",
      url: "/cover_letter_templates/steps/cover_letter_010",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_11.png",
      url: "/cover_letter_templates/steps/cover_letter_011",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_12.png",
      url: "/cover_letter_templates/steps/cover_letter_012",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_13.png",
      url: "/cover_letter_templates/steps/cover_letter_013",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_14.png",
      url: "/cover_letter_templates/steps/cover_letter_014",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_15.png",
      url: "/cover_letter_templates/steps/cover_letter_015",
    },
  ];

  return (
    <>
      <section className="max-w-[1440px] border mx-auto min-w-auto bg-amber-400 flex ">
        {/* Left Section - Cover Letter Display */}
        <div className="min-w-[689px] p-[30px] bg-[#E8ECF5] border border-[#D3D9DE]">
          <img src="/img/demoCL.png" alt="CL" className="w-full" />
        </div>
        {/* Right Section - Actions btns*/}
        <div className="max-w-[751px] w-full flex flex-col justify-between bg-white p-[30px]">
          {/* select templates */}
          <div className="flex flex-col gap-5 border border-[#D3D9DE] bg-[#FDFDFE] p-[20px] rounded-[30px] overflow-x-visible">
            {/* Header */}
            <div className="flex items-center gap-10">
              <h1 className="font-lexend font-semibold text-[30px] text-[#212529]">
                Change Templates
              </h1>
              <div className="flex gap-[16px]">
                <div className="cursor-pointer" onClick={handlePrev}>
                  <img src="/Icons/LeftArrow.svg" alt="LeftArrow" />
                </div>
                <div className="cursor-pointer" onClick={handleNext}>
                  <img src="/Icons/RightArrow.svg" alt="RightArrow" />
                </div>
              </div>
            </div>

            {/* Carousel */}
            <div className="overflow-x-visible w-full">
              <Swiper
                ref={swiperRef}
                slidesPerView={3} // Show 3 slides
                spaceBetween={20}
                modules={[Navigation]}
                className="w-full"
              >
                {coverLetter.map((resume, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="group h-[288px] overflow-hidden relative hover:scale-95 transition duration-300 ease-in-out cursor-pointer border border-[#dcdcdc] rounded-[10px]"
                      onClick={() => openPopup(resume.img, resume.url)}
                    >
                      <img
                        src={resume.img}
                        className="w-full  object-cover"
                        alt={`Resume ${index + 1}`}
                      />
                      <div className="absolute inset-0 transition duration-300 ease-in-out group-hover:bg-[rgba(0,0,0,0.27)] rounded-[5px]"></div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUrlForBtn(resume.url);
                        }}
                        className="absolute bottom-3 left-5 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-600 transition opacity-0 group-hover:opacity-100 z-10"
                      >
                        Select This Template
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                        <img
                          src="/Icons/zoom.svg"
                          className="w-10"
                          alt="Zoom Icon"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="border border-[#D3D9DE] bg-[#FDFDFE]">asdasdas</div>
        </div>
      </section>

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
              <div
                className="bg-blue-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  handleUrlForBtn(popupBtn);
                }}
              >
                Select This Template
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FinalPageCL;
