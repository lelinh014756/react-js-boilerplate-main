// ==============================|| APPLICATION MENU ITEMS ||============================== //

import IconUserCheck from '@assets/svg/IconUserCheck';

import { type MenuItem } from './type';

const application: MenuItem = {
  id: 'application',
  title: 'Application',
  type: 'group',
  children: [
    {
      id: 'user',
      title: 'Users',
      type: 'collapse',
      icon: IconUserCheck,
      children: [
        {
          id: 'account-profile',
          title: 'Account Profile',
          type: 'collapse',
          children: [
            {
              id: 'profile-1',
              title: 'Profile 1',
              type: 'item',
            },
          ],
        },
        {
          id: 'list',
          title: 'List',
          type: 'collapse',
          children: [
            {
              id: 'list-1',
              title: 'Style 1',
              type: 'item',
              url: '/user/list/list-1',
              breadcrumbs: true,
            },
            {
              id: 'list-2',
              title: 'Style 2',
              type: 'item',
              url: '/user/list/list-2',
              breadcrumbs: true,
            },
          ],
        },
      ],
    },
  ],
};

export default application;
