import React from "react";
import { Link } from "react-router-dom";

const Subscription = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <section className="my-8 sm:my-12 md:my-16 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-14 rounded-3xl sm:rounded-[30px] bg-gradient-to-t from-[#336EE7] to-[#4c95fb] flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 md:gap-10 shadow-lg">
        <div className="flex flex-col gap-3 sm:gap-4 text-center md:text-left w-full">
          <p className="font-manrope font-bold text-lg sm:text-xl md:text-[22px] lg:text-[25px] text-white max-w-[750px] mx-auto md:mx-0">
            No Monthly or Yearly Subscription
          </p>
          <p className="font-inter font-bold text-2xl sm:text-3xl md:text-[32px] lg:text-[35px] text-white max-w-[750px] mx-auto md:mx-0">
            Just Pay{" "}
            <span className="font-extrabold text-3xl sm:text-4xl md:text-[44px] lg:text-5xl font-manrope">
              ₹9
            </span>
            , Edit and Download
          </p>
        </div>

        <Link to="/templates" className="mx-auto md:mx-0">
          <button
            className="text-base sm:text-lg md:text-xl lg:text-[20px] px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-2xl sm:rounded-3xl font-inter font-semibold bg-gradient-to-b from-[#336EE7] to-[#4c95fb] hover:from-[#2f65d3] hover:to-[#3b82f6] hover:scale-105 active:scale-95 hover:shadow-2xl transition-all border-white border-2 text-white whitespace-nowrap"
            aria-label="Build your ATS-friendly resume for ₹9"
          >
            Build Your ATS Friendly Resume Now
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Subscription;
