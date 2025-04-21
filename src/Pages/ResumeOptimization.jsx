import React from "react";

const ResumeOptimization = () => {
  return (
    <section className="relative border w-full mx-auto flex flex-col justify-center items-center gap-[50px] py-[50px] text-[#212529] bg-[#F7F7FB]">
      <p className="font-lexend font-semibold text-[30px] flex gap-3">
        <span
          className="text-[#E3B200] flex items-center gap-1  "
          style={{ textShadow: "0px 0px 100px #E3B200" }}
        >
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1523 0.171875C15.3992 4.09924 17.0706 7.80203 19.8535 10.585C22.6363 13.3676 26.3386 15.0382 30.2656 15.2852V15.2979C26.3385 15.5448 22.6363 17.2172 19.8535 20C17.0707 22.7828 15.3993 26.485 15.1523 30.4121H15.1387C14.8998 26.608 13.3251 23.0145 10.6973 20.2637L10.4385 19.999C7.73221 17.2929 4.15616 15.638 0.349609 15.3223C4.03394 15.0134 7.50224 13.4004 10.1748 10.8438L10.4385 10.585C13.2215 7.80196 14.8922 4.09936 15.1387 0.171875H15.1523Z"
              fill="#E3B200"
              stroke="black"
              stroke-width="0.0512"
            />
          </svg>
          Optimize{" "}
        </span>
        Your Resume In Just One Click
      </p>

      <div className="relative">
        <div className="flex flex-col gap-[35px] w-[981px] mx-auto p-[50px] bg-white rounded-[34px] border border-[#DCDCDC] [box-shadow:0px_5px_16px_rgba(8,15,52,0.06)]">
          <hr className="border-t border-[#DCDCDC]" />
        </div>
        <img
          src="/Icons/OPResumeSvg.svg"
          alt=""
          className="w-[222px] rotate-[17deg] absolute right-[-50px] bottom-[-10px]transition-all duration-300 ease-in-out group-hover:right-0 group-hover:bottom-0"
        />
      </div>
    </section>
  );
};

export default ResumeOptimization;
