/* eslint-disable @typescript-eslint/no-misused-promises */
import MainCard from '@components/Cards/MainCard';
import Transitions from '@components/Extended/Transitions';
import { Box, ClickAwayListener, Divider, Paper, Popper } from '@mui/material';
// material-ui
import { useTheme } from '@mui/material/styles';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import type { ProfileHandleCloseEvent } from 'types/layoutType';

import ProfileChip from './ProfileChip';
import ProfileHead from './ProfileHead';
import ProfileMenuList from './ProfileMenuList';
import ProfileSwitchSetting from './ProfileSwitchSetting';
import UpgradePlanCard from './UpgradePlanCard';

function ProfileSection() {
  const theme = useTheme();

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef<React.ElementRef<typeof ProfileChip>>(null);

  const changeSelectedIndex = useCallback((val: number) => {
    setSelectedIndex(val);
  }, []);

  const handleClose = (event: ProfileHandleCloseEvent) => {
    if (
      anchorRef?.current !== null &&
      anchorRef.current.contains(event.target as Node | null)
    ) {
      return;
    }
    setOpen(false);
  };

  const handleToggle = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current && !open && anchorRef.current != null) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <ProfileChip ref={anchorRef} open={open} handleToggle={handleToggle} />

      <Popper
        placement="bottom-end"
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
                  <ProfileHead />
                  <PerfectScrollbar className="h-full max-h-[calc(100vh_-_250px)]">
                    <Box sx={{ p: 2 }}>
                      {/* Upgrade Plan Card */}
                      <UpgradePlanCard />
                      <Divider />
                      {/* End Upgrade Plan Card */}

                      {/* Profile Switch Setting */}
                      <ProfileSwitchSetting />
                      <Divider />
                      {/* End Profile Switch Setting */}

                      <ProfileMenuList
                        selectedIndex={selectedIndex}
                        changeSelectedIndex={changeSelectedIndex}
                        handleClose={handleClose}
                      />
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

export default memo(ProfileSection);
