import MainCard from '@components/Cards/MainCard';
import SubCard from '@components/Cards/SubCard';
import { Grid } from '@mui/material';
import { gridSpacing } from '@shared/constant';
import AlertActions from '@views/uiAdvance/alert/AlertActions';
import AlertBasic from '@views/uiAdvance/alert/AlertBasic';
import AlertNotIcon from '@views/uiAdvance/alert/AlertNotIcon';

function Alert() {
  return (
    <MainCard title="Dialog">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={6}>
          <SubCard title="Alert basic" contentSX={{ textAlign: 'center' }}>
            <AlertBasic />
          </SubCard>
        </Grid>
        <Grid item xs={6}>
          <SubCard title="Alert not icon" contentSX={{ textAlign: 'center' }}>
            <AlertNotIcon />
          </SubCard>
        </Grid>
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
