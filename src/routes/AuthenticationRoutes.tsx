import Loadable from '@components/Loader/Loadable';
import MinimalLayout from '@layouts/MinimalLayout';
import Auth from '@pages/Auth';
import { lazy } from 'react';
import { type RouteObject } from 'react-router-dom';

// project imports

const AuthLogin = Loadable(lazy(async () => import('@pages/Auth/Login')));
const AuthRegister = Loadable(lazy(async () => import('@pages/Auth/Register')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes: RouteObject = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: 'auth',
      element: <Auth />,
      children: [
        {
          path: 'login',
          element: <AuthLogin />,
        },
        {
          path: 'register',
          element: <AuthRegister />,
        },
      ],
    },
  ],
};

export default AuthenticationRoutes;
