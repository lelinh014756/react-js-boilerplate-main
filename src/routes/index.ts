import Home from '../pages/Home';
import Login from '../pages/Login';

interface RoutesData {
  path: string;
  component: () => JSX.Element;
  layout?: () => JSX.Element;
}

const publicRoutes: RoutesData[] = [{ path: '/login', component: Login }];

const privateRoutes: RoutesData[] = [{ path: '/', component: Home }];

export { privateRoutes, publicRoutes };
