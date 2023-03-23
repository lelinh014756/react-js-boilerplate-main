import MainCard from '@components/Cards/MainCard';
import SubCard from '@components/Cards/SubCard';
import { Grid } from '@mui/material';
import { gridSpacing } from '@shared/constant';
import ProgressCircleBase from '@views/uiBasic/progress/ProgressCircleBase';
import ProgressCircleDeterminate from '@views/uiBasic/progress/ProgressCircleDeterminate';
import { ProgressCircleWithLabelView } from '@views/uiBasic/progress/ProgressCircleLabel';
import React from 'react';

const Progress = () => {
  return (
    <MainCard title="Progress Bar">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={3}>
          <SubCard title="Circle progress base">
            <ProgressCircleBase />
          </SubCard>
        </Grid>
        <Grid item xs={3}>
          <SubCard title="Circle progress determinate">
            <ProgressCircleDeterminate />
          </SubCard>
        </Grid>
        <Grid item xs={3}>
          <SubCard title="Circle progress with label">
            <ProgressCircleWithLabelView />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Progress;
