import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React, { useCallback } from 'react';

function AlertDialog() {
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
      <Dialog
        open={open}
        onClose={() => {
          toggleDialog();
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              toggleDialog();
            }}
          >
            Disagree
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              toggleDialog();
            }}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AlertDialog;
