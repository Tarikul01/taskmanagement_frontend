import React, { Suspense, lazy } from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import LazyLoader from "../components/MasterLayout/LazyLoader";
const Progress = lazy(() => import("../components/Progress/Progress"));

const ProgressPage = () => {
  return (
    <MasterLayout>
      <Suspense fallback={<LazyLoader />}>
        <Progress />
      </Suspense>
    </MasterLayout>
  );
};

export default ProgressPage;
