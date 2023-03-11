import { useRoutes } from 'react-router-dom';

import AuthenticationRoutes from './AuthenticationRoutes';
import MainRoutes from './MainRoutes';

function Routes() {
  return useRoutes([MainRoutes, AuthenticationRoutes]);
}

export default Routes;
