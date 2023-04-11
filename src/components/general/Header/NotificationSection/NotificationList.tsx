/* eslint-disable tailwindcss/no-custom-classname */
// assets
// material-ui
import User1 from '@assets/images/svg/user-round.svg';
import { Divider, List } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Fragment } from 'react';

import NotificationItem from './NotificationItem';
import type { NotifyData } from './types';

// data
const dataList: NotifyData[] = [
  {
    title: 'John Doe',
    avatarUrl: User1,
    desc: 'It is a long established fact that a reader will be distracted',
    time: '2 min ago',
    refType: 'normal',
  },
  {
    title: 'Store Verification Done',
    desc: 'We have successfully received your request.',
    time: '2 min ago',
    refType: 'store',
  },
  {
    title: 'Check Your Mail.',
    desc: 'All done! Now check your inbox as you&apos;re in for a sweet treat!',
    time: '2 min ago',
    refType: 'mail',
  },
  {
    title: 'John Doe',
    avatarUrl: User1,
    desc: '',
    time: '2 min ago',
    refType: 'upload',
    files: {
      title: 'demo.jpg',
      date: '21 Jan 2020',
      type: 'image',
      url: '',
    },
  },
  {
    title: 'John Doe',
    avatarUrl: User1,
    desc: 'It is a long established fact that a reader will be distracted',
    time: '2 min ago',
    refType: 'status',
    status: {
      refType: 'activated',
      text: 'Confirmation of Account.',
    },
  },
];

// ==============================|| NOTIFICATION LIST ITEM ||============================== //

function NotificationList() {
  const theme = useTheme();

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 330,
        py: 0,
        borderRadius: '10px',
        [theme.breakpoints.down('md')]: {
          maxWidth: 300,
        },
        '& .MuiListItemSecondaryAction-root': {
          top: 22,
        },
        '& .MuiDivider-root': {
          my: 0,
        },
        '& .list-container': {
          pl: 7,
        },
      }}
    >
      {dataList.map((item, index) => (
        <Fragment key={index}>
          <NotificationItem data={item} />
          {index + 1 < dataList.length && <Divider />}
        </Fragment>
      ))}
    </List>
  );
}

export default NotificationList;
