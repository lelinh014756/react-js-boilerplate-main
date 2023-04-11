import MainCard from '@components/Cards/MainCard';
import SubCard from '@components/Cards/SubCard';
import { Grid } from '@mui/material';
import { gridSpacing } from '@shared/constant';
import UploaderAvatarView from '@views/uiAdvance/uploader/UploaderAvatar/UploaderAvatarView';
import UploaderPreview from '@views/uiAdvance/uploader/UploaderPreview';
import UploaderWallView from '@views/uiAdvance/uploader/UploaderWall/UploaderWallView';
import React from 'react';

function Uploader() {
  return (
    <MainCard title="Uploader">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
          <SubCard title="Uploader basic & preview" className="h-full">
            <UploaderPreview />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Uploader wall & preview" className="h-full">
            <UploaderWallView />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SubCard
            title="Uploader Avatar"
            className="h-full"
            contentSX={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <UploaderAvatarView />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default Uploader;
