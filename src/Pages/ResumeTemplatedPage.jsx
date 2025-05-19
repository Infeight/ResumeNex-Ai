import React, { useState, Suspense, lazy } from "react";
import Loading from "../components/commonComponents/Loading";

// Lazy-loaded components
const ExpAndFresherResume = lazy(() =>
  import("../components/AIResume/ExpAndFresherResume")
);
const FresherResume = lazy(() =>
  import("../components/AIResume/FresherResume")
);
const InternResume = lazy(() => import("../components/AIResume/InternResume"));
const Reviews = lazy(() => import("../components/commonComponents/Reviews"));
const FAQ = lazy(() => import("../components/commonComponents/FAQ"));

const ResumeTemplatedPage = () => {
  const [selectedExperience, setSelectedExperience] = useState("");
  const [submittedExperience, setSubmittedExperience] = useState("");

  // Handle filter selection
  const handleFilterChange = (e) => {
    setSelectedExperience(e.target.value);
  };

  // Submit filter
  const handleSubmit = () => {
    setSubmittedExperience(selectedExperience);
  };

  // Clear filter
  const handleClearFilter = () => {
    setSelectedExperience("");
    setSubmittedExperience("");
  };
  return (
    <Suspense fallback={<Loading></Loading>}>
      <>
        <section className="max-w-[1340px] min-w-auto mx-auto flex flex-col justify-center items-center gap-[30px] py-[40px]">
          <p className="font-lexend font-semibold text-[30px]">
            Select ATS Friendly Resume that boosts your hiring process by 50x
          </p>

          {/* Filter Section */}
          <div className="flex justify-between w-full items-center px-12 py-6 border-b border-[#D7DDE5] font-manrope font-semibold text-[18px]">
            <div className="flex items-center gap-6">
              {/* Filter Button */}
              <button className="flex gap-2">
                <img src="/Icons/filter.svg" alt="Filter Icon" />
                Filter
              </button>

              {/* Dropdown */}
              <select
                className="pl-[20px] py-[10px] rounded-full text-gray-600 text-base focus:outline-none ring-2 ring-[#E2E8F0] focus:ring-2 focus:ring-blue-500 transition relative appearance-none"
                value={selectedExperience}
                onChange={handleFilterChange}
              >
                <option value="" disabled>
                  Select Experience Level
                </option>
                <option value="Intern">Intern</option>
                <option value="Experienced">Experienced</option>
              </select>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="cursor-pointer bg-[#4C95FB] px-[40px] py-[10px] text-white rounded-full hover:bg-[#4c95fbb7] transition shadow-md"
              >
                Submit
              </button>
            </div>

            {/* Clear Filter Button (Only Visible When Filter is Applied) */}
            {submittedExperience && (
              <div className="relative ">
                <button
                  onClick={handleClearFilter}
                  className="px-4 py-[10px] rounded-full ring-2 ring-[#E2E8F0] text-gray-600  transition hover:bg-gray-100 hover:scale-95 cursor-pointer"
                >
                  Clear Filter
                </button>
              </div>
            )}
          </div>

          {/* Resume Components */}
          <div className="w-full flex flex-col gap-[30px]">
            {submittedExperience === "" && (
              <>
                <ExpAndFresherResume />
                <InternResume />
              </>
            )}
            {submittedExperience === "Experienced" && <ExpAndFresherResume />}
            {submittedExperience === "Intern" && <InternResume />}
          </div>
        </section>

        <Reviews />
        <FAQ />
      </>
    </Suspense>
  );
};

export default ResumeTemplatedPage;
