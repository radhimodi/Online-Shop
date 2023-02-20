import React from 'react';
import loadable from 'utils/loadable';
import { LoaderContainer } from 'containers/components/Loader';

export default loadable(() => import('./index'), {
  fallback: <LoaderContainer />,
});
