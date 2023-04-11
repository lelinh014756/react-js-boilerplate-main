import User1 from '@assets/images/svg/user-round.svg';
import IconSettings from '@assets/svg/IconSettings';
import { Avatar, Chip, Tooltip, useTheme } from '@mui/material';
import React, { forwardRef, memo, useImperativeHandle, useRef } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLDivElement> {
  handleToggle: () => void;
  open: boolean;
}

interface Ref {
  element: HTMLElement | null;
  contains: (other: Node | null) => boolean;
  focus: () => void;
}

const ProfileChip: React.ForwardRefRenderFunction<Ref, Props> = (
  { handleToggle, open },
  ref
) => {
  // ref
  const chipBtnRef = useRef<HTMLDivElement | null>(null);

  useImperativeHandle(ref, () => ({
    ...ref,
    element: chipBtnRef.current,
    contains(other) {
      return chipBtnRef?.current !== null && chipBtnRef.current.contains(other);
    },
    focus() {
      chipBtnRef.current?.focus();
    },
  }));

  // theme
  const theme = useTheme();

  return (
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
            ref={chipBtnRef}
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
        ref={chipBtnRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
    </Tooltip>
  );
};

ProfileChip.displayName = 'ProfileChip';

export default memo(forwardRef(ProfileChip));
