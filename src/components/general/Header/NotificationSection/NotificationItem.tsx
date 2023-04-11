/* eslint-disable tailwindcss/no-custom-classname */
import IconBuildingStore from '@assets/svg/IconBuildingStore';
import IconMailbox from '@assets/svg/IconMailbox';
import IconPhoto from '@assets/svg/IconPhoto';
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import chipStatus from '@shared/helpers/chipStatus';
import { memo } from 'react';

import type { NotifyController, NotifyData } from './types';

interface Props {
  data: NotifyData;
}

// styles
const ListItemWrapper = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  padding: 16,
  '&:hover': {
    background: theme.palette.primary.light,
  },
  '& .MuiListItem-root': {
    padding: 0,
    '& .MuiTypography-subtitle1': {
      lineHeight: 1.5,
    },
  },
}));

const NotificationItem = ({ data }: Props) => {
  const theme = useTheme();

  const notifyState: NotifyController = {
    normal: {
      component: (
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2">{data.desc}</Typography>
          </Grid>
        </Grid>
      ),
      action() {
        console.log(data.refType);
      },
    },
    store: {
      avatarComp: (
        <Avatar
          sx={{
            color: theme.palette.success.dark,
            backgroundColor: theme.palette.success.light,
            border: 'none',
            borderColor: theme.palette.success.main,
          }}
        >
          <IconBuildingStore strokeWidth={1.5} width="1.3rem" />
        </Avatar>
      ),
      component: (
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2">{data.desc}</Typography>
          </Grid>
        </Grid>
      ),
      action() {
        console.log(data.refType);
      },
    },
    mail: {
      avatarComp: (
        <Avatar
          sx={{
            color: theme.palette.primary.dark,
            backgroundColor: theme.palette.primary.light,
            border: 'none',
            borderColor: theme.palette.primary.main,
          }}
        >
          <IconMailbox strokeWidth={1.5} width="1.3rem" />
        </Avatar>
      ),
      component: (
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2">{data.desc}</Typography>
          </Grid>
        </Grid>
      ),
      action() {
        console.log(data.refType);
      },
    },
    upload: {
      action() {
        console.log(data.refType);
      },
      component: (
        <Grid container direction="column" className="list-container">
          <Grid item xs={12} sx={{ pb: 1 }}>
            <Typography component="span" variant="subtitle2">
              Uploaded two file on &nbsp;
              <Typography component="span" variant="h6">
                {data.files?.date ?? ''}
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Card
                  sx={{
                    backgroundColor: theme.palette.secondary.light,
                  }}
                >
                  <CardContent>
                    <Grid container direction="column">
                      <Grid item xs={12}>
                        <Stack direction="row" spacing={2}>
                          <IconPhoto strokeWidth={1.5} width="1.3rem" />
                          <Typography variant="subtitle1">
                            {data.files?.title ?? 'File upload'}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ),
    },
    status: {
      component: (
        <>
          <Grid container direction="column" className="list-container">
            <Grid item xs={12} sx={{ pb: 1 }}>
              <Typography variant="subtitle2">{data.desc}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item>
                  <Chip
                    label={data.status?.text}
                    sx={chipStatus(data.status?.refType ?? 'activated', theme)}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      ),
      action() {
        console.log(data.refType);
      },
    },
  };

  const state = notifyState[data.refType];

  return (
    <ListItemWrapper onClick={state.action}>
      <ListItem alignItems="center">
        <ListItemAvatar>
          {state.avatarComp ?? <Avatar alt="John Doe" src={data.avatarUrl} />}
        </ListItemAvatar>
        <ListItemText
          primary={<Typography variant="subtitle1">{data.title}</Typography>}
          secondary={
            <Typography variant="caption" display="block" gutterBottom>
              {data.time}
            </Typography>
          }
          sx={{
            mt: 0,
          }}
        />
      </ListItem>
      {state.component}
    </ListItemWrapper>
  );
};

export default memo(NotificationItem);
