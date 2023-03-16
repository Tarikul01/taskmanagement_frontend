import React, { Suspense, lazy } from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import LazyLoader from "../components/MasterLayout/LazyLoader";
const Cancel=lazy(()=> import("../components/Canceled/Canceled"))

const CanceledPage = () => {
  return (
    <MasterLayout>
      <Suspense fallback={<LazyLoader />}>
        <Cancel/>
      </Suspense>
    </MasterLayout>
  );
};

export default CanceledPage;
