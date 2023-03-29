import MainCard from '@components/Cards/MainCard';
import SubCard from '@components/Cards/SubCard';
import { Grid } from '@mui/material';
import { gridSpacing } from '@shared/constant';
import MultipleOptions from '@views/componentsUI/autocomplete/MultipleOptions';
import { selectChipList } from '@views/componentsUI/select/data';
import React from 'react';

const Autocomplete = () => {
  return (
    <MainCard title="Select Control">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={4}>
          <SubCard title="Multiple options">
            <MultipleOptions
              options={selectChipList}
              placeholder="Favorites"
              label="multiple options"
            />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Autocomplete;
