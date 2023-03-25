import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React, { useCallback } from 'react';

import { type AlertDialogProps } from './type';

function AlertDialog({
  // main
  open,
  dialogProps,
  // title
  title = "Use Google's location service?",
  titleProps,
  // content
  contentProps,
  descProps,
  description = 'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.',
  // actions
  actionsProps,
  customActions = false,
  actionsContent,
  btnLeftText,
  btnLeftProps,
  btnRightText,
  btnRightProps,
  // func
  onClose,
}: AlertDialogProps) {
  return (
    <Dialog {...dialogProps} open={open} onClose={onClose}>
      <DialogTitle {...titleProps}>{title}</DialogTitle>
      <DialogContent {...contentProps}>
        <DialogContentText {...descProps}>{description}</DialogContentText>
      </DialogContent>
      <DialogActions {...actionsProps}>
        {!customActions ? (
          <>
            <Button
              {...btnLeftProps}
              onClick={(e) => {
                onClose();
                if (btnLeftProps?.onClick !== undefined) {
                  btnLeftProps.onClick(e);
                }
              }}
            >
              {btnLeftText ?? 'Hủy'}
            </Button>
            <Button variant="contained" {...btnRightProps}>
              {btnRightText ?? 'Đồng ý'}
            </Button>
          </>
        ) : (
          actionsContent
        )}
      </DialogActions>
    </Dialog>
  );
}

export default AlertDialog;

export const AlertDialogView = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDialog = useCallback((status?: boolean) => {
    setOpen((prev) => status ?? !prev);
  }, []);

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
          toggleDialog();
        }}
      >
        Open Alert Dialog
      </Button>
      <AlertDialog
        open={open}
        btnRightProps={{
          onClick() {
            toggleDialog();
          },
        }}
        onClose={() => {
          toggleDialog();
        }}
      />
    </>
  );
};
