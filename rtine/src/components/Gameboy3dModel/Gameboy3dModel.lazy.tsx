import React, { lazy, Suspense } from 'react';

const LazyGameboy3dModel = lazy(() => import('./Gameboy3dModel'));

const Gameboy3dModel = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyGameboy3dModel {...props} />
  </Suspense>
);

export default Gameboy3dModel;
