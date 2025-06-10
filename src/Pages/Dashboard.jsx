import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../components/commonComponents/Loading";

// Lazy load components
const Sidebar = lazy(() => import("../components/userDashboard/Sidebar"));
const DashboardContent = lazy(() =>
  import("../components/userDashboard/DashboardContent")
);
const MyResumes = lazy(() => import("../components/userDashboard/MyResumes"));
const JobSR = lazy(() => import("../components/userDashboard/JobSR"));
const LinkedInOP = lazy(() => import("../components/userDashboard/LinkedInOP"));
const MyCL = lazy(() => import("../components/userDashboard/MyCL"));
const Downloads = lazy(() => import("../components/userDashboard/Downloads"));
const AISugg = lazy(() => import("../components/userDashboard/AISugg"));

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-auto">
      <Suspense fallback={"Loading..."}>
        <Sidebar />
      </Suspense>

      {/* Main Content */}
      <div className="flex-1 pt-[20px] p-5 mt-5 lg:mt-0">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<DashboardContent />} />
            <Route path="my-resumes" element={<MyResumes />} />
            <Route path="job-specific-resume" element={<JobSR />} />
            <Route path="linkedin-optimization" element={<LinkedInOP />} />
            <Route path="my-cover-letters" element={<MyCL />} />
            <Route path="downloads" element={<Downloads />} />
            <Route path="ai-suggestions" element={<AISugg />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;
