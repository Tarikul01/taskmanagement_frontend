import React, { Suspense, lazy } from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import LazyLoader from "../components/MasterLayout/LazyLoader";
const Forget = lazy(() => import("../components/ForgotPass/ForgotPass"));

const ForgotPassPage = () => {
  return (
    <MasterLayout>
      <Suspense fallback={<LazyLoader />}>
        <Forget />
      </Suspense>
    </MasterLayout>
  );
};

export default ForgotPassPage;
