/* eslint-disable tailwindcss/no-custom-classname */
import { Close } from '@mui/icons-material';
import { Alert, Button, IconButton, Stack } from '@mui/material';

function AlertActions() {
  return (
    <Stack spacing={2}>
      <Alert className="MuiDisabledIcon" onClose={() => {}}>
        This is a close icon — check it out!
      </Alert>
      <Alert
        className="MuiDisabledIcon"
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is a submit button — check it out!
      </Alert>
      <Alert
        className="MuiDisabledIcon"
        action={
          <>
            <Button color="inherit" size="small">
              UNDO
            </Button>
            <IconButton size="small" color="inherit" aria-label="close">
              <Close fontSize="small" />
            </IconButton>
          </>
        }
      >
        This is a actions alert — check it out!
      </Alert>
    </Stack>
  );
}

export default AlertActions;
