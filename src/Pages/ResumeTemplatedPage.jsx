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
        <section className="max-w-[1340px] min-w-auto mx-auto flex flex-col justify-center items-center gap-[30px] py-[40px] px-4 sm:px-6">
          <p className="font-lexend font-semibold text-[20px] sm:text-[30px] text-center">
            Select ATS Friendly Resume that boosts your hiring process by 50x
          </p>

          {/* Filter Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between w-full items-center px-4 sm:px-12 py-6 border-b border-[#D7DDE5] font-manrope font-semibold text-[16px] sm:text-[18px] gap-6">
            {/* Container for Filter button + Dropdown side by side always */}
            <div className="flex items-center gap-4 w-full sm:w-auto">
              {/* Filter Button */}
              <button className="flex items-center justify-center gap-2 w-auto whitespace-nowrap">
                <img src="/Icons/filter.svg" alt="Filter Icon" />
                Filter
              </button>

              {/* Dropdown */}
              <select
                className="pl-5 py-2.5 rounded-full text-gray-600 text-base focus:outline-none ring-2 ring-[#E2E8F0] focus:ring-blue-500 transition flex-grow appearance-none bg-white relative"
                value={selectedExperience}
                onChange={handleFilterChange}
                style={{ backgroundImage: "none" }} // Remove arrow in inline style for better cross-browser support
              >
                <option value="" disabled>
                  Select Experience Level
                </option>
                <option value="Intern">Intern</option>
                <option value="Experienced">Experienced</option>
              </select>
            </div>

            <div className="w-full flex gap-5 flex-col lg:flex-row  justify-end">
              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="cursor-pointer bg-[#4C95FB] px-8 py-2.5 text-white rounded-full hover:bg-[#4c95fbb7] transition shadow-md w-full sm:w-auto"
              >
                Submit
              </button>

              {/* Clear Filter Button */}
              {submittedExperience && (
                <div className="w-full sm:w-auto text-center sm:text-right">
                  <button
                    onClick={handleClearFilter}
                    className="px-4 py-2.5 rounded-full ring-2 ring-[#E2E8F0] text-gray-600 transition hover:bg-gray-100 hover:scale-95 cursor-pointer w-full sm:w-auto"
                  >
                    Clear Filter
                  </button>
                </div>
              )}
            </div>
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
