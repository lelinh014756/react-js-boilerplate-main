import IconPictureInPicture from '@assets/svg/IconPictureInPicture';

import { type MenuItem } from './type';

const forms: MenuItem = {
  id: 'forms',
  title: 'Forms',
  type: 'group',
  children: [
    {
      id: 'components',
      title: 'Components',
      type: 'collapse',
      icon: IconPictureInPicture,
      children: [
        {
          id: 'select',
          title: 'Select',
          type: 'item',
          url: '/components/select',
        },
        {
          id: 'autocomplete',
          title: 'Autocomplete',
          type: 'item',
          url: '/components/autocomplete',
        },
      ],
    },
  ],
};

export default forms;
