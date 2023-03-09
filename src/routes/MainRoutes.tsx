import MainLayout from '@layouts/MainLayout';
import Home from '@pages/Home';
import User from '@pages/User';
import List from '@pages/User/List';
import ListStyle1 from '@pages/User/List/ListStyle1';
import { type RouteObject } from 'react-router-dom';

const MainRoutes: RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '/', element: <Home /> },
    { path: 'dashboard', element: <Home /> },
    {
      path: 'user',
      element: <User />,
      children: [
        {
          path: 'list',
          element: <List />,
          children: [
            {
              path: 'list-1',
              element: <ListStyle1 />,
            },
            {
              path: 'list-2',
              element: <div>list 2</div>,
            },
          ],
        },
      ],
    },
  ],
};

export default MainRoutes;
