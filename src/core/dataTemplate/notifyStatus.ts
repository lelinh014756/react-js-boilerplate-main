import { type NotifyOption } from 'types/layoutType';

const notifyStatus: NotifyOption[] = [
  {
    label: 'All Notification',
    value: 'all',
  },
  {
    label: 'New',
    value: 'new',
  },
  {
    label: 'Unread',
    value: 'unread',
  },
  {
    label: 'Other',
    value: 'other',
  },
];

export default notifyStatus;
