/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import loadable from 'utils/loadable';
import LoadingIndicator from '../components/LoadingIndicator';

export const Dashboard = loadable(() => import('./Dashboard/index'), {
  fallback: <LoadingIndicator />,
});

export const AddressDetail = loadable(() => import('./AddressDetail/index'), {
  fallback: <LoadingIndicator />,
});
