/* eslint-disable @typescript-eslint/no-misused-promises */
import User1 from '@assets/images/users/user-round.svg';
import IconLogout from '@assets/svg/IconLogout';
import IconSettings from '@assets/svg/IconSettings';
import IconUser from '@assets/svg/IconUser';
import MainCard from '@components/Cards/MainCard';
import Transitions from '@components/Extended/Transitions';
import SearchInput from '@components/Input/SearchInput';
import { type ProfileHandleCloseEvent } from '@core/type/layoutType';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Switch,
  Tooltip,
  Typography,
} from '@mui/material';
// material-ui
import { useTheme } from '@mui/material/styles';
import { useAppSelector } from '@redux/hook';
import { borderRadius } from '@redux/selector/customizationSelector';
import { type MouseEvent, useEffect, useRef, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useNavigate } from 'react-router-dom';

import UpgradePlanCard from './UpgradePlanCard';

function ProfileSection() {
  const theme = useTheme();
  const borderRadiusStore = useAppSelector(borderRadius);
  const navigate = useNavigate();

  const [sdm, setSdm] = useState(true);
  const [value, setValue] = useState('');
  const [notification, setNotification] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const handleLogout = async () => {
    console.log('Logout');
  };

  const handleClose = (event: ProfileHandleCloseEvent) => {
    if (
      anchorRef?.current !== null &&
      anchorRef.current.contains(event.target as Node | null)
    ) {
      return;
    }
    setOpen(false);
  };

  const handleListItemClick = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    index: number,
    route = ''
  ) => {
    setSelectedIndex(index);
    handleClose(event);

    if (route !== undefined && route.length > 0) {
      navigate(route);
    }
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current && !open && anchorRef.current != null) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Tooltip title="Profile">
        <Chip
          sx={{
            height: '48px',
            alignItems: 'center',
            borderRadius: '27px',
            transition: 'all .2s ease-in-out',
            borderColor: theme.palette.primary.light,
            backgroundColor: theme.palette.primary.light,
            '&[aria-controls="menu-list-grow"], &:hover': {
              borderColor: theme.palette.primary.main,
              background: `${theme.palette.primary.main}!important`,
              color: theme.palette.primary.light,
              '& svg': {
                stroke: theme.palette.primary.light,
              },
            },
            '& .MuiChip-label': {
              lineHeight: 0,
            },
          }}
          icon={
            <Avatar
              src={User1}
              sx={{
                ...theme.typography.mediumAvatar,
                margin: '8px 0 8px 8px !important',
                cursor: 'pointer',
              }}
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              color="inherit"
            />
          }
          label={
            <IconSettings
              strokeWidth={1.5}
              width="1.5rem"
              color={theme.palette.primary.main}
            />
          }
          variant="outlined"
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          color="primary"
        />
      </Tooltip>

      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 14],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener
                onClickAway={(e) => {
                  handleClose(e as ProfileHandleCloseEvent);
                }}
              >
                <MainCard
                  border={false}
                  elevation={16}
                  content={false}
                  boxShadow
                  shadow={theme.shadows[16]}
                >
                  <Box sx={{ p: 2, pb: 0 }}>
                    <Stack>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography variant="h4">Good Morning,</Typography>
                        <Typography
                          component="span"
                          variant="h4"
                          sx={{ fontWeight: 400 }}
                        >
                          Johne Doe
                        </Typography>
                      </Stack>
                      <Typography variant="subtitle2">Project Admin</Typography>
                    </Stack>
                    <SearchInput
                      id="input-search-profile"
                      value={value}
                      placeholder="Search profile options"
                      onChange={(e) => {
                        setValue(e.target.value);
                      }}
                    />

                    <Divider />
                  </Box>
                  <PerfectScrollbar
                    style={{
                      height: '100%',
                      maxHeight: 'calc(100vh - 250px)',
                      overflowX: 'hidden',
                    }}
                  >
                    <Box sx={{ p: 2 }}>
                      <UpgradePlanCard />
                      <Divider />
                      <Card
                        sx={{
                          bgcolor: theme.palette.primary.light,
                          my: 2,
                        }}
                      >
                        <CardContent>
                          <Grid container spacing={3} direction="column">
                            <Grid item>
                              <Grid
                                item
                                container
                                alignItems="center"
                                justifyContent="space-between"
                              >
                                <Grid item>
                                  <Typography variant="subtitle1">
                                    Start DND Mode
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Switch
                                    color="primary"
                                    checked={sdm}
                                    onChange={(e) => {
                                      setSdm(e.target.checked);
                                    }}
                                    name="sdm"
                                    size="small"
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <Grid
                                item
                                container
                                alignItems="center"
                                justifyContent="space-between"
                              >
                                <Grid item>
                                  <Typography variant="subtitle1">
                                    Allow Notifications
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Switch
                                    checked={notification}
                                    onChange={(e) => {
                                      setNotification(e.target.checked);
                                    }}
                                    name="sdm"
                                    size="small"
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                      <Divider />
                      <List
                        component="nav"
                        sx={{
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
                        }}
                      >
                        <ListItemButton
                          sx={{
                            borderRadius: `${borderRadiusStore}px`,
                          }}
                          selected={selectedIndex === 0}
                          onClick={(event) => {
                            handleListItemClick(
                              event,
                              0,
                              '/user/account-profile/profile1'
                            );
                          }}
                        >
                          <ListItemIcon>
                            <IconSettings strokeWidth={1.5} width="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="body2">
                                Account Settings
                              </Typography>
                            }
                          />
                        </ListItemButton>
                        <ListItemButton
                          sx={{
                            borderRadius: `${borderRadiusStore}px`,
                          }}
                          selected={selectedIndex === 1}
                          onClick={(event) => {
                            handleListItemClick(
                              event,
                              1,
                              '/user/social-profile/posts'
                            );
                          }}
                        >
                          <ListItemIcon>
                            <IconUser strokeWidth={1.5} width="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Grid
                                container
                                spacing={1}
                                justifyContent="space-between"
                              >
                                <Grid item>
                                  <Typography variant="body2">
                                    Social Profile
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Chip
                                    label="02"
                                    size="small"
                                    sx={{
                                      bgcolor: theme.palette.warning.dark,
                                      color: theme.palette.background.default,
                                    }}
                                  />
                                </Grid>
                              </Grid>
                            }
                          />
                        </ListItemButton>
                        <ListItemButton
                          sx={{
                            borderRadius: `${borderRadiusStore}px`,
                          }}
                          selected={selectedIndex === 4}
                          onClick={handleLogout}
                        >
                          <ListItemIcon>
                            <IconLogout strokeWidth={1.5} width="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="body2">Logout</Typography>
                            }
                          />
                        </ListItemButton>
                      </List>
                    </Box>
                  </PerfectScrollbar>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
}

export default ProfileSection;
