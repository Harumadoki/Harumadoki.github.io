import React, { lazy, Suspense } from 'react';

const LazyThreeDimensionalProjects = lazy(() => import('./ThreeDimensionalProjects'));

const ThreeDimensionalProjects = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyThreeDimensionalProjects {...props} />
  </Suspense>
);

export default ThreeDimensionalProjects;
