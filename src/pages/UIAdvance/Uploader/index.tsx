import MainCard from '@components/Cards/MainCard';
import SubCard from '@components/Cards/SubCard';
import { Grid } from '@mui/material';
import { gridSpacing } from '@shared/constant';
import UploaderPreview from '@views/uploader/UploadePreview';
import React from 'react';

function Uploader() {
  return (
    <MainCard title="Uploader">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={6}>
          <SubCard title="Upload Preview">
            <UploaderPreview />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default Uploader;
