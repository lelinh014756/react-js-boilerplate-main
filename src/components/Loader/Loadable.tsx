/* eslint-disable react/display-name */
import React, { Suspense } from 'react';

function Loadable<T>(
  Component: React.ComponentType<T & JSX.IntrinsicAttributes>
) {
  const ComponentWithExtraInfo = (props: T & JSX.IntrinsicAttributes) => (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );

  return ComponentWithExtraInfo;
}

export default Loadable;
