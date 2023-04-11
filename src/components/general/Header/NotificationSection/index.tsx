/* eslint-disable @typescript-eslint/no-explicit-any */
import MainCard from '@components/Cards/MainCard';
import Transitions from '@components/Extended/Transitions';
import {
  Button,
  CardActions,
  ClickAwayListener,
  Divider,
  Grid,
  Paper,
  Popper,
  useMediaQuery,
} from '@mui/material';
import {} from '@mui/material/OutlinedInput/';
import { useTheme } from '@mui/material/styles';
import { useCallback, useEffect, useRef, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import NotificationBtn from './NotificationBtn';
import NotificationHead from './NotificationHead';
import NotificationList from './NotificationList';
import NotificationOptions from './NotificationOptions';

// ==============================|| NOTIFICATION ||============================== //

const NotificationSection = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'), {
    noSsr: true,
  });

  const [open, setOpen] = useState(false);
  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef<React.ElementRef<typeof NotificationBtn>>(null);

  const handleToggle = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  const handleClose = (event: MouseEvent | globalThis.TouchEvent) => {
    if (anchorRef.current?.contains?.(event.target as Node | null) === true) {
      return;
    }
    setOpen(false);
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
      <NotificationBtn
        ref={anchorRef}
        handleToggle={handleToggle}
        open={open}
      />
      <Popper
        placement={matchesXs ? 'bottom' : 'bottom-end'}
        open={open}
        anchorEl={anchorRef.current?.element}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [matchesXs ? 5 : 0, 20],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions
            position={matchesXs ? 'top' : 'top-right'}
            in={open}
            {...TransitionProps}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  border={false}
                  elevation={16}
                  content={false}
                  boxShadow
                  shadow={theme.shadows[16]}
                >
                  <Grid container direction="column" spacing={2}>
                    <Grid item xs={12}>
                      <NotificationHead />
                    </Grid>
                    <Grid item xs={12}>
                      <PerfectScrollbar
                        style={{
                          height: '100%',
                          maxHeight: 'calc(100vh - 205px)',
                          overflowX: 'hidden',
                        }}
                      >
                        <NotificationOptions />
                        <NotificationList />
                      </PerfectScrollbar>
                    </Grid>
                  </Grid>
                  <Divider />
                  <CardActions sx={{ p: 1.25, justifyContent: 'center' }}>
                    <Button size="small" disableElevation>
                      View All
                    </Button>
                  </CardActions>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default NotificationSection;
