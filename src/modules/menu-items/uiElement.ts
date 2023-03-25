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
          id: 'uploader',
          title: 'Uploader',
          type: 'item',
          url: '/advance/uploader',
        },
        {
          id: 'dialog',
          title: 'Dialog',
          type: 'item',
          url: '/advance/dialog',
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
