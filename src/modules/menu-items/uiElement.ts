import IconBrush from '@assets/svg/IconBrush';
import IconTools from '@assets/svg/IconTools';

import { type MenuItem } from './type';

const uiElement: MenuItem = {
  id: 'ui-element',
  title: 'UI Element',
  type: 'group',
  children: [
    {
      id: 'advance',
      title: 'Advance',
      type: 'collapse',
      icon: IconTools,
      children: [
        {
          id: 'alert',
          title: 'Alert',
          type: 'item',
          url: '/advance/alert',
        },
        {
          id: 'dialog',
          title: 'Dialog',
          type: 'item',
          url: '/advance/dialog',
        },
        {
          id: 'uploader',
          title: 'Uploader',
          type: 'item',
          url: '/advance/uploader',
        },
      ],
    },
    {
      id: 'basic',
      title: 'Basic',
      type: 'collapse',
      icon: IconBrush,
      children: [
        {
          id: 'progress',
          title: 'Progress',
          type: 'item',
          url: '/basic/progress',
        },
      ],
    },
  ],
};

export default uiElement;
