import React,{Suspense,lazy} from 'react';
import MasterLayout from '../components/MasterLayout/MasterLayout';
import LazyLoader from '../components/MasterLayout/LazyLoader';
const Notfound=lazy(()=> import("../components/Notfound/NotFound"))

const Page404 = () => {
  return (
    <MasterLayout>
    <Suspense  fallback={<LazyLoader/>} >


    <Notfound/>
</Suspense>

</MasterLayout>
  )
}

export default Page404
