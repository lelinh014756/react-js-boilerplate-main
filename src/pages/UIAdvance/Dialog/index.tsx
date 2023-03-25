import MainCard from '@components/Cards/MainCard';
import SubCard from '@components/Cards/SubCard';
import { Grid } from '@mui/material';
import { gridSpacing } from '@shared/constant';
import { AlertDialogView } from '@views/uiAdvance/dialog/AlertDialog';
import React from 'react';

function Dialog() {
  return (
    <MainCard title="Dialog">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={4}>
          <SubCard title="Alert Dialog" contentSX={{ textAlign: 'center' }}>
            <AlertDialogView />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default Dialog;
