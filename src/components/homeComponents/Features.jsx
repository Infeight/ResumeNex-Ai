import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto py-14 md:py-20 lg:py-[80px] flex flex-col gap-12 md:gap-16 lg:gap-20 items-center justify-center px-6">
      <h2 className="font-lexend font-semibold text-3xl md:text-4xl lg:text-[36px] text-center leading-tight">
        <span className="blueGradient">AI-Powered </span>
        Features for a <span className="purpleGradient">Winning</span> Resume
      </h2>

      <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-10 px-2 sm:px-6 lg:px-12 items-center justify-center ">
        {/* Feature Card */}
        {featureData.map((feature, idx) => (
          <div
            key={idx}
            className={`w-full sm:w-[calc(50%-1rem)] lg:w-[500px] ${
              feature.link ? "cursor-pointer" : ""
            }`}
          >
            <Link to={feature.link || "#"}>
              <div
                className={`w-full h-auto min-h-[220px] flex flex-col sm:flex-row rounded-2xl gap-5 p-6 md:p-8 border transition duration-300 transform hover:scale-105 hover:shadow-xl ${feature.bgColor} ${feature.borderColor} ${feature.shadow}`}
              >
                <div className="w-full sm:w-[240px] flex flex-col justify-between gap-5">
                  <div>
                    <p className="text-xl md:text-[22px] font-manrope font-semibold text-[#151515] mb-1">
                      {feature.title}
                    </p>
                    <p
                      className={`font-lexend font-semibold text-lg md:text-xl lg:text-[22px] ${feature.highlightColor}`}
                    >
                      {feature.subtitle}
                    </p>
                  </div>
                  <button className="w-fit font-outfit text-white font-medium text-sm md:text-base py-2.5 px-5 rounded-lg bg-gradient-to-t from-[#336EE7] to-[#4C95FB] hover:brightness-110 transition">
                    {feature.btnText}
                  </button>
                </div>
                <div className="relative flex justify-center sm:justify-end">
                  <img
                    src={feature.img}
                    alt={feature.alt}
                    loading="lazy"
                    className="w-3/4 sm:w-auto max-w-[200px] relative -bottom-4 sm:-bottom-8"
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

const featureData = [
  {
    title: "AI Resume Builder",
    subtitle: "Craft a Job-Winning Resume In Minutes!",
    highlightColor: "text-[#008236]",
    bgColor: "bg-[#F0FDF4]",
    borderColor: "border-[#B9F8CF]",
    shadow: "shadow-green-50",
    img: "/img/feature1.avif",
    alt: "AI Resume Builder",
    link: "/templates",
    btnText: " Build Your Resume",
  },
  {
    title: "AI Resume Optimization",
    subtitle: "Make Your Existing Resume Stand Out!",
    highlightColor: "text-[#c4930e]",
    bgColor: "bg-[#FEFCE8]",
    borderColor: "border-[#FFF085]",
    shadow: "shadow-yellow-50",
    img: "/img/feature2.avif",
    alt: "AI Resume Optimization",
    btnText: "Optimize Your Resume",
  },
  {
    title: "AI LinkedIn Optimization",
    subtitle: "Make Your Profile Shine!",
    highlightColor: "text-[#0078D4]",
    bgColor: "bg-[#F0F9FF]",
    borderColor: "border-[#B8E6FE]",
    shadow: "shadow-blue-50",
    img: "/img/feature3.avif",
    alt: "AI LinkedIn Optimization",
    btnText: "Boost Your LinkedIn",
  },
  {
    title: "AI - Skill Recommendation",
    subtitle: "Find the Best Skills to Boost Your Resume!",
    highlightColor: "text-[#7F22FE]",
    bgColor: "bg-[#F5F3FF]",
    borderColor: "border-[#DDD6FF]",
    shadow: "shadow-purple-50",
    img: "/img/feature1.avif",
    alt: "AI Skill Recommendation",
    link: "/templates",
    btnText: "Find Skills Now",
  },
];

export default Features;
