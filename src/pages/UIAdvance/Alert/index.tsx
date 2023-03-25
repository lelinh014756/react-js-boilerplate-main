import MainCard from '@components/Cards/MainCard';
import SubCard from '@components/Cards/SubCard';
import { Grid } from '@mui/material';
import { gridSpacing } from '@shared/constant';
import AlertActions from '@views/uiAdvance/alert/AlertActions';

function Alert() {
  return (
    <MainCard title="Dialog">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={6}>
          <SubCard
            title="Alert with actions"
            contentSX={{ textAlign: 'center' }}
          >
            <AlertActions />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default Alert;
