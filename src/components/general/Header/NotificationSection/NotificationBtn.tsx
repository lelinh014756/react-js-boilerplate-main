import IconBell from '@assets/svg/IconBell';
import { Avatar, Box, ButtonBase, Tooltip } from '@mui/material';
import React, { useImperativeHandle, useRef } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLDivElement> {
  handleToggle: () => void;
  open: boolean;
}

interface Ref {
  element: HTMLElement | null;
  contains: (other: Node | null) => boolean;
  focus: () => void;
}

const NotificationBtn: React.ForwardRefRenderFunction<Ref, Props> = (
  { handleToggle, open, ...props },
  ref
) => {
  const notifyBtnRef = useRef<HTMLDivElement | null>(null);

  useImperativeHandle(ref, () => ({
    ...ref,
    element: notifyBtnRef.current,
    contains(other) {
      return (
        notifyBtnRef?.current !== null && notifyBtnRef.current.contains(other)
      );
    },
    focus() {
      notifyBtnRef.current?.focus();
    },
  }));

  return (
    <Box
      sx={(theme) => ({
        ml: 2,
        mr: 3,
        [theme.breakpoints.down('md')]: {
          mr: 2,
        },
      })}
      {...props}
    >
      <Tooltip title="Notification">
        <ButtonBase sx={{ borderRadius: '12px' }}>
          <Avatar
            variant="rounded"
            sx={(theme) => ({
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&[aria-controls="menu-list-grow"],&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light,
              },
            })}
            ref={notifyBtnRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            color="inherit"
          >
            <IconBell strokeWidth={1.5} width="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Tooltip>
    </Box>
  );
};

NotificationBtn.displayName = 'NotificationBtn';

export default React.memo(React.forwardRef(NotificationBtn));
