import IconBrush from '@assets/svg/IconBrush';
import IconTools from '@assets/svg/IconTools';

import { type MenuItem } from './type';

const uiElement: MenuItem = {
  id: 'ui-element',
  title: 'UI Element',
  type: 'group',
  children: [
    {
      id: 'ui-advance',
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
      ],
    },
    {
      id: 'ui-basic',
      title: 'Basic',
      type: 'collapse',
      icon: IconBrush,
      children: [
        {
          id: 'progress-bar',
          title: 'Progress',
          type: 'item',
          url: '/basic/progress',
        },
      ],
    },
  ],
};

export default uiElement;
