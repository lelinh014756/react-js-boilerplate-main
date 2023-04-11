import Transitions from '@components/Extended/Transitions';
import {
  Button,
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useAppSelector } from '@redux/hook';
import { borderRadius, opened } from '@redux/selector/customizationSelector';
import React, { memo, type MouseEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { type NavCollapseProps } from 'types/layoutType';

import {
  changeCssItemIconDrawer,
  changeCssNavItemDrawer,
  cssButtonWrapIcon,
} from '../utils';
import CollapseChevron from './CollapseChevron';
import CollapseChildren from './CollapseChildren';
import CollapseIcon from './CollapseIcon';

function NavCollapse({ menu, level }: NavCollapseProps) {
  const theme = useTheme();

  const { pathname } = useLocation();

  const borderRadiusStore = useAppSelector(borderRadius);

  const drawerOpened = useAppSelector(opened);

  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  const [open, setOpen] = useState(false);
  const [openPopper, setOpenPopper] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  // --- utils constant --- //
  const upMdDrawerClose = matchUpMd && !drawerOpened; // Check menu đã đóng với screen > md
  const isSelected = selected === menu.id;
  const mountByLevel = upMdDrawerClose ? level > 1 : true; // Check mount nếu level trên 1 + screen trên md + menu đã đóng
  const stateEvent = upMdDrawerClose ? openPopper : open; // Trả về state của sự kiện đang chạy (dựa theo biến upMdDrawerClose)
  // --- end utils constant --- //

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (!upMdDrawerClose) {
      setSelected(selected === null ? menu.id : null);
    }

    if (upMdDrawerClose) {
      setOpenPopper(!openPopper);
    } else {
      setOpen(!open);
    }
  };

  const handleMouse = (event: MouseEvent<HTMLDivElement>) => {
    if (upMdDrawerClose) {
      event.stopPropagation();
      setAnchorEl(event.currentTarget);

      setOpenPopper(true);
    }
  };

  React.useEffect(() => {
    const currentIndex = pathname
      .toString()
      .split('/')
      .findIndex((id) => id === menu.id);
    if (currentIndex > -1) {
      setSelected(menu.id);
      setOpen(true);
    } else {
      if (open) {
        setOpen(false);
      }
      if (selected != null) {
        setSelected(null);
      }
    }
  }, [pathname]);

  return (
    <>
      <ListItemButton
        sx={{
          borderRadius: `${borderRadiusStore}px`,
          mb: 0.5,
          backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
          ...changeCssNavItemDrawer({
            level,
            closed: upMdDrawerClose,
          }),
        }}
        disableTouchRipple={upMdDrawerClose && level < 2}
        selected={isSelected && !upMdDrawerClose}
        onClick={handleClick}
        onMouseEnter={handleMouse}
        onMouseLeave={() => {
          if (upMdDrawerClose) {
            setOpenPopper(false);
          }
        }}
      >
        <Button
          sx={cssButtonWrapIcon({ theme })}
          disableTouchRipple={upMdDrawerClose ? level > 1 : true}
        >
          <ListItemIcon
            sx={{
              my: 'auto',
              minWidth: menu.icon === undefined ? 18 : 36,
              borderRadius: `${borderRadiusStore}px`,
              ...changeCssItemIconDrawer({
                closed: upMdDrawerClose && level < 2,
                active: isSelected && upMdDrawerClose,
                theme,
              }),
            }}
          >
            <CollapseIcon
              icon={menu.icon}
              level={level}
              isSelected={isSelected}
              upMdDrawerClose={upMdDrawerClose}
            />
          </ListItemIcon>
        </Button>
        {mountByLevel && (
          <>
            <ListItemText
              primary={
                <Typography
                  variant={isSelected ? 'h5' : 'body1'}
                  color="inherit"
                  sx={{ my: 'auto' }}
                >
                  {menu.title}
                </Typography>
              }
              secondary={
                menu.caption !== undefined ? (
                  <Typography
                    variant="caption"
                    sx={{ ...theme.typography.subMenuCaption }}
                    display="block"
                    gutterBottom
                  >
                    {menu.caption}
                  </Typography>
                ) : undefined
              }
            />
            <CollapseChevron opened={stateEvent} isAddCss={upMdDrawerClose} />
          </>
        )}
        {upMdDrawerClose && (
          <Popper
            open={openPopper}
            anchorEl={anchorEl}
            placement="right-start"
            sx={{
              zIndex: 1201,
            }}
          >
            {({ TransitionProps }) => (
              <Transitions
                position="top-left"
                in={openPopper}
                {...TransitionProps}
              >
                <Paper elevation={6} sx={{ minWidth: '178px' }}>
                  <CollapseChildren data={menu.children} level={level} />
                </Paper>
              </Transitions>
            )}
          </Popper>
        )}
      </ListItemButton>
      {!upMdDrawerClose && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CollapseChildren data={menu.children} level={level} />
        </Collapse>
      )}
    </>
  );
}

export default memo(NavCollapse);
