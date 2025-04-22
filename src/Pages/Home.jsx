import React, { Suspense, lazy } from "react";
import Loading from "../components/commonComponents/Loading";

// Lazy-loaded components
const HeroSection = lazy(() =>
  import("../components/homeComponents/HeroSection")
);
const Steps = lazy(() => import("../components/homeComponents/Steps"));
const Subscription = lazy(() =>
  import("../components/homeComponents/Subscription")
);
const Features = lazy(() => import("../components/homeComponents/Features"));
const Templates = lazy(() => import("../components/homeComponents/Templates"));
const WhyResumeKaro = lazy(() =>
  import("../components/homeComponents/WhyResumeKaro")
);
const Reviews = lazy(() => import("../components/commonComponents/Reviews"));
const Join = lazy(() => import("../components/homeComponents/Join"));
const FAQ = lazy(() => import("../components/commonComponents/FAQ"));

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <>
        <HeroSection />
        <Steps />
        <Subscription />
        <Features />
        <Templates />
        <WhyResumeKaro />
        <Reviews />
        <Join />
        <FAQ />
      </>
    </Suspense>
  );
};

export default Home;
