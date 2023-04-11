import SubCard from '@components/Cards/SubCard';
import { Grid, Slider, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { borderRadius } from '@redux/selector/customizationSelector';
import { setBorderRadius as setRadiusStore } from '@redux/slice/customizationSlice';
import React, { memo } from 'react';

// concat 'px'
function valueText(value: number) {
  return `${String(value)}px`;
}

const CustomRadius = () => {
  const dispatch = useAppDispatch();

  const radiusStore = useAppSelector(borderRadius);

  const changeRadius = (_event: Event, newValue: number | number[]) => {
    const value = typeof newValue === 'number' ? newValue : newValue[0] ?? 0;
    dispatch(setRadiusStore(value));
  };

  return (
    <SubCard title="Border Radius">
      <Grid
        item
        xs={12}
        container
        spacing={2}
        alignItems="center"
        sx={{ mt: 2.5 }}
      >
        <Grid item>
          <Typography variant="h6" color="secondary">
            4px
          </Typography>
        </Grid>
        <Grid item xs>
          <Slider
            size="small"
            value={radiusStore}
            onChange={changeRadius}
            getAriaValueText={valueText}
            valueLabelDisplay="on"
            aria-labelledby="discrete-slider-small-steps"
            marks
            step={2}
            min={4}
            max={24}
            color="secondary"
            sx={{
              '& .MuiSlider-valueLabel': {
                color: 'secondary.light',
              },
            }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6" color="secondary">
            24px
          </Typography>
        </Grid>
      </Grid>
    </SubCard>
  );
};

export default memo(CustomRadius);
