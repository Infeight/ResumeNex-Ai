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
    <>
      {/* HeroSection loads independently */}
      <Suspense fallback={<Loading />}>
        <HeroSection />
      </Suspense>

      {/* Steps section loads independently */}
      <Suspense fallback={<Loading />}>
        <Steps />
      </Suspense>

      {/* Subscription section loads independently */}
      <Suspense fallback={<Loading />}>
        <Subscription />
      </Suspense>

      {/* Features section loads independently */}
      <Suspense fallback={<Loading />}>
        <Features />
      </Suspense>

      {/* Templates section loads independently */}
      <Suspense fallback={<Loading />}>
        <Templates />
      </Suspense>

      {/* WhyResumeKaro section loads independently */}
      <Suspense fallback={<Loading />}>
        <WhyResumeKaro />
      </Suspense>

      {/* Reviews section loads independently */}
      <Suspense fallback={<Loading />}>
        <Reviews />
      </Suspense>

      {/* Join section loads independently */}
      <Suspense fallback={<Loading />}>
        <Join />
      </Suspense>

      {/* FAQ section loads independently */}
      <Suspense fallback={<Loading />}>
        <FAQ />
      </Suspense>
    </>
  );
};

export default Home;
