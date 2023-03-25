import {
  type ButtonProps,
  type DialogActionsProps,
  type DialogContentProps,
  type DialogContentTextProps,
  type DialogProps,
  type DialogTitleProps,
} from '@mui/material';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AlertDialogProps {
  // main
  open: boolean;
  dialogProps?: Omit<DialogProps, 'open' | 'onCLose'>;
  // title
  title?: string;
  titleProps?: DialogTitleProps;
  // content
  contentProps?: DialogContentProps;
  descProps?: DialogContentTextProps;
  description?: string;
  // actions
  actionsProps?: DialogActionsProps;
  customActions?: boolean;
  actionsContent?: React.ReactNode;
  btnLeftText?: string;
  btnLeftProps?: ButtonProps;
  btnRightText?: string;
  btnRightProps?: ButtonProps;
  // func
  onClose: () => void;
}
