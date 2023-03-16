import React ,{Suspense,lazy} from 'react';
import MasterLayout from '../components/MasterLayout/MasterLayout';
import LazyLoader from '../components/MasterLayout/LazyLoader';
const CompletePage=lazy(()=> import("../components/Completed/Completed"))

const CompletedPage = () => {
  return (
    <MasterLayout>
    <Suspense  fallback={<LazyLoader/>} >

    <CompletePage/>
</Suspense>

</MasterLayout>
  )
}

export default CompletedPage
