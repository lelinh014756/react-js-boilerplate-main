import MainCard from '@components/Cards/MainCard';
import SubCard from '@components/Cards/SubCard';
import { Grid } from '@mui/material';
import { gridSpacing } from '@shared/constant';
import UploaderPreview from '@views/uiAdvance/uploader/UploaderPreview';
import UploaderWallView from '@views/uiAdvance/uploader/UploaderWall/UploaderWallView';
import React from 'react';

function Uploader() {
  return (
    <MainCard title="Uploader">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={6}>
          <SubCard title="Uploader basic & preview" className="h-full">
            <UploaderPreview />
          </SubCard>
        </Grid>
        <Grid item xs={6}>
          <SubCard title="Uploader wall & preview" className="h-full">
            <UploaderWallView />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default Uploader;
