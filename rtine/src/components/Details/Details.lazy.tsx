import React, { lazy, Suspense } from 'react';

const LazyDetails = lazy(() => import('./Details'));

const Details = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDetails {...props} />
  </Suspense>
);

export default Details;
