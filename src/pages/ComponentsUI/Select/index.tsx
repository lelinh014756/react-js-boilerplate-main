import MainCard from '@components/Cards/MainCard';
import SubCard from '@components/Cards/SubCard';
import { Grid } from '@mui/material';
import { gridSpacing } from '@shared/constant';
import { selectChipList } from '@views/componentsUI/select/data';
import SelectChip from '@views/componentsUI/select/SelectChip';
import React from 'react';

const Select = () => {
  return (
    <MainCard title="Select Control">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={4}>
          <SubCard title="Select with chip">
            <SelectChip
              data={selectChipList}
              id="select-chip"
              label="Select Chip"
            />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Select;
