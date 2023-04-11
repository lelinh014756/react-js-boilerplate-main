import IconLogout from '@assets/svg/IconLogout';
import IconSettings from '@assets/svg/IconSettings';
import IconUser from '@assets/svg/IconUser';
import {
  Chip,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useAppSelector } from '@redux/hook';
import { borderRadius } from '@redux/selector/customizationSelector';
import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ProfileHandleCloseEvent } from 'types/layoutType';

import type { Event, ProfileMenuItem } from './types';

interface Props {
  handleClose: (event: ProfileHandleCloseEvent) => void;
  changeSelectedIndex: (val: number) => void;
  selectedIndex?: number;
}

const ProfileMenuList = ({
  handleClose,
  selectedIndex = 12,
  changeSelectedIndex,
}: Props) => {
  const navigate = useNavigate();

  const borderRadiusStore = useAppSelector(borderRadius);

  const handleLogout = async () => {
    console.log('Logout');
  };

  const handleListItemClick = (event: Event, index: number, route = '') => {
    changeSelectedIndex(index);
    handleClose(event);

    if (route !== undefined && route.length > 0) {
      navigate(route);
    }
  };

  // data menu list
  const menuList: ProfileMenuItem[] = [
    {
      key: 'account_setting',
      title: 'Account Settings',
      icon: IconSettings,
      action(event) {
        handleListItemClick(event, 0, '/');
      },
    },
    {
      key: 'social_profile',
      title: 'Social Profile',
      icon: IconUser,
      action(event) {
        handleListItemClick(event, 1, '/');
      },
      textComp: (
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item>
            <Typography variant="body2">Social Profile</Typography>
          </Grid>
          <Grid item>
            <Chip
              label="02"
              size="small"
              sx={(theme) => ({
                bgcolor: theme.palette.warning.dark,
                color: theme.palette.background.default,
              })}
            />
          </Grid>
        </Grid>
      ),
    },
    {
      key: 'logout',
      title: 'Logout',
      icon: IconLogout,
      action() {
        void handleLogout();
      },
    },
  ];

  // end data menu list

  return (
    <List
      component="nav"
      sx={(theme) => ({
        width: '100%',
        maxWidth: 350,
        minWidth: 300,
        backgroundColor: theme.palette.background.paper,
        borderRadius: '10px',
        [theme.breakpoints.down('md')]: {
          minWidth: '100%',
        },
        '& .MuiListItemButton-root': {
          mt: 0.5,
        },
      })}
    >
      {menuList.map((item, index) => {
        const Icon = item.icon;

        return (
          <ListItemButton
            key={item.key}
            sx={{
              borderRadius: `${borderRadiusStore}px`,
            }}
            selected={selectedIndex === index}
            onClick={(event) => {
              item.action(event);
            }}
          >
            <ListItemIcon>
              <Icon strokeWidth={1.5} width="1.3rem" />
            </ListItemIcon>
            <ListItemText
              primary={
                item.textComp ?? (
                  <Typography variant="body2">{item.title}</Typography>
                )
              }
            />
          </ListItemButton>
        );
      })}
    </List>
  );
};

export default memo(ProfileMenuList);
